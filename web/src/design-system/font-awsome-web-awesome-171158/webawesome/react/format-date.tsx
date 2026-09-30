import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaFormatDateProps extends WaBaseProps {
  /**
   * The date/time to format. If not set, the current date and time will be used. When passing a string, it's strongly
   * recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format
   * in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
   * @default new Date()
   */
  date?: string;

  /**
   * The format for displaying the weekday.
   */
  weekday?: 'narrow' | 'short' | 'long';

  /**
   * The format for displaying the era.
   */
  era?: 'narrow' | 'short' | 'long';

  /**
   * The format for displaying the year.
   */
  year?: 'numeric' | '2-digit';

  /**
   * The format for displaying the month.
   */
  month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';

  /**
   * The format for displaying the day.
   */
  day?: 'numeric' | '2-digit';

  /**
   * The format for displaying the hour.
   */
  hour?: 'numeric' | '2-digit';

  /**
   * The format for displaying the minute.
   */
  minute?: 'numeric' | '2-digit';

  /**
   * The format for displaying the second.
   */
  second?: 'numeric' | '2-digit';

  /**
   * The format for displaying the time.
   */
  "time-zone-name"?: 'short' | 'long';

  /**
   * The time zone to express the time in.
   */
  "time-zone"?: string;

  /**
   * The format for displaying the hour.
   * @default 'auto'
   */
  "hour-format"?: 'auto' | '12' | '24';

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Formats a date or time for display using the specified locale and options. Powered by the
 * Renders the `<wa-format-date>` Web Awesome custom element.
 */
export const WaFormatDate = forwardRef<HTMLElement, WaFormatDateProps>(function WaFormatDate(
  { children, ...props }: WaFormatDateProps,
  ref,
): ReactNode {
  return (
    <wa-format-date ref={ref} {...waAttributes(props)}>
      {children}
    </wa-format-date>
  );
});
