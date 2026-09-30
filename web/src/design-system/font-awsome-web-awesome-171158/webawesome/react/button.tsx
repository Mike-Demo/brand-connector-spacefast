import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaButtonProps extends WaBaseProps {
  /**
   * The button's theme variant. Defaults to `neutral` if not within another element with a variant.
   * @default 'neutral'
   */
  variant?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger';

  /**
   * The button's visual appearance.
   * @default 'accent'
   */
  appearance?: 'accent' | 'filled' | 'outlined' | 'filled-outlined' | 'plain';

  /**
   * The button's size.
   * @default 'm'
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'small' | 'medium' | 'large';

  /**
   * Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior.
   * @default false
   */
  "with-caret"?: boolean;

  /**
   * Only required for SSR. Set to `true` if you're slotting in a `start` element so the server-rendered markup
   * includes the start slot before the component hydrates on the client.
   * @default false
   */
  "with-start"?: boolean;

  /**
   * Only required for SSR. Set to `true` if you're slotting in an `end` element so the server-rendered markup
   * includes the end slot before the component hydrates on the client.
   * @default false
   */
  "with-end"?: boolean;

  /**
   * Disables the button.
   * @default false
   */
  disabled?: boolean;

  /**
   * Draws the button in a loading state.
   * @default false
   */
  loading?: boolean;

  /**
   * Draws a pill-style button with rounded edges.
   * @default false
   */
  pill?: boolean;

  /**
   * The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
   * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
   * This attribute is ignored when `href` is present.
   * @default null
   */
  name?: string;

  /**
   * The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
   * button is the submitter. This attribute is ignored when `href` is present.
   */
  value?: string;

  /**
   * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
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

  /**
   * Used to override the form owner's `action` attribute.
   */
  formaction?: string;

  /**
   * Used to override the form owner's `enctype` attribute.
   */
  formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';

  /**
   * Used to override the form owner's `method` attribute.
   */
  formmethod?: 'post' | 'get';

  /**
   * Used to override the form owner's `novalidate` attribute.
   */
  formnovalidate?: boolean;

  /**
   * Used to override the form owner's `target` attribute.
   */
  formtarget?: '_self' | '_blank' | '_parent' | '_top' | string;

  /**
   * @default null
   */
  "custom-error"?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Buttons represent actions the user can take, such as submitting a form, opening a dialog, or navigating to
 * Renders the `<wa-button>` Web Awesome custom element.
 * Slots: (default), start, end.
 * Events: blur, focus, wa-invalid (listen with the matching on* prop or a ref).
 */
export const WaButton = forwardRef<HTMLElement, WaButtonProps>(function WaButton(
  { children, ...props }: WaButtonProps,
  ref,
): ReactNode {
  return (
    <wa-button ref={ref} {...waAttributes(props)}>
      {children}
    </wa-button>
  );
});
