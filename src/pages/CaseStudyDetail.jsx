import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import api from '../api';
import BlueprintWrapper from '../components/BlueprintWrapper';
import ReadingProgressBar from '../components/anim/ReadingProgressBar';
import TextReveal from '../components/anim/TextReveal';
import Reveal from '../components/anim/Reveal';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const defaultCaseStudiesMap = {
    'iiot-telemetry-coimbatore': {
      title: 'Real-Time IIoT Telemetry & Machine OEE Platform',
      slug: 'iiot-telemetry-coimbatore',
      client_name: 'Tier-1 Automotive Component Manufacturer',
      industry: 'Manufacturing (Machinery & OEM Components)',
      accelerator: 'BitXhift IIoT Engine',
      challenge: 'High unrecorded downtime, lack of real-time machine performance visibility across 50+ CNC units, and manual shift reporting.',
      solution: 'Deployed BitXhift IIoT edge gateway to capture Modbus and OPC-UA machine signals, streaming live telemetry to a centralized real-time dashboard.',
      outcomes: [
        { metric: '17M+', label: 'Daily Data Points' },
        { metric: '23%', label: 'OEE Improvement' },
        { metric: '<50ms', label: 'Telemetry Latency' }
      ],
      technologies: ['Modbus TCP', 'OPC-UA', 'MQTT', 'BitXhift', 'TimescaleDB', 'Python Edge Runtime']
    },
    'cloud-data-warehouse-migration': {
      title: 'Zero-Downtime Enterprise ERP Database Migration',
      slug: 'cloud-data-warehouse-migration',
      client_name: 'Leading Energy & Solar Infrastructure Utility',
      industry: 'Energy & Utilities',
      accelerator: 'MigrateMax Data Engine',
      challenge: 'Legacy database lock-in causing slow executive reporting and multi-hour batch query execution times.',
      solution: 'Utilized MigrateMax automated schema transformation engine to replicate and validate 400+ legacy tables into a high-performance Snowflake cloud data lakehouse.',
      outcomes: [
        { metric: '99.999%', label: 'Uptime SLA' },
        { metric: '4x', label: 'Query Performance' },
        { metric: '0', label: 'Downtime During Cutover' }
      ],
      technologies: ['Snowflake', 'dbt', 'MigrateMax', 'AWS Glue', 'Terraform', 'Databricks']
    },
    'parse-master-edi': {
      title: 'Automated Multi-Format EDI & Unstructured Data Ingestion',
      slug: 'parse-master-edi',
      client_name: 'Global Supply Chain & Logistics Network',
      industry: 'Logistics & E-Commerce',
      accelerator: 'ParseMaster Data Engine',
      challenge: 'Manual data entry errors from fragmented partner EDI, XML, and PDF invoices causing shipping delay bottlenecks.',
      solution: 'Implemented ParseMaster streaming ingestion pipeline to parse, validate, and insert unstructured vendor documents into SAP S/4HANA in real time.',
      outcomes: [
        { metric: '99.4%', label: 'Extraction Accuracy' },
        { metric: '85%', label: 'Manual Effort Reduction' },
        { metric: '<2s', label: 'Document Processing Time' }
      ],
      technologies: ['ParseMaster', 'Python', 'Apache Kafka', 'PostgreSQL', 'Docker', 'OpenAI Vision']
    },
    'healthcare-data-governance': {
      title: 'Healthcare Data Governance & Privacy Masking Lakehouse',
      slug: 'healthcare-data-governance',
      client_name: 'Regional Healthcare & Clinical Network',
      industry: 'Healthcare & Life Sciences',
      accelerator: 'ParseMaster Data Engine',
      challenge: 'Siloed patient EHR databases with strict regulatory compliance requirements and slow clinical research querying.',
      solution: 'Created a de-identified medical data ingestion lakehouse with automated end-to-end lineage mapping, role-based access control, and FHIR API adapters.',
      outcomes: [
        { metric: '10x', label: 'Query Speed' },
        { metric: '100%', label: 'HIPAA/DPDP Compliance' },
        { metric: '0', label: 'Security Breaches' }
      ],
      technologies: ['FHIR API', 'Collibra', 'Privacera', 'ParseMaster', 'PostgreSQL', 'Terraform']
    }
  };

  useEffect(() => {
    async function loadCaseStudy() {
      try {
        const res = await api.get(`/case-studies/${slug}`);
        if (res.data) {
          setCaseStudy(res.data);
        } else if (defaultCaseStudiesMap[slug]) {
          setCaseStudy(defaultCaseStudiesMap[slug]);
        } else {
          setError('Case study not found.');
        }
      } catch (err) {
        if (defaultCaseStudiesMap[slug]) {
          setCaseStudy(defaultCaseStudiesMap[slug]);
        } else {
          setError('Case study not found.');
        }
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
          <div className="font-mono text-xs text-accent uppercase mb-4">404 // NOT_FOUND</div>
          <h1 className="font-heading text-3xl text-text mb-4">CASE STUDY NOT FOUND</h1>
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
    <div className="relative z-10 pt-28 pb-24 px-6 md:px-16 max-w-5xl mx-auto">
      <ReadingProgressBar />

      <Link to="/case-studies" className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase mb-8 hover:underline">
        <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Case Studies
      </Link>

      <div id="overview" data-scroll-label="OVERVIEW">
        <BlueprintWrapper className="service-detail-surface p-8 md:p-12 mb-12">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-3">
            <span className="tag tag-accent">{caseStudy.industry || 'CASE STUDY'}</span>
            <span className="font-mono text-xs text-text-muted">CLIENT: {caseStudy.client_name}</span>
          </div>
          {caseStudy.accelerator && (
            <span className="font-mono text-xs text-accent border border-accent px-2 py-0.5 uppercase font-medium">
              ACCELERATOR: {caseStudy.accelerator}
            </span>
          )}
        </div>

        <TextReveal
          text={caseStudy.title}
          as="h1"
          className="font-heading text-3xl md:text-5xl font-bold uppercase text-text mb-6 tracking-tight"
        />

        {caseStudy.cover_image_url && (
          <Reveal className="mb-10 overflow-hidden border border-border h-80 relative bg-black/5 dark:bg-white/5">
            <img src={caseStudy.cover_image_url} alt={caseStudy.title} className="w-full h-full object-cover duotone" />
          </Reveal>
        )}

        {/* Quantified Outcomes Banner */}
        {outcomes.length > 0 && (
          <div id="metrics" data-scroll-label="METRICS">
            <Reveal className="mb-12 p-6 subtle-readable-surface border border-border">
              <div className="font-mono text-xs text-accent uppercase tracking-widest mb-4 font-medium">VERIFIED MEASURABLE METRICS</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {outcomes.map((out, idx) => (
                  <div key={idx} className="border-l-2 border-accent pl-4">
                    <div className="font-heading font-bold text-3xl md:text-4xl text-accent">
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
        <div id="challenge" data-scroll-label="CHALLENGE">
          <Reveal className="mb-10">
            <h2 className="font-heading text-2xl font-bold uppercase text-text mb-3 border-b border-border pb-2">
              THE OPERATIONAL CHALLENGE
            </h2>
            <p className="prose-content text-text leading-relaxed text-base whitespace-pre-line font-normal">
              {caseStudy.challenge}
            </p>
          </Reveal>
        </div>

        {/* Solution Section */}
        <div id="solution" data-scroll-label="SOLUTION">
          <Reveal className="mb-10">
            <h2 className="font-heading text-2xl font-bold uppercase text-text mb-3 border-b border-border pb-2">
              THE SMRIKAAM DEPLOYED SOLUTION
            </h2>
            <p className="prose-content text-text leading-relaxed text-base whitespace-pre-line font-normal">
              {caseStudy.solution}
            </p>
          </Reveal>
        </div>

        {/* Technologies Used */}
        {caseStudy.technologies && caseStudy.technologies.length > 0 && (
          <div id="technologies" data-scroll-label="TECHNOLOGY">
            <Reveal className="border-t border-border pt-8 mb-12">
              <h3 className="font-heading text-lg font-bold text-text mb-3 uppercase">
                TECHNOLOGY STACK DEPLOYED
              </h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech, idx) => (
                  <span key={idx} className="tag tag-neutral text-xs font-mono font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        )}

        <div id="cta" data-scroll-label="STRATEGY CALL" className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-heading text-lg font-bold text-text uppercase">Achieve Similar Outcomes</div>
            <div className="font-mono text-xs text-text-muted font-normal">Speak with our technical solution architects today</div>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Request Case Study Review <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </BlueprintWrapper>
      </div>
    </div>
  );
}
