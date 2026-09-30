import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaMutationObserverProps extends WaBaseProps {
  /**
   * Watches for changes to attributes. To watch only specific attributes, separate them by a space, e.g.
   * `attr="class id title"`. To watch all attributes, use `*`.
   */
  attr?: string;

  /**
   * Indicates whether or not the attribute's previous value should be recorded when monitoring changes.
   * @default false
   */
  "attr-old-value"?: boolean;

  /**
   * Watches for changes to the character data contained within the node.
   * @default false
   */
  "char-data"?: boolean;

  /**
   * Indicates whether or not the previous value of the node's text should be recorded.
   * @default false
   */
  "char-data-old-value"?: boolean;

  /**
   * Watches for the addition or removal of new child nodes.
   * @default false
   */
  "child-list"?: boolean;

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
 * Mutation observers watch for changes to an element's DOM tree and emit an event when they occur. Provides a
 * Renders the `<wa-mutation-observer>` Web Awesome custom element.
 * Slots: (default).
 * Events: wa-mutation (listen with the matching on* prop or a ref).
 */
export const WaMutationObserver = forwardRef<HTMLElement, WaMutationObserverProps>(function WaMutationObserver(
  { children, ...props }: WaMutationObserverProps,
  ref,
): ReactNode {
  return (
    <wa-mutation-observer ref={ref} {...waAttributes(props)}>
      {children}
    </wa-mutation-observer>
  );
});
