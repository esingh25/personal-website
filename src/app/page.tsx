import { About } from "@/components/About";
import { Dock } from "@/components/Dock";
import { ExperienceItem } from "@/components/ExperienceItem";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, ShowcaseHeading } from "@/components/SectionHeading";
import { SkillGroupCard } from "@/components/SkillGroupCard";
import Image from "next/image";
import { certifications, educationEntries } from "@/data/education";
import { experience } from "@/data/experience";
import { interests } from "@/data/interests";
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
          <div className="glass divide-y divide-line rounded-2xl px-6 py-4 sm:px-8">
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
            <div className="glass divide-y divide-line rounded-2xl px-6 py-4 sm:px-8">
              {educationEntries.map((entry) => (
                <div key={entry.school} className="py-6 first:pt-2 last:pb-2">
                  <div className="flex items-center gap-4">
                    {entry.logo ? (
                      <span className="icon-circle overflow-hidden bg-white">
                        <Image src={entry.logo} alt={`${entry.school} logo`} width={44} height={44} className="h-7 w-7 object-contain" />
                      </span>
                    ) : (
                      <span aria-hidden="true" className="icon-circle">
                        {entry.school
                          .split(/\s+/)
                          .slice(0, 2)
                          .map((word) => word[0])
                          .join("")}
                      </span>
                    )}
                    <div className="min-w-0">
                      <h3 className="font-semibold text-ink">{entry.school}</h3>
                      <p className="text-sm text-ink-muted">{entry.degree}</p>
                    </div>
                    <p className="ml-auto shrink-0 text-sm text-ink-muted">
                      {entry.period ?? (entry.gpa ? `GPA ${entry.gpa}` : "")}
                    </p>
                  </div>
                  {entry.coursework && (
                    <ul className="mt-4 flex flex-wrap gap-2 sm:pl-[3.75rem]">
                      {entry.coursework.map((course) => (
                        <li key={course} className="chip text-xs">
                          {course}
                        </li>
                      ))}
                    </ul>
                  )}
                  {entry.school === "University of Washington" && (
                    <ul className="mt-4 space-y-1.5 text-sm text-ink-muted sm:pl-[3.75rem]">
                      {certifications.map((cert) => (
                        <li key={cert.name}>
                          {cert.name} · {cert.issuer}
                          {cert.inProgress && <span> (in progress)</span>}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
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

        <section className="mx-auto w-full max-w-2xl px-6 pt-24">
          <SectionHeading id="interests" index="05" title="Interests" />
          <Reveal>
            <ul className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <li key={interest} className="chip">
                  {interest}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section className="mx-auto w-full max-w-3xl px-6 pt-32">
          <ShowcaseHeading
            id="projects"
            index="06"
            badge="My Projects"
            title="What I've been building"
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
          <ShowcaseHeading id="contact" index="07" badge="Contact" title="Get in Touch" />
          <Reveal>
            <p className="mx-auto -mt-6 max-w-md text-center text-ink-muted">
              Email{" "}
              <a href={`mailto:${site.email}`} className="prose-link">
                {site.email}
              </a>{" "}
              or message me on{" "}
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="prose-link">
                LinkedIn
              </a>
              . I answer both.
            </p>
          </Reveal>
        </section>
      </main>
      <Footer />
      <Dock />
    </>
  );
}
