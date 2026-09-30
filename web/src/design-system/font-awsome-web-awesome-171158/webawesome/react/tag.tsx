import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaTagProps extends WaBaseProps {
  /**
   * The tag's theme variant. Defaults to `neutral` if not within another element with a variant.
   * @default 'neutral'
   */
  variant?: 'brand' | 'neutral' | 'success' | 'warning' | 'danger';

  /**
   * The tag's visual appearance.
   * @default 'filled-outlined'
   */
  appearance?: 'accent' | 'filled' | 'outlined' | 'filled-outlined';

  /**
   * The tag's size.
   * @default 'm'
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'small' | 'medium' | 'large';

  /**
   * Draws a pill-style tag with rounded edges.
   * @default false
   */
  pill?: boolean;

  /**
   * Makes the tag removable and shows a remove button.
   * @default false
   */
  "with-remove"?: boolean;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Tags label, categorize, or represent selections with a compact visual marker. Use them for status
 * Renders the `<wa-tag>` Web Awesome custom element.
 * Slots: (default).
 * Events: wa-remove (listen with the matching on* prop or a ref).
 */
export const WaTag = forwardRef<HTMLElement, WaTagProps>(function WaTag(
  { children, ...props }: WaTagProps,
  ref,
): ReactNode {
  return (
    <wa-tag ref={ref} {...waAttributes(props)}>
      {children}
    </wa-tag>
  );
});
