import * as React from "react";
import { cn } from "@/lib/utils";

const variantStyles = {
  default:
    "border-transparent bg-primary text-primary-foreground shadow-[0_6px_14px_-12px_rgba(47,95,208,0.8)]",
  secondary: "border-secondary/70 bg-secondary/70 text-secondary-foreground",
  outline: "border-primary/35 bg-background/65 text-primary",
} as const;

type BadgeVariant = keyof typeof variantStyles;

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
