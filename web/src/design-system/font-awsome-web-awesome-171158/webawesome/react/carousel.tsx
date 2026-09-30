import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaCarouselProps extends WaBaseProps {
  /**
   * When set, allows the user to navigate the carousel in the same direction indefinitely.
   * @default false
   */
  loop?: boolean;

  /**
   * @default 0
   */
  slides?: number;

  /**
   * @default 0
   */
  currentSlide?: number;

  /**
   * When set, show the carousel's navigation.
   * @default false
   */
  navigation?: boolean;

  /**
   * When set, show the carousel's pagination indicators.
   * @default false
   */
  pagination?: boolean;

  /**
   * When set, the slides will scroll automatically when the user is not interacting with them.
   * @default false
   */
  autoplay?: boolean;

  /**
   * Specifies the amount of time, in milliseconds, between each automatic scroll.
   * @default 3000
   */
  "autoplay-interval"?: number;

  /**
   * Specifies how many slides should be shown at a given time.
   * @default 1
   */
  "slides-per-page"?: number;

  /**
   * Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page`
   * greater than one. It can't be higher than `slides-per-page`.
   * @default 1
   */
  "slides-per-move"?: number;

  /**
   * Specifies the orientation in which the carousel will lay out.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * When set, it is possible to scroll through the slides by dragging them with the mouse.
   * @default false
   */
  "mouse-dragging"?: boolean;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Carousels display a series of content slides along a horizontal or vertical axis, one or more at a time.
 * Renders the `<wa-carousel>` Web Awesome custom element.
 * Slots: (default), next-icon, previous-icon.
 * Events: wa-slide-change (listen with the matching on* prop or a ref).
 */
export const WaCarousel = forwardRef<HTMLElement, WaCarouselProps>(function WaCarousel(
  { children, ...props }: WaCarouselProps,
  ref,
): ReactNode {
  return (
    <wa-carousel ref={ref} {...waAttributes(props)}>
      {children}
    </wa-carousel>
  );
});
