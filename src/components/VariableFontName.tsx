"use client";

// Cursor-proximity variable-font effect in the spirit of 21st.dev's
// "Variable Font Hover Hero" (component code is paywalled; behavior rebuilt
// from its description). Each letter's weight and softness follow the cursor
// across Fraunces' wght/SOFT axes.
import { useRef, type MouseEvent } from "react";

const BASE_WGHT = 620;
const PEAK_WGHT = 900;
const RANGE_PX = 140;

export function VariableFontName({ text }: { text: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const letterRefs = useRef<Array<HTMLSpanElement | null>>([]);

  const setVariation = (wght: number, soft: number, el: HTMLSpanElement | null) => {
    if (el) el.style.fontVariationSettings = `"wght" ${wght}, "SOFT" ${soft}, "WONK" 1`;
  };

  const handleMouseMove = (e: MouseEvent<HTMLSpanElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    for (const el of letterRefs.current) {
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const distance = Math.hypot(e.clientX - cx, e.clientY - cy);
      const proximity = Math.max(0, 1 - distance / RANGE_PX);
      setVariation(BASE_WGHT + (PEAK_WGHT - BASE_WGHT) * proximity, 100 * proximity, el);
    }
  };

  const handleMouseLeave = () => {
    letterRefs.current.forEach((el) => setVariation(BASE_WGHT, 0, el));
  };

  return (
    <span
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={text}
      className="inline-block"
    >
      {Array.from(text).map((char, i) => (
        <span
          key={`${char}-${i}`}
          ref={(el) => {
            letterRefs.current[i] = el;
          }}
          aria-hidden="true"
          data-vf-letter
          className="inline-block transition-[font-variation-settings] duration-150 ease-out"
          style={{ fontVariationSettings: `"wght" ${BASE_WGHT}, "SOFT" 0, "WONK" 1` }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </span>
  );
}
