import type { SkillGroup } from "@/data/skills";

export function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <div>
      <h3 className="text-sm uppercase tracking-[0.2em] text-accent">{group.label}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li key={skill} className="chip bg-surface">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
