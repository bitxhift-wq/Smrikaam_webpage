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

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8">
                    {/* Industry & Client */}
                    <div className="subtle-readable-surface p-5 border border-border flex flex-col justify-between">
                      <div>
                        <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-2 text-left">
                          INDUSTRY &amp; DOMAIN
                        </h3>
                        <p className="text-[15px] font-medium text-text">{cs.client_name || 'Enterprise Client'}</p>
                      </div>
                      <span className="text-[13px] text-text-muted font-normal mt-2">{cs.industry}</span>
                    </div>

                    {/* Challenge */}
                    <div className="subtle-readable-surface p-5 border border-border">
                      <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-2 text-left">
                        CHALLENGE
                      </h3>
                      <div className="text-[14px] md:text-[15px] text-text-muted leading-[1.65] font-normal text-left md:text-justify">
                        <RichTextRenderer content={cs.challenge} />
                      </div>
                    </div>

                    {/* Solution */}
                    <div className="bg-accent/5 p-5 border border-accent/30">
                      <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-2 text-left">
                        SMRIKAAM SOLUTION
                      </h3>
                      <div className="text-[14px] md:text-[15px] text-text font-normal leading-[1.65] text-left md:text-justify">
                        <RichTextRenderer content={cs.solution} />
                      </div>
                    </div>

                    {/* Result */}
                    <div className="subtle-readable-surface p-5 border border-border flex flex-col justify-between">
                      <div>
                        <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-2 text-left">
                          RESULT &amp; METRICS
                        </h3>
                        {rawOutcomes.length > 0 ? (
                          <div className="space-y-2 mt-1">
                            {rawOutcomes.map((out, i) => (
                              <div key={i} className="border-l-2 border-accent pl-2.5">
                                <div className="font-heading text-lg md:text-xl font-bold text-accent">{out.metric}</div>
                                <div className="text-[12px] text-text-muted font-normal leading-tight">{out.label}</div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="border-l-2 border-accent pl-2.5 mt-1">
                            <div className="font-heading text-lg font-bold text-accent">35% Downtime Reduction</div>
                            <div className="text-[12px] text-text-muted font-normal">99.999% Platform Uptime SLA</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 5. Technology & Links */}
                  <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">STACK:</span>
                      {technologies.map((tech, i) => (
                        <span key={i} className="inline-flex items-center px-2.5 py-1 bg-bg border border-border text-[12px] md:text-[13px] text-text font-normal">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link to={`/case-studies/${cs.slug || cs.id}`} className="btn btn-primary text-xs font-semibold uppercase tracking-wider">
                      <span>View Full Specification</span>
                      <ArrowUpRight className="w-4 h-4 ml-1" />
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

