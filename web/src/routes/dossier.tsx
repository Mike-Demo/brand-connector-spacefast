import { createFileRoute } from "@tanstack/react-router";
import { Shell, SubHeader } from "@/components/diggr/Chrome";
import { copyText } from "@/components/diggr/ProfileSlab";

export const Route = createFileRoute("/dossier")({
  head: () => ({
    meta: [
      { title: "M4G1C M4NT4 // Dossier — the decrypted intel sheet" },
      {
        name: "description",
        content:
          "A printable dossier of every confirmed handle for a target, with the full evidence chain and export to PDF or JSON.",
      },
      { property: "og:title", content: "M4G1C M4NT4 // Dossier" },
      { property: "og:description", content: "Printable intel sheet with the full evidence chain." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dossier,
});

const SHEET = {
  target: "MAGIC MANTA",
  domain: "stripe.com",
  handles: [
    { platform: "X", tag: "@stripe", proof: "JSON-LD sameAs" },
    { platform: "GitHub", tag: "@stripe", proof: "Footer link on stripe.com" },
    { platform: "LinkedIn", tag: "company/stripe", proof: "JSON-LD sameAs" },
    { platform: "Bluesky", tag: "@stripe.com", proof: "rel=me link" },
    { platform: "YouTube", tag: "@stripe", proof: "Footer link on stripe.com" },
  ],
  chain: [
    "FETCH stripe.com -> 200 OK (final URL https://stripe.com/)",
    "PARSE application/ld+json -> Organization.sameAs [4 urls]",
    "PARSE <a href> anchors -> 11 outbound social links, 6 unique platforms",
    "MERGE by handle -> no conflicts between structured data and DOM",
    "RECIPROCAL CHECK -> 3 profiles link back to stripe.com",
  ],
};

function Dossier() {
  const asJson = JSON.stringify(SHEET, null, 2);

  return (
    <Shell>
      <SubHeader
        badge="DOSSIER // DECRYPTED"
        badgeClass="bg-paper-distressed text-grit-black"
        note="// EVIDENCE CHAIN ATTACHED //"
        right={<span>[CLASSIFICATION: OPEN SOURCE]</span>}
      />
      <section className="px-margin-mobile sm:px-margin py-space-xl gap-space-lg mx-auto flex max-w-4xl flex-col">
        <div className="p-space-lg gap-space-lg text-grit-black flex flex-col border-3 border-grit-black bg-paper-distressed shadow-stamp-lime-xl">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-grit-black pb-4">
            <div>
              <p className="font-label-stamp text-label-stamp uppercase">INTEL SHEET // TARGET</p>
              <h1 className="font-display-hero text-headline-lg uppercase">{SHEET.target}</h1>
              <p className="font-code-terminal text-code-terminal">{SHEET.domain}</p>
            </div>
            <span className="font-label-stamp text-label-stamp text-paper-distressed rotate-3 border-2 border-grit-black bg-electric-magenta px-3 py-2 uppercase">
              DECRYPTED
            </span>
          </div>

          <h2 className="font-headline text-headline-sm uppercase">CONFIRMED HANDLES</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="font-label-stamp text-label-stamp uppercase">
                <th className="pb-2">Platform</th>
                <th className="pb-2">Handle</th>
                <th className="hidden pb-2 sm:table-cell">Proof</th>
              </tr>
            </thead>
            <tbody className="font-code-terminal text-code-terminal">
              {SHEET.handles.map((h) => (
                <tr key={h.platform} className="border-t-2 border-grit-black/20">
                  <td className="py-2 uppercase">{h.platform}</td>
                  <td className="py-2 break-all">{h.tag}</td>
                  <td className="hidden py-2 sm:table-cell">{h.proof}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            <h2 className="font-headline text-headline-sm uppercase">EVIDENCE CHAIN</h2>
            <ol className="font-code-terminal text-code-terminal mt-2 space-y-1">
              {SHEET.chain.map((c) => (
                <li key={c}>&gt; {c}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="gap-space-sm flex flex-wrap">
          <button
            onClick={() => window.print()}
            className="font-label-stamp text-label-stamp bg-primary-container text-on-primary-container px-4 py-3 uppercase shadow-stamp"
          >
            Export PDF
          </button>
          <button
            onClick={() => copyText(asJson, "dossier JSON")}
            className="font-label-stamp text-label-stamp text-paper-distressed border-2 border-paper-distressed px-4 py-3 uppercase hover:bg-paper-distressed hover:text-grit-black"
          >
            Copy JSON
          </button>
          <button className="font-label-stamp text-label-stamp bg-error-container text-on-error-container px-4 py-3 uppercase shadow-stamp">
            Flag target
          </button>
        </div>
      </section>
    </Shell>
  );
}
