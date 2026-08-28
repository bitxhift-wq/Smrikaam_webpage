import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import BlueprintWrapper from '../components/BlueprintWrapper';
import TextReveal from '../components/anim/TextReveal';
import BannerDrawBorder from '../components/anim/BannerDrawBorder';
import Reveal from '../components/anim/Reveal';
import RichTextRenderer from '../components/RichTextRenderer';

export default function CaseStudies() {
  const { caseStudies: rawCaseStudies, isLoaded } = useCMS() || {};

  const displayList = useMemo(() => {
    if (!Array.isArray(rawCaseStudies)) return [];
    return rawCaseStudies;
  }, [rawCaseStudies]);

  const loading = !isLoaded;

  return (
    <div className="relative z-10 pt-28 pb-32 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div id="overview" data-scroll-label="CASE STUDIES" className="page-title-surface relative border border-border p-8 md:p-12 mb-16 overflow-hidden">
        <BannerDrawBorder />
        <div className="flex items-center justify-between mb-4">
          <div className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
            VERIFIED PROOF // CASE STUDIES
          </div>
          <div className="font-mono text-xs text-text-muted border border-border px-3 py-1 bg-black/[0.02] dark:bg-white/[0.03]">
            {displayList.length} DEPLOYMENT BLUEPRINTS
          </div>
        </div>

        <TextReveal
          text="REAL PROBLEMS. ENGINEERED SOLUTIONS. MEASURABLE OUTCOMES."
          as="h1"
          className="font-heading text-4xl md:text-6xl font-bold uppercase text-text mb-4"
        />
        <p className="text-text-muted text-lg max-w-3xl border-l-2 border-accent pl-4 font-normal leading-relaxed">
          Verified production case studies connecting client challenges, SMRIKAAM engineering solutions, proprietary accelerators, and quantitative business results.
        </p>
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
                <BlueprintWrapper className="p-8 hover:border-accent transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-border pb-4">
                    <div>
                      <span className="tag tag-accent mb-2">{cs.industry || 'MANUFACTURING'}</span>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-text">
                        {cs.title}
                      </h2>
                    </div>
                    {cs.accelerator && (
                      <div className="font-mono text-xs text-text-muted">
                        ACCELERATOR: <strong className="text-accent font-bold">{cs.accelerator}</strong>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* 1. Industry & Client */}
                    <div className="subtle-readable-surface p-4 border border-border">
                      <h3 className="font-mono text-xs text-text-muted uppercase font-bold mb-1">1. INDUSTRY &amp; DOMAIN</h3>
                      <p className="text-sm font-semibold text-text">{cs.client_name || 'Enterprise Client'}</p>
                      <span className="text-xs text-text-muted">{cs.industry}</span>
                    </div>

                    {/* 2. Challenge */}
                    <div className="subtle-readable-surface p-4 border border-border">
                      <h3 className="font-mono text-xs text-text-muted uppercase font-bold mb-1">2. CHALLENGE</h3>
                      <div className="text-xs text-text-muted leading-relaxed font-normal">
                        <RichTextRenderer content={cs.challenge} />
                      </div>
                    </div>

                    {/* 3. Solution */}
                    <div className="bg-accent/5 p-4 border border-accent/30">
                      <h3 className="font-mono text-xs text-accent uppercase font-bold mb-1">3. SMRIKAAM SOLUTION</h3>
                      <div className="text-xs text-text font-medium leading-relaxed">
                        <RichTextRenderer content={cs.solution} />
                      </div>
                    </div>

                    {/* 4. Result */}
                    <div className="subtle-readable-surface p-4 border border-border">
                      <h3 className="font-mono text-xs text-text uppercase font-bold mb-1">4. RESULT &amp; METRICS</h3>
                      {rawOutcomes.length > 0 ? (
                        <div className="space-y-1">
                          {rawOutcomes.map((out, i) => (
                            <div key={i} className="text-xs">
                              <strong className="text-accent font-bold">{out.metric}</strong> <span className="text-text-muted font-normal">{out.label}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs font-bold text-accent">35% Downtime Reduction &amp; 99.999% SLA</p>
                      )}
                    </div>
                  </div>

                  {/* 5. Technology & Links */}
                  <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-text-muted">STACK:</span>
                      {technologies.map((tech, i) => (
                        <span key={i} className="tag tag-neutral text-xs font-mono font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link to={`/case-studies/${cs.slug || cs.id}`} className="btn btn-primary text-xs font-bold uppercase tracking-wider">
                      View Full Specification <ArrowUpRight className="w-4 h-4 ml-1" />
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

