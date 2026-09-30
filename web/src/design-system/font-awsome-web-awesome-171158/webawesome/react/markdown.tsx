import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaMarkdownProps extends WaBaseProps {
  /**
   * The tab stop width used when converting leading tabs to spaces during whitespace normalization.
   * @default 4
   */
  "tab-size"?: number;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Markdown elements render markdown content as HTML directly in the browser, making it easy to display
 * Renders the `<wa-markdown>` Web Awesome custom element.
 */
export const WaMarkdown = forwardRef<HTMLElement, WaMarkdownProps>(function WaMarkdown(
  { children, ...props }: WaMarkdownProps,
  ref,
): ReactNode {
  return (
    <wa-markdown ref={ref} {...waAttributes(props)}>
      {children}
    </wa-markdown>
  );
});
