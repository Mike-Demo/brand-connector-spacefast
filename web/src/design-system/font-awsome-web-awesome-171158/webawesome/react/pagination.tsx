import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaPaginationProps extends WaBaseProps {
  /**
   * The total number of items to paginate.
   * @default 0
   */
  total?: number;

  /**
   * The number of items shown per page.
   * @default 10
   */
  "page-size"?: number;

  /**
   * The current page, starting at 1.
   * @default 1
   */
  page?: number;

  /**
   * The number of pages to show on each side of the current page.
   * @default 2
   */
  "sibling-count"?: number;

  /**
   * The number of pages to always show at the start and end.
   * @default 1
   */
  "boundary-count"?: number;

  /**
   * Hides the previous and next buttons.
   * @default false
   */
  "without-nav"?: boolean;

  /**
   * Shows buttons that jump to the first and last pages.
   * @default false
   */
  "with-edges"?: boolean;

  /**
   * Shows a summary of the items on the current page, e.g. "1–10 of 237".
   * @default false
   */
  "with-summary"?: boolean;

  /**
   * The pagination's layout. The default `standard` format shows the full page list with ellipses; `compact` collapses
   * it into a short "1 of 5" label flanked by the previous and next buttons, useful in tight spaces like toolbars and
   * cards.
   * @default 'standard'
   */
  format?: 'standard' | 'compact';

  /**
   * A URL template used to render page items as links instead of buttons. When set, items render as `<a>` elements for
   * SSR, SEO, and no-JS support. Provide a string with `{page}` as a placeholder for the page number, e.g.
   * `/products?page={page}`. In JavaScript, you can also assign a function that receives the page number and returns
   * the URL, e.g. `el.hrefTemplate = page => \`/products?page=${page}\``.
   * @default ''
   */
  "href-template"?: string;

  /**
   * Renders nothing when there's only one page.
   * @default false
   */
  "hide-single-page"?: boolean;

  /**
   * A label that describes the pagination to assistive devices. This won't be shown on the screen, but it will be
   * announced by screen readers. Especially useful when more than one pagination control exists on the same page.
   * @default ''
   */
  label?: string;

  /**
   * The pagination's visual appearance.
   * @default 'outlined'
   */
  appearance?: 'outlined' | 'filled' | 'plain';

  /**
   * Disables the pagination.
   * @default false
   */
  disabled?: boolean;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Pagination splits long lists of content into pages, letting users navigate between them.
 * Renders the `<wa-pagination>` Web Awesome custom element.
 * Slots: previous-icon, next-icon, first-icon, last-icon.
 * Events: wa-before-page-change, wa-page-change (listen with the matching on* prop or a ref).
 */
export const WaPagination = forwardRef<HTMLElement, WaPaginationProps>(function WaPagination(
  { children, ...props }: WaPaginationProps,
  ref,
): ReactNode {
  return (
    <wa-pagination ref={ref} {...waAttributes(props)}>
      {children}
    </wa-pagination>
  );
});
