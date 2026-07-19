export const site = {
  name: "Ekam Singh",
  tagline: "I build AI agents and put everything I make on GitHub.",
  email: "ekams25@cs.washington.edu",
  github: "https://github.com/esingh25",
  linkedin: "https://www.linkedin.com/in/esingh25",
  resume: "/resume.pdf",
  /** Path under /public to the hero portrait; null renders the initials placeholder. */
  photo: "/profile.jpg" as string | null,
  title: "Ekam Singh — CS & Math @ UW",
  description:
    "Ekam Singh, Computer Science and Mathematics student at the University of Washington. I build AI agents: RAG systems, code review tools, and MCP dashboards.",
} as const;

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
