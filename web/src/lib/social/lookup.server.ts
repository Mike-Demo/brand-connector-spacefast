// Core lookup service. Framework-agnostic so it can back single lookups today and
// bulk jobs / an MCP server later without changes.
import { parse, type HTMLElement } from "node-html-parser";
import { PLATFORMS, SOCIAL_HOSTS, matchProfile, normalizeHost, type PlatformId } from "./platforms";
import type {
  DomainCandidate,
  LookupResult,
  PlatformResult,
  ProfileEntry,
  ReciprocalStatus,
  SignalRating,
} from "./types";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

// SSRF guard: only plain public web addresses may be fetched. Rejects non-http(s)
// schemes, credentials, IP literals, and loopback/private/internal hostnames.
export function isPublicHttpUrl(url: string): boolean {
  let u: URL;
  try {
    u = new URL(url);
  } catch {
    return false;
  }
  if (u.protocol !== "http:" && u.protocol !== "https:") return false;
  if (u.username || u.password) return false;
  const host = u.hostname.toLowerCase();
  if (!host || host === "localhost" || host.endsWith(".localhost")) return false;
  if (host.endsWith(".local") || host.endsWith(".internal") || host.endsWith(".lan") || host.endsWith(".home"))
    return false;
  // IPv6 literal (URL hostname keeps brackets)
  if (host.startsWith("[")) return false;
  // IPv4 literal: block every private/loopback/reserved range
  const v4 = host.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (v4) {
    const [a, b] = [Number(v4[1]), Number(v4[2])];
    if (
      a === 0 ||
      a === 10 ||
      a === 127 ||
      (a === 100 && b >= 64 && b <= 127) ||
      (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168) ||
      (a === 192 && b === 0) ||
      (a === 198 && (b === 18 || b === 19)) ||
      a >= 224
    )
      return false;
  }
  // Bare numbers (e.g. http://2130706433) and single-label hosts are not public sites
  if (/^\d+$/.test(host) || !host.includes(".")) return false;
  return true;
}

async function fetchText(
  url: string,
  timeoutMs = 10000,
  accept = "text/html,application/xhtml+xml",
): Promise<{ text: string; finalUrl: string } | null> {
  try {
    let current = url;
    // Follow redirects manually so every hop is re-validated against the SSRF guard.
    for (let hops = 0; hops <= 5; hops++) {
      if (!isPublicHttpUrl(current)) return null;
      const res = await fetch(current, {
        headers: { "user-agent": UA, accept },
        redirect: "manual",
        signal: AbortSignal.timeout(timeoutMs),
      });
      if (res.status >= 300 && res.status < 400) {
        const location = res.headers.get("location");
        if (!location) return null;
        current = new URL(location, current).toString();
        continue;
      }
      if (!res.ok) return null;
      return { text: (await res.text()).slice(0, 3_000_000), finalUrl: current };
    }
    return null;
  } catch {
    return null;
  }
}

export function normalizeInputUrl(input: string): string {
  const trimmed = input.trim();
  const withProto = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  const u = new URL(withProto);
  return `${u.protocol}//${u.host}${u.pathname}`;
}

interface RawFinding {
  platformId: PlatformId;
  handle: string;
  tag: string;
  url: string;
  source: "jsonld" | "site";
  evidence: string;
}

function collectSameAs(node: unknown, out: string[]): void {
  if (Array.isArray(node)) {
    node.forEach((n) => collectSameAs(n, out));
    return;
  }
  if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
      if (k === "sameAs") {
        if (typeof v === "string") out.push(v);
        else if (Array.isArray(v)) v.forEach((x) => typeof x === "string" && out.push(x));
      } else collectSameAs(v, out);
    }
  }
}

function findOrgName(node: unknown): string | null {
  if (Array.isArray(node)) {
    for (const n of node) {
      const r = findOrgName(n);
      if (r) return r;
    }
    return null;
  }
  if (node && typeof node === "object") {
    const o = node as Record<string, unknown>;
    const t = o["@type"];
    const types = Array.isArray(t) ? t : [t];
    if (types.some((x) => x === "Organization" || x === "Corporation" || x === "Brand") && typeof o["name"] === "string")
      return o["name"];
    for (const v of Object.values(o)) {
      const r = findOrgName(v);
      if (r) return r;
    }
  }
  return null;
}

