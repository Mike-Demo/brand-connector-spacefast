import { createFileRoute } from "@tanstack/react-router";
import { Shell, SubHeader } from "@/components/diggr/Chrome";
import { copyText } from "@/components/diggr/ProfileSlab";

export const Route = createFileRoute("/adapters")({
  head: () => ({
    meta: [
      { title: "M4G1C M4NT4 // Awesome Framework — adapters, SDK and MCP" },
      {
        name: "description",
        content:
          "Drop M4G1C M4NT4 into your own stack: a typed React hook, a REST endpoint, and an MCP server so agents can run social recon.",
      },
      { property: "og:title", content: "M4G1C M4NT4 // Awesome Framework" },
      { property: "og:description", content: "Typed hook, REST endpoint and MCP adapter for social recon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Adapters,
});

const HOOK_SNIPPET = `import { useMagicMantaRadar } from "@magicmanta/react";

const { data, isPending } = useMagicMantaRadar({
  target: "magicmanta.com",
  include: ["x", "bluesky", "github"],
});

// data.platforms[0].entries[0].tag -> "@magicmanta"`;

const CURL_SNIPPET = `curl -s https://magicmanta.com/api/public/radar \\
  -H "content-type: application/json" \\
  -d '{"url":"magicmanta.com"}'`;

const MCP_SNIPPET = `{
  "mcpServers": {
    "magicmanta": { "url": "https://magicmanta.com/mcp" }
  }
}`;

function Snippet({ title, code, accent }: { title: string; code: string; accent: string }) {
  return (
    <div className="p-space-md gap-space-sm flex flex-col border-3 border-outline-variant bg-grit-black shadow-stamp-lg">
      <div className="flex items-center justify-between">
        <span className={`font-label-stamp text-label-stamp px-2 py-1 uppercase ${accent}`}>{title}</span>
        <button
          onClick={() => copyText(code, title)}
          className="font-label-stamp text-label-stamp text-paper-distressed border-2 border-paper-distressed px-2 py-1 uppercase hover:bg-paper-distressed hover:text-grit-black"
        >
          Copy cmd
        </button>
      </div>
      <pre className="font-code-terminal text-code-terminal text-acid-lime overflow-x-auto whitespace-pre">{code}</pre>
    </div>
  );
}

const FEATURES = [
  { t: "BOT BYPASS", d: "Rotating fetch signatures and www fallback when a surface blocks automated visitors." },
  { t: "STRICT TS", d: "Every result is fully typed: evidence, sources, reciprocal state and signal rating." },
  { t: "EVIDENCE CHAIN", d: "No black-box scores. Each handle carries the exact lines that proved it." },
  { t: "MCP READY", d: "Point an agent at the MCP endpoint and let it tag brands correctly on its own." },
];

function Adapters() {
  return (
    <Shell>
      <SubHeader
        badge="FRAMEWORK_ADAPTERS"
        badgeClass="bg-acid-lime text-grit-black"
        note="// DROP M4G1C M4NT4 INTO YOUR OWN STACK //"
        right={<span>[SDK v0.9.2]</span>}
      />
      <section className="px-margin-mobile sm:px-margin py-space-xl gap-space-xl mx-auto flex max-w-7xl flex-col">
        <div className="gap-space-md flex flex-col">
          <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-paper-distressed leading-none uppercase">
            AWESOME{" "}
            <span className="text-paper-distressed inline-block rotate-1 bg-electric-magenta px-2 shadow-stamp-lime">
              FRAMEWORK
            </span>
          </h1>
          <p className="font-body-md text-body-lg text-on-surface-variant max-w-2xl">
            The radar core is framework-agnostic on purpose. Same engine, three doorways.
          </p>
        </div>

        <h2 className="font-headline text-headline-md text-paper-distressed uppercase">THREE DOORWAYS IN</h2>
        <div className="gap-space-md grid lg:grid-cols-3">
          <Snippet title="REACT HOOK" code={HOOK_SNIPPET} accent="bg-primary-container text-on-primary-container" />
          <Snippet title="REST" code={CURL_SNIPPET} accent="bg-cyber-cyan text-grit-black" />
          <Snippet title="MCP" code={MCP_SNIPPET} accent="bg-electric-magenta text-paper-distressed" />
        </div>

        <h2 className="font-headline text-headline-md text-paper-distressed uppercase">UNDER THE HOOD</h2>
        <div className="gap-space-md grid sm:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.t}
              className="p-space-md border-3 border-outline-variant bg-surface-low shadow-stamp-md"
            >
              <p className="font-label-stamp text-label-stamp text-primary-container uppercase">{f.t}</p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
