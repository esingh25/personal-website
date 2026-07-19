"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { site } from "@/data/site";
import { VariableFontName } from "./VariableFontName";

export function Hero() {
  // Reduced motion is handled globally by MotionProvider; identical props on
  // server and client keep hydration consistent.
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  });

  return (
    <section
      id="top"
      className="mx-auto flex min-h-svh w-full max-w-4xl flex-col justify-center px-6 pt-16"
    >
      <motion.p
        {...fadeUp(0)}
        className="font-mono text-xs uppercase tracking-[0.28em] text-accent sm:text-sm"
      >
        CS &amp; Math @ University of Washington
      </motion.p>
      <div className="mt-6 flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
        <motion.h1 {...fadeUp(0.15)} className="font-display text-hero text-ink">
          Hi, I&apos;m <VariableFontName text="Ekam" />
        </motion.h1>
        <motion.div {...fadeUp(0.45)} className="shrink-0">
          {site.photo ? (
            <div className="glass rounded-full p-2">
              <Image
                src={site.photo}
                alt={`Portrait of ${site.name}`}
                width={144}
                height={144}
                priority
                className="h-32 w-32 rounded-full object-cover sm:h-36 sm:w-36"
              />
            </div>
          ) : (
            <div
              role="img"
              aria-label={`Placeholder portrait for ${site.name}`}
              className="glass flex h-32 w-32 items-center justify-center rounded-full font-mono text-3xl font-bold text-ink-muted sm:h-36 sm:w-36"
            >
              ES
            </div>
          )}
        </motion.div>
      </div>
      <motion.p {...fadeUp(0.3)} className="mt-8 max-w-xl text-lg text-ink-muted sm:text-xl">
        {site.tagline}
      </motion.p>
    </section>
  );
}
