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
            I study Computer Science and Mathematics at the{" "}
            <a href="https://www.washington.edu" target="_blank" rel="noopener noreferrer" className="prose-link">
              University of Washington
            </a>
            . Most of my time goes into{" "}
            <a href="#projects" className="prose-link">
              AI agents
            </a>
            : a RAG system that researches football questions, a code reviewer that comments on
            pull requests, and a dashboard that runs seven services over MCP. All of it is on{" "}
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="prose-link">
              my GitHub
            </a>
            . This summer I&apos;m interning at{" "}
            <a href="#experience" className="prose-link">
              KleoKlaw
            </a>
            , building the SMS pipeline that lets people apply to jobs over text.
          </p>
          <p>
            I also mentor with{" "}
            <a href="#experience" className="prose-link">
              Changemakers in Computing
            </a>
            , where I taught 41 high school students to build and deploy their first websites. When
            I&apos;m not writing code I&apos;m playing pickleball, cooking, or solving a
            Rubik&apos;s cube. The full list is in{" "}
            <a href="#interests" className="prose-link">
              interests
            </a>
            .
          </p>
        </div>
      </Reveal>
    </section>
  );
}
