"use client";

import { motion, type Variants } from "framer-motion";
import { personal, skills } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const tagItem: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-sm font-mono tracking-widest text-[var(--amber)] uppercase mb-4"
        >
          About me
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="font-display text-4xl sm:text-5xl font-bold mb-16"
        >
          Who I am
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="space-y-5"
          >
            {personal.bio.map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-base">
                {para}
              </p>
            ))}

            {/* Thin accent line decoration */}
            <div className="flex items-center gap-4 pt-4">
              <div className="h-px w-12 bg-[var(--amber)]" />
              <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                {personal.title}
              </span>
            </div>
          </motion.div>

          {/* Skills */}
          <div>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="text-sm font-medium text-muted-foreground mb-5"
            >
              Technologies I work with
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="flex flex-wrap gap-2"
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={tagItem}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-1.5 rounded-full border border-border text-sm font-mono text-muted-foreground cursor-default hover:border-[var(--amber)] hover:text-[var(--amber)] transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
