import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaCheckboxProps extends WaBaseProps {
  /**
   * The value of the checkbox, submitted as a name/value pair with form data.
   */
  value?: string;

  /**
   * The checkbox's size.
   * @default 'm'
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'small' | 'medium' | 'large';

  /**
   * Disables the checkbox.
   * @default false
   */
  disabled?: boolean;

  /**
   * Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
   * all/none" behavior when associated checkboxes have a mix of checked and unchecked states.
   * @default false
   */
  indeterminate?: boolean;

  /**
   * The default value of the form control. Primarily used for resetting the form control.
   */
  checked?: boolean;

  /**
   * Makes the checkbox a required field.
   * @default false
   */
  required?: boolean;

  /**
   * The checkbox's hint. If you need to display HTML, use the `hint` slot instead.
   * @default ''
   */
  hint?: string;

  /**
   * The name of the input, submitted as a name/value pair with form data.
   * @default null
   */
  name?: string;

  /**
   * @default null
   */
  "custom-error"?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Checkboxes let users toggle an option on or off, or select multiple items from a list. They also support an
 * Renders the `<wa-checkbox>` Web Awesome custom element.
 * Slots: (default), hint.
 * Events: change, blur, focus, input, wa-invalid (listen with the matching on* prop or a ref).
 */
export const WaCheckbox = forwardRef<HTMLElement, WaCheckboxProps>(function WaCheckbox(
  { children, ...props }: WaCheckboxProps,
  ref,
): ReactNode {
  return (
    <wa-checkbox ref={ref} {...waAttributes(props)}>
      {children}
    </wa-checkbox>
  );
});