function locationOf(el: HTMLElement): string {
  let cur: HTMLElement | null = el;
  while (cur) {
    const tag = cur.tagName?.toLowerCase();
    const cls = `${cur.getAttribute?.("class") ?? ""} ${cur.getAttribute?.("id") ?? ""}`.toLowerCase();
    if (tag === "footer" || /footer/.test(cls)) return "footer";
    if (tag === "header" || /header/.test(cls)) return "header";
    if (tag === "nav") return "navigation";
    cur = cur.parentNode as HTMLElement | null;
  }
  return "page body";
}

function extractFromHtml(html: string, pageUrl: string, domain: string) {
  const root = parse(html);
  const findings: RawFinding[] = [];
  const jsonLdNodes: unknown[] = [];

  for (const s of root.querySelectorAll('script[type="application/ld+json"]')) {
    try {
      jsonLdNodes.push(JSON.parse(s.text));
    } catch {
      /* ignore malformed JSON-LD */
    }
  }
  const sameAs: string[] = [];
  jsonLdNodes.forEach((n) => collectSameAs(n, sameAs));
  for (const url of sameAs) {
    const m = matchProfile(url);
    if (m) findings.push({ platformId: m.platform.id, ...m.profile, source: "jsonld", evidence: "Found in JSON-LD sameAs" });
  }

  for (const a of root.querySelectorAll("a[href], link[rel~=me]")) {
    const href = a.getAttribute("href");
    if (!href) continue;
    let abs: string;
    try {
      abs = new URL(href, pageUrl).toString();
    } catch {
      continue;
    }
    const m = matchProfile(abs);
    if (!m) continue;
    const where = a.tagName.toLowerCase() === "link" ? 'rel="me" link' : locationOf(a);
    findings.push({ platformId: m.platform.id, ...m.profile, source: "site", evidence: `Found in ${where} on ${domain}` });
  }

  const ogSite = root.querySelector('meta[property="og:site_name"]')?.getAttribute("content");
  const title = root.querySelector("title")?.text.split(/[|\-–—:]/)[0]?.trim();
  const brandName = findOrgName(jsonLdNodes) ?? ogSite ?? title ?? domain.split(".")[0];
  return { findings, brandName: brandName || domain };
}

function groupFindings(findings: RawFinding[], checkedAt: string): PlatformResult[] {
  const results: PlatformResult[] = [];
  for (const p of PLATFORMS) {
    const mine = findings.filter((f) => f.platformId === p.id);
    if (!mine.length) continue;
    const byHandle = new Map<string, ProfileEntry>();
    for (const f of mine) {
      const key = f.handle.toLowerCase();
      const e = byHandle.get(key) ?? {
        handle: f.handle,
        tag: f.tag,
        url: f.url,
        verified: true,
        evidence: [],
        sources: [],
        checkedAt,
      };
      if (!e.evidence.includes(f.evidence)) e.evidence.push(f.evidence);
      if (!e.sources.includes(f.source)) e.sources.push(f.source);
      byHandle.set(key, e);
    }
    const entries = [...byHandle.values()];
    const jsonld = new Set(entries.filter((e) => e.sources.includes("jsonld")).map((e) => e.handle.toLowerCase()));
    const site = new Set(entries.filter((e) => e.sources.includes("site")).map((e) => e.handle.toLowerCase()));
    const conflict =
      jsonld.size > 0 && site.size > 0 && ([...jsonld].some((h) => !site.has(h)) || [...site].some((h) => !jsonld.has(h)));
    results.push({ platformId: p.id, platformName: p.name, status: "verified", conflict, entries, checkedAt });
  }
  return results;
}

