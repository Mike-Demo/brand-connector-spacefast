import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaBreadcrumbProps extends WaBaseProps {
  /**
   * The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by
   * screen readers and other assistive devices to provide more context for users.
   * @default ''
   */
  label?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Breadcrumbs display a trail of links that show users where they are in a site's hierarchy. They help users
 * Renders the `<wa-breadcrumb>` Web Awesome custom element.
 * Slots: (default), separator.
 */
export const WaBreadcrumb = forwardRef<HTMLElement, WaBreadcrumbProps>(function WaBreadcrumb(
  { children, ...props }: WaBreadcrumbProps,
  ref,
): ReactNode {
  return (
    <wa-breadcrumb ref={ref} {...waAttributes(props)}>
      {children}
    </wa-breadcrumb>
  );
});
