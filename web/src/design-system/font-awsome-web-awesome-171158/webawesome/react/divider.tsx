import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaDividerProps extends WaBaseProps {
  /**
   * Sets the divider's orientation.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Dividers visually separate or group adjacent elements with a horizontal or vertical line. Use them to
 * Renders the `<wa-divider>` Web Awesome custom element.
 */
export const WaDivider = forwardRef<HTMLElement, WaDividerProps>(function WaDivider(
  { children, ...props }: WaDividerProps,
  ref,
): ReactNode {
  return (
    <wa-divider ref={ref} {...waAttributes(props)}>
      {children}
    </wa-divider>
  );
});
