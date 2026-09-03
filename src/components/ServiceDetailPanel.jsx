import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

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

export default function ServiceDetailPanel({
  service,
  stageRef,
  isHovered,
  mousePos,
  handleMouseMove,
  setIsHovered,
  setMousePos,
  isStandalone = false
}) {
  if (!service) return null;

  const rotateX = isHovered && mousePos ? (0.5 - mousePos.y) * 4 : 0;
  const rotateY = isHovered && mousePos ? (mousePos.x - 0.5) * 4 : 0;

  const businessProblems = parseBulletPoints(service.businessProblems || service.business_problems || service.challenge || service.problemStatement);
  const capabilities = Array.isArray(service.capabilities) ? service.capabilities : [];
  const technology = Array.isArray(service.technology) ? service.technology : (Array.isArray(service.techStack) ? service.techStack : []);
  const outcomes = service.outcomes || service.outcome || service.businessOutcomes || 'Delivers measurable operational efficiency, 99.9% uptime, and scalable enterprise performance.';

  const acceleratorName = service.accelerator || 'Proprietary SMRIKAAM Asset';
  const acceleratorSlug = service.acceleratorSlug || service.accelerator_slug || 'bitxhift';
  const caseStudyTitle = service.caseStudy || service.case_study || 'Smart Factory Manufacturing Transformation';
  const caseStudySlug = service.caseStudySlug || service.case_study_slug || 'case-studies';
  const heroImage = service.cover_image_url || service.image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop';
  const serviceSlug = service.slug || service.id;

  return (
    <div
      role={isStandalone ? undefined : 'tabpanel'}
      id={`service-panel-${serviceSlug}`}
      aria-labelledby={isStandalone ? undefined : `service-tab-${serviceSlug}`}
      className="service-detail-panel p-2.5 sm:p-6 md:p-8 space-y-4 sm:space-y-6"
    >
      {/* 1. Header: Title */}
      <div className="border-b border-border/70 pb-5">
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-text tracking-tight uppercase">
          {service.title || service.name}
        </h2>
      </div>

      {/* 2. Service Detailed Narrative / Description */}
      {(service.description || service.summary || service.content) && (
        <div className="type-body text-[15px] md:text-[16px] font-normal text-text-muted leading-[1.7] text-left md:text-justify">
          <div className="cms-content max-w-none text-text">
            <p className="cms-paragraph type-body text-[15px] md:text-[16px] text-text font-normal leading-[1.65] my-4 first:mt-0 last:mb-0">
              {typeof service.description === 'string' && !service.description.startsWith('#')
                ? service.description
                : (service.summary || service.description)}
            </p>
          </div>
        </div>
      )}

      {/* 3. Hero Image with optional Parallax */}
      <div
        ref={stageRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered && setIsHovered(true)}
        onMouseLeave={() => {
          if (setIsHovered) setIsHovered(false);
          if (setMousePos) setMousePos({ x: 0.5, y: 0.5 });
        }}
        className="relative overflow-hidden aspect-video border border-border bg-black/5 dark:bg-white/5"
      >
        <img
          src={heroImage}
          alt={service.title || service.name}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
          className="w-full h-full object-cover transition-transform duration-300 ease-out"
          style={{
            transform: stageRef ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0, 0, 0)` : 'none'
          }}
        />
      </div>

      {/* 4. BUSINESS PROBLEMS SOLVED */}
      {businessProblems.length > 0 && (
        <div className="border-t border-border/70 pt-6">
          <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-2.5 text-left">
            BUSINESS PROBLEMS SOLVED
          </h3>
          <ul className="space-y-2">
            {businessProblems.map((prob, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[15px] md:text-[15px] font-normal text-text leading-[1.7]">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" aria-hidden="true" />
                <div>{renderBulletText(prob)}</div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 5. CORE CAPABILITIES */}
      {capabilities.length > 0 && (
        <div className="border-t border-border/70 pt-6">
          <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-3 text-left">
            CORE CAPABILITIES
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3.5 py-2 bg-black/[0.03] dark:bg-white/[0.04] border border-border text-[12px] md:text-[13px] text-text font-normal"
              >
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. MODERN TECHNOLOGY STACK */}
      {technology.length > 0 && (
        <div className="border-t border-border/70 pt-6">
          <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-3 text-left">
            MODERN TECHNOLOGY STACK
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {technology.map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center px-3 py-1.5 bg-bg border border-border text-[12px] md:text-[13px] text-text font-normal"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 7. BUSINESS OUTCOME */}
      {outcomes && (
        <div className="border-t border-border/70 pt-6">
          <div className="p-4 bg-black/[0.02] dark:bg-white/[0.03] border-l-2 border-accent">
            <div className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-1.5 text-left">
              BUSINESS OUTCOME
            </div>
            <p className="text-[14px] md:text-[15px] text-text font-normal leading-[1.5] text-left">
              {outcomes}
            </p>
          </div>
        </div>
      )}

      {/* 8. Metadata Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-border/70 text-[13px]">
        <div className="p-3.5 border border-border/70 flex flex-col justify-between">
          <span className="text-[11px] text-text-muted font-normal uppercase tracking-wider mb-1.5 text-left">
            ENGINEERED PRODUCT / ASSET
          </span>
          <Link to={`/products/${acceleratorSlug}`} className="text-text font-semibold hover:text-accent transition-colors inline-flex items-center gap-1.5 group/acc">
            <span>{acceleratorName}</span>
            <span className="text-accent transition-transform duration-200 group-hover/acc:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="p-3.5 border border-border/70 flex flex-col justify-between">
          <span className="text-[11px] text-text-muted font-normal uppercase tracking-wider mb-1.5 text-left">
            CASE STUDY / WORKBENCH
          </span>
          <Link to={caseStudySlug === 'case-studies' ? '/case-studies' : `/case-studies/${caseStudySlug}`} className="text-text font-semibold hover:text-accent transition-colors inline-flex items-center gap-1.5 group/cs">
            <span className="line-clamp-1">{caseStudyTitle}</span>
            <span className="text-accent transition-transform duration-200 group-hover/cs:translate-x-1 shrink-0" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* 9. Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row gap-3">
        {isStandalone ? (
          <Link
            to="/services"
            className="btn btn-secondary flex-1 py-3 text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>BACK TO SERVICES CATALOG</span>
          </Link>
        ) : (
          <Link
            to={`/services/${serviceSlug}`}
            className="btn btn-secondary flex-1 py-3 text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2"
          >
            <span>VIEW FULL SPECIFICATION</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        )}
        <Link
          to="/contact"
          className="btn btn-primary flex-1 py-3 text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2"
        >
          <span>DISCUSS THIS SERVICE</span>
          <span className="arrow-hover" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
