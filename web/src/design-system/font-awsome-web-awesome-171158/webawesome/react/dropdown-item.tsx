import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaDropdownItemProps extends WaBaseProps {
  /**
   * The type of menu item to render.
   * @default 'default'
   */
  variant?: 'danger' | 'default';

  /**
   * An optional value for the menu item. This is useful for determining which item was selected when listening to the
   * dropdown's `wa-select` event.
   */
  value?: string;

  /**
   * Set to `checkbox` to make the item a checkbox.
   * @default 'normal'
   */
  type?: 'normal' | 'checkbox';

  /**
   * Set to true to check the dropdown item. Only valid when `type` is `checkbox`.
   * @default false
   */
  checked?: boolean;

  /**
   * Disables the dropdown item.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the submenu is currently open.
   * @default false
   */
  submenuOpen?: boolean;

  /**
   * When set, selecting the item will navigate to this URL. The item remains a menu item for assistive devices, so
   * make sure the label describes where the link goes. Ignored when the item has a submenu.
   */
  href?: string;

  /**
   * Tells the browser where to open the link. Only used when `href` is present.
   */
  target?: '_blank' | '_parent' | '_self' | '_top';

  /**
   * When using `href`, this attribute will map to the underlying link's `rel` attribute.
   */
  rel?: string;

  /**
   * Tells the browser to download the linked file as this filename. Only used when `href` is present.
   */
  download?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Dropdown items represent selectable entries within a dropdown menu, including standard actions, checkable
 * Renders the `<wa-dropdown-item>` Web Awesome custom element.
 * Slots: (default), icon, details, submenu.
 * Events: blur, focus (listen with the matching on* prop or a ref).
 */
export const WaDropdownItem = forwardRef<HTMLElement, WaDropdownItemProps>(function WaDropdownItem(
  { children, ...props }: WaDropdownItemProps,
  ref,
): ReactNode {
  return (
    <wa-dropdown-item ref={ref} {...waAttributes(props)}>
      {children}
    </wa-dropdown-item>
  );
});
