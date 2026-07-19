import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="mx-auto w-full max-w-2xl px-6 pt-24">
      <SectionHeading id="about" index="01" title="About" />
      <Reveal>
        <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
          I&apos;m studying Computer Science and Mathematics at the{" "}
          <a href="https://www.washington.edu" target="_blank" rel="noopener noreferrer" className="prose-link">
            University of Washington
          </a>
          . I build things with AI —{" "}
          <a href="#projects" className="prose-link">
            agentic RAG systems, AI code review tools, and MCP-powered dashboards
          </a>
          . Right now I&apos;m a{" "}
          <a href="#experience" className="prose-link">
            backend engineering intern at KleoKlaw
          </a>{" "}
          and a mentor with Changemakers in Computing, teaching web development and applied AI to
          high-school students. Everything I ship lands on{" "}
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="prose-link">
            my GitHub
          </a>
          .
        </p>
      </Reveal>
    </section>
  );
}
