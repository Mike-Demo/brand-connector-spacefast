import { createFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { useState, type FormEvent } from "react";
import { lookupSocials, searchBrand } from "@/lib/social/lookup.functions";
import { allVerifiedTags, formatCheckedAt, looksLikeUrl } from "@/lib/social/format";
import { buildShareUrl } from "@/lib/social/share";
import { ProfileSlab, copyText } from "@/components/diggr/ProfileSlab";
import { Shell, SubHeader } from "@/components/diggr/Chrome";
import type { DomainCandidate, LookupResult } from "@/lib/social/types";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "M4G1C M4NT4 // Radar Scanner — hunt any brand's social footprint" },
      {
        name: "description",
        content:
          "Drop a domain and M4G1C M4NT4 sweeps X, Threads, Instagram, LinkedIn, Bluesky, GitHub and more for verified brand handles with evidence.",
      },
      { property: "og:title", content: "M4G1C M4NT4 // Radar Scanner" },
      {
        property: "og:description",
        content: "Drop a domain. Get every verified social handle, with the receipts.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://magicmanta.com/" },
      { property: "og:image", content: "https://magicmanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://magicmanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://magicmanta.com/" }],
  }),
  component: RadarScanner,
});

const FLAGS = ["[✓ Deep Socials]", "[✓ Exec Handles]", "[✓ Shadow Accounts]", "[✓ Federated Nodes]"];

