import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaButtonGroupProps extends WaBaseProps {
  /**
   * A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
   * devices when interacting with the control and is strongly recommended.
   * @default ''
   */
  label?: string;

  /**
   * The button group's orientation.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Button groups combine related buttons into a single visual unit. Use them for toolbars, segmented controls,
 * Renders the `<wa-button-group>` Web Awesome custom element.
 * Slots: (default).
 */
export const WaButtonGroup = forwardRef<HTMLElement, WaButtonGroupProps>(function WaButtonGroup(
  { children, ...props }: WaButtonGroupProps,
  ref,
): ReactNode {
  return (
    <wa-button-group ref={ref} {...waAttributes(props)}>
      {children}
    </wa-button-group>
  );
});
