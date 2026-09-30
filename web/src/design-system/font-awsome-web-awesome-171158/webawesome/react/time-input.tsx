import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaTimeInputProps extends WaBaseProps {
  /**
   * The time picker's name, submitted as a name/value pair with form data.
   * @default ''
   */
  name?: string;

  /**
   * The default value of the form control. Used for form reset.
   */
  value?: string;

  /**
   * Disables the time picker.
   * @default false
   */
  disabled?: boolean;

  /**
   * Makes the time picker required for form submission.
   * @default false
   */
  required?: boolean;

  /**
   * Makes the input non-editable. The popup still opens for browsing.
   * @default false
   */
  readonly?: boolean;

  /**
   * The time picker's size.
   * @default 'm'
   */
  size?: string;

  /**
   * The time picker's visual appearance.
   * @default 'outlined'
   */
  appearance?: 'filled' | 'outlined' | 'filled-outlined';

  /**
   * Draws a pill-style time picker with rounded edges.
   * @default false
   */
  pill?: boolean;

  /**
   * The time picker's label. If you need to display HTML, use the `label` slot instead.
   * @default ''
   */
  label?: string;

  /**
   * The time picker's hint. If you need to display HTML, use the `hint` slot instead.
   * @default ''
   */
  hint?: string;

  /**
   * Forwarded to the hidden form input to enable browser autofill (`on`/`off`/custom tokens).
   * @default ''
   */
  autocomplete?: string;

  /**
   * Shows a clear button when the time picker has a value.
   * @default false
   */
  "with-clear"?: boolean;

  /**
   * Renders a "Now" button in the popup footer.
   * @default false
   */
  "with-now"?: boolean;

  /**
   * Only required for SSR. Set to `true` if you're slotting in a `label` element.
   * @default false
   */
  "with-label"?: boolean;

  /**
   * Only required for SSR. Set to `true` if you're slotting in a `hint` element.
   * @default false
   */
  "with-hint"?: boolean;

  /**
   * The earliest selectable time in wire format. May be later than `max` to represent an overnight range. The picker
   * delegates reversed-range semantics to the mirrored native `<input type="time">`.
   * @default ''
   */
  min?: string;

  /**
   * The latest selectable time in wire format.
   * @default ''
   */
  max?: string;

  /**
   * The granularity, in seconds, matching HTML `<input type="time">`. Default `60` hides the seconds segment.
   * Values below 60 reveal the seconds segment. `'any'` disables `stepMismatch` enforcement.
   * @default 60
   */
  step?: number | 'any';

  /**
   * Whether the UI uses a 12-hour or 24-hour clock. `auto` follows the resolved locale.
   * @default 'auto'
   */
  "hour-format"?: string;

  /**
   * Whether the popup is open.
   * @default false
   */
  open?: boolean;

  /**
   * Preferred popup placement.
   * @default 'bottom-start'
   */
  placement?: string;

  /**
   * Distance in pixels between the popup and the input.
   * @default 0
   */
  distance?: number;

  /**
   * @default null
   */
  "custom-error"?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Time pickers let users enter a time through a segmented field or select one visually from a popup column
 * Renders the `<wa-time-input>` Web Awesome custom element.
 * Slots: label, hint, start, end, clear-icon, expand-icon, footer.
 * Events: input, change, focus, blur, wa-clear, wa-show, wa-after-show, wa-hide, wa-after-hide, wa-invalid (listen with the matching on* prop or a ref).
 */
export const WaTimeInput = forwardRef<HTMLElement, WaTimeInputProps>(function WaTimeInput(
  { children, ...props }: WaTimeInputProps,
  ref,
): ReactNode {
  return (
    <wa-time-input ref={ref} {...waAttributes(props)}>
      {children}
    </wa-time-input>
  );
});
