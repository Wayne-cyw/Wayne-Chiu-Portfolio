"use client";

import { motion, type Variants } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { personal } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Resume() {
  return (
    <section id="resume" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-sm font-mono tracking-widest text-[var(--amber)] uppercase mb-4"
        >
          Resume
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="font-display text-4xl sm:text-5xl font-bold mb-6"
        >
          View My Resume
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-muted-foreground text-base max-w-xl mb-10"
        >
          Download or preview my full resume below.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-wrap gap-4 mb-12"
        >
          <a
            href={personal.resumeUrl}
            download
            className="border-btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--amber)] text-black font-semibold text-sm hover:opacity-90 transition-[transform,opacity] hover:scale-105 active:scale-100"
          >
            <Download size={16} />
            Download PDF
          </a>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border font-semibold text-sm hover:border-[var(--amber)] hover:text-[var(--amber)] transition-[transform,opacity] hover:scale-105 active:scale-100"
          >
            <ExternalLink size={16} />
            Open in New Tab
          </a>
        </motion.div>

        {/* PDF preview — desktop only */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="rounded-2xl border border-border overflow-hidden bg-card aspect-[8.5/11] hidden md:block"
        >
          <iframe
            src={personal.resumeUrl}
            title="Resume Preview"
            className="w-full h-full"
          />
        </motion.div>

        <p className="md:hidden text-sm text-muted-foreground">
          PDF preview is available on desktop. Use the buttons above on mobile.
        </p>
      </div>
    </section>
  );
}
