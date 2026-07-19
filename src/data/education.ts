export interface EducationEntry {
  school: string;
  /** School-within-a-school credit line (e.g. the Allen School at UW). */
  subSchool?: string;
  degree: string;
  location: string;
  period?: string;
  gpa?: string;
  coursework?: string[];
  /** Path under /public to a small logo; entries without one render initials. */
  logo?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  inProgress: boolean;
  /** Link to the credential; cards render as plain divs until this is set. */
  url?: string;
}

export const educationEntries: EducationEntry[] = [
  {
    school: "University of Washington",
    subSchool: "Paul G. Allen School of Computer Science & Engineering",
    degree: "B.S. Computer Science & B.A. Mathematics",
    location: "Seattle, WA",
    gpa: "3.76 / 4.0",
    logo: "/logos/uw.png",
    coursework: [
      "Foundations of Computing I",
      "Hardware & Software Interface",
      "Intro to CS Programming II & III",
      "Advanced Multivariable Calculus",
      "Matrix Algebra",
      "Elements of Statistical Methods",
      "Data Structures & Algorithms (UC San Diego, Coursera)",
    ],
  },
  {
    school: "Issaquah High School",
    degree: "High School Diploma",
    location: "Issaquah, WA",
    period: "2021 — 2025",
    logo: "/logos/ihs.png",
  },
];

export const certifications: Certification[] = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", inProgress: true },
  { name: "Claude Certified Architect — Foundations (CCA-F)", issuer: "Anthropic", inProgress: true },
  { name: "GitHub Foundations", issuer: "GitHub", inProgress: true },
  { name: "Google AI Essentials", issuer: "Google", inProgress: false },
];
