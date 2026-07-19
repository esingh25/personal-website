import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="mx-auto w-full max-w-2xl px-6 pt-24">
      <SectionHeading id="about" index="01" title="About" />
      <Reveal>
        <div className="space-y-4 text-sm leading-relaxed text-ink-muted sm:text-base">
          <p>
            I&apos;m studying Computer Science and Mathematics at the{" "}
            <a href="https://www.washington.edu" target="_blank" rel="noopener noreferrer" className="prose-link">
              University of Washington
            </a>
            . I build things with AI —{" "}
            <a href="#projects" className="prose-link">
              agentic RAG systems, AI code review tools, and MCP-powered dashboards
            </a>{" "}
            — and everything I ship lands on{" "}
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="prose-link">
              my GitHub
            </a>
            . Right now I&apos;m a{" "}
            <a href="#experience" className="prose-link">
              backend engineering intern at KleoKlaw
            </a>
            , where I engineer the SMS pipeline that lets people apply to jobs entirely over text.
          </p>
          <p>
            The other half of my week belongs to people: as a{" "}
            <a href="#experience" className="prose-link">
              Changemakers in Computing mentor
            </a>{" "}
            I taught 41 high-school students from underrepresented backgrounds to build and deploy
            their first websites. Off the clock you&apos;ll find me on a pickleball court, behind a
            stove, or solving a Rubik&apos;s cube faster than you&apos;d expect —{" "}
            <a href="#interests" className="prose-link">
              the full list is below
            </a>
            .
          </p>
        </div>
      </Reveal>
    </section>
  );
}
