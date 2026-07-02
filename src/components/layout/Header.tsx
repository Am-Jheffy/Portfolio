import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-hairline bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="group flex items-center font-mono text-lg font-semibold tracking-tight text-heading"
        >
          <span className="text-accent transition-transform duration-300 group-hover:-translate-x-0.5">
            {"</"}
          </span>
          <span>{SITE.logoText}</span>
          <span className="text-accent transition-transform duration-300 group-hover:translate-x-0.5">
            {">"}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link, i) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 font-mono text-xs tracking-wide"
              >
                <span
                  className={cn(
                    "transition-colors duration-200",
                    isActive ? "text-heading" : "text-body group-hover:text-heading"
                  )}
                >
                  <span className="text-accent">0{i + 1}.</span> {link.label}
                </span>
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-px bg-accent transition-transform duration-300 ease-out",
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-hairline px-5 py-2 font-mono text-xs text-heading transition-all duration-200 hover:border-accent/60 hover:text-accent hover:shadow-[0_0_0_1px_var(--color-accent)] md:inline-block"
        >
          Let's talk
        </a>

        <button
          className="text-heading md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-hairline bg-bg md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 font-mono text-sm text-body hover:text-heading"
                >
                  <span className="text-accent">0{i + 1}.</span> {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
