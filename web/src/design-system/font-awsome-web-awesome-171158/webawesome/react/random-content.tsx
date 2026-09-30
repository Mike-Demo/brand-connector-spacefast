import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaRandomContentProps extends WaBaseProps {
  /**
   * Number of children to show simultaneously. Clamped to [1, childCount].
   * @default 1
   */
  items?: number;

  /**
   * Selection strategy: `unique` (default), `random`, or `sequence`.
   * @default 'unique'
   */
  mode?: 'random' | 'unique' | 'sequence';

  /**
   * Rotate the content automatically. Set the cadence with `autoplay-interval`.
   * @default false
   */
  autoplay?: boolean;

  /**
   * Autoplay cadence in milliseconds.
   * @default 3000
   */
  "autoplay-interval"?: number;

  /**
   * Entrance animation for newly shown children.
   * @default 'none'
   */
  animation?: 'none' | 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right';

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Selects one or more child elements at random and displays them, hiding the rest.
 * Renders the `<wa-random-content>` Web Awesome custom element.
 * Slots: (default).
 * Events: wa-content-change (listen with the matching on* prop or a ref).
 */
export const WaRandomContent = forwardRef<HTMLElement, WaRandomContentProps>(function WaRandomContent(
  { children, ...props }: WaRandomContentProps,
  ref,
): ReactNode {
  return (
    <wa-random-content ref={ref} {...waAttributes(props)}>
      {children}
    </wa-random-content>
  );
});
