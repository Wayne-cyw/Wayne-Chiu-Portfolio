"use client";

import { motion, type Variants } from "framer-motion";
import { personal } from "@/lib/data";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Subtle radial gradient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in oklch, var(--amber) 8%, transparent) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl w-full text-center"
      >
        <motion.p
          variants={item}
          className="text-sm font-mono tracking-widest text-[var(--amber)] uppercase mb-6"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none mb-6"
        >
          {personal.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground mb-6"
        >
          {personal.title}
        </motion.p>

        <motion.p
          variants={item}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-12"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-3"
        >
          {/* Buttons row */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScrollTo("projects")}
              className="border-btn px-8 py-3 rounded-full bg-[var(--amber)] text-black font-semibold text-sm hover:opacity-90 transition-[transform,opacity] hover:scale-105 active:scale-100"
            >
              View My Work
            </button>
            <a
              href={personal.resumeUrl}
              download
              className="px-8 py-3 rounded-full border border-border font-semibold text-sm hover:border-[var(--amber)] hover:text-[var(--amber)] transition-[transform,opacity] hover:scale-105 active:scale-100"
            >
              Download Resume
            </a>
          </div>

          {/* Divider — desktop only */}
          <span className="w-px h-8 bg-border mx-1 hidden sm:block" />

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
              { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
              { icon: Github, href: personal.github, label: "GitHub" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="amber-btn w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-[var(--amber)] hover:text-[var(--amber)] transition-colors"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
