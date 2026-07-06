export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    company: "KleoKlaw",
    role: "Backend Engineering Intern",
    location: "Seattle, WA",
    period: "June 2026 — Present",
    bullets: [
      "Engineered the inbound SMS pipeline for an AI job-search agent — a Twilio webhook handler and an 8-tool agent loop with a Claude Haiku intent classifier that lets users apply to jobs end-to-end over text.",
      "Built a job-ingestion layer that normalizes postings from Greenhouse, Lever, and Workday into one unified schema feeding the agent's match search.",
      "Integrated the Ashby ATS to automate application submission and added a TOCTOU-safe confirmation store for pending actions.",
    ],
  },
  {
    company: "Changemakers in Computing (CiC)",
    role: "Mentor",
    location: "Seattle, WA",
    period: "March 2026 — Present",
    bullets: [
      "Taught 41 high-school students from underrepresented and first-generation backgrounds HTML, CSS, JavaScript, applied AI, and tech ethics — guiding each to build and deploy a personal website.",
      "Built a CiC operations app — a single-file React tool with run-of-show, task-tracker, and mentor-roster tabs backed by persistent storage — to coordinate grading of 19 applications, EdStem lessons, and alumni outreach.",
    ],
  },
  {
    company: "Capgemini",
    role: "Software Engineering Intern",
    location: "Bellevue, WA",
    period: "June 2024 — August 2024",
    bullets: [
      "Developed an internal Azure AI chatbot that parses and summarizes large legal contracts for enterprise clients, using LangChain and Azure Cognitive Services.",
      "Shipped production-ready features in 8 weeks, collaborating daily with senior engineers across code reviews, stand-ups, and design sessions.",
    ],
  },
];
