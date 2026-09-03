import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import api from '../api';
import BlueprintWrapper from '../components/BlueprintWrapper';
import ReadingProgressBar from '../components/anim/ReadingProgressBar';
import TextReveal from '../components/anim/TextReveal';
import Reveal from '../components/anim/Reveal';
import RichTextRenderer from '../components/RichTextRenderer';

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

export default function IndustryDetail() {
  const { slug } = useParams();
  const [industry, setIndustry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const industryImageMap = {
    manufacturing: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
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

  useEffect(() => {
    async function loadIndustry() {
      try {
        const res = await api.get(`/industries/${slug}`);
        if (res.data && (res.data.status === 'published' || !res.data.status)) {
          setIndustry(res.data);
          setError(null);
        } else {
          setIndustry(null);
          setError('The requested industry sector profile is currently unavailable or archived.');
        }
      } catch (err) {
        setIndustry(null);
        setError('The requested industry sector profile is currently unavailable or archived.');
      } finally {
        setLoading(false);
      }
    }
    loadIndustry();
  }, [slug]);

  if (loading) {
    return <div className="font-mono text-sm text-text-muted pt-32 pb-24 text-center">LOADING_SECTOR_PROFILE...</div>;
  }

  if (error || !industry) {
    return (
      <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto text-center">
        <BlueprintWrapper className="service-detail-surface p-12">
          <div className="font-mono text-xs text-accent uppercase mb-4">404 NOT FOUND</div>
          <h1 className="font-heading text-3xl text-text mb-4 uppercase">SECTOR NOT FOUND</h1>
          <p className="text-text-muted mb-6">{error || 'The requested industry sector specification does not exist.'}</p>
          <Link to="/industries" className="btn btn-primary">
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Industries Catalog
          </Link>
        </BlueprintWrapper>
      </div>
    );
  }

  const slugLower = (industry.slug || slug || '').toLowerCase();
  const relatedAcc = industry.acceleratorName && industry.acceleratorSlug
    ? { name: industry.acceleratorName, slug: industry.acceleratorSlug }
    : (acceleratorMap[slugLower] || { name: 'BitXhift & LinkGenX', slug: 'bitxhift' });

  const businessProblemsRaw = industry.businessProblems || industry.challenge || industry.problemStatement || [
    'Complex legacy architecture causing operational friction and delayed telemetry visibility.',
    'Stringent compliance constraints and data privacy requirements across distributed systems.',
    'High maintenance overhead and lack of predictive fault intelligence.'
  ];

  const businessProblems = parseBulletPoints(businessProblemsRaw);
  const capabilities = Array.isArray(industry.capabilities) && industry.capabilities.length > 0
    ? industry.capabilities
    : (Array.isArray(industry.useCases) ? industry.useCases : (Array.isArray(industry.key_solutions) ? industry.key_solutions : [
        'Domain Telemetry Ingestion',
        'Real-Time Anomaly Detection',
        'Automated Compliance Logging',
        'Enterprise Systems Integration'
      ]));

  const techList = Array.isArray(industry.technology) && industry.technology.length > 0
    ? industry.technology
    : (Array.isArray(industry.techStack) && industry.techStack.length > 0 ? industry.techStack : ['Python', 'Docker', 'Kubernetes', 'TimescaleDB', 'PostgreSQL']);

  const outcomesRaw = industry.outcomes || industry.outcome || industry.businessOutcomes;
  const outcomes = Array.isArray(outcomesRaw)
    ? outcomesRaw.join(' ')
    : (outcomesRaw || 'Delivers proven domain efficiency, reduced operational overhead, and real-time compliance readiness.');

  const coverImage = industry.cover_image_url || industryImageMap[slugLower] || industry.image || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop';
  
  const relatedCase = industry.caseStudy
    ? { title: industry.caseStudy, slug: industry.caseStudySlug || '' }
    : null;

  return (
    <div className="relative z-10 pt-20 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 md:px-16 max-w-5xl mx-auto">
      <ReadingProgressBar />

      <Link to="/industries" className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase mb-6 sm:mb-8 hover:underline min-h-[44px]">
        <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Industries Catalog
      </Link>

      <div id="overview" data-scroll-label="OVERVIEW">
        <BlueprintWrapper className="service-detail-surface p-5 sm:p-8 md:p-12 mb-12">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="tag tag-accent">SECTOR PROFILE</span>
            <span className="font-mono text-xs text-text-muted">SLUG: {slug}</span>
          </div>

          <TextReveal
            text={industry.name || industry.title}
            as="h1"
            className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[var(--color-text)] mb-6 leading-[1.02]"
          />

          <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[var(--color-text-secondary)] font-normal border-l-2 border-[var(--color-accent)] pl-4 mb-8 text-left leading-[1.6]">
            {industry.summary || industry.description || industry.tagline}
          </p>

          {coverImage && (
            <Reveal className="mb-10 overflow-hidden border border-border h-48 sm:h-64 md:h-80 relative bg-black/5 dark:bg-white/5">
              <img
                src={coverImage}
                alt={industry.name || industry.title}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                className="w-full h-full object-cover"
              />
            </Reveal>
          )}

          {/* Narrative Content */}
          {(industry.content || industry.fullDescription || industry.description) && (
            <Reveal className="mb-12">
              <div className="type-body text-[15px] md:text-[16px] font-normal text-text-muted leading-[1.65] text-left md:text-justify">
                <RichTextRenderer content={industry.content || industry.fullDescription || industry.description} />
              </div>
            </Reveal>
          )}

          {/* Business Problems Solved */}
          {businessProblems.length > 0 && (
            <div id="problems" data-scroll-label="PROBLEMS">
              <Reveal className="border-t border-border pt-8 mb-12">
                <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-4 text-left">
                  SECTOR CHALLENGES SOLVED
                </h3>
                <ul className="space-y-2.5">
                  {businessProblems.map((prob, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[15px] md:text-[15px] font-normal text-text leading-[1.7]">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" aria-hidden="true" />
                      <div>{renderBulletText(prob)}</div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          )}

          {/* Core Capabilities */}
          {capabilities.length > 0 && (
            <div id="capabilities" data-scroll-label="CAPABILITIES">
              <Reveal className="border-t border-border pt-8 mb-12">
                <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-4 text-left">
                  CORE CAPABILITIES &amp; USE CASES
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 sm:gap-3 p-2 sm:p-3 bg-black/[0.035] dark:bg-white/[0.04] border border-border">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="font-mono text-[10px] sm:text-[12px] md:text-[13px] text-text font-normal truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          )}

          {/* Modern Technology Stack */}
          {techList.length > 0 && (
            <div id="technology" data-scroll-label="TECH STACK">
              <Reveal className="border-t border-border pt-8 mb-12">
                <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-4 text-left">
                  MODERN TECHNOLOGY STACK
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {techList.map((tech, idx) => (
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

          {/* Business Outcome */}
          {outcomes && (
            <div id="outcome" data-scroll-label="OUTCOME" className="border-t border-border pt-8 mb-12">
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

          {/* Related Product / Accelerator & Case Study */}
          <div id="references" data-scroll-label="REFERENCES" className="border-t border-border pt-8 mb-12">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-6">
              <div className="p-3 sm:p-5 bg-black/[0.02] dark:bg-white/[0.03] border border-border flex flex-col justify-between">
                <div>
                  <span className="text-[9px] sm:text-[11px] text-accent uppercase font-semibold block mb-0.5 sm:mb-1 truncate">PRODUCT ASSET</span>
                  <span className="font-heading text-xs sm:text-lg font-bold text-text uppercase block mb-1 sm:mb-3 truncate">{relatedAcc.name}</span>
                </div>
                <Link to={`/products/${relatedAcc.slug}`} className="text-[10px] sm:text-xs text-accent hover:underline inline-flex items-center gap-1 font-semibold truncate">
                  Explore Asset <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                </Link>
              </div>

              {relatedCase ? (
                <div className="p-3 sm:p-5 bg-black/[0.02] dark:bg-white/[0.03] border border-border flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[11px] text-text-muted uppercase font-semibold block mb-0.5 sm:mb-1 truncate">LINKED CASE STUDY</span>
                    <span className="font-heading text-xs sm:text-lg font-bold text-text uppercase block mb-1 sm:mb-3 truncate">{relatedCase.title}</span>
                  </div>
                  <Link to={relatedCase.slug ? `/case-studies/${relatedCase.slug}` : '/case-studies'} className="text-[10px] sm:text-xs text-accent hover:underline inline-flex items-center gap-1 font-semibold truncate">
                    View Results <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  </Link>
                </div>
              ) : (
                <div className="p-3 sm:p-5 bg-black/[0.02] dark:bg-white/[0.03] border border-border flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[11px] text-text-muted uppercase font-semibold block mb-0.5 sm:mb-1 truncate">REAL-WORLD PROOF</span>
                    <span className="font-heading text-xs sm:text-lg font-bold text-text uppercase block mb-1 sm:mb-3 truncate">{industry.name || industry.title} Deployment</span>
                  </div>
                  <Link to="/case-studies" className="text-[10px] sm:text-xs text-accent hover:underline inline-flex items-center gap-1 font-semibold truncate">
                    View Case Studies <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div id="cta" data-scroll-label="STRATEGY CALL" className="border-t border-border pt-6 sm:pt-8 flex flex-row items-center justify-between gap-2 sm:gap-4">
            <div className="min-w-0 flex-1">
              <div className="font-heading text-xs sm:text-lg font-bold text-text uppercase text-left truncate">Deploy Domain Blueprint</div>
              <div className="text-[10px] sm:text-xs text-text-muted text-left truncate">Initiate a 48-hour sector architecture workshop</div>
            </div>
            <Link to="/contact" className="btn btn-primary text-[10px] sm:text-sm py-2 px-3 shrink-0 whitespace-nowrap">
              Schedule <ArrowUpRight className="w-3.5 h-3.5 ml-1" strokeWidth={1.5} />
            </Link>
          </div>
        </BlueprintWrapper>
      </div>
    </div>
  );
}
