import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
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
      <span className="block text-left">
        <strong className="text-text font-semibold">{title}:</strong>
        <span className="text-text-muted font-normal"> {rest}</span>
      </span>
    );
  }
  return <span className="text-text-muted font-normal text-left">{clean}</span>;
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
    'logistics-supply-chain': { name: 'ParseMaster Ingestion Engine', slug: 'parsemaster' }
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
          <div className="font-mono text-xs text-accent uppercase mb-4">404 // NOT_FOUND</div>
          <h1 className="font-heading text-3xl text-text mb-4 uppercase">SECTOR NOT FOUND</h1>
          <p className="text-text-muted mb-6">{error || 'The requested industry sector specification does not exist.'}</p>
          <Link to="/industries" className="btn btn-primary">
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Industries Catalog
          </Link>
        </BlueprintWrapper>
      </div>
    );
  }

  const slugLower = (industry.slug || '').toLowerCase();
  const relatedAcc = acceleratorMap[slugLower] || { name: 'BitXhift & LinkGenX', slug: 'bitxhift' };
  const businessProblems = parseBulletPoints(industry.businessProblems || industry.challenge || industry.problemStatement || [
    'Unplanned Machine Downtime: High scrap rates and unpredicted machinery faults causing production bottlenecks.',
    'Manual Production Tracking: Paper-based shift logs and disconnected operational spreadsheets.',
    'Supply Chain Stockouts: Inability to anticipate inventory buffers across distributed distribution facilities.'
  ]);
  const solutions = parseBulletPoints(industry.solutions || industry.solution || industry.key_solutions || [
    'Edge IIoT Telemetry: Continuous sub-second signal capture from heterogeneous sensors.',
    'Live OEE Management: Automated calculation and visualization of plant availability, performance, and quality metrics.',
    'Computer Vision Inspection: Edge-deployed defect recognition reducing visual inspection overhead by 80%.'
  ]);
  const capabilities = Array.isArray(industry.useCases) && industry.useCases.length > 0
    ? industry.useCases
    : (Array.isArray(industry.key_solutions) ? industry.key_solutions : (Array.isArray(industry.capabilities) ? industry.capabilities : [
        'Automotive Assembly Lines',
        'CNC Precision Tooling',
        'Textile Machinery Telemetry',
        'Continuous Process Manufacturing'
      ]));
  const techList = Array.isArray(industry.technology) && industry.technology.length > 0
    ? industry.technology
    : (Array.isArray(industry.techStack) && industry.techStack.length > 0 ? industry.techStack : ['OPC-UA', 'MQTT', 'TimescaleDB', 'Python', 'React', 'SAP Connector']);
  const outcomes = parseBulletPoints(industry.outcomes || industry.outcome || industry.businessOutcomes || [
    '35% reduction in unplanned downtime and operational latency across facilities.',
    'Real-time visibility across all connected assets and downstream business systems.'
  ]);

  return (
    <div className="relative z-10 pt-28 pb-24 px-6 md:px-16 max-w-5xl mx-auto">
      <ReadingProgressBar />

      <Link to="/industries" className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase mb-8 hover:underline">
        <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Industries Catalog
      </Link>

      <div id="overview" data-scroll-label="OVERVIEW">
        <BlueprintWrapper className="service-detail-surface p-8 md:p-12 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag tag-accent">ENTERPRISE DOMAIN</span>
            <span className="font-mono text-xs text-text-muted">SLUG: {industry.slug}</span>
          </div>

          <TextReveal
            text={industry.name || industry.title}
            as="h1"
            className="font-heading text-4xl md:text-5xl font-bold uppercase text-text mb-6"
          />

          <p className="text-lg md:text-xl text-text-muted font-normal border-l-2 border-accent pl-4 mb-8 text-left">
            {industry.summary || industry.tagline}
          </p>

          {/* Real Photograph with Caption */}
          {industry.cover_image_url && (
            <Reveal className="mb-10 overflow-hidden border border-border h-80 relative bg-black/5 dark:bg-white/5">
              <img
                src={industry.cover_image_url}
                alt={industry.name || industry.title}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/80 backdrop-blur-sm text-[12px] font-mono text-white/90 tracking-wider text-left">
                {(industry.name || industry.title).toUpperCase()} // Enterprise Domain Architecture
              </div>
            </Reveal>
          )}

          {/* Detailed Narrative Content */}
          {(industry.content || industry.description) && (
            <Reveal className="mb-12">
              <div className="text-[15px] md:text-[16px] font-normal text-text-muted leading-[1.6] text-left">
                <RichTextRenderer content={industry.content || industry.description} />
              </div>
            </Reveal>
          )}

          {/* 01 // BUSINESS PROBLEMS SOLVED */}
          {businessProblems.length > 0 && (
            <div id="problems" data-scroll-label="PROBLEMS" className="border-t border-border pt-8 mb-12">
              <h3 className="font-mono text-[12px] md:text-[13px] text-accent uppercase tracking-[0.12em] font-medium mb-3 text-left">
                01 // BUSINESS PROBLEMS SOLVED
              </h3>
              <ul className="space-y-2">
                {businessProblems.map((prob, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14px] md:text-[15px] font-normal text-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                    <div>{renderBulletText(prob)}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 02 // HOW SMRIKAAM SOLVES IT */}
          {solutions.length > 0 && (
            <div id="solutions" data-scroll-label="SOLUTIONS" className="border-t border-border pt-8 mb-12">
              <h3 className="font-mono text-[12px] md:text-[13px] text-accent uppercase tracking-[0.12em] font-medium mb-3 text-left">
                02 // HOW SMRIKAAM SOLVES IT
              </h3>
              <ul className="space-y-2">
                {solutions.map((sol, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14px] md:text-[15px] font-normal text-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                    <div>{renderBulletText(sol)}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 03 // CORE CAPABILITIES & USE CASES */}
          {capabilities.length > 0 && (
            <div id="capabilities" data-scroll-label="CAPABILITIES">
              <Reveal className="border-t border-border pt-8 mb-12">
                <h3 className="font-mono text-[12px] md:text-[13px] text-accent uppercase tracking-[0.12em] font-medium mb-4 text-left">
                  03 // CORE CAPABILITIES &amp; USE CASES
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-3.5 py-2 bg-black/[0.03] dark:bg-white/[0.04] border border-border text-[13px] md:text-[14px] font-mono text-text font-normal">
                      <span className="text-accent font-medium select-none">+</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          )}

          {/* 04 // MODERN TECHNOLOGY STACK */}
          {techList.length > 0 && (
            <div id="technology" data-scroll-label="TECH STACK">
              <Reveal className="border-t border-border pt-8 mb-12">
                <h3 className="font-mono text-[12px] md:text-[13px] text-accent uppercase tracking-[0.12em] font-medium mb-4 text-left">
                  04 // MODERN TECHNOLOGY STACK
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {techList.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1.5 bg-bg border border-border text-[13px] md:text-[14px] font-mono text-text font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          )}

          {/* 05 // BUSINESS OUTCOME */}
          <div id="outcome" data-scroll-label="OUTCOME" className="border-t border-border pt-8 mb-12">
            <div className="p-4 bg-black/[0.02] dark:bg-white/[0.03] border-l-2 border-accent">
              <div className="font-mono text-[12px] text-accent uppercase tracking-[0.12em] font-medium mb-1 text-left">
                05 // BUSINESS OUTCOME
              </div>
              {Array.isArray(outcomes) ? (
                <ul className="space-y-1.5">
                  {outcomes.map((outc, i) => (
                    <li key={i} className="flex items-start gap-2 text-[14px] md:text-[15px] font-semibold text-text">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                      <div>{renderBulletText(outc)}</div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[15px] md:text-[16px] text-text font-semibold leading-[1.5] text-left">
                  {outcomes}
                </p>
              )}
            </div>
          </div>

          {/* 06 // RELATED PRODUCT / ACCELERATOR & CASE STUDY */}
          <div id="accelerator" data-scroll-label="ACCELERATOR" className="border-t border-border pt-8 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-[13px]">
              <div className="p-3.5 border border-border/70 flex flex-col justify-between">
                <span className="text-[11px] text-text-muted font-medium uppercase tracking-wider mb-1.5 text-left">
                  RELATED PRODUCT / ACCELERATOR
                </span>
                <Link
                  to={`/products/${relatedAcc.slug}`}
                  className="text-text font-medium hover:text-accent transition-colors inline-flex items-center gap-1.5 group/acc"
                >
                  <span>{relatedAcc.name}</span>
                  <span className="text-accent transition-transform duration-200 group-hover/acc:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="p-3.5 border border-border/70 flex flex-col justify-between">
                <span className="text-[11px] text-text-muted font-medium uppercase tracking-wider mb-1.5 text-left">
                  LINKED CASE STUDY
                </span>
                <Link
                  to="/case-studies"
                  className="text-text font-medium hover:text-accent transition-colors inline-flex items-center gap-1.5 group/cs"
                >
                  <span>{industry.name} Enterprise Transformation</span>
                  <span className="text-accent transition-transform duration-200 group-hover/cs:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div id="cta" data-scroll-label="STRATEGY CALL" className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-heading text-lg font-bold text-text uppercase text-left">Deploy Domain Blueprint</div>
              <div className="font-mono text-xs text-text-muted text-left">Initiate a 48-hour sector architecture workshop with our engineering team</div>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Schedule Consultation <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </BlueprintWrapper>
      </div>
    </div>
  );
}
