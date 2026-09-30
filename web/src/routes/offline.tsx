import { createFileRoute } from "@tanstack/react-router";
import { Shell, SubHeader } from "@/components/diggr/Chrome";

export const Route = createFileRoute("/offline")({
  head: () => ({
    meta: [
      { title: "M4G1C M4NT4 // Air-gap mode — cached dossiers offline" },
      {
        name: "description",
        content: "Carrier lost? M4G1C M4NT4 keeps your recent dossiers cached locally so you can read and export offline.",
      },
      { property: "og:title", content: "M4G1C M4NT4 // Air-gap mode" },
      { property: "og:description", content: "Cached dossiers and vault export while offline." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Offline,
});

const CACHED = [
  { domain: "stripe.com", handles: 6, age: "2h ago" },
  { domain: "magicmanta.com", handles: 5, age: "5h ago" },
  { domain: "vercel.com", handles: 5, age: "1d ago" },
];

const BOOT = [
  "ServiceWorker ......... REGISTERED",
  "IndexedDB vault ....... MOUNTED",
  "Cached dossiers ....... 3",
  "Network ............... CARRIER LOST",
  "Mode .................. AIR-GAP / READ-ONLY",
];

function Offline() {
  return (
    <Shell>
      <SubHeader
        badge="CARRIER LOST"
        badgeClass="bg-error-container text-on-error-container"
        note="// AIR-GAP MODE // READ-ONLY //"
        right={<span>[VAULT: 3 DOSSIERS]</span>}
      />
      <section className="px-margin-mobile sm:px-margin py-space-xl gap-space-lg mx-auto flex max-w-4xl flex-col">
        <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-paper-distressed leading-none uppercase">
          NO SIGNAL.{" "}
          <span className="text-on-error-container inline-block rotate-1 bg-error-container px-2 shadow-stamp">
            STILL DIGGING.
          </span>
        </h1>
        <p className="font-body-md text-body-lg text-on-surface-variant max-w-2xl">
          New sweeps need a connection, but everything you already pulled stays in the local vault.
        </p>

        <div className="p-space-md scanlines border-3 border-outline-variant bg-grit-black shadow-stamp-lg">
          <p className="font-label-stamp text-label-stamp text-acid-lime uppercase">BOOT LOG</p>
          <div className="font-code-terminal text-code-terminal text-acid-lime mt-2 space-y-1">
            {BOOT.map((l) => (
              <p key={l} className={l.includes("LOST") ? "text-hazard-orange" : ""}>
                {l}
              </p>
            ))}
          </div>
        </div>

        <div className="border-3 border-outline-variant bg-surface-low shadow-stamp-lg">
          <div className="p-space-md border-b-2 border-outline-variant">
            <span className="font-label-stamp text-label-stamp text-primary-container uppercase">CACHED DOSSIERS</span>
          </div>
          {CACHED.map((c) => (
            <div
              key={c.domain}
              className="p-space-md flex items-center justify-between border-b-2 border-outline-variant last:border-b-0"
            >
              <span className="font-code-terminal text-body-lg text-paper-distressed break-all">{c.domain}</span>
              <span className="font-code-terminal text-code-terminal text-on-surface-variant">
                {c.handles} HANDLES // {c.age}
              </span>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
