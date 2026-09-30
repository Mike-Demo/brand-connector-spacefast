import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaTabGroupProps extends WaBaseProps {
  /**
   * Sets the active tab.
   * @default ''
   */
  active?: string;

  /**
   * The placement of the tabs.
   * @default 'top'
   */
  placement?: 'top' | 'bottom' | 'start' | 'end';

  /**
   * When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
   * manual, the tab will receive focus but will not show until the user presses spacebar or enter.
   * @default 'auto'
   */
  activation?: 'auto' | 'manual';

  /**
   * Disables the scroll arrows that appear when tabs overflow.
   * @default false
   */
  "without-scroll-controls"?: boolean;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Tab groups organize related content into a single container that displays one panel at a time, with tabs for
 * Renders the `<wa-tab-group>` Web Awesome custom element.
 * Slots: (default), nav.
 * Events: wa-tab-show, wa-tab-hide (listen with the matching on* prop or a ref).
 */
export const WaTabGroup = forwardRef<HTMLElement, WaTabGroupProps>(function WaTabGroup(
  { children, ...props }: WaTabGroupProps,
  ref,
): ReactNode {
  return (
    <wa-tab-group ref={ref} {...waAttributes(props)}>
      {children}
    </wa-tab-group>
  );
});
