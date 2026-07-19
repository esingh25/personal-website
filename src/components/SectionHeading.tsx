import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  id: string;
  index: string;
  title: string;
}

/** Numbered section heading on a full-width hairline rule. */
export function SectionHeading({ id, index, title }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="mb-8 flex items-baseline gap-4 border-t border-line pt-6">
        <span aria-hidden="true" className="font-mono text-sm text-accent">
          {index}
        </span>
        <h2 id={id} className="font-display text-heading text-ink">
          {title}
        </h2>
      </div>
    </Reveal>
  );
}

interface ShowcaseHeadingProps {
  id: string;
  index: string;
  badge: string;
  title: string;
  subtitle?: string;
}

/** Centered showcase heading with a numbered mono eyebrow badge (Projects, Contact). */
export function ShowcaseHeading({ id, index, badge, title, subtitle }: ShowcaseHeadingProps) {
  return (
    <Reveal>
      <div id={id} className="mb-12 border-t border-line pt-10 text-center">
        <span className="badge-pill">
          {index} — {badge}
        </span>
        <h2 className="mt-5 font-display text-showcase text-ink text-balance">{title}</h2>
        {subtitle && <p className="mx-auto mt-4 max-w-md text-ink-muted">{subtitle}</p>}
      </div>
    </Reveal>
  );
}
