/**
 * MOLECULE: HeritageCard
 * ----------------------
 * Displays a single heritage site as a rich, interactive card.
 * Combines: HeritageImage (atom) + Heading + Body + TagLabel + Button + Icon atoms.
 *
 * Usage: Used exclusively inside HeritageGrid organism to display tourist site previews.
 * Each card represents one Pangasinan heritage destination.
 *
 * Responsive Logic:
 *   — 375px (mobile):  Full-width single column; image 16/9; compact padding
 *   — 768px (tablet):  2-column grid; card height auto
 *   — 1024px+ (desktop): 3-column grid; hover scale + shadow elevation
 *
 * Accessibility:
 *   - article landmark with aria-label
 *   - All images require meaningful alt text
 *   - "Explore" button links to site detail
 *   - Focus ring visible on card-level links
 */

import React from "react";
import Link from "next/link";
import { HeritageImage } from "@/components/atoms/Image";
import { Heading, Body, TagLabel } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { cn } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────────────────────────
export type HeritageCategory = "Coastal" | "Historical" | "Natural" | "Cultural";

export interface HeritageSite {
  id: string;
  name: string;
  location: string;         // e.g. "Alaminos, Pangasinan"
  category: HeritageCategory;
  description: string;      // ~2 sentence teaser
  imageUrl: string;
  imageAlt: string;
  visitInfo?: string;       // e.g. "Open daily, 6AM – 5PM"
  rating?: number;          // 1–5
  slug: string;             // for internal routing
  mapsUrl?: string;         // Google Maps link placeholder
}

interface HeritageCardProps {
  site: HeritageSite;
  className?: string;
  /** Lazy-load the card image (pass false for above-the-fold cards) */
  lazy?: boolean;
}

// ── Category color map ────────────────────────────────────────────────────────
const categoryColor: Record<HeritageCategory, "primary" | "accent" | "sage" | "cream"> = {
  Coastal: "sage",
  Historical: "cream",
  Natural: "primary",
  Cultural: "accent",
};

// ── Rating stars helper ───────────────────────────────────────────────────────
function RatingStars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const empty = 5 - full;
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: full }).map((_, i) => (
        <Icon key={`f-${i}`} name="star" size="xs" className="text-sand-500 fill-sand-400" />
      ))}
      {Array.from({ length: empty }).map((_, i) => (
        <Icon key={`e-${i}`} name="star" size="xs" className="text-neutral-300" />
      ))}
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────
/**
 * Heritage Card Molecule
 *
 * @example
 * <HeritageCard site={hundredIslands} lazy={false} />
 */
export const HeritageCard: React.FC<HeritageCardProps> = ({
  site,
  className,
  lazy = true,
}) => {
  return (
    <article
      className={cn(
        "group card flex flex-col",
        "hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.18)] hover:-translate-y-1",
        "transition-all duration-300 ease-out",
        "focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2",
        className,
      )}
      aria-label={`Heritage site: ${site.name}`}
    >
      {/* ── Card Image ──────────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <HeritageImage
          src={site.imageUrl}
          alt={site.imageAlt}
          aspectRatio="16/9"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={!lazy}
          wrapperClassName="rounded-t-2xl overflow-hidden"
        />

        {/* Category badge overlay */}
        <div className="absolute top-3 left-3 z-10">
          <TagLabel color={categoryColor[site.category]}>
            {site.category}
          </TagLabel>
        </div>

        {/* Rating overlay */}
        {site.rating && (
          <div className="absolute top-3 right-3 z-10 glass rounded-full px-2 py-1">
            <RatingStars rating={site.rating} />
          </div>
        )}
      </div>

      {/* ── Card Body ───────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-4 md:p-5 gap-3">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-neutral-400">
          <Icon name="map-pin" size="xs" className="text-primary-500 shrink-0" />
          <span className="text-xs font-medium">{site.location}</span>
        </div>

        {/* Title */}
        <Heading as="h3" size="sm" className="text-neutral-900 line-clamp-2">
          {site.name}
        </Heading>

        {/* Description */}
        <Body size="sm" muted className="line-clamp-3 flex-1">
          {site.description}
        </Body>

        {/* Visit Info */}
        {site.visitInfo && (
          <div className="flex items-center gap-1.5 text-xs text-neutral-400">
            <Icon name="info" size="xs" className="shrink-0" />
            <span>{site.visitInfo}</span>
          </div>
        )}

        {/* CTA */}
        <div className="pt-2 border-t border-neutral-100">
          <Link
            href={`/sites/${site.slug}`}
            tabIndex={0}
            className="block focus-visible:outline-none"
            aria-label={`Explore ${site.name}`}
          >
            <Button
              variant="secondary"
              size="sm"
              fullWidth
              iconRight={<Icon name="arrow-right" size="sm" />}
              className="group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-200"
            >
              Explore Site
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default HeritageCard;
