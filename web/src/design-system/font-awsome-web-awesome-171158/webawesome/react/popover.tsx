import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaPopoverProps extends WaBaseProps {
  /**
   * The preferred placement of the popover. Note that the actual placement may vary as needed to keep the popover
   * inside of the viewport.
   * @default 'top'
   */
  placement?: string;

  /**
   * Shows or hides the popover.
   * @default false
   */
  open?: boolean;

  /**
   * The distance in pixels from which to offset the popover away from its target.
   * @default 8
   */
  distance?: number;

  /**
   * The distance in pixels from which to offset the popover along its target.
   * @default 0
   */
  skidding?: number;

  /**
   * The ID of the popover's anchor element. This must be an interactive/focusable element such as a button.
   * @default null
   */
  for?: string;

  /**
   * Removes the arrow from the popover.
   * @default false
   */
  "without-arrow"?: boolean;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Popovers display contextual content and interactive elements in a floating panel anchored to a trigger. Use
 * Renders the `<wa-popover>` Web Awesome custom element.
 * Slots: (default).
 * Events: wa-show, wa-after-show, wa-hide, wa-after-hide (listen with the matching on* prop or a ref).
 */
export const WaPopover = forwardRef<HTMLElement, WaPopoverProps>(function WaPopover(
  { children, ...props }: WaPopoverProps,
  ref,
): ReactNode {
  return (
    <wa-popover ref={ref} {...waAttributes(props)}>
      {children}
    </wa-popover>
  );
});
