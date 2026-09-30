import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaKnownDateProps extends WaBaseProps {
  /**
   * The name submitted with form data.
   * @default ''
   */
  name?: string;

  /**
   * The default value used for form reset.
   */
  value?: string;

  /**
   * Disables the known date.
   * @default false
   */
  disabled?: boolean;

  /**
   * Makes the known date required for form submission.
   * @default false
   */
  required?: boolean;

  /**
   * Makes the fields non-editable.
   * @default false
   */
  readonly?: boolean;

  /**
   * The known date's size.
   * @default 'm'
   */
  size?: string;

  /**
   * The known date's visual appearance.
   * @default 'outlined'
   */
  appearance?: string;

  /**
   * Draws pill-style fields with rounded edges.
   * @default false
   */
  pill?: boolean;

  /**
   * The known date's label. If you need to display HTML, use the `label` slot instead.
   * @default ''
   */
  label?: string;

  /**
   * The known date's hint. If you need to display HTML, use the `hint` slot instead.
   * @default ''
   */
  hint?: string;

  /**
   * Browser autofill family. When set to `bday`, the three fields receive `bday-day`, `bday-month`, and
   * `bday-year` respectively. The field-agnostic directives `off` and `on` are applied to all three fields.
   * Any other value is forwarded only to the year field.
   * @default ''
   */
  autocomplete?: string;

  /**
   * Earliest selectable date as `YYYY-MM-DD`.
   * @default ''
   */
  min?: string;

  /**
   * Latest selectable date as `YYYY-MM-DD`.
   * @default ''
   */
  max?: string;

  /**
   * BCP-47 locale override. When empty, the inherited `lang` attribute is used.
   * @default ''
   */
  locale?: string;

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
   * @default null
   */
  "custom-error"?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Known dates let users enter dates they already know - birthdays, expirations, document
 * Renders the `<wa-known-date>` Web Awesome custom element.
 * Slots: label, hint.
 * Events: input, change, blur, focus, wa-invalid (listen with the matching on* prop or a ref).
 */
export const WaKnownDate = forwardRef<HTMLElement, WaKnownDateProps>(function WaKnownDate(
  { children, ...props }: WaKnownDateProps,
  ref,
): ReactNode {
  return (
    <wa-known-date ref={ref} {...waAttributes(props)}>
      {children}
    </wa-known-date>
  );
});
