/**
 * SECTION: AboutSection
 * ---------------------
 * About / mission section for the Pangasinan Heritage platform.
 */

import React from "react";
import { Heading, Body, TagLabel } from "@/components/atoms/Typography";
import { Icon } from "@/components/atoms/Icon";

const HIGHLIGHTS = [
  {
    icon: "waves" as const,
    title: "Coastal Wonders",
    desc: "Pristine beaches and marine sanctuaries along the Lingayen Gulf & South China Sea.",
    color: "sage" as const,
  },
  {
    icon: "mountain" as const,
    title: "Natural Springs",
    desc: "Mineral-rich thermal springs nestled in the Caraballo foothills of eastern Pangasinan.",
    color: "primary" as const,
  },
  {
    icon: "lighthouse" as const,
    title: "Historic Landmarks",
    desc: "Century-old lighthouses and colonial-era sites that shaped the province's maritime story.",
    color: "cream" as const,
  },
];

export const AboutSection: React.FC = () => (
  <section
    id="about"
    aria-labelledby="about-heading"
    className="section"
    style={{ background: "linear-gradient(180deg, #ffffff 0%, #F3E7D7 100%)" }}
  >
    <div className="container-site">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — copy */}
        <div className="space-y-6">
          <TagLabel color="primary">About the Initiative</TagLabel>
          <Heading as="h2" id="about-heading" size="xl" className="text-neutral-900">
            Preserving Pangasinan&rsquo;s Rich Heritage for Future Generations
          </Heading>
          <Body size="base" muted>
            The Pangasinan Heritage Digital Showcase is a digital initiative by the
            Pangasinan Provincial Tourism Office to promote cultural awareness, responsible tourism,
            and community pride across the province&rsquo;s most iconic natural and historical sites.
          </Body>
          <Body size="base" muted>
            From the emerald islets of Hundred Islands National Park one of only&nbsp;two
            national parks in the Philippines located in open water to the lighthouse that
            guided seafarers for over a century, Pangasinan&rsquo;s heritage is as diverse as its
            people.
          </Body>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-4 pt-2">
            {[
              "WCAG 2.1 AA Compliant",
              "Mobile-First Design",
              "JAMstack Architecture",
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 bg-primary-50 px-3 py-1.5 rounded-full"
              >
                <Icon name="star" size="xs" className="text-primary-500" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right — highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
          {HIGHLIGHTS.map(({ icon, title, desc, color }) => (
            <div
              key={title}
              className="flex items-start gap-4 p-5 rounded-2xl border hover:shadow-soft transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(8px)",
                borderColor: color === "sage" ? "#D4DCAE" : color === "primary" ? "#ADC981" : "#F3C9C0",
              }}
            >
              <div className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-${color}-50`}>
                <Icon name={icon} size="md" className={`text-${color}-500`} />
              </div>
              <div>
                <p className="font-semibold text-neutral-800 mb-1">{title}</p>
                <Body size="sm" muted>{desc}</Body>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
