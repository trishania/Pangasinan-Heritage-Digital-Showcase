/**
 * ORGANISM: Footer
 * ----------------
 * Site-wide footer with attribution, navigation links, contact info.
 * Uses: Icon + Typography + Button atoms, NavigationItem molecule.
 */

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/atoms/Icon";
import { Heading, Body } from "@/components/atoms/Typography";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Heritage Sites", href: "/#sites" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const Footer: React.FC = () => (
  <footer
    role="contentinfo"
    className="mt-auto text-neutral-200"
    style={{ background: "linear-gradient(180deg, #2d4625 0%, #1e3019 100%)" }}
    aria-label="Site footer"
  >
    <div className="container-site py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <Image
                src="/logo/PHLOGO.png"
                alt="Pangasinan Heritage Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <Heading as="span" size="xs" className="block text-white font-bold">
                Pangasinan
              </Heading>
              <span className="text-[11px] font-medium uppercase tracking-widest" style={{ color: "#ADC981" }}>
                Heritage
              </span>
            </div>
          </div>
          <Body size="sm" className="leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            A digital initiative by the Pangasinan Provincial Tourism Office to promote
            cultural awareness and tourism for the province&#39;s most iconic heritage sites.
          </Body>
          {/* Social / contact icons */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="mailto:tourism@pangasinan.gov.ph"
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}
              aria-label="Email Pangasinan Tourism"
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(173,201,129,0.2)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
            >
              <Icon name="mail" size="sm" />
            </a>
            <a
              href="tel:+6375555-0100"
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}
              aria-label="Call Pangasinan Tourism"
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(173,201,129,0.2)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
            >
              <Icon name="phone" size="sm" />
            </a>
          </div>
        </div>

        {/* Navigation column */}
        <nav aria-label="Footer navigation">
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Explore
          </h3>
          <ul className="space-y-2.5" role="list">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#ADC981")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Info column */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Contact
          </h3>
          <address className="not-italic space-y-3">
            <div className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
              <Icon name="map-pin" size="sm" className="mt-0.5 shrink-0" style={{ color: "#ADC981" }} />
              <span>Lingayen Capitol Complex,<br />Lingayen, Pangasinan 2401</span>
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
              <Icon name="phone" size="sm" className="shrink-0" style={{ color: "#ADC981" }} />
              <a href="tel:+6375555-0100" className="hover:text-white transition-colors">
                (075) 555-0100
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
              <Icon name="mail" size="sm" className="shrink-0" style={{ color: "#ADC981" }} />
              <a href="mailto:tourism@pangasinan.gov.ph" className="hover:text-white transition-colors">
                tourism@pangasinan.gov.ph
              </a>
            </div>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.35)" }}>
        <p>
          © {new Date().getFullYear()} Pangasinan Provincial Tourism Office. All rights reserved.
        </p>
        <p className="text-center sm:text-right">
          Web Developer & Web Designer:{" "}
          <a
            href="https://www.facebook.com/trishaniaaa.marcilla"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            style={{ color: "#ADC981" }}
          >
            Trishania Marcilla
          </a>
          {" • "}
          <a
            href="mailto:mtrishania@gmail.com"
            className="hover:text-white transition-colors"
          >
            mtrishania@gmail.com
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
