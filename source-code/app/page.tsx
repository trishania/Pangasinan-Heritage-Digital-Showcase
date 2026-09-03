/**
 * Homepage — root page for the Pangasinan Heritage Digital Showcase.
 *
 * Sections:
 *  1. HeroSection           — full-viewport hero with CTAs (Server Component)
 *  2. Heritage Sites section — static header + InteractiveSites client island
 *  3. AboutSection          — lazy-loaded below-fold (dynamic import)
 *  4. ContactSection        — lazy-loaded below-fold (dynamic import)
 *
 * Performance:
 *  - This page is a Server Component — zero client JS for the page shell
 *  - InteractiveSites owns all search/filter/pagination state ("use client")
 *  - AboutSection and ContactSection deferred via dynamic() — below the fold
 */

import dynamic from "next/dynamic";
import { HeroSection }      from "@/components/sections/HeroSection";
import { InteractiveSites } from "@/components/organisms/InteractiveSites";
import { Heading, Body }    from "@/components/atoms/Typography";
import { Icon }             from "@/components/atoms/Icon";
import { HERITAGE_SITES }   from "@/data/heritageSites";

// Lazy-load below-fold sections — not visible on initial viewport
const AboutSection   = dynamic(() => import("@/components/sections/AboutSection"),   { ssr: true });
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"), { ssr: true });

export default function HomePage() {
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
          {/* Section header — pure static HTML, no client JS */}
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
              Discover Pangasinan&rsquo;s most beloved destinations. Search or filter by
              category to find your next adventure.
            </Body>
          </div>

          {/* Client island: search + filter + paginated grid */}
          <InteractiveSites sites={HERITAGE_SITES} />
        </div>
      </section>

      {/* 3. About — deferred below fold */}
      <AboutSection />

      {/* 4. Contact — deferred below fold */}
      <ContactSection />
    </>
  );
}
