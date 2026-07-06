import type { Experience } from "@/data/experience";

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <article className="relative border-l border-line pl-8 pb-12 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-xl text-ink">{item.company}</h3>
        <p className="text-sm text-ink-muted">{item.period}</p>
      </div>
      <p className="mt-1 text-sm text-accent">
        {item.role} · {item.location}
      </p>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-muted">
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
