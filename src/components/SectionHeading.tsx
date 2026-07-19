import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  id: string;
  title: string;
}

/** Left-aligned section heading — Fraunces display with an accent full stop. */
export function SectionHeading({ id, title }: SectionHeadingProps) {
  return (
    <Reveal>
      <h2 id={id} className="mb-8 font-display text-heading text-ink">
        {title}
        <span className="text-accent">.</span>
      </h2>
    </Reveal>
  );
}

interface ShowcaseHeadingProps {
  id: string;
  badge: string;
  title: string;
  subtitle?: string;
}

/** Centered showcase heading with a mono eyebrow badge (Projects, Contact). */
export function ShowcaseHeading({ id, badge, title, subtitle }: ShowcaseHeadingProps) {
  return (
    <Reveal>
      <div id={id} className="mb-12 text-center">
        <span className="badge-pill">{badge}</span>
        <h2 className="mt-5 font-display text-showcase text-ink text-balance">{title}</h2>
        {subtitle && <p className="mx-auto mt-4 max-w-md text-ink-muted">{subtitle}</p>}
      </div>
    </Reveal>
  );
}
