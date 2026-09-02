import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import api from '../api';
import BlueprintWrapper from '../components/BlueprintWrapper';
import ReadingProgressBar from '../components/anim/ReadingProgressBar';
import TextReveal from '../components/anim/TextReveal';
import Reveal from '../components/anim/Reveal';
import RichTextRenderer from '../components/RichTextRenderer';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCaseStudy() {
      try {
        const res = await api.get(`/case-studies/${slug}`);
        if (res.data && (res.data.status === 'published' || !res.data.status)) {
          setCaseStudy(res.data);
          setError(null);
        } else {
          setCaseStudy(null);
          setError('The requested case study deployment blueprint is currently unavailable or archived.');
        }
      } catch (err) {
        setCaseStudy(null);
        setError('The requested case study deployment blueprint is currently unavailable or archived.');
      } finally {
        setLoading(false);
      }
    }
    loadCaseStudy();
  }, [slug]);

  if (loading) {
    return <div className="font-mono text-sm text-text-muted pt-32 pb-24 text-center">LOADING_CASE_STUDY...</div>;
  }

  if (error || !caseStudy) {
    return (
      <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto text-center">
        <BlueprintWrapper className="p-12">
          <div className="font-mono text-xs text-accent uppercase mb-4">404 NOT FOUND</div>
          <h1 className="font-heading text-3xl text-text mb-4 uppercase">CASE STUDY NOT FOUND</h1>
          <p className="text-text-muted mb-6">{error}</p>
          <Link to="/case-studies" className="btn btn-primary">
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Case Studies
          </Link>
        </BlueprintWrapper>
      </div>
    );
  }

  const outcomes = Array.isArray(caseStudy.outcomes) ? caseStudy.outcomes : [];

  return (
    <div className="relative z-10 pt-20 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 md:px-16 max-w-5xl mx-auto">
      <ReadingProgressBar />

      <Link to="/case-studies" className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase mb-6 sm:mb-8 hover:underline min-h-[44px]">
        <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Case Studies
      </Link>

      <div id="overview" data-scroll-label="OVERVIEW">
        <BlueprintWrapper className="service-detail-surface p-5 sm:p-8 md:p-12 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-3 text-xs text-text-muted">
              <span className="tag tag-accent">{caseStudy.industry || 'CASE STUDY'}</span>
              {caseStudy.client_name && <span>{caseStudy.client_name}</span>}
            </div>
            {caseStudy.accelerator && (
              <span className="text-xs text-accent border border-accent px-2 py-0.5 uppercase font-semibold">
                {caseStudy.accelerator}
              </span>
            )}
          </div>

          <TextReveal
            text={caseStudy.title}
            as="h1"
            className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[var(--color-text)] mb-6 leading-[1.02]"
          />

          {caseStudy.cover_image_url && (
            <Reveal className="mb-10 overflow-hidden border border-border h-48 sm:h-64 md:h-80 relative bg-black/5 dark:bg-white/5">
              <img src={caseStudy.cover_image_url} alt={caseStudy.title} className="w-full h-full object-cover" />
            </Reveal>
          )}

          {/* Quantified Outcomes Banner */}
          {outcomes.length > 0 && (
            <div id="metrics" data-scroll-label="METRICS">
              <Reveal className="mb-12 p-4 sm:p-6 subtle-readable-surface border border-border">
                <div className="font-mono text-[10px] md:text-[11px] text-accent uppercase tracking-[0.2em] mb-4 font-semibold text-left">VERIFIED MEASURABLE METRICS</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {outcomes.map((out, idx) => (
                    <div key={idx} className="border-l-2 border-accent pl-4 text-left">
                      <div className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-accent">
                        {out.metric}
                      </div>
                      <div className="font-mono text-xs text-text-muted uppercase mt-1 font-normal">
                        {out.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          )}

          {/* Challenge Section */}
          {caseStudy.challenge && (
            <div id="challenge" data-scroll-label="CHALLENGE">
              <Reveal className="border-t border-border pt-8 mb-12">
                <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-3 text-left">
                  THE CHALLENGE
                </h3>
                <div className="text-[14px] md:text-[15px] font-normal text-text-muted leading-[1.6] text-left md:text-justify">
                  <RichTextRenderer content={caseStudy.challenge} />
                </div>
              </Reveal>
            </div>
          )}

          {/* Solution Section */}
          {caseStudy.solution && (
            <div id="solution" data-scroll-label="SOLUTION">
              <Reveal className="border-t border-border pt-8 mb-12">
                <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-3 text-left">
                  THE SMRIKAAM SOLUTION
                </h3>
                <div className="text-[14px] md:text-[15px] font-normal text-text leading-[1.6] text-left md:text-justify bg-accent/5 p-4 sm:p-6 border border-accent/30">
                  <RichTextRenderer content={caseStudy.solution} />
                </div>
              </Reveal>
            </div>
          )}

          {/* Full Content if available */}
          {caseStudy.content && (
            <div id="details" data-scroll-label="DETAILS">
              <Reveal className="border-t border-border pt-8 mb-12">
                <div className="text-[14px] md:text-[15px] font-normal text-text-muted leading-[1.6] text-justify">
                  <RichTextRenderer content={caseStudy.content} />
                </div>
              </Reveal>
            </div>
          )}

          {/* Technologies Used */}
          {caseStudy.technologies && caseStudy.technologies.length > 0 && (
            <div id="technologies" data-scroll-label="TECHNOLOGY">
              <Reveal className="border-t border-border pt-8 mb-12">
                <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-3 text-left">
                  TECHNOLOGY STACK DEPLOYED
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {caseStudy.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1.5 bg-bg border border-border text-[12px] md:text-[13px] text-text font-normal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          )}

          <div id="cta" data-scroll-label="STRATEGY CALL" className="border-t border-border pt-6 sm:pt-8 flex flex-row items-center justify-between gap-2 sm:gap-4">
            <div className="min-w-0 flex-1">
              <div className="font-heading text-xs sm:text-lg font-bold text-text uppercase truncate">Achieve Similar Outcomes</div>
              <div className="font-mono text-[10px] sm:text-xs text-text-muted font-normal truncate">Speak with our technical solution architects</div>
            </div>
            <Link to="/contact" className="btn btn-primary text-[10px] sm:text-sm py-2 px-3 shrink-0 whitespace-nowrap">
              Review Study <ArrowUpRight className="w-3.5 h-3.5 ml-1" strokeWidth={1.5} />
            </Link>
          </div>
        </BlueprintWrapper>
      </div>
    </div>
  );
}
