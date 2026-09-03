/**
 * ATOM: HeroCTAs
 * --------------
 * Client island containing ONLY the two scroll-to-section CTA buttons.
 * Isolated here so the parent HeroSection can remain a Server Component,
 * allowing the h1 LCP element to render without waiting for JS hydration.
 */

"use client";

import React from "react";
import { Button } from "@/components/atoms/Button";
import { Icon }   from "@/components/atoms/Icon";

export const HeroCTAs: React.FC = () => (
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
);

export default HeroCTAs;
