export const personal = {
  name: "Wayne Chiu",
  title: "Computer Science Student \n@ University of Toronto",
  tagline: "I build optimized, reliable and user-focused products.",
  bio: [
    "I am a computer science student at the University of Toronto with a passion for building scalable systems and solving real-world problems through software.",
    "I enjoy working across the stack, with particular interest in backend development, APIs, and data-driven applications. My experience ranges from developing full-stack projects to designing machine learning pipelines, and I am always focused on writing clean, efficient code with thoughtful architecture.",
    "I am driven by curiosity, continuous learning, and the challenge of turning complex ideas into reliable, impactful technology.",
  ],
  email: "wayne.chiu0823@gmail.com",
  linkedin: "https://www.linkedin.com/in/wayne-chiu-ywc",
  github: "https://github.com/Wayne-cyw",
  resumeUrl: "/Wayne_Chiu_Resume__updated_February_20_2026.pdf",
};

export const skills = [
  "Python",
  "SQL",
  "JavaScript",
  "TypeScript",
  "HTML/CSS",
  "R",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "Framer Motion",
  "Flask",
  "FastAPI",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn"
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
    role: "Outreach & Logistics Associate",
    company: "UTM Robotics Club",
    period: "Oct 2025 – Present",
    location: "Mississauga, ON",
    bullets: [
      "Coordinated large-scale outreach events introducing 300+ students to robotics and programming concepts, improving engagement through structured workshop planning.",
      "Led sponsorship outreach for Wally Hacks, securing partnerships with 10+ corporate sponsors through strategic communication and stakeholder management.",
      "Managed logistics for recurring technical workshops, ensuring resource availability, scheduling efficiency, and smooth event execution.",
      "Collaborated with cross-functional student teams to streamline event operations and improve organizational efficiency."
    ]
  },
  {
    role: "Trade Fair Assistant",
    company: "Messe Frankfurt",
    period: "Jul 2023 – Aug 2023",
    location: "Hong Kong SAR",
    bullets: [
      "Supported operations for a 3-day international trade fair with 2,000+ attendees, optimizing check-in coordination to reduce wait times and improve visitor flow.",
      "Delivered product demonstrations and technical explanations to 100+ visitors daily, strengthening communication and user-focused problem-solving skills.",
      "Worked within a 15-member operations team in a fast-paced environment, contributing to reliable execution under tight timelines."
    ]
  }
];

export type ProjectCategory = "All" | "Web" | "ML" | "Full-Stack";

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
    title: "F1 Interactive Race Dashboard",
    description:
      "Developed a full-stack interactive F1 race analytics dashboard using React, Flask, and integrated FastF1 API to visualize real-time telemetry data including lap times, and driver positions",
    tech: ["Python", "Flask", "React", "JavaScript", "HTML/CSS"],
    github: "https://github.com/Wayne-cyw/F1-Interactive-Race-Dashboard",
    demo: undefined,
    image: "/Projects/F1dashboard.png",
    category: "Full-Stack",
  },
  {
    title: "Stock Price Prediction Model",
    description:
      "Built a stock price prediction model using Random Forest Regressor, achieving an R2 score of 0.9998 throughhyperparameter tuning and feature engineering",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github: "https://github.com/Wayne-cyw/Stock-Price-Prediction-Model",
    demo: undefined,
    image: "/Projects/StockPricePredictionModel.png",
    category: "ML",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js, Tailwind CSS, and Framer Motion. Featuring modern and responsive design to engage user experience across devices.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Wayne-cyw/Wayne-Chiu-Portfolio",
    demo: undefined,
    image: "/Projects/PersonalPortfolio.png",
    category: "Web",
  },
];
