import type { SkillGroup } from "@/data/skills";

export function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <div>
      <h3 className="text-sm uppercase tracking-[0.2em] text-accent">{group.label}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink-muted"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
