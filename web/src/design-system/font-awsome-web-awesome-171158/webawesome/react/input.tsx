import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaInputProps extends WaBaseProps {
  /**
   * The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
   * to `text`.
   * @default 'text'
   */
  type?: string;

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
   * Adds a clear button when the input is not empty.
   * @default false
   */
  "with-clear"?: boolean;

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
   * Adds a button to toggle the password's visibility. Only applies to password types.
   * @default false
   */
  "password-toggle"?: boolean;

  /**
   * Determines whether or not the password is currently visible. Only applies to password input types.
   * @default false
   */
  "password-visible"?: boolean;

  /**
   * Hides the browser's built-in increment/decrement spin buttons for number inputs.
   * @default false
   */
  "without-spin-buttons"?: boolean;

  /**
   * Makes the input a required field.
   * @default false
   */
  required?: boolean;

  /**
   * A regular expression pattern to validate input against.
   */
  pattern?: string;

  /**
   * The minimum length of input that will be considered valid.
   */
  minlength?: number;

  /**
   * The maximum length of input that will be considered valid.
   */
  maxlength?: number;

  /**
   * The input's minimum value. Only applies to date and number input types.
   */
  min?: string | number;

  /**
   * The input's maximum value. Only applies to date and number input types.
   */
  max?: string | number;

  /**
   * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
   * implied, allowing any numeric value. Only applies to date and number input types.
   */
  step?: number | 'any';

  /**
   * Controls whether and how text input is automatically capitalized as it is entered by the user.
   */
  autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';

  /**
   * Indicates whether the browser's autocorrect feature is on or off. When set as an attribute, use `"off"` or `"on"`.
   * When set as a property, use `true` or `false`.
   */
  autocorrect?: boolean;

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
   * Enables spell checking on the input.
   * @default true
   */
  spellcheck?: boolean;

  /**
   * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
   * keyboard on supportive devices.
   */
  inputmode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

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
 * Inputs collect single-line data from the user, such as text, numbers, email addresses, and passwords. They
 * Renders the `<wa-input>` Web Awesome custom element.
 * Slots: label, start, end, clear-icon, show-password-icon, hide-password-icon, hint.
 * Events: input, change, blur, focus, wa-clear, wa-invalid (listen with the matching on* prop or a ref).
 */
export const WaInput = forwardRef<HTMLElement, WaInputProps>(function WaInput(
  { children, ...props }: WaInputProps,
  ref,
): ReactNode {
  return (
    <wa-input ref={ref} {...waAttributes(props)}>
      {children}
    </wa-input>
  );
});
