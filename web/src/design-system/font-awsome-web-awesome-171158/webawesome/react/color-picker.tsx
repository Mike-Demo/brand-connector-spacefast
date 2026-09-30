import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaColorPickerProps extends WaBaseProps {
  /**
   * The default value of the form control. Primarily used for resetting the form control.
   */
  value?: string;

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
   * The color picker's label. This will not be displayed, but it will be announced by assistive devices. If you need to
   * display HTML, you can use the `label` slot` instead.
   * @default ''
   */
  label?: string;

  /**
   * The color picker's hint. If you need to display HTML, use the `hint` slot instead.
   * @default ''
   */
  hint?: string;

  /**
   * The format to use. If opacity is enabled, these will translate to HEXA, RGBA, HSLA, and HSVA respectively. The color
   * picker will accept user input in any format (including CSS color names) and convert it to the desired format.
   * @default 'hex'
   */
  format?: 'hex' | 'rgb' | 'hsl' | 'hsv';

  /**
   * Determines the size of the color picker's trigger
   * @default 'm'
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'small' | 'medium' | 'large';

  /**
   * The preferred placement of the color picker's popup. Note that the actual placement will vary as configured to
   * keep the panel inside of the viewport.
   * @default 'bottom-start'
   */
  placement?: string;

  /**
   * Removes the button that lets users toggle between format.
   * @default false
   */
  "without-format-toggle"?: boolean;

  /**
   * The name of the form control, submitted as a name/value pair with form data.
   * @default null
   */
  name?: string;

  /**
   * Disables the color picker.
   * @default false
   */
  disabled?: boolean;

  /**
   * Indicates whether or not the popup is open. You can toggle this attribute to show and hide the popup, or you
   * can use the `show()` and `hide()` methods and this attribute will reflect the popup's open state.
   * @default false
   */
  open?: boolean;

  /**
   * Shows the opacity slider. Enabling this will cause the formatted value to be HEXA, RGBA, or HSLA.
   * @default false
   */
  opacity?: boolean;

  /**
   * By default, values are lowercase. With this attribute, values will be uppercase instead.
   * @default false
   */
  uppercase?: boolean;

  /**
   * One or more predefined color swatches to display as presets in the color picker. Can include any format the color
   * picker can parse, including HEX(A), RGB(A), HSL(A), HSV(A), and CSS color names. Each color must be separated by a
   * semicolon (`;`). Alternatively, you can pass an array of color values or an array of `{ color, label }` objects to
   * this property using JavaScript. When using objects with labels, the label will be used for the swatch's accessible
   * name instead of the raw color value.
   * @default ''
   */
  swatches?: string;

  /**
   * Makes the color picker a required field.
   * @default false
   */
  required?: boolean;

  /**
   * @default null
   */
  "custom-error"?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Color pickers let users choose a color from a visual palette or by entering a value. They support HEX, RGB,
 * Renders the `<wa-color-picker>` Web Awesome custom element.
 * Slots: label, hint.
 * Events: change, input, wa-show, wa-after-show, wa-hide, wa-after-hide, blur, focus, wa-invalid (listen with the matching on* prop or a ref).
 */
export const WaColorPicker = forwardRef<HTMLElement, WaColorPickerProps>(function WaColorPicker(
  { children, ...props }: WaColorPickerProps,
  ref,
): ReactNode {
  return (
    <wa-color-picker ref={ref} {...waAttributes(props)}>
      {children}
    </wa-color-picker>
  );
});
