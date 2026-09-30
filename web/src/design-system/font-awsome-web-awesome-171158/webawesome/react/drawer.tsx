import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaDrawerProps extends WaBaseProps {
  /**
   * Indicates whether or not the drawer is open. Toggle this attribute to show and hide the drawer.
   * @default false
   */
  open?: boolean;

  /**
   * The drawer's label as displayed in the header. You should always include a relevant label, as it is required for
   * proper accessibility. If you need to display HTML, use the `label` slot instead.
   * @default ''
   */
  label?: string;

  /**
   * The direction from which the drawer will open.
   * @default 'end'
   */
  placement?: 'top' | 'end' | 'bottom' | 'start';

  /**
   * Disables the header. This will also remove the default close button.
   * @default false
   */
  "without-header"?: boolean;

  /**
   * When enabled, the drawer will be closed when the user clicks outside of it.
   * @default false
   */
  "light-dismiss"?: boolean;

  /**
   * Only required for SSR. Set to `true` if you're slotting in a `footer` element so the server-rendered markup
   * includes the footer before the component hydrates on the client.
   * @default false
   */
  "with-footer"?: boolean;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Drawers slide in from the edge of a container to expose additional options and information without
 * Renders the `<wa-drawer>` Web Awesome custom element.
 * Slots: (default), label, header-actions, footer.
 * Events: wa-show, wa-after-show, wa-hide, wa-after-hide (listen with the matching on* prop or a ref).
 */
export const WaDrawer = forwardRef<HTMLElement, WaDrawerProps>(function WaDrawer(
  { children, ...props }: WaDrawerProps,
  ref,
): ReactNode {
  return (
    <wa-drawer ref={ref} {...waAttributes(props)}>
      {children}
    </wa-drawer>
  );
});
