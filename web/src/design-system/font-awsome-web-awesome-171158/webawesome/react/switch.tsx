import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaSwitchProps extends WaBaseProps {
  /**
   * The name of the switch, submitted as a name/value pair with form data.
   * @default null
   */
  name?: string;

  /**
   * The value of the switch, submitted as a name/value pair with form data.
   */
  value?: string;

  /**
   * The switch's size.
   * @default 'm'
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'small' | 'medium' | 'large';

  /**
   * Disables the switch.
   * @default false
   */
  disabled?: boolean;

  /**
   * The default value of the form control. Primarily used for resetting the form control.
   */
  checked?: boolean;

  /**
   * Makes the switch a required field.
   * @default false
   */
  required?: boolean;

  /**
   * The switch's hint. If you need to display HTML, use the `hint` slot instead.
   * @default ''
   */
  hint?: string;

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
 * Switches toggle a single setting on or off and apply the change immediately, without requiring a form
 * Renders the `<wa-switch>` Web Awesome custom element.
 * Slots: (default), hint.
 * Events: change, input, blur, focus, wa-invalid (listen with the matching on* prop or a ref).
 */
export const WaSwitch = forwardRef<HTMLElement, WaSwitchProps>(function WaSwitch(
  { children, ...props }: WaSwitchProps,
  ref,
): ReactNode {
  return (
    <wa-switch ref={ref} {...waAttributes(props)}>
      {children}
    </wa-switch>
  );
});
