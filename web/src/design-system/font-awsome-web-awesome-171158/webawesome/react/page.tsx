import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaPageProps extends WaBaseProps {
  /**
   * The view is a reflection of the "mobileBreakpoint", when the page is larger than the `mobile-breakpoint` (768px by
   * default), it is considered to be a "desktop" view. The view is merely a way to distinguish when to show/hide the
   * navigation. You can use additional media queries to make other adjustments to content as necessary.
   * The default is "desktop" because the "mobile navigation drawer" isn't accessible via SSR due to drawer requiring JS.
   * @default 'desktop'
   */
  view?: 'mobile' | 'desktop';

  /**
   * Whether or not the navigation drawer is open. Note, the navigation drawer is only "open" on mobile views.
   * @default false
   */
  "nav-open"?: boolean;

  /**
   * At what page width to hide the "navigation" slot and collapse into a hamburger button.
   * Accepts both numbers (interpreted as px) and CSS lengths (e.g. `50em`), which are resolved based on the root element.
   * @default '768px'
   */
  "mobile-breakpoint"?: string;

  /**
   * Where to place the navigation when in the mobile viewport.
   * @default 'start'
   */
  "navigation-placement"?: 'start' | 'end';

  /**
   * Determines whether or not to hide the default hamburger button.
   * This will automatically flip to "true" if you add an element with `data-toggle-nav` anywhere in the element light DOM.
   * Generally this will be set for you and you don't need to do anything, unless you're using SSR, in which case you should set this manually for initial page loads.
   * @default false
   */
  "disable-navigation-toggle"?: boolean;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Pages scaffold an entire application layout with header, navigation, sidebar, main content, aside, and
 * Renders the `<wa-page>` Web Awesome custom element.
 * Slots: (default), banner, header, subheader, menu, navigation-header, navigation, navigation-footer, navigation-toggle, navigation-toggle-icon, main-header, main-footer, aside, skip-to-content, footer.
 */
export const WaPage = forwardRef<HTMLElement, WaPageProps>(function WaPage(
  { children, ...props }: WaPageProps,
  ref,
): ReactNode {
  return (
    <wa-page ref={ref} {...waAttributes(props)}>
      {children}
    </wa-page>
  );
});
