/**
 * ATOM: ColorTokens
 * -----------------
 * Documents and exports all design system color tokens as typed constants.
 * Palette: "Strawberry Matcha Latte" — warm blush pinks, creamy ivories,
 * and earthy olive greens inspired by Pangasinan's natural landscape.
 *
 * Source of truth for Tailwind utility classes → tailwind.config.ts
 * Source of truth for CSS custom properties → app/globals.css
 */

// ── Brand Color Token Map ────────────────────────────────────────────────────
export const COLOR_TOKENS = {
  /** Primary — Olive Greens (brand identity, CTAs, borders) */
  primary: {
    50:  "#F3E7D7", // cream white — page background
    100: "#E6E2C4", // warm ivory — surfaces
    200: "#D4DCAE", // sage light — subtle borders
    300: "#ADC981", // soft olive — footer links, icon accents
    400: "#98C171", // fresh green — highlights
    500: "#80AF65", // medium sage — hover state
    600: "#619853", // muted green — PRIMARY BRAND (CTAs, active states)
    700: "#527f45",
    800: "#3f6234",
    900: "#2d4625", // forest green — footer, dark surfaces
  },
  /** Accent — Blush Pinks (hero gradient, category chips, warm tones) */
  accent: {
    50:  "#fdf8f5",
    100: "#F3E7D7", // warm cream
    200: "#F7DED3", // soft blush — alt surface
    300: "#F3C9C0", // pastel pink — hero gradient top, dusty rose
    400: "#e8a89e",
    500: "#d98880", // deeper rose
    600: "#c46b62",
    700: "#a3504a",
    800: "#7d3c37",
    900: "#5c2b27",
  },
  /** Sage — alias of primary greens for semantic clarity */
  sage: {
    50:  "#f7f9f2",
    100: "#E6E2C4",
    200: "#D4DCAE",
    300: "#ADC981", // pastel green — main sage accent
    400: "#98C171",
    500: "#80AF65",
    600: "#619853",
    700: "#527f45",
    800: "#3f6234",
    900: "#2d4625",
  },
  /** Cream — warm ivory neutrals used for surfaces and backgrounds */
  cream: {
    50:  "#fefdfb",
    100: "#F3E7D7", // cream white
    200: "#F7DED3", // peach cream
    300: "#F3C9C0", // dusty rose
    400: "#E6E2C4", // warm ivory / stone
    500: "#D4DCAE", // sage stone
    600: "#b8b899",
    700: "#8f8f72",
    800: "#6a6a55",
    900: "#484838",
  },
  /** Neutral — olive-dark text and surface tokens */
  neutral: {
    50:  "#faf9f7",
    100: "#F3E7D7",
    200: "#E6E2C4",
    300: "#ccc9ab",
    400: "#a8a58c",
    500: "#837f68",
    600: "#5e5b4a", // muted body text
    700: "#45432f",
    800: "#2e2c1e", // primary text color
    900: "#1a1908",
  },
  /** Semantic role aliases */
  semantic: {
    success:     "#619853", // muted green
    warning:     "#d98880", // deeper rose
    error:       "#c46b62",
    info:        "#ADC981", // pastel green
    textPrimary: "#2e2c1e", // dark olive
    textMuted:   "#5e5b4a",
    textSubtle:  "#837f68",
    surface:     "#F3E7D7", // cream white
    surfaceAlt:  "#F7DED3", // soft blush
    border:      "#E6E2C4", // warm ivory
  },
} as const;

// ── Type helpers ─────────────────────────────────────────────────────────────
export type PrimaryShade = keyof typeof COLOR_TOKENS.primary;
export type AccentShade  = keyof typeof COLOR_TOKENS.accent;
export type SageShade    = keyof typeof COLOR_TOKENS.sage;
export type CreamShade   = keyof typeof COLOR_TOKENS.cream;
export type NeutralShade = keyof typeof COLOR_TOKENS.neutral;

// ── Swatch component (design system preview use only) ────────────────────────
"use client";
import React from "react";

interface SwatchProps {
  color: string;
  label: string;
  textLight?: boolean;
}

export const ColorSwatch: React.FC<SwatchProps> = ({ color, label, textLight }) => (
  <div
    className="flex flex-col items-center gap-1"
    title={`${label}: ${color}`}
  >
    <div
      className="w-12 h-12 rounded-xl shadow-md"
      style={{ background: color, border: "1px solid rgba(0,0,0,0.08)" }}
      aria-label={`Color swatch: ${label}`}
      role="img"
    />
    <span className={`text-[10px] font-mono ${textLight ? "text-neutral-400" : "text-neutral-600"}`}>
      {label}
    </span>
    <span className="text-[10px] text-neutral-400 font-mono">{color}</span>
  </div>
);

export default COLOR_TOKENS;
