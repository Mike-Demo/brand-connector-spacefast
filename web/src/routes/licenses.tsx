import { createFileRoute } from "@tanstack/react-router";

import { Shell, SubHeader } from "@/components/diggr/Chrome";
import {
  LicensesPage,
  baseCredits,
  type LicenseEntry,
  type LicenseGroup,
} from "@/design-system/font-awsome-web-awesome-171158/webawesome/patterns/licenses";

export const Route = createFileRoute("/licenses")({
  head: () => ({
    meta: [
      { title: "M4G1C M4NT4 // Open source & credits" },
      {
        name: "description",
        content:
          "Open source credits, digital carbon disclosure, and attributions for Brand Connector Pro.",
      },
      { property: "og:title", content: "M4G1C M4NT4 // Open source & credits" },
      {
        property: "og:description",
        content: "Every library, typeface, and service this radar runs on — plus its digital carbon disclosure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Licenses,
});

const designSystem: readonly LicenseEntry[] = baseCredits.filter(
  (entry) => entry.name === "Web Awesome" || entry.name === "Font Awesome Free",
);

const framework: readonly LicenseEntry[] = [
  ...baseCredits.filter(
    (entry) => entry.name === "React" || entry.name === "TanStack Start & Router",
  ),
  {
    name: "TanStack Query",
    author: "Tanner Linsley and contributors",
    license: "MIT",
    url: "https://github.com/TanStack/query/blob/main/LICENSE",
    note: "Data fetching and caching wired into the router.",
  },
  {
    name: "Vite",
    author: "Evan You and contributors",
    license: "MIT",
    url: "https://github.com/vitejs/vite/blob/main/LICENSE",
    note: "Dev server and production bundler.",
  },
  {
    name: "TypeScript",
    author: "Microsoft Corporation",
    license: "Apache-2.0",
    url: "https://github.com/microsoft/TypeScript/blob/main/LICENSE.txt",
    note: "Every source file on this site is typed.",
  },
  {
    name: "Tailwind CSS",
    author: "Tailwind Labs, Inc.",
    license: "MIT",
    url: "https://github.com/tailwindlabs/tailwindcss/blob/main/LICENSE",
    note: "Utility styling layer under the grunge.",
  },
  {
    name: "Zod",
    author: "Colin McDonnell and contributors",
    license: "MIT",
    url: "https://github.com/colinhacks/zod/blob/main/LICENSE",
    note: "Schema validation for lookup data.",
  },
  {
    name: "lucide-react",
    author: "Lucide contributors",
    license: "ISC",
    url: "https://github.com/lucide-icons/lucide/blob/main/LICENSE",
    note: "Icon components.",
  },
  {
    name: "Sonner",
    author: "Emil Kowalski",
    license: "MIT",
    url: "https://github.com/emilkowalski/sonner/blob/main/LICENSE.md",
    note: "Toast notifications.",
  },
  {
    name: "Radix UI",
    author: "WorkOS",
    license: "MIT",
    url: "https://github.com/radix-ui/primitives/blob/main/LICENSE",
    note: "Unstyled primitives under the controls.",
  },
];

const typefaces: readonly LicenseEntry[] = [
  {
    name: "Space Grotesk",
    author: "Florian Karsten",
    license: "SIL Open Font License 1.1",
    url: "https://fonts.google.com/specimen/Space+Grotesk",
    note: "Display type for headlines.",
  },
  {
    name: "JetBrains Mono",
    author: "JetBrains",
    license: "SIL Open Font License 1.1",
    url: "https://fonts.google.com/specimen/JetBrains+Mono",
    note: "The mono face for data, labels, and terminal readouts.",
  },
  {
    name: "DM Sans",
    author: "Colophon Foundry",
    license: "SIL Open Font License 1.1",
    url: "https://fonts.google.com/specimen/DM+Sans",
    note: "Supporting text face.",
  },
];

const platform: readonly LicenseEntry[] = [
  {
    name: "Lovable",
    author: "Lovable",
    license: "Hosted platform",
    url: "https://lovable.dev",
    note: "Build, hosting, and deployment for this app.",
  },
];

const groups: readonly LicenseGroup[] = [
  { title: "Design system", entries: designSystem },
  { title: "Framework & tooling", entries: framework },
  { title: "Typefaces", entries: typefaces },
  { title: "Platform", entries: platform },
];

function Licenses() {
  return (
    <Shell>
      <SubHeader
        badge="OPEN SOURCE"
        badgeClass="bg-acid-lime text-grit-black"
        note="// LICENSES // CREDITS // CARBON //"
        right={<span>[EVERY DEBT PAID]</span>}
      />
      <div className="px-margin-mobile sm:px-margin py-space-xl mx-auto max-w-4xl">
        <LicensesPage
          heading="Open source & credits"
          lede="This radar is built on open source software and freely licensed typefaces. Everything it depends on is credited below."
          groups={groups}
          className="manta-licenses"
        />

        <section aria-labelledby="oss-heading" className="mt-space-xl border-t-2 border-primary-container pt-space-lg">
          <h2
            id="oss-heading"
            className="font-display-hero text-display-hero-mobile text-paper-distressed leading-none uppercase"
          >
            Open source
          </h2>
          <p className="font-code-terminal text-code-terminal text-on-surface-variant mt-space-sm">
            The code behind Brand Connector Pro is open source. Find MikeDemo on{" "}
            <a
              href="https://github.com/Mike-Demo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-container underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="carbon-heading" className="mt-space-xl border-t-2 border-primary-container pt-space-lg">
          <h2
            id="carbon-heading"
            className="font-display-hero text-display-hero-mobile text-paper-distressed leading-none uppercase"
          >
            Digital carbon
          </h2>
          <p className="font-code-terminal text-code-terminal text-on-surface-variant mt-space-sm">
            Homepage transfer is about 1016.0 KB, roughly 0.154 g of CO2 per
            visit. Estimated with CO2.js using the Sustainable Web Design Model
            v4, measured 2026-09-30. Hosting: origin on Lovable Cloud, served via
            Cloudflare (verified green hosting by the Green Web Foundation).
            Machine-readable disclosure:{" "}
            <a href="/carbon.txt" className="text-primary-container underline underline-offset-4">
              /carbon.txt
            </a>
            .
          </p>
        </section>
      </div>
    </Shell>
  );
}
