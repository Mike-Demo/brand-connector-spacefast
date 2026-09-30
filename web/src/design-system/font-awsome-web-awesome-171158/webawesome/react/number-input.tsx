import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaNumberInputProps extends WaBaseProps {
  /**
   * The default value of the form control. Primarily used for resetting the form control.
   */
  value?: string;

  /**
   * The input's size.
   * @default 'm'
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'small' | 'medium' | 'large';

  /**
   * The input's visual appearance.
   * @default 'outlined'
   */
  appearance?: 'filled' | 'outlined' | 'filled-outlined';

  /**
   * Draws a pill-style input with rounded edges.
   * @default false
   */
  pill?: boolean;

  /**
   * The input's label. If you need to display HTML, use the `label` slot instead.
   * @default ''
   */
  label?: string;

  /**
   * The input's hint. If you need to display HTML, use the `hint` slot instead.
   * @default ''
   */
  hint?: string;

  /**
   * Placeholder text to show as a hint when the input is empty.
   * @default ''
   */
  placeholder?: string;

  /**
   * Makes the input readonly.
   * @default false
   */
  readonly?: boolean;

  /**
   * Makes the input a required field.
   * @default false
   */
  required?: boolean;

  /**
   * The input's minimum value.
   */
  min?: number;

  /**
   * The input's maximum value.
   */
  max?: number;

  /**
   * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
   * implied, allowing any numeric value.
   * @default 1
   */
  step?: number | 'any';

  /**
   * Hides the increment/decrement stepper buttons.
   * @default false
   */
  "without-steppers"?: boolean;

  /**
   * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
   * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
   */
  autocomplete?: string;

  /**
   * Indicates that the input should receive focus on page load.
   */
  autofocus?: boolean;

  /**
   * Used to customize the label or icon of the Enter key on virtual keyboards.
   */
  enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';

  /**
   * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
   * keyboard on supportive devices.
   * @default 'numeric'
   */
  inputmode?: 'numeric' | 'decimal';

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
   * The name of the input, submitted as a name/value pair with form data.
   * @default null
   */
  name?: string;

  /**
   * Disables the form control.
   * @default false
   */
  disabled?: boolean;

  /**
   * @default null
   */
  "custom-error"?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Number inputs let users enter and edit numeric values, with optional stepper buttons for incrementing and
 * Renders the `<wa-number-input>` Web Awesome custom element.
 * Slots: label, start, end, increment-icon, decrement-icon, hint.
 * Events: input, change, blur, focus, beforeinput, wa-invalid (listen with the matching on* prop or a ref).
 */
export const WaNumberInput = forwardRef<HTMLElement, WaNumberInputProps>(function WaNumberInput(
  { children, ...props }: WaNumberInputProps,
  ref,
): ReactNode {
  return (
    <wa-number-input ref={ref} {...waAttributes(props)}>
      {children}
    </wa-number-input>
  );
});
