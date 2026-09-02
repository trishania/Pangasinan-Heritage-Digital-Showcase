"use client";

import React, { useState, useMemo } from "react";
import { HeroSection }               from "@/components/sections/HeroSection";
import { AboutSection }              from "@/components/sections/AboutSection";
import { ContactSection }            from "@/components/sections/ContactSection";
import { SearchForm }                from "@/components/molecules/SearchForm";
import { HeritageGrid }              from "@/components/organisms/HeritageGrid";
import { Heading, Body }             from "@/components/atoms/Typography";
import { Icon }                      from "@/components/atoms/Icon";
import { HERITAGE_SITES }            from "@/data/heritageSites";
import type { HeritageCategory }     from "@/components/molecules/HeritageCard";

/**
 * Homepage — root page for the Pangasinan Heritage Digital Showcase.
 *
 * Sections:
 *  1. HeroSection           — full-viewport hero with CTAs
 *  2. Heritage Sites section — SearchForm + HeritageGrid (filterable)
 *  3. AboutSection          — mission / highlights
 *  4. ContactSection        — visit / contact cards
 *
 * Performance:
 *  - "use client" only on this page for interactive filtering
 *  - All below-fold images lazy-loaded via HeritageCard[lazy=true]
 *  - Font preloaded via layout.tsx
 */

export default function HomePage() {
  const [query,    setQuery]    = useState("");
  const [category, setCategory] = useState<HeritageCategory | "All">("All");

  // Derived: filter sites by query AND category
  const filteredSites = useMemo(() => {
    const q = query.toLowerCase().trim();
    return HERITAGE_SITES.filter((site) => {
      const matchesQuery =
        !q ||
        site.name.toLowerCase().includes(q) ||
        site.location.toLowerCase().includes(q) ||
        site.description.toLowerCase().includes(q) ||
        site.category.toLowerCase().includes(q);

      const matchesCategory =
        category === "All" || site.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  const handleReset = () => {
    setQuery("");
    setCategory("All");
  };

  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Heritage Sites */}
      <section
        id="sites"
        aria-labelledby="sites-heading"
        className="section bg-neutral-50"
      >
        <div className="container-site space-y-8">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 mb-4">
              <Icon name="compass" size="sm" className="text-primary-600" />
              <span className="text-xs font-semibold text-primary-700 uppercase tracking-widest">
                Explore the Province
              </span>
            </div>
            <Heading as="h2" id="sites-heading" size="xl" className="text-neutral-900 mb-3">
              Pangasinan Heritage Sites
            </Heading>
            <Body size="base" muted>
              Discover three of Pangasinan&rsquo;s most beloved destinations. Search or filter by
              category to find your next adventure.
            </Body>
          </div>

          {/* Search & filter */}
          <div className="max-w-3xl mx-auto">
            <SearchForm
              query={query}
              onQueryChange={setQuery}
              selectedCategory={category}
              onCategoryChange={setCategory}
              resultCount={filteredSites.length}
            />
          </div>

          {/* Heritage grid */}
          <HeritageGrid
            sites={filteredSites}
            onReset={handleReset}
          />
        </div>
      </section>

      {/* 3. About */}
      <AboutSection />

      {/* 4. Contact */}
      <ContactSection />
    </>
  );
}
