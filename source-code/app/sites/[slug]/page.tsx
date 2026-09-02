/**
 * /app/sites/[slug]/page.tsx — Heritage Site Detail Page
 * Server Component — compatible with `output: "export"`.
 * generateStaticParams tells Next.js which slugs to pre-render.
 */

import React             from "react";
import type { Metadata } from "next";
import { notFound }      from "next/navigation";
import Link              from "next/link";
import { HERITAGE_SITES }              from "@/data/heritageSites";
import { Heading, Body, TagLabel }     from "@/components/atoms/Typography";
import { Button }                      from "@/components/atoms/Button";
import { Icon }                        from "@/components/atoms/Icon";
import { HeritageImage }               from "@/components/atoms/Image";

// ── Static path generation ────────────────────────────────────────────────────
export async function generateStaticParams() {
  return HERITAGE_SITES.map((site) => ({ slug: site.slug }));
}

// ── Per-page SEO metadata ─────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const site = HERITAGE_SITES.find((s) => s.slug === params.slug);
  if (!site) return { title: "Site Not Found" };
  return {
    title:       site.name,
    description: site.description.slice(0, 160),
    openGraph: {
      title:       site.name,
      description: site.description.slice(0, 160),
      images:      [{ url: site.imageUrl }],
    },
  };
}

// ── Page component ────────────────────────────────────────────────────────────
export default function SiteDetailPage({ params }: { params: { slug: string } }) {
  const site = HERITAGE_SITES.find((s) => s.slug === params.slug);
  if (!site) notFound();

  // TypeScript guard — notFound() throws, so site is defined after this point
  const s = site!;

  const categoryColor: Record<string, "primary" | "accent" | "sage" | "cream"> = {
    Coastal:    "sage",
    Historical: "cream",
    Natural:    "primary",
    Cultural:   "accent",
  };

  return (
    <article aria-labelledby="site-title">
      {/* ── Hero Image ──────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden bg-neutral-200">
        <HeritageImage
          src={s.imageUrl}
          alt={s.imageAlt}
          aspectRatio="21/9"
          fill
          priority
          sizes="100vw"
          wrapperClassName="w-full"
        />
        <div className="absolute inset-0 gradient-card" aria-hidden="true" />
      </div>

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="container-site py-10 md:py-14 max-w-3xl">
        {/* Back link */}
        <Link
          href="/#sites"
          className="inline-flex items-center gap-2 text-sm text-primary-700 font-semibold hover:text-primary-900 mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
        >
          <Icon name="arrow-left" size="sm" />
          Back to Heritage Sites
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <TagLabel color={categoryColor[s.category]}>{s.category}</TagLabel>
          <div className="flex items-center gap-1.5 text-sm text-neutral-400">
            <Icon name="map-pin" size="sm" className="text-primary-500" />
            {s.location}
          </div>
        </div>

        <Heading as="h1" id="site-title" size="2xl" className="text-neutral-900 mb-4">
          {s.name}
        </Heading>

        <Body size="lg" className="text-neutral-700 leading-relaxed mb-8">
          {s.description}
        </Body>

        {s.visitInfo && (
          <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-xl border border-primary-100 mb-8">
            <Icon name="info" size="md" className="text-primary-600 shrink-0" />
            <Body size="sm" className="text-primary-800 font-medium">{s.visitInfo}</Body>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <Link href="/#sites">
            <Button variant="outline" size="md" iconLeft={<Icon name="arrow-left" size="sm" />}>
              All Sites
            </Button>
          </Link>
          {/* Get Directions — opens Google Maps in a new tab */}
          <a
            href={s.mapsUrl && !s.mapsUrl.endsWith("...") ? s.mapsUrl : "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Get directions to ${s.name} on Google Maps`}
          >
            <Button
              variant="primary"
              size="md"
              iconRight={<Icon name="map-pin" size="sm" />}
            >
              Get Directions
            </Button>
          </a>
        </div>
      </div>
    </article>
  );
}
