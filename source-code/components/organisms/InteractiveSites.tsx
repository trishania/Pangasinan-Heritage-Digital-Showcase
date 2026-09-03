/**
 * ORGANISM: InteractiveSites
 * --------------------------
 * Client island for search/filter/pagination over heritage sites.
 * Isolated "use client" boundary so the parent page.tsx stays a Server Component.
 *
 * Pagination:
 *   - Default view: first PAGE_SIZE sites for faster initial render & fewer images.
 *   - While a search query or category filter is active, ALL matching sites show.
 *   - "Show More" / "Show Less" button appears when there are more than PAGE_SIZE results.
 */

"use client";

import React, { useState, useMemo } from "react";
import { SearchForm }               from "@/components/molecules/SearchForm";
import { HeritageGrid }             from "@/components/organisms/HeritageGrid";
import { Button }                   from "@/components/atoms/Button";
import { Icon }                     from "@/components/atoms/Icon";
import type { HeritageSite }        from "@/components/molecules/HeritageCard";
import type { HeritageCategory }    from "@/components/molecules/HeritageCard";

const PAGE_SIZE = 6;

interface InteractiveSitesProps {
  sites: HeritageSite[];
}

export const InteractiveSites: React.FC<InteractiveSitesProps> = ({ sites }) => {
  const [query,        setQuery]        = useState("");
  const [category,     setCategory]     = useState<HeritageCategory | "All">("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const isFiltering = query.trim().length > 0 || category !== "All";

  // Filter sites by search query and category
  const filteredSites = useMemo(() => {
    const q = query.toLowerCase().trim();
    return sites.filter((site) => {
      const matchesQuery =
        !q ||
        site.name.toLowerCase().includes(q) ||
        site.location.toLowerCase().includes(q) ||
        site.description.toLowerCase().includes(q) ||
        site.category.toLowerCase().includes(q);

      const matchesCategory = category === "All" || site.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [query, category, sites]);

  // While filtering, show all matches; otherwise respect pagination
  const displayedSites = isFiltering ? filteredSites : filteredSites.slice(0, visibleCount);
  const hasMore        = !isFiltering && filteredSites.length > visibleCount;
  const canCollapse    = !isFiltering && visibleCount > PAGE_SIZE;

  const handleReset = () => {
    setQuery("");
    setCategory("All");
    setVisibleCount(PAGE_SIZE);
  };

  const handleQueryChange = (v: string) => {
    setQuery(v);
    setVisibleCount(PAGE_SIZE); // reset pagination on new search
  };

  const handleCategoryChange = (c: HeritageCategory | "All") => {
    setCategory(c);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="space-y-8">
      {/* Search & filter */}
      <div className="max-w-3xl mx-auto">
        <SearchForm
          query={query}
          onQueryChange={handleQueryChange}
          selectedCategory={category}
          onCategoryChange={handleCategoryChange}
          resultCount={filteredSites.length}
        />
      </div>

      {/* Heritage grid */}
      <HeritageGrid sites={displayedSites} onReset={handleReset} />

      {/* Pagination controls — only show in default (non-filtered) view */}
      {(hasMore || canCollapse) && (
        <div className="flex justify-center pt-2">
          {hasMore && (
            <Button
              variant="outline"
              size="md"
              iconRight={<Icon name="chevron-down" size="sm" />}
              onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
            >
              Show More ({filteredSites.length - visibleCount} remaining)
            </Button>
          )}
          {canCollapse && !hasMore && (
            <Button
              variant="ghost"
              size="md"
              iconRight={<Icon name="chevron-down" size="sm" className="rotate-180" />}
              onClick={() => setVisibleCount(PAGE_SIZE)}
            >
              Show Less
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default InteractiveSites;
