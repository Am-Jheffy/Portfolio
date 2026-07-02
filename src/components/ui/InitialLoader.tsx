import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

const EASE_SNAP = [0.76, 0, 0.24, 1] as const;

export function InitialLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-60 flex items-center justify-center bg-bg"
      exit={{
        y: "-100%",
        transition: { duration: 0.8, ease: EASE_SNAP, delay: 0.2 },
      }}
    >
      <motion.div
        className="flex items-center gap-1 font-mono text-5xl font-semibold tracking-tight md:text-7xl"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.span
          className="text-accent"
          initial={{ x: 24, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {"</"}
        </motion.span>

        <motion.span
          className="text-heading"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          {SITE.logoText}
        </motion.span>

        <motion.span
          className="text-accent"
          initial={{ x: -24, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {">"}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
