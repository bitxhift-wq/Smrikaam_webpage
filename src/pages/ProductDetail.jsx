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

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        const res = await api.get(`/accelerators/${slug}`);
        if (res.data && res.data.status === 'published') {
          setProduct(res.data);
          setError(null);
        } else if (res.data && !res.data.status) {
          setProduct(res.data);
          setError(null);
        } else {
          setProduct(null);
          setError('The requested product is currently unavailable, in draft, or archived.');
        }
      } catch (err) {
        setProduct(null);
        setError('The requested product is currently unavailable, in draft, or archived.');
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [slug]);

  if (loading) {
    return <div className="font-mono text-sm text-text-muted pt-32 pb-24 text-center">LOADING_SPECIFICATION...</div>;
  }

  if (error || !product) {
    return (
      <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto text-center">
        <BlueprintWrapper className="service-detail-surface p-12">
          <div className="font-mono text-xs text-accent uppercase mb-4">404 NOT FOUND</div>
          <h1 className="font-heading text-3xl text-text mb-4 uppercase">PRODUCT NOT FOUND</h1>
          <p className="text-text-muted mb-6">{error || 'The requested product specification does not exist.'}</p>
          <Link to="/products" className="btn btn-primary">
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Products Catalog
          </Link>
        </BlueprintWrapper>
      </div>
    );
  }

  const businessProblems = parseBulletPoints(product.problem || product.problemStatement || product.businessProblems || [
    'Operational Unpredictability: High scrap rates and unpredicted machinery faults causing costly downtime.',
    'Legacy Protocol Fragmentation: Inability to bridge heterogeneous PLC architectures to unified telemetry streams.',
    'Data Latency Overhead: Sluggish cloud-dependent architectures that compromise sub-second edge operations.'
  ]);

  const capabilities = Array.isArray(product.keyFeatures) && product.keyFeatures.length > 0
    ? product.keyFeatures
    : (Array.isArray(product.keyCapabilities) ? product.keyCapabilities : [
        'Real-Time OEE Calculation',
        'Vibration Anomaly Detection',
        'Energy Load Optimization',
        'Automated Shift Reporting'
      ]);

  const technology = Array.isArray(product.technology) && product.technology.length > 0
    ? product.technology
    : ['MQTT', 'OPC-UA', 'Node-RED', 'TimescaleDB', 'Docker Edge', 'React', 'Python'];

  const outcomes = product.businessOutcomes || product.outcomes || product.outcome || 'Delivers 35% reduction in unplanned downtime and 60% faster deployment across enterprise infrastructure.';
  const coverImage = product.cover_image_url || product.image || 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop';

  return (
    <div className="relative z-10 pt-20 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 md:px-16 max-w-5xl mx-auto">
      <ReadingProgressBar />

      <Link to="/products" className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase mb-6 sm:mb-8 hover:underline min-h-[44px]">
        <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Products Catalog
      </Link>

      <div id="overview" data-scroll-label="OVERVIEW">
        <BlueprintWrapper className="service-detail-surface p-5 sm:p-8 md:p-12 mb-12">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="tag tag-accent">ENGINEERED PRODUCT</span>
            <span className="font-mono text-xs text-text-muted">SLUG: {slug}</span>
          </div>

          <TextReveal
            text={product.name || product.title}
            as="h1"
            className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[var(--color-text)] mb-6 leading-[1.02]"
          />

          <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[var(--color-text-secondary)] font-normal border-l-2 border-[var(--color-accent)] pl-4 mb-8 text-left leading-[1.6]">
            {product.tagline || product.shortDescription}
          </p>

          {coverImage && (
            <Reveal className="mb-10 overflow-hidden border border-border h-48 sm:h-64 md:h-80 relative bg-black/5 dark:bg-white/5">
              <img
                src={coverImage}
                alt={product.name || product.title}
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
          {(product.fullDescription || product.description || product.content) && (
            <Reveal className="mb-12">
              <div className="type-body text-[15px] md:text-[16px] font-normal text-text-muted leading-[1.65] text-left md:text-justify">
                <RichTextRenderer content={product.fullDescription || product.description || product.content} />
              </div>
            </Reveal>
          )}

          {/* Business Problems Solved */}
          {businessProblems.length > 0 && (
            <div id="problems" data-scroll-label="PROBLEMS">
              <Reveal className="border-t border-border pt-8 mb-12">
                <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-4 text-left">
                  BUSINESS PROBLEMS SOLVED
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
                  CORE CAPABILITIES &amp; INTEGRATIONS
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
          {technology.length > 0 && (
            <div id="technology" data-scroll-label="TECH STACK">
              <Reveal className="border-t border-border pt-8 mb-12">
                <h3 className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-accent mb-4 text-left">
                  MODERN TECHNOLOGY STACK
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {technology.map((tech, idx) => (
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

          {/* Related Target Industries & Linked Case Study */}
          <div id="references" data-scroll-label="REFERENCES" className="border-t border-border pt-8 mb-12">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-6">
              <div className="p-3 sm:p-5 bg-black/[0.02] dark:bg-white/[0.03] border border-border flex flex-col justify-between">
                <div>
                  <span className="text-[9px] sm:text-[11px] text-accent uppercase font-semibold block mb-0.5 sm:mb-1 truncate">TARGET INDUSTRY</span>
                  <span className="font-heading text-xs sm:text-lg font-bold text-text uppercase block mb-1 sm:mb-3 truncate">{product.category || 'Cross-Industry Adoption'}</span>
                </div>
                <Link to="/industries" className="text-[10px] sm:text-xs text-accent hover:underline inline-flex items-center gap-1 font-semibold truncate">
                  Explore Industries <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                </Link>
              </div>

              {product.caseStudy ? (
                <div className="p-3 sm:p-5 bg-black/[0.02] dark:bg-white/[0.03] border border-border flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[11px] text-text-muted uppercase font-semibold block mb-0.5 sm:mb-1 truncate">LINKED CASE STUDY</span>
                    <span className="font-heading text-xs sm:text-lg font-bold text-text uppercase block mb-1 sm:mb-3 truncate">{product.caseStudy}</span>
                  </div>
                  <Link to="/case-studies" className="text-[10px] sm:text-xs text-accent hover:underline inline-flex items-center gap-1 font-semibold truncate">
                    View Blueprint <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  </Link>
                </div>
              ) : (
                <div className="p-3 sm:p-5 bg-black/[0.02] dark:bg-white/[0.03] border border-border flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[11px] text-text-muted uppercase font-semibold block mb-0.5 sm:mb-1 truncate">REAL-WORLD PROOF</span>
                    <span className="font-heading text-xs sm:text-lg font-bold text-text uppercase block mb-1 sm:mb-3 truncate">Enterprise Deployments</span>
                  </div>
                  <Link to="/case-studies" className="text-[10px] sm:text-xs text-accent hover:underline inline-flex items-center gap-1 font-semibold truncate">
                    Review Studies <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div id="cta" data-scroll-label="STRATEGY CALL" className="border-t border-border pt-6 sm:pt-8 flex flex-row items-center justify-between gap-2 sm:gap-4">
            <div className="min-w-0 flex-1">
              <div className="font-heading text-xs sm:text-lg font-bold text-text uppercase text-left truncate">Deploy This Product</div>
              <div className="text-[10px] sm:text-xs text-text-muted text-left truncate">Initiate a 48-hour enterprise pilot or proof-of-concept</div>
            </div>
            <Link to="/contact" className="btn btn-primary text-[10px] sm:text-sm py-2 px-3 shrink-0 whitespace-nowrap">
              Discuss Product <ArrowUpRight className="w-3.5 h-3.5 ml-1" strokeWidth={1.5} />
            </Link>
          </div>
        </BlueprintWrapper>
      </div>
    </div>
  );
}
