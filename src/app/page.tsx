import { About } from "@/components/About";
import { Dock } from "@/components/Dock";
import { ExperienceItem } from "@/components/ExperienceItem";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, ShowcaseHeading } from "@/components/SectionHeading";
import { SkillGroupCard } from "@/components/SkillGroupCard";
import { certifications, education } from "@/data/education";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { skillGroups } from "@/data/skills";

export default function Home() {
  return (
    <>
      <main className="flex-1 pb-32">
        <Hero />
        <About />

        <section className="mx-auto w-full max-w-2xl px-6 pt-24">
          <SectionHeading id="experience" index="02" title="Work Experience" />
          <div className="glass divide-y divide-line rounded-2xl px-6 py-2 sm:px-8">
            {experience.map((item, i) => (
              <Reveal key={item.company} delay={i * 0.08}>
                <ExperienceItem item={item} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-2xl px-6 pt-24">
          <SectionHeading id="education" index="03" title="Education" />
          <Reveal>
            <div className="glass rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="icon-circle">
                UW
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold text-ink">{education.school}</h3>
                <p className="text-sm text-ink-muted">{education.degree}</p>
              </div>
              <p className="ml-auto shrink-0 text-sm text-ink-muted">GPA {education.gpa}</p>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2 sm:pl-[3.75rem]">
              {education.coursework.map((course) => (
                <li key={course} className="chip text-xs">
                  {course}
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-1.5 text-sm text-ink-muted sm:pl-[3.75rem]">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  {cert.name} · {cert.issuer}
                  {cert.inProgress && <span> (in progress)</span>}
                </li>
              ))}
            </ul>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto w-full max-w-2xl px-6 pt-24">
          <SectionHeading id="skills" index="04" title="Skills" />
          <div className="grid gap-8 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.label} delay={i * 0.08}>
                <SkillGroupCard group={group} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-3xl px-6 pt-32">
          <ShowcaseHeading
            id="projects"
            index="05"
            badge="My Projects"
            title="What I've been building"
            subtitle="Built with AI, shipped to GitHub. Here are a few of my favorites."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal
                key={project.name}
                delay={i * 0.1}
                className={i === projects.length - 1 ? "sm:col-span-2" : undefined}
              >
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-2xl px-6 pt-32">
          <ShowcaseHeading id="contact" index="06" badge="Contact" title="Get in Touch" />
          <Reveal>
            <p className="mx-auto -mt-6 max-w-md text-center text-ink-muted">
              Want to chat? Drop me an email at{" "}
              <a href={`mailto:${site.email}`} className="prose-link">
                {site.email}
              </a>{" "}
              or find me on{" "}
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="prose-link">
                LinkedIn
              </a>
              , and I&apos;ll reply as soon as I can.
            </p>
          </Reveal>
        </section>
      </main>
      <Footer />
      <Dock />
    </>
  );
}
