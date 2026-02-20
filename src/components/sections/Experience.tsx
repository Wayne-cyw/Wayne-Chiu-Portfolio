"use client";

import { motion, type Variants } from "framer-motion";
import { experiences } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-sm font-mono tracking-widest text-[var(--amber)] uppercase mb-4"
        >
          Experience
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="font-display text-4xl sm:text-5xl font-bold mb-16"
        >
          Where I&apos;ve Worked
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="space-y-0"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-10 border-t border-border last:border-b"
            >
              {/* Left — meta */}
              <div className="space-y-1">
                <p className="text-sm font-mono text-muted-foreground">{exp.period}</p>
                {exp.location && (
                  <p className="text-xs font-mono text-muted-foreground/60">{exp.location}</p>
                )}
              </div>

              {/* Right — content */}
              <div>
                <h3 className="font-display font-bold text-xl mb-0.5">{exp.role}</h3>
                <p className="text-[var(--amber)] font-medium text-sm mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--amber)] shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
