import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell, SubHeader } from "@/components/diggr/Chrome";

export const Route = createFileRoute("/batch")({
  head: () => ({
    meta: [
      { title: "M4G1C M4NT4 // Batch Sniffer — bulk social recon pipeline" },
      {
        name: "description",
        content:
          "Queue hundreds of domains, stream the recon console live, and export every resolved handle. Premium batch pipeline for M4G1C M4NT4.",
      },
      { property: "og:title", content: "M4G1C M4NT4 // Batch Sniffer" },
      { property: "og:description", content: "Bulk domain recon with a live streaming console." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BatchSniffer,
});

const QUEUE = [
  { domain: "stripe.com", status: "DONE", found: 4, note: "x / github / linkedin / youtube" },
  { domain: "vercel.com", status: "DONE", found: 5, note: "x / github / linkedin / youtube / bluesky" },
  { domain: "solana-airdrop-claim.net", status: "FLAG", found: 0, note: "SPOOF PATTERN DETECTED" },
  { domain: "neonlabs.io", status: "RUN", found: 2, note: "sweeping federated nodes…" },
  { domain: "acmerobotics.dev", status: "WAIT", found: 0, note: "queued" },
];

const CONSOLE = [
  "[00:00:01] BOOT // batch runner v2.4.99-punk",
  "[00:00:02] LOADED 5 TARGETS FROM PASTE BUFFER",
  "[00:00:04] stripe.com  -> JSON-LD sameAs: 4 nodes",
  "[00:00:07] stripe.com  -> DOM ANCHORS: +2 duplicates merged",
  "[00:00:09] vercel.com  -> rel=me: bluesky confirmed",
  "[00:00:12] solana-airdrop-claim.net -> !! NO RECIPROCAL LINKS, DOMAIN AGE < 14d",
  "[00:00:12] solana-airdrop-claim.net -> FLAGGED AS SPOOF",
  "[00:00:15] neonlabs.io -> fallback sweep in progress…",
];

function BatchSniffer() {
  const [paste, setPaste] = useState("stripe.com\nvercel.com\nneonlabs.io");

  return (
    <Shell>
      <SubHeader
        badge="BATCH_PIPELINE"
        badgeClass="bg-cyber-cyan text-grit-black"
        note="// BULK RECON // PREMIUM TIER //"
        right={<span>[QUEUE: 5 TARGETS]</span>}
      />
      <section className="px-margin-mobile sm:px-margin py-space-xl gap-space-xl mx-auto flex max-w-7xl flex-col">
        <div className="gap-space-md flex flex-col">
          <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-paper-distressed leading-none uppercase">
            BATCH{" "}
            <span className="text-on-primary-container inline-block -rotate-1 bg-primary-container px-2 shadow-stamp-magenta">
              SNIFFER
            </span>
          </h1>
          <p className="font-body-md text-body-lg text-on-surface-variant max-w-2xl">
            Paste a list, drop a CSV, or pipe it in from Zapier / Make. The runner sweeps every domain through the same
            evidence chain as the radar and streams results as they land.
          </p>
        </div>

        <div className="gap-space-lg grid lg:grid-cols-2">
          <div className="p-space-md gap-space-md flex flex-col border-3 border-primary-container bg-slate-charcoal shadow-stamp-lg">
            <span className="font-label-stamp text-label-stamp text-primary-container uppercase">
              PASTE TARGETS // ONE PER LINE
            </span>
            <textarea
              value={paste}
              onChange={(e) => setPaste(e.target.value)}
              rows={8}
              aria-label="Batch targets"
              className="font-code-terminal text-code-terminal text-paper-distressed! p-space-sm border-2 border-outline-variant bg-grit-black! outline-none"
            />
            <div className="gap-space-sm flex flex-wrap">
              <button className="font-label-stamp text-label-stamp bg-primary-container text-on-primary-container px-4 py-3 uppercase shadow-stamp">
                Run batch (premium)
              </button>
              <button className="font-label-stamp text-label-stamp text-paper-distressed border-2 border-paper-distressed px-4 py-3 uppercase hover:bg-paper-distressed hover:text-grit-black">
                Upload CSV
              </button>
            </div>
            <p className="font-code-terminal text-body-sm text-on-surface-variant uppercase">
              Single lookups stay free forever. Batch runs are part of the premium tier.
            </p>
          </div>

          <div className="p-space-md gap-space-sm scanlines flex flex-col border-3 border-outline-variant bg-grit-black shadow-stamp-lg">
            <span className="font-label-stamp text-label-stamp text-acid-lime uppercase">LIVE RECON CONSOLE</span>
            <div className="font-code-terminal text-code-terminal text-acid-lime space-y-1">
              {CONSOLE.map((line) => (
                <p key={line} className={line.includes("!!") || line.includes("SPOOF") ? "text-hazard-orange" : ""}>
                  {line}
                </p>
              ))}
              <p className="text-primary-container animate-pulse">_</p>
            </div>
          </div>
        </div>

        <div className="gap-space-sm flex flex-col">
          <h2 className="font-headline text-headline-md text-paper-distressed uppercase">QUEUE STATUS</h2>
          <div className="border-3 border-outline-variant bg-surface-low shadow-stamp-lg">
            {QUEUE.map((row) => (
              <div
                key={row.domain}
                className="p-space-md gap-space-sm flex flex-wrap items-center justify-between border-b-2 border-outline-variant last:border-b-0"
              >
                <div className="gap-space-sm flex items-center">
                  <span
                    className={`font-label-stamp text-label-stamp px-2 py-1 uppercase ${
                      row.status === "DONE"
                        ? "bg-primary-container text-on-primary-container"
                        : row.status === "FLAG"
                          ? "bg-error-container text-on-error-container"
                          : row.status === "RUN"
                            ? "bg-cyber-cyan text-grit-black"
                            : "bg-surface-highest text-on-surface-variant"
                    }`}
                  >
                    {row.status}
                  </span>
                  <span className="font-code-terminal text-body-lg text-paper-distressed break-all">{row.domain}</span>
                </div>
                <span className="font-code-terminal text-code-terminal text-on-surface-variant">
                  {row.found} PROFILES // {row.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
