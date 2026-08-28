import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Cloud,
  Database,
  Network,
  Brain,
  BarChart2,
  Lock,
} from 'lucide-react';

import HeroCubeCluster from '../components/visuals/HeroCubeCluster';
import WhoWeAreCubeCluster from '../components/visuals/WhoWeAreCubeCluster';
import Smrikaam3DCoreSection from '../components/visuals/Smrikaam3DCoreSection';
import TechStackRibbon from '../components/TechStackRibbon';
import { useCMS } from '../context/CMSContext';

export default function Home() {
  const { services: rawServices, caseStudies: rawCaseStudies } = useCMS() || {};

  const cmsServices = React.useMemo(() => {
    if (!Array.isArray(rawServices)) return [];
    return rawServices.map((s, idx) => ({
      num: String(idx + 1).padStart(2, '0'),
      title: s.title || s.name,
      desc: s.tagline || s.description || s.summary || '',
      path: s.slug ? `/services/${s.slug}` : '/services',
    }));
  }, [rawServices]);

  const cmsCaseStudies = React.useMemo(() => {
    if (!Array.isArray(rawCaseStudies)) return [];
    return rawCaseStudies.map((c) => {
      const technologies = Array.isArray(c.technologies)
        ? c.technologies
        : typeof c.technologies === 'string'
        ? c.technologies.split(',').map((t) => t.trim())
        : ['Enterprise', 'Cloud', 'Data'];

      return {
        title: c.title,
        industry: (c.industry || c.category || 'ENTERPRISE').toUpperCase(),
        problem: c.challenge || c.problemStatement || c.summary || 'Operational system bottleneck.',
        solution: c.solution || c.solutionStatement || 'Engineered automated transformation.',
        tech: technologies.slice(0, 4),
        path: c.slug ? `/case-studies/${c.slug}` : '/case-studies',
        image: c.cover_image_url || null,
      };
    });
  }, [rawCaseStudies]);

  const techDomains = [
    { num: '01', label: 'AI / ML', icon: Brain },
    { num: '02', label: 'Data & Analytics', icon: BarChart2 },
    { num: '03', label: 'Cloud & DevOps', icon: Cloud },
    { num: '04', label: 'IIoT & Connected Systems', icon: Cpu },
    { num: '05', label: 'Software Engineering', icon: Network },
    { num: '06', label: 'Data & App Security', icon: Lock },
  ];

  const pillars = [
    {
      label: 'OUR GOAL',
      desc: 'Create innovative solutions that drive business growth and operational excellence.',
    },
    {
      label: 'OUR VISION',
      desc: 'To be a global leader in engineering intelligence and enterprise transformation.',
    },
    {
      label: 'OUR MISSION',
      desc: 'Deliver secure, scalable and intelligent solutions through engineering excellence and continuous innovation.',
    },
  ];

  const capabilities = [
    {
      id: 'data-analytics',
      num: '01',
      title: 'DATA ANALYTICS & BI',
      desc: 'Transform raw data into meaningful insights with advanced analytics and visual intelligence.',
      icon: BarChart2,
    },
    {
      id: 'data-eng',
      num: '02',
      title: 'DATA ENGINEERING',
      desc: 'Build robust data platforms, pipelines and architecture for reliable and scalable data flows.',
      icon: Database,
    },
    {
      id: 'devops-cloud',
      num: '03',
      title: 'DEVOPS & CLOUD ENGINEERING',
      desc: 'Modernize infrastructure, automate deployments and build cloud-native systems that scale seamlessly.',
      icon: Cloud,
    },
    {
      id: 'iiot',
      num: '04',
      title: 'INDUSTRIAL IoT',
      desc: 'Connect machines, collect real-time data and unlock operational intelligence at the edge.',
      icon: Cpu,
    },
    {
      id: 'gen-ai',
      num: '05',
      title: 'GENERATIVE & AGENTIC AI',
      desc: 'Build GenAI applications and intelligent agents that automate, augment and accelerate decisions.',
      icon: Brain,
    },
    {
      id: 'governance',
      num: '06',
      title: 'DATA GOVERNANCE & COMPLIANCE',
      desc: 'Ensure data quality, security, privacy and compliance across your enterprise ecosystem.',
      icon: Lock,
    },
  ];

  const problems = [
    {
      index: '01',
      title: 'LEGACY SYSTEMS',
      point1: 'Modernization & Cloud Migration',
      point2: 'Scalable & Resilient Architecture',
    },
    {
      index: '02',
      title: 'DISCONNECTED MACHINES',
      point1: 'Edge IIoT & Telemetry Pipelines',
      point2: 'Real-Time Operational Intelligence',
    },
    {
      index: '03',
      title: 'FRAGMENTED DATA',
      point1: 'Unified Data Engineering',
      point2: 'Trusted Single Source of Truth',
    },
    {
      index: '04',
      title: 'MANUAL PROCESSES',
      point1: 'Generative AI & Agentic Automation',
      point2: 'Higher Productivity & Lower Errors',
    },
  ];

  // Active Relay Lists directly from CMS
  const activeServices = cmsServices;
  const activeCaseStudies = cmsCaseStudies;

  // Duplicated arrays for seamless infinite looping
  const marqueeServices = [...activeServices, ...activeServices];
  const marqueeCaseStudies = [...activeCaseStudies, ...activeCaseStudies];

  return (
    <div className="relative z-10 w-full overflow-x-hidden bg-transparent text-[var(--color-text)] transition-colors duration-200">
      
      {/* ============================================================ */}
      {/* SCROLL 0 — HERO (LOCKED) */}
      {/* ============================================================ */}
      <section
        id="hero"
        data-scroll-label="HERO"
        className="relative flex flex-col justify-center px-6 md:px-12 lg:px-16 py-8 md:py-12 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-[2px] overflow-hidden"
      >
        {/* Subtle architectural background perspective grid */}
        <div className="smk-perspective-grid opacity-25" aria-hidden="true" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            {/* Technical Eyebrow */}
            <div className="inline-flex items-center gap-2 font-mono text-[10px] md:text-[11px] text-[var(--color-text-secondary)] uppercase tracking-[0.16em] border border-[var(--color-border)] px-2.5 py-1 home-card-surface self-start">
              <span className="w-1.5 h-1.5 bg-[var(--color-accent)] animate-pulse" />
              <span>AI • DATA • CLOUD • IIoT • INTELLIGENT AUTOMATION</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--color-text)] leading-[0.96]">
              ENGINEERING
              <br />
              INTELLIGENCE
              <br />
              FOR THE ENTERPRISE.
            </h1>

            {/* Description */}
            <p className="text-[13px] md:text-[15px] text-[var(--color-text-secondary)] max-w-lg leading-[1.5] font-normal">
              We build intelligent, secure, and scalable technology solutions
              that help enterprises modernize, automate and grow.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-[var(--button-bg)] text-[var(--button-text)] border border-[var(--button-border)] font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2 shadow-sm"
              >
                <span>BOOK STRATEGY CALL</span>
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
              </Link>
              <Link
                to="/services"
                className="px-5 py-2.5 border border-[var(--button-secondary-border)] bg-[var(--button-secondary-bg)] text-[var(--button-secondary-text)] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[var(--color-surface-subtle)] transition-all"
              >
                EXPLORE CAPABILITIES
              </Link>
            </div>

            {/* System Proof Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 p-4 mt-2 home-card-surface border border-[var(--color-border)] max-w-lg">
              <div>
                <div className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-text)] tracking-tight">
                  50+
                </div>
                <div className="font-mono text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mt-0.5 font-normal">
                  Deployments
                </div>
              </div>
              <div className="border-l border-[var(--color-border)] pl-3">
                <div className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-text)] tracking-tight">
                  17M+
                </div>
                <div className="font-mono text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mt-0.5 font-normal">
                  Data Points Processed
                </div>
              </div>
              <div className="border-l border-[var(--color-border)] pl-3">
                <div className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-text)] tracking-tight">
                  99.999%
                </div>
                <div className="font-mono text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mt-0.5 font-normal">
                  System Uptime
                </div>
              </div>
            </div>
          </div>

          {/* Right 3D Visual Column */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <HeroCubeCluster className="w-full max-w-[380px] aspect-square" />
          </div>
        </div>
      </section>

      {/* Live Running Technology Stack Ribbon */}
      <section
        id="tech-ribbon"
        aria-label="Enterprise Technologies"
        className="relative py-4 bg-[var(--color-bg)]/85 backdrop-blur-sm border-b border-[var(--color-border)]"
      >
        <TechStackRibbon />
      </section>

      {/* ============================================================ */}
      {/* SCROLL 1 — CONNECTED 3D CORE ARCHITECTURAL SYSTEM */}
      {/* ============================================================ */}
      <section
        id="overview"
        data-scroll-label="WHO WE ARE & WHAT WE BUILD"
        aria-label="Who We Are and What We Build"
      >
        <Smrikaam3DCoreSection />
      </section>

      {/* ============================================================ */}
      {/* SCROLL 2 — CONNECTED HOMEPAGE FLOW */}
      {/* ============================================================ */}
      <section
        id="problems"
        data-scroll-label="SERVICES & TRANSFORMATION"
        aria-label="Services, Transformation Architecture, and Live Technology Relays"
        className="relative py-10 md:py-14 px-6 md:px-12 lg:px-16 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-sm overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full relative z-10 space-y-6">
          
          {/* ======================================================== */}
          {/* 1. HEADER: BUSINESS PROBLEMS WE SOLVE / TRANSFORMATION ARCHITECTURE */}
          {/* ======================================================== */}
          <div className="pb-3 border-b border-[var(--color-border)]">
            <div className="font-mono text-[11px] text-[var(--color-text-muted)] uppercase tracking-[0.2em] font-semibold mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[var(--color-accent)]" />
              <span>BUSINESS PROBLEMS WE SOLVE</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-[var(--color-text)] tracking-tight">
              Transformation Architecture
            </h2>
          </div>

          {/* ======================================================== */}
          {/* 2. // SERVICES & LIVE SERVICE STACK (LTR RELAY) */}
          {/* ======================================================== */}
          <div className="border border-[var(--color-border)] home-card-surface p-3.5 md:p-4 overflow-hidden">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-accent)] font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--color-accent)]" />
                <span>// SERVICES</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[9px] md:text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <span>LIVE SERVICE STACK // {activeServices.length} CAPABILITIES</span>
              </div>
            </div>

            {/* Viewport with Continuous LTR Movement */}
            <div className="scroll2-layer-container py-1">
              <div className="scroll2-layer-track-ltr gap-3">
                {marqueeServices.map((srv, idx) => (
                  <Link
                    key={`srv-${idx}`}
                    to={srv.path}
                    className="px-4 py-2.5 border border-[var(--color-border)] bg-[var(--color-bg)]/90 hover:border-[var(--color-accent)] transition-all shrink-0 flex items-center gap-3.5 group select-none cursor-pointer w-[260px] sm:w-[300px]"
                  >
                    <span className="font-mono text-[11px] text-[var(--color-accent)] font-bold shrink-0">
                      {srv.num}
                    </span>
                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">
                        {srv.title}
                      </span>
                      {srv.desc && (
                        <span className="font-mono text-[10px] text-[var(--color-text-muted)] truncate font-normal mt-0.5">
                          {srv.desc}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs text-[var(--color-accent)] group-hover:translate-x-1 transition-transform shrink-0">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 3. 01..04 TRANSFORMATION ITEMS (4 BUSINESS PROBLEMS) */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {problems.map((prob) => (
              <div
                key={prob.index}
                className="p-3.5 border border-[var(--color-border)] home-card-surface hover:border-[var(--color-border-strong)] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[11px] font-bold text-[var(--color-accent)]">
                    {prob.index}
                  </span>
                  <span className="font-mono text-[9px] text-[var(--color-text-muted)] uppercase tracking-wider">
                    TRANSFORMATION
                  </span>
                </div>
                <h3 className="font-mono text-xs font-bold uppercase text-[var(--color-text)] mb-2">
                  {prob.title}
                </h3>
                <div className="space-y-1 border-t border-[var(--color-border)] pt-2 text-[11px] font-mono">
                  <div className="text-[var(--color-text-secondary)] font-normal">
                    <span className="text-[var(--color-accent)] font-bold mr-1">↳</span>
                    {prob.point1}
                  </div>
                  <div className="text-[var(--color-text)] font-semibold">
                    <span className="text-[var(--color-accent)] font-bold mr-1">↳</span>
                    {prob.point2}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ======================================================== */}
          {/* 4. // CASE STUDIES & LIVE PROJECT FEED (RTL RELAY) */}
          {/* ======================================================== */}
          <div className="border border-[var(--color-border)] home-card-surface p-3.5 md:p-4 overflow-hidden">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-accent)] font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--color-accent)]" />
                <span>// CASE STUDIES</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[9px] md:text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <span>LIVE PROJECT FEED // {activeCaseStudies.length} DEPLOYMENTS</span>
              </div>
            </div>

            {/* Viewport with Continuous RTL Movement */}
            <div className="scroll2-layer-container py-1">
              <div className="scroll2-layer-track-rtl gap-4">
                {marqueeCaseStudies.map((cs, idx) => (
                  <Link
                    key={`cs-${idx}`}
                    to={cs.path}
                    className="p-3.5 border border-[var(--color-border)] bg-[var(--color-bg)]/90 hover:border-[var(--color-accent)] transition-all shrink-0 flex gap-3.5 group select-none cursor-pointer w-[300px] sm:w-[380px]"
                  >
                    {/* Image / Thumbnail */}
                    <div className="w-16 sm:w-20 aspect-square border border-[var(--color-border)] overflow-hidden shrink-0 bg-black/5 dark:bg-white/5 relative">
                      {cs.image ? (
                        <img
                          src={cs.image}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-mono text-[9px] text-[var(--color-text-muted)]">
                          SMK//CS
                        </div>
                      )}
                    </div>

                    {/* Content Details */}
                    <div className="flex flex-col justify-between min-w-0 flex-1">
                      <div>
                        <div className="font-mono text-[9px] text-[var(--color-accent)] font-bold uppercase tracking-wider mb-0.5 truncate">
                          CASE STUDY // {cs.industry}
                        </div>
                        <h3 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-tight text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">
                          {cs.title}
                        </h3>
                        <div className="text-[10px] font-mono text-[var(--color-text-secondary)] line-clamp-1 mt-1 font-normal">
                          <span className="text-[var(--color-text-muted)] font-semibold">P:</span> {cs.problem}
                        </div>
                        <div className="text-[10px] font-mono text-[var(--color-text)] font-semibold line-clamp-1 mt-0.5">
                          <span className="text-[var(--color-accent)] font-bold">↳ S:</span> {cs.solution}
                        </div>
                      </div>

                      {/* Tech Tags & Read CTA */}
                      <div className="flex items-center justify-between pt-2 mt-2 border-t border-[var(--color-border)]">
                        <div className="flex items-center gap-1 overflow-hidden">
                          {cs.tech && cs.tech.slice(0, 2).map((t, i) => (
                            <span
                              key={i}
                              className="px-1.5 py-0.5 border border-[var(--color-border)] bg-[var(--color-surface-subtle)] text-[8px] font-mono text-[var(--color-text-secondary)] uppercase truncate"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <span className="font-mono text-[10px] text-[var(--color-accent)] font-bold uppercase flex items-center gap-1 group-hover:translate-x-0.5 transition-transform shrink-0 ml-1">
                          <span>READ</span>
                          <span>→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 5. BOOK STRATEGY CALL (END CTA BAND) */}
          {/* ======================================================== */}
          <div className="border border-[var(--color-border)] p-6 md:p-8 home-card-surface flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-mono text-[10px] text-[var(--color-accent)] font-bold uppercase tracking-widest">
                ENTERPRISE TRANSFORMATION // STRATEGY CONSULTATION
              </div>
              <h3 className="font-heading text-lg md:text-xl font-bold uppercase text-[var(--color-text)]">
                Ready to engineer your next intelligent system?
              </h3>
              <p className="text-xs md:text-sm text-[var(--color-text-secondary)] font-normal max-w-xl">
                Connect with our technical leads in Coimbatore to review architecture blueprints and project roadmaps.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-[var(--button-bg)] text-[var(--button-text)] border border-[var(--button-border)] font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2 shrink-0 shadow-sm"
            >
              <span>BOOK STRATEGY CALL</span>
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
