/**
 * SECTION: HeroSection
 * --------------------
 * Full-viewport hero with headline, sub-copy, and two CTA buttons.
 * Uses gradient-hero utility + parallax-light fade animation on mount.
 */

"use client";

import React, { useEffect, useState } from "react";
import { Heading, Body }              from "@/components/atoms/Typography";
import { Button }                     from "@/components/atoms/Button";
import { Icon }                       from "@/components/atoms/Icon";
import { LogoImage }                  from "@/components/atoms/LogoImage";

export const HeroSection: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Triggers fade-in animation on mount
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

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
        <div
          className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 relative"
          style={{
            opacity:    visible ? 1 : 0,
            transform:  visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          {/* Faded Background Logo Watermark */}
          <div className="absolute inset-x-0 -top-10 bottom-0 flex items-center justify-center -z-10 pointer-events-none select-none opacity-50">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative">
              <LogoImage
                src="/logo/PHLOGO.png"
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

          {/* Stats row */}
          <div
            className="flex flex-col xs:flex-row justify-center gap-6 xs:gap-10 pt-6"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s 0.3s ease-out" }}
          >
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

      {/* ── Scroll indicator ────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <Icon name="chevron-down" size="lg" className="text-primary-600/60" />
      </div>
    </section>
  );
};

export default HeroSection;
