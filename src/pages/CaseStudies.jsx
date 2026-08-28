import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import api from '../api';
import BlueprintWrapper from '../components/BlueprintWrapper';
import TextReveal from '../components/anim/TextReveal';
import BannerDrawBorder from '../components/anim/BannerDrawBorder';
import Reveal from '../components/anim/Reveal';

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultBlueprints = [
    {
      id: 'cs-01',
      slug: 'smart-factory-manufacturing',
      title: 'Smart Factory Manufacturing Transformation',
      industry: 'MANUFACTURING',
      client_name: 'Industrial Machinery & Cables Manufacturer',
      accelerator: 'BitXhift IIoT Platform',
      challenge: 'Shop-floor CNC and extrusion machines had siloed PLC controllers, causing unpredicted downtime, lack of OEE visibility, and manual shift handover delays.',
      solution: 'Deployed BitXhift edge agents across 500+ machines with Modbus/OPC-UA signal ingestion, streaming telemetry to TimescaleDB with live floor wallboards and predictive vibration alerts.',
      outcomes: [
        { metric: '35%', label: 'Downtime Reduction' },
        { metric: '4.2%', label: 'OEE Improvement' },
        { metric: '48h', label: 'Setup Speed' }
      ],
      technologies: ['MQTT', 'OPC-UA', 'BitXhift', 'TimescaleDB', 'Node-RED', 'React']
    },
    {
      id: 'cs-02',
      slug: 'automotive-oem-live-analytics',
      title: 'Automotive OEM Live Analytics Dashboard',
      industry: 'AUTOMOTIVE OEM & COMPONENTS',
      client_name: 'Tier-1 Automotive Component Supplier',
      accelerator: 'BitXhift + LinkGenX',
      challenge: 'Fragmented assembly station data and delayed end-of-day defect reporting led to high warranty claim overhead and line bottlenecking.',
      solution: 'Engineered vision-based assembly defect detection synchronized directly with SAP S/4HANA production orders via LinkGenX event mesh.',
      outcomes: [
        { metric: '99.8%', label: 'First-Pass Yield' },
        { metric: '45%', label: 'Warranty Claims Cut' },
        { metric: '<100ms', label: 'Defect Alert' }
      ],
      technologies: ['BitXhift', 'LinkGenX', 'OpenCV', 'PyTorch', 'SAP S/4HANA', 'PostgreSQL']
    },
    {
      id: 'cs-03',
      slug: 'global-supply-chain-lakehouse',
      title: 'Global Supply Chain Data Lakehouse',
      industry: 'LOGISTICS & SUPPLY CHAIN',
      client_name: 'Enterprise Logistics & Freight Operator',
      accelerator: 'ParseMaster Data Engine',
      challenge: 'High-volume unstructured EDI 850/856 feeds and multi-regional GPS sensor streams broke traditional nightly ETL batches.',
      solution: 'Built a streaming lakehouse architecture with ParseMaster schema-inference engines, normalizing high-frequency EDI logs directly into Snowflake and Databricks.',
      outcomes: [
        { metric: '80%', label: 'Fewer Pipeline Breaks' },
        { metric: '5x', label: 'Faster Transformation' },
        { metric: '18%', label: 'Fuel Cost Savings' }
      ],
      technologies: ['ParseMaster', 'Apache Spark', 'dbt', 'Snowflake', 'Databricks', 'Kafka']
    },
    {
      id: 'cs-04',
      slug: 'bfsi-intelligent-document-processing',
      title: 'BFSI Intelligent Document Processing',
      industry: 'BFSI',
      client_name: 'Commercial Lending & Financial Institution',
      accelerator: 'ParseMaster + LinkGenX',
      challenge: 'Manual verification of multi-page corporate loan documents and financial filings created multi-day backlogs and strict compliance risks.',
      solution: 'Deployed an Agentic AI OCR and cognitive document parsing pipeline with enterprise guardrails, automated DPDP audit logging, and core banking sync.',
      outcomes: [
        { metric: '80%', label: 'Faster Loan Processing' },
        { metric: '99%', label: 'Extraction Accuracy' },
        { metric: '100%', label: 'Audit Readiness' }
      ],
      technologies: ['LangChain', 'LlamaIndex', 'OpenAI Enterprise', 'ParseMaster', 'PostgreSQL']
    },
    {
      id: 'cs-05',
      slug: 'enterprise-sap-cloud-migration',
      title: 'Enterprise SAP & Database Cloud Migration',
      industry: 'DEV & CLOUD INFRASTRUCTURE',
      client_name: 'Diversified Manufacturing Conglomerate',
      accelerator: 'MigrateMax Cloud Accelerator',
      challenge: 'Migrating legacy on-premises Oracle and Teradata warehouses to modern cloud without disrupting 24/7 mission-critical operations.',
      solution: 'Utilized MigrateMax automated schema conversion with parallel CDC replication, automated row-hash reconciliation, and zero-downtime DNS cutover.',
      outcomes: [
        { metric: '60%', label: 'Faster Cutover' },
        { metric: '100%', label: 'Data Fidelity' },
        { metric: '40%', label: 'Infra Cost Cut' }
      ],
      technologies: ['MigrateMax', 'AWS', 'Google Cloud', 'Terraform', 'Snowflake', 'Docker']
    },
    {
      id: 'cs-06',
      slug: 'healthcare-data-governance',
      title: 'Healthcare Data Governance & Privacy',
      industry: 'HEALTHCARE & LIFE SCIENCES',
      client_name: 'Regional Healthcare & Clinical Network',
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
  ];

  useEffect(() => {
    async function loadCaseStudies() {
      try {
        const res = await api.get('/case-studies');
        if (res.data && res.data.length > 0) {
          setCaseStudies(res.data);
        } else {
          setCaseStudies(defaultBlueprints);
        }
      } catch (err) {
        setCaseStudies(defaultBlueprints);
      } finally {
        setLoading(false);
      }
    }
    loadCaseStudies();
  }, []);

  const displayList = caseStudies.length > 0 ? caseStudies : defaultBlueprints;

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
                      <p className="text-xs text-text-muted leading-relaxed line-clamp-3 font-normal">{cs.challenge}</p>
                    </div>

                    {/* 3. Solution */}
                    <div className="bg-accent/5 p-4 border border-accent/30">
                      <h3 className="font-mono text-xs text-accent uppercase font-bold mb-1">3. SMRIKAAM SOLUTION</h3>
                      <p className="text-xs text-text font-medium leading-relaxed line-clamp-3">{cs.solution}</p>
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

