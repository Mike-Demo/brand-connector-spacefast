/** Dependency-free HTML scraping helpers for the SpaceFast functions runtime
 *  (no npm packages available there). Replaces the node-html-parser usage in
 *  the Lovable app's lookup.server.ts. These are heuristic scrapers — the
 *  whole lookup pipeline is heuristic by design — kept behavior-compatible
 *  with the original selectors. */

export function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0*39;|&#x27;/gi, "'")
    .replace(/&#(\d+);/g, (_m, n: string) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_m, n: string) => String.fromCharCode(parseInt(n, 16)));
}

export function stripTags(s: string): string {
  return decodeEntities(s.replace(/<[^>]*>/g, "")).replace(/\s+/g, " ").trim();
}

/** All JSON-LD script blocks, parsed (malformed ones skipped). */
export function extractJsonLdScripts(html: string): unknown[] {
  const out: unknown[] = [];
  const re = /<script\b[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    try {
      out.push(JSON.parse(m[1]));
    } catch {
      /* ignore malformed JSON-LD */
    }
  }
  return out;
}

export interface Anchor {
  href: string;
  offset: number;
  tag: "a" | "link";
}

function attr(tag: string, name: string): string | null {
  const m = new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, "i").exec(tag);
  return m ? (m[1] ?? m[2] ?? m[3] ?? "") : null;
}

/** All <a href> anchors plus <link rel="me" href>, in document order. */
export function extractAnchors(html: string): Anchor[] {
  const out: Anchor[] = [];
  const reA = /<a\b[^>]*>/gi;
  let m: RegExpExecArray | null;
  while ((m = reA.exec(html)) !== null) {
    const href = attr(m[0], "href");
    if (href) out.push({ href, offset: m.index, tag: "a" });
  }
  const reLink = /<link\b[^>]*>/gi;
  while ((m = reLink.exec(html)) !== null) {
    const rel = attr(m[0], "rel") ?? "";
    if (!/\bme\b/i.test(rel)) continue;
    const href = attr(m[0], "href");
    if (href) out.push({ href, offset: m.index, tag: "link" });
  }
  out.sort((a, b) => a.offset - b.offset);
  return out;
}

export function metaContent(html: string, property: string): string | null {
  const re = new RegExp(`<meta\\b[^>]*\\bproperty\\s*=\\s*["']${property}["'][^>]*>`, "i");
  const m = re.exec(html);
  if (!m) return null;
  const c = attr(m[0], "content");
  return c !== null ? decodeEntities(c) : null;
}

export function pageTitle(html: string): string | null {
  const m = /<title\b[^>]*>([\s\S]*?)<\/title>/i.exec(html);
  return m ? stripTags(m[1]) : null;
}

interface Range {
  start: number;
  end: number;
}

function tagRanges(html: string, tag: string): Range[] {
  const out: Range[] = [];
  const re = new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi");
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) out.push({ start: m.index, end: m.index + m[0].length });
  return out;
}

export interface Regions {
  footer: Range[];
  header: Range[];
  nav: Range[];
}

export function computeRegions(html: string): Regions {
  return {
    footer: tagRanges(html, "footer"),
    header: tagRanges(html, "header"),
    nav: tagRanges(html, "nav"),
  };
}

const inRanges = (rs: Range[], offset: number): boolean => rs.some((r) => offset >= r.start && offset <= r.end);

/** Where on the page an anchor lives (evidence label, same vocabulary as the original). */
export function regionAt(regions: Regions, html: string, offset: number): string {
  if (inRanges(regions.footer, offset)) return "footer";
  if (inRanges(regions.header, offset)) return "header";
  if (inRanges(regions.nav, offset)) return "navigation";
  // Fallback heuristic: nearest block-level ancestor whose class/id mentions footer/header.
  const before = html.slice(Math.max(0, offset - 4000), offset);
  const tags = [...before.matchAll(/<(div|section|aside|footer|header|nav)\b[^>]*>/gi)];
  for (let i = tags.length - 1; i >= 0; i--) {
    const t = tags[i][0].toLowerCase();
    if (/footer/.test(t)) return "footer";
    if (/header/.test(t)) return "header";
  }
  return "page body";
}

export interface DdgHit {
  url: string;
  title: string;
  snippet: string;
}

/** DuckDuckGo html.duckduckgo.com/html/ results: links zipped with snippets in document order. */
export function extractDdgResults(html: string): DdgHit[] {
  const links: { href: string; text: string; offset: number }[] = [];
  const reA = /<a\b[^>]*class\s*=\s*["'][^"']*\bresult__a\b[^"']*["'][^>]*>/gi;
  let m: RegExpExecArray | null;
  while ((m = reA.exec(html)) !== null) {
    const href = attr(m[0], "href");
    if (!href) continue;
    const close = html.indexOf("</a>", m.index);
    const text = close > m.index ? stripTags(html.slice(m.index + m[0].length, close)) : "";
    links.push({ href, text, offset: m.index });
  }
  const snippets: { text: string; offset: number }[] = [];
  const reS = /<[^>]*class\s*=\s*["'][^"']*\bresult__snippet\b[^"']*["'][^>]*>([\s\S]*?)<\/(?:div|td|span|a)>/gi;
  while ((m = reS.exec(html)) !== null) snippets.push({ text: stripTags(m[1]), offset: m.index });
  return links
    .map((l) => {
      const sn = snippets.find((s) => s.offset > l.offset);
      let url = l.href;
      try {
        const u = new URL(l.href, "https://duckduckgo.com");
        url = u.searchParams.get("uddg") ?? u.toString();
      } catch {
        /* keep raw href */
      }
      return { url, title: l.text, snippet: sn?.text ?? "" };
    })
    .filter((h) => h.url.length > 0);
}
