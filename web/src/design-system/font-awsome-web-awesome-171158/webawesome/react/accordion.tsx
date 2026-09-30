import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaAccordionProps extends WaBaseProps {
  /**
   * Controls how items can be expanded. `multiple` (the default) allows any number of items to be open at
   * once. `single` allows only one item to be open at a time; opening a new item collapses the previously
   * open one, and clicking an open item does not collapse it. `single-collapsible` is the same as `single`
   * except that clicking the open item collapses it, so zero open items is a valid state.
   * @default 'multiple'
   */
  mode?: 'single' | 'single-collapsible' | 'multiple';

  /**
   * The location of the expand/collapse icon in child items.
   * @default 'end'
   */
  "icon-placement"?: 'start' | 'end';

  /**
   * The heading level for child item triggers (1–6), or "none" to omit the heading wrapper. Defaults to 3.
   * @default '3'
   */
  "heading-level"?: string;

  /**
   * The accordion's visual appearance.
   * @default 'outlined'
   */
  appearance?: 'filled' | 'outlined' | 'filled-outlined' | 'plain';

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Accordions are a vertically stacked set of interactive headings that each contain a title, representing a section of content.
 * Renders the `<wa-accordion>` Web Awesome custom element.
 * Slots: (default).
 * Events: wa-expand, wa-after-expand, wa-collapse, wa-after-collapse (listen with the matching on* prop or a ref).
 */
export const WaAccordion = forwardRef<HTMLElement, WaAccordionProps>(function WaAccordion(
  { children, ...props }: WaAccordionProps,
  ref,
): ReactNode {
  return (
    <wa-accordion ref={ref} {...waAttributes(props)}>
      {children}
    </wa-accordion>
  );
});
