import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaAccordionItemProps extends WaBaseProps {
  /**
   * The text label shown in the header. If you need HTML, use the `label` slot instead.
   * @default ''
   */
  label?: string;

  /**
   * Expands the accordion item.
   * @default false
   */
  expanded?: boolean;

  /**
   * Disables the accordion item so it can't be toggled.
   * @default false
   */
  disabled?: boolean;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Accordion items are used inside `<wa-accordion>` to create expandable sections with accessible headers.
 * Renders the `<wa-accordion-item>` Web Awesome custom element.
 * Slots: (default), label, icon.
 */
export const WaAccordionItem = forwardRef<HTMLElement, WaAccordionItemProps>(function WaAccordionItem(
  { children, ...props }: WaAccordionItemProps,
  ref,
): ReactNode {
  return (
    <wa-accordion-item ref={ref} {...waAttributes(props)}>
      {children}
    </wa-accordion-item>
  );
});
