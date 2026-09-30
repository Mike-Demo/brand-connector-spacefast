import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaScrollerProps extends WaBaseProps {
  /**
   * The scroller's orientation.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Removes the visible scrollbar.
   * @default false
   */
  "without-scrollbar"?: boolean;

  /**
   * Removes the shadows.
   * @default false
   */
  "without-shadow"?: boolean;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Scrollers wrap overflowing content in an accessible container with visual cues that help users recognize and
 * Renders the `<wa-scroller>` Web Awesome custom element.
 * Slots: (default).
 */
export const WaScroller = forwardRef<HTMLElement, WaScrollerProps>(function WaScroller(
  { children, ...props }: WaScrollerProps,
  ref,
): ReactNode {
  return (
    <wa-scroller ref={ref} {...waAttributes(props)}>
      {children}
    </wa-scroller>
  );
});
