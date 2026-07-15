# Rashmi Liyanawadu — Portfolio

Personal portfolio site. React + Vite + TypeScript.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs static site to /dist
npm run preview  # preview the production build locally
```

## Structure

- `src/data.ts` — all content (experience, projects, skills, writing, research). **Edit here to update the site.**
- `src/App.tsx` — page layout and sections.
- `src/styles.css` — design system (colors, fonts, tags, cards).
- `src/components/` — `ImageSlot`, `SectionBand`.
- `src/hooks.ts` — scroll-reveal + parallax.

## Adding images

Image slots show placeholder text until you supply a real image. Put files in
`public/` and pass the URL to the relevant `<ImageSlot src="/portrait.jpg" />`
in `src/App.tsx` (e.g. the hero portrait, ExplainChess screenshot, research cards).

## Filling in links

In `src/data.ts`, the `contact` object has `#` placeholders for LinkedIn,
GitHub, resume, and the art portfolio — replace them with real URLs.

## Deploy

Static output in `/dist`. Any static host works:

- **Vercel / Netlify**: connect the repo; build command `npm run build`, output `dist`.
- **Cloudflare Pages**: same settings.
- **GitHub Pages**: publish the `dist` folder.
