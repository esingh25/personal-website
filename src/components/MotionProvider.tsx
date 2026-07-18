"use client";

import { MotionConfig } from "motion/react";

/**
 * Honors prefers-reduced-motion globally: transform/layout animations are
 * dropped while opacity still resolves, so server and client render identical
 * props and reduced-motion users never inherit a stuck opacity:0 frame.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
