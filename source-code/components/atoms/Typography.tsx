/**
 * ATOM: Typography
 * ----------------
 * Consistent text styling components across the application.
 * All components respect the design system's font tokens and color tokens.
 *
 * Usage: All text rendering — headings, body copy, captions, labels.
 * Breakpoints: Font sizes scale fluidly via Tailwind responsive prefixes.
 */

import React from "react";
import { cn } from "@/lib/utils";

// ── Heading ──────────────────────────────────────────────────────────────────
export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
export type HeadingSize  = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  as?: HeadingLevel;
  size?: HeadingSize;
  /** Override color class */
  colorClass?: string;
}

const headingSizes: Record<HeadingSize, string> = {
  xs:   "text-base md:text-lg",
  sm:   "text-lg md:text-xl",
  md:   "text-xl md:text-2xl",
  lg:   "text-2xl md:text-3xl",
  xl:   "text-3xl md:text-4xl",
  "2xl": "text-4xl md:text-5xl",
  "3xl": "text-5xl md:text-6xl",
  "4xl": "text-6xl md:text-7xl",
};

/**
 * Heading Atom — renders h1-h6 with Playfair Display font.
 * @example <Heading as="h1" size="3xl">Explore Pangasinan</Heading>
 */
export const Heading: React.FC<HeadingProps> = ({
  as: Tag    = "h2",
  size       = "lg",
  colorClass = "text-neutral-900",
  className,
  children,
  ...props
}) => (
  <Tag
    className={cn(
      "font-display font-bold leading-tight text-balance",
      headingSizes[size],
      colorClass,
      className,
    )}
    {...props}
  >
    {children}
  </Tag>
);

// ── Body Text ─────────────────────────────────────────────────────────────────
export type BodySize = "sm" | "base" | "lg";

interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: BodySize;
  muted?: boolean;
  as?: "p" | "span" | "div";
}

const bodySizes: Record<BodySize, string> = {
  sm:   "text-sm leading-relaxed",
  base: "text-base leading-relaxed",
  lg:   "text-lg leading-relaxed",
};

/**
 * Body Text Atom — paragraph / span with Inter font.
 * @example <Body size="base" muted>Discover centuries of rich heritage.</Body>
 */
export const Body: React.FC<BodyProps> = ({
  size    = "base",
  muted   = false,
  as: Tag = "p",
  className,
  children,
  ...props
}) => (
  <Tag
    className={cn(
      "font-sans",
      bodySizes[size],
      muted ? "text-neutral-500" : "text-neutral-700",
      className,
    )}
    {...props}
  >
    {children}
  </Tag>
);

// ── Label ─────────────────────────────────────────────────────────────────────
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

/**
 * Label Atom — accessible form label.
 * @example <Label htmlFor="search" required>Search Heritage Sites</Label>
 */
export const Label: React.FC<LabelProps> = ({
  required  = false,
  className,
  children,
  ...props
}) => (
  <label
    className={cn(
      "block text-sm font-semibold text-neutral-700 mb-1",
      className,
    )}
    {...props}
  >
    {children}
    {required && (
      <span className="text-accent-500 ml-1" aria-hidden="true">*</span>
    )}
  </label>
);

// ── Caption ───────────────────────────────────────────────────────────────────
interface CaptionProps extends React.HTMLAttributes<HTMLSpanElement> {}

/**
 * Caption Atom — small descriptive text (image captions, metadata).
 * @example <Caption>Photo: Hundred Islands National Park, Alaminos</Caption>
 */
export const Caption: React.FC<CaptionProps> = ({ className, children, ...props }) => (
  <span
    className={cn("block text-xs text-neutral-400 italic leading-snug", className)}
    {...props}
  >
    {children}
  </span>
);

// ── Tag / Category Label ───────────────────────────────────────────────────────
interface TagLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: "primary" | "accent" | "sage" | "cream";
}

const tagColors: Record<string, string> = {
  primary: "bg-primary-200 text-primary-800",
  accent:  "bg-accent-200  text-accent-700",
  sage:    "bg-sage-200    text-sage-800",
  cream:   "bg-cream-400   text-neutral-800",
};

/**
 * TagLabel Atom — category / chip badge on cards.
 * @example <TagLabel color="ocean">Coastal</TagLabel>
 */
export const TagLabel: React.FC<TagLabelProps> = ({
  color = "primary",
  className,
  children,
  ...props
}) => (
  <span
    className={cn(
      "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide",
      tagColors[color],
      className,
    )}
    {...props}
  >
    {children}
  </span>
);

export default { Heading, Body, Label, Caption, TagLabel };
