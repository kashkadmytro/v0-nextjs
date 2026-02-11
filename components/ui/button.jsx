"use client";

import { forwardRef } from "react";

const variantStyles = {
  primary:
    "bg-primary text-primary-foreground hover:opacity-90",
  secondary:
    "bg-muted text-foreground hover:bg-muted/80",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-muted",
  ghost:
    "bg-transparent text-foreground hover:bg-muted",
  destructive:
    "bg-destructive text-destructive-foreground hover:opacity-90",
  link:
    "bg-transparent text-accent underline-offset-4 hover:underline p-0 h-auto",
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
