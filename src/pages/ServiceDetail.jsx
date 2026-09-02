import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import api from '../api';
import BlueprintWrapper from '../components/BlueprintWrapper';
import ReadingProgressBar from '../components/anim/ReadingProgressBar';
import TextReveal from '../components/anim/TextReveal';
import Reveal from '../components/anim/Reveal';
import RichTextRenderer from '../components/RichTextRenderer';

export default function ServiceDetail() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadService() {
      try {
        const res = await api.get(`/services/${slug}`);
        if (res.data && res.data.status === 'published') {
          setService(res.data);
          setError(null);
        } else if (res.data && !res.data.status) {
          // If public API returned the item (which it only does for published items)
          setService(res.data);
          setError(null);
        } else {
          setService(null);
          setError('The requested service is currently unavailable, in draft, or archived.');
        }
      } catch (err) {
        setService(null);
        setError('The requested service is currently unavailable, in draft, or archived.');
      } finally {
        setLoading(false);
      }
    }
    loadService();
  }, [slug]);

  if (loading) {
    return <div className="font-mono text-sm text-text-muted pt-32 pb-24 text-center">LOADING_SPECIFICATION...</div>;
  }

  if (error || !service) {
    return (
      <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto text-center">
        <BlueprintWrapper className="service-detail-surface p-12">
          <div className="font-mono text-xs text-accent uppercase mb-4">404 NOT FOUND</div>
          <h1 className="font-heading text-3xl text-text mb-4">SERVICE NOT FOUND</h1>
          <p className="text-text-muted mb-6">{error || 'The requested service specification does not exist.'}</p>
          <Link to="/services" className="btn btn-primary">
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Services
          </Link>
        </BlueprintWrapper>
      </div>
    );
  }

  return (
    <div className="relative z-10 pt-20 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 md:px-16 max-w-5xl mx-auto">
      <ReadingProgressBar />

      <Link to="/services" className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase mb-6 sm:mb-8 hover:underline min-h-[44px]">
        <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Services Catalog
      </Link>

      <div id="overview" data-scroll-label="OVERVIEW">
        <BlueprintWrapper className="service-detail-surface p-5 sm:p-8 md:p-12 mb-12">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="tag tag-accent">TECHNICAL SERVICE</span>
          <span className="font-mono text-xs text-text-muted">SLUG: {service.slug}</span>
        </div>

        <TextReveal
          text={service.title || service.name}
          as="h1"
          className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[var(--color-text)] mb-6 leading-[1.02]"
        />

        <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[var(--color-text-secondary)] font-normal border-l-2 border-[var(--color-accent)] pl-4 mb-8 text-left leading-[1.6]">
          {service.summary || service.tagline}
        </p>

        {service.cover_image_url && (
          <Reveal className="mb-10 overflow-hidden border border-border h-48 sm:h-64 md:h-80 relative bg-black/5 dark:bg-white/5">
            <img src={service.cover_image_url} alt={service.title} className="w-full h-full object-cover" />
          </Reveal>
        )}

        {/* Content Body */}
        {(service.content || service.description) && (
          <Reveal className="mb-12">
            <div className="type-body text-[15px] md:text-[16px] font-normal text-text-muted leading-[1.65] text-left md:text-justify">
              <RichTextRenderer content={service.content || service.description} />
            </div>
          </Reveal>
        )}

        {/* Capabilities list */}
        {service.capabilities && service.capabilities.length > 0 && (
          <div id="capabilities" data-scroll-label="CAPABILITIES">
            <Reveal className="border-t border-border pt-8 mb-12">
              <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-4 text-left">
                CORE CAPABILITIES &amp; INTEGRATIONS
              </h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {service.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 sm:gap-3 p-2 sm:p-3 bg-black/[0.035] dark:bg-white/[0.04] border border-border">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="font-mono text-[10px] sm:text-[12px] md:text-[13px] text-text font-normal truncate">{cap}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        )}

        {/* Technology Stack Tags */}
        {service.technology && service.technology.length > 0 && (
          <div id="technology" data-scroll-label="TECH STACK">
            <Reveal className="border-t border-border pt-8 mb-12">
              <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-4 text-left">
                MODERN TECHNOLOGY STACK
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {service.technology.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1.5 bg-black/[0.02] dark:bg-white/[0.04] border border-border text-[12px] md:text-[13px] text-text font-normal"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        )}

        {/* Accelerator / System & Case Study */}
        {(service.accelerator || service.caseStudy) && (
          <div id="accelerator" data-scroll-label="ACCELERATOR">
            <Reveal className="border-t border-border pt-8 mb-12">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-6">
                {service.accelerator && (
                  <div className="p-3 sm:p-5 bg-black/[0.02] dark:bg-white/[0.03] border border-border flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] sm:text-[11px] text-accent uppercase font-semibold block mb-0.5 sm:mb-1 truncate">PROPRIETARY ACCELERATOR</span>
                      <span className="font-heading text-xs sm:text-lg font-bold text-text uppercase block mb-1 sm:mb-3 truncate">{service.accelerator}</span>
                    </div>
                    <Link to="/products" className="text-[10px] sm:text-xs text-accent hover:underline inline-flex items-center gap-1 font-semibold truncate">
                      Explore Asset <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                    </Link>
                  </div>
                )}
                {service.caseStudy && (
                  <div className="p-3 sm:p-5 bg-black/[0.02] dark:bg-white/[0.03] border border-border flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] sm:text-[11px] text-text-muted uppercase font-semibold block mb-0.5 sm:mb-1 truncate">LINKED CASE STUDY</span>
                      <span className="font-heading text-xs sm:text-lg font-bold text-text uppercase block mb-1 sm:mb-3 truncate">{service.caseStudy}</span>
                    </div>
                    <Link to="/case-studies" className="text-[10px] sm:text-xs text-accent hover:underline inline-flex items-center gap-1 font-semibold truncate">
                      View Results <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        )}

        {/* CTA */}
        <div id="cta" data-scroll-label="STRATEGY CALL" className="border-t border-border pt-6 sm:pt-8 flex flex-row items-center justify-between gap-2 sm:gap-4">
          <div className="min-w-0 flex-1">
            <div className="font-heading text-xs sm:text-lg font-bold text-text uppercase truncate">Deploy This Capability</div>
            <div className="text-[10px] sm:text-xs text-text-muted truncate">Get a tailored proof-of-concept for your operations</div>
          </div>
          <Link to="/contact" className="btn btn-primary text-[10px] sm:text-sm py-2 px-3 shrink-0 whitespace-nowrap">
            Book Call <ArrowUpRight className="w-3.5 h-3.5 ml-1" strokeWidth={1.5} />
          </Link>
        </div>
      </BlueprintWrapper>
      </div>
    </div>
  );
}
