/**
 * SECTION: ContactSection
 * -----------------------
 * Contact / footer CTA section with office details.
 */

import React from "react";
import { Heading, Body } from "@/components/atoms/Typography";
import { Button }        from "@/components/atoms/Button";
import { Icon }          from "@/components/atoms/Icon";

export const ContactSection: React.FC = () => (
  <section
    id="contact"
    aria-labelledby="contact-heading"
    className="section"
    style={{ background: "linear-gradient(180deg, #F3E7D7 0%, #F7DED3 50%, #F3C9C0 100%)" }}
  >
    <div className="container-site">
      {/* Section header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <Heading as="h2" id="contact-heading" size="xl" className="text-neutral-900 mb-4">
          Plan Your Visit
        </Heading>
        <Body size="base" muted>
          Ready to experience Pangasinan&rsquo;s natural wonders and cultural heritage first-hand?
          Get in touch with the Pangasinan Provincial Tourism Office.
        </Body>
      </div>

      {/* Contact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          {
            icon:  "map-pin" as const,
            title: "Visit Us",
            info:  "Lingayen Capitol Complex, Lingayen, Pangasinan 2401",
            action: undefined,
          },
          {
            icon:  "phone"   as const,
            title: "Call Us",
            info:  "(075) 555-0100",
            action: { label: "Call now", href: "tel:+6375555-0100" },
          },
          {
            icon:  "mail"    as const,
            title: "Email Us",
            info:  "tourism@pangasinan.gov.ph",
            action: { label: "Send email", href: "mailto:tourism@pangasinan.gov.ph" },
          },
        ].map(({ icon, title, info, action }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center p-6 rounded-2xl shadow-soft hover:shadow-card transition-all duration-200 gap-4"
            style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(10px)" }}
          >
            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
              <Icon name={icon} size="md" className="text-primary-600" />
            </div>
            <div>
              <p className="font-semibold text-neutral-800 mb-1">{title}</p>
              <Body size="sm" muted>{info}</Body>
            </div>
            {action && (
              <a href={action.href}>
                <Button variant="secondary" size="sm">
                  {action.label}
                </Button>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
