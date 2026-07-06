export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C#", "C", "SQL", "R", "HTML/CSS"],
  },
  {
    label: "Frameworks & Libraries",
    skills: ["React", "Next.js", "FastAPI", "LangGraph", "LangChain", "Node.js", "Tailwind CSS", "Jest"],
  },
  {
    label: "Developer Tools",
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
