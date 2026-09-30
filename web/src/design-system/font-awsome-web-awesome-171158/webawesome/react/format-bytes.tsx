import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaFormatBytesProps extends WaBaseProps {
  /**
   * The number to format in bytes.
   * @default 0
   */
  value?: number;

  /**
   * The type of unit to display.
   * @default 'byte'
   */
  unit?: 'byte' | 'bit';

  /**
   * Determines how to display the result, e.g. "100 bytes", "100 b", or "100b".
   * @default 'short'
   */
  display?: 'long' | 'short' | 'narrow';

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Formats a number of bytes as a human-readable string with the appropriate unit, such as kB, MB, or GB.
 * Renders the `<wa-format-bytes>` Web Awesome custom element.
 */
export const WaFormatBytes = forwardRef<HTMLElement, WaFormatBytesProps>(function WaFormatBytes(
  { children, ...props }: WaFormatBytesProps,
  ref,
): ReactNode {
  return (
    <wa-format-bytes ref={ref} {...waAttributes(props)}>
      {children}
    </wa-format-bytes>
  );
});
