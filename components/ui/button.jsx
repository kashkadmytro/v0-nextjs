"use client";

import { forwardRef } from "react";

const variantStyles = {
  primary:
    "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90",
  secondary:
    "bg-[var(--muted)] text-[var(--foreground)] hover:opacity-80",
  outline:
    "border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--muted)]",
  ghost:
    "bg-transparent text-[var(--foreground)] hover:bg-[var(--muted)]",
  destructive:
    "bg-[var(--destructive)] text-[var(--destructive-foreground)] hover:opacity-90",
  link:
    "bg-transparent text-[var(--accent)] underline-offset-4 hover:underline p-0 h-auto",
};

const sizeStyles = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    disabled = false,
    className = "",
    ...props
  },
  ref
) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius)] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

  const classes = [
    base,
    variantStyles[variant] || variantStyles.primary,
    sizeStyles[size] || sizeStyles.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button ref={ref} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button, variantStyles, sizeStyles };
