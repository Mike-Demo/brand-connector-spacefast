import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaTreeProps extends WaBaseProps {
  /**
   * The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple
   * displays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected.
   * Leaf-multiple allows multiple leaf nodes to be selected while parent nodes only expand and collapse.
   * @default 'single'
   */
  selection?: 'single' | 'multiple' | 'leaf' | 'leaf-multiple';

  /**
   * @default 0
   */
  tabindex?: number;

  /**
   * @default 'tree'
   */
  role?: string;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Trees allow you to display a hierarchical list of selectable tree items. Items with children can be expanded
 * Renders the `<wa-tree>` Web Awesome custom element.
 * Slots: (default), expand-icon, collapse-icon.
 * Events: wa-selection-change (listen with the matching on* prop or a ref).
 */
export const WaTree = forwardRef<HTMLElement, WaTreeProps>(function WaTree(
  { children, ...props }: WaTreeProps,
  ref,
): ReactNode {
  return (
    <wa-tree ref={ref} {...waAttributes(props)}>
      {children}
    </wa-tree>
  );
});
