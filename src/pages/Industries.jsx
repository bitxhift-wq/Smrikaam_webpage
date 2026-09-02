import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Factory, BatteryCharging, ShoppingBag,
  Landmark, Stethoscope, Truck, Car, PhoneCall, Tv, Building2, Flame, Zap
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import TextReveal from '../components/anim/TextReveal';
import BannerDrawBorder from '../components/anim/BannerDrawBorder';
import Reveal from '../components/anim/Reveal';
import RichTextRenderer from '../components/RichTextRenderer';
import DecorativeSideCubes from '../components/visuals/DecorativeSideCubes';
import MobileTabSelector from '../components/MobileTabSelector';

function parseBulletPoints(data) {
  if (!data) return [];
  if (Array.isArray(data)) return data;
  if (typeof data !== 'string') return [String(data)];
  
  if (data.includes('\n- ') || data.includes('\n• ') || data.includes('\n* ')) {
    return data.split(/\n[-•*]\s+/).map(s => s.trim().replace(/^[-•*]\s+/, '')).filter(Boolean);
  }
  
  const sentences = data.split(/(?<=[.?!])\s+(?=[A-Z])/).map(s => s.trim()).filter(Boolean);
  return sentences.length > 0 ? sentences : [data];
}

function renderBulletText(text) {
  if (!text) return null;
  const clean = text.replace(/^\s*[-•*]\s+/, '').replace(/\*\*/g, '');
  const colonIdx = clean.indexOf(':');
  if (colonIdx > 0 && colonIdx < 45) {
    const title = clean.substring(0, colonIdx);
    const rest = clean.substring(colonIdx + 1);
    return (
      <p className="text-[15px] md:text-[15px] text-text font-normal leading-[1.7] text-left">
        <strong className="text-text font-semibold">{title}:</strong>
        <span className="text-text font-normal"> {rest}</span>
      </p>
    );
  }
  return <p className="text-[15px] md:text-[15px] text-text font-normal leading-[1.7] text-left">{clean}</p>;
}

