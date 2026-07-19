"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { site } from "@/data/site";
import { FileIcon } from "./icons";
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
      className="mx-auto flex min-h-[55svh] w-full max-w-4xl flex-col justify-center px-6 pt-24"
    >
      <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <motion.h1 {...fadeUp(0)} className="font-display text-hero text-ink">
            Hi, I&apos;m <VariableFontName text="Ekam" />
          </motion.h1>
          <motion.p
            {...fadeUp(0.15)}
            className="mt-5 font-mono text-xs uppercase tracking-[0.28em] text-accent sm:text-sm"
          >
            CS &amp; Math @ University of Washington
          </motion.p>
        </div>
        <motion.div {...fadeUp(0.3)} className="shrink-0">
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
      <motion.div {...fadeUp(0.45)} className="mt-10 flex flex-wrap gap-3">
        <a href={site.resume} className="pill-btn px-5 py-2.5 text-sm">
          <FileIcon className="h-4 w-4" />
          View Resume
        </a>
        <a href="#contact" className="pill-btn pill-btn-outline px-5 py-2.5 text-sm">
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}
