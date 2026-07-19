import type { Project } from "@/data/projects";
import { ExternalLinkIcon, GitHubIcon } from "./icons";
import { TiltCard } from "./TiltCard";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard className="h-full">
      <article className="relative flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl text-ink">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="after:absolute after:inset-0 after:content-['']"
              >
                {project.name}
              </a>
            ) : (
              project.name
            )}
          </h3>
          {project.githubUrl && (
            <GitHubIcon aria-hidden="true" className="h-5 w-5 shrink-0 text-ink-muted" />
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.description}</p>
        <ul className="mt-4 space-y-2 text-sm text-ink-muted">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span aria-hidden="true" className="mt-1 text-accent">
                —
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-5">
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="chip text-xs">
                {tech}
              </li>
            ))}
          </ul>
          {project.secondaryLink && (
            <div className="mt-4">
              <a
                href={project.secondaryLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-btn-outline relative z-10"
              >
                <ExternalLinkIcon className="h-3.5 w-3.5" />
                {project.secondaryLink.label}
              </a>
            </div>
          )}
        </div>
      </article>
    </TiltCard>
  );
}
