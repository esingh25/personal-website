import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Dock } from "./Dock";
import { ExperienceItem } from "./ExperienceItem";
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

  it("renders without a card link when there is no repo link", () => {
    const unlinked = {
      name: "Unlinked Project",
      description: "A project fixture without a repository link for coverage.",
      highlights: ["one highlight"],
      stack: ["TypeScript"],
    };
    render(<ProjectCard project={unlinked} />);
    expect(
      screen.queryByLabelText("Unlinked Project on GitHub"),
    ).not.toBeInTheDocument();
  });
});

describe("ExperienceItem", () => {
  it("renders company, role, period, and every bullet", () => {
    const item = experience[0];
    render(<ExperienceItem item={item} defaultOpen />);

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
    const group = { label: "Languages", token: "< >", skills: ["Python", "TypeScript"] };
    render(<SkillGroupCard group={group} />);

    expect(screen.getByText("Languages")).toBeInTheDocument();
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });
});

describe("Dock", () => {
  it("links home, socials, and resume, and offers a theme toggle", () => {
    render(<Dock />);

    // Desktop and mobile docks each render the item set once.
    expect(screen.getAllByLabelText("Home")[0]).toHaveAttribute("href", "#top");
    expect(screen.getAllByLabelText("GitHub")[0]).toHaveAttribute("href", site.github);
    expect(screen.getAllByLabelText("LinkedIn")[0]).toHaveAttribute("href", site.linkedin);
    expect(screen.getAllByLabelText("Email")[0]).toHaveAttribute(
      "href",
      `mailto:${site.email}`,
    );
    expect(screen.getAllByLabelText("Resume")[0]).toHaveAttribute("href", site.resume);
    expect(screen.getAllByLabelText(/Switch to (light|dark) theme/)[0]).toBeInTheDocument();

    for (const external of ["GitHub", "LinkedIn"]) {
      expect(screen.getAllByLabelText(external)[0]).toHaveAttribute(
        "rel",
        "noopener noreferrer",
      );
    }
  });
});

describe("link targets", () => {
  it("opens every non-anchor, non-mailto link in a new tab", () => {
    const { container } = render(<Home />);
    const links = [...container.querySelectorAll("a[href]")];
    expect(links.length).toBeGreaterThan(10);
    const offenders = links.filter((a) => {
      const href = a.getAttribute("href") ?? "";
      if (href.startsWith("#") || href.startsWith("mailto:")) return false;
      return a.getAttribute("target") !== "_blank";
    });
    expect(offenders.map((a) => a.getAttribute("href"))).toEqual([]);
  });
});
