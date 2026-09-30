import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaDropdownProps extends WaBaseProps {
  /**
   * Opens or closes the dropdown.
   * @default false
   */
  open?: boolean;

  /**
   * The dropdown's size.
   * @default 'm'
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'small' | 'medium' | 'large';

  /**
   * The placement of the dropdown menu in reference to the trigger. The menu will shift to a more optimal location if
   * the preferred placement doesn't have enough room.
   * @default 'bottom-start'
   */
  placement?: string;

  /**
   * The distance of the dropdown menu from its trigger.
   * @default 0
   */
  distance?: number;

  /**
   * The offset of the dropdown menu along its trigger.
   * @default 0
   */
  skidding?: number;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Dropdowns display a list of options triggered by a button or other element. They support keyboard
 * Renders the `<wa-dropdown>` Web Awesome custom element.
 * Slots: (default), trigger.
 * Events: wa-show, wa-after-show, wa-hide, wa-after-hide, wa-select (listen with the matching on* prop or a ref).
 */
export const WaDropdown = forwardRef<HTMLElement, WaDropdownProps>(function WaDropdown(
  { children, ...props }: WaDropdownProps,
  ref,
): ReactNode {
  return (
    <wa-dropdown ref={ref} {...waAttributes(props)}>
      {children}
    </wa-dropdown>
  );
});
