import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Cloud,
  Database,
  Network,
  Brain,
  BarChart2,
  Lock,
} from 'lucide-react';

import HeroCubeCluster from '../components/visuals/HeroCubeCluster';
import WhoWeAreCubeCluster from '../components/visuals/WhoWeAreCubeCluster';
import TechStackRibbon from '../components/TechStackRibbon';
import { useCMS } from '../context/CMSContext';

// Default Fallback Data for Services Relay
const DEFAULT_SERVICES = [
  { num: '01', title: 'AI / ML', desc: 'Predictive intelligence, computer vision, forecasting, and production MLOps.', path: '/services/ai-ml' },
  { num: '02', title: 'Industrial IoT (IIoT)', desc: 'Multi-protocol machine connectivity, real-time telemetry, and OEE.', path: '/services/industrial-iot-iiot' },
  { num: '03', title: 'Data Engineering', desc: 'Cloud-native data pipelines, lakehouses, CDC ingestion, and modernization.', path: '/services/data-engineering' },
  { num: '04', title: 'Generative & Agentic AI', desc: 'LLM-powered assistants, RAG, intelligent agents, and workflow copilots.', path: '/services/generative-agentic-ai' },
  { num: '05', title: 'DevOps & Cloud', desc: 'Cloud engineering, CI/CD, Kubernetes, IaC, and observability.', path: '/services/devops-cloud' },
  { num: '06', title: 'Data Governance', desc: 'Lineage, metadata, cataloguing, MDM, privacy, and DPDP compliance.', path: '/services/data-governance' },
  { num: '07', title: 'Integration Services', desc: 'Modern integration across SAP, Salesforce, ERP, and Kafka.', path: '/services/integration-services' },
  { num: '08', title: 'ServiceNow Solutions', desc: 'End-to-end ITSM, ITOM, ITAM, CSM, and Flow Designer automation.', path: '/services/servicenow-solutions' },
  { num: '09', title: 'Advisory Services', desc: 'Strategic cloud, AI, data, and platform modernization blueprints.', path: '/services/advisory-services' },
  { num: '10', title: 'AI Workflow Automation', desc: 'Agentic AI workflows orchestrating multi-step business tasks.', path: '/services/ai-workflow-automation' },
  { num: '11', title: 'Staffing Services', desc: 'Specialized enterprise engineering and technology talent.', path: '/staffing' },
];

// Default Fallback Data for Case Studies Relay
const DEFAULT_CASE_STUDIES = [
  {
    title: 'Smart Factory Manufacturing Transformation',
    industry: 'MANUFACTURING',
    problem: 'Siloed factory CNC and PLC machines causing unpredicted downtime and zero OEE visibility.',
    solution: 'Deployed edge IIoT gateways streaming sub-second telemetry to centralized floor wallboards.',
    tech: ['MQTT', 'OPC-UA', 'BitXhift', 'TimescaleDB', 'Python'],
    path: '/case-studies/smart-factory-manufacturing',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400&auto=format&fit=crop'
  },
  {
    title: 'Automotive OEM Live Analytics Dashboard',
    industry: 'AUTOMOTIVE & OEM',
    problem: 'Fragmented assembly station data and delayed end-of-day defect reporting.',
    solution: 'Vision-based defect detection synchronized directly with SAP S/4HANA production orders.',
    tech: ['BitXhift', 'LinkGenX', 'OpenCV', 'PyTorch', 'SAP'],
    path: '/case-studies',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop'
  },
  {
    title: 'Multi-Tenant Cloud Data Lakehouse Migration',
    industry: 'CLOUD & DATA PLATFORMS',
    problem: 'Legacy on-prem warehouse unable to scale for real-time analytics with high query latency.',
    solution: 'Zero-downtime automated schema migration and parallel CDC replication to Snowflake.',
    tech: ['MigrateMax', 'Snowflake', 'dbt', 'Databricks', 'AWS'],
    path: '/case-studies',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop'
  },
  {
    title: 'Automated Regulatory Compliance Agent',
    industry: 'BFSI & GOVERNANCE',
    problem: 'Slow manual review of complex compliance documents and high error exposure.',
    solution: 'Agentic AI document processing with DPDP audit trails and core banking sync.',
    tech: ['LangChain', 'LlamaIndex', 'ParseMaster', 'PostgreSQL'],
    path: '/case-studies',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop'
  },
];

