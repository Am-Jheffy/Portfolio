import { motion } from "framer-motion";
import { skillCategories, learningTrajectory, SKILLS_META } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Bento spans keyed by category id — two large cards on top, two even
// cards beneath. Falls back to a single column on mobile.
const SPANS: Record<string, string> = {
  "01": "md:col-span-4",
  "02": "md:col-span-2",
  "03": "md:col-span-3",
  "04": "md:col-span-3",
};

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

const card = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const tagContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.28 } },
};

const tagPill = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 500, damping: 82 },
  },
};

export function Skills() {
  return (
    <section id="skills" className="border-b border-hairline py-28 md:py-36">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl px-6 md:px-10"
      >
        <motion.p
          variants={item}
          className="mb-4 font-mono text-xs tracking-widest text-accent"
        >
          {SKILLS_META.eyebrow}
        </motion.p>

        <motion.h2
          variants={item}
          className="max-w-lg text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl md:text-5xl"
        >
          {SKILLS_META.heading}
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-body md:text-lg"
        >
          {SKILLS_META.intro}
        </motion.p>

        {/* Primary bento grid — this is the scannable, high-contrast layer */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-6">
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={card}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-hairline bg-surface/60 p-7 backdrop-blur-md transition-shadow duration-300 hover:border-accent/40 hover:shadow-[0_0_40px_-12px_var(--color-accent)]",
                SPANS[cat.id]
              )}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-colors duration-500 group-hover:bg-accent/20" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent">{cat.id}</span>
                </div>

                <h3 className="mt-4 text-lg font-semibold tracking-tight text-heading md:text-xl">
                  {cat.title}
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-relaxed text-body">
                  {cat.description}
                </p>

                <motion.div
                  variants={tagContainer}
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={tagPill}
                      className="rounded-full border border-hairline bg-surface/50 px-4 py-1.5 text-sm font-medium text-body transition-colors hover:bg-surface-hover hover:text-heading"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning trajectory — deliberately muted, doesn't compete with the grid above */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-hairline pt-6"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest text-body/50">
            Trajectory
          </span>

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] text-body/50">Active</span>
            {learningTrajectory.active.map((skill) => (
              <span
                key={skill}
                className="font-mono text-[11px] text-accent/70"
              >
                {skill}
              </span>
            ))}
          </div>

          <span className="hidden h-3 w-px bg-hairline sm:block" />

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] text-body/50">Queued</span>
            {learningTrajectory.queued.map((skill, i) => (
              <span key={skill} className="font-mono text-[11px] text-body/50">
                {skill}
                {i < learningTrajectory.queued.length - 1 && (
                  <span className="ml-2 text-body/30">·</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}