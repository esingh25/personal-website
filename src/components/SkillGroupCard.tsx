import type { SkillGroup } from "@/data/skills";
import { TiltCard } from "./TiltCard";

export function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <TiltCard className="h-full">
      <div className="h-full p-6">
        <h3 className="flex items-center gap-2.5 text-sm font-semibold text-ink-muted">
          <span aria-hidden="true" className="font-mono text-accent">
            {group.token}
          </span>
          {group.label}
        </h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <li key={skill} className="chip">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </TiltCard>
  );
}
