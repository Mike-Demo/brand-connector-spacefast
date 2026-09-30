import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaIntersectionObserverProps extends WaBaseProps {
  /**
   * Element ID to define the viewport boundaries for tracked targets.
   * @default null
   */
  root?: string;

  /**
   * Offset space around the root boundary. Accepts values like CSS margin syntax.
   * @default '0px'
   */
  "root-margin"?: string;

  /**
   * One or more space-separated values representing visibility percentages that trigger the observer callback.
   * @default '0'
   */
  threshold?: string;

  /**
   * CSS class applied to elements during intersection. Automatically removed when elements leave
   * the viewport, enabling pure CSS styling based on visibility state.
   * @default ''
   */
  "intersect-class"?: string;

  /**
   * If enabled, observation ceases after initial intersection.
   * @default false
   */
  once?: boolean;

  /**
   * Deactivates the intersection observer functionality.
   * @default false
   */
  disabled?: boolean;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Tracks immediate child elements and fires events as they move in and out of view. Useful for lazy loading,
 * Renders the `<wa-intersection-observer>` Web Awesome custom element.
 * Slots: (default).
 * Events: wa-intersect (listen with the matching on* prop or a ref).
 */
export const WaIntersectionObserver = forwardRef<HTMLElement, WaIntersectionObserverProps>(function WaIntersectionObserver(
  { children, ...props }: WaIntersectionObserverProps,
  ref,
): ReactNode {
  return (
    <wa-intersection-observer ref={ref} {...waAttributes(props)}>
      {children}
    </wa-intersection-observer>
  );
});
