import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ArrowUpRight, Cpu, Database, Cloud, ShieldCheck } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import BlueprintWrapper from '../components/BlueprintWrapper';
import TextReveal from '../components/anim/TextReveal';
import BannerDrawBorder from '../components/anim/BannerDrawBorder';
import Reveal from '../components/anim/Reveal';
import RichTextRenderer from '../components/RichTextRenderer';
import DecorativeSideCubes from '../components/visuals/DecorativeSideCubes';

export default function Locations() {
  const { locations: rawLocations } = useCMS() || {};

  const locations = useMemo(() => {
    if (!Array.isArray(rawLocations)) return [];
    return rawLocations;
  }, [rawLocations]);

  const primaryHQ = locations.length > 0 ? locations[0] : {
    name: 'COIMBATORE HQ',
    type: 'PRIMARY TECHNOLOGY & DELIVERY CENTER',
    address: 'No. 19, Nataraj Nagar, Koundampalayam\nCoimbatore, Tamil Nadu 641030, India',
    email: 'contact@smrikaam.com',
    phone: '+91 91506 84601',
    description: 'Our Coimbatore headquarters houses our core engineering teams, solutions architecture groups, and testing infrastructure for shop-floor IIoT and enterprise AI systems.'
  };

  const otherLocations = locations.length > 1 ? locations.slice(1) : [];

  const hqCapabilities = [
    {
      title: 'Industrial IoT & Edge R&D Lab',
      desc: 'Hardware integration, Modbus/OPC-UA signal parsing, and real-time machine telemetry testing.',
      icon: Cpu
    },
    {
      title: 'Data & Lakehouse Center',
      desc: 'High-throughput streaming ingestion, dbt pipelines, Snowflake/Databricks warehouse design.',
      icon: Database
    },
    {
      title: 'Enterprise AI & Agentic Lab',
      desc: 'Autonomous LLM agent pipelines, cognitive document OCR, and domain-tuned AI models.',
      icon: Cloud
    },
    {
      title: 'Global Delivery Operations',
      desc: '24/7 mission-critical platform monitoring, SLA governance, and enterprise cloud cutovers.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="relative z-10 pt-20 sm:pt-28 pb-20 sm:pb-32 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="relative mb-12">
        <DecorativeSideCubes leftSize={120} rightSize={140} leftTop="10%" rightTop="25%" />
        <div className="page-title-surface relative z-10 border border-border p-6 sm:p-8 md:p-12 overflow-hidden">
        <BannerDrawBorder />
        <div className="flex items-center justify-between mb-4">
          <div className="label-accent">
            GLOBAL HEADQUARTERS
          </div>
          <div className="type-meta border border-[var(--color-border)] px-3 py-1 bg-black/[0.02] dark:bg-white/[0.03]">
            COIMBATORE, INDIA
          </div>
        </div>

        <TextReveal
          text="ENGINEERING INTELLIGENCE FROM COIMBATORE."
          as="h1"
          className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--color-text)] leading-[0.96] mb-4"
        />
        <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[var(--color-text-secondary)] max-w-3xl border-l-2 border-[var(--color-accent)] pl-4 font-normal leading-[1.6]">
          Headquartered in Coimbatore, Tamil Nadu, India, SMRIKAAM Technologies LLP delivers production-grade Data, AI, Industrial IoT, and Cloud engineering solutions to enterprise clients worldwide.
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
                    SMRIKAAM Technologies LLP
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
                    <h3 className="font-heading text-2xl font-bold uppercase text-text mb-2 group-hover:text-accent transition-colors">
                      {loc.name}
                    </h3>
                    <p className="text-[15px] font-normal text-text-muted mb-4 whitespace-pre-line">
                      {loc.address}
                    </p>
                    {loc.description && (
                      <div className="text-[15px] font-normal text-text-muted leading-[1.65] mb-6">
                        <RichTextRenderer content={loc.description} />
                      </div>
                    )}
                  </div>
                  <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4 font-mono text-[13px]">
                    {loc.email && (
                      <a href={`mailto:${loc.email}`} className="text-accent font-semibold hover:underline flex items-center gap-1.5">
                        <Mail className="w-4 h-4" /> {loc.email}
                      </a>
                    )}
                    {loc.phone && (
                      <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="text-accent font-semibold hover:underline flex items-center gap-1.5">
                        <Phone className="w-4 h-4" /> {loc.phone}
                      </a>
                    )}
                  </div>
                </BlueprintWrapper>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {/* Primary HQ Core Capabilities */}
      <div className="mb-16">
        <div className="label-accent mb-2">
          COIMBATORE HUB LABS
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-text mb-8 border-b border-border pb-4">
          ENGINEERING &amp; R&amp;D CENTERS
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {hqCapabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <BlueprintWrapper key={idx} className="p-3.5 sm:p-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-2 sm:mb-4">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xs sm:text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-1 sm:mb-2 text-left truncate">
                  {cap.title}
                </h3>
                <p className="text-[10px] sm:text-[13px] md:text-sm font-normal text-text-muted leading-tight sm:leading-[1.5] line-clamp-3 sm:line-clamp-none">
                  {cap.desc}
                </p>
              </BlueprintWrapper>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <Reveal index={4}>
        <div id="cta" data-scroll-label="STRATEGY CALL">
          <BlueprintWrapper className="p-6 sm:p-8 md:p-12 text-center bg-bg/95 backdrop-blur-md">
            <div className="label-accent mb-2">ENGAGE ENGINEERS</div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-text mb-4">
              VISIT OR CONNECT WITH OUR COIMBATORE TEAM
            </h2>
            <p className="text-text-muted text-[15px] font-normal max-w-xl mx-auto mb-8 leading-[1.65]">
              Whether you want to test hardware in our IIoT lab or plan an enterprise cloud data lakehouse, our engineering leads are ready.
            </p>
            <Link to="/contact" className="btn btn-primary font-semibold uppercase tracking-wider text-[14px]">
              SCHEDULE A SESSION <ArrowUpRight className="w-4 h-4 ml-1" strokeWidth={1.5} />
            </Link>
          </BlueprintWrapper>
        </div>
      </Reveal>
    </div>
  );
}
