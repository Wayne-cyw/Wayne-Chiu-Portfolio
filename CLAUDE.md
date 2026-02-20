# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio website for Wayne Chiu. Hosted at https://github.com/Wayne-cyw/Wayne-Chiu-Portfolio.

## Stack

Next.js 14 (App Router, `output: 'export'`), Tailwind CSS, Framer Motion, shadcn/ui, TypeScript, next-themes

## Commands

- **Dev server:** `npm run dev`
- **Build (static export):** `npm run build` → outputs to `out/`
- **Lint:** `npm run lint`

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout: ThemeProvider, fonts, metadata
    page.tsx            # Assembles all sections in order
    globals.css         # Tailwind directives + CSS variables for theme
  components/
    layout/
      Navbar.tsx        # Fixed nav: logo, section links, dark/light toggle
      Footer.tsx        # Simple footer with copyright + links
    sections/
      Hero.tsx          # Full-viewport: name, title, animated entrance, CTAs
      About.tsx         # Bio + skills tags, two-column layout
      Projects.tsx      # Filterable card grid with hover animations
      Resume.tsx        # PDF viewer embed + download button
      Contact.tsx       # Contact form (Formspree) + social icons
    ui/                 # shadcn/ui auto-generated components live here
  lib/
    data.ts             # All content: bio, projects[], socials, skills[]
  hooks/
    useActiveSection.ts # IntersectionObserver → highlights active nav link
public/
  resume.pdf            # Replace this with your actual resume PDF
```

## Customizing Content

- **All text content, projects, skills, social links:** edit `src/lib/data.ts`
- **Resume:** replace `public/resume.pdf` with your actual PDF
- **Contact form:** set your Formspree ID in `src/components/sections/Contact.tsx`
  (sign up at formspree.io, create a form, copy the ID)

## Design System

**Typography:**
- Display/headings: `Syne` (Google Fonts)
- Body: `Geist` (Vercel)

**Color palette (CSS variables in globals.css):**
- Dark (default): background `#0C0C0C`, foreground `#EDEDED`, accent `#E8C547` (warm amber)
- Light: background `#F5F5F0`, foreground `#111111`, accent `#C9A227`

## Implementation Plan

### Phase 1 — Bootstrap
- Next.js 14 App Router + TypeScript + Tailwind + ESLint
- framer-motion, next-themes, shadcn/ui, lucide-react, @radix-ui/react-icons
- `next.config.ts`: `output: 'export'`, `images: { unoptimized: true }`

### Phase 2 — File Structure
See Project Structure above.

### Phase 3 — Design System
- Syne + Geist fonts
- CSS variables for dark/light themes
- Motion: staggered hero text reveal, `whileInView` section fade-up, `whileHover` card effects

### Phase 4 — Components
- **Navbar:** fixed top, glass effect (`bg-background/80 backdrop-blur-md`), active section tracking via IntersectionObserver, theme toggle
- **Hero:** full-viewport, staggered text animation, "View My Work" + "Download Resume" CTAs
- **About:** two-column layout (bio + animated skill tags)
- **Projects:** responsive card grid with filter tabs (All / Web / Other), hover lift animation
- **Resume:** PDF iframe embed + download button
- **Contact:** Formspree form + social icon row

### Phase 5 — Data File
All content in `src/lib/data.ts` — edit to personalize.

### Verification Checklist
1. `npm run dev` → site loads at localhost:3000
2. Dark mode is default; toggle switches to light cleanly
3. All nav links smooth-scroll to correct sections
4. Active nav link highlights as user scrolls
5. Project cards animate on hover
6. Sections animate on scroll into view
7. Resume download link works
8. Contact form submits (requires Formspree ID)
9. `npm run build` produces static `out/` directory with no errors
10. Mobile responsive at 375px, 768px, 1280px
