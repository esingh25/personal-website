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
      "A GitHub Action that reviews pull request diffs with cross-file context and posts inline comments through the REST API. Works on GitHub, GitLab, and Bitbucket.",
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
      "A RAG assistant that answers NFL and college football questions. It breaks each question down, runs hybrid retrieval across Elasticsearch, a vector database, and live feeds, then writes a cited research report.",
    highlights: [
      "LangGraph pipeline (decompose → retrieve → rerank → synthesize) with a citation guard and per-query cost circuit breakers",
      "LLMs handle only decomposition and synthesis; deterministic Python does the ranking and edge math",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "Elasticsearch", "pgvector", "Claude"],
    githubUrl: "https://github.com/esingh25/HailMaryRAG",
  },
  {
    name: "CiC Operations App",
    description:
      "An internal operations console for the Changemakers in Computing mentorship program: run-of-show, task tracking, and the mentor roster in one single-file React tool backed by persistent storage.",
    highlights: [
      "Consolidated three scattered workflows (event run-of-show, task tracking, mentor roster) into one tool the whole mentor team runs from a single file",
      "Coordinated grading of 19 mentee applications, weekly EdStem lessons, and alumni outreach for a 41-student cohort",
    ],
    stack: ["React", "JavaScript", "localStorage"],
  },
  {
    name: "Personal AI Dashboard",
    description:
      "One console for seven services: Notion, Slack, Canvas LMS, Google Calendar, Gmail, GitHub, and Canva. The integrations run over MCP using the Claude Agent SDK.",
    highlights: [
      "Sync decoupled from render, so widget refreshes cost zero model calls",
      "Work routed across three model tiers (Haiku for bulk sync, Sonnet for briefs, Opus for chat) to bound API cost",
    ],
    stack: ["React (Vite)", "FastAPI", "Claude Agent SDK", "MCP"],
  },
];
