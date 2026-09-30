import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaOptionProps extends WaBaseProps {
  /**
   * The option's value. When selected, the containing form control will receive this value. The value must be unique
   * from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
   * multiple values.
   * @default ''
   */
  value?: string;

  /**
   * Draws the option in a disabled state, preventing selection.
   * @default false
   */
  disabled?: boolean;

  /**
   * Selects an option initially.
   * @default false
   */
  selected?: boolean;

  /**
   * The option’s plain text label.
   * Usually automatically generated, but can be useful to provide manually for cases involving complex content.
   */
  label?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Options represent the individual choices inside a select or similar form control. Each option holds a value
 * Renders the `<wa-option>` Web Awesome custom element.
 * Slots: (default), start, end.
 */
export const WaOption = forwardRef<HTMLElement, WaOptionProps>(function WaOption(
  { children, ...props }: WaOptionProps,
  ref,
): ReactNode {
  return (
    <wa-option ref={ref} {...waAttributes(props)}>
      {children}
    </wa-option>
  );
});
