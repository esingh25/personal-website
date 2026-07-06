"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/data/site";

const heroLinks = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: `mailto:${site.email}` },
  { label: "Resume", href: site.resume },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20, filter: "blur(8px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
        };

  return (
    <section id="top" className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 pt-24">
      <motion.p {...fadeUp(0)} className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">
        Computer Science &amp; Mathematics · University of Washington
      </motion.p>
      <motion.h1
        {...fadeUp(0.15)}
        className="font-display text-hero text-ink"
      >
        {site.name}
      </motion.h1>
      <motion.p {...fadeUp(0.3)} className="mt-6 max-w-xl text-lg text-ink-muted sm:text-xl">
        {site.tagline}
      </motion.p>
      <motion.ul {...fadeUp(0.45)} className="mt-10 flex flex-wrap gap-4">
        {heroLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-block rounded-full border border-line px-5 py-2 text-sm text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent motion-reduce:hover:translate-y-0"
            >
              {link.label}
            </a>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
