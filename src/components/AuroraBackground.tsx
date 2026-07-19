"use client";

// Adapted from "Mini bg Aurora" (dhileepkumargm via 21st.dev): drifting radial
// orbs on a fixed canvas. Re-tinted to the site palette, theme-aware, and
// rendered as a static wash for prefers-reduced-motion.
import { useEffect, useRef } from "react";

interface OrbColor {
  r: number;
  g: number;
  b: number;
}

const DARK_ORBS: OrbColor[] = [
  { r: 45, g: 212, b: 191 }, // teal
  { r: 56, g: 132, b: 255 }, // deep blue
  { r: 244, g: 114, b: 182 }, // rose
];

const LIGHT_ORBS: OrbColor[] = [
  { r: 13, g: 148, b: 136 },
  { r: 37, g: 99, b: 235 },
  { r: 219, g: 39, b: 119 },
];

const ORB_COUNT = 8;

export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const context = canvasEl.getContext("2d");
    if (!context) return;
    // Stable non-null bindings — TS narrowing doesn't flow into class bodies.
    const canvas = canvasEl;
    const ctx = context;

    let time = 0;
    let animationFrameId = 0;

    const isLight = () => document.documentElement.dataset.theme === "light";
    const alpha = () => (isLight() ? 0.1 : 0.16);
    const palette = () => (isLight() ? LIGHT_ORBS : DARK_ORBS);

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    class Orb {
      x = Math.random() * canvas.width;
      y = Math.random() * canvas.height;
      radius = Math.random() * 380 + 140;
      colorIndex = Math.floor(Math.random() * palette().length);
      vx = (Math.random() - 0.5) * 0.4;
      vy = (Math.random() - 0.5) * 0.4;

      draw() {
        if (!ctx) return;
        const color = palette()[this.colorIndex];
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha()})`);
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        this.x += this.vx + Math.sin(time * 0.001) * 0.4;
        this.y += this.vy + Math.cos(time * 0.001) * 0.4;
        const out =
          this.x < -this.radius ||
          this.x > canvas.width + this.radius ||
          this.y < -this.radius ||
          this.y > canvas.height + this.radius;
        if (out) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }
    }

    const orbs = Array.from({ length: ORB_COUNT }, () => new Orb());

    // Cursor orb: trails the pointer like the card spotlights, only on
    // devices that actually hover a cursor.
    const canHover = window.matchMedia("(hover: hover)").matches;
    const cursor = { x: 0, y: 0, targetX: 0, targetY: 0, strength: 0 };
    const onPointerMove = (e: PointerEvent) => {
      cursor.targetX = e.clientX;
      cursor.targetY = e.clientY;
      if (cursor.strength === 0) {
        cursor.x = e.clientX;
        cursor.y = e.clientY;
      }
      cursor.strength = 1;
    };
    const onPointerLeave = () => {
      cursor.strength = 0;
    };
    if (canHover) {
      window.addEventListener("pointermove", onPointerMove);
      document.documentElement.addEventListener("pointerleave", onPointerLeave);
    }

    const drawCursorOrb = () => {
      if (cursor.strength <= 0.01) return;
      cursor.x += (cursor.targetX - cursor.x) * 0.08;
      cursor.y += (cursor.targetY - cursor.y) * 0.08;
      const color = palette()[0];
      const a = (isLight() ? 0.12 : 0.2) * cursor.strength;
      const radius = 280;
      const gradient = ctx.createRadialGradient(cursor.x, cursor.y, 0, cursor.x, cursor.y, radius);
      gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${a})`);
      gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cursor.x, cursor.y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      orbs.forEach((orb) => {
        orb.update();
        orb.draw();
      });
      drawCursorOrb();
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      // One static wash — atmosphere without movement.
      time = 1;
      drawFrame();
    } else {
      const animate = () => {
        time++;
        drawFrame();
        animationFrameId = requestAnimationFrame(animate);
      };
      animate();
    }

    // Re-tint immediately when the theme flips.
    const observer = new MutationObserver(drawFrame);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      if (canHover) {
        window.removeEventListener("pointermove", onPointerMove);
        document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      }
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      data-aurora
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
