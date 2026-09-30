import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaCheckboxGroupProps extends WaBaseProps {
  /**
   * The checkbox group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
   * instead.
   * @default ''
   */
  label?: string;

  /**
   * The checkbox group's hint. If you need to display HTML, use the `hint` slot instead.
   * @default ''
   */
  hint?: string;

  /**
   * The orientation in which to show grouped checkboxes.
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The group's size. When present, this size will be applied to all `<wa-checkbox>` and `<wa-switch>` items inside.
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'small' | 'medium' | 'large';

  /**
   * Indicates that at least one option should be selected. This only adds a visual indicator to the label. To enforce
   * the requirement, use the `required` attribute on the individual checkboxes and/or their `setCustomValidity()`
   * method.
   * @default false
   */
  required?: boolean;

  /**
   * Only required for SSR. Set to `true` if you're slotting in a `label` element so the server-rendered markup includes
   * the label before the component hydrates on the client.
   * @default false
   */
  "with-label"?: boolean;

  /**
   * Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup includes
   * the hint before the component hydrates on the client.
   * @default false
   */
  "with-hint"?: boolean;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Checkbox groups wrap a set of related checkboxes or switches so they share a label, hint, and grouping
 * Renders the `<wa-checkbox-group>` Web Awesome custom element.
 * Slots: (default), label, hint.
 */
export const WaCheckboxGroup = forwardRef<HTMLElement, WaCheckboxGroupProps>(function WaCheckboxGroup(
  { children, ...props }: WaCheckboxGroupProps,
  ref,
): ReactNode {
  return (
    <wa-checkbox-group ref={ref} {...waAttributes(props)}>
      {children}
    </wa-checkbox-group>
  );
});
