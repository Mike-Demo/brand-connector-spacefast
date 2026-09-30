import type { ReactElement } from "react";

import { WaIcon } from "../react/icon";
import { FONT_AWESOME_VERSION, WEB_AWESOME_VERSION } from "../setup";

import "./patterns.css";

export interface LicenseEntry {
  readonly name: string;
  readonly author: string;
  readonly license: string;
  readonly url: string;
  readonly note?: string;
}

export interface LicenseGroup {
  readonly title: string;
  readonly entries: readonly LicenseEntry[];
}

/**
 * Credits every project built on this design system owes. Spread these into
 * the page's groups and add the project's own fonts, artwork, libraries, and
 * data sources alongside them.
 */
export const baseCredits: readonly LicenseEntry[] = [
  {
    name: "Web Awesome",
    author: "Font Awesome / Fonticons, Inc.",
    license: "MIT",
    url: "https://github.com/shoelace-style/webawesome/blob/next/LICENSE.md",
    note: `Version ${WEB_AWESOME_VERSION}. The web component library behind every element in this interface.`,
  },
  {
    name: "Font Awesome Free",
    author: "Fonticons, Inc.",
    license: "CC BY 4.0 (icons), SIL OFL 1.1 (fonts), MIT (code)",
    url: "https://fontawesome.com/license/free",
    note: `Version ${FONT_AWESOME_VERSION}. All iconography in this interface.`,
  },
  {
    name: "hCaptcha",
    author: "Intuition Machines, Inc.",
    license: "Proprietary service (hCaptcha Terms of Service)",
    url: "https://www.hcaptcha.com/terms",
    note: "Bot protection. Only credited when the app uses the HCaptcha component; its widget script loads from hCaptcha's own domain.",
  },
  {
    name: "React",
    author: "Meta and contributors",
    license: "MIT",
    url: "https://github.com/facebook/react/blob/main/LICENSE",
  },
  {
    name: "TanStack Start & Router",
    author: "Tanner Linsley and contributors",
    license: "MIT",
    url: "https://github.com/TanStack/router/blob/main/LICENSE",
  },
];

export interface LicensesPageProps {
  /** Page heading. Defaults to "Open source & credits". */
  readonly heading?: string;
  /** Intro paragraph under the heading. */
  readonly lede?: string;
  /** Link target for the back link. Defaults to "/". */
  readonly backHref?: string;
  /** Back link text. Defaults to "Back home". */
  readonly backLabel?: string;
  /**
   * Credit groups, rendered in order. Defaults to a single "Open source
   * libraries" group holding {@link baseCredits}.
   */
  readonly groups?: readonly LicenseGroup[];
  readonly className?: string;
}

function CreditList({ entries }: { entries: readonly LicenseEntry[] }): ReactElement {
  return (
    <ul className="wa-licenses-list">
      {entries.map((entry) => (
        <li key={entry.name} className="wa-licenses-entry">
          <div className="wa-licenses-entry-head">
            <h3>{entry.name}</h3>
            <span className="wa-licenses-entry-license">{entry.license}</span>
          </div>
          <p className="wa-licenses-entry-author">{entry.author}</p>
          {entry.note ? <p className="wa-licenses-entry-note">{entry.note}</p> : null}
          <a
            className="wa-licenses-entry-link"
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            License source
            <WaIcon name="arrow-up-right-from-square" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

/**
 * The standard open-source license page. Every project ships this at
 * `/licenses`, linked from the standard footer, and adds its own credits to
 * the default groups.
 */
export function LicensesPage({
  heading = "Open source & credits",
  lede = "This app is built on open source software and freely licensed artwork. Everything it depends on is credited below.",
  backHref = "/",
  backLabel = "Back home",
  groups = [{ title: "Open source libraries", entries: baseCredits }],
  className,
}: LicensesPageProps): ReactElement {
  return (
    <div className={className ? `wa-licenses ${className}` : "wa-licenses"}>
      <a className="wa-licenses-back" href={backHref}>
        <WaIcon name="arrow-left" aria-hidden="true" />
        {backLabel}
      </a>

      <header className="wa-stack wa-gap-xs" style={{ marginBlockStart: "var(--wa-space-l)" }}>
        <h1>{heading}</h1>
        <p className="wa-licenses-lede">{lede}</p>
        <a
          href="https://app.aikido.dev/audit-report/external/smlvhLoPnScdRnVeF7TjudEr/request"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Aikido Security Audit Report (opens in new tab)"
        >
          <img
            src="https://app.aikido.dev/assets/badges/full-light-theme.svg"
            alt="Aikido Security Audit Report"
            height={40}
          />
        </a>
      </header>

      {groups.map((group) => (
        <section key={group.title} className="wa-licenses-group">
          <h2>{group.title}</h2>
          <CreditList entries={group.entries} />
        </section>
      ))}
    </div>
  );
}
