import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaCalloutProps extends WaBaseProps {
  /**
   * The callout's theme variant. Defaults to `brand` if not within another element with a variant.
   * @default 'brand'
   */
  variant?: 'brand' | 'neutral' | 'success' | 'warning' | 'danger';

  /**
   * The callout's visual appearance.
   */
  appearance?: 'accent' | 'filled' | 'outlined' | 'plain' | 'filled-outlined';

  /**
   * The callout's size.
   * @default 'm'
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'small' | 'medium' | 'large';

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Callouts display important messages inline with surrounding content. Use them to highlight tips, warnings,
 * Renders the `<wa-callout>` Web Awesome custom element.
 * Slots: (default), icon.
 */
export const WaCallout = forwardRef<HTMLElement, WaCalloutProps>(function WaCallout(
  { children, ...props }: WaCalloutProps,
  ref,
): ReactNode {
  return (
    <wa-callout ref={ref} {...waAttributes(props)}>
      {children}
    </wa-callout>
  );
});
