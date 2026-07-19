"use client";

import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line/60 py-8 text-center text-xs text-ink-muted">
      © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {site.name} · Built
      with Next.js &amp; TypeScript
    </footer>
  );
}
