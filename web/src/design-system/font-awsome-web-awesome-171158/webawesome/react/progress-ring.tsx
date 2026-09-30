import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaProgressRingProps extends WaBaseProps {
  /**
   * The current progress as a percentage, 0 to 100.
   * @default 0
   */
  value?: number;

  /**
   * A custom label for assistive devices.
   * @default ''
   */
  label?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Progress rings show how far along a determinate operation is using a circular indicator. Use them as a
 * Renders the `<wa-progress-ring>` Web Awesome custom element.
 * Slots: (default).
 */
export const WaProgressRing = forwardRef<HTMLElement, WaProgressRingProps>(function WaProgressRing(
  { children, ...props }: WaProgressRingProps,
  ref,
): ReactNode {
  return (
    <wa-progress-ring ref={ref} {...waAttributes(props)}>
      {children}
    </wa-progress-ring>
  );
});
