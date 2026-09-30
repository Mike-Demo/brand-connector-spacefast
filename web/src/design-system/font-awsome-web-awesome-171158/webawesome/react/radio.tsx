import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaRadioProps extends WaBaseProps {
  /**
   * The radio's value. When selected, the radio group will receive this value.
   */
  value?: string;

  /**
   * The radio's visual appearance.
   * @default 'default'
   */
  appearance?: 'default' | 'button';

  /**
   * The radio's size. When used inside a radio group, the size will be determined by the radio group's size, which will
   * override this attribute.
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'small' | 'medium' | 'large';

  /**
   * Disables the radio.
   * @default false
   */
  disabled?: boolean;

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
 * Radios represent a single option within a mutually exclusive set. Use them inside a radio group when users
 * Renders the `<wa-radio>` Web Awesome custom element.
 * Slots: (default).
 * Events: blur, focus (listen with the matching on* prop or a ref).
 */
export const WaRadio = forwardRef<HTMLElement, WaRadioProps>(function WaRadio(
  { children, ...props }: WaRadioProps,
  ref,
): ReactNode {
  return (
    <wa-radio ref={ref} {...waAttributes(props)}>
      {children}
    </wa-radio>
  );
});
