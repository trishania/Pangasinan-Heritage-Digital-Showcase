/**
 * MOLECULE: NavigationItem
 * ------------------------
 * A single navigation link used inside the HeaderNavigation organism.
 * Combines: Icon + Typography atoms.
 *
 * Usage: Rendered within <nav> as part of HeaderNavigation's link list.
 * Supports active state (current page) and dropdown indicator.
 *
 * Responsive Logic:
 *   — 375px (mobile):  Full-width stacked list in mobile drawer
 *   — 768px (tablet):  Inline horizontal list in top nav bar
 *   — 1024px+ (desktop): Same as tablet with hover underline animation
 *
 * Accessibility:
 *   - aria-current="page" on active item
 *   - Keyboard-focusable (native <a> or Link)
 *   - Focus ring visible
 */

"use client";

import React from "react";
import Link from "next/link";
import { Icon, type IconName } from "@/components/atoms/Icon";
import { cn } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────────────────────────
export interface NavItem {
  label:    string;
  href:     string;
  icon?:    IconName;
  isExternal?: boolean;
}

interface NavigationItemProps {
  item:      NavItem;
  isActive?: boolean;
  /** Variant — "desktop" renders horizontal pill, "mobile" renders full-width row */
  variant?:  "desktop" | "mobile";
  onClick?:  () => void;
}

// ── Component ─────────────────────────────────────────────────────────────────
/**
 * NavigationItem Molecule
 *
 * @example
 * <NavigationItem
 *   item={{ label: "Heritage Sites", href: "#sites", icon: "compass" }}
 *   isActive={true}
 *   variant="desktop"
 * />
 */
export const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  isActive  = false,
  variant   = "desktop",
  onClick,
}) => {
  const sharedAttribs = {
    href: item.href,
    "aria-current": isActive ? ("page" as const) : undefined,
    onClick,
    ...(item.isExternal
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {}),
  };

  const desktopClass = cn(
    "relative flex items-center gap-1.5 px-3 py-2 rounded-lg",
    "text-sm font-semibold transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
    isActive
      ? "text-primary-700 bg-primary-50"
      : "text-neutral-600 hover:text-primary-700 hover:bg-neutral-50",
    // Bottom underline indicator for active (desktop only)
    isActive &&
      "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary-500 after:rounded-full",
  );

  const mobileClass = cn(
    "flex items-center gap-3 w-full px-4 py-3 rounded-xl",
    "text-base font-semibold transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
    isActive
      ? "text-primary-700 bg-primary-50"
      : "text-neutral-700 hover:bg-neutral-50 hover:text-primary-700",
  );

  return (
    <li className={variant === "mobile" ? "w-full" : ""}>
      <Link
        {...sharedAttribs}
        className={variant === "desktop" ? desktopClass : mobileClass}
      >
        {item.icon && (
          <Icon
            name={item.icon}
            size={variant === "mobile" ? "md" : "sm"}
            className={isActive ? "text-primary-600" : "text-neutral-400"}
            aria-hidden
          />
        )}
        <span>{item.label}</span>
        {item.isExternal && (
          <Icon name="external-link" size="xs" className="text-neutral-400 ml-auto" aria-hidden />
        )}
      </Link>
    </li>
  );
};

export default NavigationItem;
