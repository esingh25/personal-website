import { ExperienceItem } from "@/components/ExperienceItem";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillGroupCard } from "@/components/SkillGroupCard";
import { certifications, education } from "@/data/education";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { skillGroups } from "@/data/skills";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />

        <section className="mx-auto max-w-4xl px-6 py-24">
          <SectionHeading
            id="projects"
            title="Projects"
            subtitle="Built with AI, shipped to GitHub."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal
                key={project.name}
                delay={i * 0.1}
                className={i === projects.length - 1 ? "md:col-span-2" : undefined}
              >
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-24">
          <SectionHeading id="experience" title="Experience" />
          <div>
            {experience.map((item, i) => (
              <Reveal key={item.company} delay={i * 0.08}>
                <ExperienceItem item={item} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-24">
          <SectionHeading id="education" title="Education" />
          <Reveal>
            <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-2xl text-ink">{education.school}</h3>
                <p className="text-sm text-ink-muted">{education.location}</p>
              </div>
              <p className="mt-1 text-accent">{education.degree}</p>
              <p className="mt-1 text-sm text-ink-muted">GPA: {education.gpa}</p>
              <h4 className="mt-6 text-sm uppercase tracking-[0.2em] text-accent">
                Relevant Coursework
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <li
                    key={course}
                    className="rounded-full border border-line px-3 py-1 text-sm text-ink-muted"
                  >
                    {course}
                  </li>
                ))}
              </ul>
              <h4 className="mt-6 text-sm uppercase tracking-[0.2em] text-accent">
                Certifications
              </h4>
              <ul className="mt-3 space-y-1.5 text-sm text-ink-muted">
                {certifications.map((cert) => (
                  <li key={cert.name}>
                    {cert.name} · {cert.issuer}
                    {cert.inProgress && <span className="text-ink-muted/70"> (in progress)</span>}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-24">
          <SectionHeading id="skills" title="Skills" />
          <div className="grid gap-10 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.label} delay={i * 0.08}>
                <SkillGroupCard group={group} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-24 pb-32">
          <SectionHeading
            id="contact"
            title="Contact"
            subtitle="The inbox is open."
          />
          <Reveal>
            <a
              href={`mailto:${site.email}`}
              className="font-display text-2xl text-ink underline decoration-accent/60 underline-offset-8 transition-colors hover:text-accent sm:text-4xl"
            >
              {site.email}
            </a>
            <ul className="mt-10 flex flex-wrap gap-6 text-sm text-ink-muted">
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={site.resume} download className="hover:text-accent transition-colors">
                  Download Resume
                </a>
              </li>
            </ul>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
