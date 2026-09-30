import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaFormatNumberProps extends WaBaseProps {
  /**
   * The number to format.
   * @default 0
   */
  value?: number;

  /**
   * The formatting style to use.
   * @default 'decimal'
   */
  type?: 'currency' | 'decimal' | 'percent';

  /**
   * Turns off grouping separators.
   * @default false
   */
  "without-grouping"?: boolean;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting.
   * @default 'USD'
   */
  currency?: string;

  /**
   * How to display the currency.
   * @default 'symbol'
   */
  "currency-display"?: 'symbol' | 'narrowSymbol' | 'code' | 'name';

  /**
   * The minimum number of integer digits to use. Possible values are 1-21.
   */
  "minimum-integer-digits"?: number;

  /**
   * The minimum number of fraction digits to use. Possible values are 0-100.
   */
  "minimum-fraction-digits"?: number;

  /**
   * The maximum number of fraction digits to use. Possible values are 0-100.
   */
  "maximum-fraction-digits"?: number;

  /**
   * The minimum number of significant digits to use. Possible values are 1-21.
   */
  "minimum-significant-digits"?: number;

  /**
   * The maximum number of significant digits to use,. Possible values are 1-21.
   */
  "maximum-significant-digits"?: number;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Formats a number for display using the specified locale and options, including currency, percent, and unit
 * Renders the `<wa-format-number>` Web Awesome custom element.
 */
export const WaFormatNumber = forwardRef<HTMLElement, WaFormatNumberProps>(function WaFormatNumber(
  { children, ...props }: WaFormatNumberProps,
  ref,
): ReactNode {
  return (
    <wa-format-number ref={ref} {...waAttributes(props)}>
      {children}
    </wa-format-number>
  );
});
