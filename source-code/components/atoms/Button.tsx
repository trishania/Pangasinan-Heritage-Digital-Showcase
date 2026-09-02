/**
 * ATOM: Button
 * -----------
 * Reusable button component with multiple variants, sizes, and states.
 * Follows WCAG 2.1 AA — visible focus, sufficient contrast on all variants.
 *
 * Usage: Primary CTAs, form submissions, navigation actions.
 * Breakpoints: Full-width on xs (<375px), auto-width md+ with consistent padding.
 */

import React from "react";
import { cn } from "@/lib/utils";

// ── Types ────────────────────────────────────────────────────────────────────
export type ButtonVariant = "primary" | "secondary" | "ghost" | "accent" | "outline";
export type ButtonSize    = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size preset */
  size?: ButtonSize;
  /** Show a loading spinner */
  isLoading?: boolean;
  /** Icon before label */
  iconLeft?: React.ReactNode;
  /** Icon after label */
  iconRight?: React.ReactNode;
  /** Stretch to full container width */
  fullWidth?: boolean;
  /** Render as anchor (pass href via `asChild` pattern alternative) */
  asChild?: boolean;
}

// ── Variant/size style maps ───────────────────────────────────────────────────
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 " +
    "shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
  secondary:
    "bg-primary-50 text-primary-700 border border-primary-200 hover:bg-primary-100 " +
    "active:bg-primary-200 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
  ghost:
    "bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 " +
    "focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2",
  accent:
    "bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700 " +
    "shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2",
  outline:
    "bg-transparent text-primary-700 border-2 border-primary-600 hover:bg-primary-50 " +
    "active:bg-primary-100 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm rounded-lg  gap-1.5",
  md: "px-5 py-2.5 text-base rounded-xl gap-2",
  lg: "px-7 py-3.5 text-lg rounded-xl  gap-2.5",
};

// ── Component ────────────────────────────────────────────────────────────────
/**
 * Button Atom
 *
 * @example
 * <Button variant="primary" size="md" iconLeft={<SearchIcon />}>
 *   Explore Sites
 * </Button>
 */
export const Button: React.FC<ButtonProps> = ({
  variant    = "primary",
  size       = "md",
  isLoading  = false,
  iconLeft,
  iconRight,
  fullWidth  = false,
  className,
  children,
  disabled,
  ...props
}) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      className={cn(
        // Base styles
        "inline-flex items-center justify-center font-semibold",
        "transition-all duration-200 ease-in-out",
        "select-none whitespace-nowrap",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
        // Variant
        variantStyles[variant],
        // Size
        sizeStyles[size],
        // Full width
        fullWidth && "w-full",
        className,
      )}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...props}
    >
      {/* Loading spinner */}
      {isLoading && (
        <svg
          className="animate-spin h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}

      {/* Left icon */}
      {!isLoading && iconLeft && (
        <span className="shrink-0" aria-hidden="true">{iconLeft}</span>
      )}

      {/* Label */}
      <span>{children}</span>

      {/* Right icon */}
      {!isLoading && iconRight && (
        <span className="shrink-0" aria-hidden="true">{iconRight}</span>
      )}
    </button>
  );
};

export default Button;
