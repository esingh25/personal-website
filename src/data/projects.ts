export interface Project {
  name: string;
  description: string;
  highlights: string[];
  stack: string[];
  githubUrl?: string;
  secondaryLink?: { label: string; url: string };
}

export const projects: Project[] = [
  {
    name: "Claude PR Reviewer",
    description:
      "An AI-powered GitHub Action that reviews pull request diffs with cross-file context and posts inline comments via the GitHub REST API — across GitHub, GitLab, and Bitbucket.",
    highlights: [
      "99% statement coverage over 52 automated tests behind an 80%-gated CI pipeline",
      "Hardened against prompt-injection and denial-of-wallet attacks",
    ],
    stack: ["Python", "GitHub Actions", "Anthropic API", "REST APIs"],
    githubUrl: "https://github.com/esingh25/claude-pr-reviewer",
    secondaryLink: {
      label: "Live metrics dashboard",
      url: "https://github.com/esingh25/claude-pr-reviewer-dashboard",
    },
  },
  {
    name: "HailMaryRAG",
    description:
      "An agentic RAG assistant that decomposes natural-language NFL and college football questions, then runs hybrid retrieval across an Elasticsearch index, a vector database, and live feeds to synthesize grounded, cited research reports.",
    highlights: [
      "LangGraph pipeline (decompose → retrieve → rerank → synthesize) with a citation guard and per-query cost circuit breakers",
      "LLMs restricted to decomposition and synthesis — deterministic Python handles all ranking and edge math",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "Elasticsearch", "pgvector", "Claude"],
    githubUrl: "https://github.com/esingh25/HailMaryRAG",
  },
  {
    name: "Personal AI Dashboard",
    description:
      "A dashboard unifying seven services — Notion, Slack, Canvas LMS, Google Calendar, Gmail, GitHub, and Canva — in one console, with integrations wired over MCP using the Claude Agent SDK.",
    highlights: [
      "Sync decoupled from render, so widget refreshes cost zero model calls",
      "Work routed across three model tiers (Haiku for bulk sync, Sonnet for briefs, Opus for chat) to bound API cost",
    ],
    stack: ["React (Vite)", "FastAPI", "Claude Agent SDK", "MCP"],
  },
];
