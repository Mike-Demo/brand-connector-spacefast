import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaTreeItemProps extends WaBaseProps {
  /**
   * Expands the tree item.
   * @default false
   */
  expanded?: boolean;

  /**
   * Draws the tree item in a selected state.
   * @default false
   */
  selected?: boolean;

  /**
   * Disables the tree item.
   * @default false
   */
  disabled?: boolean;

  /**
   * Enables lazy loading behavior.
   * @default false
   */
  lazy?: boolean;

  /**
   * @default -1
   */
  tabindex?: number;

  /**
   * @default 'treeitem'
   */
  role?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Tree items represent a single hierarchical node inside a tree, and can contain nested items that expand and
 * Renders the `<wa-tree-item>` Web Awesome custom element.
 * Slots: (default), expand-icon, collapse-icon.
 * Events: wa-expand, wa-after-expand, wa-collapse, wa-after-collapse, wa-lazy-change, wa-lazy-load (listen with the matching on* prop or a ref).
 */
export const WaTreeItem = forwardRef<HTMLElement, WaTreeItemProps>(function WaTreeItem(
  { children, ...props }: WaTreeItemProps,
  ref,
): ReactNode {
  return (
    <wa-tree-item ref={ref} {...waAttributes(props)}>
      {children}
    </wa-tree-item>
  );
});
