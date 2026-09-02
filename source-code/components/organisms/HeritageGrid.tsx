/**
 * ORGANISM: HeritageGrid
 * ----------------------
 * A responsive grid of Heritage Card molecules, with empty-state handling.
 * This organism assembles the core browsable content of the homepage.
 *
 * Usage: Place below SearchForm on homepage to display all filtered heritage sites.
 *
 * Responsive Logic:
 *   — 375px (xs/mobile):  1-column grid, full-width cards
 *   — 768px (md/tablet):  2-column grid
 *   — 1024px (lg/desktop): 3-column grid with increased gap
 *   — 1280px (xl):        3-column grid, max-width container maintained
 *
 * Accessibility:
 *   - grid has id="heritage-grid" for aria-controls from SearchForm
 *   - role="region" + aria-label
 *   - Empty state has role="status" for screen readers
 *   - First card uses lazy=false for LCP optimization
 */

import React from "react";
import { HeritageCard, type HeritageSite } from "@/components/molecules/HeritageCard";
import { Heading, Body }                    from "@/components/atoms/Typography";
import { Button }                           from "@/components/atoms/Button";
import { Icon }                             from "@/components/atoms/Icon";
import { cn }                               from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────────────────────────
interface HeritageGridProps {
  sites:     HeritageSite[];
  isLoading?: boolean;
  className?: string;
  /** Callback to reset search/filter state */
  onReset?:  () => void;
}

// ── Skeleton Card (loading state) ──────────────────────────────────────────────
const SkeletonCard: React.FC = () => (
  <div className="card animate-pulse" aria-hidden="true">
    <div className="pb-[56.25%] bg-neutral-200 rounded-t-2xl" />
    <div className="p-4 space-y-3">
      <div className="h-4 bg-neutral-200 rounded w-1/3" />
      <div className="h-6 bg-neutral-200 rounded w-2/3" />
      <div className="h-4 bg-neutral-200 rounded w-full" />
      <div className="h-4 bg-neutral-200 rounded w-4/5" />
      <div className="h-9 bg-neutral-100 rounded-xl w-full mt-4" />
    </div>
  </div>
);

// ── Empty State ────────────────────────────────────────────────────────────────
const EmptyState: React.FC<{ onReset?: () => void }> = ({ onReset }) => (
  <div
    className="col-span-full flex flex-col items-center justify-center py-20 gap-6 text-center"
    role="status"
    aria-live="polite"
  >
    <div className="w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center">
      <Icon name="compass" size="xl" className="text-primary-400" />
    </div>
    <div className="space-y-2">
      <Heading as="h3" size="sm" className="text-neutral-700">
        No heritage sites found
      </Heading>
      <Body size="sm" muted>
        Try adjusting your search terms or clearing the category filter.
      </Body>
    </div>
    {onReset && (
      <Button
        variant="outline"
        size="md"
        onClick={onReset}
        iconLeft={<Icon name="close" size="sm" />}
      >
        Clear Search
      </Button>
    )}
  </div>
);

// ── Component ─────────────────────────────────────────────────────────────────
/**
 * Heritage Grid Organism
 *
 * @example
 * <HeritageGrid sites={filteredSites} onReset={handleReset} />
 */
export const HeritageGrid: React.FC<HeritageGridProps> = ({
  sites,
  isLoading = false,
  className,
  onReset,
}) => {
  return (
    <section
      id="heritage-grid"
      aria-label="Heritage sites grid"
      aria-live="polite"
      aria-busy={isLoading}
      className={cn("w-full", className)}
    >
      <div
        className={cn(
          "grid gap-6",
          // Responsive columns
          "grid-cols-1",           // mobile: 1 col
          "sm:grid-cols-2",        // tablet: 2 cols  (640px+)
          "lg:grid-cols-3",        // desktop: 3 cols (1024px+)
        )}
      >
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
          : sites.length === 0
            ? <EmptyState onReset={onReset} />
            : sites.map((site, index) => (
                <HeritageCard
                  key={site.id}
                  site={site}
                  lazy={index > 0} // first card eager for LCP
                />
              ))
        }
      </div>
    </section>
  );
};

export default HeritageGrid;
