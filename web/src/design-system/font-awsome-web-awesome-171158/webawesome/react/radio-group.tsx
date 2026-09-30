import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaRadioGroupProps extends WaBaseProps {
  /**
   * The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
   * instead.
   * @default ''
   */
  label?: string;

  /**
   * The radio groups's hint. If you need to display HTML, use the `hint` slot instead.
   * @default ''
   */
  hint?: string;

  /**
   * The name of the radio group, submitted as a name/value pair with form data.
   * @default null
   */
  name?: string;

  /**
   * Disables the radio group and all child radios.
   * @default false
   */
  disabled?: boolean;

  /**
   * The orientation in which to show radio items.
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The default value of the form control. Primarily used for resetting the form control.
   */
  value?: string;

  /**
   * The radio group's size. When present, this size will be applied to all `<wa-radio>` items inside.
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'small' | 'medium' | 'large';

  /**
   * Ensures a child radio is checked before allowing the containing form to submit.
   * @default false
   */
  required?: boolean;

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
   * @default null
   */
  "custom-error"?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Radio groups wrap a set of radios so they function as a single form control with one shared value. They
 * Renders the `<wa-radio-group>` Web Awesome custom element.
 * Slots: (default), label, hint.
 * Events: input, change, wa-invalid (listen with the matching on* prop or a ref).
 */
export const WaRadioGroup = forwardRef<HTMLElement, WaRadioGroupProps>(function WaRadioGroup(
  { children, ...props }: WaRadioGroupProps,
  ref,
): ReactNode {
  return (
    <wa-radio-group ref={ref} {...waAttributes(props)}>
      {children}
    </wa-radio-group>
  );
});
