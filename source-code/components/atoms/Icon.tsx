/**
 * ATOM: Icon
 * ----------
 * Centralized SVG icon component with consistent sizing and accessibility.
 * All icons are inline SVG for zero-dependency, maximum performance.
 * ARIA: aria-hidden="true" by default; pass aria-label for standalone icons.
 *
 * Usage: Inside Button, NavigationItem, Heritage Card labels, form fields.
 * Breakpoints: Icons scale with `size` prop; no breakpoint-specific logic.
 */

import React from "react";
import { cn } from "@/lib/utils";

// ── Types ────────────────────────────────────────────────────────────────────
export type IconName =
  | "search"
  | "menu"
  | "close"
  | "map-pin"
  | "star"
  | "compass"
  | "camera"
  | "waves"
  | "mountain"
  | "leaf"
  | "arrow-right"
  | "arrow-left"
  | "chevron-down"
  | "info"
  | "phone"
  | "mail"
  | "external-link"
  | "filter"
  | "grid"
  | "list"
  | "sun"
  | "drop"
  | "lighthouse"
  | "anchor";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: IconName;
  size?: IconSize;
  /** Accessible label for standalone icons */
  label?: string;
}

// ── Size map ──────────────────────────────────────────────────────────────────
const iconSizes: Record<IconSize, string> = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
};

// ── Path map (inline SVG paths from Heroicons + custom) ───────────────────────
const paths: Record<IconName, React.ReactNode> = {
  search: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.197 15.803 7.5 7.5 0 0 0 15.803 15.803z" />
  ),
  menu: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  ),
  close: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M6 18L18 6M6 6l12 12" />
  ),
  "map-pin": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
  ),
  star: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z" />
  ),
  compass: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M15.75 8.25L14.25 14.25l-6 1.5 1.5-6 6-1.5z" />
    </>
  ),
  camera: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316z" />
  ),
  waves: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3.75 9.75s2.25-3 4.5-3 4.5 3 4.5 3 2.25-3 4.5-3 4.5 3 4.5 3M3.75 14.25s2.25-3 4.5-3 4.5 3 4.5 3 2.25-3 4.5-3 4.5 3 4.5 3" />
  ),
  mountain: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z" />
  ),
  leaf: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 0 1 6 0v8.25a3 3 0 0 1-3 3z" />
  ),
  "arrow-right": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  ),
  "arrow-left": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
  ),
  "chevron-down": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  ),
  info: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9-3.75h.008v.008H12V8.25z" />
  ),
  phone: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6z" />
  ),
  mail: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  ),
  "external-link": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  ),
  filter: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3z" />
  ),
  grid: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25zM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25z" />
  ),
  list: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z" />
  ),
  sun: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z" />
  ),
  drop: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
  ),
  lighthouse: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 3l2 6H10l2-6z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M10 9v12M14 9v12M8 21h8" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 3V1M9 4L7 2M15 4l2-2" />
    </>
  ),
  anchor: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.9M18.75 10.25h.008v.008h-.008V10.25z" />
  ),
};

// ── Component ─────────────────────────────────────────────────────────────────
/**
 * Icon Atom
 *
 * @example
 * // In a button (decorative — aria-hidden)
 * <Icon name="search" size="md" />
 *
 * // Standalone (needs accessible label)
 * <Icon name="map-pin" size="lg" label="Location" />
 */
export const Icon: React.FC<IconProps> = ({
  name,
  size    = "md",
  label,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={cn(iconSizes[size], "shrink-0", className)}
    aria-hidden={!label}
    aria-label={label}
    role={label ? "img" : undefined}
    {...props}
  >
    {paths[name]}
  </svg>
);

export default Icon;
