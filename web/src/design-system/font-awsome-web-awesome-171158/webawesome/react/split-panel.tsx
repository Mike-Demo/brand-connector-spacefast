import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaSplitPanelProps extends WaBaseProps {
  /**
   * The current position of the divider from the primary panel's edge as a percentage 0-100. Defaults to 50% of the
   * container's initial size.
   * @default 50
   */
  position?: number;

  /**
   * The current position of the divider from the primary panel's edge in pixels.
   */
  "position-in-pixels"?: number;

  /**
   * Sets the split panel's orientation.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Disables resizing. Note that the position may still change as a result of resizing the host element.
   * @default false
   */
  disabled?: boolean;

  /**
   * If no primary panel is designated, both panels will resize proportionally when the host element is resized. If a
   * primary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the
   * host element is resized.
   */
  primary?: string;

  /**
   * One or more space-separated values at which the divider should snap. Values can be in pixels or percentages, e.g.
   * `"100px 50%"`.
   */
  snap?: string;

  /**
   * How close the divider must be to a snap point until snapping occurs.
   * @default 12
   */
  "snap-threshold"?: number;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Split panels display two adjacent panels separated by a draggable divider, letting users resize each side to
 * Renders the `<wa-split-panel>` Web Awesome custom element.
 * Slots: start, end, divider.
 * Events: wa-reposition (listen with the matching on* prop or a ref).
 */
export const WaSplitPanel = forwardRef<HTMLElement, WaSplitPanelProps>(function WaSplitPanel(
  { children, ...props }: WaSplitPanelProps,
  ref,
): ReactNode {
  return (
    <wa-split-panel ref={ref} {...waAttributes(props)}>
      {children}
    </wa-split-panel>
  );
});
