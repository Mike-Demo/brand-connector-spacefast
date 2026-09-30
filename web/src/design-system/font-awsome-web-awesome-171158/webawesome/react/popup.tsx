import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaPopupProps extends WaBaseProps {
  /**
   * The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor
   * element `id`, a DOM element reference, or a `VirtualElement`. If the anchor lives inside the popup, use the
   * `anchor` slot instead.
   */
  anchor?: string;

  /**
   * Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn
   * down and the popup will be hidden.
   * @default false
   */
  active?: boolean;

  /**
   * The preferred placement of the popup. Note that the actual placement will vary as configured to keep the
   * panel inside of the viewport.
   * @default 'top'
   */
  placement?: string;

  /**
   * The bounding box to use for flipping, shifting, and auto-sizing.
   * @default 'viewport'
   */
  boundary?: 'viewport' | 'scroll';

  /**
   * The distance in pixels from which to offset the panel away from its anchor.
   * @default 0
   */
  distance?: number;

  /**
   * The distance in pixels from which to offset the panel along its anchor.
   * @default 0
   */
  skidding?: number;

  /**
   * Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and
   * `--arrow-color` custom properties. For additional customizations, you can also target the arrow using
   * `::part(arrow)` in your stylesheet.
   * @default false
   */
  arrow?: boolean;

  /**
   * The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
   * anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
   * align the arrow to the start, end, or center of the popover instead.
   * @default 'anchor'
   */
  "arrow-placement"?: 'start' | 'end' | 'center' | 'anchor';

  /**
   * The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
   * this will prevent it from overflowing the corners.
   * @default 10
   */
  "arrow-padding"?: number;

  /**
   * When set, placement of the popup will flip to the opposite site to keep it in view. You can use
   * `flipFallbackPlacements` to further configure how the fallback placement is determined.
   * @default false
   */
  flip?: boolean;

  /**
   * If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
   * string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
   * fallback strategy will be used instead.
   * @default ''
   */
  "flip-fallback-placements"?: string;

  /**
   * When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
   * the popup should be positioned using the best available fit based on available space or as it was initially
   * preferred.
   * @default 'best-fit'
   */
  "flip-fallback-strategy"?: 'best-fit' | 'initial';

  /**
   * The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By
   * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
   * change the boundary by passing a reference to one or more elements to this property.
   */
  flipBoundary?: string;

  /**
   * The amount of padding, in pixels, to exceed before the flip behavior will occur.
   * @default 0
   */
  "flip-padding"?: number;

  /**
   * Moves the popup along the axis to keep it in view when clipped.
   * @default false
   */
  shift?: boolean;

  /**
   * The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By
   * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
   * change the boundary by passing a reference to one or more elements to this property.
   */
  shiftBoundary?: string;

  /**
   * The amount of padding, in pixels, to exceed before the shift behavior will occur.
   * @default 0
   */
  "shift-padding"?: number;

  /**
   * When set, this will cause the popup to automatically resize itself to prevent it from overflowing.
   */
  "auto-size"?: 'horizontal' | 'vertical' | 'both';

  /**
   * Syncs the popup's width or height to that of the anchor element.
   */
  sync?: 'width' | 'height' | 'both';

  /**
   * The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By
   * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
   * change the boundary by passing a reference to one or more elements to this property.
   */
  autoSizeBoundary?: string;

  /**
   * The amount of padding, in pixels, to exceed before the auto-size behavior will occur.
   * @default 0
   */
  "auto-size-padding"?: number;

  /**
   * When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the
   * gap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane
   * because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is
   * active.
   * @default false
   */
  "hover-bridge"?: boolean;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Popups declaratively anchor one element to another and keep them positioned together as the page scrolls or
 * Renders the `<wa-popup>` Web Awesome custom element.
 * Slots: (default), anchor.
 * Events: wa-reposition (listen with the matching on* prop or a ref).
 */
export const WaPopup = forwardRef<HTMLElement, WaPopupProps>(function WaPopup(
  { children, ...props }: WaPopupProps,
  ref,
): ReactNode {
  return (
    <wa-popup ref={ref} {...waAttributes(props)}>
      {children}
    </wa-popup>
  );
});
