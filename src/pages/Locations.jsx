import React from 'react';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import TextReveal from '../components/anim/TextReveal';
import Reveal from '../components/anim/Reveal';
import PageCTA from '../components/PageCTA';
import RichTextRenderer from '../components/RichTextRenderer';
import BannerDrawBorder from '../components/anim/BannerDrawBorder';
import BlueprintWrapper from '../components/BlueprintWrapper';
export default function Locations() {
  const { locations } = useCMS();

  // Find primary HQ or default
  const primaryHQ = locations.find((l) => l.is_primary) || locations[0] || {
    name: 'COIMBATORE HQ',
    type: 'GLOBAL HEADQUARTERS',
    address: `2WVM+H7X, Nataraj Nagar, P and T Colony\nKoundampalayam, Coimbatore, Tamil Nadu 641030, India`,
    email: 'contact@smrikaam.com',
    phone: '+91 91506 84601',
    description: `Core engineering laboratory, solution architecture pod, and global delivery center for Industrial IoT, Enterprise AI, and Cloud Modernization.`
  };

  const otherLocations = locations.filter((l) => l.id !== primaryHQ.id);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 space-y-16">
        {/* Page Banner */}
        <div id="overview" className="space-y-4" data-scroll-label="OVERVIEW">
          <div className="page-title-surface relative z-10 border border-border p-6 sm:p-8 md:p-12 overflow-hidden">
            <BannerDrawBorder />
            <div className="flex items-center justify-between mb-4">
              <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-accent)] uppercase tracking-[0.2em] font-semibold">
                GLOBAL DELIVERY CENTERS
              </div>
              <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-text-muted)] border border-[var(--color-border)] px-3 py-1 bg-black/[0.02] dark:bg-white/[0.03]">
                COIMBATORE HQ
              </div>
            </div>

            <TextReveal
              text="HEADQUARTERS & ENGINEERING LABS."
              as="h1"
              className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--color-text)] leading-[0.96] mb-4"
            />
            <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[var(--color-text-secondary)] max-w-3xl border-l-2 border-[var(--color-accent)] pl-4 font-normal leading-[1.6]">
              Our engineering headquarters houses core technology teams, R&D labs, and testing infrastructure for IIoT and enterprise AI systems.
            </p>
          </div>
        </div>

        {/* Primary HQ Card & Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7">
            <Reveal>
              <BlueprintWrapper className="p-8 md:p-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-accent shrink-0" strokeWidth={1.5} />
                      <span className="tag tag-accent text-[12px]">GLOBAL HEADQUARTERS</span>
                    </div>
                  </div>

                  <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-text mb-3">
                    {primaryHQ.name || 'COIMBATORE HQ'}
                  </h2>
                  <div className="label-accent mb-6">
                    {primaryHQ.type || 'PRIMARY TECHNOLOGY & DELIVERY CENTER'}
                  </div>

                  <a
                    href="https://maps.app.goo.gl/kViWRBkDBqauRi8z7?g_st=ac"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open SMRIKAAM Technologies location in Google Maps"
                    className="space-y-4 text-[14px] md:text-[15px] text-text-muted border-t border-border pt-6 leading-[1.55] block group/address cursor-pointer"
                  >
                    <div className="text-text font-semibold text-base group-hover/address:text-accent transition-colors">
                      SMRIKAAM Technologies
                    </div>
                    <div className="whitespace-pre-line group-hover/address:text-text transition-colors">
                      2WVM+H7X, Nataraj Nagar, P and T Colony
                      Koundampalayam, Coimbatore, Tamil Nadu 641030, India
                    </div>
                    {primaryHQ.description && (
                      <div className="pt-2 text-[14px] md:text-[15px] text-text-muted font-normal">
                        <RichTextRenderer content={primaryHQ.description} />
                      </div>
                    )}
                  </a>
                </div>

                <div className="pt-6 border-t border-border mt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-[13px]">
                  <a href={`mailto:${primaryHQ.email || 'contact@smrikaam.com'}`} className="text-accent font-semibold hover:underline flex items-center gap-1.5">
                    <Mail className="w-4 h-4" /> {primaryHQ.email || 'contact@smrikaam.com'}
                  </a>
                  <a href={`tel:${(primaryHQ.phone || '+91 91506 84601').replace(/\s+/g, '')}`} className="text-accent font-semibold hover:underline flex items-center gap-1.5">
                    <Phone className="w-4 h-4" /> {primaryHQ.phone || '+91 91506 84601'}
                  </a>
                </div>
              </BlueprintWrapper>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <Reveal index={1}>
              <BlueprintWrapper className="p-8 bg-bg/95 backdrop-blur-md">
                <div className="label-accent mb-2">ENTERPRISE DELIVERY</div>
                <h3 className="font-heading text-xl font-bold uppercase text-text mb-3">
                  SINGLE-POINT ACCOUNTABILITY
                </h3>
                <p className="text-[15px] text-text-muted leading-[1.65] font-normal">
                  All client projects—from initial architectural discovery and telemetry pilot runs to production scaling—are engineered, governed, and supported directly by our senior team in Coimbatore.
                </p>
              </BlueprintWrapper>
            </Reveal>

            <Reveal index={2}>
              <BlueprintWrapper className="p-8 bg-bg/95 backdrop-blur-md">
                <div className="label-accent mb-2">ENGAGEMENT SLA</div>
                <h3 className="font-heading text-xl font-bold uppercase text-text mb-3">
                  24 BUSINESS HOUR RESPONSE
                </h3>
                <p className="text-[15px] text-text-muted leading-[1.65] font-normal">
                  Submit your business or technical challenge. Our solution architects will conduct a feasibility review and schedule a direct technical strategy session.
                </p>
              </BlueprintWrapper>
            </Reveal>
          </div>
        </div>

        {/* Additional Regional Centers if present in CMS */}
        {otherLocations.length > 0 && (
          <div className="mb-16">
            <div className="label-accent mb-2">
              REGIONAL CENTERS
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-text mb-8 border-b border-border pb-4">
              ADDITIONAL TECHNOLOGY HUBS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherLocations.map((loc, idx) => (
                <Reveal key={loc.id || idx} index={idx}>
                  <BlueprintWrapper className="p-8 flex flex-col justify-between h-full group hover:border-accent">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-accent shrink-0" strokeWidth={1.5} />
                          <span className="tag tag-accent font-mono text-[12px]">{loc.type || 'REGIONAL HUB'}</span>
                        </div>
                      </div>
                      <h3 className="font-heading text-xl font-bold uppercase text-text mb-2">
                        {loc.name}
                      </h3>
                      <div className="text-text-muted text-[14px] leading-relaxed font-normal whitespace-pre-line mb-4">
                        <RichTextRenderer content={loc.address} />
                      </div>
                    </div>
                  </BlueprintWrapper>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div id="cta" data-scroll-label="ENGAGEMENT">
          <PageCTA
            title="VISIT OUR ENGINEERING LABS OR BOOK A STRATEGY SESSION"
            description="Connect directly with our lead solution architects in Coimbatore. Select your preferred slot and project details."
            buttonText="BOOK A STRATEGY CALL"
            secondaryButtonText="CONTACT OUR TEAM"
            secondaryButtonPath="/contact"
          />
        </div>
      </div>
    </div>
  );
}
