export interface Education {
  school: string;
  degree: string;
  location: string;
  gpa: string;
  coursework: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  inProgress: boolean;
}

export const education: Education = {
  school: "University of Washington",
  degree: "B.S. Computer Science & B.A. Mathematics",
  location: "Seattle, WA",
  gpa: "3.76 / 4.0",
  coursework: [
    "Foundations of Computing I",
    "Hardware & Software Interface",
    "Intro to CS Programming II & III",
    "Advanced Multivariable Calculus",
    "Matrix Algebra",
    "Elements of Statistical Methods",
    "Data Structures & Algorithms — UC San Diego (Coursera)",
  ],
};

export const certifications: Certification[] = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", inProgress: true },
  { name: "Claude Certified Architect — Foundations (CCA-F)", issuer: "Anthropic", inProgress: true },
  { name: "GitHub Foundations", issuer: "GitHub", inProgress: true },
  { name: "Google AI Essentials", issuer: "Google", inProgress: false },
];
