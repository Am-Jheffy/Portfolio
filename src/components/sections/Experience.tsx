import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  EXPERIENCE_META,
  accoladesData,
  credentials,
  experienceTimeline,
} from "@/lib/constants";

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

const entryVariant = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Progress of the timeline track through the viewport — drives the glowing
  // fill line. Starts filling once the track's top reaches the vertical
  // center of the viewport, finishes as its bottom passes the same point.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"],
  });

  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
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
          {EXPERIENCE_META.eyebrow}
        </motion.p>

        <motion.h2
          variants={item}
          className="max-w-lg text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl md:text-5xl"
        >
          {EXPERIENCE_META.heading}
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-body md:text-lg"
        >
          {EXPERIENCE_META.intro}
        </motion.p>

        {/* Timeline + Foundations share one narrower, aligned column */}
        <div className="mx-auto w-full max-w-5xl">
          {/* Timeline */}
          <div ref={trackRef} className="relative mt-20">
            {/* Static track */}
            <div className="absolute left-3 top-0 h-full w-px bg-hairline" />
            {/* Glowing fill, driven by scroll progress */}
            <motion.div
              style={{ height: fillHeight }}
              className="absolute left-3 top-0 w-px bg-accent shadow-[0_0_12px_var(--color-accent)]"
            />

            <div className="flex flex-col gap-16 md:gap-20">
              {experienceTimeline.map((entry) => (
                <motion.div
                  key={entry.id}
                  variants={entryVariant}
                  whileInView="active"
                  viewport={{ once: true, amount: 0.5 }}
                  className="relative pl-12"
                >
                  {/* Node — lights up (via the "active" variant) once scrolled into view */}
                  <motion.span
                    variants={{
                      hidden: {
                        backgroundColor: "var(--color-surface)",
                        boxShadow: "0 0 0 0px transparent",
                      },
                      active: {
                        backgroundColor: "var(--color-accent)",
                        boxShadow: "0 0 0 4px var(--color-accent-soft)",
                      },
                    }}
                    initial="hidden"
                    className="absolute left-3 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border border-accent/50"
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />

                  <span className="font-mono text-sm text-body">
                    {entry.period}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-heading">
                    {entry.role}
                  </h3>

                  <p className="mt-1 font-mono text-sm tracking-wide text-accent">
                    {entry.company}
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-body md:text-base">
                    {entry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Foundations & Accolades — bento grid, left edge aligned to the timeline's line */}
          <motion.div
            variants={item}
            className="mt-24 grid grid-cols-1 gap-6 pl-3 md:grid-cols-2"
          >
            {/* Card 1 — Academic Foundation & Service */}
            <div className="rounded-2xl border border-hairline bg-surface/60 p-8 backdrop-blur-md">
              <h4 className="font-mono text-xs tracking-widest text-body">
                Academic Foundation & Service
              </h4>

              <p className="mt-6 text-2xl font-bold text-heading">
                {credentials.education.degree}
              </p>
              <p className="mt-1 font-mono text-sm tracking-tight text-body">
                {credentials.education.institution}
              </p>

              <span className="mt-4 inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                {credentials.status}
              </span>
            </div>

            {/* Card 2 — Technical Accolades & Certifications */}
            <div className="rounded-2xl border border-hairline bg-surface/60 p-8 backdrop-blur-md">
              <h4 className="mb-2 font-mono text-xs tracking-widest text-body">
                Technical Accolades & Certifications
              </h4>

              <motion.div
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06 } },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="mt-4 flex flex-col"
              >
                {accoladesData.map((a) => (
                  <motion.a
                    key={a.award}
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          type: "spring" as const,
                          stiffness: 300,
                          damping: 22,
                        },
                      },
                    }}
                    className="group flex items-center justify-between gap-3 rounded-lg p-2 transition-colors hover:bg-surface-hover/60"
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-body">
                        {a.org}
                      </span>
                      <span className="text-sm font-semibold text-heading">
                        {a.award}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-body opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-accent"
                    />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}