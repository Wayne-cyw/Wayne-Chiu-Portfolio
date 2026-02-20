export const personal = {
  name: "Wayne Chiu",
  title: "Computer Science Student \n@ University of Toronto",
  tagline: "I build fast, accessible, and thoughtfully designed products.",
  bio: [
    "I'm a software engineer with a passion for building clean, user-centred web experiences. I enjoy working across the full stack — from architecting APIs to crafting pixel-perfect UIs.",
    "When I'm not writing code, you'll find me exploring new technologies, contributing to open source, or thinking about how design and engineering intersect.",
  ],
  email: "wayne.chiu0823@gmail.com",
  linkedin: "https://www.linkedin.com/in/wayne-chiu-ywc",
  github: "https://github.com/Wayne-cyw",
  resumeUrl: "/Wayne_Chiu_Resume__updated_February_14_2026_ copy.pdf",
};

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Git",
  "Tailwind CSS",
  "Framer Motion",
  "REST APIs",
];

export interface Experience {
  role: string;
  company: string;
  period: string;        // e.g. "Jun 2023 – Present"
  location?: string;     // e.g. "San Francisco, CA" or "Remote"
  bullets: string[];     // responsibilities / achievements
}

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Company Name",
    period: "Jan 2024 – Present",
    location: "Remote",
    bullets: [
      "Describe a key responsibility or achievement here.",
      "Quantify impact where possible, e.g. reduced load time by 40%.",
      "Add or remove bullet points as needed.",
    ],
  },
  {
    role: "Junior Developer",
    company: "Previous Company",
    period: "Jun 2022 – Dec 2023",
    location: "New York, NY",
    bullets: [
      "Describe a key responsibility or achievement here.",
      "Another bullet point about what you built or improved.",
    ],
  },
  {
    role: "Intern",
    company: "Internship Company",
    period: "Jan 2022 – May 2022",
    location: "On-site",
    bullets: [
      "Describe your internship responsibilities here.",
    ],
  },
];

export type ProjectCategory = "All" | "Web" | "Other";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image?: string;          // path in /public, or null for gradient fallback
  category: Exclude<ProjectCategory, "All">;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js 14, Tailwind CSS, and Framer Motion. Fully static, dark-mode-first, and responsive.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Wayne-cyw/Wayne-Chiu-Portfolio",
    demo: "https://wayne-chiu.dev",
    image: undefined,
    category: "Web",
  },
  {
    title: "Project Two",
    description:
      "Brief description of what this project does and the problem it solves. Keep it to two or three sentences.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/Wayne-cyw",
    demo: undefined,
    image: undefined,
    category: "Web",
  },
  {
    title: "Project Three",
    description:
      "Brief description of what this project does and the problem it solves. Keep it to two or three sentences.",
    tech: ["Python", "Docker", "AWS"],
    github: "https://github.com/Wayne-cyw",
    demo: undefined,
    image: undefined,
    category: "Other",
  },
];
