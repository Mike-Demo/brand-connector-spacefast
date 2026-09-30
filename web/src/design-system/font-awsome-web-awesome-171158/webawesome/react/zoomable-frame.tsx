import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaZoomableFrameProps extends WaBaseProps {
  /**
   * The URL of the content to display.
   */
  src?: string;

  /**
   * Inline HTML to display.
   */
  srcdoc?: string;

  /**
   * Allows fullscreen mode.
   * @default false
   */
  allowfullscreen?: boolean;

  /**
   * Controls iframe loading behavior.
   * @default 'eager'
   */
  loading?: 'eager' | 'lazy';

  /**
   * Controls referrer information.
   */
  referrerpolicy?: string;

  /**
   * Security restrictions for the iframe.
   */
  sandbox?: string;

  /**
   * The current zoom of the frame, e.g. 0 = 0% and 1 = 100%.
   * @default 1
   */
  zoom?: number;

  /**
   * The zoom levels to step through when using zoom controls. This does not restrict programmatic changes to the zoom.
   * @default '25% 50% 75% 100% 125% 150% 175% 200%'
   */
  "zoom-levels"?: string;

  /**
   * Removes the zoom controls.
   * @default false
   */
  "without-controls"?: boolean;

  /**
   * Disables interaction when present.
   * @default false
   */
  "without-interaction"?: boolean;

  /**
   * Enables automatic theme syncing (light/dark mode and theme selector classes) from the host document to the iframe.
   * @default false
   */
  "with-theme-sync"?: boolean;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Zoomable frames embed iframe content with built-in controls for zooming, panning, and managing interaction.
 * Renders the `<wa-zoomable-frame>` Web Awesome custom element.
 * Slots: zoom-in-icon, zoom-out-icon.
 * Events: load, error (listen with the matching on* prop or a ref).
 */
export const WaZoomableFrame = forwardRef<HTMLElement, WaZoomableFrameProps>(function WaZoomableFrame(
  { children, ...props }: WaZoomableFrameProps,
  ref,
): ReactNode {
  return (
    <wa-zoomable-frame ref={ref} {...waAttributes(props)}>
      {children}
    </wa-zoomable-frame>
  );
});
