import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { DotGrid } from "@/components/ui/DotGrid";
import { Button } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/sections/PhotoFrame";
import { SITE } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-hairline"
    >
      <DotGrid />

      {/* Vignette so the grid recedes toward the edges */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-bg)_75%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 pt-32 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:pt-24">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* <motion.p
            variants={item}
            className="mb-6 font-mono text-xs tracking-widest text-accent"
          >
            {"// "}available for work
          </motion.p> */}

          <motion.p
            variants={item}
            className="mb-3 font-mono text-lg text-body"
          >
            {SITE.intro}{" "}
            <span className="text-accent">I'm a {SITE.role}.</span>
          </motion.p>

          <motion.h1
            variants={item}
            className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight text-heading sm:text-6xl md:text-7xl"
          >
            Building
            <br />
            <span className="text-body">interfaces that</span>
            <br />
            compute cleanly.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-base leading-relaxed text-body md:text-lg"
          >
            {SITE.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects">
              View projects <ArrowUpRight size={16} />
            </Button>
            <Button href="#contact" variant="ghost">
              Get in touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhotoFrame />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-body transition-colors hover:text-accent"
        aria-label="Scroll to About section"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}
