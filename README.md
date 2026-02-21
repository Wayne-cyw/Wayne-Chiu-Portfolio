# Wayne Chiu — Portfolio

Personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```bash
npm run build   # static export → out/
npm run lint
```

---

## Customising Content

All content is edited in **`src/lib/data.ts`**. No other files need to be touched for content changes.

### Personal info, bio, links

Edit the `personal` object at the top of `data.ts`:

```ts
export const personal = {
  name: "Wayne Chiu",
  title: "Your Title",
  tagline: "Your tagline here.",
  bio: ["Paragraph one.", "Paragraph two."],
  email: "you@example.com",
  linkedin: "https://linkedin.com/in/...",
  github: "https://github.com/...",
  resumeUrl: "/resume.pdf",   // place your PDF in /public
};
```

### Skills

Edit the `skills` array in `data.ts`:

```ts
export const skills = ["TypeScript", "React", "Next.js", ...];
```

### Adding / editing experience

Add or edit objects in the `experiences` array in `data.ts`:

```ts
{
  role: "Software Engineer",
  company: "Company Name",
  period: "Jan 2024 – Present",
  location: "Remote",       // optional
  bullets: [
    "What you built or achieved.",
    "Another bullet point.",
  ],
},
```

### Adding / editing projects

Add or edit objects in the `projects` array in `data.ts`:

```ts
{
  title: "Your Project",
  description: "What it does.",
  tech: ["React", "Node.js"],
  github: "https://github.com/...",
  demo: "https://...",        // optional
  image: undefined,           // or "/projects/screenshot.png"
  category: "Web",            // "Web" or "Other"
},
```

### Project images

Place images in `public/projects/` and reference them in `data.ts`:

```ts
image: "/projects/your-image.png",
```

Recommended size: **800×400px**. The card image area is fixed at 176px tall, full card width. Use `undefined` to show a gradient placeholder instead.

### Adding a new project category

1. Add the new value to the `ProjectCategory` type in `data.ts`:
```ts
export type ProjectCategory = "All" | "Web" | "Mobile" | "Other";
```

2. Add it to the `CATEGORIES` array in `src/components/sections/Projects.tsx`:
```ts
const CATEGORIES: ProjectCategory[] = ["All", "Web", "Mobile", "Other"];
```

3. Tag projects with the new category:
```ts
category: "Mobile",
```

---

## Other customisation

| What | Where |
|---|---|
| Resume PDF | Replace `public/resume.pdf` |
| Favicon | Replace `public/favicon.ico` or add `public/icon.png` |
| Tab title | `src/app/layout.tsx` — `metadata` object |
| Colour scheme | `src/app/globals.css` — `--amber`, `:root`, `.dark` |
| Contact form | Set Formspree ID in `src/components/sections/Contact.tsx` |
