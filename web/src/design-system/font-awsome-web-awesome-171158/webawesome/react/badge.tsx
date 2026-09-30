import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaBadgeProps extends WaBaseProps {
  /**
   * The badge's theme variant. Defaults to `brand` if not within another element with a variant.
   * @default 'brand'
   */
  variant?: 'brand' | 'neutral' | 'success' | 'warning' | 'danger';

  /**
   * The badge's visual appearance.
   * @default 'accent'
   */
  appearance?: 'accent' | 'filled' | 'outlined' | 'filled-outlined';

  /**
   * Draws a pill-style badge with rounded edges.
   * @default false
   */
  pill?: boolean;

  /**
   * Adds an animation to draw attention to the badge.
   * @default 'none'
   */
  attention?: 'none' | 'pulse' | 'bounce';

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Badges draw attention to adjacent content by displaying a status, count, or label. Use them to highlight
 * Renders the `<wa-badge>` Web Awesome custom element.
 * Slots: (default), start, end.
 */
export const WaBadge = forwardRef<HTMLElement, WaBadgeProps>(function WaBadge(
  { children, ...props }: WaBadgeProps,
  ref,
): ReactNode {
  return (
    <wa-badge ref={ref} {...waAttributes(props)}>
      {children}
    </wa-badge>
  );
});
