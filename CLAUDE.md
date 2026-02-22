# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Build for production
npm run preview   # Preview production build
```

## Architecture

This is an **Astro 5** static site for a hair salon, using **Tailwind CSS v4** (via `@tailwindcss/vite`) and **GSAP** for animations.

**Key conventions:**
- Pages live in `src/pages/` — Astro's file-based routing
- `src/layouts/Layout.astro` is the base HTML shell; it wraps all pages via `<slot />`
- Components in `src/components/` are Astro components; `src/components/ui/` holds reusable primitives (e.g. `Button.astro`)
- Assets (images, logo) go in `src/assets/` and are imported directly into `.astro` files using Astro's `<Image>` or `getImage()` for optimization
- Fonts (Baskerville variants) are self-hosted in `public/fonts/` and declared in `src/styles/global.css`
- `global.css` is imported at the page level (`index.astro`), not in the layout

**Styling:**
- Tailwind config is in `tailwind.config.ts`, referenced via `@config "../../tailwind.config.ts"` in `global.css`
- Custom color tokens: `beige-500` (#dcd9cc), `beige-700` (#686464), `accent-dark` (#0e3b31)
- Font families: `font-sans` → Lato, `font-serif` → Baskerville
- The `.noise` utility class (defined in `global.css`) adds an SVG fractal noise overlay via `::before`

**i18n:**
- Language definitions are in `src/i18n/ui.ts` (en/pt/sp)
- Helper functions (`getLangFromUrl`, `useTranslations`) are in `src/i18n/utils.ts`
- i18n is set up but not yet wired into components — URLs like `/pt/...` are the intended pattern

**Animations:**
- GSAP is used directly in `<script>` blocks within `.astro` files
- Animations trigger on `DOMContentLoaded` or run immediately (e.g. the background parallax in `HeroSection.astro`)
