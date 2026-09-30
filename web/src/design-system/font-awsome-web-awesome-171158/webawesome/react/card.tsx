import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaCardProps extends WaBaseProps {
  /**
   * The card's visual appearance.
   * @default 'outlined'
   */
  appearance?: 'accent' | 'filled' | 'outlined' | 'filled-outlined' | 'plain';

  /**
   * Only required for SSR. Set to `true` if you're slotting in a `header` element so the server-rendered markup
   * includes the header before the component hydrates on the client.
   * @default false
   */
  "with-header"?: boolean;

  /**
   * Only required for SSR. Set to `true` if you're slotting in a `media` element so the server-rendered markup
   * includes the media before the component hydrates on the client.
   * @default false
   */
  "with-media"?: boolean;

  /**
   * Only required for SSR. Set to `true` if you're slotting in a `footer` element so the server-rendered markup
   * includes the footer before the component hydrates on the client.
   * @default false
   */
  "with-footer"?: boolean;

  /**
   * Only required for SSR. Set to `true` if you're slotting in a `header-actions` element so the server-rendered markup
   * includes the media before the component hydrates on the client.
   * @default false
   */
  "with-header-actions"?: boolean;

  /**
   * Only required for SSR. Set to `true` if you're slotting in a `footer-actions` element so the server-rendered markup
   * includes the media before the component hydrates on the client.
   * @default false
   */
  "with-footer-actions"?: boolean;

  /**
   * Renders the card's orientation *
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical';

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Cards group related content and actions inside a bordered container. Use them to present products, articles,
 * Renders the `<wa-card>` Web Awesome custom element.
 * Slots: (default), header, footer, media, actions, header-actions, footer-actions.
 */
export const WaCard = forwardRef<HTMLElement, WaCardProps>(function WaCard(
  { children, ...props }: WaCardProps,
  ref,
): ReactNode {
  return (
    <wa-card ref={ref} {...waAttributes(props)}>
      {children}
    </wa-card>
  );
});
