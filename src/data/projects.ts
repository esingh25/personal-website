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
    githubUrl: "https://github.com/esingh25/Project-HailMary",
  },
  {
    name: "CiC Operations App",
    description:
      "An operations console for the Changemakers in Computing mentorship program: rosters with role-based filtering, a lead-editable run of show, attendance with absence flags, and task tracking.",
    highlights: [
      "Consolidated scattered mentor workflows (run of show, rosters, attendance, tasks) into one console for the mentor team",
      "Supports coordination for a 41-student cohort: 19 mentee applications graded, weekly EdStem lessons, and alumni outreach",
    ],
    stack: ["FastAPI", "Python", "React", "SQLite"],
    githubUrl: "https://github.com/esingh25/cic-ops",
  },
  {
    name: "Personal AI Dashboard",
    githubUrl: "https://github.com/esingh25/claude-dashboard",
    description:
      "A personal command center for eight services: Claude Code usage metrics, Canvas, Google Calendar, Gmail, GitHub, Notion, Slack, and Spotify, plus an internship-posting watcher.",
    highlights: [
      "Hand-rolled OAuth 2.0 for Google and Spotify with automatic token refresh",
      "Job watcher polls posting sources, dedupes listings, and fires desktop notifications for new matches",
    ],
    stack: ["Node.js", "Express", "OAuth 2.0", "REST APIs"],
  },
];
