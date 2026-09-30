import { createFileRoute } from "@tanstack/react-router";
import { Shell, SubHeader } from "@/components/diggr/Chrome";

export const Route = createFileRoute("/source")({
  head: () => ({
    meta: [
      { title: "M4G1C M4NT4 // Source — top diggers and open bounties" },
      {
        name: "description",
        content:
          "The M4G1C M4NT4 source board: operators with the most confirmed brand handles, plus open bounties on hard-to-trace targets.",
      },
      { property: "og:title", content: "M4G1C M4NT4 // Source" },
      { property: "og:description", content: "Leaderboard of top diggers and open recon bounties." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SourceBoard,
});

const BOARD = [
  { rank: "01", op: "OP_HEX", rankName: "DOXXER", finds: 4821, streak: "132d" },
  { rank: "02", op: "NULL_WITCH", rankName: "SNIFFER", finds: 3990, streak: "87d" },
  { rank: "03", op: "GREY_MANTA", rankName: "SNIFFER", finds: 3104, streak: "64d" },
  { rank: "04", op: "TAPE_DECK", rankName: "SCRAPER", finds: 2455, streak: "41d" },
  { rank: "05", op: "V0LTAGE", rankName: "SCRAPER", finds: 1877, streak: "22d" },
];

const BOUNTIES = [
  {
    target: "manta.design",
    note: "Studio handle rotated twice this quarter. Need reciprocal proof on Bluesky.",
    reward: "1,200 XP",
    tone: "bg-primary-container text-on-primary-container",
  },
  {
    target: "Acme Robotics",
    note: "Stealth handle suspected on Threads. Nothing linked from the marketing surface.",
    reward: "900 XP",
    tone: "bg-cyber-cyan text-grit-black",
  },
  {
    target: "Neon Labs",
    note: "Exec matrix incomplete — three founders, one confirmed LinkedIn.",
    reward: "1,500 XP",
    tone: "bg-electric-magenta text-paper-distressed",
  },
  {
    target: "Synthia AI",
    note: "Bot infrastructure spamming lookalike handles. Flag the spoofs.",
    reward: "2,000 XP",
    tone: "bg-hazard-orange text-grit-black",
  },
];

function SourceBoard() {
  return (
    <Shell>
      <SubHeader
        badge="SOURCE"
        badgeClass="bg-primary-container text-on-primary-container"
        note="// LEADERBOARD + OPEN BOUNTIES //"
        right={<span>[SEASON 04 // 18d LEFT]</span>}
      />
      <section className="px-margin-mobile sm:px-margin py-space-xl gap-space-xl mx-auto flex max-w-7xl flex-col">
        <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-paper-distressed leading-none uppercase">
          <span className="text-on-primary-container inline-block -rotate-2 bg-acid-lime px-2 shadow-stamp-magenta">
            SOURCE
          </span>
        </h1>

        <div className="gap-space-lg grid lg:grid-cols-2">
          <div className="border-3 border-primary-container bg-surface-low shadow-stamp-lg">
            <div className="p-space-md border-b-2 border-outline-variant">
              <span className="font-label-stamp text-label-stamp text-primary-container uppercase">
                TOP DIGGERS // CONFIRMED HANDLES
              </span>
            </div>
            {BOARD.map((r) => (
              <div
                key={r.op}
                className="p-space-md gap-space-sm flex items-center justify-between border-b-2 border-outline-variant last:border-b-0"
              >
                <div className="gap-space-md flex items-center">
                  <span className="font-headline text-headline-md text-grit-black bg-primary-container px-2">
                    {r.rank}
                  </span>
                  <div>
                    <p className="font-code-terminal text-body-lg text-paper-distressed">{r.op}</p>
                    <p className="font-label-stamp text-micro tracking-widest text-on-surface-variant uppercase">
                      RANK: {r.rankName} // STREAK {r.streak}
                    </p>
                  </div>
                </div>
                <span className="font-code-terminal text-headline-sm text-acid-lime">{r.finds}</span>
              </div>
            ))}
          </div>

          <div className="gap-space-md flex flex-col">
            <span className="font-label-stamp text-label-stamp text-hazard-orange uppercase">OPEN BOUNTIES</span>
            {BOUNTIES.map((b) => (
              <div
                key={b.target}
                className="p-space-md border-3 border-outline-variant bg-grit-black shadow-stamp-md"
              >
                <div className="gap-space-sm flex flex-wrap items-center justify-between">
                  <span className="font-code-terminal text-body-lg text-paper-distressed break-all">{b.target}</span>
                  <span className={`font-label-stamp text-label-stamp px-2 py-1 uppercase ${b.tone}`}>{b.reward}</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">{b.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
