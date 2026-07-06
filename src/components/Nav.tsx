import { navLinks, site } from "@/data/site";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line/60 bg-charcoal/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
        <a href="#top" className="font-display text-lg text-ink hover:text-accent transition-colors">
          {site.name}
        </a>
        <ul className="order-last flex w-full flex-wrap items-center gap-x-5 gap-y-1 text-sm text-ink-muted sm:order-none sm:w-auto sm:gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={site.resume}
          download
          className="rounded-full border border-accent/50 px-4 py-1.5 text-sm text-accent hover:bg-accent hover:text-charcoal transition-colors"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
