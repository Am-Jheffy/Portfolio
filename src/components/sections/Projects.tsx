import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import {
  PROJECTS_META,
  featuredProjects,
  projectArchive,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ProjectImage } from "@/components/sections/ProjectImage";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const project = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// Same pill/tag treatment as the Skills section, for visual continuity.
const tagContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const tagPill = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 22 },
  },
};

const line = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Projects() {
  const [archiveOpen, setArchiveOpen] = useState(false);

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-b border-hairline py-28 md:scroll-mt-28 md:py-36"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto max-w-6xl px-6 md:px-10"
      >
        <motion.p
          variants={item}
          className="mb-4 font-mono text-xs tracking-widest text-accent"
        >
          {PROJECTS_META.eyebrow}
        </motion.p>

        <motion.h2
          variants={item}
          className="max-w-lg text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl md:text-5xl"
        >
          {PROJECTS_META.heading}
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-body md:text-lg"
        >
          {PROJECTS_META.intro}
        </motion.p>

        {/* Featured projects — alternating layout */}
        <div className="mt-18 flex flex-col gap-24 md:gap-32">
          {featuredProjects.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.article
                key={p.id}
                variants={project}
                className={cn(
                  "flex flex-col gap-8 md:items-center md:gap-12",
                  reversed ? "md:flex-row-reverse" : "md:flex-row",
                )}
              >
                <div className="md:w-1/2">
                  <ProjectImage src={p.imagePath} title={p.title} id={p.id} />
                </div>

                <div className="md:w-1/2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent">
                      {p.id}
                    </span>
                    <span className="font-mono text-xs tracking-wide text-body">
                      {p.type}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-semibold tracking-tight text-heading md:text-3xl">
                      {p.title}
                    </h3>
                    {"isBuildActive" in p && p.isBuildActive && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent-soft px-2.5 py-1 font-mono text-[10px] text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Active Build
                      </span>
                    )}
                  </div>

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-body md:text-base">
                    {p.description}
                  </p>

                  <motion.div
                    variants={tagContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.6 }}
                    className="mt-6 flex flex-wrap gap-2"
                  >
                    {p.techStack.map((tech) => (
                      <motion.span
                        key={tech}
                        variants={tagPill}
                        className="rounded-full border border-hairline bg-surface/50 px-3 py-1 text-sm font-medium text-body transition-colors hover:bg-surface-hover hover:text-heading"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <div className="mt-7 flex items-center gap-5">
                    <a
                      href={p.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-heading transition-colors hover:text-accent"
                    >
                      Live <ArrowUpRight size={14} />
                    </a>

                    {p.isPrivateRepo ? (
                      <span className="inline-flex cursor-not-allowed items-center gap-1.5 font-mono text-xs text-body/40">
                        <Lock size={14} /> Private Repo
                      </span>
                    ) : (
                      <a
                        href={p.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-body transition-colors hover:text-accent"
                      >
                        <FaGithub size={14} /> Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Archive trigger */}
        <motion.div variants={item} className="mt-24 flex justify-center">
          <button
            type="button"
            onClick={() => setArchiveOpen((v) => !v)}
            className="group flex items-center gap-2 font-mono text-sm tracking-widest text-heading transition-all duration-300 hover:tracking-[0.18em] hover:text-accent"
          >
            {archiveOpen ? "Hide Project Vault" : "Explore Full Archive"}
            <ArrowRight
              size={16}
              className={cn(
                "transition-transform duration-300",
                archiveOpen ? "rotate-90" : "group-hover:translate-x-1",
              )}
            />
          </button>
        </motion.div>

        {/* Archive list */}
        <AnimatePresence initial={false}>
          {archiveOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mx-auto mt-12 max-w-3xl">
                {projectArchive.map((entry) => (
                  <div key={entry.title} className="group relative py-5">
                    <motion.span
                      variants={line}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      style={{ transformOrigin: "left" }}
                      className="absolute left-0 top-0 h-px w-full bg-hairline"
                    />
                    <a
                      href={entry.link}
                      className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-xs text-body">
                          {entry.year}
                        </span>
                        <span className="text-base font-medium text-heading transition-colors group-hover:text-accent md:text-lg">
                          {entry.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-body">
                          {entry.category}
                        </span>
                        <span className="hidden font-mono text-xs text-body/50 sm:inline">
                          {entry.builtWith.join(" · ")}
                        </span>
                        <ArrowUpRight
                          size={14}
                          className="text-body opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-accent"
                        />
                      </div>
                    </a>
                  </div>
                ))}
                <span className="block h-px w-full bg-hairline" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
