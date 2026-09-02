/**
 * lib/utils.ts — Utility helpers for the Pangasinan Heritage app.
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge }               from "tailwind-merge";

/**
 * Merges Tailwind CSS class names with conflict resolution.
 * Uses clsx for conditional classes and tailwind-merge to deduplicate.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Clamps a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Returns a truncated string with ellipsis if longer than maxLength.
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trimEnd() + "…";
}