export default function Industries() {
  const { industries: rawCmsIndustries, caseStudies: rawCaseStudies, isLoaded } = useCMS() || {};
  const [activeIdx, setActiveIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const stageRef = useRef(null);
  const detailContainerRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const frameId = requestAnimationFrame(() => {
      if (detailContainerRef.current) {
        detailContainerRef.current.scrollIntoView({
          behavior: 'auto',
          block: 'start'
        });
      }
    });

    return () => cancelAnimationFrame(frameId);
  }, [activeIdx]);

  const iconMap = {
    manufacturing: Factory,
    energy: BatteryCharging,
    'energy-utilities': BatteryCharging,
    retail: ShoppingBag,
    'retail-ecommerce': ShoppingBag,
    bfsi: Landmark,
    healthcare: Stethoscope,
    'healthcare-life-sciences': Stethoscope,
    logistics: Truck,
    'logistics-supply-chain': Truck,
    automotive: Car,
    telecom: PhoneCall,
    infrastructure: Building2,
    'oil-gas': Flame,
    media: Tv,
    electrical: Zap
  };

  const industryImageMap = {
    manufacturing: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    energy: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop',
    'energy-utilities': 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop',
    retail: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200&auto=format&fit=crop',
    'retail-ecommerce': 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200&auto=format&fit=crop',
    bfsi: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    healthcare: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
    'healthcare-life-sciences': 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
    logistics: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    'logistics-supply-chain': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    telecom: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
    infrastructure: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    'oil-gas': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    media: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
    electrical: 'https://images.unsplash.com/photo-1517055729445-fa7d27394b48?q=80&w=1200&auto=format&fit=crop'
  };

  const acceleratorMap = {
    manufacturing: { name: 'BitXhift IIoT Platform', slug: 'bitxhift' },
    energy: { name: 'BitXhift Telemetry Pipeline', slug: 'bitxhift' },
    'energy-utilities': { name: 'BitXhift Telemetry Pipeline', slug: 'bitxhift' },
    retail: { name: 'LinkGenX Integration Mesh', slug: 'linkgenx' },
    'retail-ecommerce': { name: 'LinkGenX Integration Mesh', slug: 'linkgenx' },
    bfsi: { name: 'LinkGenX Integration Mesh', slug: 'linkgenx' },
    healthcare: { name: 'ParseMaster Streaming Engine', slug: 'parsemaster' },
    'healthcare-life-sciences': { name: 'ParseMaster Streaming Engine', slug: 'parsemaster' },
    logistics: { name: 'ParseMaster Ingestion Engine', slug: 'parsemaster' },
    'logistics-supply-chain': { name: 'ParseMaster Ingestion Engine', slug: 'parsemaster' },
    telecom: { name: 'ParseMaster Data Engine', slug: 'parsemaster' },
    infrastructure: { name: 'BitXhift IIoT Platform', slug: 'bitxhift' },
    'oil-gas': { name: 'BitXhift IIoT Platform', slug: 'bitxhift' },
    media: { name: 'ParseMaster Data Engine', slug: 'parsemaster' },
    electrical: { name: 'BitXhift IIoT Platform', slug: 'bitxhift' }
  };

  const industries = useMemo(() => {
    if (!Array.isArray(rawCmsIndustries)) return [];
    return rawCmsIndustries.map((item, idx) => {
      const safeName = item.name || item.title || 'Industry Sector';
      const slugLower = (item.slug || item.id || '').toLowerCase();
      
      const linkedCase = Array.isArray(rawCaseStudies)
        ? rawCaseStudies.find(cs =>
            (item.name && cs.industry?.toLowerCase() === item.name.toLowerCase()) ||
            (slugLower && cs.industry?.toLowerCase() === slugLower) ||
            (slugLower && cs.slug && cs.slug.includes(slugLower))
          )
        : null;

      const relatedAcc = item.acceleratorName && item.acceleratorSlug
        ? { name: item.acceleratorName, slug: item.acceleratorSlug }
        : (acceleratorMap[slugLower] || { name: 'BitXhift & LinkGenX', slug: 'bitxhift' });

      const businessProblemsRaw = item.businessProblems || item.challenge || item.problemStatement || [
        'Complex legacy architecture causing operational friction and delayed telemetry visibility.',
        'Stringent compliance constraints and data privacy requirements across distributed systems.',
        'High maintenance overhead and lack of predictive fault intelligence.'
      ];

      const outcomesRaw = item.outcomes || item.outcome || item.businessOutcomes;
      const formattedOutcome = Array.isArray(outcomesRaw)
        ? outcomesRaw.join(' ')
        : (outcomesRaw || 'Delivers proven domain efficiency, reduced operational overhead, and real-time compliance readiness.');

      const resolvedImage = item.cover_image_url || industryImageMap[slugLower] || item.image || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop';

      return {
        id: item.slug || item.id,
        slug: item.slug || item.id,
        num: String(idx + 1).padStart(2, '0'),
        title: safeName,
        name: safeName,
        icon: iconMap[slugLower] || Building2,
        tagline: item.summary || item.tagline || '',
        description: item.content || item.description || item.summary || '',
        businessProblems: parseBulletPoints(businessProblemsRaw),
        capabilities: Array.isArray(item.capabilities) && item.capabilities.length > 0
          ? item.capabilities
          : (Array.isArray(item.useCases) ? item.useCases : (Array.isArray(item.key_solutions) ? item.key_solutions : [
              'Domain Telemetry Ingestion',
              'Real-Time Anomaly Detection',
              'Automated Compliance Logging',
              'Enterprise Systems Integration'
            ])),
        technology: Array.isArray(item.technology) && item.technology.length > 0
          ? item.technology
          : (Array.isArray(item.techStack) && item.techStack.length > 0 ? item.techStack : ['Python', 'Docker', 'Kubernetes', 'TimescaleDB', 'PostgreSQL']),
        outcomes: formattedOutcome,
        acceleratorName: relatedAcc.name,
        acceleratorSlug: relatedAcc.slug,
        caseStudy: linkedCase ? linkedCase.title : (item.caseStudy || `${safeName} Enterprise Transformation`),
        caseStudySlug: linkedCase ? linkedCase.slug : (item.caseStudySlug || null),
        image: resolvedImage,
        caption: `${safeName.toUpperCase()} — Enterprise Domain Architecture`
      };
    });
  }, [rawCmsIndustries, rawCaseStudies]);

  // Preload images to eliminate flickers
  useEffect(() => {
    industries.forEach((ind) => {
      if (ind.image) {
        const img = new Image();
        img.src = ind.image;
      }
    });
  }, [industries]);

  const handleMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    setMousePos({ x, y });
  };

  const activeIndustry = industries[activeIdx] || industries[0] || null;

  const rotateX = isHovered ? (0.5 - mousePos.y) * 4 : 0;
  const rotateY = isHovered ? (mousePos.x - 0.5) * 4 : 0;
  const translateX = isHovered ? (mousePos.x - 0.5) * 10 : 0;
  const translateY = isHovered ? (mousePos.y - 0.5) * 10 : 0;

  return (
    <div className="relative z-10 pt-20 sm:pt-28 pb-16 sm:pb-24 text-text">
      {/* SECTION 01 — INDUSTRIES HERO */}
      <section id="overview" data-scroll-label="INDUSTRIES" className="relative px-4 sm:px-6 md:px-16 max-w-7xl mx-auto mb-12 sm:mb-16">
        <DecorativeSideCubes leftSize={120} rightSize={140} leftTop="10%" rightTop="25%" />
        <div className="page-title-surface relative z-10 border border-border p-5 sm:p-8 md:p-12 overflow-hidden">
          <BannerDrawBorder />
          <div className="flex items-center justify-between mb-4">
            <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-accent)] uppercase tracking-[0.2em] font-semibold">
              INDUSTRIES &amp; DOMAINS
            </div>
            <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-text-muted)] border border-[var(--color-border)] px-3 py-1 bg-black/[0.02] dark:bg-white/[0.03]">
              SECTOR SOLUTIONS
            </div>
          </div>

          <TextReveal
            text="TECHNOLOGY THAT UNDERSTANDS YOUR INDUSTRY"
            as="h1"
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--color-text)] leading-[0.96] mb-4 max-w-5xl"
          />

          <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[var(--color-text-secondary)] max-w-3xl font-normal leading-[1.6] border-l-2 border-[var(--color-accent)] pl-4 text-left">
            SMRIKAAM brings specialized engineering frameworks and domain expertise tailored to the unique operational and regulatory realities of major global enterprise sectors.
          </p>
        </div>
      </section>

      {/* SECTION 02 — THE INDUSTRY SYSTEM (Interactive Master-Detail Architecture) */}
      <section id="sectors" data-scroll-label="INDUSTRY SYSTEM" className="px-4 sm:px-6 md:px-16 max-w-7xl mx-auto mb-16 sm:mb-20">
        {industries.length === 0 ? (
          <div className="page-title-surface border border-border p-12 text-center my-12">
            <div className="font-mono text-xs text-accent uppercase mb-2">SYSTEM STATUS</div>
            <h2 className="font-heading text-2xl font-bold uppercase text-text mb-2">NO PUBLISHED INDUSTRIES CURRENTLY AVAILABLE</h2>
            <p className="text-text-muted text-sm max-w-md mx-auto">All sector profiles are currently in draft, undergoing maintenance, or archived.</p>
          </div>
        ) : (
          <div>
            {/* Mobile Selector Dropdown (Active on Mobile ONLY <768px, sits ABOVE detail panel) */}
            <MobileTabSelector
              items={industries}
              activeIdx={activeIdx}
              setActiveIdx={setActiveIdx}
              tabIdPrefix="industry"
              ariaLabel="Target Industries"
            />

            <div className="grid grid-cols-12 gap-3 sm:gap-6 lg:gap-12 items-start border-t border-border/70 pt-6 sm:pt-10">
              
              {/* Left Column: Industries Selector List (Active on Desktop ONLY >=768px) */}
              <aside className="hidden md:block col-span-5 lg:col-span-4 sticky top-16 sm:top-20 self-start z-20">
                <div
                  role="tablist"
                  aria-label="Target Industries"
                  className="page-title-surface border border-border overflow-hidden flex flex-col divide-y divide-border/70"
                >
                {industries.map((ind, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <div
                      key={ind.id}
                      role="tab"
                      id={`industry-tab-${ind.id}`}
                      aria-selected={isActive}
                      aria-controls={`industry-panel-${ind.id}`}
                      tabIndex={0}
                      onClick={() => setActiveIdx(idx)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveIdx(idx);
                        }
                      }}
                      className={`service-tab-item group py-2 sm:py-4 px-2 sm:px-4 cursor-pointer flex items-start justify-between gap-1 sm:gap-4 outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                        isActive
                          ? 'active -ml-[1px]'
                          : 'hover:bg-black/[0.02] dark:hover:bg-white/[0.015]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-1 sm:gap-4 w-full min-w-0">
                        <div className="min-w-0 flex-1">
                          <h3 className={`font-heading text-[10px] sm:text-base md:text-lg font-bold tracking-tight transition-colors uppercase truncate ${
                            isActive ? 'text-accent' : 'text-text/90 group-hover:text-accent'
                          }`}>
                            {ind.title}
                          </h3>
                        </div>

                        <span
                          className={`text-[10px] sm:text-sm shrink-0 mt-0.5 transition-transform duration-200 ${
                            isActive ? 'text-accent translate-x-0.5' : 'text-text-muted/40 group-hover:translate-x-0.5 group-hover:text-text-muted'
                          }`}
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </div>
                    </div>
                  );
                })}
                </div>
              </aside>

              {/* Right Column: Active Industry Detailed Stage */}
              {activeIndustry && (
                <div ref={detailContainerRef} className="col-span-12 md:col-span-7 lg:col-span-8 min-w-0 w-full">
                <div
                  key={activeIndustry.id}
                  role="tabpanel"
                  id={`industry-panel-${activeIndustry.id}`}
                  aria-labelledby={`industry-tab-${activeIndustry.id}`}
                  className="service-detail-panel p-2.5 sm:p-6 md:p-8 space-y-4 sm:space-y-6"
                >
                  
                  {/* Header: Title */}
                  <div className="border-b border-border/70 pb-5">
                    <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-text tracking-tight uppercase">
                      {activeIndustry.title}
                    </h2>
                  </div>

                  {/* Industry Context Narrative */}
                  {activeIndustry.description && (
                    <div className="type-body text-[15px] md:text-[16px] font-normal text-text-muted leading-[1.7] text-left md:text-justify">
                      <RichTextRenderer content={activeIndustry.description} />
                    </div>
                  )}

                  {/* Real Photograph with Parallax on Desktop */}
                  <div
                    ref={stageRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => {
                      setIsHovered(false);
                      setMousePos({ x: 0.5, y: 0.5 });
                    }}
                    className="relative overflow-hidden aspect-video border border-border bg-black/5 dark:bg-white/5"
                  >
                    <img
                      src={activeIndustry.image}
                      alt={activeIndustry.title}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                      className="w-full h-full object-cover transition-transform duration-300 ease-out"
                      style={{
                        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px, ${translateY}px, 0px)`
                      }}
                    />
                  </div>

                  {/* Business Problems Solved */}
                  <div className="border-t border-border/70 pt-6">
                    <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-2.5 text-left">
                      BUSINESS PROBLEMS SOLVED
                    </h3>
                    <ul className="space-y-2">
                      {activeIndustry.businessProblems.map((prob, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[15px] md:text-[15px] font-normal text-text leading-[1.7]">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" aria-hidden="true" />
                          <div>{renderBulletText(prob)}</div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Capabilities & Use Cases */}
                  <div className="border-t border-border/70 pt-6">
                    <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-3 text-left">
                      CORE CAPABILITIES &amp; USE CASES
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeIndustry.capabilities.map((cap, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-3.5 py-2 bg-black/[0.03] dark:bg-white/[0.04] border border-border text-[12px] md:text-[13px] text-text font-normal"
                        >
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="border-t border-border/70 pt-6">
                    <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-3 text-left">
                      MODERN TECHNOLOGY STACK
                    </h3>
                    <div className="flex flex-wrap gap-2.5">
                      {activeIndustry.technology.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-3 py-1.5 bg-bg border border-border text-[12px] md:text-[13px] text-text font-normal"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Business Outcome */}
                  <div className="border-t border-border/70 pt-6">
                    <div className="p-4 bg-black/[0.02] dark:bg-white/[0.03] border-l-2 border-accent">
                      <div className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-1.5 text-left">
                        BUSINESS OUTCOME
                      </div>
                      <p className="text-[14px] md:text-[15px] text-text font-normal leading-[1.5] text-left">
                        {activeIndustry.outcomes}
                      </p>
                    </div>
                  </div>

                  {/* Related Product / Accelerator & Case Study */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-border/70 text-[13px]">
                    <div className="p-3.5 border border-border/70 flex flex-col justify-between">
                      <span className="text-[11px] text-text-muted font-normal uppercase tracking-wider mb-1.5 text-left">
                        ENGINEERED PRODUCT / ASSET
                      </span>
                      <Link
                        to={`/products/${activeIndustry.acceleratorSlug}`}
                        className="text-text font-semibold hover:text-accent transition-colors inline-flex items-center gap-1.5 group/acc"
                      >
                        <span>{activeIndustry.acceleratorName}</span>
                        <span className="text-accent transition-transform duration-200 group-hover/acc:translate-x-1" aria-hidden="true">→</span>
                      </Link>
                    </div>
                    <div className="p-3.5 border border-border/70 flex flex-col justify-between">
                      <span className="text-[11px] text-text-muted font-medium uppercase tracking-wider mb-1.5 text-left">
                        CASE STUDY / WORKBENCH
                      </span>
                      <Link
                        to={activeIndustry.caseStudySlug ? `/case-studies/${activeIndustry.caseStudySlug}` : '/case-studies'}
                        className="text-text font-medium hover:text-accent transition-colors inline-flex items-center gap-1.5 group/cs"
                      >
                        <span className="line-clamp-1">{activeIndustry.caseStudy}</span>
                        <span className="text-accent transition-transform duration-200 group-hover/cs:translate-x-1 shrink-0" aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>

                  {/* Direct Specification & CTA Links */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <Link
                      to={`/industries/${activeIndustry.slug}`}
                      className="btn btn-secondary flex-1 py-3 text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2"
                    >
                      <span>VIEW FULL SPECIFICATION</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                    <Link
                      to="/contact"
                      className="btn btn-primary flex-1 py-3 text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2"
                    >
                      <span>DISCUSS THIS INDUSTRY</span>
                      <span className="arrow-hover" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>

      {/* SECTION 03 — END CTA BAND */}
      <section id="cta" data-scroll-label="STRATEGY CALL" className="px-4 sm:px-6 md:px-16 max-w-7xl mx-auto mt-16 sm:mt-24">
        <Reveal variant="scale" className="border border-border p-6 sm:p-10 md:p-14 text-center bg-bg/95 backdrop-blur-md">
          <div className="font-mono text-[12px] md:text-[13px] text-accent uppercase tracking-[0.14em] font-medium mb-3">
            DOMAIN ENGINEERING • 48-HOUR CONSULTATION
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-text mb-4">
            NEED A SPECIALIZED TECHNOLOGY BLUEPRINT FOR YOUR SECTOR?
          </h2>
          <p className="text-text-muted text-[15px] md:text-[16px] font-normal max-w-xl mx-auto mb-8 leading-[1.6]">
            Our domain architects collaborate with enterprise leadership to map technical requirements and deliver pilot architectures.
          </p>
          <Link to="/contact" className="btn btn-primary text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2">
            <span>BOOK STRATEGY CALL</span>
            <span className="arrow-hover" aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
