/**
 * ORGANISM: HeaderNavigation
 * --------------------------
 * Site-wide header with logo, main navigation links, CTA button,
 * and a keyboard-accessible mobile drawer menu.
 *
 * Uses: NavigationItem molecule, Button + Icon + Typography atoms.
 *
 * Usage: Rendered once at the top of every page in app/layout.tsx.
 *
 * Responsive Logic:
 *   — 375px (mobile):  Logo + hamburger button only; full-screen slide-down drawer
 *   — 768px (tablet):  Logo + condensed nav links inline + CTA button
 *   — 1024px+ (desktop): Full logo + all links + CTA button in a single bar
 *
 * Accessibility:
 *   - <header> landmark with role="banner"
 *   - <nav> with aria-label="Main navigation"
 *   - Mobile menu button has aria-expanded + aria-controls
 *   - Mobile drawer has id matching aria-controls
 *   - Escape key closes mobile menu
 *   - Focus trap not required (drawer is slide-down, not modal)
 *   - Skip link targets #main-content
 */

"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link                                         from "next/link";
import { LogoImage }                                from "@/components/atoms/LogoImage";
import { usePathname }                              from "next/navigation";
import { NavigationItem, type NavItem }             from "@/components/molecules/NavigationItem";
import { Button }                                   from "@/components/atoms/Button";
import { Icon }                                     from "@/components/atoms/Icon";
import { Heading }                                  from "@/components/atoms/Typography";
import { cn }                                       from "@/lib/utils";

// ── Navigation data ───────────────────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  { label: "Home",           href: "/",       icon: "leaf"      },
  { label: "Heritage Sites", href: "/#sites", icon: "compass"   },
  { label: "About",          href: "/#about", icon: "info"      },
  { label: "Contact",        href: "/#contact", icon: "phone"   },
];

// ── Component ─────────────────────────────────────────────────────────────────
/**
 * Header Navigation Organism
 *
 * @example
 * // In app/layout.tsx
 * <HeaderNavigation />
 * <main id="main-content">…</main>
 */
export const HeaderNavigation: React.FC = () => {
  const pathname    = usePathname();
  const [isOpen, setIsOpen]           = useState(false);
  const [isScrolled, setIsScrolled]   = useState(false);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close on Escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setIsOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  return (
    <>
      {/* ── Skip link (WCAG 2.4.1) ─────────────────────────────── */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* ── Header bar ─────────────────────────────────────────── */}
      <header
        role="banner"
        className={cn(
          "sticky top-0 z-40 w-full",
          "backdrop-blur-md",
          "border-b border-transparent",
          "transition-all duration-300",
          isScrolled && "shadow-soft",
        )}
        style={{
          background: isScrolled
            ? "rgba(243,231,215,0.97)"
            : "rgba(243,231,215,0.88)",
          borderBottomColor: isScrolled ? "rgba(212,220,174,0.5)" : "transparent",
        }}
      >
        <div className="container-site">
          <div className="flex h-16 items-center justify-between gap-4">

            {/* ── Logo ─────────────────────────────────────────── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg"
              aria-label="Pangasinan Heritage — go to homepage"
            >
              {/* Logo mark */}
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
                <LogoImage 
                  src="https://trishania.github.io/Pangasinan-Heritage-Digital-Showcase/logo/PHLOGO-nav.webp" 
                  alt="Pangasinan Heritage Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain" 
                  priority
                />
              </div>
              {/* Wordmark */}
              <div className="leading-none">
                <Heading as="span" size="xs" className="block text-neutral-900 font-bold">
                  Pangasinan
                </Heading>
                <span className="text-[11px] font-medium text-primary-600 uppercase tracking-widest">
                  Heritage
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav ──────────────────────────────────── */}
            <nav
              aria-label="Main navigation"
              className="hidden md:flex items-center"
            >
              <ul className="flex items-center gap-1" role="list">
                {NAV_ITEMS.map((item) => (
                  <NavigationItem
                    key={item.href}
                    item={item}
                    isActive={isActive(item.href)}
                    variant="desktop"
                  />
                ))}
              </ul>
            </nav>

            {/* ── CTA + Mobile toggle ──────────────────────────── */}
            <div className="flex items-center gap-3">
              {/* CTA — hidden on smallest mobile */}
              <Button
                variant="primary"
                size="sm"
                className="hidden xs:flex"
                onClick={() => {
                  document.getElementById("sites")?.scrollIntoView({ behavior: "smooth" });
                }}
                aria-label="Explore heritage sites"
              >
                <span className="hidden sm:inline">Explore Sites</span>
                <span className="sm:hidden">Explore</span>
              </Button>

              {/* Mobile menu toggle */}
              <button
                type="button"
                className={cn(
                  "md:hidden relative w-10 h-10 flex items-center justify-center",
                  "rounded-xl border border-neutral-200 bg-white",
                  "text-neutral-700 hover:bg-neutral-50 hover:text-primary-700",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                  "transition-all duration-200",
                )}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => setIsOpen(!isOpen)}
              >
                <Icon name={isOpen ? "close" : "menu"} size="md" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Drawer ────────────────────────────────────── */}
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation menu"
          aria-hidden={!isOpen}
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            "border-t border-neutral-100 bg-white",
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none",
          )}
        >
          <div className="container-site py-4">
            <ul className="space-y-1" role="list">
              {NAV_ITEMS.map((item) => (
                <NavigationItem
                  key={item.href}
                  item={item}
                  isActive={isActive(item.href)}
                  variant="mobile"
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-neutral-100">
              <Button
                variant="primary"
                size="md"
                fullWidth
                iconRight={<Icon name="arrow-right" size="sm" />}
                onClick={() => {
                  setIsOpen(false);
                  setTimeout(() => {
                    document.getElementById("sites")?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                }}
              >
                Explore Heritage Sites
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderNavigation;
