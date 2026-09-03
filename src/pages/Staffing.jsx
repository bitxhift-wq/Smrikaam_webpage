import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowUpRight, CheckCircle2, ShieldCheck, ChevronDown } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import BlueprintWrapper from '../components/BlueprintWrapper';
import TextReveal from '../components/anim/TextReveal';
import BannerDrawBorder from '../components/anim/BannerDrawBorder';
import Reveal from '../components/anim/Reveal';
import RichTextRenderer from '../components/RichTextRenderer';
import DecorativeSideCubes from '../components/visuals/DecorativeSideCubes';
import PageCTA from '../components/PageCTA';

export default function Staffing() {
  const [openFaq, setOpenFaq] = useState(null);
  const { staffing: rawStaffing } = useCMS() || {};

  const displayModels = useMemo(() => {
    if (!Array.isArray(rawStaffing)) return [];
    return rawStaffing;
  }, [rawStaffing]);

  const stats = [
    { num: '2,500+', label: 'Vetted Specialists' },
    { num: '72h', label: 'Avg. Time to Shortlist' },
    { num: '95%', label: 'Offer Acceptance' },
    { num: '40+', label: 'Enterprise Clients' }
  ];

  const verticals = ['Manufacturing', 'Energy & Utilities', 'Retail & E-Commerce', 'BFSI', 'Healthcare & Life Sciences', 'Logistics & Supply Chain', 'Automotive', 'Telecom', 'Media'];

  const processSteps = [
    { num: '1', name: 'Discovery', desc: 'We map your role, stack, team culture, and success criteria—usually in a single call.' },
    { num: '2', name: 'Sourcing', desc: 'We tap our pre-vetted talent pool and run targeted outreach across India.' },
    { num: '3', name: 'Screening', desc: 'Technical interviews, system-design tasks, and behavioural assessment by senior engineers.' },
    { num: '4', name: 'Onboarding', desc: 'We coordinate offer, paperwork, onboarding, and a 90-day check-in for every placement.' }
  ];

  const faqs = [
    {
      q: 'How fast can you shortlist candidates?',
      a: 'SMRIKAAM can typically present an initial shortlist based on the role, technology requirements, seniority, and engagement model. Timelines vary by skill availability and role complexity, with priority searches handled through an accelerated sourcing process.'
    },
    {
      q: 'Do you handle payroll and compliance for contract staff?',
      a: 'Yes. For applicable contract staffing engagements, SMRIKAAM can support payroll administration, statutory compliance, onboarding, documentation, and ongoing workforce coordination.'
    },
    {
      q: 'What technology areas do you specialise in?',
      a: 'Our staffing capabilities cover software engineering, AI and machine learning, data engineering, cloud and DevOps, cybersecurity, IoT, enterprise applications, analytics, and other specialised technology domains.'
    },
    {
      q: 'Can you build a dedicated offshore team for us?',
      a: 'Yes. We can help establish dedicated engineering teams aligned to your technology stack, delivery model, governance requirements, and business objectives, including ongoing team scaling and management support.'
    },
    {
      q: 'Do you offer a replacement guarantee?',
      a: 'Replacement terms depend on the engagement model and contractual agreement. Where applicable, replacement support can be provided for candidates who exit or are unable to continue within the agreed engagement period.'
    },
    {
      q: 'Which locations do you serve?',
      a: 'SMRIKAAM supports technology staffing and delivery requirements across India and international markets, subject to the specific role, engagement model, and client requirements.'
    }
  ];

  return (
    <div className="relative z-10 pt-20 sm:pt-28 pb-20 sm:pb-32 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div id="overview" data-scroll-label="STAFFING" className="relative mb-16">
        <DecorativeSideCubes leftSize={120} rightSize={140} leftTop="10%" rightTop="25%" />
        <div className="page-title-surface relative z-10 border border-border p-6 sm:p-8 md:p-12 overflow-hidden">
        <BannerDrawBorder />
        <div className="flex items-center justify-between mb-4">
          <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-accent)] uppercase tracking-[0.2em] font-semibold">
            ENTERPRISE TALENT &amp; SPECIALISED STAFFING
          </div>
          <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-text-muted)] border border-[var(--color-border)] px-3 py-1 bg-black/[0.02] dark:bg-white/[0.03]">
            ENGAGEMENT MODELS
          </div>
        </div>

        <TextReveal
          text="TECHNICAL TALENT. ENGINEERED FOR SPEED."
          as="h1"
          className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--color-text)] leading-[0.96] mb-4"
        />
        <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[var(--color-text-secondary)] max-w-3xl border-l-2 border-[var(--color-accent)] pl-4 font-normal leading-[1.6]">
          Temporary staffing, permanent placement, contract &amp; project-based pods, and executive search—across AI, Data, Cloud, DevOps, IIoT, and enterprise transformation.
        </p>
      </div>
      </div>

      {/* Key Stats (Preserved 4-Column Strip) */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-6 mb-12">
        {stats.map((s, idx) => (
          <BlueprintWrapper key={idx} className="p-2 sm:p-4 lg:p-6 text-center">
            <div className="font-heading font-bold text-base sm:text-2xl md:text-4xl text-accent mb-0.5 sm:mb-1">{s.num}</div>
            <div className="text-[8px] sm:text-[10px] md:text-xs uppercase font-mono text-text-muted truncate">{s.label}</div>
          </BlueprintWrapper>
        ))}
      </div>

      {/* 4 Engagement Models */}
      <div id="models" data-scroll-label="ENGAGEMENT MODELS" className="mb-16">
        <div className="label-accent mb-2">
          ENGAGEMENT MODELS
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-text mb-8 border-b border-border pb-4">
          ENGAGEMENT OPTIONS
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
          {displayModels.map((m, idx) => (
            <BlueprintWrapper key={idx} className="p-3.5 sm:p-6 lg:p-8 flex flex-col justify-between group hover:border-accent">
              <div>
                <h3 className="font-heading text-xs sm:text-xl lg:text-2xl font-bold uppercase text-text mb-1 sm:mb-2 group-hover:text-accent transition-colors truncate">
                  {m.title}
                </h3>
                <p className="text-[10px] sm:text-xs lg:text-[15px] font-normal text-text-muted mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                  {m.subtitle}
                </p>
                {m.desc && (
                  <div className="text-[10px] sm:text-xs lg:text-[15px] font-normal text-text-muted leading-relaxed sm:leading-[1.65] mb-3 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                    <RichTextRenderer content={m.desc} />
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-border space-y-2">
                {m.bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-[13px] md:text-sm font-normal text-text">
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </BlueprintWrapper>
          ))}
        </div>
      </div>

      {/* Industries Served */}
      <div id="verticals" data-scroll-label="DOMAINS" className="mb-16">
        <div className="label-accent mb-2">
          VERTICAL EXPERIENCE
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-text mb-6">
          TALENT FOR EVERY VERTICAL WE TOUCH
        </h2>

        <div className="flex flex-wrap gap-2">
          {verticals.map((v, idx) => (
            <span key={idx} className="tag tag-accent text-[12px] font-normal py-2 px-4">
              {v}
            </span>
          ))}
        </div>
      </div>

      {/* 4-Step Process */}
      <div id="process" data-scroll-label="VETTING PROCESS" className="mb-16">
        <div className="label-accent mb-2">
          VETTING &amp; SELECTION
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-text mb-8 border-b border-border pb-4">
          FROM BRIEF TO ONBOARDED — IN 4 STEPS
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {processSteps.map((step, idx) => (
            <BlueprintWrapper key={idx} className="p-3.5 sm:p-6">
              <div className="font-heading font-bold text-xs sm:text-lg uppercase text-text mb-1 sm:mb-2 truncate">{step.name}</div>
              <p className="text-[10px] sm:text-[14px] md:text-[15px] font-normal text-text-muted leading-tight sm:leading-[1.6] line-clamp-3 sm:line-clamp-none">{step.desc}</p>
            </BlueprintWrapper>
          ))}
        </div>
      </div>

      {/* FAQ Accordions */}
      <div id="faq" data-scroll-label="FAQ" className="mb-16">
        <div className="label-accent mb-2">
          FREQUENTLY ASKED QUESTIONS
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-text mb-8 border-b border-border pb-4">
          STAFFING FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <BlueprintWrapper key={idx} className="p-4">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-heading text-base font-bold text-text uppercase cursor-pointer group focus:outline-none focus:text-accent"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-accent' : 'text-text-muted group-hover:text-text'
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="mt-3 pt-3 border-t border-border text-[15px] font-normal text-text-muted leading-[1.65]"
                  >
                    {faq.a}
                  </div>
                )}
              </BlueprintWrapper>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div id="cta" data-scroll-label="CONTACT">
        <PageCTA
          eyebrow="ENTERPRISE TALENT"
          title="READY TO HIRE SPECIALISED TALENT?"
          description="Contact our talent solutions team in Coimbatore. We'll share pre-screened profiles within 48 to 72 hours."
          buttonText="REQUEST TALENT SHORTLIST"
          buttonLink="/contact"
        />
      </div>
    </div>
  );
}
