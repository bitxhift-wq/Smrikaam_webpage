import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, BarChart2, Cpu, Database, Brain, Cloud,
  Lock, Network, Workflow, Compass, Sparkles, CheckCircle2
} from 'lucide-react';
import TextReveal from '../components/anim/TextReveal';
import BannerDrawBorder from '../components/anim/BannerDrawBorder';
import Reveal from '../components/anim/Reveal';

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const stageRef = useRef(null);

  const services = [
    {
      id: 'ai-ml',
      slug: 'ai-ml',
      num: '01',
      title: 'AI / ML',
      icon: Brain,
      tagline: 'Production-ready predictive intelligence, computer vision, forecasting, and MLOps.',
      description: 'Production-ready AI and machine learning solutions for predictive intelligence, intelligent decision support, computer vision, forecasting, recommendation systems, and enterprise AI applications.',
      businessProblems: [
        'Unpredictable operational downtime and equipment failure',
        'Manual visual inspection bottlenecks and quality escapes',
        'Lack of real-time forecasting and demand intelligence',
        'Fragmented ML experimentation without production MLOps governance'
      ],
      capabilities: [
        'Predictive Intelligence Models',
        'Computer Vision & Defect Detection',
        'Demand & Inventory Forecasting',
        'Recommendation & Decision Engines',
        'Real-Time Telemetry Dashboards',
        'Automated Operational Reporting'
      ],
      technology: [
        'Python',
        'PyTorch',
        'scikit-learn',
        'MLflow',
        'Azure Machine Learning',
        'Databricks',
        'OpenAI-compatible APIs',
        'Vector databases',
        'MLOps pipelines'
      ],
      outcomes: '10x faster model deployment with sub-50ms inference and automated MLOps tracking.',
      accelerator: 'BitXhift + ParseMaster',
      caseStudy: 'Automotive OEM Live Analytics Dashboard',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
      caption: 'ENTERPRISE AI // Production MLOps & Real-Time Predictive Intelligence'
    },
    {
      id: 'industrial-iot-iiot',
      slug: 'industrial-iot-iiot',
      num: '02',
      title: 'Industrial IoT (IIoT)',
      icon: Cpu,
      tagline: 'Multi-protocol machine connectivity, real-time telemetry, OEE, and predictive maintenance.',
      description: 'Multi-protocol machine connectivity, real-time telemetry, OEE monitoring, downtime intelligence, predictive maintenance, and connected operations for industrial environments.',
      businessProblems: [
        'Unplanned factory machine breakdowns and line stoppages',
        'Paper-based shift logs with zero real-time operational visibility',
        'Inaccurate Overall Equipment Effectiveness (OEE) metrics',
        'Siloed legacy CNC, PLC, and SCADA controllers'
      ],
      capabilities: [
        'Multi-Protocol Edge Ingestion',
        'Real-Time OEE & Downtime Tracking',
        'Vibration & Thermal Anomaly Detection',
        'Live Factory Floor Wallboards',
        'Modbus/OPC-UA/MQTT Telemetry',
        'Edge Machine Connectivity'
      ],
      technology: [
        'MQTT',
        'OPC UA',
        'Modbus TCP',
        'Edge computing',
        'Azure IoT',
        'AWS IoT',
        'Kubernetes',
        'Docker',
        'Grafana',
        'Time-series databases',
        'Python'
      ],
      outcomes: '35% downtime reduction and live OEE tracking across 500+ connected industrial machines.',
      accelerator: 'BitXhift IIoT Platform',
      caseStudy: 'Smart Factory Manufacturing Transformation',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
      caption: 'CONNECTED OPERATIONS // Industrial Edge Intelligence & OEE Monitoring'
    },
    {
      id: 'data-engineering',
      slug: 'data-engineering',
      num: '03',
      title: 'Data Engineering & Modernization',
      icon: Database,
      tagline: 'Cloud-native data pipelines, lakehouses, real-time ingestion, and modernization.',
      description: 'Cloud-native data pipelines, lakehouse architectures, real-time ingestion, data modernization, migration, transformation, orchestration, and scalable analytical data platforms.',
      businessProblems: [
        'Legacy on-premises data warehouses with high maintenance costs',
        'Slow batch ETL jobs causing stale reporting data',
        'Schema divergence during ERP database migrations',
        'Unstructured data silos without automated governance'
      ],
      capabilities: [
        'Cloud-Native Lakehouse Architecture',
        'Automated ELT & CDC Ingestion',
        'dbt Transformation & Validation',
        'Schema Drift & Cleansing Engine',
        'Zero-Downtime Database Cutovers',
        'Real-Time Ingestion Pipelines'
      ],
      technology: [
        'Databricks',
        'Snowflake',
        'dbt',
        'Apache Airflow',
        'Apache Spark',
        'Delta Lake',
        'Apache Iceberg',
        'Python',
        'SQL',
        'Snowpark'
      ],
      outcomes: '60% faster query execution and zero data loss on real-time streaming ingestion.',
      accelerator: 'MigrateMax + ParseMaster',
      caseStudy: 'Global Supply Chain Data Lakehouse',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop',
      caption: 'DATA PLATFORMS // Modern Lakehouse & High-Throughput Pipelines'
    },
    {
      id: 'generative-agentic-ai',
      slug: 'generative-agentic-ai',
      num: '04',
      title: 'Generative AI & Agentic AI',
      icon: Sparkles,
      tagline: 'LLM-powered assistants, RAG, intelligent agents, and workflow copilots.',
      description: 'LLM-powered assistants, retrieval-augmented generation, intelligent agents, document intelligence, workflow orchestration, enterprise copilots, and AI consulting.',
      businessProblems: [
        'Manual document auditing and unstructured contract analysis bottlenecks',
        'Complex internal engineering knowledge retrieval friction',
        'Unsafe public LLM usage exposing sensitive enterprise IP',
        'Slow multi-step business workflow execution'
      ],
      capabilities: [
        'Enterprise RAG & Hybrid Vector Search',
        'Autonomous Multi-Agent Orchestration',
        'Intelligent Document & Invoice OCR',
        'DPDP & PII Enterprise Guardrails',
        'Custom Domain Fine-Tuned Models',
        'Model-Serving & Agent Workflows'
      ],
      technology: [
        'Azure OpenAI',
        'AWS Bedrock',
        'OpenAI APIs',
        'Anthropic models',
        'RAG',
        'Vector databases',
        'LangGraph',
        'Agent SDKs',
        'Python',
        'FastAPI',
        'Databricks AI/ML'
      ],
      outcomes: '80% reduction in manual document handling time with 99% extraction precision.',
      accelerator: 'ParseMaster + LinkGenX',
      caseStudy: 'BFSI Intelligent Document Processing',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
      caption: 'AGENTIC AI // Multi-Agent Workflow Orchestration & Enterprise Copilots'
    },
    {
      id: 'devops-cloud',
      slug: 'devops-cloud',
      num: '05',
      title: 'DevOps & Cloud Infrastructure',
      icon: Cloud,
      tagline: 'Cloud engineering, CI/CD, Kubernetes, IaC, observability, and multi-cloud.',
      description: 'Cloud engineering, CI/CD, container platforms, infrastructure automation, observability, platform engineering, secure deployments, and multi-cloud delivery.',
      businessProblems: [
        'Manual, error-prone server provisioning and slow release cycles',
        'Lack of distributed multi-cloud disaster recovery',
        'Unmonitored cloud spending and architectural inefficiency',
        'Security compliance gaps in container environments'
      ],
      capabilities: [
        'Infrastructure as Code (Terraform/Helm)',
        'Automated Zero-Downtime GitOps CI/CD',
        'Multi-Cluster Kubernetes Orchestration',
        'OpenTelemetry & Full-Stack Observability',
        'Cloud FinOps & Cost Optimization',
        'Platform Engineering & Landing Zones'
      ],
      technology: [
        'AWS',
        'Microsoft Azure',
        'Google Cloud',
        'Kubernetes',
        'Docker',
        'Terraform',
        'GitHub Actions',
        'GitLab CI/CD',
        'Helm',
        'Argo CD',
        'OpenTelemetry',
        'Prometheus',
        'Grafana'
      ],
      outcomes: '40% cloud infrastructure cost optimization with automated zero-downtime cutovers.',
      accelerator: 'MigrateMax Cloud Accelerator',
      caseStudy: 'Enterprise SAP Cloud Migration',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
      caption: 'CLOUD PLATFORMS // Platform Engineering & Resilient CI/CD Automation'
    },
    {
      id: 'data-governance',
      slug: 'data-governance',
      num: '06',
      title: 'Data Governance & Quality',
      icon: Lock,
      tagline: 'Lineage, metadata, cataloguing, MDM, privacy, security, and DPDP compliance.',
      description: 'Enterprise data governance, quality management, metadata, lineage, cataloguing, master data management, privacy, security, compliance, and trustworthy data foundations.',
      businessProblems: [
        'Unverified data quality causing erroneous executive reporting',
        'Unclear column-level data lineage across analytical pipelines',
        'DPDP, GDPR, and SOC 2 regulatory compliance exposure',
        'Ungoverned data access and lack of granular RBAC/ABAC'
      ],
      capabilities: [
        'Automated Column-Level Lineage Mapping',
        'Enterprise Data Catalog & Metadata',
        'Automated Great Expectations Quality Checks',
        'Granular RBAC & Attribute Access (ABAC)',
        'DPDP, GDPR & SOC 2 Compliance Frameworks',
        'Master Data Management (MDM)'
      ],
      technology: [
        'Databricks Unity Catalog',
        'Microsoft Purview',
        'Snowflake Horizon',
        'OpenMetadata',
        'Great Expectations',
        'dbt tests',
        'Data lineage',
        'Data catalogues',
        'RBAC',
        'ABAC',
        'Data quality automation'
      ],
      outcomes: '100% compliance audit readiness with continuous data quality SLA monitoring.',
      accelerator: 'ParseMaster Data Engine',
      caseStudy: 'Healthcare Data Governance & Privacy',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
      caption: 'DATA GOVERNANCE // Lineage Tracking, Quality SLAs & DPDP Compliance'
    },
    {
      id: 'integration-services',
      slug: 'integration-services',
      num: '07',
      title: 'Integration Services',
      icon: Network,
      tagline: 'Modern integration across SAP, Salesforce, ERP, SFTP, REST APIs, and Kafka.',
      description: 'Modern integration across SAP, Salesforce, ERP platforms, SFTP, REST APIs, event-driven systems, cloud services, and enterprise applications.',
      businessProblems: [
        'Disconnected legacy ERP, CRM, and cloud SaaS platforms',
        'Fragile point-to-point custom integration scripts',
        'Lack of centralized API rate limiting and security logging',
        'Delayed batch file syncs failing without automatic retries'
      ],
      capabilities: [
        'Proprietary LinkGenX Integration Hub',
        'Event-Driven Kafka Event Streaming',
        'Enterprise SAP & Salesforce Connectors',
        'Secure SFTP & Cloud Webhook Orchestration',
        'OAuth 2.0 & API Gateway Management',
        'Automated Error Handling & Retries'
      ],
      technology: [
        'REST APIs',
        'GraphQL',
        'Webhooks',
        'OAuth 2.0',
        'OpenAPI',
        'Kafka',
        'Event-driven architecture',
        'API gateways',
        'Cloud-native integration',
        'Python',
        'Node.js'
      ],
      outcomes: '99.99% integration uptime across mission-critical ERP, CRM, and financial endpoints.',
      accelerator: 'LinkGenX Connectivity Hub',
      caseStudy: 'Cross-Enterprise ERP & SFTP Synchronization',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
      caption: 'INTEGRATION HUB // Event-Driven API Gateways & Enterprise Connectors'
    },
    {
      id: 'servicenow-solutions',
      slug: 'servicenow-solutions',
      num: '08',
      title: 'ServiceNow Solutions',
      icon: Workflow,
      tagline: 'End-to-end ITSM, ITOM, ITAM, CSM, HRSD, GRC, and Flow Designer automation.',
      description: 'End-to-end ServiceNow implementations across ITSM, ITOM, ITAM, CSM, HRSD, GRC, FSM, workflow automation, service operations, and enterprise process modernization.',
      businessProblems: [
        'Fragmented IT incident management and slow resolution times',
        'Inaccurate configuration management database (CMDB) records',
        'Manual HR onboarding and employee service request bottlenecks',
        'Lack of integration between ServiceNow and cloud infrastructure'
      ],
      capabilities: [
        'ITSM & ITOM Modernization',
        'ServiceNow Flow Designer Automation',
        'IntegrationHub API Orchestration',
        'CMDB & Asset Management (ITAM)',
        'Customer Service Management (CSM)',
        'ServiceNow AI & Virtual Agent Config'
      ],
      technology: [
        'ServiceNow',
        'ServiceNow Flow Designer',
        'IntegrationHub',
        'REST APIs',
        'GraphQL where applicable',
        'OAuth 2.0',
        'CMDB',
        'ServiceNow AI capabilities',
        'Workflow automation',
        'Event-driven integrations'
      ],
      outcomes: '65% faster IT incident resolution with automated CMDB topology discovery.',
      accelerator: 'LinkGenX for ServiceNow',
      caseStudy: 'Global Enterprise ITSM & Flow Automation',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
      caption: 'WORKFLOW MODERNIZATION // Enterprise ServiceNow & Flow Designer Solutions'
    },
    {
      id: 'advisory-services',
      slug: 'advisory-services',
      num: '09',
      title: 'Advisory Services',
      icon: Compass,
      tagline: 'Strategic cloud, AI, data, and platform modernization architecture consulting.',
      description: 'Cloud, AI, data, operations, and modernization consulting that defines the right architecture, roadmap, technology choices, governance model, and implementation strategy before engineering begins.',
      businessProblems: [
        'Uncertain technology vendor selection and platform architecture risks',
        'Cloud migration cost overruns without clear FinOps planning',
        'Lack of enterprise AI governance and risk management strategy',
        'Siloed engineering teams working without unified architectural blueprints'
      ],
      capabilities: [
        'Enterprise AI & Data Strategy',
        'Cloud Modernization Blueprints',
        'Cloud FinOps & MLOps Roadmaps',
        'Data Governance & Compliance Strategy',
        'Platform Engineering Assessments',
        'Technology Selection & Feasibility'
      ],
      technology: [
        'AI strategy',
        'Data strategy',
        'Cloud modernization',
        'Platform engineering',
        'Enterprise architecture',
        'Data governance',
        'AI governance',
        'Cloud FinOps',
        'MLOps',
        'Data platform modernization',
        'Technology roadmap'
      ],
      outcomes: 'Actionable 3-year technology roadmaps with 30-day proof-of-concept deliverables.',
      accelerator: 'SMRIKAAM Architecture Framework',
      caseStudy: 'Enterprise Digital Transformation Roadmap',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
      caption: 'STRATEGIC ADVISORY // Senior Technology Roadmap & Architecture Consulting'
    },
    {
      id: 'ai-workflow-automation',
      slug: 'ai-workflow-automation',
      num: '10',
      title: 'AI Workflow Automation',
      icon: BarChart2,
      tagline: 'Agentic AI workflows orchestrating multi-step business tasks and document ops.',
      description: 'Agentic AI workflows that orchestrate multi-step business processes including document processing, reporting, customer intelligence, compliance, knowledge operations, and enterprise task automation.',
      businessProblems: [
        'Repetitive multi-step back-office manual data entry and reconciliation',
        'Complex customer query triage requiring cross-system lookups',
        'Manual compliance auditing across structured and unstructured filings',
        'Disconnected systems delaying executive decision cycles'
      ],
      capabilities: [
        'Agentic Multi-Step Process Execution',
        'Automated Document Ingestion & Routing',
        'Human-in-the-Loop Approval Checkpoints',
        'Vector-Powered Knowledge Operations',
        'Automated Regulatory Compliance Triage',
        'Event-Driven Task Triggering'
      ],
      technology: [
        'LLM APIs',
        'AI agents',
        'RAG',
        'LangGraph',
        'Workflow orchestration',
        'Python',
        'FastAPI',
        'Vector search',
        'Document intelligence',
        'Event-driven architecture',
        'API integrations',
        'Human-in-the-loop workflows'
      ],
      outcomes: '75% operational cycle time reduction with 100% auditable process telemetry.',
      accelerator: 'ParseMaster + LinkGenX',
      caseStudy: 'Automated Regulatory Filing & Processing Workflow',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
      caption: 'PROCESS INTELLIGENCE // Agentic Automation & Multi-Step Workflows'
    }
  ];

  // Preload images to eliminate flickers
  useEffect(() => {
    services.forEach((srv) => {
      const img = new Image();
      img.src = srv.image;
    });
  }, []);

  const handleMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    setMousePos({ x, y });
  };

  const activeService = services[activeIdx];
  const ActiveIcon = activeService.icon;

  const rotateX = isHovered ? (0.5 - mousePos.y) * 4 : 0;
  const rotateY = isHovered ? (mousePos.x - 0.5) * 4 : 0;
  const translateX = isHovered ? (mousePos.x - 0.5) * 10 : 0;
  const translateY = isHovered ? (mousePos.y - 0.5) * 10 : 0;

  return (
    <div className="relative z-10 pt-28 pb-24 text-text">
      {/* SECTION 01 — SERVICES HERO */}
      <section id="overview" data-scroll-label="SERVICES" className="px-6 md:px-16 max-w-7xl mx-auto mb-16">
        <div className="page-title-surface relative border border-border p-8 md:p-12 overflow-hidden">
          <BannerDrawBorder />
          <div className="flex items-center justify-between mb-4">
            <div className="font-mono text-xs md:text-[13px] text-accent uppercase tracking-[0.2em] font-medium">
              ENGINEERING CAPABILITIES // OUR SERVICES
            </div>
            <div className="font-mono text-xs md:text-[13px] text-text-muted border border-border px-3 py-1 bg-black/[0.02] dark:bg-white/[0.03]">
              10 CAPABILITIES
            </div>
          </div>

          <TextReveal
            text="CONNECTED TECHNOLOGY SYSTEM"
            as="h1"
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-text leading-[1.0] mb-4 max-w-5xl"
          />

          <p className="text-[16px] md:text-[18px] text-text-muted max-w-3xl font-normal leading-[1.6] border-l-2 border-accent pl-4">
            Ten integrated enterprise capabilities engineered for production AI/ML, high-throughput data platforms, agentic workflow automation, and industrial systems.
          </p>
        </div>
      </section>

      {/* SECTION 02 — THE 10-SERVICE SYSTEM (Interactive Master-Detail Architecture) */}
      <section id="capabilities" data-scroll-label="10-SERVICE SYSTEM" className="px-6 md:px-16 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start border-t border-border/70 pt-10">
          
          {/* Left Column: 10 Services Selector List */}
          <div
            role="tablist"
            aria-label="Enterprise Services"
            className="lg:col-span-5 page-title-surface border border-border overflow-hidden flex flex-col divide-y divide-border/70"
          >
            {services.map((srv, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={srv.id}
                  role="tab"
                  id={`service-tab-${srv.id}`}
                  aria-selected={isActive}
                  aria-controls={`service-panel-${srv.id}`}
                  tabIndex={0}
                  onClick={() => setActiveIdx(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveIdx(idx);
                    }
                  }}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`service-tab-item group py-4 px-4 cursor-pointer flex items-start justify-between gap-4 outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                    isActive
                      ? 'active -ml-[1px]'
                      : 'hover:bg-black/[0.02] dark:hover:bg-white/[0.015]'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <span className={`font-mono text-[12px] font-medium tracking-widest pt-0.5 transition-colors ${
                      isActive ? 'text-accent' : 'text-text-muted/60 group-hover:text-text'
                    }`}>
                      {srv.num}
                    </span>
                    <div>
                      <h3 className={`font-heading text-base md:text-[17px] font-semibold tracking-tight transition-colors ${
                        isActive ? 'text-text' : 'text-text/80 group-hover:text-text'
                      }`}>
                        {srv.title}
                      </h3>
                      <p className="text-[13px] text-text-muted font-normal leading-[1.4] mt-0.5 line-clamp-1 max-w-md">
                        {srv.tagline}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`font-mono text-sm shrink-0 mt-1 transition-transform duration-200 ${
                      isActive ? 'text-accent translate-x-1' : 'text-text-muted/40 group-hover:translate-x-1 group-hover:text-text-muted'
                    }`}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Service Detailed Specification Stage */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <Reveal
              variant="scale"
              key={activeService.id}
              role="tabpanel"
              id={`service-panel-${activeService.id}`}
              aria-labelledby={`service-tab-${activeService.id}`}
              className="service-detail-panel p-6 md:p-8 space-y-6"
            >
              
              {/* Header: Service Number, Badge, and Title */}
              <div className="flex items-start justify-between gap-4 border-b border-border/70 pb-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 border border-border flex items-center justify-center text-accent shrink-0 mt-0.5 font-mono text-sm font-bold">
                    {activeService.num}
                  </div>
                  <div>
                    <div className="font-mono text-[12px] text-accent uppercase tracking-[0.12em] font-medium">
                      SPECIFICATION // {activeService.num} OF 10
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-text tracking-tight mt-0.5">
                      {activeService.title}
                    </h2>
                  </div>
                </div>
                <div className="hidden sm:block font-mono text-[11px] text-text-muted/70 uppercase tracking-widest border border-border px-2 py-1">
                  ENTERPRISE READY
                </div>
              </div>

              {/* Service Detailed Narrative */}
              <p className="text-[15px] md:text-[16px] font-normal text-text-muted leading-[1.6]">
                {activeService.description}
              </p>

              {/* Real Photograph with Parallax on Desktop */}
              <div
                ref={stageRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setMousePos({ x: 0.5, y: 0.5 });
                }}
                className="relative overflow-hidden aspect-video border border-border bg-black/5 dark:bg-white/5"
              >
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out"
                  style={{
                    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px, ${translateY}px, 0px)`
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/80 backdrop-blur-sm text-[12px] font-mono text-white/90 tracking-wider">
                  {activeService.caption}
                </div>
              </div>

              {/* Business Problems Solved */}
              <div>
                <h4 className="font-mono text-[12px] md:text-[13px] text-accent font-medium uppercase tracking-[0.12em] mb-2.5">
                  BUSINESS PROBLEMS SOLVED
                </h4>
                <ul className="space-y-2">
                  {activeService.businessProblems.map((prob, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[14px] md:text-[15px] font-normal text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Capabilities */}
              <div>
                <h4 className="font-mono text-[12px] md:text-[13px] text-accent font-medium uppercase tracking-[0.12em] mb-3">
                  CORE CAPABILITIES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3.5 py-2 bg-black/[0.03] dark:bg-white/[0.04] border border-border text-[13px] md:text-[14px] font-mono text-text font-normal"
                    >
                      <span className="text-accent font-medium select-none">+</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div>
                <h4 className="font-mono text-[12px] md:text-[13px] text-accent font-medium uppercase tracking-[0.12em] mb-3">
                  MODERN TECHNOLOGY STACK
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {activeService.technology.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1.5 bg-bg border border-border text-[13px] md:text-[14px] font-mono text-text font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Typical Outcome */}
              <div className="p-4 bg-black/[0.02] dark:bg-white/[0.03] border-l-2 border-accent">
                <div className="font-mono text-[12px] text-accent uppercase tracking-[0.12em] font-medium mb-1">
                  BUSINESS OUTCOME
                </div>
                <p className="text-[15px] md:text-[16px] text-text font-semibold leading-[1.5]">
                  {activeService.outcomes}
                </p>
              </div>

              {/* Accelerator & Case Study Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-border/70 font-mono text-[13px]">
                <div className="p-3.5 border border-border/70 flex flex-col justify-between">
                  <span className="text-[11px] text-text-muted font-medium uppercase tracking-wider mb-1.5">ACCELERATOR / SYSTEM</span>
                  <Link to="/accelerators" className="text-text font-medium hover:text-accent transition-colors inline-flex items-center gap-1.5 group/acc">
                    <span>{activeService.accelerator}</span>
                    <span className="text-accent transition-transform duration-200 group-hover/acc:translate-x-1" aria-hidden="true">→</span>
                  </Link>
                </div>
                <div className="p-3.5 border border-border/70 flex flex-col justify-between">
                  <span className="text-[11px] text-text-muted font-medium uppercase tracking-wider mb-1.5">CASE STUDY / WORKBENCH</span>
                  <Link to="/case-studies" className="text-text font-medium hover:text-accent transition-colors inline-flex items-center gap-1.5 group/cs">
                    <span>{activeService.caseStudy}</span>
                    <span className="text-accent transition-transform duration-200 group-hover/cs:translate-x-1" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              {/* Direct Specification & CTA Links */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/services/${activeService.slug}`}
                  className="admin-btn flex-1 py-3 text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 text-text hover:text-accent"
                >
                  <span>VIEW FULL SPECIFICATION</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-primary flex-1 py-3 text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2"
                >
                  <span>DISCUSS THIS SERVICE</span>
                  <span className="arrow-hover" aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 03 — END CTA BAND */}
      <section id="cta" data-scroll-label="STRATEGY CALL" className="px-6 md:px-16 max-w-7xl mx-auto mt-24">
        <Reveal variant="scale" className="border border-border p-10 md:p-14 text-center bg-bg/95 backdrop-blur-md">
          <div className="font-mono text-[12px] md:text-[13px] text-accent uppercase tracking-[0.14em] font-medium mb-3">
            ENGAGEMENT // TECHNOLOGY CONSULTATION
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-text mb-4">
            TALK TO OUR TECHNOLOGY TEAM
          </h2>
          <p className="text-text-muted text-[15px] md:text-[16px] font-normal max-w-xl mx-auto mb-8 leading-[1.6]">
            Discuss your engineering architecture, enterprise AI models, or industrial automation needs directly with our senior leads.
          </p>
          <Link to="/contact" className="btn btn-primary text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2">
            <span>BOOK STRATEGY CALL</span>
            <span className="arrow-hover" aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
