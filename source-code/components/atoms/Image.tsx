/**
 * ATOM: Image
 * -----------
 * Wrapper around Next.js <Image> with:
 *   - Lazy loading (default loading="lazy")
 *   - Aspect-ratio container for CLS prevention
 *   - Accessible alt text enforcement
 *   - Graceful fallback on error
 *   - Blur placeholder for perceived performance
 *
 * Usage: All images in Heritage Cards, hero sections, team/about sections.
 * Breakpoints:
 *   - Fills its container at all breakpoints
 *   - Aspect ratio maintained via pt-[<ratio>] technique
 *   - Explicit sizes prop for responsive image srcset
 */

"use client";

import React, { useState } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { cn } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────────────────────────
export type AspectRatio = "1/1" | "4/3" | "16/9" | "3/2" | "2/3" | "21/9";

interface HeritageImageProps extends Omit<NextImageProps, "alt"> {
  /** Required alt text — enforced at type level */
  alt: string;
  /** Predefined aspect ratio — creates stable container to prevent CLS */
  aspectRatio?: AspectRatio;
  /** Additional wrapper class */
  wrapperClassName?: string;
  /** Optional caption rendered below the image */
  caption?: string;
  /** Fallback background color while loading or on error */
  fallbackBg?: string;
}

// ── Aspect ratio padding map ──────────────────────────────────────────────────
const aspectMap: Record<AspectRatio, string> = {
  "1/1":  "pb-[100%]",
  "4/3":  "pb-[75%]",
  "16/9": "pb-[56.25%]",
  "3/2":  "pb-[66.67%]",
  "2/3":  "pb-[150%]",
  "21/9": "pb-[42.86%]",
};

// ── Component ─────────────────────────────────────────────────────────────────
/**
 * HeritageImage Atom
 *
 * @example
 * <HeritageImage
 *   src="/images/hundred-islands.jpg"
 *   alt="Aerial view of Hundred Islands National Park, Alaminos, Pangasinan"
 *   aspectRatio="16/9"
 *   fill
 *   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
 *   caption="Hundred Islands National Park, Alaminos"
 * />
 */
export const HeritageImage: React.FC<HeritageImageProps> = ({
  alt,
  aspectRatio    = "16/9",
  wrapperClassName,
  caption,
  fallbackBg     = "#e5e5e5",
  className,
  sizes          = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={cn("w-full", wrapperClassName)}>
      {/* Aspect-ratio container prevents CLS */}
      <div className={cn("relative w-full overflow-hidden", aspectMap[aspectRatio])}>
        {hasError ? (
          // Graceful fallback
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: fallbackBg }}
            role="img"
            aria-label={alt}
          >
            <span className="text-neutral-400 text-sm font-medium">Image unavailable</span>
          </div>
        ) : (
          <NextImage
            alt={alt}
            fill
            // Next.js forbids setting loading="lazy" when priority is true
            loading={priority ? undefined : "lazy"}
            priority={priority}
            sizes={sizes}
            className={cn(
              "object-cover transition-transform duration-500 group-hover:scale-105",
              className,
            )}
            onError={() => setHasError(true)}
            {...props}
          />
        )}
      </div>

      {/* Caption */}
      {caption && (
        <figcaption className="mt-1.5 text-xs text-neutral-400 italic px-1">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default HeritageImage;
