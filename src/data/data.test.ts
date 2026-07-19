import { describe, expect, it } from "vitest";
import { certifications, educationEntries } from "./education";
import { experience } from "./experience";
import { projects } from "./projects";
import { site } from "./site";
import { skillGroups } from "./skills";

describe("site data", () => {
  it("has the correct identity and contact details", () => {
    expect(site.name).toBe("Ekam Singh");
    expect(site.email).toBe("ekams25@cs.washington.edu");
    expect(site.github).toBe("https://github.com/esingh25");
    expect(site.linkedin).toContain("linkedin.com/in/esingh25");
    expect(site.resume).toBe("/resume.pdf");
  });
});

describe("projects data", () => {
  it("has complete content for every project", () => {
    expect(projects.length).toBeGreaterThanOrEqual(3);
    for (const project of projects) {
      expect(project.name).not.toBe("");
      expect(project.description.length).toBeGreaterThan(40);
      expect(project.highlights.length).toBeGreaterThan(0);
      expect(project.stack.length).toBeGreaterThan(0);
    }
  });

  it("only links GitHub repos under esingh25", () => {
    for (const project of projects) {
      if (project.githubUrl) {
        expect(project.githubUrl).toMatch(/^https:\/\/github\.com\/esingh25\//);
      }
      if (project.secondaryLink) {
        expect(project.secondaryLink.url).toMatch(/^https:\/\//);
      }
    }
  });

  it("excludes the certification and tutorial repos", () => {
    const urls = projects
      .flatMap((p) => [p.githubUrl, p.secondaryLink?.url])
      .filter(Boolean) as string[];
    expect(urls.some((url) => url.includes("skills-introduction-to-github"))).toBe(false);
    expect(urls.some((url) => url.includes("desktop-tutorial"))).toBe(false);
  });
});

describe("experience data", () => {
  it("lists all three positions with bullets", () => {
    const companies = experience.map((e) => e.company);
    expect(companies).toEqual([
      "KleoKlaw",
      "Changemakers in Computing (CiC)",
      "Capgemini",
    ]);
    for (const item of experience) {
      expect(item.role).not.toBe("");
      expect(item.period).not.toBe("");
      expect(item.bullets.length).toBeGreaterThan(0);
    }
  });
});

describe("education data", () => {
  it("lists UW and Issaquah High School", () => {
    const schools = educationEntries.map((e) => e.school);
    expect(schools).toEqual(["University of Washington", "Issaquah High School"]);
  });

  it("shows both UW degrees without a graduation date", () => {
    const uw = educationEntries[0];
    expect(uw.degree).toBe("B.S. Computer Science & B.A. Mathematics");
    expect(JSON.stringify(uw)).not.toMatch(/20\d\d/);
  });

  it("dates the high school entry", () => {
    expect(educationEntries[1].period).toMatch(/2021.*2025/);
  });

  it("includes the UCSD Coursera course", () => {
    expect(
      educationEntries[0].coursework?.some((c) => c.includes("UC San Diego")),
    ).toBe(true);
  });

  it("marks in-progress certifications", () => {
    expect(certifications.length).toBeGreaterThan(0);
    for (const cert of certifications) {
      expect(cert.name).not.toBe("");
      expect(typeof cert.inProgress).toBe("boolean");
    }
  });
});

describe("skills data", () => {
  it("has non-empty groups including resume and repo-derived skills", () => {
    const allSkills = skillGroups.flatMap((g) => g.skills);
    expect(skillGroups.every((g) => g.skills.length > 0)).toBe(true);
    for (const expected of ["Python", "TypeScript", "React", "FastAPI", "MCP"]) {
      expect(allSkills).toContain(expected);
    }
  });
});
