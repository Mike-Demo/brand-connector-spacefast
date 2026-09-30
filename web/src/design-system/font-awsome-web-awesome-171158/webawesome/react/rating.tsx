import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaRatingProps extends WaBaseProps {
  /**
   * @default 'slider'
   */
  role?: string;

  /**
   * The name of the rating, submitted as a name/value pair with form data.
   * @default null
   */
  name?: string;

  /**
   * A label that describes the rating to assistive devices.
   * @default ''
   */
  label?: string;

  /**
   * The current rating.
   * @default 0
   */
  value?: number;

  /**
   * The default value of the form control. Used to reset the rating to its initial value.
   * @default 0
   */
  "default-value"?: number;

  /**
   * The highest rating to show.
   * @default 5
   */
  max?: number;

  /**
   * The precision at which the rating will increase and decrease. For example, to allow half-star ratings, set this
   * attribute to `0.5`.
   * @default 1
   */
  precision?: number;

  /**
   * Makes the rating readonly.
   * @default false
   */
  readonly?: boolean;

  /**
   * Disables the rating.
   * @default false
   */
  disabled?: boolean;

  /**
   * Makes the rating a required field.
   * @default false
   */
  required?: boolean;

  /**
   * A function that customizes the symbol to be rendered. The first and only argument is the rating's current value.
   * The function should return a string containing trusted HTML of the symbol to render at the specified value. Works
   * well with `<wa-icon>` elements.
   */
  getSymbol?: string;

  /**
   * The component's size.
   * @default 'm'
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'small' | 'medium' | 'large';

  /**
   * @default null
   */
  "custom-error"?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Ratings display a numeric score as a row of selectable symbols, typically stars. Use them to capture quick
 * Renders the `<wa-rating>` Web Awesome custom element.
 * Events: change, wa-hover, wa-invalid (listen with the matching on* prop or a ref).
 */
export const WaRating = forwardRef<HTMLElement, WaRatingProps>(function WaRating(
  { children, ...props }: WaRatingProps,
  ref,
): ReactNode {
  return (
    <wa-rating ref={ref} {...waAttributes(props)}>
      {children}
    </wa-rating>
  );
});
