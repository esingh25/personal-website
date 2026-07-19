import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="mx-auto w-full max-w-2xl px-6 pt-16">
      <SectionHeading id="about" index="01" title="About" />
      <Reveal>
        <div className="space-y-4 text-sm leading-relaxed text-ink-muted sm:text-base">
          <p>
            I&apos;ve been building ever since I was a kid. Whether it was dahi with my Nani, the
            Legos my mom bought me, or modified cars in Forza, building has always been part of my
            life.
          </p>
          <p>
            I still build today, just with less of a mess, and for other people. I&apos;m working
            on{" "}
            <a href="#projects" className="prose-link">
              AI agents
            </a>{" "}
            that review code and research questions, an SMS pipeline at{" "}
            <a href="#experience" className="prose-link">
              KleoKlaw
            </a>{" "}
            that helps people apply to jobs over text, and I mentored 41 high school students
            through Changemakers in Computing as they built their first websites. I use what I know
            to help the people around me and have a positive impact on my community.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
