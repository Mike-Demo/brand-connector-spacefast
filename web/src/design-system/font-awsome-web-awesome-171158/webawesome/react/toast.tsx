import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaToastProps extends WaBaseProps {
  /**
   * The placement of the toast stack on the screen.
   * @default 'top-end'
   */
  placement?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Toasts display brief, non-blocking notifications that appear temporarily above the page content.
 * Renders the `<wa-toast>` Web Awesome custom element.
 * Slots: (default).
 */
export const WaToast = forwardRef<HTMLElement, WaToastProps>(function WaToast(
  { children, ...props }: WaToastProps,
  ref,
): ReactNode {
  return (
    <wa-toast ref={ref} {...waAttributes(props)}>
      {children}
    </wa-toast>
  );
});
