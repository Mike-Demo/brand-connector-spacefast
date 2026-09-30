import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaComparisonProps extends WaBaseProps {
  /**
   * The position of the divider as a percentage.
   * @default 50
   */
  position?: number;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Comparisons show the visual differences between two pieces of similar content using a draggable divider. Use
 * Renders the `<wa-comparison>` Web Awesome custom element.
 * Slots: before, after, handle.
 * Events: change (listen with the matching on* prop or a ref).
 */
export const WaComparison = forwardRef<HTMLElement, WaComparisonProps>(function WaComparison(
  { children, ...props }: WaComparisonProps,
  ref,
): ReactNode {
  return (
    <wa-comparison ref={ref} {...waAttributes(props)}>
      {children}
    </wa-comparison>
  );
});
