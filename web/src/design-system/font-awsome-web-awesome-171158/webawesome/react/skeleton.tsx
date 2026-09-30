import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaSkeletonProps extends WaBaseProps {
  /**
   * Determines which effect the skeleton will use.
   * @default 'none'
   */
  effect?: 'pulse' | 'sheen' | 'none';

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Skeletons show placeholder shapes where content will appear once it finishes loading, reducing perceived
 * Renders the `<wa-skeleton>` Web Awesome custom element.
 */
export const WaSkeleton = forwardRef<HTMLElement, WaSkeletonProps>(function WaSkeleton(
  { children, ...props }: WaSkeletonProps,
  ref,
): ReactNode {
  return (
    <wa-skeleton ref={ref} {...waAttributes(props)}>
      {children}
    </wa-skeleton>
  );
});
