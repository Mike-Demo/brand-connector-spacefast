import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaBreadcrumbItemProps extends WaBaseProps {
  /**
   * Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered
   * internally. When unset, a button will be rendered instead.
   */
  href?: string;

  /**
   * Tells the browser where to open the link. Only used when `href` is set.
   */
  target?: string;

  /**
   * The `rel` attribute to use on the link. Only used when `href` is set.
   * @default 'noreferrer noopener'
   */
  rel?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Breadcrumb items represent individual links inside a breadcrumb, typically one per level of the site
 * Renders the `<wa-breadcrumb-item>` Web Awesome custom element.
 * Slots: (default), start, end, separator.
 */
export const WaBreadcrumbItem = forwardRef<HTMLElement, WaBreadcrumbItemProps>(function WaBreadcrumbItem(
  { children, ...props }: WaBreadcrumbItemProps,
  ref,
): ReactNode {
  return (
    <wa-breadcrumb-item ref={ref} {...waAttributes(props)}>
      {children}
    </wa-breadcrumb-item>
  );
});
