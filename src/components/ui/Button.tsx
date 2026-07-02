import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  target,
  rel,
  download,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4";

  const styles = {
    primary: "bg-accent text-bg hover:bg-accent/90",
    ghost:
      "border border-hairline text-heading hover:border-accent/60 hover:text-accent",
  };

  const classes = cn(base, styles[variant], className);

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel} download={download}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}