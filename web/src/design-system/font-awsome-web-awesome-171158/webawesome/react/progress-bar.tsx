import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaProgressBarProps extends WaBaseProps {
  /**
   * The current progress as a percentage, 0 to 100.
   * @default 0
   */
  value?: number;

  /**
   * When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state.
   * @default false
   */
  indeterminate?: boolean;

  /**
   * A custom label for assistive devices.
   * @default ''
   */
  label?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Progress bars show how far along an ongoing operation is as a horizontal fill. Use them for file uploads,
 * Renders the `<wa-progress-bar>` Web Awesome custom element.
 * Slots: (default).
 */
export const WaProgressBar = forwardRef<HTMLElement, WaProgressBarProps>(function WaProgressBar(
  { children, ...props }: WaProgressBarProps,
  ref,
): ReactNode {
  return (
    <wa-progress-bar ref={ref} {...waAttributes(props)}>
      {children}
    </wa-progress-bar>
  );
});
