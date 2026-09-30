import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaIconProps extends WaBaseProps {
  /**
   * The name of the icon to draw. Available names depend on the icon library being used.
   */
  name?: string;

  /**
   * The family of icons to choose from. For Font Awesome Free, valid options include `classic` and `brands`. For
   * Font Awesome Pro subscribers, valid options include, `classic`, `sharp`, `duotone`, `sharp-duotone`, and `brands`.
   * A valid kit code must be present to show pro icons via CDN. You can set `<html data-fa-kit-code="...">` to provide
   * one.
   */
  family?: string;

  /**
   * The name of the icon's variant. For Font Awesome, valid options include `thin`, `light`, `regular`, and `solid` for
   * the `classic` and `sharp` families. Some variants require a Font Awesome Pro subscription. Custom icon libraries
   * may or may not use this property.
   */
  variant?: string;

  /**
   * Sets the icon canvas — the box the icon is centered within. Unset renders as `fixed` (1.25em × 1em); `auto` hugs the
   * icon's width; `square` is 1.25em × 1.25em; `roomy` is 1.5em × 1.5em. Mirrors Font Awesome's `fa-fixed-width`,
   * `fa-width-auto`, `fa-canvas-square`, and `fa-canvas-roomy`. Scales with `font-size`.
   */
  canvas?: string;

  /**
   * Sets the width of the icon to match the cropped SVG viewBox. This operates like the Font `fa-width-auto` class.
   * @default false
   */
  "auto-width"?: boolean;

  /**
   * Swaps the opacity of duotone icons.
   * @default false
   */
  "swap-opacity"?: boolean;

  /**
   * An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
   * can result in XSS attacks.
   */
  src?: string;

  /**
   * An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
   * ignored by assistive devices.
   * @default ''
   */
  label?: string;

  /**
   * The name of a registered custom icon library.
   * @default 'default'
   */
  library?: string;

  /**
   * Sets the rotation degree of the icon
   * @default 0
   */
  rotate?: number;

  /**
   * Sets the flip direction of the icon along the 'x' (horizontal), 'y' (vertical), or 'both' axes.
   */
  flip?: string;

  /**
   * Sets the animation for the icon
   */
  animation?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Icons are scalable vector symbols that represent actions, content, or status throughout your application.
 * Renders the `<wa-icon>` Web Awesome custom element.
 * Events: wa-load, wa-error (listen with the matching on* prop or a ref).
 */
export const WaIcon = forwardRef<HTMLElement, WaIconProps>(function WaIcon(
  { children, ...props }: WaIconProps,
  ref,
): ReactNode {
  return (
    <wa-icon ref={ref} {...waAttributes(props)}>
      {children}
    </wa-icon>
  );
});
