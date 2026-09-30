import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaSpinnerProps extends WaBaseProps {
  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Spinners indicate that an operation is in progress when the duration is unknown. Use them for loading states
 * Renders the `<wa-spinner>` Web Awesome custom element.
 */
export const WaSpinner = forwardRef<HTMLElement, WaSpinnerProps>(function WaSpinner(
  { children, ...props }: WaSpinnerProps,
  ref,
): ReactNode {
  return (
    <wa-spinner ref={ref} {...waAttributes(props)}>
      {children}
    </wa-spinner>
  );
});
