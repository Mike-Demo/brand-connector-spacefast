import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaDetailsProps extends WaBaseProps {
  /**
   * Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you
   * can use the `show()` and `hide()` methods and this attribute will reflect the details' open state.
   * @default false
   */
  open?: boolean;

  /**
   * The summary to show in the header. If you need to display HTML, use the `summary` slot instead.
   */
  summary?: string;

  /**
   * Groups related details elements. When one opens, others with the same name will close.
   */
  name?: string;

  /**
   * Disables the details so it can't be toggled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The element's visual appearance.
   * @default 'outlined'
   */
  appearance?: 'filled' | 'outlined' | 'filled-outlined' | 'plain';

  /**
   * The location of the expand/collapse icon.
   * @default 'end'
   */
  "icon-placement"?: 'start' | 'end';

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Details display a brief summary and expand to reveal additional content. Use them to progressively disclose
 * Renders the `<wa-details>` Web Awesome custom element.
 * Slots: (default), summary, expand-icon, collapse-icon.
 * Events: wa-show, wa-after-show, wa-hide, wa-after-hide (listen with the matching on* prop or a ref).
 */
export const WaDetails = forwardRef<HTMLElement, WaDetailsProps>(function WaDetails(
  { children, ...props }: WaDetailsProps,
  ref,
): ReactNode {
  return (
    <wa-details ref={ref} {...waAttributes(props)}>
      {children}
    </wa-details>
  );
});
