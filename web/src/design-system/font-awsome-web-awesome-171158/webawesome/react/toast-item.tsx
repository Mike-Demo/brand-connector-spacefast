import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaToastItemProps extends WaBaseProps {
  /**
   * The toast item's variant.
   * @default 'neutral'
   */
  variant?: 'brand' | 'success' | 'warning' | 'danger' | 'neutral';

  /**
   * The toast item's size.
   * @default 'm'
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'small' | 'medium' | 'large';

  /**
   * The length of time in milliseconds before the toast item is automatically dismissed. Set to 0 to keep the toast
   * item open until the user dismisses it.
   * @default 5000
   */
  duration?: number;

  /**
   * Only required for SSR. Set to `true` if you're slotting in an `icon` element so the server-rendered markup
   * includes the icon before the component hydrates on the client.
   * @default false
   */
  "with-icon"?: boolean;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Toast items are individual notifications displayed within a toast container.
 * Renders the `<wa-toast-item>` Web Awesome custom element.
 * Slots: (default), icon.
 * Events: wa-show, wa-after-show, wa-hide, wa-after-hide (listen with the matching on* prop or a ref).
 */
export const WaToastItem = forwardRef<HTMLElement, WaToastItemProps>(function WaToastItem(
  { children, ...props }: WaToastItemProps,
  ref,
): ReactNode {
  return (
    <wa-toast-item ref={ref} {...waAttributes(props)}>
      {children}
    </wa-toast-item>
  );
});
