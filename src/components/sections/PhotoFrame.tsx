import { useState } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export function PhotoFrame() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto aspect-4/5 w-full max-w-sm">
      <span className="absolute -left-3 -top-3 h-6 w-6 border-l border-t border-accent/60" />
      <span className="absolute -right-3 -top-3 h-6 w-6 border-r border-t border-accent/60" />
      <span className="absolute -bottom-3 -left-3 h-6 w-6 border-b border-l border-accent/60" />
      <span className="absolute -bottom-3 -right-3 h-6 w-6 border-b border-r border-accent/60" />

      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-hairline bg-surface">
        {!failed ? (
          <img
            src={SITE.photo}
            alt={SITE.name}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_50%_30%,var(--color-accent-soft),transparent_70%)]">
            <span className="font-mono text-6xl font-semibold tracking-tight text-heading">
              {"</"}
              <span className="text-accent">{SITE.logoText}</span>
              {">"}
            </span>
            <span className="font-mono text-[11px] tracking-widest text-body">
              Building robust architectural solutions.
            </span>
          </div>
        )}
      </div>

      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-hairline bg-bg px-4 py-1.5 font-mono text-xs text-body"
      >
        <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
        {SITE.role}
      </motion.span>
    </div>
  );
}