function RadarScanner() {
  const [input, setInput] = useState("");
  const [manualUrl, setManualUrl] = useState("");

  const [elapsed, setElapsed] = useState<number | null>(null);

  const lookup = useMutation<LookupResult, Error, string>({
    mutationFn: async (url) => {
      const started = performance.now();
      try {
        return await lookupSocials(url);
      } finally {
        setElapsed((performance.now() - started) / 1000);
      }
    },
  });
  const search = useMutation<DomainCandidate[], Error, string>({
    mutationFn: (query) => searchBrand(query),
  });

  const runLookup = (url: string) => {
    search.reset();
    lookup.mutate(url);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const v = input.trim();
    if (!v) return;
    if (looksLikeUrl(v)) runLookup(v);
    else {
      lookup.reset();
      search.mutate(v);
    }
  };

  const busy = lookup.isPending || search.isPending;
  const result = lookup.data;
  const verified = result?.platforms.filter((p) => p.status === "verified") ?? [];
  const unverified = result?.platforms.filter((p) => p.status === "unverified") ?? [];
  const signals = (result?.platforms.length ?? 0) + (result?.notFound.length ?? 0);

  return (
    <Shell>
      <SubHeader
        badge="OSINT_RADAR_ENGAGED"
        note="// DEEP CORPO TRACE v2.8 //"
        right={
          <>
            <span className="hidden md:inline">[ROTATING 4,210 GLOBAL PROXIES]</span>
            <span className="text-paper-distressed inline-flex items-center gap-1.5 border border-outline-variant bg-surface-high px-2 py-0.5">
              <span className="h-2 w-2 animate-ping rounded-full bg-acid-lime" />
              PACKETS: SNIFFING LIVE
            </span>
          </>
        }
      />

      {/* HERO CONSOLE */}
      <section className="px-margin-mobile sm:px-margin py-space-xl relative w-full overflow-hidden bg-grit-black">
        <div className="halftone pointer-events-none absolute inset-0 opacity-10" />
        <div className="gap-space-xl relative z-10 mx-auto flex max-w-7xl flex-col">
          <div className="gap-space-lg flex flex-col items-start justify-between lg:flex-row lg:items-end">
            <div className="gap-space-xs flex max-w-3xl flex-col">
              <div className="gap-space-sm inline-flex flex-wrap items-center">
                <span className="font-label-stamp text-label-stamp bg-hazard-orange text-grit-black -rotate-2 px-2 py-1 tracking-widest uppercase shadow-stamp-sm">
                  WARNING: ZERO CORPORATE SILOS SPARED
                </span>
                <span className="font-code-terminal text-code-terminal text-acid-lime">
                  [NODE // OSINT_SNIFFER_v4]
                </span>
              </div>
              <h1 className="font-display-hero text-display-hero-mobile sm:text-display-hero text-paper-distressed leading-none tracking-tight uppercase drop-shadow-stamp">
                DIG UP THE CORPO TRAILS
                <br />
                <span className="text-primary-container inline-block -rotate-1 border-2 border-primary-container bg-slate-charcoal px-2 shadow-stamp-magenta">
                  HUNT DOWN ANY PROFILE
                </span>{" "}
                IN SECONDS.
              </h1>
              <p className="font-body-md text-body-lg text-on-surface-variant mt-space-xs max-w-2xl">
                Drop any domain, startup tag, or shadow brand. M4G1C M4NT4's crawler swarms sweep the networks, repos,
                federated nodes, and rogue vanity handles before they can scrub their footprint.
              </p>
            </div>

            <div className="gap-space-xs flex shrink-0 flex-col items-end">
              <div className="p-space-md text-paper-distressed flex rotate-2 flex-col border-3 border-grit-black bg-electric-magenta text-right shadow-stamp-lime-lg">
                <span className="font-label-stamp text-label-stamp tracking-widest uppercase">DISCOVERY LATENCY</span>
                <span className="font-headline text-headline-lg tracking-tighter">
                  {busy ? "…" : elapsed !== null ? `${elapsed.toFixed(2)}s` : "IDLE"}
                </span>
                <span className="font-code-terminal text-code-terminal text-grit-black mt-1 bg-paper-distressed px-1 font-bold uppercase">
                  EVIDENCE OR NOTHING
                </span>
              </div>
            </div>
          </div>

          {/* SCANNER SLAB */}
          <div className="p-space-lg gap-space-md relative flex flex-col border-3 border-primary-container bg-slate-charcoal shadow-stamp-magenta-xl">
            <div className="pb-space-sm flex items-center justify-between border-b-2 border-outline-variant">
              <div className="gap-space-sm font-code-terminal text-code-terminal text-primary-container flex items-center">
                <span className="h-3 w-3 bg-acid-lime" />
                <span>TARGET_RESOLVER://v2.4</span>
                <span className="text-on-surface-variant hidden sm:inline">| SHA-256 PARSER EQUIPPED</span>
              </div>
              <span className="font-label-stamp text-label-stamp bg-grit-black text-cyber-cyan border border-cyber-cyan px-2 py-0.5">
                PROTOCOL: FAST_CRAWL
              </span>
            </div>

            <form onSubmit={onSubmit} className="gap-space-sm flex flex-col lg:flex-row">
              <div className="relative flex flex-1 items-center border-2 border-paper-distressed bg-grit-black shadow-stamp">
                <span className="bg-primary-container text-grit-black font-code-terminal text-code-terminal px-space-md shrink-0 border-r-2 border-paper-distressed py-4 font-black select-none">
                  TARGET://
                </span>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  aria-label="Target domain or brand name"
                  placeholder="stripe.com  //  or a brand name"
                  className="px-space-md text-paper-distressed! font-code-terminal text-body-lg placeholder:text-on-surface-variant/60 w-full bg-transparent! py-4 outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={busy}
                className="font-label-stamp text-label-stamp bg-primary-container text-on-primary-container px-space-xl gap-space-sm flex items-center justify-center py-4 tracking-widest uppercase shadow-stamp transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                {busy ? "SWEEPING…" : "UNLEASH RADAR"}
                <span className="font-code-terminal text-micro opacity-70">[ENTER ↵]</span>
              </button>
            </form>

            <div className="gap-space-sm font-code-terminal text-code-terminal text-on-surface-variant flex flex-wrap items-center">
              <span className="text-primary-container">SNIFFER FLAGS:</span>
              {FLAGS.map((f) => (
                <span key={f}>{f}</span>
              ))}
            </div>
          </div>

          {busy && (
            <div className="p-space-md font-code-terminal text-code-terminal text-acid-lime scanlines border-2 border-outline-variant bg-grit-black">
              <p>&gt; RESOLVING TARGET SURFACE…</p>
              <p>&gt; PARSING JSON-LD sameAs + DOM ANCHORS…</p>
              <p>&gt; SWEEPING FALLBACK SEARCH + RECIPROCAL PROBES…</p>
              <p className="text-on-surface-variant">
                &gt;&gt; A FULL SWEEP CAN TAKE UP TO 30 SECONDS. HOLD THE LINE.
              </p>
            </div>
          )}

          {(lookup.error || search.error) && (
            <p className="p-space-md font-code-terminal text-code-terminal bg-error-container/30 text-on-error-container border-2 border-error-container">
              ! {(lookup.error ?? search.error)?.message}
            </p>
          )}
        </div>
      </section>

      {/* DISAMBIGUATION */}
      {search.data && (
        <section className="px-margin-mobile sm:px-margin py-space-xl bg-bg-deep">
          <div className="gap-space-md mx-auto flex max-w-7xl flex-col">
            <h2 className="font-headline text-headline-lg text-paper-distressed uppercase">
              MULTIPLE ENTITIES MATCHED
            </h2>
            <p className="font-code-terminal text-code-terminal text-on-surface-variant">
              &gt; PICK THE PRIMARY DOMAIN, OR INJECT THE EXACT URL BELOW.
            </p>
            {search.data.length === 0 && (
              <p className="font-code-terminal text-code-terminal text-hazard-orange">
                ! NO CANDIDATE DOMAINS RESOLVED.
              </p>
            )}
            <ul className="gap-space-md grid sm:grid-cols-2 lg:grid-cols-3">
              {search.data.map((c) => (
                <li key={c.domain}>
                  <button
                    onClick={() => runLookup(c.url)}
                    className="p-space-md h-full w-full border-3 border-outline-variant bg-surface-low text-left shadow-stamp-md transition-colors hover:border-primary-container"
                  >
                    <p className="font-code-terminal text-headline-sm text-primary-container break-all">{c.domain}</p>
                    <p className="font-label-stamp text-label-stamp text-paper-distressed mt-2 uppercase">{c.title}</p>
                    <p className="font-code-terminal text-code-terminal text-on-surface-variant mt-2 line-clamp-3">
                      {c.snippet}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (manualUrl.trim()) runLookup(manualUrl.trim());
              }}
              className="p-space-md gap-space-sm flex flex-col border-2 border-dashed border-outline sm:flex-row sm:items-center"
            >
              <label
                htmlFor="manual"
                className="font-label-stamp text-label-stamp text-on-surface-variant uppercase"
              >
                Manual inject:
              </label>
              <input
                id="manual"
                value={manualUrl}
                onChange={(e) => setManualUrl(e.target.value)}
                placeholder="example.com"
                className="font-code-terminal text-code-terminal text-paper-distressed! flex-1 border-2 border-outline-variant bg-grit-black! px-3 py-2 outline-none"
              />
              <button className="font-label-stamp text-label-stamp bg-primary-container text-on-primary-container px-4 py-2 uppercase shadow-stamp-sm">
                Sniff
              </button>
            </form>
          </div>
        </section>
      )}

      {/* RESULTS */}
      {result && (
        <section className="px-margin-mobile sm:px-margin py-space-xl bg-bg-deep">
          <div className="gap-space-xl mx-auto flex max-w-7xl flex-col">
            {result.blocked && (
              <p className="p-space-md font-code-terminal text-code-terminal bg-error-container/30 text-on-error-container border-2 border-error-container">
                ! {result.domain} blocked our automated visit, so its own links couldn't be read.
                {result.platforms.length > 0
                  ? " Results below come from web search only and are unconfirmed."
                  : " Web search found no profiles either. Try again later."}
              </p>
            )}
            {/* target header */}
            <div className="p-space-lg gap-space-lg flex flex-col border-3 border-primary-container bg-grit-black shadow-stamp-xl lg:flex-row lg:items-center lg:justify-between">
              <div className="gap-space-xs flex flex-col">
                <span className="font-label-stamp text-label-stamp text-electric-magenta uppercase">
                  TARGET: {result.brandName}
                </span>
                <span className="font-headline text-headline-lg text-paper-distressed uppercase">
                  CONFIRMED FOOTPRINT
                </span>
                <span className="font-code-terminal text-code-terminal text-on-surface-variant">
                  PRIMARY URL:{" "}
                  <a
                    className="text-primary-container underline"
                    href={result.finalUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {result.domain}
                  </a>{" "}
                  // LAST CHECKED: {formatCheckedAt(result.checkedAt)}
                </span>
              </div>
              <div className="gap-space-md flex flex-wrap items-center">
                <div className="p-space-md text-paper-distressed border-3 border-grit-black bg-toxic-green text-right shadow-stamp-lime-md">
                  <span className="font-label-stamp text-label-stamp uppercase">VERIFIED FOOTPRINT</span>
                  <p className="font-headline text-headline-md">
                    {verified.length} / {signals} SIGNALS
                  </p>
                </div>
                {verified.length > 0 && (
                  <button
                    onClick={() => copyText(allVerifiedTags(result), "all verified handles")}
                    className="font-label-stamp text-label-stamp bg-primary-container text-on-primary-container px-4 py-3 uppercase shadow-stamp transition-transform hover:-translate-y-0.5"
                  >
                    Copy all verified handles
                  </button>
                )}
                <button
                  onClick={async () => copyText(await buildShareUrl(result), "share link")}
                  className="font-label-stamp text-label-stamp bg-cyber-cyan text-grit-black px-4 py-3 uppercase shadow-stamp transition-transform hover:-translate-y-0.5"
                >
                  Copy share link
                </button>
                <button
                  onClick={() => runLookup(result.input)}
                  className="font-label-stamp text-label-stamp text-paper-distressed border-2 border-paper-distressed px-4 py-3 uppercase hover:bg-paper-distressed hover:text-grit-black"
                >
                  Re-sniff
                </button>
              </div>
            </div>

            <div>
              <div className="mb-space-md gap-space-sm flex flex-wrap items-center justify-between">
                <h2 className="font-headline text-headline-md text-paper-distressed uppercase">
                  CAPTURED SOCIAL FOOTPRINTS
                </h2>
                <span className="font-label-stamp text-label-stamp bg-primary-container text-on-primary-container px-2 py-1 uppercase">
                  {verified.length} DETECTED // LINKED FROM SITE
                </span>
              </div>
              {verified.length ? (
                <div className="gap-space-md grid md:grid-cols-2 xl:grid-cols-3">
                  {verified.map((r) => (
                    <ProfileSlab key={r.platformId} result={r} />
                  ))}
                </div>
              ) : (
                <p className="font-code-terminal text-code-terminal text-hazard-orange">
                  ! NO PROFILES LINKED DIRECTLY FROM THIS SURFACE.
                </p>
              )}
            </div>

            {unverified.length > 0 && (
              <div>
                <div className="mb-space-sm gap-space-sm flex flex-wrap items-center justify-between">
                  <h2 className="font-headline text-headline-md text-paper-distressed uppercase">
                    SHADOW / UNCONFIRMED NODES
                  </h2>
                  <span className="font-label-stamp text-label-stamp bg-hazard-orange text-grit-black px-2 py-1 uppercase">
                    {unverified.length} FOUND BY SWEEP
                  </span>
                </div>
                <p className="font-code-terminal text-code-terminal text-on-surface-variant mb-space-md">
                  &gt; NOT LINKED ON {result.domain}. WE CHECKED WHETHER EACH PROFILE LINKS BACK.
                </p>
                <div className="gap-space-md grid md:grid-cols-2 xl:grid-cols-3">
                  {unverified.map((r) => (
                    <ProfileSlab key={r.platformId} result={r} />
                  ))}
                </div>
              </div>
            )}

            {result.notFound.length > 0 && (
              <div className="p-space-md border-2 border-outline-variant bg-surface-low">
                <p className="font-label-stamp text-label-stamp text-on-surface-variant uppercase">NO SIGNAL</p>
                <p className="font-code-terminal text-code-terminal text-paper-distressed mt-1">
                  {result.notFound.join(" // ")}
                </p>
              </div>
            )}
          </div>
        </section>
      )}
    </Shell>
  );
}
