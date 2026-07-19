"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useId, useState } from "react";
import type { Experience } from "@/data/experience";
import { ChevronDownIcon } from "./icons";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter((word) => /^[A-Z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

interface ExperienceItemProps {
  item: Experience;
  /** Render with the bullets expanded (first entry defaults open on the page). */
  defaultOpen?: boolean;
}

export function ExperienceItem({ item, defaultOpen = false }: ExperienceItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <article className="py-2">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center gap-4 rounded-lg py-3 text-left"
      >
        {item.logo ? (
          <span className="icon-circle overflow-hidden bg-white">
            <Image src={item.logo} alt={`${item.company} logo`} width={44} height={44} unoptimized loading="eager" className="h-7 w-7 object-contain" />
          </span>
        ) : (
          <span aria-hidden="true" className="icon-circle">
            {initials(item.company)}
          </span>
        )}
        <span className="min-w-0">
          <span className="block font-semibold text-ink">{item.company}</span>
          <span className="block text-sm text-ink-muted">
            {item.role} · {item.location}
          </span>
        </span>
        <span className="ml-auto flex shrink-0 items-center gap-3 text-sm text-ink-muted">
          {item.period}
          <ChevronDownIcon
            className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </span>
      </button>
      {/* Always mounted so bullets exist in the server HTML (SEO + static mirror). */}
      <motion.div
        id={panelId}
        data-exp-panel
        aria-hidden={!open}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        style={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <ul className="space-y-3 pt-2 pb-4 text-sm leading-relaxed text-ink-muted sm:pl-[3.75rem]">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span aria-hidden="true" className="mt-1 text-accent">
                —
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </article>
  );
}
