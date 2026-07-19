import Image from "next/image";
import type { Experience } from "@/data/experience";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter((word) => /^[A-Z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <article className="py-7 first:pt-3 last:pb-3">
      <div className="flex items-center gap-4">
        {item.logo ? (
          <span className="icon-circle overflow-hidden bg-white">
            <Image src={item.logo} alt={`${item.company} logo`} width={44} height={44} className="h-7 w-7 object-contain" />
          </span>
        ) : (
          <span aria-hidden="true" className="icon-circle">
            {initials(item.company)}
          </span>
        )}
        <div className="min-w-0">
          <h3 className="font-semibold text-ink">{item.company}</h3>
          <p className="text-sm text-ink-muted">
            {item.role} · {item.location}
          </p>
        </div>
        <p className="ml-auto shrink-0 text-sm text-ink-muted">{item.period}</p>
      </div>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink-muted sm:pl-[3.75rem]">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span aria-hidden="true" className="mt-1 text-accent">
              —
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
