import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  id: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal>
      <div id={id} className="mb-10">
        <h2 className="font-display text-3xl sm:text-4xl text-ink">
          {title}
          <span className="text-accent">.</span>
        </h2>
        {subtitle && <p className="mt-2 text-ink-muted">{subtitle}</p>}
      </div>
    </Reveal>
  );
}
