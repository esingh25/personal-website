import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { ExperienceItem } from "./ExperienceItem";
import { Nav } from "./Nav";
import { ProjectCard } from "./ProjectCard";
import { SkillGroupCard } from "./SkillGroupCard";

describe("ProjectCard", () => {
  it("renders name, description, stack, and GitHub link", () => {
    const project = projects[0];
    render(<ProjectCard project={project} />);

    expect(screen.getByText(project.name)).toBeInTheDocument();
    expect(screen.getByText(project.description)).toBeInTheDocument();
    for (const tech of project.stack) {
      expect(screen.getByText(tech)).toBeInTheDocument();
    }
    const githubLink = screen.getByLabelText(`${project.name} on GitHub`);
    expect(githubLink).toHaveAttribute("href", project.githubUrl);
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders without a GitHub icon when there is no repo link", () => {
    const unlinked = projects.find((p) => !p.githubUrl);
    expect(unlinked).toBeDefined();
    render(<ProjectCard project={unlinked!} />);
    expect(
      screen.queryByLabelText(`${unlinked!.name} on GitHub`),
    ).not.toBeInTheDocument();
  });
});

describe("ExperienceItem", () => {
  it("renders company, role, period, and every bullet", () => {
    const item = experience[0];
    render(<ExperienceItem item={item} />);

    expect(screen.getByText(item.company)).toBeInTheDocument();
    expect(screen.getByText(`${item.role} · ${item.location}`)).toBeInTheDocument();
    expect(screen.getByText(item.period)).toBeInTheDocument();
    for (const bullet of item.bullets) {
      expect(screen.getByText(bullet)).toBeInTheDocument();
    }
  });
});

describe("SkillGroupCard", () => {
  it("renders the group label and all skills", () => {
    const group = { label: "Languages", skills: ["Python", "TypeScript"] };
    render(<SkillGroupCard group={group} />);

    expect(screen.getByText("Languages")).toBeInTheDocument();
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });
});

describe("Nav", () => {
  it("renders anchor links to every section and a resume download", () => {
    render(<Nav />);

    for (const section of ["Projects", "Experience", "Education", "Skills", "Contact"]) {
      expect(screen.getByRole("link", { name: section })).toBeInTheDocument();
    }
    expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute(
      "href",
      "/resume.pdf",
    );
  });
});
