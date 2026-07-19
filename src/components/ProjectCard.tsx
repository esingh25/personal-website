import type { Project } from "@/data/projects";
import { ExternalLinkIcon, GitHubIcon } from "./icons";
import { SpotlightCard } from "./SpotlightCard";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <SpotlightCard className="h-full">
      <article className="flex h-full flex-col p-6">
        <h3 className="font-display text-xl text-ink">{project.name}</h3>
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
        <div className="mt-4 flex flex-wrap gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="pill-btn"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              Source
            </a>
          )}
          {project.secondaryLink && (
            <a
              href={project.secondaryLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn pill-btn-outline"
            >
              <ExternalLinkIcon className="h-3.5 w-3.5" />
              {project.secondaryLink.label}
            </a>
          )}
        </div>
      </div>
      </article>
    </SpotlightCard>
  );
}
