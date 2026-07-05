# Portfolio — Nuxt 3

A cinematic, recruiter-friendly personal portfolio. Dark navy and charcoal
surfaces, royal-gold and electric-blue accents, glassmorphism cards, and a
heraldic sigil motif that runs through the favicon, navbar, and section
dividers.

Built with **Nuxt 3, TypeScript, Composition API, Pug, SCSS, Vuetify 3,
Pinia, VueUse, and GSAP**.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # SSR production build (Vercel / Netlify / Node)
npm run generate   # Fully static site in .output/public (GitHub Pages, any static host)
npm run preview    # Preview the production build locally
```

## Personalize it

**Edit one file: `utils/content.ts`.** Your name, roles, bio, stats,
timeline, skills, projects, certifications, badges, social links, and
GitHub username all live there. Every component just renders that data.

Other touch points:

| What | Where |
| --- | --- |
| Resume PDF | Replace `public/resume-placeholder.pdf` (or change `profile.resumeFile`) |
| Photos | Hero + About use initials placeholders — swap the `<span>` for an `<img>` in `HeroSection.vue` / `AboutSection.vue` (styles already frame it) |
| Favicon / crest | `public/favicon.svg` and the inline crest SVG in `AppNavbar.vue` / `SigilDivider.vue` |
| Colors, fonts, spacing | `styles/_tokens.scss` — one source of truth |
| SEO tags | `nuxt.config.ts` (site-wide) and `pages/index.vue` (`useSeoMeta`) |

The GitHub section pulls live data from the public GitHub API using
`profile.githubUsername` — no token needed. If the API is unreachable it
degrades to a profile link.

The contact form opens the visitor's mail client pre-filled (no backend
required). To collect submissions server-side, point the submit handler in
`ContactSection.vue` at a service like Formspree.

## Project structure

```
components/
  layout/      AppNavbar, AppFooter, ScrollProgress
  sections/    Hero, About, Skills, Experience, Projects,
               Certifications, Resume, Badges, Github, Contact
  ui/          AppIcon, BaseButton, GlassCard, IconLink,
               SectionHeading, SigilDivider, SkillMeter, StatCounter
composables/   useActiveSection, useCountUp, useMouseSpotlight
layouts/       default.vue (v-app shell, skip link)
pages/         index.vue
plugins/       vuetify.ts, directives.ts (v-reveal, v-magnetic)
stores/        ui.ts (Pinia: drawer + active section)
styles/        _tokens.scss, _mixins.scss, _base.scss, main.scss
types/         index.ts (all content interfaces)
utils/         content.ts  ← edit this to make the site yours
public/        favicon.svg, resume-placeholder.pdf
```

Design tokens and mixins are injected into every component style block by
`nuxt.config.ts` (`additionalData`), so components use `t.$color-gold` and
`@include m.respond(md)` without any `@use` boilerplate.

## Deployment

**Vercel / Netlify** — import the repo; both detect Nuxt automatically.
Zero configuration needed.

**GitHub Pages / any static host** — the site is fully prerendered:

```bash
# user/organization page (username.github.io) or custom domain:
npm run generate

# project page (username.github.io/repo-name):
NUXT_APP_BASE_URL=/repo-name/ npm run generate
```

Publish the contents of `.output/public`. A minimal GitHub Actions
workflow:

```yaml
name: Deploy
on: { push: { branches: [main] } }
permissions: { contents: read, pages: write, id-token: write }
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: { name: github-pages }
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: NUXT_APP_BASE_URL=/${{ github.event.repository.name }}/ npm run generate
      - uses: actions/upload-pages-artifact@v3
        with: { path: .output/public }
      - uses: actions/deploy-pages@v4
```

**Custom domain** — deploy the static output (or the SSR build) as above;
no code changes required.

## Design notes

- **Motion is intentional and cheap**: GSAP handles the hero entrance and
  scroll reveals; everything else (embers, spotlight, meters, count-ups) is
  CSS or a few lines of rAF. `prefers-reduced-motion` disables all of it.
- **No Three.js** — a WebGL scene would cost more Lighthouse points than
  the atmosphere it adds; CSS particles + the mouse spotlight carry the
  cinematic feel.
- **Vuetify is used surgically** (drawer, form fields) with a custom theme
  so the site doesn't read as default Material.
- **Accessibility floor**: skip link, visible focus rings, aria labels on
  icon-only controls, `aria-live` on the rotating role, semantic landmarks.
