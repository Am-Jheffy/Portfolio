import { motion } from "framer-motion";
import { Download, FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { ABOUT, SITE, SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
} as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const line = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function About() {
  return (
    <section id="about" className="border-b border-hairline py-28 md:py-36">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-6xl px-6 md:px-10"
      >
        <motion.p
          variants={item}
          className="mb-4 font-mono text-xs tracking-widest text-accent"
        >
          {ABOUT.eyebrow}
        </motion.p>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.h2
              variants={item}
              className="max-w-lg text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl md:text-5xl"
            >
              {ABOUT.heading}
            </motion.h2>

            <motion.span
              variants={line}
              style={{ transformOrigin: "left" }}
              className="mt-6 block h-px w-24 bg-accent"
            />

            <div className="mt-8 max-w-xl space-y-5">
              {ABOUT.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  variants={item}
                  className="text-base leading-relaxed text-body md:text-md"
                >
                  {p}
                </motion.p>
              ))}
            </div>


            {/* Socials + email */}
            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-5 border-t border-hairline pt-8"
            >
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="text-body transition-colors hover:text-accent"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
              <span className="h-4 w-px bg-hairline" />
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 font-mono text-xs text-body transition-colors hover:text-accent"
              >
                <Mail size={16} />
                {SITE.email}
              </a>
            </motion.div>
          </div>

          <dl className="flex flex-col gap-0">
            {ABOUT.facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                variants={item}
                className="relative flex items-center justify-between gap-6 py-4"
              >
                <motion.span
                  variants={line}
                  style={{ transformOrigin: "left" }}
                  className="absolute left-0 top-0 h-px w-full bg-hairline"
                />
                <dt className="font-mono text-xs tracking-wide text-body">
                  <span className="text-accent">0{i + 1}</span> {fact.label}
                </dt>
                <dd className="text-right font-mono text-sm text-heading">
                  {fact.value}
                </dd>
              </motion.div>
            ))}
            <motion.span
              variants={line}
              style={{ transformOrigin: "left" }}
              className="h-px w-full bg-hairline"
            />
            
            {/* Resume */}
            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4 justify-center md:justify-end md:mt-20">
              <Button
                href={SITE.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5! hover:text-amber-50"
              >
                <FileText size={16} /> View résumé
              </Button>
              <Button
                href={SITE.resumeUrl}
                download="Jefferson-Resume.pdf"
                variant="ghost"
                className="px-5!"
              >
                <Download size={16} /> Download
              </Button>
            </motion.div>
          </dl>
        </div>
      </motion.div>
    </section>
  );
}
