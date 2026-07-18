export const site = {
  name: "Ekam Singh",
  tagline: "I build things with AI — and let the projects speak for themselves.",
  email: "ekams25@cs.washington.edu",
  github: "https://github.com/esingh25",
  linkedin: "https://www.linkedin.com/in/esingh25",
  resume: "/resume.pdf",
  /** Path under /public to the hero portrait; null renders the initials placeholder. */
  photo: null as string | null,
  title: "Ekam Singh — CS & Math @ UW",
  description:
    "Ekam Singh — University of Washington student in Computer Science and Mathematics. I build things with AI: agentic RAG systems, AI code review tools, and MCP-powered dashboards.",
} as const;

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
