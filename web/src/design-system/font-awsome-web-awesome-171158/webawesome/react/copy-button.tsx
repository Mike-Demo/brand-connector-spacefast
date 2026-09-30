import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaCopyButtonProps extends WaBaseProps {
  /**
   * The text value to copy.
   * @default ''
   */
  value?: string;

  /**
   * An id that references an element in the same document from which data will be copied. If both this and `value` are
   * present, this value will take precedence. By default, the target element's `textContent` will be copied. To copy an
   * attribute, append the attribute name wrapped in square brackets, e.g. `from="el[value]"`. To copy a property,
   * append a dot and the property name, e.g. `from="el.value"`.
   * @default ''
   */
  from?: string;

  /**
   * Disables the copy button.
   * @default false
   */
  disabled?: boolean;

  /**
   * A custom label to use as the accessible name and tooltip text in the default copy state.
   * @default ''
   */
  "copy-label"?: string;

  /**
   * A custom label to show in the tooltip after copying.
   * @default ''
   */
  "success-label"?: string;

  /**
   * A custom label to show in the tooltip when a copy error occurs.
   * @default ''
   */
  "error-label"?: string;

  /**
   * The length of time to show feedback before restoring the default trigger.
   * @default 1000
   */
  "feedback-duration"?: number;

  /**
   * The preferred placement of the tooltip.
   * @default 'top'
   */
  "tooltip-placement"?: 'top' | 'right' | 'bottom' | 'left';

  /**
   * Controls the built-in tooltip. `full` (default) shows the tooltip on hover and focus and during copy feedback.
   * `copy` keeps the tooltip silent on hover/focus and only shows it briefly to confirm a successful or failed copy.
   * `none` disables the tooltip entirely. Applies to both the default and custom triggers.
   * @default 'full'
   */
  tooltip?: 'full' | 'copy' | 'none';

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Copy buttons copy text to the clipboard when the user activates them. They provide built-in success and
 * Renders the `<wa-copy-button>` Web Awesome custom element.
 * Slots: (default), copy-icon, success-icon, error-icon.
 * Events: wa-copy, wa-error (listen with the matching on* prop or a ref).
 */
export const WaCopyButton = forwardRef<HTMLElement, WaCopyButtonProps>(function WaCopyButton(
  { children, ...props }: WaCopyButtonProps,
  ref,
): ReactNode {
  return (
    <wa-copy-button ref={ref} {...waAttributes(props)}>
      {children}
    </wa-copy-button>
  );
});
