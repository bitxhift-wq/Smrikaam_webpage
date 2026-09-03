import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import BlueprintWrapper from '../components/BlueprintWrapper';
import TextReveal from '../components/anim/TextReveal';
import BannerDrawBorder from '../components/anim/BannerDrawBorder';
import Reveal from '../components/anim/Reveal';
import RichTextRenderer from '../components/RichTextRenderer';
import DecorativeSideCubes from '../components/visuals/DecorativeSideCubes';

export default function CaseStudies() {
  const { caseStudies: rawCaseStudies, isLoaded } = useCMS() || {};

  const displayList = useMemo(() => {
    if (!Array.isArray(rawCaseStudies)) return [];
    return rawCaseStudies;
  }, [rawCaseStudies]);

  const loading = !isLoaded;

  return (
    <div className="relative z-10 pt-20 sm:pt-28 pb-20 sm:pb-32 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div id="overview" data-scroll-label="CASE STUDIES" className="relative mb-16">
        <DecorativeSideCubes leftSize={120} rightSize={140} leftTop="10%" rightTop="25%" />
        <div className="page-title-surface relative z-10 border border-border p-6 sm:p-8 md:p-12 overflow-hidden">
        <BannerDrawBorder />
        <div className="flex items-center justify-between mb-4">
          <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-accent)] uppercase tracking-[0.2em] font-semibold">
            VERIFIED PROOF &amp; CASE STUDIES
          </div>
          <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-text-muted)] border border-[var(--color-border)] px-3 py-1 bg-black/[0.02] dark:bg-white/[0.03]">
            DEPLOYMENT BLUEPRINTS
          </div>
        </div>

        <TextReveal
          text="REAL PROBLEMS. ENGINEERED SOLUTIONS. MEASURABLE OUTCOMES."
          as="h1"
          className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--color-text)] leading-[0.96] mb-4"
        />
        <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[var(--color-text-secondary)] max-w-3xl border-l-2 border-[var(--color-accent)] pl-4 font-normal leading-[1.6]">
          Verified production case studies connecting client challenges, SMRIKAAM engineering solutions, proprietary accelerators, and quantitative business results.
        </p>
      </div>
      </div>

      {loading ? (
        <div className="font-mono text-sm text-text-muted py-12 text-center">LOADING_CASE_STUDIES...</div>
      ) : (
        <div id="featured" data-scroll-label="DEPLOYMENT BLUEPRINTS" className="space-y-12">
          {displayList.map((cs, idx) => {
            const rawOutcomes = Array.isArray(cs.outcomes) ? cs.outcomes : typeof cs.outcomes === 'string' ? JSON.parse(cs.outcomes || '[]') : [];
            const technologies = Array.isArray(cs.technologies) ? cs.technologies : ['PostgreSQL', 'MQTT', 'BitXhift', 'Python'];

            return (
              <Reveal key={cs.id || cs.slug || idx} index={idx}>
                <BlueprintWrapper className="p-4 sm:p-8 hover:border-accent transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-border pb-4">
                    <div>
                      <span className="tag tag-accent mb-2">{cs.industry || 'MANUFACTURING'}</span>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-text">
                        {cs.title}
                      </h2>
                    </div>
                    {cs.accelerator && (
                      <div className="font-mono text-xs text-text-muted uppercase">
                        ACCELERATOR: <span className="text-accent font-medium">{cs.accelerator}</span>
                      </div>
                    )}
                  </div>

                  {/* Inline Editorial Specification Layout */}
                  <div className="mb-6 border-b border-border">
                    {/* Row 1: INDUSTRY & DOMAIN */}
                    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3 md:gap-8 py-5 border-t border-border">
                      <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent text-left">
                        INDUSTRY &amp; DOMAIN
                      </h3>
                      <div className="text-[15px] md:text-[16px] text-text font-normal leading-[1.65] text-left md:text-justify">
                        <p className="font-normal text-text">
                          {cs.client_name || 'Enterprise Client'}
                        </p>
                        <p className="text-[13px] text-text-muted font-normal leading-[1.6] mt-1">
                          {cs.industry}
                        </p>
                      </div>
                    </div>

                    {/* Row 2: CHALLENGE */}
                    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3 md:gap-8 py-5 border-t border-border">
                      <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent text-left">
                        CHALLENGE
                      </h3>
                      <div className="text-[15px] md:text-[16px] text-text font-normal leading-[1.65] text-left md:text-justify">
                        <RichTextRenderer content={cs.challenge} />
                      </div>
                    </div>

                    {/* Row 3: SMRIKAAM SOLUTION */}
                    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3 md:gap-8 py-5 border-t border-border">
                      <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent text-left">
                        SMRIKAAM SOLUTION
                      </h3>
                      <div className="text-[15px] md:text-[16px] text-text font-normal leading-[1.65] text-left md:text-justify">
                        <RichTextRenderer content={cs.solution} />
                      </div>
                    </div>

                    {/* Row 4: RESULT & METRICS */}
                    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3 md:gap-8 py-5 border-t border-border">
                      <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent text-left">
                        RESULT &amp; METRICS
                      </h3>
                      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 text-[15px] md:text-[16px] leading-[1.65]">
                        {rawOutcomes.length > 0 ? (
                          rawOutcomes.map((out, i) => (
                            <div key={i} className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                              <span className="font-heading text-[16px] md:text-[18px] font-bold text-accent">
                                {out.metric}
                              </span>
                              <span className="text-[13px] md:text-[14px] text-text-muted font-normal">
                                {out.label}
                              </span>
                            </div>
                          ))
                        ) : (
                          <>
                            <span className="font-heading text-[16px] md:text-[18px] font-bold text-accent">
                              35% Downtime Reduction
                            </span>
                            <span className="text-[13px] md:text-[14px] text-text-muted font-normal">
                              99.999% Platform Uptime SLA
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 5. Technology & Links */}
                  <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">STACK:</span>
                      {technologies.map((tech, i) => (
                        <span key={i} className="inline-flex items-center px-2.5 py-1 bg-bg border border-border text-[12px] md:text-[13px] text-text font-normal">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link to={`/case-studies/${cs.slug || cs.id}`} className="btn btn-primary text-xs font-semibold uppercase tracking-wider shrink-0 w-full sm:w-auto text-center justify-center">
                      <span>View Full Specification</span>
                      <ArrowUpRight className="w-4 h-4 ml-1 inline" />
                    </Link>
                  </div>
                </BlueprintWrapper>
              </Reveal>
            );
          })}
        </div>
      )}

      {/* End CTA */}
      <div className="mt-16 border border-border p-10 text-center bg-bg/95 backdrop-blur-md">
        <h2 className="font-heading text-3xl font-bold uppercase text-text mb-3">
          WANT A DETAILED ARCHITECTURE DEEP-DIVE?
        </h2>
        <p className="text-text-muted max-w-xl mx-auto mb-6">
          Book a strategy session to review system schematics, latency benchmarks, and code architectures from past client deployments.
        </p>
        <Link to="/contact" className="btn btn-primary text-sm font-bold uppercase tracking-wider">
          BOOK STRATEGY CALL <ArrowUpRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}

