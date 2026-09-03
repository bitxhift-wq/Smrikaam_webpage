import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import BlueprintWrapper from '../components/BlueprintWrapper';
import TextReveal from '../components/anim/TextReveal';
import BannerDrawBorder from '../components/anim/BannerDrawBorder';
import Reveal from '../components/anim/Reveal';
import DecorativeSideCubes from '../components/visuals/DecorativeSideCubes';
import PageCTA from '../components/PageCTA';

export default function About() {
  const approachSteps = [
    { name: 'UNDERSTAND', desc: 'Deep-dive into client architecture, data schemas, machine protocols, and business KPIs.' },
    { name: 'ENGINEER', desc: 'Design resilient microservices, high-throughput pipelines, and proprietary accelerator integrations.' },
    { name: 'TRANSFORM', desc: 'Execute zero-downtime cutovers, edge IIoT telemetry streaming, and automated AI models.' },
    { name: 'SCALE', desc: 'Provide continuous platform governance, 99.999% SLA monitoring, and enterprise scaling support.' }
  ];

  const leadership = [
    {
      name: 'Rengarajan',
      role: 'Business Strategy & Growth',
      bio: 'Leads business development and enterprise partnerships, aligning technology solutions with measurable business outcomes.'
    },
    {
      name: 'Karthick',
      role: 'Technology & Architecture Lead',
      bio: 'Drives system architecture and engineering delivery across AI, Data Lakehouses, Cloud, and Industrial IoT frameworks.'
    },
    {
      name: 'Saranya',
      role: 'Operations & Finance',
      bio: 'Manages financial governance, HR operations, and sustainable engineering team scaling across all delivery centers.'
    }
  ];

  const companyFacts = [
    { label: 'HEADQUARTERS', value: 'Coimbatore, Tamil Nadu, India' },
    { label: 'ENTERPRISE DEPLOYMENTS', value: '50+ Production Systems' },
    { label: 'DAILY TELEMETRY', value: '17M+ Data Points Streamed Daily' },
    { label: 'UPTIME SLA', value: '99.999% Platform Uptime Commitment' },
    { label: 'CORE BRAND STATEMENT', value: 'PROGRESS THROUGH INNOVATION' }
  ];

  return (
    <div className="relative z-10 pt-20 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto">
      {/* 1. Header Banner / Hero */}
      <div id="overview" data-scroll-label="ABOUT US" className="relative mb-12">
        <DecorativeSideCubes leftSize={120} rightSize={140} leftTop="10%" rightTop="25%" />
        <div className="page-title-surface relative z-10 border border-border p-6 sm:p-8 md:p-12 overflow-hidden">
          <BannerDrawBorder />
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-accent)] uppercase tracking-[0.2em] font-semibold">
              ENGINEERING ORGANIZATION
            </div>
            <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-text-muted)] border border-[var(--color-border)] px-3 py-1 bg-black/[0.02] dark:bg-white/[0.03]">
              COIMBATORE, INDIA
            </div>
          </div>

          <TextReveal
            text="ENGINEERING THINKING. MEASURABLE IMPACT."
            as="h1"
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--color-text)] leading-[0.96] mb-4"
          />
          <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[var(--color-text-secondary)] max-w-3xl border-l-2 border-[var(--color-accent)] pl-4 font-normal leading-[1.6]">
            SMRIKAAM builds technology systems that connect architecture, engineering, intelligence, and business outcomes.
          </p>
        </div>
      </div>

      {/* Who We Are & Brand Philosophy (Side-by-Side 2-Column Canvas) */}
      <div id="dna" data-scroll-label="WHO WE ARE" className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
        <BlueprintWrapper className="p-3.5 sm:p-6 md:p-8">
          <div className="font-mono text-[9px] sm:text-[10px] md:text-[11px] text-[var(--color-accent)] uppercase font-semibold tracking-wider mb-1.5 sm:mb-2 truncate">WHO WE ARE</div>
          <h2 className="font-heading text-sm sm:text-2xl md:text-3xl font-bold uppercase text-text mb-2 sm:mb-4 leading-tight">
            ENGINEERING + DOMAIN + DELIVERY
          </h2>
          <p className="text-[11px] sm:text-[14px] md:text-[15px] text-text font-normal leading-relaxed sm:leading-[1.7] mb-2 sm:mb-4 line-clamp-4 sm:line-clamp-none">
            <span className="text-text font-normal">SMRIKAAM Technologies LLP</span> delivers high-performance engineering across Data, AI, Cloud, IIoT, and Intelligent Automation. Headquartered in Coimbatore, India, we bridge shop-floor hardware and cloud software with zero-compromise precision.
          </p>
        </BlueprintWrapper>

        <BlueprintWrapper className="p-3.5 sm:p-6 md:p-8 border-l-2 sm:border-l-4 border-accent">
          <div className="font-mono text-[9px] sm:text-[10px] md:text-[11px] text-[var(--color-accent)] uppercase font-semibold tracking-wider mb-1.5 sm:mb-2 truncate">BRAND PHILOSOPHY</div>
          <h2 className="font-heading text-sm sm:text-2xl md:text-3xl font-bold uppercase text-text mb-2 sm:mb-4 leading-tight">
            PROGRESS THROUGH INNOVATION
          </h2>
          <p className="text-[11px] sm:text-[14px] md:text-[15px] text-text font-normal leading-relaxed sm:leading-[1.7] line-clamp-4 sm:line-clamp-none">
            Technology &rarr; Engineering &rarr; Business Outcomes. We turn raw data streams into predictable business velocity and real-time operational intelligence.
          </p>
        </BlueprintWrapper>
      </div>

      {/* Our Mission & Vision (Side-by-Side 2-Column Canvas) */}
      <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
        <BlueprintWrapper className="p-3.5 sm:p-6">
          <div className="flex items-center gap-1.5 sm:gap-3 mb-2">
            <Target className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" strokeWidth={1.5} />
            <h3 className="font-heading text-xs sm:text-xl font-bold uppercase text-text truncate">OUR MISSION</h3>
          </div>
          <p className="text-[11px] sm:text-[14px] md:text-[15px] font-normal text-text leading-relaxed sm:leading-[1.7] line-clamp-4 sm:line-clamp-none">
            Transform complex data, legacy systems, and disconnected machines into scalable business value—built with precision and delivered with single-point accountability.
          </p>
        </BlueprintWrapper>

        <BlueprintWrapper className="p-3.5 sm:p-6">
          <div className="flex items-center gap-1.5 sm:gap-3 mb-2">
            <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" strokeWidth={1.5} />
            <h3 className="font-heading text-xs sm:text-xl font-bold uppercase text-text truncate">OUR EXPERTISE</h3>
          </div>
          <p className="text-[11px] sm:text-[14px] md:text-[15px] font-normal text-text leading-relaxed sm:leading-[1.7] line-clamp-4 sm:line-clamp-none">
            Data Analytics, Industrial IoT, Data Engineering, Generative &amp; Agentic AI, DevOps &amp; Cloud, and Data Governance backed by proprietary accelerators.
          </p>
        </BlueprintWrapper>
      </div>

      {/* Our Approach: UNDERSTAND → ENGINEER → TRANSFORM → SCALE */}
      <div id="methodology" data-scroll-label="4-STAGE DELIVERY" className="border-t border-border pt-8 mb-12">
        <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-accent)] uppercase tracking-[0.18em] mb-2 font-semibold">
          METHODOLOGY &amp; DELIVERY
        </div>
        <h2 className="font-heading text-lg sm:text-2xl md:text-3xl font-bold uppercase text-text mb-6 border-b border-border pb-4">
          OUR APPROACH: UNDERSTAND &rarr; ENGINEER &rarr; TRANSFORM &rarr; SCALE
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {approachSteps.map((step, idx) => (
            <BlueprintWrapper key={idx} className="p-3.5 sm:p-6 h-full">
              <h3 className="font-heading text-xs sm:text-xl font-bold uppercase text-text mb-1 sm:mb-2 truncate">{step.name}</h3>
              <p className="text-[10px] sm:text-[14px] font-normal text-text-muted leading-tight sm:leading-[1.5] line-clamp-3 sm:line-clamp-none">{step.desc}</p>
            </BlueprintWrapper>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <div id="leadership" data-scroll-label="LEADERSHIP" className="border-t border-border pt-8 mb-12">
        <div className="font-mono text-[11px] text-accent uppercase tracking-[0.18em] mb-2 font-semibold">
          EXECUTIVE TEAM
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-text mb-6 border-b border-border pb-4">
          LEADERSHIP
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {leadership.map((leader, idx) => (
            <BlueprintWrapper key={idx} className="p-6 sm:p-8 group hover:border-accent">
              <div className="w-12 h-12 bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-6 font-heading font-semibold text-xl">
                {leader.name[0]}
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase text-text group-hover:text-accent transition-colors">
                {leader.name}
              </h3>
              <div className="text-[13px] text-accent uppercase font-medium mb-4">{leader.role}</div>
              <p className="text-[15px] font-normal text-text-muted leading-[1.55] border-t border-border pt-4">
                {leader.bio}
              </p>
            </BlueprintWrapper>
          ))}
        </div>
      </div>

      {/* Values & Company Facts (Side-by-Side 2-Column Canvas) */}
      <div id="values" data-scroll-label="VALUES & FACTS" className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 border-t border-border pt-8 mb-12">
        {/* Values */}
        <BlueprintWrapper className="p-3.5 sm:p-6 md:p-8">
          <div className="font-mono text-[9px] sm:text-[11px] text-accent uppercase font-semibold mb-1.5 sm:mb-2 truncate">VALUES</div>
          <h2 className="font-heading text-sm sm:text-2xl font-bold uppercase text-text mb-2 sm:mb-4 leading-tight">
            ENGINEERING INTEGRITY &amp; EXCELLENCE
          </h2>
          <ul className="space-y-3 font-sans text-[15px] font-normal text-text-muted">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
              <span><span className="font-medium text-text">Engineering Precision:</span> Zero superficial patches, deterministic code performance.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
              <span><span className="font-medium text-text">Single Accountability:</span> We take complete ownership from architecture to production.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
              <span><span className="font-medium text-text">Measurable Impact:</span> Every deployment is benchmarked against real business KPIs.</span>
            </li>
          </ul>
        </BlueprintWrapper>

        {/* Company Facts */}
        <BlueprintWrapper className="p-3.5 sm:p-6 md:p-8">
          <div className="font-mono text-[9px] sm:text-[11px] text-accent uppercase font-semibold mb-1.5 sm:mb-2 truncate">COMPANY FACTS</div>
          <h2 className="font-heading text-sm sm:text-2xl font-bold uppercase text-text mb-2 sm:mb-4 leading-tight">
            VERIFIED CREDENTIALS
          </h2>
          <div className="space-y-2.5 text-[13px] md:text-[14px]">
            {companyFacts.map((fact, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:justify-between border-b border-border pb-1.5 gap-0.5 sm:gap-2">
                <span className="text-text-muted font-normal">{fact.label}:</span>
                <span className="text-text font-medium">{fact.value}</span>
              </div>
            ))}
          </div>
        </BlueprintWrapper>
      </div>

      {/* Locations */}
      <div id="location" data-scroll-label="COIMBATORE HQ" className="border-t border-border pt-8 mb-12">
        <div className="font-mono text-[11px] text-accent uppercase tracking-[0.18em] mb-2 font-semibold">
          HEADQUARTERS
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4 border-b border-border pb-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-text">
            COIMBATORE HEADQUARTERS
          </h2>
          <Link to="/locations" className="text-accent text-[13px] uppercase flex items-center gap-1 font-semibold hover:underline">
            View Location Details <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <p className="text-text-muted text-[15px] font-normal max-w-2xl leading-[1.55]">
          SMRIKAAM Technologies LLP is headquartered in Coimbatore, Tamil Nadu, India. From our Coimbatore engineering center, we deliver mission-critical Data, AI, Cloud, and Industrial IoT solutions to enterprises globally.
        </p>
      </div>

      {/* CTA */}
      <div id="cta" data-scroll-label="ENGAGEMENT">
        <PageCTA
          eyebrow="ENGINEERING ORGANIZATION"
          title="READY TO WORK WITH SMRIKAAM?"
          description="Let's turn your data, operations, and technology into measurable business outcomes."
          buttonText="BOOK STRATEGY CALL"
          buttonLink="/contact"
        />
      </div>
    </div>
  );
}
