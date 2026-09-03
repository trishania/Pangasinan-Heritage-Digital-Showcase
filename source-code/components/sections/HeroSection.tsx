/**
 * SECTION: HeroSection
 * --------------------
 * Full-viewport hero with headline, sub-copy, and two CTA buttons.
 * Pure CSS fade-in animation — no useState/useEffect needed.
 * Runs as a Server Component (Client Components are the CTA buttons only
 * via the Button atom which already handles its own interactivity).
 *
 * NOTE: The scroll-to-section onClick handlers on Button require "use client".
 * We keep "use client" here because of the onClick scroll handlers on the
 * two CTA buttons. The animation is now CSS-only (no JS timer).
 */

"use client";

import React from "react";
import { Heading, Body }  from "@/components/atoms/Typography";
import { Button }         from "@/components/atoms/Button";
import { Icon }           from "@/components/atoms/Icon";
import { LogoImage }      from "@/components/atoms/LogoImage";

export const HeroSection: React.FC = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative gradient-hero overflow-hidden min-h-[92svh] flex items-center"
    >
      {/* ── Background decorative elements ─────────────────────── */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right blush glow */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, #F3C9C0 0%, transparent 70%)" }} />
        {/* Bottom-left sage glow */}
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, #ADC981 0%, transparent 70%)" }} />
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #619853 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* ── Hero content ────────────────────────────────────────── */}
      <div className="container-site relative z-10 py-20 md:py-28">
        {/* CSS fade-slide-up on mount — no JS timer needed */}
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 relative animate-hero">

          {/* Faded Background Logo Watermark */}
          <div className="absolute inset-x-0 -top-10 bottom-0 flex items-center justify-center -z-10 pointer-events-none select-none opacity-50">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative">
              <LogoImage
                src="https://trishania.github.io/Pangasinan-Heritage-Digital-Showcase/logo/PHLOGO.webp"
                alt="Pangasinan Heritage Logo Watermark"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Pre-heading badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm"
            style={{ background: "rgba(97,152,83,0.12)", borderColor: "rgba(97,152,83,0.25)" }}>
            <Icon name="compass" size="sm" className="text-primary-700" />
            <span className="text-sm font-semibold text-primary-800 uppercase tracking-widest">
              Pangasinan Province, Philippines
            </span>
          </div>

          {/* Main heading */}
          <Heading
            as="h1"
            id="hero-heading"
            size="3xl"
            className="leading-tight text-neutral-900 drop-shadow-sm"
          >
            Discover the Heritage<br className="hidden sm:block" /> of Pangasinan
          </Heading>

          {/* Sub-copy */}
          <Body
            size="lg"
            className="text-neutral-700 max-w-xl mx-auto leading-relaxed"
          >
            From the jeweled islets of Hundred Islands to the storied Cape Bolinao
            Lighthouse and the soothing springs of Balungao — explore centuries of
            natural and cultural splendor.
          </Body>

          {/* CTA group */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button
              variant="primary"
              size="lg"
              iconRight={<Icon name="arrow-right" size="md" />}
              onClick={() =>
                document.getElementById("sites")?.scrollIntoView({ behavior: "smooth" })
              }
              className="shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
            >
              Explore Heritage Sites
            </Button>
            <Button
              variant="ghost"
              size="lg"
              iconLeft={<Icon name="info" size="md" />}
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-primary-800 border-primary-300 hover:bg-primary-50/60 w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>

          {/* Stats row — slightly delayed fade-in */}
          <div className="flex flex-col xs:flex-row justify-center gap-6 xs:gap-10 pt-6 animate-hero-delayed">
            {[
              { value: "23+", label: "Heritage Sites"   },
              { value: "40+", label: "Islands (HINP)"   },
              { value: "119", label: "Years of History" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold font-display text-primary-700">{value}</div>
                <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator — CSS-only bounce ──────────────────── */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 scroll-bounce"
      >
        <Icon name="chevron-down" size="lg" className="text-primary-600/60" />
      </div>
    </section>
  );
};

export default HeroSection;
