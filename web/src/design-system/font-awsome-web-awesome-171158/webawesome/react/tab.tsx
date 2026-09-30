import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaTabProps extends WaBaseProps {
  /**
   * The name of the tab panel this tab is associated with. The panel must be located in the same tab group.
   * @default ''
   */
  panel?: string;

  /**
   * Disables the tab and prevents selection.
   * @default false
   */
  disabled?: boolean;

  /**
   * @default 'tab'
   */
  role?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Tabs label and activate an individual panel inside a tab group.
 * Renders the `<wa-tab>` Web Awesome custom element.
 * Slots: (default).
 */
export const WaTab = forwardRef<HTMLElement, WaTabProps>(function WaTab(
  { children, ...props }: WaTabProps,
  ref,
): ReactNode {
  return (
    <wa-tab ref={ref} {...waAttributes(props)}>
      {children}
    </wa-tab>
  );
});
