import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  id: string;
  title: string;
}

/** Left-aligned resume-style heading (About, Work Experience, Education, Skills). */
export function SectionHeading({ id, title }: SectionHeadingProps) {
  return (
    <Reveal>
      <h2 id={id} className="mb-6 text-xl font-bold tracking-tight text-ink">
        {title}
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

/** Centered showcase heading with an inverted pill badge (Projects, Contact). */
export function ShowcaseHeading({ id, badge, title, subtitle }: ShowcaseHeadingProps) {
  return (
    <Reveal>
      <div id={id} className="mb-12 text-center">
        <span className="badge-pill">{badge}</span>
        <h2 className="mt-4 text-showcase font-extrabold tracking-tight text-ink text-balance">
          {title}
        </h2>
        {subtitle && <p className="mx-auto mt-4 max-w-md text-ink-muted">{subtitle}</p>}
      </div>
    </Reveal>
  );
}