async function ddgSearch(query: string): Promise<{ url: string; title: string; snippet: string }[]> {
  try {
    const res = await fetch(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`, {
      headers: { "user-agent": UA },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return [];
    const root = parse(await res.text());
    return root.querySelectorAll(".result").flatMap((r) => {
      const a = r.querySelector("a.result__a");
      const href = a?.getAttribute("href");
      if (!a || !href) return [];
      let url = href;
      try {
        const u = new URL(href, "https://duckduckgo.com");
        url = u.searchParams.get("uddg") ?? u.toString();
      } catch {
        return [];
      }
      return [{ url, title: a.text.trim(), snippet: r.querySelector(".result__snippet")?.text.trim() ?? "" }];
    });
  } catch {
    return [];
  }
}

async function checkReciprocal(profileUrl: string, domain: string): Promise<ReciprocalStatus> {
  const page = await fetchText(profileUrl, 8000);
  if (!page) return "unreachable";
  return page.text.toLowerCase().includes(domain.toLowerCase()) ? "links_back" : "no_link_found";
}

async function fallbackSearch(
  missing: PlatformId[],
  brandName: string,
  domain: string,
  checkedAt: string,
): Promise<PlatformResult[]> {
  const out = await Promise.all(
    missing.map(async (id): Promise<PlatformResult | null> => {
      const p = PLATFORMS.find((x) => x.id === id);
      if (!p) return null;
      const hits = await ddgSearch(`site:${p.searchHost} "${brandName}"`);
      const match = hits.map((h) => matchProfile(h.url)).find((m) => m?.platform.id === id);
      if (!match) return null;
      const reciprocal = await checkReciprocal(match.profile.url, domain);
      const recLine =
        reciprocal === "links_back"
          ? `Profile links back to ${domain}`
          : reciprocal === "no_link_found"
            ? `Profile does not mention ${domain}`
            : "Profile could not be fetched to check for a link back";
      return {
        platformId: id,
        platformName: p.name,
        status: "unverified",
        conflict: false,
        checkedAt,
        entries: [
          {
            ...match.profile,
            verified: false,
            sources: ["search"],
            evidence: [`Not linked on ${domain}; found via web search for "${brandName}"`, recLine],
            reciprocal,
            checkedAt,
          },
        ],
      };
    }),
  );
  return out.filter((r): r is PlatformResult => r !== null);
}

// Username permutations from the brand name and domain label (idea borrowed from
// social-analyzer; implemented locally — that project is AGPL and reference-only).
export function handleCandidates(brandName: string, domain: string): string[] {
  const label = (domain.split(".")[0] ?? "").toLowerCase();
  const base = brandName.toLowerCase().replace(/[^a-z0-9]+/g, "");
  const set = new Set([label, base, `${label}hq`, `${label}app`, `get${label}`]);
  return [...set].filter((h) => /^[a-z0-9._-]{2,40}$/.test(h)).slice(0, 4);
}

// Tier 3: direct per-platform existence checks. Only kept when the profile links
// back to the domain, and always shown as unverified.
async function probePlatforms(
  missing: PlatformId[],
  brandName: string,
  domain: string,
  checkedAt: string,
): Promise<PlatformResult[]> {
  const candidates = handleCandidates(brandName, domain);
  const out = await Promise.all(
    missing.map(async (id): Promise<PlatformResult | null> => {
      const p = PLATFORMS.find((x) => x.id === id);
      if (!p?.probe) return null;
      const probe = p.probe;
      const hits = await Promise.all(
        candidates.map(async (h) => {
          const page = await fetchText(probe.url(h), 6000, probe.accept);
          return page && page.text.toLowerCase().includes(domain.toLowerCase()) ? h : null;
        }),
      );
      const handle = hits.find((h): h is string => h !== null);
      if (!handle) return null;
      const match = matchProfile(probe.profileUrl(handle));
      if (!match) return null;
      return {
        platformId: id,
        platformName: p.name,
        status: "unverified",
        conflict: false,
        checkedAt,
        entries: [
          {
            ...match.profile,
            verified: false,
            sources: ["probe"],
            evidence: [
              `Not linked on ${domain}; handle guessed from "${brandName}"`,
              `Profile exists and links back to ${domain}`,
            ],
            reciprocal: "links_back",
            checkedAt,
          },
        ],
      };
    }),
  );
  return out.filter((r): r is PlatformResult => r !== null);
}

// Honest multi-signal rating: counts independent evidence, no percentages.
export function rateEntry(e: ProfileEntry, brandName: string, domain: string): ProfileEntry {
  const signals: string[] = [];
  if (e.sources.includes("jsonld")) signals.push("structured data");
  if (e.sources.includes("site")) signals.push("site link");
  if (e.reciprocal === "links_back") signals.push("links back");
  const h = e.handle.toLowerCase().split("/").pop()?.replace(/\.bsky\.social$/, "").replace(/[^a-z0-9]/g, "") ?? "";
  if (h && handleCandidates(brandName, domain).some((c) => c.replace(/[^a-z0-9]/g, "") === h))
    signals.push("name match");
  const rating: SignalRating = e.verified
    ? signals.length >= 2
      ? "strong"
      : "moderate"
    : e.reciprocal === "links_back"
      ? "moderate"
      : "weak";
  return { ...e, signals, rating };
}

async function fetchSite(url: string): Promise<{ text: string; finalUrl: string } | null> {
  const direct = await fetchText(url);
  if (direct) return direct;
  const u = new URL(url);
  if (u.hostname.startsWith("www.")) return null;
  u.hostname = `www.${u.hostname}`;
  return fetchText(u.toString());
}

export async function lookupDomain(input: string): Promise<LookupResult> {
  const url = normalizeInputUrl(input);
  if (!isPublicHttpUrl(url)) throw new Error("Please enter a public website address.");
  const page = await fetchSite(url);
  const checkedAt = new Date().toISOString();
  // Some sites (e.g. behind bot protection) block automated fetches.
  // Fall back to search-only results instead of failing the lookup.
  const domain = normalizeHost(new URL(page?.finalUrl ?? url).hostname);
  const { findings, brandName } = page
    ? extractFromHtml(page.text, page.finalUrl, domain)
    : { findings: [] as RawFinding[], brandName: domain.split(".")[0] ?? domain };
  const verified = groupFindings(findings, checkedAt);
  const found = new Set(verified.map((v) => v.platformId));
  const missing = PLATFORMS.map((p) => p.id).filter((id) => !found.has(id));
  const searched = await fallbackSearch(missing, brandName, domain, checkedAt);
  const searchedIds = new Set(searched.map((r) => r.platformId));
  const probed = await probePlatforms(
    missing.filter((id) => !searchedIds.has(id)),
    brandName,
    domain,
    checkedAt,
  );
  const unverified = [...searched, ...probed];
  // A blocked site is an expected outcome, not a crash: return an empty-but-valid
  // result flagged as blocked so the UI can explain it.
  const all = [...verified, ...unverified].map((r) => ({
    ...r,
    entries: r.entries.map((e) => rateEntry(e, brandName, domain)),
  }));
  const allFound = new Set(all.map((r) => r.platformId));
  return {
    input,
    domain,
    finalUrl: page?.finalUrl ?? url,
    brandName,
    checkedAt,
    platforms: all,
    notFound: PLATFORMS.filter((p) => !allFound.has(p.id)).map((p) => p.name),
    blocked: !page,
  };
}

export async function searchBrandDomains(query: string): Promise<DomainCandidate[]> {
  const hits = await ddgSearch(`${query} official site`);
  const seen = new Set<string>();
  const out: DomainCandidate[] = [];
  for (const h of hits) {
    let host: string;
    try {
      host = normalizeHost(new URL(h.url).hostname);
    } catch {
      continue;
    }
    if (SOCIAL_HOSTS.some((s) => host === s || host.endsWith(`.${s}`)) || seen.has(host)) continue;
    seen.add(host);
    out.push({ domain: host, url: `https://${host}`, title: h.title, snippet: h.snippet });
    if (out.length >= 6) break;
  }
  return out;
}
