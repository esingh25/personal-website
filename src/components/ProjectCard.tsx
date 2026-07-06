import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl text-ink">{project.name}</h3>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} on GitHub`}
            className="shrink-0 text-ink-muted transition-colors hover:text-accent"
          >
            <svg viewBox="0 0 16 16" width="22" height="22" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
          </a>
        )}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.description}</p>
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
            <li
              key={tech}
              className="rounded-full border border-line px-3 py-1 text-xs text-ink-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
        {project.secondaryLink && (
          <a
            href={project.secondaryLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-accent underline-offset-4 hover:underline"
          >
            {project.secondaryLink.label} →
          </a>
        )}
      </div>
    </article>
  );
}
