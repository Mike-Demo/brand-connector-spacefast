import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaAnimationProps extends WaBaseProps {
  /**
   * The name of the built-in animation to use. For custom animations, use the `keyframes` prop.
   * @default 'none'
   */
  name?: string;

  /**
   * Plays the animation. When omitted, the animation will be paused. This attribute will be automatically removed when
   * the animation finishes or gets canceled.
   * @default false
   */
  play?: boolean;

  /**
   * The number of milliseconds to delay the start of the animation.
   * @default 0
   */
  delay?: number;

  /**
   * Determines the direction of playback as well as the behavior when reaching the end of an iteration.
   * [Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)
   * @default 'normal'
   */
  direction?: string;

  /**
   * The number of milliseconds each iteration of the animation takes to complete.
   * @default 1000
   */
  duration?: number;

  /**
   * The easing function to use for the animation. This can be a Web Awesome easing function or a custom easing function
   * such as `cubic-bezier(0, 1, .76, 1.14)`.
   * @default 'linear'
   */
  easing?: string;

  /**
   * The number of milliseconds to delay after the active period of an animation sequence.
   * @default 0
   */
  "end-delay"?: number;

  /**
   * Sets how the animation applies styles to its target before and after its execution.
   * @default 'auto'
   */
  fill?: string;

  /**
   * The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops.
   * @default Infinity
   */
  iterations?: number;

  /**
   * The offset at which to start the animation, usually between 0 (start) and 1 (end).
   * @default 0
   */
  "iteration-start"?: number;

  /**
   * Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
   * to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
   * value can be changed without causing the animation to restart.
   * @default 1
   */
  "playback-rate"?: number;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Animate elements declaratively with nearly 100 baked-in presets, or roll your own with custom keyframes.
 * Renders the `<wa-animation>` Web Awesome custom element.
 * Slots: (default).
 * Events: wa-cancel, wa-finish, wa-start (listen with the matching on* prop or a ref).
 */
export const WaAnimation = forwardRef<HTMLElement, WaAnimationProps>(function WaAnimation(
  { children, ...props }: WaAnimationProps,
  ref,
): ReactNode {
  return (
    <wa-animation ref={ref} {...waAttributes(props)}>
      {children}
    </wa-animation>
  );
});
