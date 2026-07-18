"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/data/site";
import { FloatingDock, type DockItem } from "./FloatingDock";
import { FileIcon, GitHubIcon, HomeIcon, LinkedInIcon, MailIcon, MoonIcon, SunIcon } from "./icons";

type Theme = "light" | "dark";

// Theme resolution mirrors globals.css: an explicit <html data-theme> wins;
// otherwise the OS preference applies. Subscribe to both sources.
function subscribeToTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);
  return () => {
    observer.disconnect();
    media.removeEventListener("change", callback);
  };
}

function readTheme(): Theme {
  const stamped = document.documentElement.dataset.theme;
  if (stamped === "dark" || stamped === "light") return stamped;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function Dock() {
  const theme = useSyncExternalStore<Theme>(subscribeToTheme, readTheme, () => "light");

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable (private browsing) — theme still applies for the session.
    }
  };

  const iconClass = "h-full w-full";
  const items: DockItem[] = [
    { id: "home", title: "Home", icon: <HomeIcon className={iconClass} />, href: "#top" },
    { id: "github", title: "GitHub", icon: <GitHubIcon className={iconClass} />, href: site.github, external: true },
    { id: "linkedin", title: "LinkedIn", icon: <LinkedInIcon className={iconClass} />, href: site.linkedin, external: true },
    { id: "email", title: "Email", icon: <MailIcon className={iconClass} />, href: `mailto:${site.email}` },
    { id: "resume", title: "Resume", icon: <FileIcon className={iconClass} />, href: site.resume },
    {
      id: "theme-toggle",
      title: theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
      icon: theme === "dark" ? <SunIcon className={iconClass} /> : <MoonIcon className={iconClass} />,
      onClick: toggleTheme,
    },
  ];

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 sm:bottom-6">
      <div className="pointer-events-auto">
        <FloatingDock items={items} />
      </div>
    </div>
  );
}
