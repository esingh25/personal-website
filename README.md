# Ekam Singh — Personal Website

My personal website: projects, experience, coursework, and contact info.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion (Framer Motion) · Deployed on Vercel

## Development

```bash
npm install
npm run dev        # local dev server at http://localhost:3000
```

## Quality checks

```bash
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run test       # vitest
npm run build      # production build
```

## Updating content

All site content lives in typed data files under `src/data/` — no component changes needed:

| File | Contents |
|------|----------|
| `site.ts` | Name, tagline, email, social links |
| `projects.ts` | Project cards (name, description, highlights, stack, GitHub link) |
| `experience.ts` | Work experience entries |
| `education.ts` | Degree, coursework, certifications |
| `skills.ts` | Skill groups |

The resume served at `/resume.pdf` is `public/resume.pdf` — replace the file to update it.
