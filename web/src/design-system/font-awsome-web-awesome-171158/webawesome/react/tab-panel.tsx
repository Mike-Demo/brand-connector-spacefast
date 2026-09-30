import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaTabPanelProps extends WaBaseProps {
  /**
   * The tab panel's name.
   * @default ''
   */
  name?: string;

  /**
   * When true, the tab panel will be shown.
   * @default false
   */
  active?: boolean;

  /**
   * @default 'tabpanel'
   */
  role?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Tab panels hold the content shown for a single tab inside a tab group.
 * Renders the `<wa-tab-panel>` Web Awesome custom element.
 * Slots: (default).
 */
export const WaTabPanel = forwardRef<HTMLElement, WaTabPanelProps>(function WaTabPanel(
  { children, ...props }: WaTabPanelProps,
  ref,
): ReactNode {
  return (
    <wa-tab-panel ref={ref} {...waAttributes(props)}>
      {children}
    </wa-tab-panel>
  );
});
