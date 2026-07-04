import { useState } from "react";

export function ProjectImage({
  src,
  title,
  id,
}: {
  src: string;
  title: string;
  id: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group/img relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-hairline bg-surface">
      {!failed ? (
        <img
          src={src}
          alt={title}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
        />
      ) : (
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden bg-[radial-gradient(circle_at_30%_20%,var(--color-accent-soft),transparent_60%)] transition-transform duration-700 ease-out group-hover/img:scale-105">
          {/* faint coordinate grid, echoing the hero's math motif */}
          <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden="true">
            <defs>
              <pattern id={`grid-${id}`} width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="var(--color-heading)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${id})`} />
          </svg>
          <span className="font-mono text-6xl font-semibold text-heading/20">
            {id}
          </span>
          <span className="font-mono text-[11px] tracking-widest text-body">
            {title}
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-bg/40 via-transparent to-transparent" />
    </div>
  );
}