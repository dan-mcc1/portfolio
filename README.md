# Portfolio — Dan McCabe

Personal portfolio site. React 19 + TypeScript + Vite, styled with Tailwind v4.

## Development

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # type-check + production build
npm run lint     # oxlint
npm run preview  # serve the production build locally
```

## Content

All site content lives in two files — no content is hardcoded in components:

- `src/data/profile.ts` — name, contact links, about copy, education, experience, skills
- `src/data/projects.ts` — project entries

### Adding a project

Each project needs every field in the `Project` type. `proof` is the single strongest
technical result, shown on the collapsed card; `highlights` are the deeper details
revealed by the "Technical details" toggle.

### Adding screenshots

Keep full-resolution originals in `screenshots-source/` (gitignored, never deployed) and
ship optimized WebP from `public/shots/`. To convert a new batch:

```bash
magick input.png -resize 2200x -quality 82 -define webp:method=6 public/shots/name.webp
```

2200px is 2x the lightbox's display width, so it stays sharp on retina screens. Raw 4K
screenshots are ~3MB each; converted they land around 40-230KB.

Then reference them from a project's `images` array:

```ts
images: [
  { src: '/shots/release-radar-calendar.webp', alt: 'Release Radar calendar', caption: 'Personalized calendar' },
]
```

Thumbnails render in a responsive grid and open in a lightbox (arrow keys to navigate,
Escape to close). An empty array renders nothing.

## Deployment

Deploys to `https://danmccabe.dev` (apex). Canonical and Open Graph URLs in `index.html`
are already set to that domain.

`public/og-image.png` is the 1200x630 preview card used by `og:image` and `twitter:image`.
Regenerate it with:

```bash
magick -size 1200x630 xc:"#0a0e17"   -fill "#e2e8f0" -font Segoe-UI-Bold -pointsize 104 -annotate +90+300 "Dan McCabe"   -fill "#60a5fa" -draw "rectangle 92,338 212,344"   -fill "#8892a4" -font Segoe-UI -pointsize 40 -annotate +90+415 "CS & Cybersecurity · Virginia Tech"   -fill "#60a5fa" -font Consolas -pointsize 30 -annotate +90+548 "danmccabe.dev"   -depth 8 -strip public/og-image.png
```

It deliberately carries no tagline, so copy changes elsewhere don't invalidate it. After
deploying a change to it, force LinkedIn to re-scrape via their Post Inspector.
