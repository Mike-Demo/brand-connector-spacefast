import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaTooltipProps extends WaBaseProps {
  /**
   * The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
   * inside of the viewport.
   * @default 'top'
   */
  placement?: string;

  /**
   * Disables the tooltip so it won't show when triggered.
   * @default false
   */
  disabled?: boolean;

  /**
   * The distance in pixels from which to offset the tooltip away from its target.
   * @default 8
   */
  distance?: number;

  /**
   * Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods.
   * @default false
   */
  open?: boolean;

  /**
   * The distance in pixels from which to offset the tooltip along its target.
   * @default 0
   */
  skidding?: number;

  /**
   * The amount of time to wait before showing the tooltip when the user mouses in.
   * @default 150
   */
  "show-delay"?: number;

  /**
   * The amount of time to wait before hiding the tooltip when the user mouses out.
   * @default 0
   */
  "hide-delay"?: number;

  /**
   * Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
   * options can be passed by separating them with a space. When manual is used, the tooltip must be activated
   * programmatically.
   * @default 'hover focus'
   */
  trigger?: string;

  /**
   * Removes the arrow from the tooltip.
   * @default false
   */
  "without-arrow"?: boolean;

  /**
   * @default null
   */
  for?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Tooltips display brief contextual information when the user hovers, focuses, or taps a target element.
 * Renders the `<wa-tooltip>` Web Awesome custom element.
 * Slots: (default).
 * Events: wa-show, wa-after-show, wa-hide, wa-after-hide (listen with the matching on* prop or a ref).
 */
export const WaTooltip = forwardRef<HTMLElement, WaTooltipProps>(function WaTooltip(
  { children, ...props }: WaTooltipProps,
  ref,
): ReactNode {
  return (
    <wa-tooltip ref={ref} {...waAttributes(props)}>
      {children}
    </wa-tooltip>
  );
});
