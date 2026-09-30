import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaAvatarProps extends WaBaseProps {
  /**
   * The image source to use for the avatar.
   * @default ''
   */
  image?: string;

  /**
   * A label to use to describe the avatar to assistive devices.
   * @default ''
   */
  label?: string;

  /**
   * Initials to use as a fallback when no image is available (1-2 characters max recommended).
   * @default ''
   */
  initials?: string;

  /**
   * Indicates how the browser should load the image.
   * @default 'eager'
   */
  loading?: 'eager' | 'lazy';

  /**
   * The shape of the avatar.
   * @default 'circle'
   */
  shape?: 'circle' | 'square' | 'rounded';

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Avatars represent a person or object with an image, initials, or icon. Use them in lists, comments, and
 * Renders the `<wa-avatar>` Web Awesome custom element.
 * Slots: icon.
 * Events: wa-error (listen with the matching on* prop or a ref).
 */
export const WaAvatar = forwardRef<HTMLElement, WaAvatarProps>(function WaAvatar(
  { children, ...props }: WaAvatarProps,
  ref,
): ReactNode {
  return (
    <wa-avatar ref={ref} {...waAttributes(props)}>
      {children}
    </wa-avatar>
  );
});
