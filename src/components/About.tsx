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
            My Nani taught me to make dahi when I was seven. Every morning at 4:30 we cut open
            pouches of milk, and most mornings I poured half of mine onto the floor. She never
            scolded me. She handed me the next bag and said, try again. By the end of that summer
            I could cut and pour without spilling a drop.
          </p>
          <p>
            I chase that feeling in everything I learn. Sunday pancakes with my mom went from
            scrambled to golden after enough failed flips. My Rubik&apos;s cube times fell the same
            way, and so did my lap times once I started studying racing mechanics in Forza.
            Repetition and small corrections get me there every time.
          </p>
          <p>
            Software gives me the fastest version of that loop I have found. I build{" "}
            <a href="#projects" className="prose-link">
              AI agents
            </a>
            , watch them break, fix them, and ship the result to{" "}
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="prose-link">
              GitHub
            </a>
            . That cycle is why I chose Computer Science and Mathematics at the{" "}
            <a href="https://www.washington.edu" target="_blank" rel="noopener noreferrer" className="prose-link">
              University of Washington
            </a>
            , and it is where the{" "}
            <a href="#experience" className="prose-link">
              work below
            </a>{" "}
            comes from. The{" "}
            <a href="#interests" className="prose-link">
              interests
            </a>{" "}
            cover the rest of my day.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
