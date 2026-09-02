/**
 * MOLECULE: SearchForm
 * --------------------
 * Search and filter form for heritage sites.
 * Combines: Button + Icon + Label + Typography atoms.
 *
 * Usage: Placed above the HeritageGrid organism on the home page.
 * Allows users to filter sites by keyword and category.
 *
 * Responsive Logic:
 *   — 375px (mobile):  Full-width stacked layout (input + button stacked vertically)
 *   — 768px (tablet):  Inline row layout (input stretches, button on right)
 *   — 1024px+ (desktop): Same inline, wider input, category chips shown inline
 *
 * Accessibility:
 *   - <form> with role="search" and aria-label
 *   - Input has associated <label> (visually hidden on mobile, visible on md+)
 *   - Clear button has aria-label
 *   - Filter chips have aria-pressed state
 */

"use client";

import React, { useId }        from "react";
import { Button }              from "@/components/atoms/Button";
import { Icon }                from "@/components/atoms/Icon";
import { Label }               from "@/components/atoms/Typography";
import type { HeritageCategory } from "@/components/molecules/HeritageCard";
import { cn }                  from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────────────────────────
export type SortOption = "default" | "name" | "category";

interface SearchFormProps {
  query:             string;
  onQueryChange:     (value: string) => void;
  selectedCategory:  HeritageCategory | "All";
  onCategoryChange:  (category: HeritageCategory | "All") => void;
  resultCount?:      number;
  className?:        string;
}

const CATEGORIES: Array<HeritageCategory | "All"> = [
  "All", "Coastal", "Natural", "Historical", "Cultural",
];

// ── Component ─────────────────────────────────────────────────────────────────
/**
 * SearchForm Molecule
 *
 * @example
 * <SearchForm
 *   query={query}
 *   onQueryChange={setQuery}
 *   selectedCategory={category}
 *   onCategoryChange={setCategory}
 *   resultCount={filteredSites.length}
 * />
 */
export const SearchForm: React.FC<SearchFormProps> = ({
  query,
  onQueryChange,
  selectedCategory,
  onCategoryChange,
  resultCount,
  className,
}) => {
  const inputId = useId();

  const handleClear = () => {
    onQueryChange("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // filtering is live — no reload needed
  };

  return (
    <section
      className={cn("w-full space-y-4", className)}
      aria-label="Heritage site search and filter"
    >
      {/* ── Search Input Row ────────────────────────────────────── */}
      <form
        role="search"
        aria-label="Search heritage sites"
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3"
      >
        <div className="flex-1 relative">
          {/* Accessible label — visible from md upward */}
          <Label htmlFor={inputId} className="sr-only">
            Search heritage sites
          </Label>

          {/* Search icon (decorative) */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Icon name="search" size="md" className="text-neutral-400" />
          </div>

          {/* Text input */}
          <input
            id={inputId}
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search sites, e.g. Hundred Islands…"
            autoComplete="off"
            spellCheck="false"
            className={cn(
              // Layout
              "w-full pl-10 pr-10 py-3 rounded-xl",
              // Typography
              "text-base text-neutral-900 placeholder:text-neutral-400",
              // Border / BG
              "bg-white border border-neutral-200",
              "shadow-sm",
              // States
              "hover:border-primary-300",
              "focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20",
              "transition-all duration-200",
            )}
            aria-label="Search heritage sites"
            aria-controls="heritage-grid"
            aria-autocomplete="list"
          />

          {/* Clear button */}
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className={cn(
                "absolute right-3 top-1/2 -translate-y-1/2",
                "text-neutral-400 hover:text-neutral-600",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                "rounded transition-colors duration-150",
              )}
              aria-label="Clear search"
            >
              <Icon name="close" size="sm" />
            </button>
          )}
        </div>

        {/* Search submit (mobile UX convenience — also filters live) */}
        <Button
          type="submit"
          variant="primary"
          size="md"
          iconLeft={<Icon name="search" size="sm" />}
          className="sm:w-auto w-full shrink-0"
          aria-label="Search"
        >
          <span className="sm:inline hidden">Search</span>
          <span className="sm:hidden">Search Sites</span>
        </Button>
      </form>

      {/* ── Category Filter Chips ───────────────────────────────── */}
      <div
        role="group"
        aria-label="Filter by category"
        className="flex flex-wrap gap-2"
      >
        <Icon name="filter" size="sm" className="text-neutral-400 self-center shrink-0" />
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onCategoryChange(cat)}
              aria-pressed={isActive}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-semibold",
                "border transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1",
                isActive
                  ? "bg-primary-600 text-white border-primary-600 shadow-sm"
                  : "bg-white text-neutral-600 border-neutral-200 hover:border-primary-300 hover:text-primary-700",
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* ── Result count (live region for screen readers) ───────── */}
      {resultCount !== undefined && (
        <p
          className="text-sm text-neutral-500"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {resultCount === 0
            ? "No sites found. Try a different search."
            : `Showing ${resultCount} heritage ${resultCount === 1 ? "site" : "sites"}`}
        </p>
      )}
    </section>
  );
};

export default SearchForm;
