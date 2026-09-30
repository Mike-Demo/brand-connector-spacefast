import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaAnimatedImageProps extends WaBaseProps {
  /**
   * The path to the image to load.
   */
  src?: string;

  /**
   * A description of the image used by assistive devices.
   */
  alt?: string;

  /**
   * Plays the animation. When this attribute is remove, the animation will pause.
   */
  play?: boolean;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Animated images display GIFs and WEBPs with controls to play and pause them on demand. Use them when you
 * Renders the `<wa-animated-image>` Web Awesome custom element.
 * Slots: play-icon, pause-icon.
 * Events: wa-load, wa-error (listen with the matching on* prop or a ref).
 */
export const WaAnimatedImage = forwardRef<HTMLElement, WaAnimatedImageProps>(function WaAnimatedImage(
  { children, ...props }: WaAnimatedImageProps,
  ref,
): ReactNode {
  return (
    <wa-animated-image ref={ref} {...waAttributes(props)}>
      {children}
    </wa-animated-image>
  );
});
