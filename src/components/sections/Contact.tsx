"use client";

import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/lib/data";


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const SOCIALS = [
  {
    icon: Mail,
    label: "Email",
    sub: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Github,
    label: "GitHub",
    sub: personal.github.replace("https://", ""),
    href: personal.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    sub: personal.linkedin.replace("https://", ""),
    href: personal.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-sm font-mono tracking-widest text-[var(--amber)] uppercase mb-4"
        >
          Contact
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="font-display text-4xl sm:text-5xl font-bold mb-16"
        >
          Get in Touch
        </motion.h2>

        {/* Social buttons */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {SOCIALS.map(({ icon: Icon, label, sub, href }) => (
            <motion.a
              key={label}
              variants={fadeUp}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ y: -4, boxShadow: "0 12px 32px color-mix(in oklch, var(--amber) 10%, transparent)" }}
              className="group flex flex-col gap-4 p-6 rounded-2xl border border-border bg-card hover:border-[var(--amber)]/50 transition-colors"
            >
              <span className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-[var(--amber)] group-hover:text-[var(--amber)] transition-colors">
                <Icon size={22} />
              </span>
              <div>
                <p className="font-display font-bold text-lg">{label}</p>
                <p className="text-sm text-muted-foreground truncate mt-0.5">{sub}</p>
              </div>
              <span className="text-xs font-mono text-[var(--amber)] opacity-0 group-hover:opacity-100 transition-opacity">
                {href.startsWith("mailto") ? "Send email →" : "Open →"}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
