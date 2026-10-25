# Ansh Gupta — Portfolio

Personal portfolio for Ansh Gupta, Frontend Software Engineer.

**Live:** https://ansh2002gupta.github.io/My-Portfolio/

Built with React 19, Vite 8 and Tailwind CSS 4. Deployed as a static site to
GitHub Pages from the `gh-pages` branch.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173/My-Portfolio/
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server with HMR |
| `npm run lint` | ESLint (flat config), zero warnings allowed |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run deploy` | Build, then publish `dist/` to the `gh-pages` branch |

---

## Editing the content

All copy, links and figures live in `src/data/`. You should not have to touch a
component to update the site.

| File | Contains |
| --- | --- |
| `src/data/site.js` | Name, title, email, phone, résumé URL, social links, navigation order, SEO metadata, EmailJS identifiers |
| `src/data/content.js` | Hero copy, About copy and principles, experience timeline, education, contact copy |
| `src/data/work.js` | Professional case studies (Foodstories, Shopper's Stop, Opiwiz, Aakash Life, Gulf HR) |
| `src/data/projects.js` | Personal projects and earlier university projects |
| `src/data/skills.js` | Skill groups |
| `src/data/achievements.js` | Awards and competitive-programming record |

Optional fields degrade gracefully: if `links` is empty, no link row renders; if
`metrics` is `null`, no table renders; if `site.resumeUrl` is `null`, the résumé
button becomes an email request instead of a dead download. Nothing renders an
empty button.

### Adding the résumé

1. Put the current PDF at `public/resume/Ansh-Gupta-Resume.pdf`.
2. In `src/data/site.js`, change:

   ```js
   resumeUrl: null,
   // to
   resumeUrl: `${BASE}resume/Ansh-Gupta-Resume.pdf`,
   ```

The hero and contact sections switch to a real download automatically. The 2023
PDF that previously shipped with the site is parked in `archive/` and is **not**
published — it predates all current experience.

---

## Architecture

```
src/
  data/          content only — no JSX
  lib/           hooks (reveal, theme, focus trap, scroll lock, active section)
  components/
    layout/      SiteHeader, SiteFooter
    sections/    Hero, About, Experience, Work, Projects, Skills, Recognition, Contact
    ui/          primitives shared across sections
  styles/
    tokens.css   design tokens (colour, layout, motion) for both themes
    fonts.css    self-hosted @font-face declarations
  index.css      Tailwind @theme mapping + base and component layers
public/
  fonts/         self-hosted woff2 (Inter, Instrument Serif — SIL OFL)
  resume/        drop the current résumé PDF here
```

**Design tokens.** Every colour is a CSS custom property defined once per theme
in `tokens.css` and mapped into Tailwind's namespace in `index.css`. Utilities
such as `bg-surface` or `text-muted/70` therefore follow the theme switch with
no duplicated class lists. Light/dark contrast pairs were checked against WCAG
2.1 — body text clears 4.5:1 and control borders clear 3:1.

**No animation library.** Entrance reveals use a ~40-line IntersectionObserver
hook plus CSS transitions. The CSS that hides un-revealed content is scoped
behind `[data-reveal-armed="true"]`, which the hook only sets once it is
running — so if JavaScript fails, nothing is ever hidden. Above-the-fold hero
content carries no reveal at all and paints on the first frame.
`prefers-reduced-motion: reduce` disables the whole system.

**Fonts are self-hosted**, so the critical path has no third-party connection. A
metric-matched local fallback (`Inter Fallback`) prevents layout shift during
the swap.

---

## Contact form

The form posts through [EmailJS](https://www.emailjs.com/) using the same
service, template and public key as the previous version of the site. EmailJS
public keys are designed for client-side use and are scoped by the allowed-origin
list in the EmailJS dashboard — **no private secret belongs in this repository.**

Identifiers live in `src/data/site.js` and can be overridden without a code
change via a `.env` file:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

The EmailJS SDK is loaded on demand at submit time, so it is not part of the
initial bundle. If a send fails for any reason, the error message points the
visitor at the direct email address, which always works.

---

## Deploying to GitHub Pages

The site is served from the `gh-pages` branch at the `/My-Portfolio/` sub-path.
That sub-path is set by `base` in `vite.config.js` — **if the repository is ever
renamed, that value must change too.** Anything needing the prefix at runtime
reads `import.meta.env.BASE_URL` rather than hard-coding it.

```bash
npm ci
npm run lint
npm run build
npm run preview      # check http://localhost:4173/My-Portfolio/
npm run deploy       # publishes dist/ to the gh-pages branch
```

`npm run deploy` runs the build first (via `predeploy`) and pushes with
`gh-pages`. Confirm that **Settings → Pages → Source** is set to the `gh-pages`
branch, root folder.

### Deployment checklist

- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] `npm run preview` renders correctly at `/My-Portfolio/`
- [ ] Résumé PDF added and `site.resumeUrl` set (see above)
- [ ] `og-image.png` still matches the current headline
- [ ] `public/sitemap.xml` `lastmod` updated
