import { useEffect, useState } from "react";
import type { ReactElement } from "react";

import { WaIcon } from "../react/icon";

import "./patterns.css";

export interface SiteFooterSocialLink {
  /** Accessible label, e.g. "MikeDemo on LinkedIn". */
  readonly label: string;
  /** URL or site path. Absolute URLs open in a new tab. */
  readonly href: string;
  /** Font Awesome brands icon name, e.g. "linkedin". */
  readonly icon: string;
  /** Visible text next to the icon. */
  readonly text: string;
}

/** The standard social links every project ships with. */
export const DEFAULT_SOCIAL_LINKS: readonly SiteFooterSocialLink[] = [
  {
    label: "Open source page",
    href: "/licenses",
    icon: "github",
    text: "Open Source",
  },
  {
    label: "MikeDemo on LinkedIn",
    href: "https://www.linkedin.com/in/mikedemopoulos",
    icon: "linkedin",
    text: "LinkedIn",
  },
  {
    label: "MikeDemo on X",
    href: "https://x.com/mike_demo",
    icon: "x-twitter",
    text: "X",
  },
  {
    label: "@demo on tweet.app",
    href: "https://app.tweet.app/post/92206629-1525-4a74-8f51-39e226fc9e75",
    icon: "twitter",
    text: "tweet.app",
  },
  {
    label: "MikeDemo on Threads",
    href: "https://www.threads.com/@mdemop",
    icon: "threads",
    text: "Threads",
  },
];

export interface SiteFooterProps {
  /** Attribution line. Defaults to "Made by MikeDemo". */
  readonly madeBy?: string;
  /** Social links. Defaults to DEFAULT_SOCIAL_LINKS. */
  readonly socialLinks?: readonly SiteFooterSocialLink[];
  /**
   * Copyright year. Defaults to the current year, resolved after hydration
   * so server and client markup always match.
   */
  readonly year?: number;
  readonly className?: string;
  /** Slot name, e.g. "footer" when placed inside <wa-page>. */
  readonly slot?: string;
}

/**
 * The standard site footer: attribution, copyright year, and social links.
 * The GitHub icon links to the open-source page. Include it once per app at
 * the bottom of the shell — never hand-roll a replacement.
 */
export function SiteFooter({
  madeBy = "Made by MikeDemo",
  socialLinks = DEFAULT_SOCIAL_LINKS,
  year,
  className,
  slot,
}: SiteFooterProps): ReactElement {
  const [resolvedYear, setResolvedYear] = useState<number | undefined>(year);

  useEffect(() => {
    if (year === undefined) setResolvedYear(new Date().getFullYear());
  }, [year]);

  return (
    <footer slot={slot} className={className ? `wa-site-footer ${className}` : "wa-site-footer"}>
      <div className="wa-site-footer-meta">
        <span>{madeBy}</span>
        {resolvedYear === undefined ? null : (
          <span aria-label={`Copyright ${resolvedYear}`}>© {resolvedYear}</span>
        )}
      </div>

      {socialLinks.length === 0 ? null : (
        <nav aria-label="Social links">
          {socialLinks.map((link) => {
            const isExternal = /^https?:\/\//.test(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-label={isExternal ? `${link.label} (opens in new tab)` : link.label}
              >
                <WaIcon family="brands" name={link.icon} aria-hidden="true" />
                {link.text}
              </a>
            );
          })}
        </nav>
      )}
    </footer>
  );
}
