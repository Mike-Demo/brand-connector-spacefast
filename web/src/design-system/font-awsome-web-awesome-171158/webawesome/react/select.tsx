import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaSelectProps extends WaBaseProps {
  /**
   * The name of the select, submitted as a name/value pair with form data.
   * @default ''
   */
  name?: string;

  /**
   * The select's value. This will be a string for single select or an array for multi-select.
   */
  value?: string;

  /**
   * The select's size.
   * @default 'm'
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'small' | 'medium' | 'large';

  /**
   * Placeholder text to show as a hint when the select is empty.
   * @default ''
   */
  placeholder?: string;

  /**
   * Allows more than one option to be selected.
   * @default false
   */
  multiple?: boolean;

  /**
   * The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
   * indicate the number of additional items that are selected. Set to 0 to remove the limit.
   * @default 3
   */
  "max-options-visible"?: number;

  /**
   * Disables the select control.
   * @default false
   */
  disabled?: boolean;

  /**
   * Adds a clear button when the select is not empty.
   * @default false
   */
  "with-clear"?: boolean;

  /**
   * Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the select's open state.
   * @default false
   */
  open?: boolean;

  /**
   * The select's visual appearance.
   * @default 'outlined'
   */
  appearance?: 'filled' | 'outlined' | 'filled-outlined';

  /**
   * Draws a pill-style select with rounded edges.
   * @default false
   */
  pill?: boolean;

  /**
   * The select's label. If you need to display HTML, use the `label` slot instead.
   * @default ''
   */
  label?: string;

  /**
   * The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
   * inside of the viewport.
   * @default 'bottom'
   */
  placement?: 'top' | 'bottom';

  /**
   * The select's hint. If you need to display HTML, use the `hint` slot instead.
   * @default ''
   */
  hint?: string;

  /**
   * Only required for SSR. Set to `true` if you're slotting in a `label` element so the server-rendered markup
   * includes the label before the component hydrates on the client.
   * @default false
   */
  "with-label"?: boolean;

  /**
   * Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup
   * includes the hint before the component hydrates on the client.
   * @default false
   */
  "with-hint"?: boolean;

  /**
   * The select's required attribute.
   * @default false
   */
  required?: boolean;

  /**
   * @default null
   */
  "custom-error"?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Selects let users choose one or more values from a dropdown list of predefined options. Use them in forms
 * Renders the `<wa-select>` Web Awesome custom element.
 * Slots: (default), label, start, end, clear-icon, expand-icon, hint.
 * Events: input, change, focus, blur, wa-clear, wa-show, wa-after-show, wa-hide, wa-after-hide, wa-invalid (listen with the matching on* prop or a ref).
 */
export const WaSelect = forwardRef<HTMLElement, WaSelectProps>(function WaSelect(
  { children, ...props }: WaSelectProps,
  ref,
): ReactNode {
  return (
    <wa-select ref={ref} {...waAttributes(props)}>
      {children}
    </wa-select>
  );
});
