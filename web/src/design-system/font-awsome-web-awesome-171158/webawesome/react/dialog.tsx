import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaDialogProps extends WaBaseProps {
  /**
   * Indicates whether or not the dialog is open. Toggle this attribute to show and hide the dialog.
   * @default false
   */
  open?: boolean;

  /**
   * The dialog's label as displayed in the header. You should always include a relevant label, as it is required for
   * proper accessibility. If you need to display HTML, use the `label` slot instead.
   * @default ''
   */
  label?: string;

  /**
   * Disables the header. This will also remove the default close button.
   * @default false
   */
  "without-header"?: boolean;

  /**
   * When enabled, the dialog will be closed when the user clicks outside of it.
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
 * Dialogs appear above the page and require the user's immediate attention. Use them for confirmations, forms,
 * Renders the `<wa-dialog>` Web Awesome custom element.
 * Slots: (default), label, header-actions, footer.
 * Events: wa-show, wa-after-show, wa-hide, wa-after-hide (listen with the matching on* prop or a ref).
 */
export const WaDialog = forwardRef<HTMLElement, WaDialogProps>(function WaDialog(
  { children, ...props }: WaDialogProps,
  ref,
): ReactNode {
  return (
    <wa-dialog ref={ref} {...waAttributes(props)}>
      {children}
    </wa-dialog>
  );
});
