export interface SkillGroup {
  label: string;
  /** Small mono glyph shown beside the label (e.g. "< >" for Languages). */
  token: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    token: "< >",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C#", "C", "SQL", "R", "HTML/CSS"],
  },
  {
    label: "Frameworks & Libraries",
    token: "{ }",
    skills: ["React", "Next.js", "FastAPI", "LangGraph", "LangChain", "Node.js", "Tailwind CSS", "Jest"],
  },
  {
    label: "Developer Tools",
    token: ">_",
    skills: [
      "Git",
      "GitHub Actions",
      "Docker",
      "AWS",
      "Microsoft Azure",
      "Twilio",
      "Redis",
      "Elasticsearch",
      "pgvector",
      "Linux",
      "Vite",
    ],
  },
  {
    label: "Concepts & APIs",
    token: "( )",
    skills: [
      "REST APIs",
      "RAG",
      "Vector Databases",
      "MCP",
      "Claude Agent SDK",
      "Agentic AI",
      "Prompt Engineering",
      "CI/CD",
      "NLP",
    ],
  },
];
