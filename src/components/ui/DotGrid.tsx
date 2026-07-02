import { useEffect, useRef } from "react";

/**
 * A quiet coordinate-grid backdrop. Dots sit on a fixed lattice and
 * displace slightly toward the cursor, like a field responding to a
 * point charge. Deliberately subtle — signature, not spectacle.
 */
export function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const SPACING = 28;
    const RADIUS = 1.1;
    const INFLUENCE = 110;
    const MAX_OFFSET = 8;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let frame = 0;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * SPACING;
          const y = j * SPACING;
          const dx = mouse.current.x - x;
          const dy = mouse.current.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let ox = x;
          let oy = y;
          let alpha = 0.16;

          if (dist < INFLUENCE) {
            const force = (1 - dist / INFLUENCE) * MAX_OFFSET;
            const angle = Math.atan2(dy, dx);
            ox = x - Math.cos(angle) * force;
            oy = y - Math.sin(angle) * force;
            alpha = 0.16 + (1 - dist / INFLUENCE) * 0.55;
          }

          ctx!.beginPath();
          ctx!.arc(ox, oy, RADIUS, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(161, 161, 170, ${alpha})`;
          ctx!.fill();
        }
      }

      if (!prefersReducedMotion) {
        frame = requestAnimationFrame(draw);
      }
    }

    function handleMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (prefersReducedMotion) draw();
    }

    function handleLeave() {
      mouse.current = { x: -9999, y: -9999 };
      if (prefersReducedMotion) draw();
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
