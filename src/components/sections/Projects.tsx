"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects, type ProjectCategory } from "@/lib/data";

const CATEGORIES: ProjectCategory[] = ["All", "Web", "ML", "Full-Stack"];

const GRADIENT_PLACEHOLDERS = [
  "from-violet-900/40 to-blue-900/40",
  "from-emerald-900/40 to-cyan-900/40",
  "from-rose-900/40 to-orange-900/40",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-28 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-sm font-mono tracking-widest text-[var(--amber)] uppercase mb-4"
        >
          Work
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="font-display text-4xl sm:text-5xl font-bold mb-10"
        >
          Selected Projects
        </motion.h2>

        {/* Filter tabs */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex gap-2 mb-12 flex-wrap"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                activeFilter === cat
                  ? "bg-[var(--amber)] text-black border-[var(--amber)]"
                  : "border-border text-muted-foreground hover:border-[var(--amber)] hover:text-[var(--amber)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeFilter}
            initial="hidden"
            animate="show"
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, idx) => (
              <motion.article
                key={project.title}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 40px color-mix(in oklch, var(--amber) 10%, transparent)",
                }}
                transition={{ duration: 0.25 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden flex flex-col hover:border-[var(--amber)]/40 transition-colors"
              >
                {/* Project image / gradient */}
                <div
                  className={`h-44 bg-gradient-to-br ${
                    GRADIENT_PLACEHOLDERS[idx % GRADIENT_PLACEHOLDERS.length]
                  } flex items-center justify-center`}
                >
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-display text-3xl font-bold text-white/20 select-none">
                      {project.title.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <h3 className="font-display font-bold text-lg">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-[var(--amber)] transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-[var(--amber)] transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
