import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Cpu, Brain, Database, Sparkles, Cloud, Lock, Network, Workflow, Compass, BarChart2 } from 'lucide-react';
import api from '../api';
import BlueprintWrapper from '../components/BlueprintWrapper';
import ReadingProgressBar from '../components/anim/ReadingProgressBar';
import TextReveal from '../components/anim/TextReveal';
import Reveal from '../components/anim/Reveal';

export default function ServiceDetail() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const defaultServicesMap = {
    'ai-ml': {
      title: 'AI / ML',
      slug: 'ai-ml',
      summary: 'Production-ready AI and machine learning solutions for predictive intelligence, intelligent decision support, computer vision, forecasting, recommendation systems, and enterprise AI applications.',
      content: `### WHAT WE DO
We engineer production-ready AI and machine learning platforms that transform complex unstructured and structured enterprise telemetry into deterministic, real-time predictions. From computer vision inspection on high-speed manufacturing lines to multi-horizon demand forecasting and autonomous recommendation engines, our AI/ML solutions deliver scalable, high-throughput intelligence.

### WHAT BUSINESS PROBLEM WE SOLVE
- **Operational Unpredictability:** High scrap rates and unplanned equipment failures caused by delayed human inspection and lack of real-time telemetry analytics.
- **Manual Quality Bottlenecks:** Line slowdowns resulting from manual optical sorting and defect inspection in discrete manufacturing.
- **Model Drift & Governance Gaps:** Fragmented machine learning experiments that fail to achieve production SLAs or lack automated MLOps pipelines and DPDP compliance.

### HOW WE ENGINEER IT
- **Production MLOps Pipelines:** Automated continuous training (CT) and model deployment pipelines managed via MLflow and Databricks.
- **Sub-50ms Inference Engines:** Containerized PyTorch and ONNX models running on edge clusters and cloud endpoints with automated latency optimization.
- **Real-Time Telemetry & KPI Integration:** Executive BI dashboards, MIS reporting engines, and streaming time-series anomaly detection.

### BUSINESS OUTCOMES
- **95% Reduction** in manual reporting and inspection overhead.
- **Sub-50ms Inference Latency** across live factory telemetry and online recommendation systems.
- **Zero-Downtime Model Rollouts** with automated rollback and drift alerts.`,
      capabilities: [
        'Predictive Intelligence Models',
        'Computer Vision & Defect Detection',
        'Demand & Inventory Forecasting',
        'Recommendation & Decision Engines',
        'Real-Time Telemetry Dashboards',
        'Automated Operational Reporting',
        'MLOps Pipelines & Governance',
        'Azure ML & Databricks Ingestion'
      ],
      technology: ['Python', 'PyTorch', 'scikit-learn', 'MLflow', 'Azure Machine Learning', 'Databricks', 'OpenAI-compatible APIs', 'Vector databases', 'MLOps pipelines'],
      cover_image_url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop'
    },
    'data-analytics-bi': {
      // Backward compatibility alias for ai-ml
      title: 'AI / ML',
      slug: 'ai-ml',
      summary: 'Production-ready AI and machine learning solutions for predictive intelligence, intelligent decision support, computer vision, forecasting, recommendation systems, and enterprise AI applications.',
      content: `### WHAT WE DO
We engineer production-ready AI and machine learning platforms that transform complex enterprise telemetry into deterministic, real-time predictions.

### MODERN TECHNOLOGY STACK
Python, PyTorch, scikit-learn, MLflow, Azure Machine Learning, Databricks, OpenAI-compatible APIs, Vector databases, MLOps pipelines.`,
      capabilities: ['Predictive Intelligence', 'Computer Vision', 'Demand Forecasting', 'Recommendation Engines', 'Real-Time Telemetry', 'MLOps Pipelines'],
      technology: ['Python', 'PyTorch', 'scikit-learn', 'MLflow', 'Azure Machine Learning', 'Databricks', 'OpenAI-compatible APIs'],
      cover_image_url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop'
    },
    'industrial-iot-iiot': {
      title: 'Industrial IoT (IIoT)',
      slug: 'industrial-iot-iiot',
      summary: 'Multi-protocol machine connectivity, real-time telemetry, OEE monitoring, downtime intelligence, predictive maintenance, and connected operations for industrial environments.',
      content: `### WHAT WE DO
We build end-to-end industrial telemetry infrastructures that connect legacy factory machines, modern CNCs, PLCs, and SCADA networks to centralized analytics platforms using our proprietary BitXhift IIoT accelerator.

### WHAT BUSINESS PROBLEM WE SOLVE
- **Unplanned Machine Breakdowns:** Catastrophic spindle, bearing, and motor failures resulting in costly unscheduled line stoppages.
- **Dark Factory Equipment:** Inability to extract telemetry from legacy Modbus, serial, and proprietary PLC protocols.
- **Inaccurate OEE Calculation:** Shift productivity estimates based on manual paper logbooks rather than real-time machine cycle data.

### HOW WE ENGINEER IT
- **BitXhift Edge Daemon:** Light-footprint protocol normalization engines deployed directly adjacent to controllers for Modbus TCP/RTU, OPC-UA, and Siemens S7.
- **Store-and-Forward Buffer:** Resilient edge queuing ensuring zero data loss during network dropouts or plant maintenance.
- **Real-Time OEE Wallboards:** Live shop-floor displays updating machine status, cycle times, downtime reasons, and predictive alerts.

### BUSINESS OUTCOMES
- **35% Reduction** in unplanned line downtime within 60 days of deployment.
- **Live OEE Tracking** across 500+ connected machines with sub-second floor wallboard updates.
- **Automated Root-Cause Diagnosis** for machine micro-stoppages.`,
      capabilities: [
        'Multi-Protocol Edge Ingestion',
        'Real-Time OEE & Downtime Tracking',
        'Vibration & Thermal Anomaly Detection',
        'Live Factory Floor Wallboards',
        'Modbus/OPC-UA/MQTT Telemetry',
        'Edge Machine Connectivity',
        'Store-and-Forward Edge Buffering',
        'Predictive Maintenance Workflows'
      ],
      technology: ['MQTT', 'OPC UA', 'Modbus TCP', 'Edge computing', 'Azure IoT', 'AWS IoT', 'Kubernetes', 'Docker', 'Grafana', 'Time-series databases', 'Python'],
      cover_image_url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop'
    },
    'data-engineering': {
      title: 'Data Engineering & Modernization',
      slug: 'data-engineering',
      summary: 'Cloud-native data pipelines, lakehouse architectures, real-time ingestion, data modernization, migration, transformation, orchestration, and scalable analytical data platforms.',
      content: `### WHAT WE DO
We architect enterprise data platforms, lakehouses, and real-time streaming pipelines that ingest, transform, and serve petabyte-scale data with zero loss and sub-second query performance.

### WHAT BUSINESS PROBLEM WE SOLVE
- **Legacy Warehouse Bottlenecks:** Fragile legacy databases struggling with high concurrency, slow batch ETL runs, and high maintenance licenses.
- **Data Latency:** Business analysts waiting hours or days for batch ETL jobs to update core operational tables.
- **Schema Drift & Data Quality:** Downstream analytics dashboards breaking whenever source system schemas evolve without automated testing.

### HOW WE ENGINEER IT
- **Accelerated by MigrateMax & ParseMaster:** Automated schema transformation, CDC streaming validation, and high-throughput document/data parsing.
- **Modern Lakehouse Design:** Delta Lake and Apache Iceberg storage formats on Databricks and Snowflake orchestrated with Apache Airflow and dbt.
- **Zero-Downtime Cutover:** Continuous row-level checksum verification and automated data reconciliation.

### BUSINESS OUTCOMES
- **60% Acceleration** in analytical SQL query execution speed.
- **Zero Data Loss** across multi-source real-time streaming ingestion pipelines.
- **100% Automated Schema Testing** with dbt and automated CI/CD data quality checks.`,
      capabilities: [
        'Cloud-Native Lakehouse Architecture',
        'Automated ELT & CDC Ingestion',
        'dbt Transformation & Validation',
        'Schema Drift & Cleansing Engine',
        'Zero-Downtime Database Cutovers',
        'Real-Time Ingestion Pipelines',
        'Snowpark & Spark Stream Processing',
        'Delta Lake & Iceberg Modernization'
      ],
      technology: ['Databricks', 'Snowflake', 'dbt', 'Apache Airflow', 'Apache Spark', 'Delta Lake', 'Apache Iceberg', 'Python', 'SQL', 'Snowpark'],
      cover_image_url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop'
    },
    'generative-agentic-ai': {
      title: 'Generative AI & Agentic AI',
      slug: 'generative-agentic-ai',
      summary: 'LLM-powered assistants, retrieval-augmented generation, intelligent agents, document intelligence, workflow orchestration, enterprise copilots, and AI consulting.',
      content: `### WHAT WE DO
We engineer autonomous agentic AI systems, enterprise RAG platforms, and multi-agent workflows that automate complex knowledge operations with strict role-based data governance.

### WHAT BUSINESS PROBLEM WE SOLVE
- **Unstructured Document Overload:** Manual invoice, contract, technical drawing, and audit report parsing draining thousands of engineering hours.
- **Enterprise Knowledge Silos:** Critical operational procedures locked inside thousands of disparate PDFs, intranet wikis, and ERP tickets.
- **Public LLM Security Concerns:** Risk of IP leaks and hallucinations when using untuned consumer AI models.

### HOW WE ENGINEER IT
- **Domain-Tuned Agent Architectures:** LangGraph and agent SDK orchestration connecting specialized agents for retrieval, verification, and execution.
- **Hybrid Dense-Sparse RAG:** Pinecone and vector database indexes paired with full-text search for 99%+ retrieval accuracy.
- **Enterprise Privacy Guardrails:** PII redaction, DPDP Act compliance checks, and deterministic output validation filters.

### BUSINESS OUTCOMES
- **80% Reduction** in manual document and contract analysis cycle time.
- **99% Information Extraction Accuracy** on dense enterprise PDFs and invoices.
- **100% Private, Governed Execution** within client cloud perimeters.`,
      capabilities: [
        'Enterprise RAG & Hybrid Vector Search',
        'Autonomous Multi-Agent Orchestration',
        'Intelligent Document & Invoice OCR',
        'DPDP & PII Enterprise Guardrails',
        'Custom Domain Fine-Tuned Models',
        'Model-Serving & Agent Workflows',
        'LangGraph Workflow Orchestration',
        'Enterprise Copilot Engineering'
      ],
      technology: ['Azure OpenAI', 'AWS Bedrock', 'OpenAI APIs', 'Anthropic models', 'RAG', 'Vector databases', 'LangGraph', 'Agent SDKs', 'Python', 'FastAPI', 'Databricks AI/ML'],
      cover_image_url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop'
    },
    'devops-cloud': {
      title: 'DevOps & Cloud Infrastructure',
      slug: 'devops-cloud',
      summary: 'Cloud engineering, CI/CD, container platforms, infrastructure automation, observability, platform engineering, secure deployments, and multi-cloud delivery.',
      content: `### WHAT WE DO
We design, automate, and manage resilient cloud landing zones, container platforms, and GitOps CI/CD delivery pipelines across AWS, Azure, and Google Cloud.

### WHAT BUSINESS PROBLEM WE SOLVE
- **Manual Deployment Friction:** Deployment bottlenecks, environment inconsistencies, and weekend maintenance downtime.
- **Uncontrolled Cloud Spending:** Sprawling multi-cloud resources without automated FinOps rightsizing or governance policies.
- **Observability Blindspots:** Disparate logs and metrics making distributed microservice troubleshooting slow and reactive.

### HOW WE ENGINEER IT
- **Infrastructure as Code:** Modular Terraform and Helm templates defining reproducible, immutable cloud infrastructure.
- **GitOps CI/CD Automation:** GitHub Actions, GitLab CI/CD, and Argo CD pipelines with automated security scanning and zero-downtime rolling updates.
- **Full-Stack Observability:** OpenTelemetry instrumentation streaming traces, metrics, and logs to Prometheus and Grafana.

### BUSINESS OUTCOMES
- **40% Cloud Cost Optimization** through automated resource scheduling and FinOps governance.
- **Zero-Downtime Blue-Green Deployments** for mission-critical workloads.
- **Sub-Minute Rollbacks** on failed production releases.`,
      capabilities: [
        'Infrastructure as Code (Terraform/Helm)',
        'Automated Zero-Downtime GitOps CI/CD',
        'Multi-Cluster Kubernetes Orchestration',
        'OpenTelemetry & Full-Stack Observability',
        'Cloud FinOps & Cost Optimization',
        'Platform Engineering & Landing Zones',
        'Argo CD Continuous Delivery',
        'Multi-Cloud Disaster Recovery'
      ],
      technology: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions', 'GitLab CI/CD', 'Helm', 'Argo CD', 'OpenTelemetry', 'Prometheus', 'Grafana'],
      cover_image_url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop'
    },
    'data-governance': {
      title: 'Data Governance & Quality',
      slug: 'data-governance',
      summary: 'Enterprise data governance, quality management, metadata, lineage, cataloguing, master data management, privacy, security, compliance, and trustworthy data foundations.',
      content: `### WHAT WE DO
We establish enterprise data governance frameworks, automated lineage mapping, and real-time quality validation to ensure data trust, regulatory compliance, and security.

### WHAT BUSINESS PROBLEM WE SOLVE
- **Data Quality Blindspots:** Silent schema errors, duplicate customer records, and missing fields corrupting analytical and ML models.
- **Regulatory Penalties:** Compliance risks under India DPDP Act, GDPR, and SOC 2 frameworks due to unmanaged PII data.
- **Untraceable Metric Definitions:** Conflicting business KPI calculations across departmental silos without unified cataloguing.

### HOW WE ENGINEER IT
- **Automated Column-Level Lineage:** End-to-end tracing from source database writes to final executive dashboard outputs using Databricks Unity Catalog and Microsoft Purview.
- **Continuous Quality Testing:** Automated Great Expectations and dbt tests executing at every pipeline ingestion stage.
- **Role-Based Access Control:** Fine-grained RBAC and ABAC access policies with automated column masking.

### BUSINESS OUTCOMES
- **100% Audit Readiness** for DPDP Act, GDPR, and SOC 2 regulatory compliance reviews.
- **Automated Data Quality SLAs** with instant Slack/Teams alerting on anomaly detection.
- **Single Source of Truth Catalog** across all multi-cloud data assets.`,
      capabilities: [
        'Automated Column-Level Lineage Mapping',
        'Enterprise Data Catalog & Metadata',
        'Automated Great Expectations Quality Checks',
        'Granular RBAC & Attribute Access (ABAC)',
        'DPDP, GDPR & SOC 2 Compliance Frameworks',
        'Master Data Management (MDM)',
        'Data Quality Automation & Testing',
        'Unity Catalog & Purview Integration'
      ],
      technology: ['Databricks Unity Catalog', 'Microsoft Purview', 'Snowflake Horizon', 'OpenMetadata', 'Great Expectations', 'dbt tests', 'Data lineage', 'Data catalogues', 'RBAC', 'ABAC', 'Data quality automation'],
      cover_image_url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop'
    },
    'integration-services': {
      title: 'Integration Services',
      slug: 'integration-services',
      summary: 'Modern integration across SAP, Salesforce, ERP platforms, SFTP, REST APIs, event-driven systems, cloud services, and enterprise applications.',
      content: `### WHAT WE DO
We design and deploy modern event-driven API gateways and multi-protocol integration architectures using our proprietary LinkGenX data connectivity hub.

### WHAT BUSINESS PROBLEM WE SOLVE
- **Disconnected Core Systems:** Inability to synchronize real-time transactions between SAP ERP, Salesforce CRM, custom apps, and external partners.
- **Brittle Point-to-Point Scripts:** Fragile legacy custom scripts that fail silently without retry queues or error telemetry.
- **Legacy File Transfer Delays:** Slow batch SFTP routines creating discrepancies between warehouse inventories and eCommerce systems.

### HOW WE ENGINEER IT
- **LinkGenX Connectivity Hub:** Pre-built, certified connectors for SAP S/4HANA, Salesforce, Microsoft Dynamics, SFTP, and REST/GraphQL APIs.
- **Event-Driven Kafka Streaming:** High-throughput event buses decoupling producers and consumers with guaranteed message delivery.
- **Centralized API Security:** Tokenized OAuth 2.0 authentication, rate limiting, and automated health probing.

### BUSINESS OUTCOMES
- **99.99% Integration Availability** across mission-critical financial, CRM, and inventory data flows.
- **Real-Time Bidirectional Sync** replacing delayed overnight batch transfers.
- **Centralized Telemetry & Audit Logs** across all enterprise API gateways.`,
      capabilities: [
        'Proprietary LinkGenX Integration Hub',
        'Event-Driven Kafka Event Streaming',
        'Enterprise SAP & Salesforce Connectors',
        'Secure SFTP & Cloud Webhook Orchestration',
        'OAuth 2.0 & API Gateway Management',
        'Automated Error Handling & Retries',
        'GraphQL & REST API Architectures',
        'Real-Time Webhook Pipeline Routing'
      ],
      technology: ['REST APIs', 'GraphQL', 'Webhooks', 'OAuth 2.0', 'OpenAPI', 'Kafka', 'Event-driven architecture', 'API gateways', 'Cloud-native integration', 'Python', 'Node.js'],
      cover_image_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop'
    },
    'servicenow-solutions': {
      title: 'ServiceNow Solutions',
      slug: 'servicenow-solutions',
      summary: 'End-to-end ServiceNow implementations across ITSM, ITOM, ITAM, CSM, HRSD, GRC, FSM, workflow automation, service operations, and enterprise process modernization.',
      content: `### WHAT WE DO
We deliver enterprise ServiceNow implementations, workflow automation, and custom IntegrationHub pipelines that streamline IT operations, service management, and customer workflows.

### WHAT BUSINESS PROBLEM WE SOLVE
- **Slow IT Support SLA Times:** Disorganized ticketing workflows causing high MTTR (Mean Time to Resolution) for internal support requests.
- **Stale CMDB Configuration Records:** Outdated asset inventories resulting in costly software licensing audits and deployment failures.
- **Fragmented Employee Service Portals:** Disjointed HR, facilities, and IT onboarding experiences across global offices.

### HOW WE ENGINEER IT
- **ServiceNow Flow Designer Automation:** Code-free and script-driven workflow orchestration automating multi-step approvals and task dispatch.
- **IntegrationHub Cloud Connectors:** Direct integration between ServiceNow, AWS, Azure, Jira, and enterprise identity systems.
- **CMDB & ITAM Discovery:** Automated discovery probes updating hardware, software, and dependency topologies in real time.

### BUSINESS OUTCOMES
- **65% Reduction in IT Ticket Resolution Time** through automated routing and virtual agents.
- **100% Accurate CMDB Topology** maintaining live compliance and asset tracking.
- **Unified Employee Service Portals** accelerating onboarding from days to minutes.`,
      capabilities: [
        'ITSM & ITOM Modernization',
        'ServiceNow Flow Designer Automation',
        'IntegrationHub API Orchestration',
        'CMDB & Asset Management (ITAM)',
        'Customer Service Management (CSM)',
        'ServiceNow AI & Virtual Agent Config',
        'HRSD Employee Workflow Portals',
        'GRC & Security Operations Setup'
      ],
      technology: ['ServiceNow', 'ServiceNow Flow Designer', 'IntegrationHub', 'REST APIs', 'GraphQL where applicable', 'OAuth 2.0', 'CMDB', 'ServiceNow AI capabilities', 'Workflow automation', 'Event-driven integrations'],
      cover_image_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'
    },
    'advisory-services': {
      title: 'Advisory Services',
      slug: 'advisory-services',
      summary: 'Cloud, AI, data, operations, and modernization consulting that defines the right architecture, roadmap, technology choices, governance model, and implementation strategy before engineering begins.',
      content: `### WHAT WE DO
We provide senior executive advisory, technology feasibility studies, enterprise architectural blueprints, and modernization roadmaps that de-risk major digital transformations before capital commitment.

### WHAT BUSINESS PROBLEM WE SOLVE
- **Technology Misalignment:** Costly software platform procurement decisions that fail to integrate with existing legacy infrastructures.
- **Cloud Migration Overruns:** Lack of FinOps planning leading to unexpected multi-cloud hosting and egress fees.
- **AI Readiness Uncertainty:** Hesitation to adopt generative and agentic AI due to compliance, privacy, or security uncertainties.

### HOW WE ENGINEER IT
- **Target State Architecture Blueprints:** Defining 3-year technology roadmaps, data platform topologies, and MLOps governance frameworks.
- **Cloud FinOps & Infrastructure Assessment:** Comprehensive workload profiling to identify 30%+ cost optimization opportunities.
- **AI & Data Strategy Workshops:** Senior technology roadmaps with practical, high-ROI 30-day proof-of-concept milestones.

### BUSINESS OUTCOMES
- **Clear Architectural Roadmaps** aligned with board-level business and revenue targets.
- **30% Expected Cloud TCO Savings** identified through proactive FinOps architectural reviews.
- **De-risked Enterprise Transformations** with vetted proof-of-concept validation.`,
      capabilities: [
        'Enterprise AI & Data Strategy',
        'Cloud Modernization Blueprints',
        'Cloud FinOps & MLOps Roadmaps',
        'Data Governance & Compliance Strategy',
        'Platform Engineering Assessments',
        'Technology Selection & Feasibility',
        'Senior Enterprise Tech Advisory',
        'Target State Architecture Mapping'
      ],
      technology: ['AI strategy', 'Data strategy', 'Cloud modernization', 'Platform engineering', 'Enterprise architecture', 'Data governance', 'AI governance', 'Cloud FinOps', 'MLOps', 'Data platform modernization', 'Technology roadmap'],
      cover_image_url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop'
    },
    'ai-workflow-automation': {
      title: 'AI Workflow Automation',
      slug: 'ai-workflow-automation',
      summary: 'Agentic AI workflows that orchestrate multi-step business processes including document processing, reporting, customer intelligence, compliance, knowledge operations, and enterprise task automation.',
      content: `### WHAT WE DO
We build autonomous, human-in-the-loop agentic workflows that orchestrate multi-step back-office operations, document routing, customer intelligence, and regulatory filings.

### WHAT BUSINESS PROBLEM WE SOLVE
- **Manual Multi-System Repetition:** Skilled knowledge workers spending hours copying data between emails, PDFs, ERPs, and spreadsheets.
- **Delayed Compliance Verification:** Backlogs in customer verification, audit compliance, and trade finance document processing.
- **Disjointed Knowledge Workflows:** Lack of automated triage for high-volume customer inquiries and operational exceptions.

### HOW WE ENGINEER IT
- **Multi-Agent Process Orchestration:** Combining LangGraph, document intelligence, and API triggers for autonomous task execution.
- **Human-in-the-Loop Safeguards:** Dedicated exception review queues ensuring confidence scores below threshold are flagged for manual sign-off.
- **Full Process Telemetry:** End-to-end audit logging tracking every agent decision, token consumption, and API response time.

### BUSINESS OUTCOMES
- **75% Operational Cycle Time Reduction** for multi-step document and processing workflows.
- **100% Traceability and Audit Trail** for regulatory compliance reporting.
- **Zero Data Entry Errors** on validated structured and unstructured extractions.`,
      capabilities: [
        'Agentic Multi-Step Process Execution',
        'Automated Document Ingestion & Routing',
        'Human-in-the-Loop Approval Checkpoints',
        'Vector-Powered Knowledge Operations',
        'Automated Regulatory Compliance Triage',
        'Event-Driven Task Triggering',
        'FastAPI & Microservice Orchestration',
        'Full Telemetry & Audit Trails'
      ],
      technology: ['LLM APIs', 'AI agents', 'RAG', 'LangGraph', 'Workflow orchestration', 'Python', 'FastAPI', 'Vector search', 'Document intelligence', 'Event-driven architecture', 'API integrations', 'Human-in-the-loop workflows'],
      cover_image_url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop'
    }
  };

  useEffect(() => {
    async function loadService() {
      try {
        const res = await api.get(`/services/${slug}`);
        if (res.data) {
          setService(res.data);
        } else if (defaultServicesMap[slug]) {
          setService(defaultServicesMap[slug]);
        } else {
          setError('Service not found or archived.');
        }
      } catch (err) {
        if (defaultServicesMap[slug]) {
          setService(defaultServicesMap[slug]);
        } else {
          setError('Service not found or archived.');
        }
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
          <div className="font-mono text-xs text-accent uppercase mb-4">404 // NOT_FOUND</div>
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
    <div className="relative z-10 pt-28 pb-24 px-6 md:px-16 max-w-5xl mx-auto">
      <ReadingProgressBar />

      <Link to="/services" className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase mb-8 hover:underline">
        <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Services Catalog
      </Link>

      <div id="overview" data-scroll-label="OVERVIEW">
        <BlueprintWrapper className="service-detail-surface p-8 md:p-12 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="tag tag-accent">TECHNICAL SERVICE</span>
          <span className="font-mono text-xs text-text-muted">SLUG: {service.slug}</span>
        </div>

        <TextReveal
          text={service.title}
          as="h1"
          className="font-heading text-4xl md:text-5xl font-bold uppercase text-text mb-6"
        />

        <p className="text-lg md:text-xl text-text-muted font-normal border-l-2 border-accent pl-4 mb-8">
          {service.summary || service.tagline}
        </p>

        {service.cover_image_url && (
          <Reveal className="mb-10 overflow-hidden border border-border h-80 relative bg-black/5 dark:bg-white/5">
            <img src={service.cover_image_url} alt={service.title} className="w-full h-full object-cover" />
          </Reveal>
        )}

        {/* Content Body */}
        <Reveal className="prose prose-content max-w-none text-text mb-12 whitespace-pre-line leading-relaxed text-base">
          {service.content || service.description}
        </Reveal>

        {/* Capabilities list */}
        {service.capabilities && service.capabilities.length > 0 && (
          <div id="capabilities" data-scroll-label="CAPABILITIES">
            <Reveal className="border-t border-border pt-8 mb-12">
              <h3 className="font-heading text-xl font-bold text-text mb-4 uppercase">
                CORE CAPABILITIES &amp; INTEGRATIONS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-black/[0.035] dark:bg-white/[0.04] border border-border">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="font-mono text-sm text-text font-normal">{cap}</span>
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
              <h3 className="font-heading text-xl font-bold text-text mb-4 uppercase">
                MODERN TECHNOLOGY STACK
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {service.technology.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1.5 bg-black/[0.02] dark:bg-white/[0.04] border border-border text-[13px] md:text-[14px] font-mono text-text font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        )}

        {/* CTA */}
        <div id="cta" data-scroll-label="STRATEGY CALL" className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-heading text-lg font-bold text-text uppercase">Deploy This Capability</div>
            <div className="font-mono text-xs text-text-muted">Get a tailored proof-of-concept for your enterprise operations</div>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Book a Technical Call <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </BlueprintWrapper>
      </div>
    </div>
  );
}
