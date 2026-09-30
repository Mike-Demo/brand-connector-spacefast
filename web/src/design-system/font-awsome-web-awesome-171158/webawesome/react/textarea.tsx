import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaTextareaProps extends WaBaseProps {
  /**
   * The name of the textarea, submitted as a name/value pair with form data.
   * @default null
   */
  name?: string;

  /**
   * The default value of the form control. Primarily used for resetting the form control.
   */
  value?: string;

  /**
   * The textarea's size.
   * @default 'm'
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'small' | 'medium' | 'large';

  /**
   * The textarea's visual appearance.
   * @default 'outlined'
   */
  appearance?: 'filled' | 'outlined' | 'filled-outlined';

  /**
   * The textarea's label. If you need to display HTML, use the `label` slot instead.
   * @default ''
   */
  label?: string;

  /**
   * The textarea's hint. If you need to display HTML, use the `hint` slot instead.
   * @default ''
   */
  hint?: string;

  /**
   * Placeholder text to show as a hint when the input is empty.
   * @default ''
   */
  placeholder?: string;

  /**
   * The number of rows to display by default.
   * @default 4
   */
  rows?: number;

  /**
   * Controls how the textarea can be resized.
   * @default 'vertical'
   */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both' | 'auto';

  /**
   * Disables the textarea.
   * @default false
   */
  disabled?: boolean;

  /**
   * Makes the textarea readonly.
   * @default false
   */
  readonly?: boolean;

  /**
   * Makes the textarea a required field.
   * @default false
   */
  required?: boolean;

  /**
   * The minimum length of input that will be considered valid.
   */
  minlength?: number;

  /**
   * The maximum length of input that will be considered valid.
   */
  maxlength?: number;

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
   * Enables spell checking on the textarea.
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
   * Shows a character count below the textarea. When `maxlength` is set, shows remaining characters instead.
   * @default false
   */
  "with-count"?: boolean;

  /**
   * @default null
   */
  "custom-error"?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Textareas collect multi-line text input from the user, with optional resizing and character counting.
 * Renders the `<wa-textarea>` Web Awesome custom element.
 * Slots: label, hint.
 * Events: blur, change, focus, input, wa-invalid (listen with the matching on* prop or a ref).
 */
export const WaTextarea = forwardRef<HTMLElement, WaTextareaProps>(function WaTextarea(
  { children, ...props }: WaTextareaProps,
  ref,
): ReactNode {
  return (
    <wa-textarea ref={ref} {...waAttributes(props)}>
      {children}
    </wa-textarea>
  );
});
