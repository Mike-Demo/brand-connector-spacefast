import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaResizeObserverProps extends WaBaseProps {
  /**
   * Disables the observer.
   * @default false
   */
  disabled?: boolean;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Resize observers watch their slotted elements for size changes and emit an event when they occur. Provides a
 * Renders the `<wa-resize-observer>` Web Awesome custom element.
 * Slots: (default).
 * Events: wa-resize (listen with the matching on* prop or a ref).
 */
export const WaResizeObserver = forwardRef<HTMLElement, WaResizeObserverProps>(function WaResizeObserver(
  { children, ...props }: WaResizeObserverProps,
  ref,
): ReactNode {
  return (
    <wa-resize-observer ref={ref} {...waAttributes(props)}>
      {children}
    </wa-resize-observer>
  );
});
