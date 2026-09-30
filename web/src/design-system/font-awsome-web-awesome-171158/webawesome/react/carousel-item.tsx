import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaCarouselItemProps extends WaBaseProps {
  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Carousel items represent individual slides within a carousel.
 * Renders the `<wa-carousel-item>` Web Awesome custom element.
 * Slots: (default).
 */
export const WaCarouselItem = forwardRef<HTMLElement, WaCarouselItemProps>(function WaCarouselItem(
  { children, ...props }: WaCarouselItemProps,
  ref,
): ReactNode {
  return (
    <wa-carousel-item ref={ref} {...waAttributes(props)}>
      {children}
    </wa-carousel-item>
  );
});
