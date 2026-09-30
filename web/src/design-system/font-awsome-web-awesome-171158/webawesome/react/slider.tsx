import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaSliderProps extends WaBaseProps {
  /**
   * The slider's label. If you need to provide HTML in the label, use the `label` slot instead.
   * @default ''
   */
  label?: string;

  /**
   * The slider hint. If you need to display HTML, use the hint slot instead.
   * @default ''
   */
  hint?: string;

  /**
   * The name of the slider. This will be submitted with the form as a name/value pair.
   * @default null
   */
  name?: string;

  /**
   * The minimum value of a range selection. Used only when range attribute is set.
   * @default 0
   */
  "min-value"?: number;

  /**
   * The maximum value of a range selection. Used only when range attribute is set.
   * @default 50
   */
  "max-value"?: number;

  /**
   * The default value of the form control. Primarily used for resetting the form control.
   */
  value?: number;

  /**
   * Converts the slider to a range slider with two thumbs.
   * @default false
   */
  range?: boolean;

  /**
   * Disables the slider.
   * @default false
   */
  disabled?: boolean;

  /**
   * Makes the slider a read-only field.
   * @default false
   */
  readonly?: boolean;

  /**
   * The orientation of the slider.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The slider's size.
   * @default 'm'
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'small' | 'medium' | 'large';

  /**
   * The starting value from which to draw the slider's fill, which is based on its current value.
   */
  "indicator-offset"?: number;

  /**
   * The minimum value allowed.
   * @default 0
   */
  min?: number;

  /**
   * The maximum value allowed.
   * @default 100
   */
  max?: number;

  /**
   * The granularity the value must adhere to when incrementing and decrementing.
   * @default 1
   */
  step?: number;

  /**
   * Tells the browser to focus the slider when the page loads or a dialog is shown.
   */
  autofocus?: boolean;

  /**
   * The distance of the tooltip from the slider's thumb.
   * @default 8
   */
  "tooltip-distance"?: number;

  /**
   * The placement of the tooltip in reference to the slider's thumb.
   * @default 'top'
   */
  "tooltip-placement"?: 'top' | 'right' | 'bottom' | 'left';

  /**
   * Draws markers at each step along the slider.
   * @default false
   */
  "with-markers"?: boolean;

  /**
   * Draws a tooltip above the thumb when the control has focus or is dragged.
   * @default false
   */
  "with-tooltip"?: boolean;

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
 * Sliders let users choose a numeric value within a defined range by dragging a thumb along a track.
 * <wa-slider>
 * Renders the `<wa-slider>` Web Awesome custom element.
 * Slots: label, hint, reference.
 * Events: change, blur, focus, input, wa-invalid (listen with the matching on* prop or a ref).
 */
export const WaSlider = forwardRef<HTMLElement, WaSliderProps>(function WaSlider(
  { children, ...props }: WaSliderProps,
  ref,
): ReactNode {
  return (
    <wa-slider ref={ref} {...waAttributes(props)}>
      {children}
    </wa-slider>
  );
});
