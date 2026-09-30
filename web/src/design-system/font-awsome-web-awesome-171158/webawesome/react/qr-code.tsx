import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaQrCodeProps extends WaBaseProps {
  /**
   * The QR code's value.
   * @default ''
   */
  value?: string;

  /**
   * The label for assistive devices to announce. If unspecified, the value will be used instead.
   * @default ''
   */
  label?: string;

  /**
   * The size of the QR code, in pixels.
   * @default 128
   */
  size?: number;

  /**
   * The fill color. This can be any valid CSS color, but not a CSS custom property.
   * @default ''
   */
  fill?: string;

  /**
   * The background color. This can be any valid CSS color or `transparent`. It cannot be a CSS custom property.
   * @default ''
   */
  background?: string;

  /**
   * The edge radius of each module. Must be between 0 and 0.5.
   * @default 0
   */
  radius?: number;

  /**
   * The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html)
   * @default 'H'
   */
  "error-correction"?: 'L' | 'M' | 'Q' | 'H';

  /**
   * @default null
   */
  image?: string;

  /**
   * @default null
   */
  "image-background"?: string;

  /**
   * @default null
   */
  "image-coverage"?: string;

  /**
   * @default null
   */
  "image-padding"?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * QR codes encode a URL or other short text into a scannable image, rendered client-side using the Canvas API.
 * Renders the `<wa-qr-code>` Web Awesome custom element.
 */
export const WaQrCode = forwardRef<HTMLElement, WaQrCodeProps>(function WaQrCode(
  { children, ...props }: WaQrCodeProps,
  ref,
): ReactNode {
  return (
    <wa-qr-code ref={ref} {...waAttributes(props)}>
      {children}
    </wa-qr-code>
  );
});
