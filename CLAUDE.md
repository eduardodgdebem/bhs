# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Build for production
npm run preview   # Preview production build
```

## Architecture

This is an **Astro 5** static site for **Brazilian Hair Studio** (a hair salon), using **Tailwind CSS v4** (via `@tailwindcss/vite`) and **GSAP** for animations.

**Project structure:**
```
src/
  assets/          # Images and logo (bhs-logo.png, random-girl.jpg, sun-ray.png, background.svg)
  components/
    sections/      # Page sections (Hero, About, Numbers, Services, Team, Clients, Units)
    ui/            # Reusable primitives (Button.astro)
    Header.astro   # Sticky header with desktop nav, mobile hamburger menu, language switcher
    Footer.astro   # Footer with logo, nav links, contact info
  i18n/
    ui.ts          # Translation strings for en/pt/sp
    utils.ts       # getLangFromUrl, useTranslations helpers
  layouts/
    Layout.astro   # Base HTML shell — sets html[lang], renders Header + slot + Footer
  pages/
    index.astro    # English page (default)
    pt/index.astro # Portuguese page
    sp/index.astro # Spanish page
  styles/
    global.css     # Tailwind import, Baskerville @font-face declarations, .noise utility
public/
  fonts/           # Self-hosted Baskerville woff files
  favicon.ico / favicon.svg
astro.config.mjs   # Astro config with i18n routing and vite plugins
tailwind.config.ts # Tailwind theme (colors, fonts)
```

**Key conventions:**
- Pages live in `src/pages/` — Astro's file-based routing
- `src/layouts/Layout.astro` is the base HTML shell; it wraps all pages via `<slot />`
- Components in `src/components/` are Astro components; `src/components/ui/` holds reusable primitives
- Assets (images, logo) go in `src/assets/` and are imported directly using Astro's `<Image>` or `getImage()` for optimization
- Fonts (Baskerville variants) are self-hosted in `public/fonts/` and declared in `src/styles/global.css`; Lato is loaded from Google Fonts
- `global.css` is imported at the page level (each `index.astro`), not in the layout

**Page sections** (rendered in order in each `index.astro`):
1. `HeroSection` — full-viewport hero with parallax background, headline, CTA button
2. `AboutSection` — image + text block about the salon
3. `NumbersSection` — stats (years, brides, units, specialists)
4. `ServicesSection` — 2×2 grid of service cards (Bride, Godmother, Sweet Sixteen, Graduation)
5. `TeamSection` — team member profiles (Mirela, Gezi, Francieli)
6. `ClientsSection` — client testimonials
7. `UnitsSection` — salon locations (Naples FL + 4 in Criciúma, Brazil)

**Styling:**
- Tailwind config is in `tailwind.config.ts`, referenced via `@config "../../tailwind.config.ts"` in `global.css`
- Custom color tokens: `beige-500` (#edebdf), `beige-700` (#686464), `accent-dark` (#0e3b31)
- Font families: `font-sans` → Lato, `font-serif` → Baskerville
- The `.noise` utility class (defined in `global.css`) adds an SVG fractal noise overlay via `::before`; applied to the `<html>` element in `Layout.astro`

**Dependencies:**
- `astro-icon` — used in `Header.astro` for the hamburger/close icons (`material-symbols-light` icon set via `@iconify-json/material-symbols-light`)
- `gsap` — animations, including `ScrollTrigger` plugin (registered per-component)

**Button component** (`src/components/ui/Button.astro`):
- Props: `href?` (renders as `<a>` if set, otherwise `<button>`), `variant?: "dark" | "light"`, `size?: "sm" | "md" | "lg"`

**i18n:**
- Astro's built-in i18n routing is configured in `astro.config.mjs` with `defaultLocale: 'en'`, `locales: ['en', 'pt', 'sp']`, and `prefixDefaultLocale: false`
- Translation strings for all three languages are in `src/i18n/ui.ts`
- `getLangFromUrl(url)` and `useTranslations(lang)` in `src/i18n/utils.ts` are used in every layout and section component
- Translation keys follow a `section.key` naming pattern (e.g., `hero.title`, `services.01.desc`, `team.mb.bio`)
- All section components and `Header.astro`/`Footer.astro` are already wired to i18n

**Animations:**
- GSAP is used directly in `<script>` blocks within `.astro` files
- `ScrollTrigger` is imported and registered per component (`gsap.registerPlugin(ScrollTrigger)`)
- The hero background uses a looping `gsap.fromTo` on `backgroundSize` for a parallax zoom effect
- Other sections animate elements in on scroll using `ScrollTrigger` with `stagger` for grouped items
