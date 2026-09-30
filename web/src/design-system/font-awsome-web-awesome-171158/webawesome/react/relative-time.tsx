import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaRelativeTimeProps extends WaBaseProps {
  /**
   * The date from which to calculate time from. If not set, the current date and time will be used. When passing a
   * string, it's strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert
   * a date to this format in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
   * @default new Date()
   */
  date?: string;

  /**
   * The formatting style to use.
   * @default 'long'
   */
  format?: 'long' | 'short' | 'narrow';

  /**
   * When `auto`, values such as "yesterday" and "tomorrow" will be shown when possible. When `always`, values such as
   * "1 day ago" and "in 1 day" will be shown.
   * @default 'auto'
   */
  numeric?: 'always' | 'auto';

  /**
   * Keep the displayed value up to date as time passes.
   * @default false
   */
  sync?: boolean;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Relative times display a date as a localized phrase relative to now, such as "3 hours ago" or "in 2 days".
 * Renders the `<wa-relative-time>` Web Awesome custom element.
 */
export const WaRelativeTime = forwardRef<HTMLElement, WaRelativeTimeProps>(function WaRelativeTime(
  { children, ...props }: WaRelativeTimeProps,
  ref,
): ReactNode {
  return (
    <wa-relative-time ref={ref} {...waAttributes(props)}>
      {children}
    </wa-relative-time>
  );
});
