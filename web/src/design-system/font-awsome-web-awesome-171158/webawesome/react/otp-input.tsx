import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaOtpInputProps extends WaBaseProps {
  /**
   * The default value. Used to restore the field on form reset. Reflects the `value` HTML attribute.
   */
  value?: string;

  /**
   * Number of character segments to display. Overridden by `format` when set.
   * @default 6
   */
  length?: number;

  /**
   * Visual appearance of the segments.
   * @default 'outlined'
   */
  appearance?: 'outlined' | 'filled' | 'filled-outlined' | 'contained';

  /**
   * Allowed character class.
   * @default 'numeric'
   */
  type?: 'numeric' | 'alpha' | 'alphanumeric';

  /**
   * When true, entered characters are displayed as `--mask-char` instead of their real value.
   * @default false
   */
  mask?: boolean;

  /**
   * Case transformation applied to entered characters.
   * @default 'preserve'
   */
  case?: 'preserve' | 'upper' | 'lower';

  /**
   * The size of each segment.
   * @default 'm'
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'small' | 'medium' | 'large';

  /**
   * A label shown above the segments. Use the `label` slot for HTML content.
   * @default ''
   */
  label?: string;

  /**
   * Hint text shown below the segments. Use the `hint` slot for HTML content.
   * @default ''
   */
  hint?: string;

  /**
   * Segment format string using `#` as a segment placeholder and any other character as a literal separator.
   * Setting `format` overrides `length` (the segment count is derived from the number of `#` characters).
   * @default ''
   */
  format?: string;

  /**
   * The `autocomplete` attribute forwarded to the underlying input.
   * @default 'one-time-code'
   */
  autocomplete?: string;

  /**
   * Makes the field required. A partially-filled field is always invalid regardless of this attribute.
   * @default false
   */
  required?: boolean;

  /**
   * Makes the field readonly — the value displays but cannot be edited by the user.
   * @default false
   */
  readonly?: boolean;

  /**
   * When true, the form is submitted automatically once all segments are filled.
   * @default false
   */
  autosubmit?: boolean;

  /**
   * Automatically focuses the field when the page loads.
   * @default false
   */
  autofocus?: boolean;

  /**
   * When true, empty segments show `--mask-char` as a hint instead of appearing blank, similar to
   * how a password field communicates its expected length before anything is typed.
   * @default false
   */
  "with-mask"?: boolean;

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
 * OTP inputs collect one-time passcodes, PINs, and other fixed-length codes, one character per segment.
 * Renders the `<wa-otp-input>` Web Awesome custom element.
 * Slots: label, hint.
 * Events: input, change, focus, blur, wa-complete, wa-clear, wa-invalid (listen with the matching on* prop or a ref).
 */
export const WaOtpInput = forwardRef<HTMLElement, WaOtpInputProps>(function WaOtpInput(
  { children, ...props }: WaOtpInputProps,
  ref,
): ReactNode {
  return (
    <wa-otp-input ref={ref} {...waAttributes(props)}>
      {children}
    </wa-otp-input>
  );
});
