"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { site } from "@/data/site";

export function Hero() {
  // Reduced motion is handled globally by MotionProvider; identical props on
  // server and client keep hydration consistent.
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  });

  return (
    <section id="top" className="mx-auto flex w-full max-w-2xl flex-col-reverse items-start gap-8 px-6 pt-20 sm:flex-row sm:items-center sm:justify-between sm:pt-28">
      <div className="max-w-md">
        <motion.h1 {...fadeUp(0)} className="text-hero font-extrabold tracking-tight text-ink">
          Hi, I&apos;m Ekam{" "}
          <span className="wave" aria-hidden="true">
            👋
          </span>
        </motion.h1>
        <motion.p {...fadeUp(0.15)} className="mt-4 text-lg text-ink-muted">
          CS &amp; Math student at the University of Washington. {site.tagline}
        </motion.p>
      </div>
      <motion.div {...fadeUp(0.3)} className="shrink-0">
        {site.photo ? (
          <Image
            src={site.photo}
            alt={`Portrait of ${site.name}`}
            width={128}
            height={128}
            priority
            className="h-28 w-28 rounded-full border border-line object-cover sm:h-32 sm:w-32"
          />
        ) : (
          <div
            role="img"
            aria-label={`Placeholder portrait for ${site.name}`}
            className="flex h-28 w-28 items-center justify-center rounded-full border border-line bg-surface text-3xl font-bold text-ink-muted sm:h-32 sm:w-32"
          >
            ES
          </div>
        )}
      </motion.div>
    </section>
  );
}
