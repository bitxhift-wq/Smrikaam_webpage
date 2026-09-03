import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Cpu, Cloud, Database, Brain,
  GitMerge, Network, ShieldCheck, Wrench, Compass, Zap, Building2
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import TextReveal from '../components/anim/TextReveal';
import BannerDrawBorder from '../components/anim/BannerDrawBorder';
import Reveal from '../components/anim/Reveal';
import RichTextRenderer from '../components/RichTextRenderer';
import DecorativeSideCubes from '../components/visuals/DecorativeSideCubes';
import MobileTabSelector from '../components/MobileTabSelector';
import PageCTA from '../components/PageCTA';
import ServiceDetailPanel from '../components/ServiceDetailPanel';

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

export default function Services() {
  const { services: rawCmsServices, accelerators: rawAccelerators, caseStudies: rawCaseStudies, isLoaded } = useCMS() || {};
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
        const headerEl = document.querySelector('header') || document.querySelector('nav');
        const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 80;
        const rect = detailContainerRef.current.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;
        const targetScroll = Math.max(0, absoluteTop - headerHeight - 16);

        window.scrollTo({
          top: targetScroll,
          behavior: 'auto'
        });
      }
    });

    return () => cancelAnimationFrame(frameId);
  }, [activeIdx]);

  const iconMap = {
    'ai-ml': Brain,
    'iiot-edge': Cpu,
    'devops-cloud': Cloud,
    'data-engineering': Database,
    'generative-ai': GitMerge,
    'data-governance': ShieldCheck,
    integration: Network,
    servicenow: Wrench,
    advisory: Compass,
    'ai-workflow': Zap
  };

  const services = useMemo(() => {
    if (!Array.isArray(rawCmsServices)) return [];
    return rawCmsServices.map((item, idx) => {
      const slugLower = (item.slug || item.id || '').toLowerCase();
      
      const linkedAcc = Array.isArray(rawAccelerators)
        ? rawAccelerators.find(acc => 
            acc.category?.toLowerCase().includes(slugLower) || 
            (acc.slug && acc.slug.includes(slugLower))
          )
        : null;

      const linkedCase = Array.isArray(rawCaseStudies)
        ? rawCaseStudies.find(cs => 
            cs.service?.toLowerCase() === item.title?.toLowerCase() ||
            cs.service?.toLowerCase() === slugLower ||
            (cs.slug && cs.slug.includes(slugLower))
          )
        : null;

      return {
        id: item.slug || item.id,
        slug: item.slug || item.id,
        num: String(idx + 1).padStart(2, '0'),
        title: item.title || item.name,
        icon: iconMap[slugLower] || Building2,
        tagline: item.summary || item.tagline || '',
        description: item.content || item.description || item.summary || '',
        businessProblems: parseBulletPoints(item.businessProblems || item.challenge || item.problemStatement || [
          'High operational friction caused by legacy system fragmentation.',
          'Lack of real-time visibility across critical enterprise workflows.',
          'Scaling bottlenecks preventing continuous digital transformation.'
        ]),
        capabilities: Array.isArray(item.capabilities) && item.capabilities.length > 0
          ? item.capabilities
          : (Array.isArray(item.key_solutions) ? item.key_solutions : [
              'Enterprise System Architecture',
              'Sub-Second Data Synchronization',
              'Automated Pipeline Monitoring',
              'Governance & Security Compliance'
            ]),
        technology: Array.isArray(item.technology) && item.technology.length > 0
          ? item.technology
          : (Array.isArray(item.techStack) && item.techStack.length > 0 ? item.techStack : ['Python', 'Docker', 'Kubernetes', 'React', 'PostgreSQL']),
        outcomes: item.outcomes || item.outcome || item.businessOutcomes || 'Delivers measurable operational efficiency, 99.9% uptime, and scalable enterprise performance.',
        accelerator: linkedAcc ? linkedAcc.name : (item.accelerator || 'Proprietary SMRIKAAM Asset'),
        caseStudy: linkedCase ? linkedCase.title : (item.caseStudy || `${item.title || item.name} Deployment Blueprint`),
        image: item.cover_image_url || item.image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
        caption: `${(item.title || item.name).toUpperCase()} — Architecture Blueprint`
      };
    });
  }, [rawCmsServices, rawAccelerators, rawCaseStudies]);

  // Preload images to eliminate flickers
  useEffect(() => {
    services.forEach((srv) => {
      if (srv.image) {
        const img = new Image();
        img.src = srv.image;
      }
    });
  }, [services]);

  const handleMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    setMousePos({ x, y });
  };

  const activeService = services[activeIdx] || services[0] || null;

  const rotateX = isHovered ? (0.5 - mousePos.y) * 4 : 0;
  const rotateY = isHovered ? (mousePos.x - 0.5) * 4 : 0;
  const translateX = isHovered ? (mousePos.x - 0.5) * 10 : 0;
  const translateY = isHovered ? (mousePos.y - 0.5) * 10 : 0;

  return (
    <div className="relative z-10 pt-20 sm:pt-28 pb-16 sm:pb-24 text-text">
      {/* SECTION 01 — SERVICES HERO */}
      <section id="overview" data-scroll-label="SERVICES" className="relative px-4 sm:px-6 md:px-16 max-w-7xl mx-auto mb-12 sm:mb-16">
        <DecorativeSideCubes leftSize={120} rightSize={140} leftTop="10%" rightTop="25%" />
        <div className="page-title-surface relative z-10 border border-border p-5 sm:p-8 md:p-12 overflow-hidden">
          <BannerDrawBorder />
          <div className="flex items-center justify-between mb-4">
            <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-accent)] uppercase tracking-[0.2em] font-semibold">
              ENGINEERING CAPABILITIES
            </div>
            <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-text-muted)] border border-[var(--color-border)] px-3 py-1 bg-black/[0.02] dark:bg-white/[0.03]">
              TECHNICAL SERVICES
            </div>
          </div>

          <TextReveal
            text="COMPLEX SYSTEMS. ENGINEERED FOR SCALE."
            as="h1"
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--color-text)] leading-[0.96] mb-4 max-w-5xl"
          />

          <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[var(--color-text-secondary)] max-w-3xl font-normal leading-[1.6] border-l-2 border-[var(--color-accent)] pl-4 text-left">
            Engineering services spanning data, AI/ML, cloud, IIoT, cybersecurity, automation, and enterprise platforms.
          </p>
        </div>
      </section>

      {/* SECTION 02 — THE SERVICE SYSTEM (Interactive Master-Detail Architecture) */}
      <section id="capabilities" data-scroll-label="SERVICE SYSTEM" className="px-4 sm:px-6 md:px-16 max-w-7xl mx-auto mb-16 sm:mb-20">
        {services.length === 0 ? (
          <div className="page-title-surface border border-border p-12 text-center my-12">
            <div className="font-mono text-xs text-accent uppercase mb-2">SYSTEM STATUS</div>
            <h2 className="font-heading text-2xl font-bold uppercase text-text mb-2">NO PUBLISHED SERVICES CURRENTLY AVAILABLE</h2>
            <p className="text-text-muted text-sm max-w-md mx-auto">All services are currently in draft, undergoing maintenance, or archived.</p>
          </div>
        ) : (
          <div>
            {/* Mobile Selector Dropdown (Active on Mobile ONLY <768px, sits ABOVE detail panel) */}
            <MobileTabSelector
              items={services}
              activeIdx={activeIdx}
              setActiveIdx={setActiveIdx}
              tabIdPrefix="service"
              ariaLabel="Enterprise Services"
            />

            <div className="grid grid-cols-12 gap-3 sm:gap-6 lg:gap-12 items-start border-t border-border/70 pt-6 sm:pt-10">
              
              {/* Left Column: Services Selector List (Active on Desktop ONLY >=768px) */}
              <aside className="hidden md:block col-span-5 lg:col-span-4 sticky top-16 sm:top-20 self-start z-20">
                <div
                  role="tablist"
                  aria-label="Enterprise Services"
                  className="page-title-surface border border-border overflow-hidden flex flex-col divide-y divide-border/70"
                >
                {services.map((srv, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <div
                      key={srv.id}
                      role="tab"
                      id={`service-tab-${srv.slug || srv.id}`}
                      aria-selected={isActive}
                      aria-controls={`service-panel-${srv.slug || srv.id}`}
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
                          <h3 className={`font-heading text-xs sm:text-base md:text-lg font-bold tracking-tight transition-colors uppercase truncate ${
                            isActive ? 'text-accent' : 'text-text/90 group-hover:text-accent'
                          }`}>
                            {srv.title}
                          </h3>
                        </div>

                        <span
                          className={`text-xs sm:text-sm shrink-0 mt-0.5 transition-transform duration-200 ${
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

              {/* Right Column: Active Service Detailed Stage */}
              {activeService && (
                <div ref={detailContainerRef} className="col-span-12 md:col-span-7 lg:col-span-8 min-w-0 w-full">
                  <ServiceDetailPanel
                    service={activeService}
                    stageRef={stageRef}
                    isHovered={isHovered}
                    mousePos={mousePos}
                    handleMouseMove={handleMouseMove}
                    setIsHovered={setIsHovered}
                    setMousePos={setMousePos}
                    isStandalone={false}
                  />
                </div>
              )}
          </div>
        </div>
      )}
    </section>

      {/* SECTION 03 — END CTA BAND */}
      <section id="cta" data-scroll-label="STRATEGY CALL" className="px-4 sm:px-6 md:px-16 max-w-7xl mx-auto">
        <PageCTA
          eyebrow="ENGINEERING CONSULTATION"
          title="READY TO ENGINEER THE NEXT SYSTEM?"
          description="Let's review your architecture, engineering constraints, and transformation objectives directly with our technical leads."
          buttonText="DISCUSS YOUR REQUIREMENTS"
          buttonLink="/contact"
        />
      </section>
    </div>
  );
}