export default function Home() {
  const { fetchPublic, refreshTrigger } = useCMS() || {};

  const [cmsServices, setCmsServices] = useState([]);
  const [cmsCaseStudies, setCmsCaseStudies] = useState([]);

  // Fetch Live CMS items dynamically for both relays
  useEffect(() => {
    let isMounted = true;
    async function loadCMSRelays() {
      if (!fetchPublic) return;
      try {
        const [srvs, cases] = await Promise.all([
          fetchPublic('services').catch(() => []),
          fetchPublic('case-studies').catch(() => []),
        ]);

        if (isMounted) {
          if (Array.isArray(srvs) && srvs.length > 0) {
            setCmsServices(
              srvs.map((s, idx) => ({
                num: String(idx + 1).padStart(2, '0'),
                title: s.title || s.name,
                desc: s.tagline || s.description || s.summary || '',
                path: s.slug ? `/services/${s.slug}` : '/services',
              }))
            );
          }
          if (Array.isArray(cases) && cases.length > 0) {
            setCmsCaseStudies(
              cases.map((c) => {
                const technologies = Array.isArray(c.technologies)
                  ? c.technologies
                  : typeof c.technologies === 'string'
                  ? c.technologies.split(',').map((t) => t.trim())
                  : ['Enterprise', 'Cloud', 'Data'];

                return {
                  title: c.title,
                  industry: (c.industry || c.category || 'ENTERPRISE').toUpperCase(),
                  problem: c.challenge || c.problemStatement || c.summary || 'Operational system bottleneck.',
                  solution: c.solution || c.solutionStatement || 'Engineered automated transformation.',
                  tech: technologies.slice(0, 4),
                  path: c.slug ? `/case-studies/${c.slug}` : '/case-studies',
                  image: c.cover_image_url || null,
                };
              })
            );
          }
        }
      } catch (err) {
        console.warn('Could not load live CMS relays', err);
      }
    }

    loadCMSRelays();
    const interval = setInterval(loadCMSRelays, 25000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [fetchPublic, refreshTrigger]);

  const techDomains = [
    { num: '01', label: 'AI / ML', icon: Brain },
    { num: '02', label: 'Data & Analytics', icon: BarChart2 },
    { num: '03', label: 'Cloud & DevOps', icon: Cloud },
    { num: '04', label: 'IIoT & Connected Systems', icon: Cpu },
    { num: '05', label: 'Software Engineering', icon: Network },
    { num: '06', label: 'Data & App Security', icon: Lock },
  ];

  const pillars = [
    {
      label: 'OUR GOAL',
      desc: 'Create innovative solutions that drive business growth and operational excellence.',
    },
    {
      label: 'OUR VISION',
      desc: 'To be a global leader in engineering intelligence and enterprise transformation.',
    },
    {
      label: 'OUR MISSION',
      desc: 'Deliver secure, scalable and intelligent solutions through engineering excellence and continuous innovation.',
    },
  ];

  const capabilities = [
    {
      id: 'data-analytics',
      num: '01',
      title: 'DATA ANALYTICS & BI',
      desc: 'Transform raw data into meaningful insights with advanced analytics and visual intelligence.',
      icon: BarChart2,
    },
    {
      id: 'data-eng',
      num: '02',
      title: 'DATA ENGINEERING',
      desc: 'Build robust data platforms, pipelines and architecture for reliable and scalable data flows.',
      icon: Database,
    },
    {
      id: 'devops-cloud',
      num: '03',
      title: 'DEVOPS & CLOUD ENGINEERING',
      desc: 'Modernize infrastructure, automate deployments and build cloud-native systems that scale seamlessly.',
      icon: Cloud,
    },
    {
      id: 'iiot',
      num: '04',
      title: 'INDUSTRIAL IoT',
      desc: 'Connect machines, collect real-time data and unlock operational intelligence at the edge.',
      icon: Cpu,
    },
    {
      id: 'gen-ai',
      num: '05',
      title: 'GENERATIVE & AGENTIC AI',
      desc: 'Build GenAI applications and intelligent agents that automate, augment and accelerate decisions.',
      icon: Brain,
    },
    {
      id: 'governance',
      num: '06',
      title: 'DATA GOVERNANCE & COMPLIANCE',
      desc: 'Ensure data quality, security, privacy and compliance across your enterprise ecosystem.',
      icon: Lock,
    },
  ];

  const problems = [
    {
      index: '01',
      title: 'LEGACY SYSTEMS',
      point1: 'Modernization & Cloud Migration',
      point2: 'Scalable & Resilient Architecture',
    },
    {
      index: '02',
      title: 'DISCONNECTED MACHINES',
      point1: 'Edge IIoT & Telemetry Pipelines',
      point2: 'Real-Time Operational Intelligence',
    },
    {
      index: '03',
      title: 'FRAGMENTED DATA',
      point1: 'Unified Data Engineering',
      point2: 'Trusted Single Source of Truth',
    },
    {
      index: '04',
      title: 'MANUAL PROCESSES',
      point1: 'Generative AI & Agentic Automation',
      point2: 'Higher Productivity & Lower Errors',
    },
  ];

  // Active Relay Lists (CMS if available, otherwise default fallback)
  const activeServices = cmsServices.length > 0 ? cmsServices : DEFAULT_SERVICES;
  const activeCaseStudies = cmsCaseStudies.length > 0 ? cmsCaseStudies : DEFAULT_CASE_STUDIES;

  // Duplicated arrays for seamless infinite looping
  const marqueeServices = [...activeServices, ...activeServices];
  const marqueeCaseStudies = [...activeCaseStudies, ...activeCaseStudies];

  return (
    <div className="relative z-10 w-full overflow-x-hidden bg-transparent text-[var(--color-text)] transition-colors duration-200">
      
      {/* ============================================================ */}
      {/* SCROLL 0 — HERO (LOCKED) */}
      {/* ============================================================ */}
      <section
        id="hero"
        data-scroll-label="HERO"
        className="relative flex flex-col justify-center px-6 md:px-12 lg:px-16 py-8 md:py-12 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-[2px] overflow-hidden"
      >
        {/* Subtle architectural background perspective grid */}
        <div className="smk-perspective-grid opacity-25" aria-hidden="true" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            {/* Technical Eyebrow */}
            <div className="inline-flex items-center gap-2 font-mono text-[10px] md:text-[11px] text-[var(--color-text-secondary)] uppercase tracking-[0.16em] border border-[var(--color-border)] px-2.5 py-1 home-card-surface self-start">
              <span className="w-1.5 h-1.5 bg-[var(--color-accent)] animate-pulse" />
              <span>AI • DATA • CLOUD • IIoT • INTELLIGENT AUTOMATION</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--color-text)] leading-[0.96]">
              ENGINEERING
              <br />
              INTELLIGENCE
              <br />
              FOR THE ENTERPRISE.
            </h1>

            {/* Description */}
            <p className="text-[13px] md:text-[15px] text-[var(--color-text-secondary)] max-w-lg leading-[1.5] font-normal">
              We build intelligent, secure, and scalable technology solutions
              that help enterprises modernize, automate and grow.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-[var(--button-bg)] text-[var(--button-text)] border border-[var(--button-border)] font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2 shadow-sm"
              >
                <span>BOOK STRATEGY CALL</span>
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
              </Link>
              <Link
                to="/services"
                className="px-5 py-2.5 border border-[var(--button-secondary-border)] bg-[var(--button-secondary-bg)] text-[var(--button-secondary-text)] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[var(--color-surface-subtle)] transition-all"
              >
                EXPLORE CAPABILITIES
              </Link>
            </div>

            {/* System Proof Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 p-4 mt-2 home-card-surface border border-[var(--color-border)] max-w-lg">
              <div>
                <div className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-text)] tracking-tight">
                  50+
                </div>
                <div className="font-mono text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mt-0.5 font-normal">
                  Deployments
                </div>
              </div>
              <div className="border-l border-[var(--color-border)] pl-3">
                <div className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-text)] tracking-tight">
                  17M+
                </div>
                <div className="font-mono text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mt-0.5 font-normal">
                  Data Points Processed
                </div>
              </div>
              <div className="border-l border-[var(--color-border)] pl-3">
                <div className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-text)] tracking-tight">
                  99.999%
                </div>
                <div className="font-mono text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mt-0.5 font-normal">
                  System Uptime
                </div>
              </div>
            </div>
          </div>

          {/* Right 3D Visual Column */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <HeroCubeCluster className="w-full max-w-[380px] aspect-square" />
          </div>
        </div>
      </section>

      {/* Live Running Technology Stack Ribbon */}
      <section
        id="tech-ribbon"
        aria-label="Enterprise Technologies"
        className="relative py-4 bg-[var(--color-bg)]/85 backdrop-blur-sm border-b border-[var(--color-border)]"
      >
        <TechStackRibbon />
      </section>

      {/* ============================================================ */}
      {/* SCROLL 1 — CONNECTED 3-COLUMN ARCHITECTURAL SYSTEM (5 - 2 - 5) */}
      {/* ============================================================ */}
      <section
        id="overview"
        data-scroll-label="WHO WE ARE & WHAT WE BUILD"
        aria-label="Who We Are and What We Build"
        className="relative py-10 md:py-14 px-6 md:px-12 lg:px-16 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-sm overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* 12-Column Architectural System: Left 5 cols | Center 2 cols | Right 5 cols */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-stretch border border-[var(--color-border)] home-card-surface">
            
            {/* ======================================================== */}
            {/* LEFT COLUMN: WHO WE ARE (5 Columns on Desktop) */}
            {/* ======================================================== */}
            <div className="lg:col-span-5 p-5 md:p-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Eyebrow & Title */}
                <div className="space-y-2">
                  <div className="font-mono text-[11px] text-[var(--color-text-muted)] uppercase tracking-[0.2em] font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--color-accent)]" />
                    <span>WHO WE ARE</span>
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold uppercase text-[var(--color-text)] tracking-tight leading-[1.1]">
                    Engineering Intelligence Across AI, Data, Cloud &amp; IIoT.
                  </h2>
                </div>

                {/* Overview Paragraphs */}
                <div className="space-y-2 text-[13px] md:text-[14px] leading-[1.5]">
                  <p className="text-[var(--color-text)] font-medium">
                    We are a technology development and engineering company helping enterprises build intelligent systems across AI, Data, Cloud, IIoT and Software.
                  </p>
                  <p className="text-[var(--color-text-secondary)] font-normal">
                    We combine deep engineering with domain understanding to design, build and scale solutions that create real impact.
                  </p>
                </div>

                {/* 6 Capability Badges */}
                <div className="pt-2">
                  <div className="font-mono text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mb-2 font-semibold">
                    ENGINEERING CAPABILITIES
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {techDomains.map((t) => {
                      const Icon = t.icon;
                      return (
                        <div
                          key={t.num}
                          className="flex items-center justify-between p-2 border border-[var(--color-border)] bg-[var(--color-surface-subtle)]/60 hover:border-[var(--color-border-strong)] transition-all group"
                        >
                          <div className="flex items-center gap-2 overflow-hidden">
                            <span className="font-mono text-[9px] text-[var(--color-accent)] font-bold shrink-0">
                              {t.num}
                            </span>
                            <Icon className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" strokeWidth={1.5} />
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text)] font-semibold truncate">
                              {t.label}
                            </span>
                          </div>
                          <span className="hidden xl:inline-block w-1 h-1 rounded-full bg-[var(--color-border-strong)] group-hover:bg-[var(--color-accent)] shrink-0 ml-1" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 3 Pillars: Goal / Vision / Mission */}
              <div className="space-y-2 pt-3 border-t border-[var(--color-border)]">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 border border-[var(--color-border)] bg-[var(--color-surface-subtle)]/40 flex flex-col justify-between"
                  >
                    <div className="font-mono text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-wider mb-0.5">
                      {pillar.label}
                    </div>
                    <p className="text-[11px] md:text-[12px] text-[var(--color-text-secondary)] leading-[1.4] font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ======================================================== */}
            {/* CENTER COLUMN: 3D CORE (2 Columns on Desktop) */}
            {/* ======================================================== */}
            <div className="lg:col-span-2 flex flex-col items-center justify-between py-6 px-3 border-t lg:border-t-0 lg:border-x border-[var(--color-border)] bg-[var(--color-surface-subtle)]/30 relative">
              
              {/* Top Architecture Connector Tag */}
              <div className="w-full flex items-center justify-between font-mono text-[9px] text-[var(--color-text-muted)] uppercase tracking-widest px-1">
                <span className="hidden xl:inline text-[var(--color-accent)]">●──</span>
                <span className="font-bold text-[var(--color-accent)]">3D CORE</span>
                <span className="hidden xl:inline text-[var(--color-accent)]">──●</span>
              </div>

              {/* Center 3D Cube Cluster Animation */}
              <div className="w-full flex-1 flex items-center justify-center my-2 relative">
                {/* Subtle architectural horizontal guideline behind cube */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] border-t border-dashed border-[var(--color-border)] pointer-events-none" />
                <WhoWeAreCubeCluster className="w-full max-w-[200px] aspect-square relative z-10" />
              </div>

              {/* Bottom Node Architecture Labels */}
              <div className="text-center font-mono space-y-0.5 pt-2 border-t border-[var(--color-border)] w-full">
                <div className="text-[9px] font-bold text-[var(--color-text)] uppercase tracking-widest">
                  CONNECTED SYSTEM
                </div>
                <div className="text-[8px] text-[var(--color-text-muted)] uppercase tracking-widest">
                  ARCHITECTURE NODE
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* RIGHT COLUMN: WHAT WE BUILD (5 Columns on Desktop) */}
            {/* ======================================================== */}
            <div className="lg:col-span-5 p-5 md:p-7 flex flex-col justify-between space-y-6 border-t lg:border-t-0 border-[var(--color-border)]">
              <div className="space-y-4">
                {/* Eyebrow & Title */}
                <div className="space-y-1">
                  <div className="font-mono text-[11px] text-[var(--color-text-muted)] uppercase tracking-[0.2em] font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--color-accent)]" />
                    <span>WHAT WE BUILD</span>
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold uppercase text-[var(--color-text)] tracking-tight">
                    Technology. Engineered End to End.
                  </h2>
                </div>

                {/* 6 Capabilities in Compact Architectural Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                  {capabilities.map((cap) => {
                    const Icon = cap.icon;
                    return (
                      <div
                        key={cap.id}
                        className="p-2.5 border border-[var(--color-border)] bg-[var(--color-surface-subtle)]/60 hover:border-[var(--color-border-strong)] transition-all flex items-start gap-2.5 group"
                      >
                        <span className="font-mono text-[9px] text-[var(--color-accent)] font-bold shrink-0 mt-0.5">
                          {cap.num}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-0.5">
                            <h3 className="font-mono text-[11px] md:text-[12px] font-bold uppercase tracking-wider text-[var(--color-text)] truncate">
                              {cap.title}
                            </h3>
                            <Icon className="w-3 h-3 text-[var(--color-accent)] shrink-0 ml-1 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                          </div>
                          <p className="text-[11px] text-[var(--color-text-secondary)] leading-[1.35] font-normal line-clamp-2">
                            {cap.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Explore Services Action Link */}
              <div className="pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-between w-full p-2.5 bg-[var(--button-secondary-bg)] border border-[var(--button-secondary-border)] text-[var(--button-secondary-text)] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[var(--button-bg)] hover:text-[var(--button-text)] hover:border-[var(--button-border)] transition-all shadow-sm"
                >
                  <span>EXPLORE SERVICES</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SCROLL 2 — BUSINESS PROBLEMS & TWO LIVE HORIZONTAL RELAYS */}
      {/* ============================================================ */}
      <section
        id="problems"
        data-scroll-label="BUSINESS PROBLEMS"
        aria-label="Business Problems and Live Technology Relays"
        className="relative py-10 md:py-14 px-6 md:px-12 lg:px-16 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-sm overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full relative z-10">
          
          {/* Section Header */}
          <div className="mb-6 pb-3 border-b border-[var(--color-border)]">
            <div className="font-mono text-[11px] text-[var(--color-text-muted)] uppercase tracking-[0.2em] font-semibold mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[var(--color-accent)]" />
              <span>BUSINESS PROBLEMS WE SOLVE</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-[var(--color-text)] tracking-tight">
              Transformation Architecture
            </h2>
          </div>

          {/* Compact Transformation Architecture Rail (4 Core Business Problems) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {problems.map((prob) => (
              <div
                key={prob.index}
                className="p-3.5 border border-[var(--color-border)] home-card-surface hover:border-[var(--color-border-strong)] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[11px] font-bold text-[var(--color-accent)]">
                    {prob.index}
                  </span>
                  <span className="font-mono text-[9px] text-[var(--color-text-muted)] uppercase tracking-wider">
                    TRANSFORMATION
                  </span>
                </div>
                <h3 className="font-mono text-xs font-bold uppercase text-[var(--color-text)] mb-2">
                  {prob.title}
                </h3>
                <div className="space-y-1 border-t border-[var(--color-border)] pt-2 text-[11px] font-mono">
                  <div className="text-[var(--color-text-secondary)] font-normal">
                    <span className="text-[var(--color-accent)] font-bold mr-1">↳</span>
                    {prob.point1}
                  </div>
                  <div className="text-[var(--color-text)] font-semibold">
                    <span className="text-[var(--color-accent)] font-bold mr-1">↳</span>
                    {prob.point2}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ======================================================== */}
          {/* TWO LIVE HORIZONTAL RELAY LAYERS */}
          {/* ======================================================== */}
          <div className="space-y-6">
            
            {/* LAYER 01 // SERVICES RELAY (LEFT → RIGHT) */}
            <div className="border border-[var(--color-border)] home-card-surface p-3.5 md:p-4 overflow-hidden">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-accent)] font-bold uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--color-accent)]" />
                  <span>01 // SERVICES</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[9px] md:text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                  <span>LIVE SERVICE STACK // {activeServices.length} CAPABILITIES</span>
                </div>
              </div>

              {/* Viewport with Continuous LTR Movement */}
              <div className="scroll2-layer-container py-1">
                <div className="scroll2-layer-track-ltr gap-3">
                  {marqueeServices.map((srv, idx) => (
                    <Link
                      key={`srv-${idx}`}
                      to={srv.path}
                      className="px-4 py-2.5 border border-[var(--color-border)] bg-[var(--color-bg)]/90 hover:border-[var(--color-accent)] transition-all shrink-0 flex items-center gap-3.5 group select-none cursor-pointer w-[260px] sm:w-[300px]"
                    >
                      <span className="font-mono text-[11px] text-[var(--color-accent)] font-bold shrink-0">
                        {srv.num}
                      </span>
                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">
                          {srv.title}
                        </span>
                        {srv.desc && (
                          <span className="font-mono text-[10px] text-[var(--color-text-muted)] truncate font-normal mt-0.5">
                            {srv.desc}
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-xs text-[var(--color-accent)] group-hover:translate-x-1 transition-transform shrink-0">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* LAYER 02 // CASE STUDIES RELAY (RIGHT → LEFT) */}
            <div className="border border-[var(--color-border)] home-card-surface p-3.5 md:p-4 overflow-hidden">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-accent)] font-bold uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--color-accent)]" />
                  <span>02 // CASE STUDIES</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[9px] md:text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                  <span>LIVE PROJECT FEED // {activeCaseStudies.length} DEPLOYMENTS</span>
                </div>
              </div>

              {/* Viewport with Continuous RTL Movement */}
              <div className="scroll2-layer-container py-1">
                <div className="scroll2-layer-track-rtl gap-4">
                  {marqueeCaseStudies.map((cs, idx) => (
                    <Link
                      key={`cs-${idx}`}
                      to={cs.path}
                      className="p-3.5 border border-[var(--color-border)] bg-[var(--color-bg)]/90 hover:border-[var(--color-accent)] transition-all shrink-0 flex gap-3.5 group select-none cursor-pointer w-[300px] sm:w-[380px]"
                    >
                      {/* Image / Thumbnail */}
                      <div className="w-16 sm:w-20 aspect-square border border-[var(--color-border)] overflow-hidden shrink-0 bg-black/5 dark:bg-white/5 relative">
                        {cs.image ? (
                          <img
                            src={cs.image}
                            alt=""
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center font-mono text-[9px] text-[var(--color-text-muted)]">
                            SMK//CS
                          </div>
                        )}
                      </div>

                      {/* Content Details */}
                      <div className="flex flex-col justify-between min-w-0 flex-1">
                        <div>
                          <div className="font-mono text-[9px] text-[var(--color-accent)] font-bold uppercase tracking-wider mb-0.5 truncate">
                            CASE STUDY // {cs.industry}
                          </div>
                          <h3 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-tight text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">
                            {cs.title}
                          </h3>
                          <div className="text-[10px] font-mono text-[var(--color-text-secondary)] line-clamp-1 mt-1 font-normal">
                            <span className="text-[var(--color-text-muted)] font-semibold">P:</span> {cs.problem}
                          </div>
                          <div className="text-[10px] font-mono text-[var(--color-text)] font-semibold line-clamp-1 mt-0.5">
                            <span className="text-[var(--color-accent)] font-bold">↳ S:</span> {cs.solution}
                          </div>
                        </div>

                        {/* Tech Tags & Read CTA */}
                        <div className="flex items-center justify-between pt-2 mt-2 border-t border-[var(--color-border)]">
                          <div className="flex items-center gap-1 overflow-hidden">
                            {cs.tech && cs.tech.slice(0, 2).map((t, i) => (
                              <span
                                key={i}
                                className="px-1.5 py-0.5 border border-[var(--color-border)] bg-[var(--color-surface-subtle)] text-[8px] font-mono text-[var(--color-text-secondary)] uppercase truncate"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <span className="font-mono text-[10px] text-[var(--color-accent)] font-bold uppercase flex items-center gap-1 group-hover:translate-x-0.5 transition-transform shrink-0 ml-1">
                            <span>READ</span>
                            <span>→</span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* End CTA Band */}
          <div className="mt-10 border border-[var(--color-border)] p-6 md:p-8 home-card-surface flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-mono text-[10px] text-[var(--color-accent)] font-bold uppercase tracking-widest">
                ENTERPRISE TRANSFORMATION // STRATEGY CONSULTATION
              </div>
              <h3 className="font-heading text-lg md:text-xl font-bold uppercase text-[var(--color-text)]">
                Ready to engineer your next intelligent system?
              </h3>
              <p className="text-xs md:text-sm text-[var(--color-text-secondary)] font-normal max-w-xl">
                Connect with our technical leads in Coimbatore to review architecture blueprints and project roadmaps.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-[var(--button-bg)] text-[var(--button-text)] border border-[var(--button-border)] font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2 shrink-0 shadow-sm"
            >
              <span>BOOK STRATEGY CALL</span>
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
