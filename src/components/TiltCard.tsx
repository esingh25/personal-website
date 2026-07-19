"use client";

// 3D tilt on hover, in the spirit of 21st.dev's Tilt Card: the pointer
// position drives springed rotateX/rotateY. Replaces the earlier spotlight.
import { motion, useMotionTemplate, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

const MAX_TILT_DEG = 7;
const SPRING = { stiffness: 260, damping: 22, mass: 0.6 };

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className }: TiltCardProps) {
  const rotateX = useSpring(0, SPRING);
  const rotateY = useSpring(0, SPRING);
  const scale = useSpring(1, SPRING);
  const transform = useMotionTemplate`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

  const reduceMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion()) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-py * MAX_TILT_DEG * 2);
    rotateY.set(px * MAX_TILT_DEG * 2);
    scale.set(1.02);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      data-tilt
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className={cn("glass rounded-2xl", className)}
    >
      {children}
    </motion.div>
  );
}
