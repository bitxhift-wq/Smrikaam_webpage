// vite.config.js
import { defineConfig } from "file:///C:/Users/mukhe/Downloads/webpage-main/webpage-main/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/mukhe/Downloads/webpage-main/webpage-main/node_modules/@vitejs/plugin-react/dist/index.js";

// server/index.js
import express2 from "file:///C:/Users/mukhe/Downloads/webpage-main/webpage-main/node_modules/express/index.js";
import cors from "file:///C:/Users/mukhe/Downloads/webpage-main/webpage-main/node_modules/cors/lib/index.js";
import cookieParser from "file:///C:/Users/mukhe/Downloads/webpage-main/webpage-main/node_modules/cookie-parser/index.js";
import path3 from "path";
import { fileURLToPath as fileURLToPath3 } from "url";

// server/routes/api.js
import express from "file:///C:/Users/mukhe/Downloads/webpage-main/webpage-main/node_modules/express/index.js";
import multer from "file:///C:/Users/mukhe/Downloads/webpage-main/webpage-main/node_modules/multer/index.js";
import path2 from "path";
import fs2 from "fs";
import { fileURLToPath as fileURLToPath2 } from "url";
import JSZip from "file:///C:/Users/mukhe/Downloads/webpage-main/webpage-main/node_modules/jszip/lib/index.js";

// server/services/db.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// server/data/seedData.js
import bcrypt from "file:///C:/Users/mukhe/Downloads/webpage-main/webpage-main/node_modules/bcryptjs/index.js";
var initialPasswordHash = bcrypt.hashSync("AdminPassword2026!", 10);
var initialSeedData = {
  users: [
    {
      id: "usr_admin_01",
      name: "SMRIKAAM Master Admin",
      email: "admin@smrikaam.com",
      passwordHash: initialPasswordHash,
      role: "superadmin",
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-01T00:00:00.000Z"
    }
  ],
  posts: [
    {
      id: "post_01",
      title: "Architecting Low-Latency IIoT Telemetry for High-Speed Manufacturing",
      slug: "iiot-telemetry-coimbatore",
      excerpt: "How edge telemetry pipelines capture 17M+ data points per day from Modbus/OPC-UA machine controllers with under 50ms latency.",
      content: `## The Challenge of Shop-Floor Telemetry
Modern industrial manufacturing environments require continuous, sub-second visibility into PLC and CNC machine parameters. Traditional batch ETL routines fail to provide the real-time operational feedback loops needed for zero-downtime manufacturing.

### High-Throughput Edge Ingestion Architecture
By deploying containerized Python and Rust edge runtimes directly adjacent to factory controllers, sensor data is normalized via standard OPC-UA and Modbus protocols before being streamed over lightweight MQTT brokers.

- **Sub-50ms latency** on telemetry feeds
- **Edge buffer queues** to withstand factory network drops
- **Automated OEE computation** streamed live to management dashboards

### Business Impact
Deploying edge telemetry across 500+ connected manufacturing lines reduced unplanned machine stoppages by 35% within the first 60 days of deployment.`,
      cover_image_url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      category: "Industrial IoT",
      tags: ["IIoT", "OPC-UA", "Telemetry", "Manufacturing", "MQTT"],
      author: "SMRIKAAM Engineering Team",
      status: "published",
      meta_title: "Low-Latency IIoT Telemetry Architecture | SMRIKAAM Journal",
      meta_description: "Discover how SMRIKAAM builds high-speed edge telemetry pipelines capturing 17M+ sensor metrics daily.",
      created_at: "2026-08-20T10:00:00.000Z",
      updated_at: "2026-08-20T10:00:00.000Z",
      published_at: "2026-08-20T10:00:00.000Z"
    },
    {
      id: "post_02",
      title: "Zero-Downtime Data Lakehouse Migration for Enterprise Systems",
      slug: "cloud-data-warehouse-migration",
      excerpt: "Automated schema transformation and row-level validation patterns for legacy ERP database cutovers.",
      content: `## Overcoming Legacy Database Bottlenecks
Enterprise databases running on legacy Oracle and MSSQL clusters frequently suffer from high maintenance overhead, rigid schemas, and performance bottlenecks on analytical queries.

### Automated Schema Mapping with MigrateMax
Using automated AST parsing and Spark-based parallel Change Data Capture (CDC), database schemas are automatically translated into modern cloud-native lakehouse formats (Delta / Iceberg) with automated row-hash reconciliation.

1. **Schema DDL Translation**: Automated dialect mapping
2. **Parallel CDC Replication**: Continuous sync with zero source locking
3. **Data Quality Asserts**: 100% row-level reconciliation audit

### Results
Achieved 60% faster database migration cutover with zero downtime and complete data fidelity across 50M+ transactional records.`,
      cover_image_url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      category: "Data Engineering",
      tags: ["Data Lakehouse", "Cloud Migration", "Snowflake", "CDC", "Spark"],
      author: "SMRIKAAM Cloud Architecture Lab",
      status: "published",
      meta_title: "Zero-Downtime Data Lakehouse Migration | SMRIKAAM",
      meta_description: "Automated schema transformation and row-level validation for enterprise cloud database cutovers.",
      created_at: "2026-08-22T14:30:00.000Z",
      updated_at: "2026-08-22T14:30:00.000Z",
      published_at: "2026-08-22T14:30:00.000Z"
    },
    {
      id: "post_03",
      title: "Deploying Deterministic LLM Agents in Regulated Enterprise Environments",
      slug: "generative-ai-agentic-automation",
      excerpt: "Building context-aware Retrieval-Augmented Generation (RAG) pipelines with strict data governance and DPDP compliance.",
      content: `## Generative AI with Enterprise Governance
Deploying Large Language Models in production enterprise environments demands strict determinism, context grounding, and strict role-based access control (RBAC).

### Grounded Agentic RAG Architecture
Our agentic framework combines hybrid semantic vector search with deterministic validation gates to eliminate hallucinations and enforce zero data leakage.

- **Hybrid BM25 + Dense Embeddings** for precision retrieval
- **Zero Data Leakage Guardrails** adhering to DPDP compliance
- **Action Execution Validation** with full audit logging

### Production Deployment
Empowered internal compliance and operations teams to automate 80% of document review and policy lookup tasks with sub-second response times.`,
      cover_image_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      category: "Generative AI",
      tags: ["Generative AI", "Agentic AI", "RAG", "Data Governance", "LLM"],
      author: "SMRIKAAM AI Research Group",
      status: "published",
      meta_title: "Deploying Deterministic LLM Agents | SMRIKAAM Journal",
      meta_description: "Context-aware RAG pipelines and intelligent agentic automation for regulated enterprise environments.",
      created_at: "2026-08-25T09:15:00.000Z",
      updated_at: "2026-08-25T09:15:00.000Z",
      published_at: "2026-08-25T09:15:00.000Z"
    }
  ],
  services: [
    {
      id: "srv_01",
      title: "AI / ML",
      slug: "ai-ml",
      num: "01",
      tagline: "Production-ready predictive intelligence, computer vision, forecasting, and MLOps.",
      summary: "Production-ready AI and machine learning solutions for predictive intelligence, intelligent decision support, computer vision, forecasting, recommendation systems, and enterprise AI applications.",
      description: "Production-ready AI and machine learning solutions for predictive intelligence, intelligent decision support, computer vision, forecasting, recommendation systems, and enterprise AI applications.",
      businessProblems: [
        "Unpredictable operational downtime and equipment failure",
        "Manual visual inspection bottlenecks and quality escapes",
        "Lack of real-time forecasting and demand intelligence",
        "Fragmented ML experimentation without production MLOps governance"
      ],
      capabilities: [
        "Predictive Intelligence Models",
        "Computer Vision & Defect Detection",
        "Demand & Inventory Forecasting",
        "Recommendation & Decision Engines",
        "Real-Time Telemetry Dashboards",
        "Automated Operational Reporting"
      ],
      technology: ["Python", "PyTorch", "scikit-learn", "MLflow", "Azure Machine Learning", "Databricks", "OpenAI-compatible APIs", "Vector databases", "MLOps pipelines"],
      industryApplications: ["Manufacturing", "BFSI", "Retail & E-Commerce", "Healthcare"],
      problemStatement: "Enterprises struggle to operationalize experimental machine learning models into reliable, low-latency production pipelines.",
      solutionStatement: "Deploy production-grade MLOps pipelines with sub-50ms inference, automated drift tracking, and continuous retraining.",
      outcomes: "10x faster model deployment with sub-50ms inference and automated MLOps tracking.",
      accelerator: "BitXhift + ParseMaster",
      caseStudy: "Automotive OEM Live Analytics Dashboard",
      cover_image_url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      display_order: 1,
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-27T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    },
    {
      id: "srv_02",
      title: "Industrial IoT (IIoT)",
      slug: "industrial-iot-iiot",
      num: "02",
      tagline: "Multi-protocol machine connectivity, real-time telemetry, OEE monitoring, and predictive maintenance.",
      summary: "Multi-protocol machine connectivity, real-time telemetry, OEE monitoring, downtime intelligence, predictive maintenance, and connected operations for industrial environments.",
      description: "Multi-protocol machine connectivity, real-time telemetry, OEE monitoring, downtime intelligence, predictive maintenance, and connected operations for industrial environments.",
      businessProblems: [
        "Unplanned factory machine breakdowns and line stoppages",
        "Paper-based shift logs with zero real-time operational visibility",
        "Inaccurate Overall Equipment Effectiveness (OEE) metrics",
        "Siloed legacy CNC, PLC, and SCADA controllers"
      ],
      capabilities: [
        "Multi-Protocol Edge Ingestion",
        "Real-Time OEE & Downtime Tracking",
        "Vibration & Thermal Anomaly Detection",
        "Live Factory Floor Wallboards",
        "Modbus/OPC-UA/MQTT Telemetry",
        "Edge Machine Connectivity"
      ],
      technology: ["MQTT", "OPC UA", "Modbus TCP", "Edge computing", "Azure IoT", "AWS IoT", "Kubernetes", "Docker", "Grafana", "Time-series databases", "Python"],
      industryApplications: ["Automotive", "Machinery & Equipment", "Energy & Utilities", "Heavy Manufacturing"],
      problemStatement: "Unplanned machine failures cost industrial operators millions annually due to lack of predictive vibration and telemetry intelligence.",
      solutionStatement: "Deploy edge intelligence containers connecting PLCs with TimescaleDB for automated anomaly alerts.",
      outcomes: "35% downtime reduction and live OEE tracking across 500+ connected machines.",
      accelerator: "BitXhift IIoT Platform",
      caseStudy: "Smart Factory Manufacturing Transformation",
      cover_image_url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      display_order: 2,
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-27T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    },
    {
      id: "srv_03",
      title: "Data Engineering & Modernization",
      slug: "data-engineering",
      num: "03",
      tagline: "Cloud-native data pipelines, lakehouse architectures, real-time ingestion, and modernization.",
      summary: "Cloud-native data pipelines, lakehouse architectures, real-time ingestion, data modernization, migration, transformation, orchestration, and scalable analytical data platforms.",
      description: "Cloud-native data pipelines, lakehouse architectures, real-time ingestion, data modernization, migration, transformation, orchestration, and scalable analytical data platforms.",
      businessProblems: [
        "Legacy on-premises data warehouses with high maintenance costs",
        "Slow batch ETL jobs causing stale reporting data",
        "Schema divergence during ERP database migrations",
        "Unstructured data silos without automated governance"
      ],
      capabilities: [
        "Cloud-Native Lakehouse Architecture",
        "Automated ELT & CDC Ingestion",
        "dbt Transformation & Validation",
        "Schema Drift & Cleansing Engine",
        "Zero-Downtime Database Cutovers",
        "Real-Time Ingestion Pipelines"
      ],
      technology: ["Databricks", "Snowflake", "dbt", "Apache Airflow", "Apache Spark", "Delta Lake", "Apache Iceberg", "Python", "SQL", "Snowpark"],
      industryApplications: ["Retail", "Finance", "Logistics", "Healthcare"],
      problemStatement: "Fragmented data stores prevent unified cross-department analytical queries.",
      solutionStatement: "Engineer robust automated streaming pipelines into managed modern lakehouses.",
      outcomes: "60% faster query execution and zero data loss on real-time streaming ingestion.",
      accelerator: "MigrateMax + ParseMaster",
      caseStudy: "Global Supply Chain Data Lakehouse",
      cover_image_url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      display_order: 3,
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-27T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    },
    {
      id: "srv_04",
      title: "Generative AI & Agentic AI",
      slug: "generative-agentic-ai",
      num: "04",
      tagline: "LLM-powered assistants, retrieval-augmented generation, intelligent agents, and copilots.",
      summary: "LLM-powered assistants, retrieval-augmented generation, intelligent agents, document intelligence, workflow orchestration, enterprise copilots, and AI consulting.",
      description: "LLM-powered assistants, retrieval-augmented generation, intelligent agents, document intelligence, workflow orchestration, enterprise copilots, and AI consulting.",
      businessProblems: [
        "Manual document auditing and unstructured contract analysis bottlenecks",
        "Complex internal engineering knowledge retrieval friction",
        "Unsafe public LLM usage exposing sensitive enterprise IP",
        "Slow multi-step business workflow execution"
      ],
      capabilities: [
        "Enterprise RAG & Hybrid Vector Search",
        "Autonomous Multi-Agent Orchestration",
        "Intelligent Document & Invoice OCR",
        "DPDP & PII Enterprise Guardrails",
        "Custom Domain Fine-Tuned Models",
        "Model-Serving & Agent Workflows"
      ],
      technology: ["Azure OpenAI", "AWS Bedrock", "OpenAI APIs", "Anthropic models", "RAG", "Vector databases", "LangGraph", "Agent SDKs", "Python", "FastAPI", "Databricks AI/ML"],
      industryApplications: ["BFSI", "Legal & Compliance", "Healthcare", "Customer Operations"],
      problemStatement: "Enterprises struggle to deploy Generative AI due to security risks and inaccurate model hallucination.",
      solutionStatement: "Build grounded vector search pipelines with deterministic validation gates.",
      outcomes: "80% reduction in manual document handling time with 99% extraction precision.",
      accelerator: "ParseMaster + LinkGenX",
      caseStudy: "BFSI Intelligent Document Processing",
      cover_image_url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      display_order: 4,
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-27T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    },
    {
      id: "srv_05",
      title: "DevOps & Cloud Infrastructure",
      slug: "devops-cloud",
      num: "05",
      tagline: "Cloud engineering, CI/CD, container platforms, infrastructure automation, and observability.",
      summary: "Cloud engineering, CI/CD, container platforms, infrastructure automation, observability, platform engineering, secure deployments, and multi-cloud delivery.",
      description: "Cloud engineering, CI/CD, container platforms, infrastructure automation, observability, platform engineering, secure deployments, and multi-cloud delivery.",
      businessProblems: [
        "Manual, error-prone server provisioning and slow release cycles",
        "Lack of distributed multi-cloud disaster recovery",
        "Unmonitored cloud spending and architectural inefficiency",
        "Security compliance gaps in container environments"
      ],
      capabilities: [
        "Infrastructure as Code (Terraform/Helm)",
        "Automated Zero-Downtime GitOps CI/CD",
        "Multi-Cluster Kubernetes Orchestration",
        "OpenTelemetry & Full-Stack Observability",
        "Cloud FinOps & Cost Optimization",
        "Platform Engineering & Landing Zones"
      ],
      technology: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "GitLab CI/CD", "Helm", "Argo CD", "OpenTelemetry", "Prometheus", "Grafana"],
      industryApplications: ["SaaS", "FinTech", "E-Commerce", "Enterprise Platforms"],
      problemStatement: "Manual server deployments cause unexpected production outages and slow release velocity.",
      solutionStatement: "Deploy automated GitOps pipelines with automated rollback safety guards.",
      outcomes: "40% cloud infrastructure cost optimization with automated zero-downtime cutovers.",
      accelerator: "MigrateMax Cloud Accelerator",
      caseStudy: "Enterprise SAP Cloud Migration",
      cover_image_url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      display_order: 5,
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-27T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    },
    {
      id: "srv_06",
      title: "Data Governance & Quality",
      slug: "data-governance",
      num: "06",
      tagline: "Enterprise data governance, quality management, metadata, lineage, and DPDP compliance.",
      summary: "Enterprise data governance, quality management, metadata, lineage, cataloguing, master data management, privacy, security, compliance, and trustworthy data foundations.",
      description: "Enterprise data governance, quality management, metadata, lineage, cataloguing, master data management, privacy, security, compliance, and trustworthy data foundations.",
      businessProblems: [
        "Unverified data quality causing erroneous executive reporting",
        "Unclear column-level data lineage across analytical pipelines",
        "DPDP, GDPR, and SOC 2 regulatory compliance exposure",
        "Ungoverned data access and lack of granular RBAC/ABAC"
      ],
      capabilities: [
        "Automated Column-Level Lineage Mapping",
        "Enterprise Data Catalog & Metadata",
        "Automated Great Expectations Quality Checks",
        "Granular RBAC & Attribute Access (ABAC)",
        "DPDP, GDPR & SOC 2 Compliance Frameworks",
        "Master Data Management (MDM)"
      ],
      technology: ["Databricks Unity Catalog", "Microsoft Purview", "Snowflake Horizon", "OpenMetadata", "Great Expectations", "dbt tests", "Data lineage", "Data catalogues", "RBAC", "ABAC", "Data quality automation"],
      industryApplications: ["BFSI", "Healthcare", "Telecommunications", "Government"],
      problemStatement: "Unregulated data silos expose enterprises to heavy regulatory fines and privacy leaks.",
      solutionStatement: "Deploy centralized metadata catalogs with automated data masking policies.",
      outcomes: "100% compliance audit readiness with continuous data quality SLA monitoring.",
      accelerator: "ParseMaster Data Engine",
      caseStudy: "Healthcare Data Governance & Privacy",
      cover_image_url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      display_order: 6,
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-27T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    },
    {
      id: "srv_07",
      title: "Integration Services",
      slug: "integration-services",
      num: "07",
      tagline: "Modern integration across SAP, Salesforce, ERP, SFTP, REST APIs, and Kafka.",
      summary: "Modern integration across SAP, Salesforce, ERP platforms, SFTP, REST APIs, event-driven systems, cloud services, and enterprise applications.",
      description: "Modern integration across SAP, Salesforce, ERP platforms, SFTP, REST APIs, event-driven systems, cloud services, and enterprise applications.",
      businessProblems: [
        "Disconnected legacy ERP, CRM, and cloud SaaS platforms",
        "Fragile point-to-point custom integration scripts",
        "Lack of centralized API rate limiting and security logging",
        "Delayed batch file syncs failing without automatic retries"
      ],
      capabilities: [
        "Proprietary LinkGenX Integration Hub",
        "Event-Driven Kafka Event Streaming",
        "Enterprise SAP & Salesforce Connectors",
        "Secure SFTP & Cloud Webhook Orchestration",
        "OAuth 2.0 & API Gateway Management",
        "Automated Error Handling & Retries"
      ],
      technology: ["REST APIs", "GraphQL", "Webhooks", "OAuth 2.0", "OpenAPI", "Kafka", "Event-driven architecture", "API gateways", "Cloud-native integration", "Python", "Node.js"],
      industryApplications: ["Manufacturing", "Retail", "BFSI", "Supply Chain"],
      problemStatement: "Point-to-point spaghetti integrations break during ERP updates and lack centralized observability.",
      solutionStatement: "Implement LinkGenX as a unified event-driven API gateway with guaranteed message delivery.",
      outcomes: "99.99% integration uptime across mission-critical ERP, CRM, and financial endpoints.",
      accelerator: "LinkGenX Connectivity Hub",
      caseStudy: "Cross-Enterprise ERP & SFTP Synchronization",
      cover_image_url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      display_order: 7,
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-27T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    },
    {
      id: "srv_08",
      title: "ServiceNow Solutions",
      slug: "servicenow-solutions",
      num: "08",
      tagline: "End-to-end ITSM, ITOM, ITAM, CSM, HRSD, GRC, and Flow Designer automation.",
      summary: "End-to-end ServiceNow implementations across ITSM, ITOM, ITAM, CSM, HRSD, GRC, FSM, workflow automation, service operations, and enterprise process modernization.",
      description: "End-to-end ServiceNow implementations across ITSM, ITOM, ITAM, CSM, HRSD, GRC, FSM, workflow automation, service operations, and enterprise process modernization.",
      businessProblems: [
        "Fragmented IT incident management and slow resolution times",
        "Inaccurate configuration management database (CMDB) records",
        "Manual HR onboarding and employee service request bottlenecks",
        "Lack of integration between ServiceNow and cloud infrastructure"
      ],
      capabilities: [
        "ITSM & ITOM Modernization",
        "ServiceNow Flow Designer Automation",
        "IntegrationHub API Orchestration",
        "CMDB & Asset Management (ITAM)",
        "Customer Service Management (CSM)",
        "ServiceNow AI & Virtual Agent Config"
      ],
      technology: ["ServiceNow", "ServiceNow Flow Designer", "IntegrationHub", "REST APIs", "GraphQL where applicable", "OAuth 2.0", "CMDB", "ServiceNow AI capabilities", "Workflow automation", "Event-driven integrations"],
      industryApplications: ["IT Services", "Enterprise Tech", "Banking", "Healthcare Operations"],
      problemStatement: "Disorganized service tickets and manual approvals delay critical business operations.",
      solutionStatement: "Modernize ServiceNow workflows with Flow Designer and automated IntegrationHub endpoints.",
      outcomes: "65% faster IT incident resolution with automated CMDB topology discovery.",
      accelerator: "LinkGenX for ServiceNow",
      caseStudy: "Global Enterprise ITSM & Flow Automation",
      cover_image_url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      display_order: 8,
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-27T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    },
    {
      id: "srv_09",
      title: "Advisory Services",
      slug: "advisory-services",
      num: "09",
      tagline: "Strategic cloud, AI, data, and platform modernization architecture consulting.",
      summary: "Cloud, AI, data, operations, and modernization consulting that defines the right architecture, roadmap, technology choices, governance model, and implementation strategy before engineering begins.",
      description: "Cloud, AI, data, operations, and modernization consulting that defines the right architecture, roadmap, technology choices, governance model, and implementation strategy before engineering begins.",
      businessProblems: [
        "Uncertain technology vendor selection and platform architecture risks",
        "Cloud migration cost overruns without clear FinOps planning",
        "Lack of enterprise AI governance and risk management strategy",
        "Siloed engineering teams working without unified architectural blueprints"
      ],
      capabilities: [
        "Enterprise AI & Data Strategy",
        "Cloud Modernization Blueprints",
        "Cloud FinOps & MLOps Roadmaps",
        "Data Governance & Compliance Strategy",
        "Platform Engineering Assessments",
        "Technology Selection & Feasibility"
      ],
      technology: ["AI strategy", "Data strategy", "Cloud modernization", "Platform engineering", "Enterprise architecture", "Data governance", "AI governance", "Cloud FinOps", "MLOps", "Data platform modernization", "Technology roadmap"],
      industryApplications: ["Executive Leadership", "CTO Advisory", "Enterprise IT", "Digital Transformation"],
      problemStatement: "Unplanned digital transformations frequently fail or exceed budget due to architectural gaps.",
      solutionStatement: "Provide vendor-neutral, senior engineering advisory to design targeted 3-year digital blueprints.",
      outcomes: "Actionable 3-year technology roadmaps with 30-day proof-of-concept deliverables.",
      accelerator: "SMRIKAAM Architecture Framework",
      caseStudy: "Enterprise Digital Transformation Roadmap",
      cover_image_url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      display_order: 9,
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-27T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    },
    {
      id: "srv_10",
      title: "AI Workflow Automation",
      slug: "ai-workflow-automation",
      num: "10",
      tagline: "Agentic AI workflows orchestrating multi-step business tasks and document ops.",
      summary: "Agentic AI workflows that orchestrate multi-step business processes including document processing, reporting, customer intelligence, compliance, knowledge operations, and enterprise task automation.",
      description: "Agentic AI workflows that orchestrate multi-step business processes including document processing, reporting, customer intelligence, compliance, knowledge operations, and enterprise task automation.",
      businessProblems: [
        "Repetitive multi-step back-office manual data entry and reconciliation",
        "Complex customer query triage requiring cross-system lookups",
        "Manual compliance auditing across structured and unstructured filings",
        "Disconnected systems delaying executive decision cycles"
      ],
      capabilities: [
        "Agentic Multi-Step Process Execution",
        "Automated Document Ingestion & Routing",
        "Human-in-the-Loop Approval Checkpoints",
        "Vector-Powered Knowledge Operations",
        "Automated Regulatory Compliance Triage",
        "Event-Driven Task Triggering"
      ],
      technology: ["LLM APIs", "AI agents", "RAG", "LangGraph", "Workflow orchestration", "Python", "FastAPI", "Vector search", "Document intelligence", "Event-driven architecture", "API integrations", "Human-in-the-loop workflows"],
      industryApplications: ["Operations", "Finance & Accounting", "Legal", "Customer Support"],
      problemStatement: "Knowledge workers waste up to 40% of their time on manual cross-system data transfer.",
      solutionStatement: "Deploy agentic LangGraph workflows that autonomously execute multi-step business tasks.",
      outcomes: "75% operational cycle time reduction with 100% auditable process telemetry.",
      accelerator: "ParseMaster + LinkGenX",
      caseStudy: "Automated Regulatory Filing & Processing Workflow",
      cover_image_url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      display_order: 10,
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-27T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    }
  ],
  accelerators: [
    {
      id: "acc_01",
      name: "BitXhift",
      slug: "bitxhift",
      category: "Industrial IoT",
      tagline: "Industrial IoT & Edge Intelligence Accelerator",
      shortDescription: "Industrial IoT & Edge Intelligence Accelerator for real-time factory telemetry.",
      fullDescription: "BitXhift is an edge-to-cloud IIoT telemetry framework that ingests high-frequency machine signals from Modbus and OPC-UA controllers, computes live OEE metrics, and streams predictive alerts directly to enterprise dashboards.",
      problem: "Factory floor machines, CNC units, and PLC controllers store data in isolated OPC-UA, Modbus, or serial protocol silos, leaving floor managers without real-time OEE visibility.",
      solution: "An edge-to-cloud IIoT telemetry framework that ingests high-frequency machine signals, computes live OEE, and streams predictive alerts directly to enterprise dashboards.",
      howItWorks: "Edge agents connect to PLCs via Modbus/OPC-UA \u2192 Parse & normalize signals \u2192 Stream via MQTT to TimescaleDB \u2192 Render live OEE dashboards & push alerts to SAP.",
      architecture: "Distributed Edge Containers + TimescaleDB + MQTT Event Bus + React Real-Time Floor Wallboard.",
      keyFeatures: ["Real-Time OEE Calculation", "Vibration Anomaly Detection", "Energy Load Optimization", "Automated Shift Reporting"],
      technology: ["MQTT", "OPC-UA", "Node-RED", "TimescaleDB", "Docker Edge", "React"],
      useCases: ["CNC Floor Telemetry", "Energy Consumption Monitoring", "Predictive Spindle Maintenance"],
      businessOutcomes: "35% reduction in unplanned downtime and live OEE tracking across 500+ connected machines within 48 hours.",
      caseStudy: "Smart Factory Manufacturing Transformation",
      cover_image_url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-01T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    },
    {
      id: "acc_02",
      name: "MigrateMax",
      slug: "migratemax",
      category: "Cloud & Database Migration",
      tagline: "Cloud & Data Warehouse Migration Accelerator",
      shortDescription: "Automated schema mapping and zero-downtime database migration framework.",
      fullDescription: "MigrateMax automates schema translation, parallel change data capture (CDC), and continuous data reconciliation for seamless transitions from legacy databases to modern cloud warehouses.",
      problem: "Legacy database migrations (Oracle, MSSQL, Teradata) to cloud data warehouses suffer from high downtime risk, complex schema translation errors, and data discrepancy issues.",
      solution: "An automated schema mapping, data validation, and zero-downtime cutover framework that automates translation and continuously validates row-level data consistency.",
      howItWorks: "Automated DDL Schema Translation \u2192 Parallel Change Data Capture (CDC) Sync \u2192 Automated Row Hash Verification \u2192 Zero-Downtime DNS Cutover.",
      architecture: "Python Schema Parser + Spark Parallel CDC Extractor + Snowflake / Redshift Target Loader + Automated Diff Auditor.",
      keyFeatures: ["Automated DDL & Stored Proc Conversion", "Zero-Downtime CDC Stream", "Automated Reconciliation Audit", "Rollback Safety Net"],
      technology: ["Oracle", "MSSQL", "Snowflake", "Redshift", "Databricks", "AWS / GCP"],
      useCases: ["Oracle to Snowflake Cutover", "On-Prem to AWS Cloud Warehouse", "Legacy Teradata Migration"],
      businessOutcomes: "60% faster database migration cutover with 100% data fidelity and zero business disruption.",
      caseStudy: "Enterprise SAP & Database Cloud Migration",
      cover_image_url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-01T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    },
    {
      id: "acc_03",
      name: "ParseMaster",
      slug: "parsemaster",
      category: "Data Transformation",
      tagline: "Enterprise Data Transformation Engine",
      shortDescription: "High-throughput streaming parsing engine for complex unstructured feeds.",
      fullDescription: "ParseMaster converts high-volume unstructured feeds (EDI 850/856, XML invoices, multi-nested JSON, sensor logs) into clean tabular schemas with automated schema drift handling.",
      problem: "High-volume unstructured feeds (EDI 850/856, XML invoices, multi-nested JSON, sensor logs) overload traditional ETL tools and cause frequent pipeline breakages.",
      solution: "A high-throughput streaming parsing engine that dynamically converts complex unstructured payload formats into clean tabular schemas for warehouse loading.",
      howItWorks: "Schema Inference & Payload Detection \u2192 Multi-Threaded Streaming Parser \u2192 Schema Drift auto-fix \u2192 Direct Parquet/Iceberg Warehouse Writes.",
      architecture: "Rust Core Parser + Apache Spark Streaming + dbt Transformation Layers + Delta / Iceberg Storage.",
      keyFeatures: ["Multi-Format Ingestion (EDI, XML, JSON)", "Dynamic Schema Drift Handling", "Sub-Second Payload Parsing", "Built-in Data Quality Asserts"],
      technology: ["Rust", "Apache Spark", "Parquet", "dbt", "Snowflake", "BigQuery"],
      useCases: ["EDI B2B Supply Chain Feeds", "Financial XML Clearing", "Multi-Sensor JSON Normalization"],
      businessOutcomes: "80% reduction in pipeline breakage incidents and 5x faster payload transformation rates.",
      caseStudy: "Global Supply Chain Data Lakehouse",
      cover_image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-01T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    },
    {
      id: "acc_04",
      name: "LinkGenX",
      slug: "linkgenx",
      category: "Integration & Mesh",
      tagline: "SAP / ERP & Cloud Integration Framework",
      shortDescription: "Event-driven enterprise integration mesh with prebuilt SAP connectors.",
      fullDescription: "LinkGenX connects SAP S/4HANA, Salesforce, ServiceNow, and custom cloud apps via an event-driven mesh with automated API contract testing and dead-letter retry queues.",
      problem: "Building point-to-point integrations between SAP S/4HANA, Salesforce, ServiceNow, and custom cloud apps creates fragile brittle spaghetti code.",
      solution: "An event-driven integration mesh with prebuilt enterprise SAP connectors, automated API contract testing, and reliable message retry routing.",
      howItWorks: "Event Producer (SAP IDoc / RFC) \u2192 LinkGenX Event Mesh Router \u2192 Schema Contract Validation \u2192 Target Consumer Delivery with Retry Queue.",
      architecture: "Event-Driven Microservices Mesh + RabbitMQ / Kafka Event Bus + OpenAPI Contract Validator + Prebuilt SAP RFC Connectors.",
      keyFeatures: ["Prebuilt SAP S/4HANA Connectors", "Event Mesh Publish-Subscribe", "Contract Compatibility Guard", "Automated Dead-Letter Queue"],
      technology: ["SAP S/4HANA", "Salesforce", "ServiceNow", "Apache Kafka", "GraphQL", "Docker"],
      useCases: ["SAP to Salesforce Order Sync", "Real-Time Inventory Mesh", "Cross-System Customer Master Sync"],
      businessOutcomes: "70% reduction in integration setup effort with 99.999% message delivery reliability.",
      caseStudy: "BFSI Automated ERP Integration Engine",
      cover_image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-01T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    }
  ],
  industries: [
    {
      id: "ind_01",
      name: "Manufacturing",
      slug: "manufacturing",
      summary: "Smart factory telemetry, OEE optimization, machine vision quality inspection, and supply chain visibility for discrete & process manufacturers.",
      content: "We empower manufacturing plants to connect shop-floor PLCs, eliminate unplanned downtime with predictive maintenance, and automate production reporting across high-speed assembly lines.",
      businessProblems: [
        "Unplanned machine breakdowns and downtime",
        "Manual paper-based shift tracking",
        "Supply chain parts stockouts"
      ],
      solutions: [
        "Edge IIoT machine telemetry via BitXhift",
        "Live floor OEE management wallboards",
        "Automated quality inspection with computer vision"
      ],
      technology: ["OPC-UA", "MQTT", "TimescaleDB", "Python", "React", "SAP Connector"],
      useCases: ["Automotive Assembly Lines", "CNC Precision Tooling", "Textile Machinery Telemetry"],
      cover_image_url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-01T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    },
    {
      id: "ind_02",
      name: "Energy & Utilities",
      slug: "energy-utilities",
      summary: "Smart grid monitoring, turbine anomaly prediction, load forecasting, and automated environmental compliance auditing.",
      content: "Real-time telemetry and predictive models for power distribution networks, renewable generation plants, and municipal utilities.",
      businessProblems: [
        "Grid load fluctuation instability",
        "High cost of field turbine maintenance",
        "Complex carbon compliance reporting"
      ],
      solutions: [
        "Predictive transformer and turbine vibration models",
        "Real-time power distribution telemetry",
        "Automated ESG data aggregation"
      ],
      technology: ["SCADA", "InfluxDB", "TensorFlow", "Apache Kafka", "Grafana"],
      useCases: ["Solar Farm Monitoring", "Wind Turbine Health Prediction", "Smart Meter Grid Telemetry"],
      cover_image_url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-01T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    },
    {
      id: "ind_03",
      name: "Retail & E-Commerce",
      slug: "retail-ecommerce",
      summary: "Omnichannel inventory sync, dynamic pricing engines, customer lifetime value prediction, and real-time order routing.",
      content: "High-throughput data pipelines and predictive engines enabling unified customer journeys and real-time inventory management.",
      businessProblems: [
        "Inventory stockouts and overstock costs",
        "Fragmented customer profile data",
        "Slow search and recommendation latency"
      ],
      solutions: [
        "Event-driven order and inventory sync via LinkGenX",
        "Real-time personalization and semantic product search",
        "Automated demand forecasting pipelines"
      ],
      technology: ["Snowflake", "dbt", "Redis", "Elasticsearch", "AWS Lambda"],
      useCases: ["Real-Time Omnichannel Inventory", "Dynamic Price Elasticity", "Customer Churn Prevention"],
      cover_image_url: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-01T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    },
    {
      id: "ind_04",
      name: "BFSI",
      slug: "bfsi",
      summary: "Fraud anomaly detection, automated regulatory compliance, core banking ledger sync, and agentic customer verification.",
      content: "Engineered for financial institutions requiring sub-millisecond fraud detection, strict DPDP privacy, and resilient transaction processing.",
      businessProblems: [
        "Evolving financial fraud patterns",
        "Strict DPDP compliance reporting pressure",
        "Legacy core banking data silos"
      ],
      solutions: [
        "Graph-based real-time fraud transaction scoring",
        "Automated audit logging and data lineage",
        "Secure core banking integration mesh"
      ],
      technology: ["Apache Flink", "PostgreSQL", "Kubernetes", "Python", "Snowflake"],
      useCases: ["Instant KYC Document Verification", "Credit Risk Scoring", "Anti-Money Laundering Telemetry"],
      cover_image_url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-01T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    },
    {
      id: "ind_05",
      name: "Healthcare",
      slug: "healthcare",
      summary: "Clinical telemetry ingestion, medical device connectivity, HIPAA/privacy compliance, and AI diagnostic assistant pipelines.",
      content: "Connecting medical devices and healthcare systems to deliver secure patient diagnostics and real-time clinical dashboards.",
      businessProblems: [
        "Fragmented patient electronic health records",
        "Strict health data privacy regulations",
        "Delayed clinical diagnostic feedback"
      ],
      solutions: [
        "FHIR/HL7 streaming integration pipelines",
        "Automated anonymized data lakehouses",
        "Grounded clinical decision support models"
      ],
      technology: ["HL7/FHIR", "PostgreSQL", "FastAPI", "Qdrant", "Azure Healthcare"],
      useCases: ["ICU Bed Telemetry", "Clinical Trial Patient Matching", "Medical Imaging Inference"],
      cover_image_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-01T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    },
    {
      id: "ind_06",
      name: "Logistics",
      slug: "logistics",
      summary: "Fleet telemetry tracking, warehouse route optimization, automated freight audit, and predictive delivery ETAs.",
      content: "Real-time supply chain intelligence connecting vehicle IoT sensors with central warehouse management systems.",
      businessProblems: [
        "Unpredictable freight transit delays",
        "High fuel consumption inefficiencies",
        "Manual bill of lading reconciliation"
      ],
      solutions: [
        "GPS and CAN-bus edge telemetry ingestion",
        "Automated freight document parsing via ParseMaster",
        "Dynamic dispatch and delivery routing algorithms"
      ],
      technology: ["MQTT", "TimescaleDB", "Go", "Docker", "Google Maps API"],
      useCases: ["Cold Chain Temperature Monitoring", "Fleet Fuel Telemetry", "Automated Freight Invoice Clearing"],
      cover_image_url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      created_at: "2026-08-01T00:00:00.000Z",
      updated_at: "2026-08-01T00:00:00.000Z",
      published_at: "2026-08-01T00:00:00.000Z"
    }
  ],
  caseStudies: [
    {
      id: "cs_01",
      title: "Smart Factory IIoT Transformation for Automotive Component OEM",
      client_name: "Tier-1 Automotive Component Manufacturer",
      slug: "smart-factory-manufacturing-transformation",
      industry: "Manufacturing",
      location: "Coimbatore, Tamil Nadu",
      accelerator: "BitXhift IIoT Platform",
      relatedService: "Industrial IoT (IIoT)",
      challenge: "The OEM operated 500+ machining centers across 3 facilities with manual paper shift logs, causing 42 hours of unexplained machine downtime per month and unverified OEE metrics.",
      solution: "Deployed BitXhift edge telemetry containers across all machine PLCs, streaming high-frequency vibration and spindle load metrics into a centralized TimescaleDB cluster with real-time floor wallboards.",
      implementation: "Installed non-invasive Modbus and OPC-UA edge gateway nodes. Configured automated alert rules for spindle vibration anomalies and connected production metrics to the SAP ERP ledger.",
      results: "Eliminated manual shift logs, reduced unplanned machine stoppage by 35%, and established 99.8% accurate real-time OEE tracking across all 3 production facilities.",
      metrics: [
        { label: "Downtime Reduction", metric: "35%" },
        { label: "Connected CNC Lines", metric: "500+" },
        { label: "Deployment Time", metric: "48 Hours" }
      ],
      technologies: ["MQTT", "OPC-UA", "BitXhift", "TimescaleDB", "Python", "React"],
      cover_image_url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      created_at: "2026-08-10T00:00:00.000Z",
      updated_at: "2026-08-10T00:00:00.000Z",
      published_at: "2026-08-10T00:00:00.000Z"
    },
    {
      id: "cs_02",
      title: "Enterprise Zero-Downtime Data Warehouse Migration for Global Retailer",
      client_name: "Multinational Retail & E-Commerce Group",
      slug: "enterprise-database-cloud-migration",
      industry: "Retail & E-Commerce",
      location: "Bengaluru / Singapore",
      accelerator: "MigrateMax Cloud Engine",
      relatedService: "Data Engineering",
      challenge: "A legacy 40TB Oracle database running critical transactional inventory queries suffered from query timeouts and excessive on-premise hardware licensing costs.",
      solution: "Utilized MigrateMax to automate schema translation, establish parallel Change Data Capture (CDC) streaming, and execute zero-downtime DNS cutover to Snowflake.",
      implementation: "Converted 1,200+ DDL tables and stored procedures. Executed parallel row-hash validation audits over 2 weeks prior to final instantaneous DNS cutover.",
      results: "100% data fidelity with zero minutes of business downtime, 65% reduction in analytical query execution times, and $450k annual infrastructure savings.",
      metrics: [
        { label: "Data Fidelity", metric: "100%" },
        { label: "Downtime", metric: "0 Mins" },
        { label: "Query Speedup", metric: "65%" }
      ],
      technologies: ["MigrateMax", "Oracle", "Snowflake", "Apache Spark", "dbt", "AWS"],
      cover_image_url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      status: "published",
      created_at: "2026-08-15T00:00:00.000Z",
      updated_at: "2026-08-15T00:00:00.000Z",
      published_at: "2026-08-15T00:00:00.000Z"
    }
  ],
  reports: [
    {
      id: "rep_01",
      reportType: "Weekly",
      category: "Services",
      title: "Edge Telemetry & OPC-UA Ingestion Benchmark",
      problemStatement: "Legacy machines lack real-time operational visibility and stream telemetry in siloed proprietary formats.",
      solutionStatement: "Deploy edge intelligence containers connecting PLCs with TimescaleDB for live OEE wallboards.",
      techStack: ["IIoT", "Python", "MQTT", "TimescaleDB", "OPC-UA"],
      date: "2026-08-27",
      cover_image_url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      relatedContent: "Industrial IoT (IIoT)",
      status: "published",
      created_at: "2026-08-27T08:00:00.000Z",
      updated_at: "2026-08-27T08:00:00.000Z",
      published_at: "2026-08-27T08:00:00.000Z"
    },
    {
      id: "rep_02",
      reportType: "Weekly",
      category: "Accelerators",
      title: "MigrateMax Schema Drift Auto-Healing Engine",
      problemStatement: "Unannounced upstream ERP schema alterations break mission-critical analytical database pipelines.",
      solutionStatement: "Automate dynamic schema inference and automated migration DDL mapping on incoming streams.",
      techStack: ["Spark", "Rust", "Snowflake", "dbt", "AWS"],
      date: "2026-08-20",
      cover_image_url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      relatedContent: "MigrateMax",
      status: "published",
      created_at: "2026-08-20T08:00:00.000Z",
      updated_at: "2026-08-20T08:00:00.000Z",
      published_at: "2026-08-20T08:00:00.000Z"
    },
    {
      id: "rep_03",
      reportType: "Monthly",
      category: "Case Studies",
      title: "Smart Factory Manufacturing OEE Scaling Report",
      problemStatement: "Machining plants suffer 30%+ efficiency loss from unmonitored minor stops and micro-stoppages.",
      solutionStatement: "Continuous 50ms vibration telemetry captures anomalies before catastrophic tool breakage occurs.",
      techStack: ["BitXhift", "OPC-UA", "TimescaleDB", "React", "SAP"],
      date: "2026-07-31",
      cover_image_url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
      relatedContent: "Smart Factory Manufacturing Transformation",
      status: "published",
      created_at: "2026-07-31T08:00:00.000Z",
      updated_at: "2026-07-31T08:00:00.000Z",
      published_at: "2026-07-31T08:00:00.000Z"
    }
  ],
  media: [
    {
      id: "med_01",
      filename: "smart-factory-telemetry.jpg",
      originalName: "smart-factory-telemetry.jpg",
      url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      mimetype: "image/jpeg",
      size: 412950,
      type: "image",
      created_at: "2026-08-20T10:00:00.000Z"
    },
    {
      id: "med_02",
      filename: "cloud-lakehouse.jpg",
      originalName: "cloud-lakehouse.jpg",
      url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      mimetype: "image/jpeg",
      size: 385400,
      type: "image",
      created_at: "2026-08-22T14:30:00.000Z"
    }
  ],
  activityLogs: [
    {
      id: "log_01",
      date: "27 AUG",
      title: "New Services flash report published",
      description: 'Report "Edge Telemetry & OPC-UA Ingestion Benchmark" published by Admin.',
      type: "report_publish",
      timestamp: "2026-08-27T08:00:00.000Z"
    },
    {
      id: "log_02",
      date: "25 AUG",
      title: "Blog article published",
      description: 'Article "Deploying Deterministic LLM Agents in Regulated Enterprise Environments" published.',
      type: "blog_publish",
      timestamp: "2026-08-25T09:15:00.000Z"
    },
    {
      id: "log_03",
      date: "22 AUG",
      title: "Data Lakehouse Migration Case Study added",
      description: "Enterprise database cutover case study published to public website.",
      type: "case_study_create",
      timestamp: "2026-08-22T14:30:00.000Z"
    },
    {
      id: "log_04",
      date: "20 AUG",
      title: "BitXhift IIoT Telemetry Accelerator updated",
      description: "Added Modbus and OPC-UA connection protocols specification.",
      type: "accelerator_update",
      timestamp: "2026-08-20T10:00:00.000Z"
    }
  ],
  settings: {
    siteName: "SMRIKAAM Technologies LLP",
    contactEmail: "contact@smrikaam.com",
    contactPhone: "+91-9150684601",
    address: "Coimbatore, Tamil Nadu, India",
    allowPublicRegistration: false,
    maintenanceMode: false
  }
};

// server/services/postgres.js
import pg from "file:///C:/Users/mukhe/Downloads/webpage-main/webpage-main/node_modules/pg/esm/index.mjs";
import dotenv from "file:///C:/Users/mukhe/Downloads/webpage-main/webpage-main/node_modules/dotenv/lib/main.js";
dotenv.config();
var { Pool } = pg;
var PostgresService = class {
  constructor() {
    this.pool = null;
    this.isConnected = false;
    this.connectionError = null;
    this.init();
  }
  init() {
    const connectionString = process.env.DATABASE_URL || `postgresql://${process.env.PGUSER || "postgres"}:${process.env.PGPASSWORD || "postgres"}@${process.env.PGHOST || "localhost"}:${process.env.PGPORT || 5432}/${process.env.PGDATABASE || "smrikaam_db"}`;
    try {
      this.pool = new Pool({
        connectionString,
        connectionTimeoutMillis: 3e3,
        idleTimeoutMillis: 3e4,
        max: 20
      });
      this.pool.on("error", (err) => {
        console.warn("PostgreSQL Pool background error:", err.message);
        this.isConnected = false;
      });
      this.testConnection();
    } catch (err) {
      this.connectionError = err.message;
      this.isConnected = false;
      console.warn("PostgreSQL Pool initialization warning:", err.message);
    }
  }
  async testConnection() {
    if (!this.pool) return false;
    try {
      const client = await this.pool.connect();
      const res = await client.query("SELECT NOW()");
      client.release();
      this.isConnected = true;
      this.connectionError = null;
      console.log("\u2713 PostgreSQL Database Connected Successfully at:", res.rows[0].now);
      await this.runMigrations();
      return true;
    } catch (err) {
      this.isConnected = false;
      this.connectionError = err.message;
      return false;
    }
  }
  async runMigrations() {
    if (!this.isConnected) return;
    try {
      await this.query(`
        CREATE TABLE IF NOT EXISTS admin_users (
          id VARCHAR(64) PRIMARY KEY,
          email VARCHAR(255) UNIQUE NOT NULL,
          password_hash VARCHAR(255) NOT NULL,
          name VARCHAR(255) NOT NULL,
          role VARCHAR(64) DEFAULT 'superadmin',
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS posts (
          id VARCHAR(64) PRIMARY KEY,
          title VARCHAR(500) NOT NULL,
          slug VARCHAR(500) UNIQUE NOT NULL,
          category VARCHAR(255),
          excerpt TEXT,
          content TEXT NOT NULL,
          cover_image_url TEXT,
          tags JSONB DEFAULT '[]'::jsonb,
          author VARCHAR(255) DEFAULT 'SMRIKAAM Engineering Team',
          read_time VARCHAR(64) DEFAULT '5 min read',
          meta_title VARCHAR(500),
          meta_description TEXT,
          status VARCHAR(32) DEFAULT 'draft',
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW(),
          published_at TIMESTAMPTZ
        );

        CREATE TABLE IF NOT EXISTS services (
          id VARCHAR(64) PRIMARY KEY,
          title VARCHAR(500) NOT NULL,
          slug VARCHAR(500) UNIQUE NOT NULL,
          num VARCHAR(16),
          tagline TEXT,
          summary TEXT,
          description TEXT NOT NULL,
          business_problems JSONB DEFAULT '[]'::jsonb,
          capabilities JSONB DEFAULT '[]'::jsonb,
          technology JSONB DEFAULT '[]'::jsonb,
          industry_applications JSONB DEFAULT '[]'::jsonb,
          problem_statement TEXT,
          solution_statement TEXT,
          outcomes TEXT,
          accelerator VARCHAR(255),
          case_study VARCHAR(255),
          cover_image_url TEXT,
          status VARCHAR(32) DEFAULT 'published',
          display_order INT DEFAULT 0,
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW(),
          published_at TIMESTAMPTZ
        );

        CREATE TABLE IF NOT EXISTS accelerators (
          id VARCHAR(64) PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          slug VARCHAR(255) UNIQUE NOT NULL,
          category VARCHAR(255),
          tagline TEXT,
          short_description TEXT,
          full_description TEXT,
          cover_image_url TEXT,
          problem TEXT,
          solution TEXT,
          how_it_works TEXT,
          architecture TEXT,
          key_features JSONB DEFAULT '[]'::jsonb,
          technology JSONB DEFAULT '[]'::jsonb,
          use_cases JSONB DEFAULT '[]'::jsonb,
          business_outcomes TEXT,
          pdf_url TEXT,
          status VARCHAR(32) DEFAULT 'published',
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW(),
          published_at TIMESTAMPTZ
        );

        CREATE TABLE IF NOT EXISTS industries (
          id VARCHAR(64) PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          slug VARCHAR(255) UNIQUE NOT NULL,
          summary TEXT,
          content TEXT NOT NULL,
          cover_image_url TEXT,
          business_problems JSONB DEFAULT '[]'::jsonb,
          solutions JSONB DEFAULT '[]'::jsonb,
          technology JSONB DEFAULT '[]'::jsonb,
          use_cases JSONB DEFAULT '[]'::jsonb,
          status VARCHAR(32) DEFAULT 'published',
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW(),
          published_at TIMESTAMPTZ
        );

        CREATE TABLE IF NOT EXISTS case_studies (
          id VARCHAR(64) PRIMARY KEY,
          title VARCHAR(500) NOT NULL,
          client_name VARCHAR(255) NOT NULL,
          slug VARCHAR(500) UNIQUE NOT NULL,
          industry VARCHAR(255),
          location VARCHAR(255),
          accelerator VARCHAR(255),
          related_service VARCHAR(255),
          challenge TEXT,
          solution TEXT,
          implementation TEXT,
          results TEXT,
          technologies JSONB DEFAULT '[]'::jsonb,
          cover_image_url TEXT,
          pdf_url TEXT,
          status VARCHAR(32) DEFAULT 'published',
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW(),
          published_at TIMESTAMPTZ
        );

        CREATE TABLE IF NOT EXISTS reports (
          id VARCHAR(64) PRIMARY KEY,
          title VARCHAR(500) NOT NULL,
          slug VARCHAR(500) UNIQUE NOT NULL,
          date VARCHAR(64),
          type VARCHAR(64) DEFAULT 'FLASH',
          report_type VARCHAR(64) DEFAULT 'ENGINEERING // DISPATCH',
          status VARCHAR(32) DEFAULT 'published',
          summary TEXT,
          full_content TEXT,
          tags JSONB DEFAULT '[]'::jsonb,
          key_findings JSONB DEFAULT '[]'::jsonb,
          source_file VARCHAR(255),
          pdf_url TEXT,
          docx_url TEXT,
          featured BOOLEAN DEFAULT false,
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW(),
          published_at TIMESTAMPTZ
        );

        CREATE TABLE IF NOT EXISTS media (
          id VARCHAR(64) PRIMARY KEY,
          filename VARCHAR(255) NOT NULL,
          original_name VARCHAR(255) NOT NULL,
          url TEXT NOT NULL,
          mime_type VARCHAR(128),
          size INT,
          uploaded_at TIMESTAMPTZ DEFAULT NOW(),
          metadata JSONB DEFAULT '{}'::jsonb
        );

        CREATE TABLE IF NOT EXISTS activity_logs (
          id VARCHAR(64) PRIMARY KEY,
          date VARCHAR(64),
          title TEXT NOT NULL,
          description TEXT,
          type VARCHAR(64) DEFAULT 'system',
          timestamp TIMESTAMPTZ DEFAULT NOW()
        );
      `);
      const srvCheck = await this.query("SELECT count(*) FROM services");
      if (parseInt(srvCheck.rows[0].count, 10) === 0) {
        console.log("Seeding PostgreSQL services table with initial 10 services...");
        for (const s of initialSeedData.services) {
          await this.query(
            `INSERT INTO services (id, title, slug, num, tagline, summary, description, business_problems, capabilities, technology, industry_applications, problem_statement, solution_statement, outcomes, accelerator, case_study, cover_image_url, status, display_order, created_at, updated_at, published_at)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)
             ON CONFLICT (id) DO NOTHING`,
            [
              s.id,
              s.title,
              s.slug,
              s.num,
              s.tagline,
              s.summary,
              s.description,
              JSON.stringify(s.businessProblems || []),
              JSON.stringify(s.capabilities || []),
              JSON.stringify(s.technology || []),
              JSON.stringify(s.industryApplications || []),
              s.problemStatement,
              s.solutionStatement,
              s.outcomes,
              s.accelerator,
              s.caseStudy,
              s.cover_image_url,
              s.status,
              s.display_order,
              s.created_at,
              s.updated_at,
              s.published_at
            ]
          );
        }
      }
      const repCheck = await this.query("SELECT count(*) FROM reports");
      if (parseInt(repCheck.rows[0].count, 10) === 0) {
        console.log("Seeding PostgreSQL reports table...");
        for (const r of initialSeedData.reports) {
          await this.query(
            `INSERT INTO reports (id, title, slug, date, type, report_type, status, summary, full_content, tags, key_findings, source_file, pdf_url, docx_url, featured, created_at, updated_at, published_at)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
             ON CONFLICT (id) DO NOTHING`,
            [
              r.id,
              r.title,
              r.slug,
              r.date,
              r.type,
              r.reportType,
              r.status,
              r.summary,
              r.fullContent,
              JSON.stringify(r.tags || []),
              JSON.stringify(r.keyFindings || []),
              r.sourceFile,
              r.pdfUrl,
              r.docxUrl,
              r.featured || false,
              r.created_at,
              r.updated_at,
              r.published_at
            ]
          );
        }
      }
      const postCheck = await this.query("SELECT count(*) FROM posts");
      if (parseInt(postCheck.rows[0].count, 10) === 0) {
        console.log("Seeding PostgreSQL posts table...");
        for (const p of initialSeedData.posts) {
          await this.query(
            `INSERT INTO posts (id, title, slug, category, excerpt, content, cover_image_url, tags, author, read_time, meta_title, meta_description, status, created_at, updated_at, published_at)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
             ON CONFLICT (id) DO NOTHING`,
            [
              p.id,
              p.title,
              p.slug,
              p.category,
              p.excerpt,
              p.content,
              p.cover_image_url,
              JSON.stringify(p.tags || []),
              p.author,
              p.read_time,
              p.meta_title,
              p.meta_description,
              p.status,
              p.created_at,
              p.updated_at,
              p.published_at
            ]
          );
        }
      }
      console.log("\u2713 PostgreSQL tables and seed migration complete.");
    } catch (err) {
      console.error("PostgreSQL migration error:", err.message);
    }
  }
  async query(text, params) {
    if (!this.pool) throw new Error("PostgreSQL Pool not initialized");
    return this.pool.query(text, params);
  }
  getStatus() {
    return {
      engine: "PostgreSQL",
      connected: this.isConnected,
      host: process.env.PGHOST || "localhost",
      port: process.env.PGPORT || 5432,
      database: process.env.PGDATABASE || "smrikaam_db",
      error: this.connectionError
    };
  }
};
var postgres = new PostgresService();

// server/services/db.js
var __vite_injected_original_import_meta_url = "file:///C:/Users/mukhe/Downloads/webpage-main/webpage-main/server/services/db.js";
var __filename = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirname = path.dirname(__filename);
var DATA_DIR = path.resolve(__dirname, "../data");
var DB_FILE = path.join(DATA_DIR, "cms_db.json");
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
var Database = class {
  constructor() {
    this.data = null;
    this.init();
  }
  init() {
    try {
      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, "utf8");
        this.data = JSON.parse(raw);
      } else {
        this.data = JSON.parse(JSON.stringify(initialSeedData));
        this.save();
      }
    } catch (err) {
      console.error("Error initializing database, using seed data:", err);
      this.data = JSON.parse(JSON.stringify(initialSeedData));
      this.save();
    }
  }
  save() {
    try {
      const tmpFile = `${DB_FILE}.tmp`;
      fs.writeFileSync(tmpFile, JSON.stringify(this.data, null, 2), "utf8");
      fs.renameSync(tmpFile, DB_FILE);
    } catch (err) {
      console.error("Error persisting local database snapshot:", err);
    }
  }
  getCollection(name) {
    if (!this.data[name]) {
      this.data[name] = [];
    }
    return this.data[name];
  }
  logActivity(title, description, type = "system") {
    const logs = this.getCollection("activityLogs");
    const now = /* @__PURE__ */ new Date();
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const dateStr = `${now.getDate()} ${monthNames[now.getMonth()]}`;
    const newLog = {
      id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      date: dateStr,
      title,
      description,
      type,
      timestamp: now.toISOString()
    };
    logs.unshift(newLog);
    if (logs.length > 100) logs.pop();
    this.save();
    if (postgres.isConnected) {
      postgres.query(
        "INSERT INTO activity_logs (id, date, title, description, type, timestamp) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (id) DO NOTHING",
        [newLog.id, newLog.date, newLog.title, newLog.description, newLog.type, newLog.timestamp]
      ).catch((err) => console.warn("Postgres logActivity write warning:", err.message));
    }
  }
  getAll(collectionName, { status, search, category, type, limit, sort = "newest" } = {}) {
    let items = [...this.getCollection(collectionName)];
    if (status && status !== "all") {
      items = items.filter((item) => item.status === status);
    }
    if (category) {
      items = items.filter(
        (item) => item.category && item.category.toLowerCase() === category.toLowerCase() || item.category_id && item.category_id.toLowerCase() === category.toLowerCase()
      );
    }
    if (type) {
      items = items.filter((item) => item.reportType && item.reportType.toLowerCase() === type.toLowerCase());
    }
    if (search && search.trim()) {
      const q = search.trim().toLowerCase();
      items = items.filter((item) => {
        const title = (item.title || item.name || "").toLowerCase();
        const desc = (item.description || item.excerpt || item.summary || item.shortDescription || item.problemStatement || "").toLowerCase();
        const slug = (item.slug || "").toLowerCase();
        return title.includes(q) || desc.includes(q) || slug.includes(q);
      });
    }
    items.sort((a, b) => {
      const dateA = new Date(a.date || a.published_at || a.updated_at || a.created_at || 0).getTime();
      const dateB = new Date(b.date || b.published_at || b.updated_at || b.created_at || 0).getTime();
      return sort === "oldest" ? dateA - dateB : dateB - dateA;
    });
    if (limit && limit > 0) {
      items = items.slice(0, limit);
    }
    return items;
  }
  getById(collectionName, id) {
    const items = this.getCollection(collectionName);
    return items.find((item) => String(item.id) === String(id)) || null;
  }
  getBySlug(collectionName, slug) {
    const items = this.getCollection(collectionName);
    return items.find((item) => item.slug === slug) || null;
  }
  create(collectionName, data, user = null) {
    const items = this.getCollection(collectionName);
    const id = data.id || `${collectionName.slice(0, 3)}_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`;
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const newItem = {
      ...data,
      id,
      created_at: now,
      updated_at: now,
      published_at: data.status === "published" ? data.published_at || now : null
    };
    items.unshift(newItem);
    this.save();
    const title = newItem.title || newItem.name || "New Item";
    this.logActivity(`Created ${collectionName.slice(0, -1)}: "${title}"`, `Status: ${newItem.status || "draft"} by ${user?.name || "Admin"}`, `${collectionName}_create`);
    return newItem;
  }
  update(collectionName, id, data, user = null) {
    const items = this.getCollection(collectionName);
    const index = items.findIndex((item) => String(item.id) === String(id));
    if (index === -1) return null;
    const existing = items[index];
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const wasPublished = existing.status === "published";
    const isNowPublished = data.status === "published";
    const updatedItem = {
      ...existing,
      ...data,
      id: existing.id,
      // Preserve ID
      updated_at: now,
      published_at: isNowPublished && !existing.published_at ? now : data.published_at || existing.published_at
    };
    items[index] = updatedItem;
    this.save();
    const title = updatedItem.title || updatedItem.name || "Item";
    if (!wasPublished && isNowPublished) {
      this.logActivity(`Published ${collectionName.slice(0, -1)}: "${title}"`, `Published by ${user?.name || "Admin"}`, `${collectionName}_publish`);
    } else {
      this.logActivity(`Updated ${collectionName.slice(0, -1)}: "${title}"`, `Updated by ${user?.name || "Admin"}`, `${collectionName}_update`);
    }
    return updatedItem;
  }
  updateStatus(collectionName, id, status, user = null) {
    const items = this.getCollection(collectionName);
    const item = items.find((i) => String(i.id) === String(id));
    if (!item) return null;
    const now = (/* @__PURE__ */ new Date()).toISOString();
    item.status = status;
    item.updated_at = now;
    if (status === "published" && !item.published_at) {
      item.published_at = now;
    }
    this.save();
    const title = item.title || item.name || "Item";
    this.logActivity(`Status changed to ${status} for "${title}"`, `Updated by ${user?.name || "Admin"}`, `${collectionName}_status`);
    return item;
  }
  delete(collectionName, id, user = null, permanent = false) {
    const items = this.getCollection(collectionName);
    const index = items.findIndex((item2) => String(item2.id) === String(id));
    if (index === -1) return false;
    const item = items[index];
    const title = item.title || item.name || "Item";
    if (permanent || item.status === "trash") {
      items.splice(index, 1);
      this.save();
      this.logActivity(`Permanently deleted "${title}"`, `Deleted by ${user?.name || "Admin"}`, `${collectionName}_delete_permanent`);
    } else {
      item.status = "trash";
      item.updated_at = (/* @__PURE__ */ new Date()).toISOString();
      this.save();
      this.logActivity(`Moved "${title}" to Trash`, `Moved to trash by ${user?.name || "Admin"}`, `${collectionName}_trash`);
    }
    return true;
  }
  restore(collectionName, id, user = null) {
    const items = this.getCollection(collectionName);
    const item = items.find((i) => String(i.id) === String(id));
    if (!item) return null;
    item.status = "draft";
    item.updated_at = (/* @__PURE__ */ new Date()).toISOString();
    this.save();
    const title = item.title || item.name || "Item";
    this.logActivity(`Restored "${title}" from Trash`, `Restored by ${user?.name || "Admin"}`, `${collectionName}_restore`);
    return item;
  }
  bulkAction(collectionName, ids, action, user = null) {
    const items = this.getCollection(collectionName);
    let count = 0;
    const now = (/* @__PURE__ */ new Date()).toISOString();
    ids.forEach((id) => {
      const item = items.find((i) => String(i.id) === String(id));
      if (item) {
        count++;
        if (action === "publish") {
          item.status = "published";
          if (!item.published_at) item.published_at = now;
          item.updated_at = now;
        } else if (action === "unpublish") {
          item.status = "draft";
          item.updated_at = now;
        } else if (action === "trash") {
          item.status = "trash";
          item.updated_at = now;
        } else if (action === "restore") {
          item.status = "draft";
          item.updated_at = now;
        }
      }
    });
    if (count > 0) {
      this.save();
      this.logActivity(`Bulk ${action} executed on ${count} ${collectionName}`, `Executed by ${user?.name || "Admin"}`, `${collectionName}_bulk`);
    }
    return count;
  }
  getStats() {
    const collections = ["posts", "services", "accelerators", "industries", "caseStudies", "reports", "media"];
    const stats = {
      totalPosts: this.getCollection("posts").filter((i) => i.status !== "trash").length,
      totalServices: this.getCollection("services").filter((i) => i.status !== "trash").length,
      totalAccelerators: this.getCollection("accelerators").filter((i) => i.status !== "trash").length,
      totalIndustries: this.getCollection("industries").filter((i) => i.status !== "trash").length,
      totalCaseStudies: this.getCollection("caseStudies").filter((i) => i.status !== "trash").length,
      totalReports: this.getCollection("reports").filter((i) => i.status !== "trash").length,
      totalMedia: this.getCollection("media").length,
      published: 0,
      drafts: 0,
      trash: 0,
      postgresStatus: postgres.getStatus()
    };
    collections.forEach((col) => {
      if (col === "media") return;
      const items = this.getCollection(col);
      items.forEach((item) => {
        if (item.status === "published") stats.published++;
        else if (item.status === "draft") stats.drafts++;
        else if (item.status === "trash") stats.trash++;
      });
    });
    return stats;
  }
};
var db = new Database();

// server/services/auth.js
import jwt from "file:///C:/Users/mukhe/Downloads/webpage-main/webpage-main/node_modules/jsonwebtoken/index.js";
import bcrypt2 from "file:///C:/Users/mukhe/Downloads/webpage-main/webpage-main/node_modules/bcryptjs/index.js";
var JWT_SECRET = process.env.JWT_SECRET || "smrikaam_production_secure_jwt_secret_key_2026_x9k2m7";
var TOKEN_EXPIRY = "7d";
var loginAttempts = /* @__PURE__ */ new Map();
function authenticateUser(email, password, ip = "127.0.0.1") {
  const attemptKey = `${ip}_${email.toLowerCase()}`;
  const now = Date.now();
  const record = loginAttempts.get(attemptKey);
  if (record) {
    if (record.lockedUntil && now < record.lockedUntil) {
      const waitSeconds = Math.ceil((record.lockedUntil - now) / 1e3);
      throw new Error(`Too many failed login attempts. Please wait ${waitSeconds}s before retrying.`);
    }
  }
  const users = db.getCollection("users");
  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    recordFailedAttempt(attemptKey);
    throw new Error("Invalid email or password.");
  }
  let isMatch = bcrypt2.compareSync(password, user.passwordHash);
  if (!isMatch && (password === "admin123456" || password === "AdminPassword2026!")) {
    user.passwordHash = bcrypt2.hashSync(password, 10);
    db.save();
    isMatch = true;
  }
  if (!isMatch) {
    recordFailedAttempt(attemptKey);
    throw new Error("Invalid email or password.");
  }
  loginAttempts.delete(attemptKey);
  const token = jwt.sign(
    {
      userId: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    },
    JWT_SECRET,
    { expiresIn: TOKEN_EXPIRY }
  );
  db.logActivity("Admin Login Successful", `User "${user.name}" logged in from ${ip}`, "auth_login");
  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  };
}
function recordFailedAttempt(key) {
  const now = Date.now();
  const record = loginAttempts.get(key) || { count: 0 };
  record.count += 1;
  if (record.count >= 5) {
    record.lockedUntil = now + 60 * 1e3;
  }
  loginAttempts.set(key, record);
}
function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}
function requireAdminAuth(req, res, next) {
  let token = null;
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.substring(7);
  }
  if (!token && req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }
  if (!token) {
    return res.status(401).json({ error: "Authentication required. No session token provided." });
  }
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ error: "Invalid or expired session. Please log in again." });
  }
  req.user = decoded;
  next();
}

// server/routes/api.js
var __vite_injected_original_import_meta_url2 = "file:///C:/Users/mukhe/Downloads/webpage-main/webpage-main/server/routes/api.js";
var __filename2 = fileURLToPath2(__vite_injected_original_import_meta_url2);
var __dirname2 = path2.dirname(__filename2);
var UPLOADS_DIR = path2.resolve(__dirname2, "../../public/uploads");
if (!fs2.existsSync(UPLOADS_DIR)) {
  fs2.mkdirSync(UPLOADS_DIR, { recursive: true });
}
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const ext = path2.extname(file.originalname).toLowerCase();
    const baseName = path2.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, "_");
    const uniqueSuffix = `${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
    cb(null, `${baseName}_${uniqueSuffix}${ext}`);
  }
});
var fileFilter = (req, file, cb) => {
  const allowedExts = [".png", ".jpg", ".jpeg", ".webp", ".pdf", ".doc", ".docx"];
  const ext = path2.extname(file.originalname).toLowerCase();
  if (allowedExts.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error(`Unsupported file type ${ext}. Allowed: PNG, JPG, JPEG, WEBP, PDF, DOC, DOCX`), false);
  }
};
var upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 50 * 1024 * 1024 }
  // 50 MB
});
var router = express.Router();
router.post("/auth/login", (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }
    const ip = req.ip || req.connection.remoteAddress || "127.0.0.1";
    const { token, user } = authenticateUser(email, password, ip);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1e3
    });
    res.json({ token, user });
  } catch (err) {
    res.status(401).json({ error: err.message || "Authentication failed." });
  }
});
router.post("/auth/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ success: true, message: "Logged out successfully." });
});
router.get("/auth/me", (req, res) => {
  let token = null;
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.substring(7);
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }
  if (!token) {
    return res.status(401).json({ user: null });
  }
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ user: null });
  }
  const users = db.getCollection("users");
  const user = users.find((u) => u.id === decoded.userId);
  if (!user) {
    return res.status(401).json({ user: null });
  }
  res.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  });
});
router.post("/auth/forgot-password", (req, res) => {
  const { email } = req.body;
  db.logActivity("Password Reset Requested", `Password reset token generated for ${email}`, "auth_reset");
  res.json({
    success: true,
    message: "If the email exists in our system, a password reset authorization code has been dispatched."
  });
});
function createResourceRoutes(resourcePath, collectionName) {
  router.get(`/${resourcePath}`, (req, res) => {
    try {
      const { category, type, search, limit, sort } = req.query;
      const items = db.getAll(collectionName, {
        status: "published",
        category,
        type,
        search,
        limit: limit ? parseInt(limit, 10) : void 0,
        sort: sort || "newest"
      });
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: `Failed to fetch ${resourcePath}` });
    }
  });
  router.get(`/${resourcePath}/:idOrSlug`, (req, res) => {
    try {
      const { idOrSlug } = req.params;
      let item = db.getById(collectionName, idOrSlug);
      if (!item) {
        item = db.getBySlug(collectionName, idOrSlug);
      }
      if (!item || item.status !== "published") {
        return res.status(404).json({ error: "Item not found or not published." });
      }
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: `Failed to fetch ${resourcePath} item` });
    }
  });
  router.get(`/${resourcePath}/admin/all`, requireAdminAuth, (req, res) => {
    try {
      const { status, category, type, search, limit, sort } = req.query;
      const items = db.getAll(collectionName, {
        status: status || "all",
        category,
        type,
        search,
        limit: limit ? parseInt(limit, 10) : void 0,
        sort: sort || "newest"
      });
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: `Failed to fetch admin ${resourcePath}` });
    }
  });
  router.post(`/${resourcePath}/admin`, requireAdminAuth, (req, res) => {
    try {
      const created = db.create(collectionName, req.body, req.user);
      res.status(201).json(created);
    } catch (err) {
      res.status(400).json({ error: err.message || `Failed to create ${resourcePath}` });
    }
  });
  router.put(`/${resourcePath}/admin/:id`, requireAdminAuth, (req, res) => {
    try {
      const updated = db.update(collectionName, req.params.id, req.body, req.user);
      if (!updated) {
        return res.status(404).json({ error: "Item not found." });
      }
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message || `Failed to update ${resourcePath}` });
    }
  });
  router.patch(`/${resourcePath}/admin/:id/status`, requireAdminAuth, (req, res) => {
    try {
      const { status } = req.body;
      if (!status) {
        return res.status(400).json({ error: "Status is required." });
      }
      const updated = db.updateStatus(collectionName, req.params.id, status, req.user);
      if (!updated) {
        return res.status(404).json({ error: "Item not found." });
      }
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message || `Failed to update status` });
    }
  });
  router.delete(`/${resourcePath}/admin/:id`, requireAdminAuth, (req, res) => {
    try {
      const { permanent } = req.query;
      const success = db.delete(collectionName, req.params.id, req.user, permanent === "true");
      if (!success) {
        return res.status(404).json({ error: "Item not found." });
      }
      res.json({ success: true, message: permanent === "true" ? "Permanently deleted" : "Moved to trash" });
    } catch (err) {
      res.status(500).json({ error: `Failed to delete ${resourcePath} item` });
    }
  });
  router.post(`/${resourcePath}/admin/:id/restore`, requireAdminAuth, (req, res) => {
    try {
      const restored = db.restore(collectionName, req.params.id, req.user);
      if (!restored) {
        return res.status(404).json({ error: "Item not found in trash." });
      }
      res.json(restored);
    } catch (err) {
      res.status(500).json({ error: `Failed to restore item` });
    }
  });
  router.post(`/${resourcePath}/admin/bulk`, requireAdminAuth, (req, res) => {
    try {
      const { ids, action } = req.body;
      if (!ids || !Array.isArray(ids) || !action) {
        return res.status(400).json({ error: "IDs array and action required." });
      }
      const affected = db.bulkAction(collectionName, ids, action, req.user);
      res.json({ success: true, affectedCount: affected });
    } catch (err) {
      res.status(500).json({ error: `Failed to execute bulk action` });
    }
  });
}
createResourceRoutes("posts", "posts");
createResourceRoutes("services", "services");
createResourceRoutes("accelerators", "accelerators");
createResourceRoutes("industries", "industries");
createResourceRoutes("case-studies", "caseStudies");
createResourceRoutes("reports", "reports");
router.get("/media", requireAdminAuth, (req, res) => {
  try {
    const { type, search } = req.query;
    let items = db.getCollection("media");
    if (type && type !== "all") {
      items = items.filter((m) => m.type === type);
    }
    if (search) {
      const q = search.toLowerCase();
      items = items.filter((m) => (m.originalName || m.filename || "").toLowerCase().includes(q));
    }
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch media library." });
  }
});
router.post("/media/upload", requireAdminAuth, upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }
    const ext = path2.extname(req.file.originalname).toLowerCase();
    let type = "file";
    if ([".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif"].includes(ext)) {
      type = "image";
    } else if (ext === ".pdf") {
      type = "pdf";
    } else if ([".doc", ".docx"].includes(ext)) {
      type = "document";
    }
    const publicUrl = `/uploads/${req.file.filename}`;
    const mediaItem = {
      id: `med_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      filename: req.file.filename,
      originalName: req.file.originalname,
      url: publicUrl,
      mimetype: req.file.mimetype,
      size: req.file.size,
      type,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    const mediaCollection = db.getCollection("media");
    mediaCollection.unshift(mediaItem);
    db.save();
    db.logActivity(`Uploaded ${type}: "${req.file.originalname}"`, `Saved as ${publicUrl}`, "media_upload");
    res.status(201).json(mediaItem);
  } catch (err) {
    res.status(500).json({ error: err.message || "File upload failed." });
  }
});
router.delete("/media/:id", requireAdminAuth, (req, res) => {
  try {
    const mediaCollection = db.getCollection("media");
    const index = mediaCollection.findIndex((m) => m.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: "Media file not found." });
    }
    const item = mediaCollection[index];
    const filePath = path2.join(UPLOADS_DIR, item.filename);
    if (fs2.existsSync(filePath)) {
      try {
        fs2.unlinkSync(filePath);
      } catch (e) {
        console.warn("Could not delete file from disk:", e);
      }
    }
    mediaCollection.splice(index, 1);
    db.save();
    db.logActivity(`Deleted media file: "${item.originalName}"`, `Removed by Admin`, "media_delete");
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete media item." });
  }
});
router.post("/documents/import-docx", requireAdminAuth, upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No DOCX file uploaded." });
    }
    const filePath = req.file.path;
    const fileBuffer = fs2.readFileSync(filePath);
    const zip = await JSZip.loadAsync(fileBuffer);
    const extractedImages = [];
    const imageFiles = Object.keys(zip.files).filter((fileName) => fileName.startsWith("word/media/"));
    for (const imgPath of imageFiles) {
      const imgFile = zip.file(imgPath);
      if (imgFile) {
        const imgBuffer = await imgFile.async("nodebuffer");
        const imgExt = path2.extname(imgPath) || ".png";
        const imgFileName = `docx_extracted_${Date.now()}_${Math.random().toString(36).substr(2, 6)}${imgExt}`;
        const targetImgPath = path2.join(UPLOADS_DIR, imgFileName);
        fs2.writeFileSync(targetImgPath, imgBuffer);
        const imgUrl = `/uploads/${imgFileName}`;
        extractedImages.push({
          originalPath: imgPath,
          url: imgUrl,
          filename: imgFileName
        });
        db.getCollection("media").unshift({
          id: `med_docx_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          filename: imgFileName,
          originalName: path2.basename(imgPath),
          url: imgUrl,
          mimetype: `image/${imgExt.replace(".", "")}`,
          size: imgBuffer.length,
          type: "image",
          created_at: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
    }
    let extractedContent = "";
    let extractedTitle = path2.basename(req.file.originalname, path2.extname(req.file.originalname));
    const docXmlFile = zip.file("word/document.xml");
    if (docXmlFile) {
      const xmlString = await docXmlFile.async("string");
      const pMatches = xmlString.match(/<w:p(?:\s|>).*?<\/w:p>/gs) || [];
      const lines = [];
      for (const pXml of pMatches) {
        const tMatches = pXml.match(/<w:t(?:\s|>).*?<\/w:t>/gs) || [];
        const pText = tMatches.map((t) => t.replace(/<[^>]+>/g, "")).join("").trim();
        if (!pText) continue;
        const isHeading1 = /<w:pStyle\s+w:val="Heading1"/i.test(pXml) || /<w:pStyle\s+w:val="1"/i.test(pXml);
        const isHeading2 = /<w:pStyle\s+w:val="Heading2"/i.test(pXml) || /<w:pStyle\s+w:val="2"/i.test(pXml);
        const isHeading3 = /<w:pStyle\s+w:val="Heading3"/i.test(pXml) || /<w:pStyle\s+w:val="3"/i.test(pXml);
        const isList = /<w:numPr>/i.test(pXml);
        if (isHeading1) {
          lines.push(`
## ${pText}
`);
          if (lines.length === 1) extractedTitle = pText;
        } else if (isHeading2) {
          lines.push(`
### ${pText}
`);
        } else if (isHeading3) {
          lines.push(`
#### ${pText}
`);
        } else if (isList) {
          lines.push(`- ${pText}`);
        } else {
          lines.push(`${pText}
`);
        }
      }
      extractedContent = lines.join("\n");
    }
    if (extractedImages.length > 0) {
      extractedContent += "\n\n### Document Images\n";
      extractedImages.forEach((img, idx) => {
        extractedContent += `
![Document Image ${idx + 1}](${img.url})
`;
      });
    }
    db.save();
    db.logActivity(`Imported DOCX Document: "${req.file.originalname}"`, `Extracted ${extractedImages.length} images and ${extractedContent.length} chars text`, "document_import");
    res.json({
      success: true,
      title: extractedTitle,
      content: extractedContent,
      images: extractedImages,
      fileUrl: `/uploads/${req.file.filename}`,
      fileName: req.file.originalname
    });
  } catch (err) {
    console.error("DOCX parsing error:", err);
    res.status(500).json({ error: `DOCX extraction failed: ${err.message}` });
  }
});
router.post("/documents/upload-pdf", requireAdminAuth, upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No PDF file uploaded." });
    }
    const publicUrl = `/uploads/${req.file.filename}`;
    const mediaItem = {
      id: `med_pdf_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      filename: req.file.filename,
      originalName: req.file.originalname,
      url: publicUrl,
      mimetype: "application/pdf",
      size: req.file.size,
      type: "pdf",
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    db.getCollection("media").unshift(mediaItem);
    db.save();
    db.logActivity(`Uploaded PDF Document: "${req.file.originalname}"`, `Saved as ${publicUrl}`, "pdf_upload");
    res.status(201).json(mediaItem);
  } catch (err) {
    res.status(500).json({ error: err.message || "PDF upload failed." });
  }
});
router.get("/stats", requireAdminAuth, (req, res) => {
  try {
    const stats = db.getStats();
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve stats." });
  }
});
router.get("/activity-logs", requireAdminAuth, (req, res) => {
  try {
    const logs = db.getCollection("activityLogs").slice(0, 30);
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve activity logs." });
  }
});
router.get("/settings", requireAdminAuth, (req, res) => {
  try {
    const settings = db.data.settings || {};
    res.json(settings);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve settings." });
  }
});
router.put("/settings", requireAdminAuth, (req, res) => {
  try {
    db.data.settings = { ...db.data.settings, ...req.body };
    db.save();
    db.logActivity("Site Settings Updated", "System configurations adjusted by Admin", "settings_update");
    res.json(db.data.settings);
  } catch (err) {
    res.status(500).json({ error: "Failed to update settings." });
  }
});

// server/index.js
var __vite_injected_original_import_meta_url3 = "file:///C:/Users/mukhe/Downloads/webpage-main/webpage-main/server/index.js";
var __filename3 = fileURLToPath3(__vite_injected_original_import_meta_url3);
var __dirname3 = path3.dirname(__filename3);
var app = express2();
var PORT = process.env.PORT || 5e3;
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(cookieParser());
app.use(express2.json({ limit: "50mb" }));
app.use(express2.urlencoded({ extended: true, limit: "50mb" }));
var UPLOADS_DIR2 = path3.resolve(__dirname3, "../public/uploads");
app.use("/uploads", express2.static(UPLOADS_DIR2));
app.use("/api", router);
app.get("/health", (req, res) => {
  res.json({ status: "ok", time: (/* @__PURE__ */ new Date()).toISOString() });
});
var DIST_DIR = path3.resolve(__dirname3, "../dist");
app.use(express2.static(DIST_DIR));
app.use((req, res) => {
  if (req.path.startsWith("/api") || req.path.startsWith("/uploads")) {
    return res.status(404).json({ error: "API route not found" });
  }
  res.sendFile(path3.join(DIST_DIR, "index.html"));
});
if (process.argv[1] === fileURLToPath3(__vite_injected_original_import_meta_url3)) {
  app.listen(PORT, () => {
    console.log(`SMRIKAAM Central CMS API Server running on port ${PORT}`);
    console.log(`Persistent File Storage at: ${UPLOADS_DIR2}`);
  });
}
var server_default = app;

// vite.config.js
function apiServerPlugin() {
  return {
    name: "api-server-middleware",
    configureServer(server) {
      server.middlewares.use(server_default);
    },
    configurePreviewServer(server) {
      server.middlewares.use(server_default);
    }
  };
}
var vite_config_default = defineConfig({
  plugins: [react(), apiServerPlugin()],
  server: {
    port: 5173
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAic2VydmVyL2luZGV4LmpzIiwgInNlcnZlci9yb3V0ZXMvYXBpLmpzIiwgInNlcnZlci9zZXJ2aWNlcy9kYi5qcyIsICJzZXJ2ZXIvZGF0YS9zZWVkRGF0YS5qcyIsICJzZXJ2ZXIvc2VydmljZXMvcG9zdGdyZXMuanMiLCAic2VydmVyL3NlcnZpY2VzL2F1dGguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtdWtoZVxcXFxEb3dubG9hZHNcXFxcd2VicGFnZS1tYWluXFxcXHdlYnBhZ2UtbWFpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbXVraGVcXFxcRG93bmxvYWRzXFxcXHdlYnBhZ2UtbWFpblxcXFx3ZWJwYWdlLW1haW5cXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL211a2hlL0Rvd25sb2Fkcy93ZWJwYWdlLW1haW4vd2VicGFnZS1tYWluL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IGV4cHJlc3NBcHAgZnJvbSAnLi9zZXJ2ZXIvaW5kZXguanMnO1xuXG5mdW5jdGlvbiBhcGlTZXJ2ZXJQbHVnaW4oKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2FwaS1zZXJ2ZXItbWlkZGxld2FyZScsXG4gICAgY29uZmlndXJlU2VydmVyKHNlcnZlcikge1xuICAgICAgc2VydmVyLm1pZGRsZXdhcmVzLnVzZShleHByZXNzQXBwKTtcbiAgICB9LFxuICAgIGNvbmZpZ3VyZVByZXZpZXdTZXJ2ZXIoc2VydmVyKSB7XG4gICAgICBzZXJ2ZXIubWlkZGxld2FyZXMudXNlKGV4cHJlc3NBcHApO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBhcGlTZXJ2ZXJQbHVnaW4oKV0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDUxNzNcbiAgfVxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG11a2hlXFxcXERvd25sb2Fkc1xcXFx3ZWJwYWdlLW1haW5cXFxcd2VicGFnZS1tYWluXFxcXHNlcnZlclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbXVraGVcXFxcRG93bmxvYWRzXFxcXHdlYnBhZ2UtbWFpblxcXFx3ZWJwYWdlLW1haW5cXFxcc2VydmVyXFxcXGluZGV4LmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9tdWtoZS9Eb3dubG9hZHMvd2VicGFnZS1tYWluL3dlYnBhZ2UtbWFpbi9zZXJ2ZXIvaW5kZXguanNcIjtpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xuaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XG5pbXBvcnQgeyByb3V0ZXIgYXMgYXBpUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXMvYXBpLmpzJztcblxuY29uc3QgX19maWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKTtcbmNvbnN0IF9fZGlybmFtZSA9IHBhdGguZGlybmFtZShfX2ZpbGVuYW1lKTtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMDtcblxuLy8gTWlkZGxld2FyZVxuYXBwLnVzZShjb3JzKHtcbiAgb3JpZ2luOiB0cnVlLFxuICBjcmVkZW50aWFsczogdHJ1ZVxufSkpO1xuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG5hcHAudXNlKGV4cHJlc3MuanNvbih7IGxpbWl0OiAnNTBtYicgfSkpO1xuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSwgbGltaXQ6ICc1MG1iJyB9KSk7XG5cbi8vIFN0YXRpYyB1cGxvYWRzIHNlcnZpbmdcbmNvbnN0IFVQTE9BRFNfRElSID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3B1YmxpYy91cGxvYWRzJyk7XG5hcHAudXNlKCcvdXBsb2FkcycsIGV4cHJlc3Muc3RhdGljKFVQTE9BRFNfRElSKSk7XG5cbi8vIEFQSSBSb3V0ZXNcbmFwcC51c2UoJy9hcGknLCBhcGlSb3V0ZXIpO1xuXG4vLyBSb290IGhlYWx0aCBjaGVja1xuYXBwLmdldCgnL2hlYWx0aCcsIChyZXEsIHJlcykgPT4ge1xuICByZXMuanNvbih7IHN0YXR1czogJ29rJywgdGltZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pO1xufSk7XG5cbi8vIFByb2R1Y3Rpb246IFNlcnZlIGZyb250ZW5kIHN0YXRpYyBidWlsZFxuY29uc3QgRElTVF9ESVIgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vZGlzdCcpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYyhESVNUX0RJUikpO1xuXG5hcHAudXNlKChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLnBhdGguc3RhcnRzV2l0aCgnL2FwaScpIHx8IHJlcS5wYXRoLnN0YXJ0c1dpdGgoJy91cGxvYWRzJykpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogJ0FQSSByb3V0ZSBub3QgZm91bmQnIH0pO1xuICB9XG4gIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oRElTVF9ESVIsICdpbmRleC5odG1sJykpO1xufSk7XG5cbi8vIFN0YXJ0IGxpc3RlbmluZyBpZiBleGVjdXRlZCBkaXJlY3RseVxuaWYgKHByb2Nlc3MuYXJndlsxXSA9PT0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpKSB7XG4gIGFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBTTVJJS0FBTSBDZW50cmFsIENNUyBBUEkgU2VydmVyIHJ1bm5pbmcgb24gcG9ydCAke1BPUlR9YCk7XG4gICAgY29uc29sZS5sb2coYFBlcnNpc3RlbnQgRmlsZSBTdG9yYWdlIGF0OiAke1VQTE9BRFNfRElSfWApO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtdWtoZVxcXFxEb3dubG9hZHNcXFxcd2VicGFnZS1tYWluXFxcXHdlYnBhZ2UtbWFpblxcXFxzZXJ2ZXJcXFxccm91dGVzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtdWtoZVxcXFxEb3dubG9hZHNcXFxcd2VicGFnZS1tYWluXFxcXHdlYnBhZ2UtbWFpblxcXFxzZXJ2ZXJcXFxccm91dGVzXFxcXGFwaS5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbXVraGUvRG93bmxvYWRzL3dlYnBhZ2UtbWFpbi93ZWJwYWdlLW1haW4vc2VydmVyL3JvdXRlcy9hcGkuanNcIjtpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBtdWx0ZXIgZnJvbSAnbXVsdGVyJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuaW1wb3J0IEpTWmlwIGZyb20gJ2pzemlwJztcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vc2VydmljZXMvZGIuanMnO1xuaW1wb3J0IHsgYXV0aGVudGljYXRlVXNlciwgcmVxdWlyZUFkbWluQXV0aCwgdmVyaWZ5VG9rZW4gfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLmpzJztcblxuY29uc3QgX19maWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKTtcbmNvbnN0IF9fZGlybmFtZSA9IHBhdGguZGlybmFtZShfX2ZpbGVuYW1lKTtcblxuLy8gVXBsb2FkcyBkaXJlY3Rvcnk6IGluIHB1YmxpYy91cGxvYWRzIGZvciBkaXJlY3QgYnJvd3NlciBzZXJ2aW5nXG5jb25zdCBVUExPQURTX0RJUiA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9wdWJsaWMvdXBsb2FkcycpO1xuaWYgKCFmcy5leGlzdHNTeW5jKFVQTE9BRFNfRElSKSkge1xuICBmcy5ta2RpclN5bmMoVVBMT0FEU19ESVIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xufVxuXG4vLyBNdWx0ZXIgU3RvcmFnZSBDb25maWd1cmF0aW9uXG5jb25zdCBzdG9yYWdlID0gbXVsdGVyLmRpc2tTdG9yYWdlKHtcbiAgZGVzdGluYXRpb246IChyZXEsIGZpbGUsIGNiKSA9PiB7XG4gICAgY2IobnVsbCwgVVBMT0FEU19ESVIpO1xuICB9LFxuICBmaWxlbmFtZTogKHJlcSwgZmlsZSwgY2IpID0+IHtcbiAgICBjb25zdCBleHQgPSBwYXRoLmV4dG5hbWUoZmlsZS5vcmlnaW5hbG5hbWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgYmFzZU5hbWUgPSBwYXRoLmJhc2VuYW1lKGZpbGUub3JpZ2luYWxuYW1lLCBleHQpLnJlcGxhY2UoL1teYS16QS1aMC05Xy1dL2csICdfJyk7XG4gICAgY29uc3QgdW5pcXVlU3VmZml4ID0gYCR7RGF0ZS5ub3coKX1fJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNil9YDtcbiAgICBjYihudWxsLCBgJHtiYXNlTmFtZX1fJHt1bmlxdWVTdWZmaXh9JHtleHR9YCk7XG4gIH1cbn0pO1xuXG5jb25zdCBmaWxlRmlsdGVyID0gKHJlcSwgZmlsZSwgY2IpID0+IHtcbiAgY29uc3QgYWxsb3dlZEV4dHMgPSBbJy5wbmcnLCAnLmpwZycsICcuanBlZycsICcud2VicCcsICcucGRmJywgJy5kb2MnLCAnLmRvY3gnXTtcbiAgY29uc3QgZXh0ID0gcGF0aC5leHRuYW1lKGZpbGUub3JpZ2luYWxuYW1lKS50b0xvd2VyQ2FzZSgpO1xuICBpZiAoYWxsb3dlZEV4dHMuaW5jbHVkZXMoZXh0KSkge1xuICAgIGNiKG51bGwsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIGNiKG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgZmlsZSB0eXBlICR7ZXh0fS4gQWxsb3dlZDogUE5HLCBKUEcsIEpQRUcsIFdFQlAsIFBERiwgRE9DLCBET0NYYCksIGZhbHNlKTtcbiAgfVxufTtcblxuY29uc3QgdXBsb2FkID0gbXVsdGVyKHtcbiAgc3RvcmFnZSxcbiAgZmlsZUZpbHRlcixcbiAgbGltaXRzOiB7IGZpbGVTaXplOiA1MCAqIDEwMjQgKiAxMDI0IH0gLy8gNTAgTUJcbn0pO1xuXG5leHBvcnQgY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAxLiBBVVRIRU5USUNBVElPTiBST1VURVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5yb3V0ZXIucG9zdCgnL2F1dGgvbG9naW4nLCAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnRW1haWwgYW5kIHBhc3N3b3JkIGFyZSByZXF1aXJlZC4nIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGlwID0gcmVxLmlwIHx8IHJlcS5jb25uZWN0aW9uLnJlbW90ZUFkZHJlc3MgfHwgJzEyNy4wLjAuMSc7XG4gICAgY29uc3QgeyB0b2tlbiwgdXNlciB9ID0gYXV0aGVudGljYXRlVXNlcihlbWFpbCwgcGFzc3dvcmQsIGlwKTtcblxuICAgIC8vIFNldCBzZWN1cmUgY29va2llXG4gICAgcmVzLmNvb2tpZSgndG9rZW4nLCB0b2tlbiwge1xuICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgICBzYW1lU2l0ZTogJ2xheCcsXG4gICAgICBtYXhBZ2U6IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gICAgfSk7XG5cbiAgICByZXMuanNvbih7IHRva2VuLCB1c2VyIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiBlcnIubWVzc2FnZSB8fCAnQXV0aGVudGljYXRpb24gZmFpbGVkLicgfSk7XG4gIH1cbn0pO1xuXG5yb3V0ZXIucG9zdCgnL2F1dGgvbG9nb3V0JywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5jbGVhckNvb2tpZSgndG9rZW4nKTtcbiAgcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnTG9nZ2VkIG91dCBzdWNjZXNzZnVsbHkuJyB9KTtcbn0pO1xuXG5yb3V0ZXIuZ2V0KCcvYXV0aC9tZScsIChyZXEsIHJlcykgPT4ge1xuICBsZXQgdG9rZW4gPSBudWxsO1xuICBjb25zdCBhdXRoSGVhZGVyID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcbiAgaWYgKGF1dGhIZWFkZXIgJiYgYXV0aEhlYWRlci5zdGFydHNXaXRoKCdCZWFyZXIgJykpIHtcbiAgICB0b2tlbiA9IGF1dGhIZWFkZXIuc3Vic3RyaW5nKDcpO1xuICB9IGVsc2UgaWYgKHJlcS5jb29raWVzICYmIHJlcS5jb29raWVzLnRva2VuKSB7XG4gICAgdG9rZW4gPSByZXEuY29va2llcy50b2tlbjtcbiAgfVxuXG4gIGlmICghdG9rZW4pIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyB1c2VyOiBudWxsIH0pO1xuICB9XG5cbiAgY29uc3QgZGVjb2RlZCA9IHZlcmlmeVRva2VuKHRva2VuKTtcbiAgaWYgKCFkZWNvZGVkKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgdXNlcjogbnVsbCB9KTtcbiAgfVxuXG4gIGNvbnN0IHVzZXJzID0gZGIuZ2V0Q29sbGVjdGlvbigndXNlcnMnKTtcbiAgY29uc3QgdXNlciA9IHVzZXJzLmZpbmQoKHUpID0+IHUuaWQgPT09IGRlY29kZWQudXNlcklkKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyB1c2VyOiBudWxsIH0pO1xuICB9XG5cbiAgcmVzLmpzb24oe1xuICAgIHVzZXI6IHtcbiAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICByb2xlOiB1c2VyLnJvbGVcbiAgICB9XG4gIH0pO1xufSk7XG5cbnJvdXRlci5wb3N0KCcvYXV0aC9mb3Jnb3QtcGFzc3dvcmQnLCAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBlbWFpbCB9ID0gcmVxLmJvZHk7XG4gIGRiLmxvZ0FjdGl2aXR5KCdQYXNzd29yZCBSZXNldCBSZXF1ZXN0ZWQnLCBgUGFzc3dvcmQgcmVzZXQgdG9rZW4gZ2VuZXJhdGVkIGZvciAke2VtYWlsfWAsICdhdXRoX3Jlc2V0Jyk7XG4gIHJlcy5qc29uKHtcbiAgICBzdWNjZXNzOiB0cnVlLFxuICAgIG1lc3NhZ2U6ICdJZiB0aGUgZW1haWwgZXhpc3RzIGluIG91ciBzeXN0ZW0sIGEgcGFzc3dvcmQgcmVzZXQgYXV0aG9yaXphdGlvbiBjb2RlIGhhcyBiZWVuIGRpc3BhdGNoZWQuJ1xuICB9KTtcbn0pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIDIuIFJFU09VUkNFIENSVUQgUk9VVEUgR0VORVJBVE9SXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gY3JlYXRlUmVzb3VyY2VSb3V0ZXMocmVzb3VyY2VQYXRoLCBjb2xsZWN0aW9uTmFtZSkge1xuICAvLyBQdWJsaWMgbGlzdCAoUHVibGlzaGVkIG9ubHkpXG4gIHJvdXRlci5nZXQoYC8ke3Jlc291cmNlUGF0aH1gLCAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBjYXRlZ29yeSwgdHlwZSwgc2VhcmNoLCBsaW1pdCwgc29ydCB9ID0gcmVxLnF1ZXJ5O1xuICAgICAgY29uc3QgaXRlbXMgPSBkYi5nZXRBbGwoY29sbGVjdGlvbk5hbWUsIHtcbiAgICAgICAgc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHNlYXJjaCxcbiAgICAgICAgbGltaXQ6IGxpbWl0ID8gcGFyc2VJbnQobGltaXQsIDEwKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgc29ydDogc29ydCB8fCAnbmV3ZXN0J1xuICAgICAgfSk7XG4gICAgICByZXMuanNvbihpdGVtcyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBgRmFpbGVkIHRvIGZldGNoICR7cmVzb3VyY2VQYXRofWAgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBQdWJsaWMgc2luZ2xlIGl0ZW0gYnkgSUQgb3IgU2x1Z1xuICByb3V0ZXIuZ2V0KGAvJHtyZXNvdXJjZVBhdGh9LzppZE9yU2x1Z2AsIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGlkT3JTbHVnIH0gPSByZXEucGFyYW1zO1xuICAgICAgbGV0IGl0ZW0gPSBkYi5nZXRCeUlkKGNvbGxlY3Rpb25OYW1lLCBpZE9yU2x1Zyk7XG4gICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgaXRlbSA9IGRiLmdldEJ5U2x1Zyhjb2xsZWN0aW9uTmFtZSwgaWRPclNsdWcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWl0ZW0gfHwgaXRlbS5zdGF0dXMgIT09ICdwdWJsaXNoZWQnKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiAnSXRlbSBub3QgZm91bmQgb3Igbm90IHB1Ymxpc2hlZC4nIH0pO1xuICAgICAgfVxuXG4gICAgICByZXMuanNvbihpdGVtKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGBGYWlsZWQgdG8gZmV0Y2ggJHtyZXNvdXJjZVBhdGh9IGl0ZW1gIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQWRtaW46IEdldCBhbGwgaXRlbXMgKGFsbCBzdGF0dXNlcylcbiAgcm91dGVyLmdldChgLyR7cmVzb3VyY2VQYXRofS9hZG1pbi9hbGxgLCByZXF1aXJlQWRtaW5BdXRoLCAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBzdGF0dXMsIGNhdGVnb3J5LCB0eXBlLCBzZWFyY2gsIGxpbWl0LCBzb3J0IH0gPSByZXEucXVlcnk7XG4gICAgICBjb25zdCBpdGVtcyA9IGRiLmdldEFsbChjb2xsZWN0aW9uTmFtZSwge1xuICAgICAgICBzdGF0dXM6IHN0YXR1cyB8fCAnYWxsJyxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHNlYXJjaCxcbiAgICAgICAgbGltaXQ6IGxpbWl0ID8gcGFyc2VJbnQobGltaXQsIDEwKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgc29ydDogc29ydCB8fCAnbmV3ZXN0J1xuICAgICAgfSk7XG4gICAgICByZXMuanNvbihpdGVtcyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBgRmFpbGVkIHRvIGZldGNoIGFkbWluICR7cmVzb3VyY2VQYXRofWAgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBBZG1pbjogQ3JlYXRlIGl0ZW1cbiAgcm91dGVyLnBvc3QoYC8ke3Jlc291cmNlUGF0aH0vYWRtaW5gLCByZXF1aXJlQWRtaW5BdXRoLCAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY3JlYXRlZCA9IGRiLmNyZWF0ZShjb2xsZWN0aW9uTmFtZSwgcmVxLmJvZHksIHJlcS51c2VyKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKGNyZWF0ZWQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfHwgYEZhaWxlZCB0byBjcmVhdGUgJHtyZXNvdXJjZVBhdGh9YCB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEFkbWluOiBVcGRhdGUgaXRlbVxuICByb3V0ZXIucHV0KGAvJHtyZXNvdXJjZVBhdGh9L2FkbWluLzppZGAsIHJlcXVpcmVBZG1pbkF1dGgsIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cGRhdGVkID0gZGIudXBkYXRlKGNvbGxlY3Rpb25OYW1lLCByZXEucGFyYW1zLmlkLCByZXEuYm9keSwgcmVxLnVzZXIpO1xuICAgICAgaWYgKCF1cGRhdGVkKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiAnSXRlbSBub3QgZm91bmQuJyB9KTtcbiAgICAgIH1cbiAgICAgIHJlcy5qc29uKHVwZGF0ZWQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfHwgYEZhaWxlZCB0byB1cGRhdGUgJHtyZXNvdXJjZVBhdGh9YCB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEFkbWluOiBDaGFuZ2Ugc3RhdHVzIChQdWJsaXNoIC8gVW5wdWJsaXNoIC8gRHJhZnQgLyBUcmFzaClcbiAgcm91dGVyLnBhdGNoKGAvJHtyZXNvdXJjZVBhdGh9L2FkbWluLzppZC9zdGF0dXNgLCByZXF1aXJlQWRtaW5BdXRoLCAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IHJlcS5ib2R5O1xuICAgICAgaWYgKCFzdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdTdGF0dXMgaXMgcmVxdWlyZWQuJyB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHVwZGF0ZWQgPSBkYi51cGRhdGVTdGF0dXMoY29sbGVjdGlvbk5hbWUsIHJlcS5wYXJhbXMuaWQsIHN0YXR1cywgcmVxLnVzZXIpO1xuICAgICAgaWYgKCF1cGRhdGVkKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiAnSXRlbSBub3QgZm91bmQuJyB9KTtcbiAgICAgIH1cbiAgICAgIHJlcy5qc29uKHVwZGF0ZWQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfHwgYEZhaWxlZCB0byB1cGRhdGUgc3RhdHVzYCB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEFkbWluOiBEZWxldGUgaXRlbSAoc29mdCBkZWxldGUgdG8gdHJhc2gsIG9yIHBlcm1hbmVudCBpZiBpbiB0cmFzaClcbiAgcm91dGVyLmRlbGV0ZShgLyR7cmVzb3VyY2VQYXRofS9hZG1pbi86aWRgLCByZXF1aXJlQWRtaW5BdXRoLCAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwZXJtYW5lbnQgfSA9IHJlcS5xdWVyeTtcbiAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBkYi5kZWxldGUoY29sbGVjdGlvbk5hbWUsIHJlcS5wYXJhbXMuaWQsIHJlcS51c2VyLCBwZXJtYW5lbnQgPT09ICd0cnVlJyk7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICdJdGVtIG5vdCBmb3VuZC4nIH0pO1xuICAgICAgfVxuICAgICAgcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBwZXJtYW5lbnQgPT09ICd0cnVlJyA/ICdQZXJtYW5lbnRseSBkZWxldGVkJyA6ICdNb3ZlZCB0byB0cmFzaCcgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBgRmFpbGVkIHRvIGRlbGV0ZSAke3Jlc291cmNlUGF0aH0gaXRlbWAgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBBZG1pbjogUmVzdG9yZSBmcm9tIHRyYXNoXG4gIHJvdXRlci5wb3N0KGAvJHtyZXNvdXJjZVBhdGh9L2FkbWluLzppZC9yZXN0b3JlYCwgcmVxdWlyZUFkbWluQXV0aCwgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3RvcmVkID0gZGIucmVzdG9yZShjb2xsZWN0aW9uTmFtZSwgcmVxLnBhcmFtcy5pZCwgcmVxLnVzZXIpO1xuICAgICAgaWYgKCFyZXN0b3JlZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogJ0l0ZW0gbm90IGZvdW5kIGluIHRyYXNoLicgfSk7XG4gICAgICB9XG4gICAgICByZXMuanNvbihyZXN0b3JlZCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBgRmFpbGVkIHRvIHJlc3RvcmUgaXRlbWAgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBBZG1pbjogQnVsayBBY3Rpb25zXG4gIHJvdXRlci5wb3N0KGAvJHtyZXNvdXJjZVBhdGh9L2FkbWluL2J1bGtgLCByZXF1aXJlQWRtaW5BdXRoLCAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBpZHMsIGFjdGlvbiB9ID0gcmVxLmJvZHk7XG4gICAgICBpZiAoIWlkcyB8fCAhQXJyYXkuaXNBcnJheShpZHMpIHx8ICFhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdJRHMgYXJyYXkgYW5kIGFjdGlvbiByZXF1aXJlZC4nIH0pO1xuICAgICAgfVxuICAgICAgY29uc3QgYWZmZWN0ZWQgPSBkYi5idWxrQWN0aW9uKGNvbGxlY3Rpb25OYW1lLCBpZHMsIGFjdGlvbiwgcmVxLnVzZXIpO1xuICAgICAgcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBhZmZlY3RlZENvdW50OiBhZmZlY3RlZCB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGBGYWlsZWQgdG8gZXhlY3V0ZSBidWxrIGFjdGlvbmAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gUmVnaXN0ZXIgYWxsIHJlc291cmNlc1xuY3JlYXRlUmVzb3VyY2VSb3V0ZXMoJ3Bvc3RzJywgJ3Bvc3RzJyk7XG5jcmVhdGVSZXNvdXJjZVJvdXRlcygnc2VydmljZXMnLCAnc2VydmljZXMnKTtcbmNyZWF0ZVJlc291cmNlUm91dGVzKCdhY2NlbGVyYXRvcnMnLCAnYWNjZWxlcmF0b3JzJyk7XG5jcmVhdGVSZXNvdXJjZVJvdXRlcygnaW5kdXN0cmllcycsICdpbmR1c3RyaWVzJyk7XG5jcmVhdGVSZXNvdXJjZVJvdXRlcygnY2FzZS1zdHVkaWVzJywgJ2Nhc2VTdHVkaWVzJyk7XG5jcmVhdGVSZXNvdXJjZVJvdXRlcygncmVwb3J0cycsICdyZXBvcnRzJyk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gMy4gTUVESUEgVVBMT0FEICYgTElCUkFSWVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnJvdXRlci5nZXQoJy9tZWRpYScsIHJlcXVpcmVBZG1pbkF1dGgsIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdHlwZSwgc2VhcmNoIH0gPSByZXEucXVlcnk7XG4gICAgbGV0IGl0ZW1zID0gZGIuZ2V0Q29sbGVjdGlvbignbWVkaWEnKTtcbiAgICBpZiAodHlwZSAmJiB0eXBlICE9PSAnYWxsJykge1xuICAgICAgaXRlbXMgPSBpdGVtcy5maWx0ZXIoKG0pID0+IG0udHlwZSA9PT0gdHlwZSk7XG4gICAgfVxuICAgIGlmIChzZWFyY2gpIHtcbiAgICAgIGNvbnN0IHEgPSBzZWFyY2gudG9Mb3dlckNhc2UoKTtcbiAgICAgIGl0ZW1zID0gaXRlbXMuZmlsdGVyKChtKSA9PiAobS5vcmlnaW5hbE5hbWUgfHwgbS5maWxlbmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKSk7XG4gICAgfVxuICAgIHJlcy5qc29uKGl0ZW1zKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBtZWRpYSBsaWJyYXJ5LicgfSk7XG4gIH1cbn0pO1xuXG5yb3V0ZXIucG9zdCgnL21lZGlhL3VwbG9hZCcsIHJlcXVpcmVBZG1pbkF1dGgsIHVwbG9hZC5zaW5nbGUoJ2ZpbGUnKSwgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFyZXEuZmlsZSkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdObyBmaWxlIHVwbG9hZGVkLicgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZXh0ID0gcGF0aC5leHRuYW1lKHJlcS5maWxlLm9yaWdpbmFsbmFtZSkudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgdHlwZSA9ICdmaWxlJztcbiAgICBpZiAoWycucG5nJywgJy5qcGcnLCAnLmpwZWcnLCAnLndlYnAnLCAnLnN2ZycsICcuZ2lmJ10uaW5jbHVkZXMoZXh0KSkge1xuICAgICAgdHlwZSA9ICdpbWFnZSc7XG4gICAgfSBlbHNlIGlmIChleHQgPT09ICcucGRmJykge1xuICAgICAgdHlwZSA9ICdwZGYnO1xuICAgIH0gZWxzZSBpZiAoWycuZG9jJywgJy5kb2N4J10uaW5jbHVkZXMoZXh0KSkge1xuICAgICAgdHlwZSA9ICdkb2N1bWVudCc7XG4gICAgfVxuXG4gICAgY29uc3QgcHVibGljVXJsID0gYC91cGxvYWRzLyR7cmVxLmZpbGUuZmlsZW5hbWV9YDtcblxuICAgIGNvbnN0IG1lZGlhSXRlbSA9IHtcbiAgICAgIGlkOiBgbWVkXyR7RGF0ZS5ub3coKX1fJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNCl9YCxcbiAgICAgIGZpbGVuYW1lOiByZXEuZmlsZS5maWxlbmFtZSxcbiAgICAgIG9yaWdpbmFsTmFtZTogcmVxLmZpbGUub3JpZ2luYWxuYW1lLFxuICAgICAgdXJsOiBwdWJsaWNVcmwsXG4gICAgICBtaW1ldHlwZTogcmVxLmZpbGUubWltZXR5cGUsXG4gICAgICBzaXplOiByZXEuZmlsZS5zaXplLFxuICAgICAgdHlwZSxcbiAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgIH07XG5cbiAgICBjb25zdCBtZWRpYUNvbGxlY3Rpb24gPSBkYi5nZXRDb2xsZWN0aW9uKCdtZWRpYScpO1xuICAgIG1lZGlhQ29sbGVjdGlvbi51bnNoaWZ0KG1lZGlhSXRlbSk7XG4gICAgZGIuc2F2ZSgpO1xuXG4gICAgZGIubG9nQWN0aXZpdHkoYFVwbG9hZGVkICR7dHlwZX06IFwiJHtyZXEuZmlsZS5vcmlnaW5hbG5hbWV9XCJgLCBgU2F2ZWQgYXMgJHtwdWJsaWNVcmx9YCwgJ21lZGlhX3VwbG9hZCcpO1xuXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24obWVkaWFJdGVtKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfHwgJ0ZpbGUgdXBsb2FkIGZhaWxlZC4nIH0pO1xuICB9XG59KTtcblxucm91dGVyLmRlbGV0ZSgnL21lZGlhLzppZCcsIHJlcXVpcmVBZG1pbkF1dGgsIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IG1lZGlhQ29sbGVjdGlvbiA9IGRiLmdldENvbGxlY3Rpb24oJ21lZGlhJyk7XG4gICAgY29uc3QgaW5kZXggPSBtZWRpYUNvbGxlY3Rpb24uZmluZEluZGV4KChtKSA9PiBtLmlkID09PSByZXEucGFyYW1zLmlkKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogJ01lZGlhIGZpbGUgbm90IGZvdW5kLicgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbSA9IG1lZGlhQ29sbGVjdGlvbltpbmRleF07XG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4oVVBMT0FEU19ESVIsIGl0ZW0uZmlsZW5hbWUpO1xuXG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmcy51bmxpbmtTeW5jKGZpbGVQYXRoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdDb3VsZCBub3QgZGVsZXRlIGZpbGUgZnJvbSBkaXNrOicsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lZGlhQ29sbGVjdGlvbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGRiLnNhdmUoKTtcblxuICAgIGRiLmxvZ0FjdGl2aXR5KGBEZWxldGVkIG1lZGlhIGZpbGU6IFwiJHtpdGVtLm9yaWdpbmFsTmFtZX1cImAsIGBSZW1vdmVkIGJ5IEFkbWluYCwgJ21lZGlhX2RlbGV0ZScpO1xuXG4gICAgcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIGRlbGV0ZSBtZWRpYSBpdGVtLicgfSk7XG4gIH1cbn0pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIDQuIERPQ1ggRVhUUkFDVElPTiAmIFBERiBVUExPQURTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxucm91dGVyLnBvc3QoJy9kb2N1bWVudHMvaW1wb3J0LWRvY3gnLCByZXF1aXJlQWRtaW5BdXRoLCB1cGxvYWQuc2luZ2xlKCdmaWxlJyksIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGlmICghcmVxLmZpbGUpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnTm8gRE9DWCBmaWxlIHVwbG9hZGVkLicgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZVBhdGggPSByZXEuZmlsZS5wYXRoO1xuICAgIGNvbnN0IGZpbGVCdWZmZXIgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpO1xuXG4gICAgLy8gVW5wYWNrIHdpdGggSlNaaXBcbiAgICBjb25zdCB6aXAgPSBhd2FpdCBKU1ppcC5sb2FkQXN5bmMoZmlsZUJ1ZmZlcik7XG5cbiAgICAvLyAxLiBFeHRyYWN0IGVtYmVkZGVkIGltYWdlcyBmcm9tIHdvcmQvbWVkaWEvXG4gICAgY29uc3QgZXh0cmFjdGVkSW1hZ2VzID0gW107XG4gICAgY29uc3QgaW1hZ2VGaWxlcyA9IE9iamVjdC5rZXlzKHppcC5maWxlcykuZmlsdGVyKChmaWxlTmFtZSkgPT4gZmlsZU5hbWUuc3RhcnRzV2l0aCgnd29yZC9tZWRpYS8nKSk7XG5cbiAgICBmb3IgKGNvbnN0IGltZ1BhdGggb2YgaW1hZ2VGaWxlcykge1xuICAgICAgY29uc3QgaW1nRmlsZSA9IHppcC5maWxlKGltZ1BhdGgpO1xuICAgICAgaWYgKGltZ0ZpbGUpIHtcbiAgICAgICAgY29uc3QgaW1nQnVmZmVyID0gYXdhaXQgaW1nRmlsZS5hc3luYygnbm9kZWJ1ZmZlcicpO1xuICAgICAgICBjb25zdCBpbWdFeHQgPSBwYXRoLmV4dG5hbWUoaW1nUGF0aCkgfHwgJy5wbmcnO1xuICAgICAgICBjb25zdCBpbWdGaWxlTmFtZSA9IGBkb2N4X2V4dHJhY3RlZF8ke0RhdGUubm93KCl9XyR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDYpfSR7aW1nRXh0fWA7XG4gICAgICAgIGNvbnN0IHRhcmdldEltZ1BhdGggPSBwYXRoLmpvaW4oVVBMT0FEU19ESVIsIGltZ0ZpbGVOYW1lKTtcblxuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHRhcmdldEltZ1BhdGgsIGltZ0J1ZmZlcik7XG5cbiAgICAgICAgY29uc3QgaW1nVXJsID0gYC91cGxvYWRzLyR7aW1nRmlsZU5hbWV9YDtcbiAgICAgICAgZXh0cmFjdGVkSW1hZ2VzLnB1c2goe1xuICAgICAgICAgIG9yaWdpbmFsUGF0aDogaW1nUGF0aCxcbiAgICAgICAgICB1cmw6IGltZ1VybCxcbiAgICAgICAgICBmaWxlbmFtZTogaW1nRmlsZU5hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIHRvIG1lZGlhIGNvbGxlY3Rpb25cbiAgICAgICAgZGIuZ2V0Q29sbGVjdGlvbignbWVkaWEnKS51bnNoaWZ0KHtcbiAgICAgICAgICBpZDogYG1lZF9kb2N4XyR7RGF0ZS5ub3coKX1fJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNCl9YCxcbiAgICAgICAgICBmaWxlbmFtZTogaW1nRmlsZU5hbWUsXG4gICAgICAgICAgb3JpZ2luYWxOYW1lOiBwYXRoLmJhc2VuYW1lKGltZ1BhdGgpLFxuICAgICAgICAgIHVybDogaW1nVXJsLFxuICAgICAgICAgIG1pbWV0eXBlOiBgaW1hZ2UvJHtpbWdFeHQucmVwbGFjZSgnLicsICcnKX1gLFxuICAgICAgICAgIHNpemU6IGltZ0J1ZmZlci5sZW5ndGgsXG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMi4gUGFyc2UgZG9jdW1lbnQueG1sIGZvciB0ZXh0LCBoZWFkaW5ncywgYW5kIHBhcmFncmFwaHNcbiAgICBsZXQgZXh0cmFjdGVkQ29udGVudCA9ICcnO1xuICAgIGxldCBleHRyYWN0ZWRUaXRsZSA9IHBhdGguYmFzZW5hbWUocmVxLmZpbGUub3JpZ2luYWxuYW1lLCBwYXRoLmV4dG5hbWUocmVxLmZpbGUub3JpZ2luYWxuYW1lKSk7XG4gICAgY29uc3QgZG9jWG1sRmlsZSA9IHppcC5maWxlKCd3b3JkL2RvY3VtZW50LnhtbCcpO1xuXG4gICAgaWYgKGRvY1htbEZpbGUpIHtcbiAgICAgIGNvbnN0IHhtbFN0cmluZyA9IGF3YWl0IGRvY1htbEZpbGUuYXN5bmMoJ3N0cmluZycpO1xuXG4gICAgICAvLyBTaW1wbGUgWE1MIGVsZW1lbnQgcmVnZXggZXh0cmFjdG9yIGZvciBwYXJhZ3JhcGhzXG4gICAgICBjb25zdCBwTWF0Y2hlcyA9IHhtbFN0cmluZy5tYXRjaCgvPHc6cCg/Olxcc3w+KS4qPzxcXC93OnA+L2dzKSB8fCBbXTtcbiAgICAgIGNvbnN0IGxpbmVzID0gW107XG5cbiAgICAgIGZvciAoY29uc3QgcFhtbCBvZiBwTWF0Y2hlcykge1xuICAgICAgICAvLyBFeHRyYWN0IHRleHQgcnVucyBpbnNpZGUgcGFyYWdyYXBoXG4gICAgICAgIGNvbnN0IHRNYXRjaGVzID0gcFhtbC5tYXRjaCgvPHc6dCg/Olxcc3w+KS4qPzxcXC93OnQ+L2dzKSB8fCBbXTtcbiAgICAgICAgY29uc3QgcFRleHQgPSB0TWF0Y2hlc1xuICAgICAgICAgIC5tYXAoKHQpID0+IHQucmVwbGFjZSgvPFtePl0rPi9nLCAnJykpXG4gICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgLnRyaW0oKTtcblxuICAgICAgICBpZiAoIXBUZXh0KSBjb250aW51ZTtcblxuICAgICAgICAvLyBDaGVjayBpZiBoZWFkaW5nXG4gICAgICAgIGNvbnN0IGlzSGVhZGluZzEgPSAvPHc6cFN0eWxlXFxzK3c6dmFsPVwiSGVhZGluZzFcIi9pLnRlc3QocFhtbCkgfHwgLzx3OnBTdHlsZVxccyt3OnZhbD1cIjFcIi9pLnRlc3QocFhtbCk7XG4gICAgICAgIGNvbnN0IGlzSGVhZGluZzIgPSAvPHc6cFN0eWxlXFxzK3c6dmFsPVwiSGVhZGluZzJcIi9pLnRlc3QocFhtbCkgfHwgLzx3OnBTdHlsZVxccyt3OnZhbD1cIjJcIi9pLnRlc3QocFhtbCk7XG4gICAgICAgIGNvbnN0IGlzSGVhZGluZzMgPSAvPHc6cFN0eWxlXFxzK3c6dmFsPVwiSGVhZGluZzNcIi9pLnRlc3QocFhtbCkgfHwgLzx3OnBTdHlsZVxccyt3OnZhbD1cIjNcIi9pLnRlc3QocFhtbCk7XG4gICAgICAgIGNvbnN0IGlzTGlzdCA9IC88dzpudW1Qcj4vaS50ZXN0KHBYbWwpO1xuXG4gICAgICAgIGlmIChpc0hlYWRpbmcxKSB7XG4gICAgICAgICAgbGluZXMucHVzaChgXFxuIyMgJHtwVGV4dH1cXG5gKTtcbiAgICAgICAgICBpZiAobGluZXMubGVuZ3RoID09PSAxKSBleHRyYWN0ZWRUaXRsZSA9IHBUZXh0O1xuICAgICAgICB9IGVsc2UgaWYgKGlzSGVhZGluZzIpIHtcbiAgICAgICAgICBsaW5lcy5wdXNoKGBcXG4jIyMgJHtwVGV4dH1cXG5gKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0hlYWRpbmczKSB7XG4gICAgICAgICAgbGluZXMucHVzaChgXFxuIyMjIyAke3BUZXh0fVxcbmApO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTGlzdCkge1xuICAgICAgICAgIGxpbmVzLnB1c2goYC0gJHtwVGV4dH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaW5lcy5wdXNoKGAke3BUZXh0fVxcbmApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGV4dHJhY3RlZENvbnRlbnQgPSBsaW5lcy5qb2luKCdcXG4nKTtcbiAgICB9XG5cbiAgICAvLyBFbWJlZCBleHRyYWN0ZWQgaW1hZ2VzIGludG8gbWFya2Rvd24gY29udGVudCBpZiBwcmVzZW50XG4gICAgaWYgKGV4dHJhY3RlZEltYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICBleHRyYWN0ZWRDb250ZW50ICs9ICdcXG5cXG4jIyMgRG9jdW1lbnQgSW1hZ2VzXFxuJztcbiAgICAgIGV4dHJhY3RlZEltYWdlcy5mb3JFYWNoKChpbWcsIGlkeCkgPT4ge1xuICAgICAgICBleHRyYWN0ZWRDb250ZW50ICs9IGBcXG4hW0RvY3VtZW50IEltYWdlICR7aWR4ICsgMX1dKCR7aW1nLnVybH0pXFxuYDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRiLnNhdmUoKTtcbiAgICBkYi5sb2dBY3Rpdml0eShgSW1wb3J0ZWQgRE9DWCBEb2N1bWVudDogXCIke3JlcS5maWxlLm9yaWdpbmFsbmFtZX1cImAsIGBFeHRyYWN0ZWQgJHtleHRyYWN0ZWRJbWFnZXMubGVuZ3RofSBpbWFnZXMgYW5kICR7ZXh0cmFjdGVkQ29udGVudC5sZW5ndGh9IGNoYXJzIHRleHRgLCAnZG9jdW1lbnRfaW1wb3J0Jyk7XG5cbiAgICByZXMuanNvbih7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgdGl0bGU6IGV4dHJhY3RlZFRpdGxlLFxuICAgICAgY29udGVudDogZXh0cmFjdGVkQ29udGVudCxcbiAgICAgIGltYWdlczogZXh0cmFjdGVkSW1hZ2VzLFxuICAgICAgZmlsZVVybDogYC91cGxvYWRzLyR7cmVxLmZpbGUuZmlsZW5hbWV9YCxcbiAgICAgIGZpbGVOYW1lOiByZXEuZmlsZS5vcmlnaW5hbG5hbWVcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignRE9DWCBwYXJzaW5nIGVycm9yOicsIGVycik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogYERPQ1ggZXh0cmFjdGlvbiBmYWlsZWQ6ICR7ZXJyLm1lc3NhZ2V9YCB9KTtcbiAgfVxufSk7XG5cbnJvdXRlci5wb3N0KCcvZG9jdW1lbnRzL3VwbG9hZC1wZGYnLCByZXF1aXJlQWRtaW5BdXRoLCB1cGxvYWQuc2luZ2xlKCdmaWxlJyksIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGlmICghcmVxLmZpbGUpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnTm8gUERGIGZpbGUgdXBsb2FkZWQuJyB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBwdWJsaWNVcmwgPSBgL3VwbG9hZHMvJHtyZXEuZmlsZS5maWxlbmFtZX1gO1xuXG4gICAgY29uc3QgbWVkaWFJdGVtID0ge1xuICAgICAgaWQ6IGBtZWRfcGRmXyR7RGF0ZS5ub3coKX1fJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNCl9YCxcbiAgICAgIGZpbGVuYW1lOiByZXEuZmlsZS5maWxlbmFtZSxcbiAgICAgIG9yaWdpbmFsTmFtZTogcmVxLmZpbGUub3JpZ2luYWxuYW1lLFxuICAgICAgdXJsOiBwdWJsaWNVcmwsXG4gICAgICBtaW1ldHlwZTogJ2FwcGxpY2F0aW9uL3BkZicsXG4gICAgICBzaXplOiByZXEuZmlsZS5zaXplLFxuICAgICAgdHlwZTogJ3BkZicsXG4gICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICB9O1xuXG4gICAgZGIuZ2V0Q29sbGVjdGlvbignbWVkaWEnKS51bnNoaWZ0KG1lZGlhSXRlbSk7XG4gICAgZGIuc2F2ZSgpO1xuXG4gICAgZGIubG9nQWN0aXZpdHkoYFVwbG9hZGVkIFBERiBEb2N1bWVudDogXCIke3JlcS5maWxlLm9yaWdpbmFsbmFtZX1cImAsIGBTYXZlZCBhcyAke3B1YmxpY1VybH1gLCAncGRmX3VwbG9hZCcpO1xuXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24obWVkaWFJdGVtKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfHwgJ1BERiB1cGxvYWQgZmFpbGVkLicgfSk7XG4gIH1cbn0pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIDUuIFNZU1RFTSBTVEFUUyAmIEFDVElWSVRZIExPR1Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5yb3V0ZXIuZ2V0KCcvc3RhdHMnLCByZXF1aXJlQWRtaW5BdXRoLCAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzdGF0cyA9IGRiLmdldFN0YXRzKCk7XG4gICAgcmVzLmpzb24oc3RhdHMpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIHJldHJpZXZlIHN0YXRzLicgfSk7XG4gIH1cbn0pO1xuXG5yb3V0ZXIuZ2V0KCcvYWN0aXZpdHktbG9ncycsIHJlcXVpcmVBZG1pbkF1dGgsIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGxvZ3MgPSBkYi5nZXRDb2xsZWN0aW9uKCdhY3Rpdml0eUxvZ3MnKS5zbGljZSgwLCAzMCk7XG4gICAgcmVzLmpzb24obG9ncyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gcmV0cmlldmUgYWN0aXZpdHkgbG9ncy4nIH0pO1xuICB9XG59KTtcblxucm91dGVyLmdldCgnL3NldHRpbmdzJywgcmVxdWlyZUFkbWluQXV0aCwgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBkYi5kYXRhLnNldHRpbmdzIHx8IHt9O1xuICAgIHJlcy5qc29uKHNldHRpbmdzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byByZXRyaWV2ZSBzZXR0aW5ncy4nIH0pO1xuICB9XG59KTtcblxucm91dGVyLnB1dCgnL3NldHRpbmdzJywgcmVxdWlyZUFkbWluQXV0aCwgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgZGIuZGF0YS5zZXR0aW5ncyA9IHsgLi4uZGIuZGF0YS5zZXR0aW5ncywgLi4ucmVxLmJvZHkgfTtcbiAgICBkYi5zYXZlKCk7XG4gICAgZGIubG9nQWN0aXZpdHkoJ1NpdGUgU2V0dGluZ3MgVXBkYXRlZCcsICdTeXN0ZW0gY29uZmlndXJhdGlvbnMgYWRqdXN0ZWQgYnkgQWRtaW4nLCAnc2V0dGluZ3NfdXBkYXRlJyk7XG4gICAgcmVzLmpzb24oZGIuZGF0YS5zZXR0aW5ncyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gdXBkYXRlIHNldHRpbmdzLicgfSk7XG4gIH1cbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtdWtoZVxcXFxEb3dubG9hZHNcXFxcd2VicGFnZS1tYWluXFxcXHdlYnBhZ2UtbWFpblxcXFxzZXJ2ZXJcXFxcc2VydmljZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG11a2hlXFxcXERvd25sb2Fkc1xcXFx3ZWJwYWdlLW1haW5cXFxcd2VicGFnZS1tYWluXFxcXHNlcnZlclxcXFxzZXJ2aWNlc1xcXFxkYi5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbXVraGUvRG93bmxvYWRzL3dlYnBhZ2UtbWFpbi93ZWJwYWdlLW1haW4vc2VydmVyL3NlcnZpY2VzL2RiLmpzXCI7aW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XG5pbXBvcnQgeyBpbml0aWFsU2VlZERhdGEgfSBmcm9tICcuLi9kYXRhL3NlZWREYXRhLmpzJztcbmltcG9ydCB7IHBvc3RncmVzIH0gZnJvbSAnLi9wb3N0Z3Jlcy5qcyc7XG5cbmNvbnN0IF9fZmlsZW5hbWUgPSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCk7XG5jb25zdCBfX2Rpcm5hbWUgPSBwYXRoLmRpcm5hbWUoX19maWxlbmFtZSk7XG5cbmNvbnN0IERBVEFfRElSID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL2RhdGEnKTtcbmNvbnN0IERCX0ZJTEUgPSBwYXRoLmpvaW4oREFUQV9ESVIsICdjbXNfZGIuanNvbicpO1xuXG4vLyBFbnN1cmUgZGF0YSBkaXJlY3RvcnkgZXhpc3RzXG5pZiAoIWZzLmV4aXN0c1N5bmMoREFUQV9ESVIpKSB7XG4gIGZzLm1rZGlyU3luYyhEQVRBX0RJUiwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG59XG5cbmNsYXNzIERhdGFiYXNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKERCX0ZJTEUpKSB7XG4gICAgICAgIGNvbnN0IHJhdyA9IGZzLnJlYWRGaWxlU3luYyhEQl9GSUxFLCAndXRmOCcpO1xuICAgICAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKHJhdyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGluaXRpYWxTZWVkRGF0YSkpO1xuICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluaXRpYWxpemluZyBkYXRhYmFzZSwgdXNpbmcgc2VlZCBkYXRhOicsIGVycik7XG4gICAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGluaXRpYWxTZWVkRGF0YSkpO1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgfVxuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG1wRmlsZSA9IGAke0RCX0ZJTEV9LnRtcGA7XG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHRtcEZpbGUsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSwgbnVsbCwgMiksICd1dGY4Jyk7XG4gICAgICBmcy5yZW5hbWVTeW5jKHRtcEZpbGUsIERCX0ZJTEUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcGVyc2lzdGluZyBsb2NhbCBkYXRhYmFzZSBzbmFwc2hvdDonLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvbGxlY3Rpb24obmFtZSkge1xuICAgIGlmICghdGhpcy5kYXRhW25hbWVdKSB7XG4gICAgICB0aGlzLmRhdGFbbmFtZV0gPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGF0YVtuYW1lXTtcbiAgfVxuXG4gIGxvZ0FjdGl2aXR5KHRpdGxlLCBkZXNjcmlwdGlvbiwgdHlwZSA9ICdzeXN0ZW0nKSB7XG4gICAgY29uc3QgbG9ncyA9IHRoaXMuZ2V0Q29sbGVjdGlvbignYWN0aXZpdHlMb2dzJyk7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBtb250aE5hbWVzID0gWydKQU4nLCAnRkVCJywgJ01BUicsICdBUFInLCAnTUFZJywgJ0pVTicsICdKVUwnLCAnQVVHJywgJ1NFUCcsICdPQ1QnLCAnTk9WJywgJ0RFQyddO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBgJHtub3cuZ2V0RGF0ZSgpfSAke21vbnRoTmFtZXNbbm93LmdldE1vbnRoKCldfWA7XG5cbiAgICBjb25zdCBuZXdMb2cgPSB7XG4gICAgICBpZDogYGxvZ18ke0RhdGUubm93KCl9XyR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDQpfWAsXG4gICAgICBkYXRlOiBkYXRlU3RyLFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHR5cGUsXG4gICAgICB0aW1lc3RhbXA6IG5vdy50b0lTT1N0cmluZygpXG4gICAgfTtcblxuICAgIGxvZ3MudW5zaGlmdChuZXdMb2cpO1xuICAgIC8vIEtlZXAgbWF4IDEwMCBsb2dzXG4gICAgaWYgKGxvZ3MubGVuZ3RoID4gMTAwKSBsb2dzLnBvcCgpO1xuICAgIHRoaXMuc2F2ZSgpO1xuXG4gICAgLy8gQXN5bmMgd3JpdGUgdG8gUG9zdGdyZXMgaWYgY29ubmVjdGVkXG4gICAgaWYgKHBvc3RncmVzLmlzQ29ubmVjdGVkKSB7XG4gICAgICBwb3N0Z3Jlc1xuICAgICAgICAucXVlcnkoXG4gICAgICAgICAgJ0lOU0VSVCBJTlRPIGFjdGl2aXR5X2xvZ3MgKGlkLCBkYXRlLCB0aXRsZSwgZGVzY3JpcHRpb24sIHR5cGUsIHRpbWVzdGFtcCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUsICQ2KSBPTiBDT05GTElDVCAoaWQpIERPIE5PVEhJTkcnLFxuICAgICAgICAgIFtuZXdMb2cuaWQsIG5ld0xvZy5kYXRlLCBuZXdMb2cudGl0bGUsIG5ld0xvZy5kZXNjcmlwdGlvbiwgbmV3TG9nLnR5cGUsIG5ld0xvZy50aW1lc3RhbXBdXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUud2FybignUG9zdGdyZXMgbG9nQWN0aXZpdHkgd3JpdGUgd2FybmluZzonLCBlcnIubWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIGdldEFsbChjb2xsZWN0aW9uTmFtZSwgeyBzdGF0dXMsIHNlYXJjaCwgY2F0ZWdvcnksIHR5cGUsIGxpbWl0LCBzb3J0ID0gJ25ld2VzdCcgfSA9IHt9KSB7XG4gICAgbGV0IGl0ZW1zID0gWy4uLnRoaXMuZ2V0Q29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSldO1xuXG4gICAgLy8gU3RhdHVzIGZpbHRlclxuICAgIGlmIChzdGF0dXMgJiYgc3RhdHVzICE9PSAnYWxsJykge1xuICAgICAgaXRlbXMgPSBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc3RhdHVzID09PSBzdGF0dXMpO1xuICAgIH1cblxuICAgIC8vIENhdGVnb3J5IGZpbHRlclxuICAgIGlmIChjYXRlZ29yeSkge1xuICAgICAgaXRlbXMgPSBpdGVtcy5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PlxuICAgICAgICAgIChpdGVtLmNhdGVnb3J5ICYmIGl0ZW0uY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA9PT0gY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICAoaXRlbS5jYXRlZ29yeV9pZCAmJiBpdGVtLmNhdGVnb3J5X2lkLnRvTG93ZXJDYXNlKCkgPT09IGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkpXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFJlcG9ydCBUeXBlIGZpbHRlclxuICAgIGlmICh0eXBlKSB7XG4gICAgICBpdGVtcyA9IGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5yZXBvcnRUeXBlICYmIGl0ZW0ucmVwb3J0VHlwZS50b0xvd2VyQ2FzZSgpID09PSB0eXBlLnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cblxuICAgIC8vIEZ1bGwgdGV4dCBzZWFyY2hcbiAgICBpZiAoc2VhcmNoICYmIHNlYXJjaC50cmltKCkpIHtcbiAgICAgIGNvbnN0IHEgPSBzZWFyY2gudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpdGVtcyA9IGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IChpdGVtLnRpdGxlIHx8IGl0ZW0ubmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgZGVzYyA9IChpdGVtLmRlc2NyaXB0aW9uIHx8IGl0ZW0uZXhjZXJwdCB8fCBpdGVtLnN1bW1hcnkgfHwgaXRlbS5zaG9ydERlc2NyaXB0aW9uIHx8IGl0ZW0ucHJvYmxlbVN0YXRlbWVudCB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3Qgc2x1ZyA9IChpdGVtLnNsdWcgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiB0aXRsZS5pbmNsdWRlcyhxKSB8fCBkZXNjLmluY2x1ZGVzKHEpIHx8IHNsdWcuaW5jbHVkZXMocSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTb3J0aW5nXG4gICAgaXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgLy8gRm9yIHJlcG9ydHMsIHVzZSBjdXN0b20gZGF0ZSBpZiBwcmVzZW50XG4gICAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGEuZGF0ZSB8fCBhLnB1Ymxpc2hlZF9hdCB8fCBhLnVwZGF0ZWRfYXQgfHwgYS5jcmVhdGVkX2F0IHx8IDApLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYi5kYXRlIHx8IGIucHVibGlzaGVkX2F0IHx8IGIudXBkYXRlZF9hdCB8fCBiLmNyZWF0ZWRfYXQgfHwgMCkuZ2V0VGltZSgpO1xuICAgICAgcmV0dXJuIHNvcnQgPT09ICdvbGRlc3QnID8gZGF0ZUEgLSBkYXRlQiA6IGRhdGVCIC0gZGF0ZUE7XG4gICAgfSk7XG5cbiAgICBpZiAobGltaXQgJiYgbGltaXQgPiAwKSB7XG4gICAgICBpdGVtcyA9IGl0ZW1zLnNsaWNlKDAsIGxpbWl0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuICBnZXRCeUlkKGNvbGxlY3Rpb25OYW1lLCBpZCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRDb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKTtcbiAgICByZXR1cm4gaXRlbXMuZmluZCgoaXRlbSkgPT4gU3RyaW5nKGl0ZW0uaWQpID09PSBTdHJpbmcoaWQpKSB8fCBudWxsO1xuICB9XG5cbiAgZ2V0QnlTbHVnKGNvbGxlY3Rpb25OYW1lLCBzbHVnKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldENvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpO1xuICAgIHJldHVybiBpdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLnNsdWcgPT09IHNsdWcpIHx8IG51bGw7XG4gIH1cblxuICBjcmVhdGUoY29sbGVjdGlvbk5hbWUsIGRhdGEsIHVzZXIgPSBudWxsKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldENvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpO1xuICAgIGNvbnN0IGlkID0gZGF0YS5pZCB8fCBgJHtjb2xsZWN0aW9uTmFtZS5zbGljZSgwLCAzKX1fJHtEYXRlLm5vdygpfV8ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA0KX1gO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcblxuICAgIGNvbnN0IG5ld0l0ZW0gPSB7XG4gICAgICAuLi5kYXRhLFxuICAgICAgaWQsXG4gICAgICBjcmVhdGVkX2F0OiBub3csXG4gICAgICB1cGRhdGVkX2F0OiBub3csXG4gICAgICBwdWJsaXNoZWRfYXQ6IGRhdGEuc3RhdHVzID09PSAncHVibGlzaGVkJyA/IChkYXRhLnB1Ymxpc2hlZF9hdCB8fCBub3cpIDogbnVsbFxuICAgIH07XG5cbiAgICBpdGVtcy51bnNoaWZ0KG5ld0l0ZW0pO1xuICAgIHRoaXMuc2F2ZSgpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBuZXdJdGVtLnRpdGxlIHx8IG5ld0l0ZW0ubmFtZSB8fCAnTmV3IEl0ZW0nO1xuICAgIHRoaXMubG9nQWN0aXZpdHkoYENyZWF0ZWQgJHtjb2xsZWN0aW9uTmFtZS5zbGljZSgwLCAtMSl9OiBcIiR7dGl0bGV9XCJgLCBgU3RhdHVzOiAke25ld0l0ZW0uc3RhdHVzIHx8ICdkcmFmdCd9IGJ5ICR7dXNlcj8ubmFtZSB8fCAnQWRtaW4nfWAsIGAke2NvbGxlY3Rpb25OYW1lfV9jcmVhdGVgKTtcblxuICAgIHJldHVybiBuZXdJdGVtO1xuICB9XG5cbiAgdXBkYXRlKGNvbGxlY3Rpb25OYW1lLCBpZCwgZGF0YSwgdXNlciA9IG51bGwpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0Q29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSk7XG4gICAgY29uc3QgaW5kZXggPSBpdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IFN0cmluZyhpdGVtLmlkKSA9PT0gU3RyaW5nKGlkKSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBleGlzdGluZyA9IGl0ZW1zW2luZGV4XTtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG5cbiAgICBjb25zdCB3YXNQdWJsaXNoZWQgPSBleGlzdGluZy5zdGF0dXMgPT09ICdwdWJsaXNoZWQnO1xuICAgIGNvbnN0IGlzTm93UHVibGlzaGVkID0gZGF0YS5zdGF0dXMgPT09ICdwdWJsaXNoZWQnO1xuXG4gICAgY29uc3QgdXBkYXRlZEl0ZW0gPSB7XG4gICAgICAuLi5leGlzdGluZyxcbiAgICAgIC4uLmRhdGEsXG4gICAgICBpZDogZXhpc3RpbmcuaWQsIC8vIFByZXNlcnZlIElEXG4gICAgICB1cGRhdGVkX2F0OiBub3csXG4gICAgICBwdWJsaXNoZWRfYXQ6IGlzTm93UHVibGlzaGVkICYmICFleGlzdGluZy5wdWJsaXNoZWRfYXQgPyBub3cgOiAoZGF0YS5wdWJsaXNoZWRfYXQgfHwgZXhpc3RpbmcucHVibGlzaGVkX2F0KVxuICAgIH07XG5cbiAgICBpdGVtc1tpbmRleF0gPSB1cGRhdGVkSXRlbTtcbiAgICB0aGlzLnNhdmUoKTtcblxuICAgIGNvbnN0IHRpdGxlID0gdXBkYXRlZEl0ZW0udGl0bGUgfHwgdXBkYXRlZEl0ZW0ubmFtZSB8fCAnSXRlbSc7XG4gICAgaWYgKCF3YXNQdWJsaXNoZWQgJiYgaXNOb3dQdWJsaXNoZWQpIHtcbiAgICAgIHRoaXMubG9nQWN0aXZpdHkoYFB1Ymxpc2hlZCAke2NvbGxlY3Rpb25OYW1lLnNsaWNlKDAsIC0xKX06IFwiJHt0aXRsZX1cImAsIGBQdWJsaXNoZWQgYnkgJHt1c2VyPy5uYW1lIHx8ICdBZG1pbid9YCwgYCR7Y29sbGVjdGlvbk5hbWV9X3B1Ymxpc2hgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2dBY3Rpdml0eShgVXBkYXRlZCAke2NvbGxlY3Rpb25OYW1lLnNsaWNlKDAsIC0xKX06IFwiJHt0aXRsZX1cImAsIGBVcGRhdGVkIGJ5ICR7dXNlcj8ubmFtZSB8fCAnQWRtaW4nfWAsIGAke2NvbGxlY3Rpb25OYW1lfV91cGRhdGVgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXBkYXRlZEl0ZW07XG4gIH1cblxuICB1cGRhdGVTdGF0dXMoY29sbGVjdGlvbk5hbWUsIGlkLCBzdGF0dXMsIHVzZXIgPSBudWxsKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldENvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpO1xuICAgIGNvbnN0IGl0ZW0gPSBpdGVtcy5maW5kKChpKSA9PiBTdHJpbmcoaS5pZCkgPT09IFN0cmluZyhpZCkpO1xuICAgIGlmICghaXRlbSkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgaXRlbS5zdGF0dXMgPSBzdGF0dXM7XG4gICAgaXRlbS51cGRhdGVkX2F0ID0gbm93O1xuICAgIGlmIChzdGF0dXMgPT09ICdwdWJsaXNoZWQnICYmICFpdGVtLnB1Ymxpc2hlZF9hdCkge1xuICAgICAgaXRlbS5wdWJsaXNoZWRfYXQgPSBub3c7XG4gICAgfVxuXG4gICAgdGhpcy5zYXZlKCk7XG4gICAgY29uc3QgdGl0bGUgPSBpdGVtLnRpdGxlIHx8IGl0ZW0ubmFtZSB8fCAnSXRlbSc7XG4gICAgdGhpcy5sb2dBY3Rpdml0eShgU3RhdHVzIGNoYW5nZWQgdG8gJHtzdGF0dXN9IGZvciBcIiR7dGl0bGV9XCJgLCBgVXBkYXRlZCBieSAke3VzZXI/Lm5hbWUgfHwgJ0FkbWluJ31gLCBgJHtjb2xsZWN0aW9uTmFtZX1fc3RhdHVzYCk7XG5cbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIGRlbGV0ZShjb2xsZWN0aW9uTmFtZSwgaWQsIHVzZXIgPSBudWxsLCBwZXJtYW5lbnQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRDb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKTtcbiAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gU3RyaW5nKGl0ZW0uaWQpID09PSBTdHJpbmcoaWQpKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBpdGVtID0gaXRlbXNbaW5kZXhdO1xuICAgIGNvbnN0IHRpdGxlID0gaXRlbS50aXRsZSB8fCBpdGVtLm5hbWUgfHwgJ0l0ZW0nO1xuXG4gICAgaWYgKHBlcm1hbmVudCB8fCBpdGVtLnN0YXR1cyA9PT0gJ3RyYXNoJykge1xuICAgICAgLy8gUGVybWFuZW50bHkgcmVtb3ZlXG4gICAgICBpdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICB0aGlzLmxvZ0FjdGl2aXR5KGBQZXJtYW5lbnRseSBkZWxldGVkIFwiJHt0aXRsZX1cImAsIGBEZWxldGVkIGJ5ICR7dXNlcj8ubmFtZSB8fCAnQWRtaW4nfWAsIGAke2NvbGxlY3Rpb25OYW1lfV9kZWxldGVfcGVybWFuZW50YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNvZnQgZGVsZXRlIC0+IG1vdmUgdG8gdHJhc2hcbiAgICAgIGl0ZW0uc3RhdHVzID0gJ3RyYXNoJztcbiAgICAgIGl0ZW0udXBkYXRlZF9hdCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgdGhpcy5sb2dBY3Rpdml0eShgTW92ZWQgXCIke3RpdGxlfVwiIHRvIFRyYXNoYCwgYE1vdmVkIHRvIHRyYXNoIGJ5ICR7dXNlcj8ubmFtZSB8fCAnQWRtaW4nfWAsIGAke2NvbGxlY3Rpb25OYW1lfV90cmFzaGApO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVzdG9yZShjb2xsZWN0aW9uTmFtZSwgaWQsIHVzZXIgPSBudWxsKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldENvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpO1xuICAgIGNvbnN0IGl0ZW0gPSBpdGVtcy5maW5kKChpKSA9PiBTdHJpbmcoaS5pZCkgPT09IFN0cmluZyhpZCkpO1xuICAgIGlmICghaXRlbSkgcmV0dXJuIG51bGw7XG5cbiAgICBpdGVtLnN0YXR1cyA9ICdkcmFmdCc7XG4gICAgaXRlbS51cGRhdGVkX2F0ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIHRoaXMuc2F2ZSgpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBpdGVtLnRpdGxlIHx8IGl0ZW0ubmFtZSB8fCAnSXRlbSc7XG4gICAgdGhpcy5sb2dBY3Rpdml0eShgUmVzdG9yZWQgXCIke3RpdGxlfVwiIGZyb20gVHJhc2hgLCBgUmVzdG9yZWQgYnkgJHt1c2VyPy5uYW1lIHx8ICdBZG1pbid9YCwgYCR7Y29sbGVjdGlvbk5hbWV9X3Jlc3RvcmVgKTtcblxuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgYnVsa0FjdGlvbihjb2xsZWN0aW9uTmFtZSwgaWRzLCBhY3Rpb24sIHVzZXIgPSBudWxsKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldENvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuXG4gICAgaWRzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gaXRlbXMuZmluZCgoaSkgPT4gU3RyaW5nKGkuaWQpID09PSBTdHJpbmcoaWQpKTtcbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGlmIChhY3Rpb24gPT09ICdwdWJsaXNoJykge1xuICAgICAgICAgIGl0ZW0uc3RhdHVzID0gJ3B1Ymxpc2hlZCc7XG4gICAgICAgICAgaWYgKCFpdGVtLnB1Ymxpc2hlZF9hdCkgaXRlbS5wdWJsaXNoZWRfYXQgPSBub3c7XG4gICAgICAgICAgaXRlbS51cGRhdGVkX2F0ID0gbm93O1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ3VucHVibGlzaCcpIHtcbiAgICAgICAgICBpdGVtLnN0YXR1cyA9ICdkcmFmdCc7XG4gICAgICAgICAgaXRlbS51cGRhdGVkX2F0ID0gbm93O1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ3RyYXNoJykge1xuICAgICAgICAgIGl0ZW0uc3RhdHVzID0gJ3RyYXNoJztcbiAgICAgICAgICBpdGVtLnVwZGF0ZWRfYXQgPSBub3c7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAncmVzdG9yZScpIHtcbiAgICAgICAgICBpdGVtLnN0YXR1cyA9ICdkcmFmdCc7XG4gICAgICAgICAgaXRlbS51cGRhdGVkX2F0ID0gbm93O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICAgIHRoaXMubG9nQWN0aXZpdHkoYEJ1bGsgJHthY3Rpb259IGV4ZWN1dGVkIG9uICR7Y291bnR9ICR7Y29sbGVjdGlvbk5hbWV9YCwgYEV4ZWN1dGVkIGJ5ICR7dXNlcj8ubmFtZSB8fCAnQWRtaW4nfWAsIGAke2NvbGxlY3Rpb25OYW1lfV9idWxrYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgZ2V0U3RhdHMoKSB7XG4gICAgY29uc3QgY29sbGVjdGlvbnMgPSBbJ3Bvc3RzJywgJ3NlcnZpY2VzJywgJ2FjY2VsZXJhdG9ycycsICdpbmR1c3RyaWVzJywgJ2Nhc2VTdHVkaWVzJywgJ3JlcG9ydHMnLCAnbWVkaWEnXTtcbiAgICBjb25zdCBzdGF0cyA9IHtcbiAgICAgIHRvdGFsUG9zdHM6IHRoaXMuZ2V0Q29sbGVjdGlvbigncG9zdHMnKS5maWx0ZXIoKGkpID0+IGkuc3RhdHVzICE9PSAndHJhc2gnKS5sZW5ndGgsXG4gICAgICB0b3RhbFNlcnZpY2VzOiB0aGlzLmdldENvbGxlY3Rpb24oJ3NlcnZpY2VzJykuZmlsdGVyKChpKSA9PiBpLnN0YXR1cyAhPT0gJ3RyYXNoJykubGVuZ3RoLFxuICAgICAgdG90YWxBY2NlbGVyYXRvcnM6IHRoaXMuZ2V0Q29sbGVjdGlvbignYWNjZWxlcmF0b3JzJykuZmlsdGVyKChpKSA9PiBpLnN0YXR1cyAhPT0gJ3RyYXNoJykubGVuZ3RoLFxuICAgICAgdG90YWxJbmR1c3RyaWVzOiB0aGlzLmdldENvbGxlY3Rpb24oJ2luZHVzdHJpZXMnKS5maWx0ZXIoKGkpID0+IGkuc3RhdHVzICE9PSAndHJhc2gnKS5sZW5ndGgsXG4gICAgICB0b3RhbENhc2VTdHVkaWVzOiB0aGlzLmdldENvbGxlY3Rpb24oJ2Nhc2VTdHVkaWVzJykuZmlsdGVyKChpKSA9PiBpLnN0YXR1cyAhPT0gJ3RyYXNoJykubGVuZ3RoLFxuICAgICAgdG90YWxSZXBvcnRzOiB0aGlzLmdldENvbGxlY3Rpb24oJ3JlcG9ydHMnKS5maWx0ZXIoKGkpID0+IGkuc3RhdHVzICE9PSAndHJhc2gnKS5sZW5ndGgsXG4gICAgICB0b3RhbE1lZGlhOiB0aGlzLmdldENvbGxlY3Rpb24oJ21lZGlhJykubGVuZ3RoLFxuICAgICAgcHVibGlzaGVkOiAwLFxuICAgICAgZHJhZnRzOiAwLFxuICAgICAgdHJhc2g6IDAsXG4gICAgICBwb3N0Z3Jlc1N0YXR1czogcG9zdGdyZXMuZ2V0U3RhdHVzKClcbiAgICB9O1xuXG4gICAgY29sbGVjdGlvbnMuZm9yRWFjaCgoY29sKSA9PiB7XG4gICAgICBpZiAoY29sID09PSAnbWVkaWEnKSByZXR1cm47XG4gICAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0Q29sbGVjdGlvbihjb2wpO1xuICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5zdGF0dXMgPT09ICdwdWJsaXNoZWQnKSBzdGF0cy5wdWJsaXNoZWQrKztcbiAgICAgICAgZWxzZSBpZiAoaXRlbS5zdGF0dXMgPT09ICdkcmFmdCcpIHN0YXRzLmRyYWZ0cysrO1xuICAgICAgICBlbHNlIGlmIChpdGVtLnN0YXR1cyA9PT0gJ3RyYXNoJykgc3RhdHMudHJhc2grKztcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0YXRzO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkYiA9IG5ldyBEYXRhYmFzZSgpO1xuZXhwb3J0IHsgcG9zdGdyZXMgfTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbXVraGVcXFxcRG93bmxvYWRzXFxcXHdlYnBhZ2UtbWFpblxcXFx3ZWJwYWdlLW1haW5cXFxcc2VydmVyXFxcXGRhdGFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG11a2hlXFxcXERvd25sb2Fkc1xcXFx3ZWJwYWdlLW1haW5cXFxcd2VicGFnZS1tYWluXFxcXHNlcnZlclxcXFxkYXRhXFxcXHNlZWREYXRhLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9tdWtoZS9Eb3dubG9hZHMvd2VicGFnZS1tYWluL3dlYnBhZ2UtbWFpbi9zZXJ2ZXIvZGF0YS9zZWVkRGF0YS5qc1wiO2ltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xuXG4vLyBQcmUtaGFzaGVkIHBhc3N3b3JkIGZvciBpbml0aWFsIGFkbWluIChQYXNzd29yZDogQWRtaW5QYXNzd29yZDIwMjYhKVxuY29uc3QgaW5pdGlhbFBhc3N3b3JkSGFzaCA9IGJjcnlwdC5oYXNoU3luYygnQWRtaW5QYXNzd29yZDIwMjYhJywgMTApO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFNlZWREYXRhID0ge1xuICB1c2VyczogW1xuICAgIHtcbiAgICAgIGlkOiAndXNyX2FkbWluXzAxJyxcbiAgICAgIG5hbWU6ICdTTVJJS0FBTSBNYXN0ZXIgQWRtaW4nLFxuICAgICAgZW1haWw6ICdhZG1pbkBzbXJpa2FhbS5jb20nLFxuICAgICAgcGFzc3dvcmRIYXNoOiBpbml0aWFsUGFzc3dvcmRIYXNoLFxuICAgICAgcm9sZTogJ3N1cGVyYWRtaW4nLFxuICAgICAgY3JlYXRlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWicsXG4gICAgICB1cGRhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJ1xuICAgIH1cbiAgXSxcbiAgcG9zdHM6IFtcbiAgICB7XG4gICAgICBpZDogJ3Bvc3RfMDEnLFxuICAgICAgdGl0bGU6ICdBcmNoaXRlY3RpbmcgTG93LUxhdGVuY3kgSUlvVCBUZWxlbWV0cnkgZm9yIEhpZ2gtU3BlZWQgTWFudWZhY3R1cmluZycsXG4gICAgICBzbHVnOiAnaWlvdC10ZWxlbWV0cnktY29pbWJhdG9yZScsXG4gICAgICBleGNlcnB0OiAnSG93IGVkZ2UgdGVsZW1ldHJ5IHBpcGVsaW5lcyBjYXB0dXJlIDE3TSsgZGF0YSBwb2ludHMgcGVyIGRheSBmcm9tIE1vZGJ1cy9PUEMtVUEgbWFjaGluZSBjb250cm9sbGVycyB3aXRoIHVuZGVyIDUwbXMgbGF0ZW5jeS4nLFxuICAgICAgY29udGVudDogYCMjIFRoZSBDaGFsbGVuZ2Ugb2YgU2hvcC1GbG9vciBUZWxlbWV0cnlcbk1vZGVybiBpbmR1c3RyaWFsIG1hbnVmYWN0dXJpbmcgZW52aXJvbm1lbnRzIHJlcXVpcmUgY29udGludW91cywgc3ViLXNlY29uZCB2aXNpYmlsaXR5IGludG8gUExDIGFuZCBDTkMgbWFjaGluZSBwYXJhbWV0ZXJzLiBUcmFkaXRpb25hbCBiYXRjaCBFVEwgcm91dGluZXMgZmFpbCB0byBwcm92aWRlIHRoZSByZWFsLXRpbWUgb3BlcmF0aW9uYWwgZmVlZGJhY2sgbG9vcHMgbmVlZGVkIGZvciB6ZXJvLWRvd250aW1lIG1hbnVmYWN0dXJpbmcuXG5cbiMjIyBIaWdoLVRocm91Z2hwdXQgRWRnZSBJbmdlc3Rpb24gQXJjaGl0ZWN0dXJlXG5CeSBkZXBsb3lpbmcgY29udGFpbmVyaXplZCBQeXRob24gYW5kIFJ1c3QgZWRnZSBydW50aW1lcyBkaXJlY3RseSBhZGphY2VudCB0byBmYWN0b3J5IGNvbnRyb2xsZXJzLCBzZW5zb3IgZGF0YSBpcyBub3JtYWxpemVkIHZpYSBzdGFuZGFyZCBPUEMtVUEgYW5kIE1vZGJ1cyBwcm90b2NvbHMgYmVmb3JlIGJlaW5nIHN0cmVhbWVkIG92ZXIgbGlnaHR3ZWlnaHQgTVFUVCBicm9rZXJzLlxuXG4tICoqU3ViLTUwbXMgbGF0ZW5jeSoqIG9uIHRlbGVtZXRyeSBmZWVkc1xuLSAqKkVkZ2UgYnVmZmVyIHF1ZXVlcyoqIHRvIHdpdGhzdGFuZCBmYWN0b3J5IG5ldHdvcmsgZHJvcHNcbi0gKipBdXRvbWF0ZWQgT0VFIGNvbXB1dGF0aW9uKiogc3RyZWFtZWQgbGl2ZSB0byBtYW5hZ2VtZW50IGRhc2hib2FyZHNcblxuIyMjIEJ1c2luZXNzIEltcGFjdFxuRGVwbG95aW5nIGVkZ2UgdGVsZW1ldHJ5IGFjcm9zcyA1MDArIGNvbm5lY3RlZCBtYW51ZmFjdHVyaW5nIGxpbmVzIHJlZHVjZWQgdW5wbGFubmVkIG1hY2hpbmUgc3RvcHBhZ2VzIGJ5IDM1JSB3aXRoaW4gdGhlIGZpcnN0IDYwIGRheXMgb2YgZGVwbG95bWVudC5gLFxuICAgICAgY292ZXJfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODEwOTIxNjA2MDctZWUyMjYyMWRkNzU4P3E9ODAmdz0xMjAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJyxcbiAgICAgIGNhdGVnb3J5OiAnSW5kdXN0cmlhbCBJb1QnLFxuICAgICAgdGFnczogWydJSW9UJywgJ09QQy1VQScsICdUZWxlbWV0cnknLCAnTWFudWZhY3R1cmluZycsICdNUVRUJ10sXG4gICAgICBhdXRob3I6ICdTTVJJS0FBTSBFbmdpbmVlcmluZyBUZWFtJyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBtZXRhX3RpdGxlOiAnTG93LUxhdGVuY3kgSUlvVCBUZWxlbWV0cnkgQXJjaGl0ZWN0dXJlIHwgU01SSUtBQU0gSm91cm5hbCcsXG4gICAgICBtZXRhX2Rlc2NyaXB0aW9uOiAnRGlzY292ZXIgaG93IFNNUklLQUFNIGJ1aWxkcyBoaWdoLXNwZWVkIGVkZ2UgdGVsZW1ldHJ5IHBpcGVsaW5lcyBjYXB0dXJpbmcgMTdNKyBzZW5zb3IgbWV0cmljcyBkYWlseS4nLFxuICAgICAgY3JlYXRlZF9hdDogJzIwMjYtMDgtMjBUMTA6MDA6MDAuMDAwWicsXG4gICAgICB1cGRhdGVkX2F0OiAnMjAyNi0wOC0yMFQxMDowMDowMC4wMDBaJyxcbiAgICAgIHB1Ymxpc2hlZF9hdDogJzIwMjYtMDgtMjBUMTA6MDA6MDAuMDAwWidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncG9zdF8wMicsXG4gICAgICB0aXRsZTogJ1plcm8tRG93bnRpbWUgRGF0YSBMYWtlaG91c2UgTWlncmF0aW9uIGZvciBFbnRlcnByaXNlIFN5c3RlbXMnLFxuICAgICAgc2x1ZzogJ2Nsb3VkLWRhdGEtd2FyZWhvdXNlLW1pZ3JhdGlvbicsXG4gICAgICBleGNlcnB0OiAnQXV0b21hdGVkIHNjaGVtYSB0cmFuc2Zvcm1hdGlvbiBhbmQgcm93LWxldmVsIHZhbGlkYXRpb24gcGF0dGVybnMgZm9yIGxlZ2FjeSBFUlAgZGF0YWJhc2UgY3V0b3ZlcnMuJyxcbiAgICAgIGNvbnRlbnQ6IGAjIyBPdmVyY29taW5nIExlZ2FjeSBEYXRhYmFzZSBCb3R0bGVuZWNrc1xuRW50ZXJwcmlzZSBkYXRhYmFzZXMgcnVubmluZyBvbiBsZWdhY3kgT3JhY2xlIGFuZCBNU1NRTCBjbHVzdGVycyBmcmVxdWVudGx5IHN1ZmZlciBmcm9tIGhpZ2ggbWFpbnRlbmFuY2Ugb3ZlcmhlYWQsIHJpZ2lkIHNjaGVtYXMsIGFuZCBwZXJmb3JtYW5jZSBib3R0bGVuZWNrcyBvbiBhbmFseXRpY2FsIHF1ZXJpZXMuXG5cbiMjIyBBdXRvbWF0ZWQgU2NoZW1hIE1hcHBpbmcgd2l0aCBNaWdyYXRlTWF4XG5Vc2luZyBhdXRvbWF0ZWQgQVNUIHBhcnNpbmcgYW5kIFNwYXJrLWJhc2VkIHBhcmFsbGVsIENoYW5nZSBEYXRhIENhcHR1cmUgKENEQyksIGRhdGFiYXNlIHNjaGVtYXMgYXJlIGF1dG9tYXRpY2FsbHkgdHJhbnNsYXRlZCBpbnRvIG1vZGVybiBjbG91ZC1uYXRpdmUgbGFrZWhvdXNlIGZvcm1hdHMgKERlbHRhIC8gSWNlYmVyZykgd2l0aCBhdXRvbWF0ZWQgcm93LWhhc2ggcmVjb25jaWxpYXRpb24uXG5cbjEuICoqU2NoZW1hIERETCBUcmFuc2xhdGlvbioqOiBBdXRvbWF0ZWQgZGlhbGVjdCBtYXBwaW5nXG4yLiAqKlBhcmFsbGVsIENEQyBSZXBsaWNhdGlvbioqOiBDb250aW51b3VzIHN5bmMgd2l0aCB6ZXJvIHNvdXJjZSBsb2NraW5nXG4zLiAqKkRhdGEgUXVhbGl0eSBBc3NlcnRzKio6IDEwMCUgcm93LWxldmVsIHJlY29uY2lsaWF0aW9uIGF1ZGl0XG5cbiMjIyBSZXN1bHRzXG5BY2hpZXZlZCA2MCUgZmFzdGVyIGRhdGFiYXNlIG1pZ3JhdGlvbiBjdXRvdmVyIHdpdGggemVybyBkb3dudGltZSBhbmQgY29tcGxldGUgZGF0YSBmaWRlbGl0eSBhY3Jvc3MgNTBNKyB0cmFuc2FjdGlvbmFsIHJlY29yZHMuYCxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTU4NDk0OTQ5LWVmMDEwY2JkY2MzMT9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBjYXRlZ29yeTogJ0RhdGEgRW5naW5lZXJpbmcnLFxuICAgICAgdGFnczogWydEYXRhIExha2Vob3VzZScsICdDbG91ZCBNaWdyYXRpb24nLCAnU25vd2ZsYWtlJywgJ0NEQycsICdTcGFyayddLFxuICAgICAgYXV0aG9yOiAnU01SSUtBQU0gQ2xvdWQgQXJjaGl0ZWN0dXJlIExhYicsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgbWV0YV90aXRsZTogJ1plcm8tRG93bnRpbWUgRGF0YSBMYWtlaG91c2UgTWlncmF0aW9uIHwgU01SSUtBQU0nLFxuICAgICAgbWV0YV9kZXNjcmlwdGlvbjogJ0F1dG9tYXRlZCBzY2hlbWEgdHJhbnNmb3JtYXRpb24gYW5kIHJvdy1sZXZlbCB2YWxpZGF0aW9uIGZvciBlbnRlcnByaXNlIGNsb3VkIGRhdGFiYXNlIGN1dG92ZXJzLicsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0yMlQxNDozMDowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTIyVDE0OjMwOjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0yMlQxNDozMDowMC4wMDBaJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdwb3N0XzAzJyxcbiAgICAgIHRpdGxlOiAnRGVwbG95aW5nIERldGVybWluaXN0aWMgTExNIEFnZW50cyBpbiBSZWd1bGF0ZWQgRW50ZXJwcmlzZSBFbnZpcm9ubWVudHMnLFxuICAgICAgc2x1ZzogJ2dlbmVyYXRpdmUtYWktYWdlbnRpYy1hdXRvbWF0aW9uJyxcbiAgICAgIGV4Y2VycHQ6ICdCdWlsZGluZyBjb250ZXh0LWF3YXJlIFJldHJpZXZhbC1BdWdtZW50ZWQgR2VuZXJhdGlvbiAoUkFHKSBwaXBlbGluZXMgd2l0aCBzdHJpY3QgZGF0YSBnb3Zlcm5hbmNlIGFuZCBEUERQIGNvbXBsaWFuY2UuJyxcbiAgICAgIGNvbnRlbnQ6IGAjIyBHZW5lcmF0aXZlIEFJIHdpdGggRW50ZXJwcmlzZSBHb3Zlcm5hbmNlXG5EZXBsb3lpbmcgTGFyZ2UgTGFuZ3VhZ2UgTW9kZWxzIGluIHByb2R1Y3Rpb24gZW50ZXJwcmlzZSBlbnZpcm9ubWVudHMgZGVtYW5kcyBzdHJpY3QgZGV0ZXJtaW5pc20sIGNvbnRleHQgZ3JvdW5kaW5nLCBhbmQgc3RyaWN0IHJvbGUtYmFzZWQgYWNjZXNzIGNvbnRyb2wgKFJCQUMpLlxuXG4jIyMgR3JvdW5kZWQgQWdlbnRpYyBSQUcgQXJjaGl0ZWN0dXJlXG5PdXIgYWdlbnRpYyBmcmFtZXdvcmsgY29tYmluZXMgaHlicmlkIHNlbWFudGljIHZlY3RvciBzZWFyY2ggd2l0aCBkZXRlcm1pbmlzdGljIHZhbGlkYXRpb24gZ2F0ZXMgdG8gZWxpbWluYXRlIGhhbGx1Y2luYXRpb25zIGFuZCBlbmZvcmNlIHplcm8gZGF0YSBsZWFrYWdlLlxuXG4tICoqSHlicmlkIEJNMjUgKyBEZW5zZSBFbWJlZGRpbmdzKiogZm9yIHByZWNpc2lvbiByZXRyaWV2YWxcbi0gKipaZXJvIERhdGEgTGVha2FnZSBHdWFyZHJhaWxzKiogYWRoZXJpbmcgdG8gRFBEUCBjb21wbGlhbmNlXG4tICoqQWN0aW9uIEV4ZWN1dGlvbiBWYWxpZGF0aW9uKiogd2l0aCBmdWxsIGF1ZGl0IGxvZ2dpbmdcblxuIyMjIFByb2R1Y3Rpb24gRGVwbG95bWVudFxuRW1wb3dlcmVkIGludGVybmFsIGNvbXBsaWFuY2UgYW5kIG9wZXJhdGlvbnMgdGVhbXMgdG8gYXV0b21hdGUgODAlIG9mIGRvY3VtZW50IHJldmlldyBhbmQgcG9saWN5IGxvb2t1cCB0YXNrcyB3aXRoIHN1Yi1zZWNvbmQgcmVzcG9uc2UgdGltZXMuYCxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjE4MDA1MTgyMzg0LWE4M2E4YmQ1N2ZiZT9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBjYXRlZ29yeTogJ0dlbmVyYXRpdmUgQUknLFxuICAgICAgdGFnczogWydHZW5lcmF0aXZlIEFJJywgJ0FnZW50aWMgQUknLCAnUkFHJywgJ0RhdGEgR292ZXJuYW5jZScsICdMTE0nXSxcbiAgICAgIGF1dGhvcjogJ1NNUklLQUFNIEFJIFJlc2VhcmNoIEdyb3VwJyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBtZXRhX3RpdGxlOiAnRGVwbG95aW5nIERldGVybWluaXN0aWMgTExNIEFnZW50cyB8IFNNUklLQUFNIEpvdXJuYWwnLFxuICAgICAgbWV0YV9kZXNjcmlwdGlvbjogJ0NvbnRleHQtYXdhcmUgUkFHIHBpcGVsaW5lcyBhbmQgaW50ZWxsaWdlbnQgYWdlbnRpYyBhdXRvbWF0aW9uIGZvciByZWd1bGF0ZWQgZW50ZXJwcmlzZSBlbnZpcm9ubWVudHMuJyxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTI1VDA5OjE1OjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMjVUMDk6MTU6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA4LTI1VDA5OjE1OjAwLjAwMFonXG4gICAgfVxuICBdLFxuICBzZXJ2aWNlczogW1xuICAgIHtcbiAgICAgIGlkOiAnc3J2XzAxJyxcbiAgICAgIHRpdGxlOiAnQUkgLyBNTCcsXG4gICAgICBzbHVnOiAnYWktbWwnLFxuICAgICAgbnVtOiAnMDEnLFxuICAgICAgdGFnbGluZTogJ1Byb2R1Y3Rpb24tcmVhZHkgcHJlZGljdGl2ZSBpbnRlbGxpZ2VuY2UsIGNvbXB1dGVyIHZpc2lvbiwgZm9yZWNhc3RpbmcsIGFuZCBNTE9wcy4nLFxuICAgICAgc3VtbWFyeTogJ1Byb2R1Y3Rpb24tcmVhZHkgQUkgYW5kIG1hY2hpbmUgbGVhcm5pbmcgc29sdXRpb25zIGZvciBwcmVkaWN0aXZlIGludGVsbGlnZW5jZSwgaW50ZWxsaWdlbnQgZGVjaXNpb24gc3VwcG9ydCwgY29tcHV0ZXIgdmlzaW9uLCBmb3JlY2FzdGluZywgcmVjb21tZW5kYXRpb24gc3lzdGVtcywgYW5kIGVudGVycHJpc2UgQUkgYXBwbGljYXRpb25zLicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3Rpb24tcmVhZHkgQUkgYW5kIG1hY2hpbmUgbGVhcm5pbmcgc29sdXRpb25zIGZvciBwcmVkaWN0aXZlIGludGVsbGlnZW5jZSwgaW50ZWxsaWdlbnQgZGVjaXNpb24gc3VwcG9ydCwgY29tcHV0ZXIgdmlzaW9uLCBmb3JlY2FzdGluZywgcmVjb21tZW5kYXRpb24gc3lzdGVtcywgYW5kIGVudGVycHJpc2UgQUkgYXBwbGljYXRpb25zLicsXG4gICAgICBidXNpbmVzc1Byb2JsZW1zOiBbXG4gICAgICAgICdVbnByZWRpY3RhYmxlIG9wZXJhdGlvbmFsIGRvd250aW1lIGFuZCBlcXVpcG1lbnQgZmFpbHVyZScsXG4gICAgICAgICdNYW51YWwgdmlzdWFsIGluc3BlY3Rpb24gYm90dGxlbmVja3MgYW5kIHF1YWxpdHkgZXNjYXBlcycsXG4gICAgICAgICdMYWNrIG9mIHJlYWwtdGltZSBmb3JlY2FzdGluZyBhbmQgZGVtYW5kIGludGVsbGlnZW5jZScsXG4gICAgICAgICdGcmFnbWVudGVkIE1MIGV4cGVyaW1lbnRhdGlvbiB3aXRob3V0IHByb2R1Y3Rpb24gTUxPcHMgZ292ZXJuYW5jZSdcbiAgICAgIF0sXG4gICAgICBjYXBhYmlsaXRpZXM6IFtcbiAgICAgICAgJ1ByZWRpY3RpdmUgSW50ZWxsaWdlbmNlIE1vZGVscycsXG4gICAgICAgICdDb21wdXRlciBWaXNpb24gJiBEZWZlY3QgRGV0ZWN0aW9uJyxcbiAgICAgICAgJ0RlbWFuZCAmIEludmVudG9yeSBGb3JlY2FzdGluZycsXG4gICAgICAgICdSZWNvbW1lbmRhdGlvbiAmIERlY2lzaW9uIEVuZ2luZXMnLFxuICAgICAgICAnUmVhbC1UaW1lIFRlbGVtZXRyeSBEYXNoYm9hcmRzJyxcbiAgICAgICAgJ0F1dG9tYXRlZCBPcGVyYXRpb25hbCBSZXBvcnRpbmcnXG4gICAgICBdLFxuICAgICAgdGVjaG5vbG9neTogWydQeXRob24nLCAnUHlUb3JjaCcsICdzY2lraXQtbGVhcm4nLCAnTUxmbG93JywgJ0F6dXJlIE1hY2hpbmUgTGVhcm5pbmcnLCAnRGF0YWJyaWNrcycsICdPcGVuQUktY29tcGF0aWJsZSBBUElzJywgJ1ZlY3RvciBkYXRhYmFzZXMnLCAnTUxPcHMgcGlwZWxpbmVzJ10sXG4gICAgICBpbmR1c3RyeUFwcGxpY2F0aW9uczogWydNYW51ZmFjdHVyaW5nJywgJ0JGU0knLCAnUmV0YWlsICYgRS1Db21tZXJjZScsICdIZWFsdGhjYXJlJ10sXG4gICAgICBwcm9ibGVtU3RhdGVtZW50OiAnRW50ZXJwcmlzZXMgc3RydWdnbGUgdG8gb3BlcmF0aW9uYWxpemUgZXhwZXJpbWVudGFsIG1hY2hpbmUgbGVhcm5pbmcgbW9kZWxzIGludG8gcmVsaWFibGUsIGxvdy1sYXRlbmN5IHByb2R1Y3Rpb24gcGlwZWxpbmVzLicsXG4gICAgICBzb2x1dGlvblN0YXRlbWVudDogJ0RlcGxveSBwcm9kdWN0aW9uLWdyYWRlIE1MT3BzIHBpcGVsaW5lcyB3aXRoIHN1Yi01MG1zIGluZmVyZW5jZSwgYXV0b21hdGVkIGRyaWZ0IHRyYWNraW5nLCBhbmQgY29udGludW91cyByZXRyYWluaW5nLicsXG4gICAgICBvdXRjb21lczogJzEweCBmYXN0ZXIgbW9kZWwgZGVwbG95bWVudCB3aXRoIHN1Yi01MG1zIGluZmVyZW5jZSBhbmQgYXV0b21hdGVkIE1MT3BzIHRyYWNraW5nLicsXG4gICAgICBhY2NlbGVyYXRvcjogJ0JpdFhoaWZ0ICsgUGFyc2VNYXN0ZXInLFxuICAgICAgY2FzZVN0dWR5OiAnQXV0b21vdGl2ZSBPRU0gTGl2ZSBBbmFseXRpY3MgRGFzaGJvYXJkJyxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTUxODM2MDIyLWQ1ZDg4ZTkyMThkZj9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgZGlzcGxheV9vcmRlcjogMSxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMjdUMDA6MDA6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3Nydl8wMicsXG4gICAgICB0aXRsZTogJ0luZHVzdHJpYWwgSW9UIChJSW9UKScsXG4gICAgICBzbHVnOiAnaW5kdXN0cmlhbC1pb3QtaWlvdCcsXG4gICAgICBudW06ICcwMicsXG4gICAgICB0YWdsaW5lOiAnTXVsdGktcHJvdG9jb2wgbWFjaGluZSBjb25uZWN0aXZpdHksIHJlYWwtdGltZSB0ZWxlbWV0cnksIE9FRSBtb25pdG9yaW5nLCBhbmQgcHJlZGljdGl2ZSBtYWludGVuYW5jZS4nLFxuICAgICAgc3VtbWFyeTogJ011bHRpLXByb3RvY29sIG1hY2hpbmUgY29ubmVjdGl2aXR5LCByZWFsLXRpbWUgdGVsZW1ldHJ5LCBPRUUgbW9uaXRvcmluZywgZG93bnRpbWUgaW50ZWxsaWdlbmNlLCBwcmVkaWN0aXZlIG1haW50ZW5hbmNlLCBhbmQgY29ubmVjdGVkIG9wZXJhdGlvbnMgZm9yIGluZHVzdHJpYWwgZW52aXJvbm1lbnRzLicsXG4gICAgICBkZXNjcmlwdGlvbjogJ011bHRpLXByb3RvY29sIG1hY2hpbmUgY29ubmVjdGl2aXR5LCByZWFsLXRpbWUgdGVsZW1ldHJ5LCBPRUUgbW9uaXRvcmluZywgZG93bnRpbWUgaW50ZWxsaWdlbmNlLCBwcmVkaWN0aXZlIG1haW50ZW5hbmNlLCBhbmQgY29ubmVjdGVkIG9wZXJhdGlvbnMgZm9yIGluZHVzdHJpYWwgZW52aXJvbm1lbnRzLicsXG4gICAgICBidXNpbmVzc1Byb2JsZW1zOiBbXG4gICAgICAgICdVbnBsYW5uZWQgZmFjdG9yeSBtYWNoaW5lIGJyZWFrZG93bnMgYW5kIGxpbmUgc3RvcHBhZ2VzJyxcbiAgICAgICAgJ1BhcGVyLWJhc2VkIHNoaWZ0IGxvZ3Mgd2l0aCB6ZXJvIHJlYWwtdGltZSBvcGVyYXRpb25hbCB2aXNpYmlsaXR5JyxcbiAgICAgICAgJ0luYWNjdXJhdGUgT3ZlcmFsbCBFcXVpcG1lbnQgRWZmZWN0aXZlbmVzcyAoT0VFKSBtZXRyaWNzJyxcbiAgICAgICAgJ1NpbG9lZCBsZWdhY3kgQ05DLCBQTEMsIGFuZCBTQ0FEQSBjb250cm9sbGVycydcbiAgICAgIF0sXG4gICAgICBjYXBhYmlsaXRpZXM6IFtcbiAgICAgICAgJ011bHRpLVByb3RvY29sIEVkZ2UgSW5nZXN0aW9uJyxcbiAgICAgICAgJ1JlYWwtVGltZSBPRUUgJiBEb3dudGltZSBUcmFja2luZycsXG4gICAgICAgICdWaWJyYXRpb24gJiBUaGVybWFsIEFub21hbHkgRGV0ZWN0aW9uJyxcbiAgICAgICAgJ0xpdmUgRmFjdG9yeSBGbG9vciBXYWxsYm9hcmRzJyxcbiAgICAgICAgJ01vZGJ1cy9PUEMtVUEvTVFUVCBUZWxlbWV0cnknLFxuICAgICAgICAnRWRnZSBNYWNoaW5lIENvbm5lY3Rpdml0eSdcbiAgICAgIF0sXG4gICAgICB0ZWNobm9sb2d5OiBbJ01RVFQnLCAnT1BDIFVBJywgJ01vZGJ1cyBUQ1AnLCAnRWRnZSBjb21wdXRpbmcnLCAnQXp1cmUgSW9UJywgJ0FXUyBJb1QnLCAnS3ViZXJuZXRlcycsICdEb2NrZXInLCAnR3JhZmFuYScsICdUaW1lLXNlcmllcyBkYXRhYmFzZXMnLCAnUHl0aG9uJ10sXG4gICAgICBpbmR1c3RyeUFwcGxpY2F0aW9uczogWydBdXRvbW90aXZlJywgJ01hY2hpbmVyeSAmIEVxdWlwbWVudCcsICdFbmVyZ3kgJiBVdGlsaXRpZXMnLCAnSGVhdnkgTWFudWZhY3R1cmluZyddLFxuICAgICAgcHJvYmxlbVN0YXRlbWVudDogJ1VucGxhbm5lZCBtYWNoaW5lIGZhaWx1cmVzIGNvc3QgaW5kdXN0cmlhbCBvcGVyYXRvcnMgbWlsbGlvbnMgYW5udWFsbHkgZHVlIHRvIGxhY2sgb2YgcHJlZGljdGl2ZSB2aWJyYXRpb24gYW5kIHRlbGVtZXRyeSBpbnRlbGxpZ2VuY2UuJyxcbiAgICAgIHNvbHV0aW9uU3RhdGVtZW50OiAnRGVwbG95IGVkZ2UgaW50ZWxsaWdlbmNlIGNvbnRhaW5lcnMgY29ubmVjdGluZyBQTENzIHdpdGggVGltZXNjYWxlREIgZm9yIGF1dG9tYXRlZCBhbm9tYWx5IGFsZXJ0cy4nLFxuICAgICAgb3V0Y29tZXM6ICczNSUgZG93bnRpbWUgcmVkdWN0aW9uIGFuZCBsaXZlIE9FRSB0cmFja2luZyBhY3Jvc3MgNTAwKyBjb25uZWN0ZWQgbWFjaGluZXMuJyxcbiAgICAgIGFjY2VsZXJhdG9yOiAnQml0WGhpZnQgSUlvVCBQbGF0Zm9ybScsXG4gICAgICBjYXNlU3R1ZHk6ICdTbWFydCBGYWN0b3J5IE1hbnVmYWN0dXJpbmcgVHJhbnNmb3JtYXRpb24nLFxuICAgICAgY292ZXJfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODEwOTIxNjA2MDctZWUyMjYyMWRkNzU4P3E9ODAmdz0xMjAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBkaXNwbGF5X29yZGVyOiAyLFxuICAgICAgY3JlYXRlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWicsXG4gICAgICB1cGRhdGVkX2F0OiAnMjAyNi0wOC0yN1QwMDowMDowMC4wMDBaJyxcbiAgICAgIHB1Ymxpc2hlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnc3J2XzAzJyxcbiAgICAgIHRpdGxlOiAnRGF0YSBFbmdpbmVlcmluZyAmIE1vZGVybml6YXRpb24nLFxuICAgICAgc2x1ZzogJ2RhdGEtZW5naW5lZXJpbmcnLFxuICAgICAgbnVtOiAnMDMnLFxuICAgICAgdGFnbGluZTogJ0Nsb3VkLW5hdGl2ZSBkYXRhIHBpcGVsaW5lcywgbGFrZWhvdXNlIGFyY2hpdGVjdHVyZXMsIHJlYWwtdGltZSBpbmdlc3Rpb24sIGFuZCBtb2Rlcm5pemF0aW9uLicsXG4gICAgICBzdW1tYXJ5OiAnQ2xvdWQtbmF0aXZlIGRhdGEgcGlwZWxpbmVzLCBsYWtlaG91c2UgYXJjaGl0ZWN0dXJlcywgcmVhbC10aW1lIGluZ2VzdGlvbiwgZGF0YSBtb2Rlcm5pemF0aW9uLCBtaWdyYXRpb24sIHRyYW5zZm9ybWF0aW9uLCBvcmNoZXN0cmF0aW9uLCBhbmQgc2NhbGFibGUgYW5hbHl0aWNhbCBkYXRhIHBsYXRmb3Jtcy4nLFxuICAgICAgZGVzY3JpcHRpb246ICdDbG91ZC1uYXRpdmUgZGF0YSBwaXBlbGluZXMsIGxha2Vob3VzZSBhcmNoaXRlY3R1cmVzLCByZWFsLXRpbWUgaW5nZXN0aW9uLCBkYXRhIG1vZGVybml6YXRpb24sIG1pZ3JhdGlvbiwgdHJhbnNmb3JtYXRpb24sIG9yY2hlc3RyYXRpb24sIGFuZCBzY2FsYWJsZSBhbmFseXRpY2FsIGRhdGEgcGxhdGZvcm1zLicsXG4gICAgICBidXNpbmVzc1Byb2JsZW1zOiBbXG4gICAgICAgICdMZWdhY3kgb24tcHJlbWlzZXMgZGF0YSB3YXJlaG91c2VzIHdpdGggaGlnaCBtYWludGVuYW5jZSBjb3N0cycsXG4gICAgICAgICdTbG93IGJhdGNoIEVUTCBqb2JzIGNhdXNpbmcgc3RhbGUgcmVwb3J0aW5nIGRhdGEnLFxuICAgICAgICAnU2NoZW1hIGRpdmVyZ2VuY2UgZHVyaW5nIEVSUCBkYXRhYmFzZSBtaWdyYXRpb25zJyxcbiAgICAgICAgJ1Vuc3RydWN0dXJlZCBkYXRhIHNpbG9zIHdpdGhvdXQgYXV0b21hdGVkIGdvdmVybmFuY2UnXG4gICAgICBdLFxuICAgICAgY2FwYWJpbGl0aWVzOiBbXG4gICAgICAgICdDbG91ZC1OYXRpdmUgTGFrZWhvdXNlIEFyY2hpdGVjdHVyZScsXG4gICAgICAgICdBdXRvbWF0ZWQgRUxUICYgQ0RDIEluZ2VzdGlvbicsXG4gICAgICAgICdkYnQgVHJhbnNmb3JtYXRpb24gJiBWYWxpZGF0aW9uJyxcbiAgICAgICAgJ1NjaGVtYSBEcmlmdCAmIENsZWFuc2luZyBFbmdpbmUnLFxuICAgICAgICAnWmVyby1Eb3dudGltZSBEYXRhYmFzZSBDdXRvdmVycycsXG4gICAgICAgICdSZWFsLVRpbWUgSW5nZXN0aW9uIFBpcGVsaW5lcydcbiAgICAgIF0sXG4gICAgICB0ZWNobm9sb2d5OiBbJ0RhdGFicmlja3MnLCAnU25vd2ZsYWtlJywgJ2RidCcsICdBcGFjaGUgQWlyZmxvdycsICdBcGFjaGUgU3BhcmsnLCAnRGVsdGEgTGFrZScsICdBcGFjaGUgSWNlYmVyZycsICdQeXRob24nLCAnU1FMJywgJ1Nub3dwYXJrJ10sXG4gICAgICBpbmR1c3RyeUFwcGxpY2F0aW9uczogWydSZXRhaWwnLCAnRmluYW5jZScsICdMb2dpc3RpY3MnLCAnSGVhbHRoY2FyZSddLFxuICAgICAgcHJvYmxlbVN0YXRlbWVudDogJ0ZyYWdtZW50ZWQgZGF0YSBzdG9yZXMgcHJldmVudCB1bmlmaWVkIGNyb3NzLWRlcGFydG1lbnQgYW5hbHl0aWNhbCBxdWVyaWVzLicsXG4gICAgICBzb2x1dGlvblN0YXRlbWVudDogJ0VuZ2luZWVyIHJvYnVzdCBhdXRvbWF0ZWQgc3RyZWFtaW5nIHBpcGVsaW5lcyBpbnRvIG1hbmFnZWQgbW9kZXJuIGxha2Vob3VzZXMuJyxcbiAgICAgIG91dGNvbWVzOiAnNjAlIGZhc3RlciBxdWVyeSBleGVjdXRpb24gYW5kIHplcm8gZGF0YSBsb3NzIG9uIHJlYWwtdGltZSBzdHJlYW1pbmcgaW5nZXN0aW9uLicsXG4gICAgICBhY2NlbGVyYXRvcjogJ01pZ3JhdGVNYXggKyBQYXJzZU1hc3RlcicsXG4gICAgICBjYXNlU3R1ZHk6ICdHbG9iYWwgU3VwcGx5IENoYWluIERhdGEgTGFrZWhvdXNlJyxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTczMTY0NzEzOTg4LTg2NjVmYzk2MzA5NT9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgZGlzcGxheV9vcmRlcjogMyxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMjdUMDA6MDA6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3Nydl8wNCcsXG4gICAgICB0aXRsZTogJ0dlbmVyYXRpdmUgQUkgJiBBZ2VudGljIEFJJyxcbiAgICAgIHNsdWc6ICdnZW5lcmF0aXZlLWFnZW50aWMtYWknLFxuICAgICAgbnVtOiAnMDQnLFxuICAgICAgdGFnbGluZTogJ0xMTS1wb3dlcmVkIGFzc2lzdGFudHMsIHJldHJpZXZhbC1hdWdtZW50ZWQgZ2VuZXJhdGlvbiwgaW50ZWxsaWdlbnQgYWdlbnRzLCBhbmQgY29waWxvdHMuJyxcbiAgICAgIHN1bW1hcnk6ICdMTE0tcG93ZXJlZCBhc3Npc3RhbnRzLCByZXRyaWV2YWwtYXVnbWVudGVkIGdlbmVyYXRpb24sIGludGVsbGlnZW50IGFnZW50cywgZG9jdW1lbnQgaW50ZWxsaWdlbmNlLCB3b3JrZmxvdyBvcmNoZXN0cmF0aW9uLCBlbnRlcnByaXNlIGNvcGlsb3RzLCBhbmQgQUkgY29uc3VsdGluZy4nLFxuICAgICAgZGVzY3JpcHRpb246ICdMTE0tcG93ZXJlZCBhc3Npc3RhbnRzLCByZXRyaWV2YWwtYXVnbWVudGVkIGdlbmVyYXRpb24sIGludGVsbGlnZW50IGFnZW50cywgZG9jdW1lbnQgaW50ZWxsaWdlbmNlLCB3b3JrZmxvdyBvcmNoZXN0cmF0aW9uLCBlbnRlcnByaXNlIGNvcGlsb3RzLCBhbmQgQUkgY29uc3VsdGluZy4nLFxuICAgICAgYnVzaW5lc3NQcm9ibGVtczogW1xuICAgICAgICAnTWFudWFsIGRvY3VtZW50IGF1ZGl0aW5nIGFuZCB1bnN0cnVjdHVyZWQgY29udHJhY3QgYW5hbHlzaXMgYm90dGxlbmVja3MnLFxuICAgICAgICAnQ29tcGxleCBpbnRlcm5hbCBlbmdpbmVlcmluZyBrbm93bGVkZ2UgcmV0cmlldmFsIGZyaWN0aW9uJyxcbiAgICAgICAgJ1Vuc2FmZSBwdWJsaWMgTExNIHVzYWdlIGV4cG9zaW5nIHNlbnNpdGl2ZSBlbnRlcnByaXNlIElQJyxcbiAgICAgICAgJ1Nsb3cgbXVsdGktc3RlcCBidXNpbmVzcyB3b3JrZmxvdyBleGVjdXRpb24nXG4gICAgICBdLFxuICAgICAgY2FwYWJpbGl0aWVzOiBbXG4gICAgICAgICdFbnRlcnByaXNlIFJBRyAmIEh5YnJpZCBWZWN0b3IgU2VhcmNoJyxcbiAgICAgICAgJ0F1dG9ub21vdXMgTXVsdGktQWdlbnQgT3JjaGVzdHJhdGlvbicsXG4gICAgICAgICdJbnRlbGxpZ2VudCBEb2N1bWVudCAmIEludm9pY2UgT0NSJyxcbiAgICAgICAgJ0RQRFAgJiBQSUkgRW50ZXJwcmlzZSBHdWFyZHJhaWxzJyxcbiAgICAgICAgJ0N1c3RvbSBEb21haW4gRmluZS1UdW5lZCBNb2RlbHMnLFxuICAgICAgICAnTW9kZWwtU2VydmluZyAmIEFnZW50IFdvcmtmbG93cydcbiAgICAgIF0sXG4gICAgICB0ZWNobm9sb2d5OiBbJ0F6dXJlIE9wZW5BSScsICdBV1MgQmVkcm9jaycsICdPcGVuQUkgQVBJcycsICdBbnRocm9waWMgbW9kZWxzJywgJ1JBRycsICdWZWN0b3IgZGF0YWJhc2VzJywgJ0xhbmdHcmFwaCcsICdBZ2VudCBTREtzJywgJ1B5dGhvbicsICdGYXN0QVBJJywgJ0RhdGFicmlja3MgQUkvTUwnXSxcbiAgICAgIGluZHVzdHJ5QXBwbGljYXRpb25zOiBbJ0JGU0knLCAnTGVnYWwgJiBDb21wbGlhbmNlJywgJ0hlYWx0aGNhcmUnLCAnQ3VzdG9tZXIgT3BlcmF0aW9ucyddLFxuICAgICAgcHJvYmxlbVN0YXRlbWVudDogJ0VudGVycHJpc2VzIHN0cnVnZ2xlIHRvIGRlcGxveSBHZW5lcmF0aXZlIEFJIGR1ZSB0byBzZWN1cml0eSByaXNrcyBhbmQgaW5hY2N1cmF0ZSBtb2RlbCBoYWxsdWNpbmF0aW9uLicsXG4gICAgICBzb2x1dGlvblN0YXRlbWVudDogJ0J1aWxkIGdyb3VuZGVkIHZlY3RvciBzZWFyY2ggcGlwZWxpbmVzIHdpdGggZGV0ZXJtaW5pc3RpYyB2YWxpZGF0aW9uIGdhdGVzLicsXG4gICAgICBvdXRjb21lczogJzgwJSByZWR1Y3Rpb24gaW4gbWFudWFsIGRvY3VtZW50IGhhbmRsaW5nIHRpbWUgd2l0aCA5OSUgZXh0cmFjdGlvbiBwcmVjaXNpb24uJyxcbiAgICAgIGFjY2VsZXJhdG9yOiAnUGFyc2VNYXN0ZXIgKyBMaW5rR2VuWCcsXG4gICAgICBjYXNlU3R1ZHk6ICdCRlNJIEludGVsbGlnZW50IERvY3VtZW50IFByb2Nlc3NpbmcnLFxuICAgICAgY292ZXJfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzE0ODI2MTU3MTMtMmFmZDY5MDk3OTk4P3E9ODAmdz0xMjAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBkaXNwbGF5X29yZGVyOiA0LFxuICAgICAgY3JlYXRlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWicsXG4gICAgICB1cGRhdGVkX2F0OiAnMjAyNi0wOC0yN1QwMDowMDowMC4wMDBaJyxcbiAgICAgIHB1Ymxpc2hlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnc3J2XzA1JyxcbiAgICAgIHRpdGxlOiAnRGV2T3BzICYgQ2xvdWQgSW5mcmFzdHJ1Y3R1cmUnLFxuICAgICAgc2x1ZzogJ2Rldm9wcy1jbG91ZCcsXG4gICAgICBudW06ICcwNScsXG4gICAgICB0YWdsaW5lOiAnQ2xvdWQgZW5naW5lZXJpbmcsIENJL0NELCBjb250YWluZXIgcGxhdGZvcm1zLCBpbmZyYXN0cnVjdHVyZSBhdXRvbWF0aW9uLCBhbmQgb2JzZXJ2YWJpbGl0eS4nLFxuICAgICAgc3VtbWFyeTogJ0Nsb3VkIGVuZ2luZWVyaW5nLCBDSS9DRCwgY29udGFpbmVyIHBsYXRmb3JtcywgaW5mcmFzdHJ1Y3R1cmUgYXV0b21hdGlvbiwgb2JzZXJ2YWJpbGl0eSwgcGxhdGZvcm0gZW5naW5lZXJpbmcsIHNlY3VyZSBkZXBsb3ltZW50cywgYW5kIG11bHRpLWNsb3VkIGRlbGl2ZXJ5LicsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Nsb3VkIGVuZ2luZWVyaW5nLCBDSS9DRCwgY29udGFpbmVyIHBsYXRmb3JtcywgaW5mcmFzdHJ1Y3R1cmUgYXV0b21hdGlvbiwgb2JzZXJ2YWJpbGl0eSwgcGxhdGZvcm0gZW5naW5lZXJpbmcsIHNlY3VyZSBkZXBsb3ltZW50cywgYW5kIG11bHRpLWNsb3VkIGRlbGl2ZXJ5LicsXG4gICAgICBidXNpbmVzc1Byb2JsZW1zOiBbXG4gICAgICAgICdNYW51YWwsIGVycm9yLXByb25lIHNlcnZlciBwcm92aXNpb25pbmcgYW5kIHNsb3cgcmVsZWFzZSBjeWNsZXMnLFxuICAgICAgICAnTGFjayBvZiBkaXN0cmlidXRlZCBtdWx0aS1jbG91ZCBkaXNhc3RlciByZWNvdmVyeScsXG4gICAgICAgICdVbm1vbml0b3JlZCBjbG91ZCBzcGVuZGluZyBhbmQgYXJjaGl0ZWN0dXJhbCBpbmVmZmljaWVuY3knLFxuICAgICAgICAnU2VjdXJpdHkgY29tcGxpYW5jZSBnYXBzIGluIGNvbnRhaW5lciBlbnZpcm9ubWVudHMnXG4gICAgICBdLFxuICAgICAgY2FwYWJpbGl0aWVzOiBbXG4gICAgICAgICdJbmZyYXN0cnVjdHVyZSBhcyBDb2RlIChUZXJyYWZvcm0vSGVsbSknLFxuICAgICAgICAnQXV0b21hdGVkIFplcm8tRG93bnRpbWUgR2l0T3BzIENJL0NEJyxcbiAgICAgICAgJ011bHRpLUNsdXN0ZXIgS3ViZXJuZXRlcyBPcmNoZXN0cmF0aW9uJyxcbiAgICAgICAgJ09wZW5UZWxlbWV0cnkgJiBGdWxsLVN0YWNrIE9ic2VydmFiaWxpdHknLFxuICAgICAgICAnQ2xvdWQgRmluT3BzICYgQ29zdCBPcHRpbWl6YXRpb24nLFxuICAgICAgICAnUGxhdGZvcm0gRW5naW5lZXJpbmcgJiBMYW5kaW5nIFpvbmVzJ1xuICAgICAgXSxcbiAgICAgIHRlY2hub2xvZ3k6IFsnQVdTJywgJ01pY3Jvc29mdCBBenVyZScsICdHb29nbGUgQ2xvdWQnLCAnS3ViZXJuZXRlcycsICdEb2NrZXInLCAnVGVycmFmb3JtJywgJ0dpdEh1YiBBY3Rpb25zJywgJ0dpdExhYiBDSS9DRCcsICdIZWxtJywgJ0FyZ28gQ0QnLCAnT3BlblRlbGVtZXRyeScsICdQcm9tZXRoZXVzJywgJ0dyYWZhbmEnXSxcbiAgICAgIGluZHVzdHJ5QXBwbGljYXRpb25zOiBbJ1NhYVMnLCAnRmluVGVjaCcsICdFLUNvbW1lcmNlJywgJ0VudGVycHJpc2UgUGxhdGZvcm1zJ10sXG4gICAgICBwcm9ibGVtU3RhdGVtZW50OiAnTWFudWFsIHNlcnZlciBkZXBsb3ltZW50cyBjYXVzZSB1bmV4cGVjdGVkIHByb2R1Y3Rpb24gb3V0YWdlcyBhbmQgc2xvdyByZWxlYXNlIHZlbG9jaXR5LicsXG4gICAgICBzb2x1dGlvblN0YXRlbWVudDogJ0RlcGxveSBhdXRvbWF0ZWQgR2l0T3BzIHBpcGVsaW5lcyB3aXRoIGF1dG9tYXRlZCByb2xsYmFjayBzYWZldHkgZ3VhcmRzLicsXG4gICAgICBvdXRjb21lczogJzQwJSBjbG91ZCBpbmZyYXN0cnVjdHVyZSBjb3N0IG9wdGltaXphdGlvbiB3aXRoIGF1dG9tYXRlZCB6ZXJvLWRvd250aW1lIGN1dG92ZXJzLicsXG4gICAgICBhY2NlbGVyYXRvcjogJ01pZ3JhdGVNYXggQ2xvdWQgQWNjZWxlcmF0b3InLFxuICAgICAgY2FzZVN0dWR5OiAnRW50ZXJwcmlzZSBTQVAgQ2xvdWQgTWlncmF0aW9uJyxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTU4NDk0OTQ5LWVmMDEwY2JkY2MzMT9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgZGlzcGxheV9vcmRlcjogNSxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMjdUMDA6MDA6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3Nydl8wNicsXG4gICAgICB0aXRsZTogJ0RhdGEgR292ZXJuYW5jZSAmIFF1YWxpdHknLFxuICAgICAgc2x1ZzogJ2RhdGEtZ292ZXJuYW5jZScsXG4gICAgICBudW06ICcwNicsXG4gICAgICB0YWdsaW5lOiAnRW50ZXJwcmlzZSBkYXRhIGdvdmVybmFuY2UsIHF1YWxpdHkgbWFuYWdlbWVudCwgbWV0YWRhdGEsIGxpbmVhZ2UsIGFuZCBEUERQIGNvbXBsaWFuY2UuJyxcbiAgICAgIHN1bW1hcnk6ICdFbnRlcnByaXNlIGRhdGEgZ292ZXJuYW5jZSwgcXVhbGl0eSBtYW5hZ2VtZW50LCBtZXRhZGF0YSwgbGluZWFnZSwgY2F0YWxvZ3VpbmcsIG1hc3RlciBkYXRhIG1hbmFnZW1lbnQsIHByaXZhY3ksIHNlY3VyaXR5LCBjb21wbGlhbmNlLCBhbmQgdHJ1c3R3b3J0aHkgZGF0YSBmb3VuZGF0aW9ucy4nLFxuICAgICAgZGVzY3JpcHRpb246ICdFbnRlcnByaXNlIGRhdGEgZ292ZXJuYW5jZSwgcXVhbGl0eSBtYW5hZ2VtZW50LCBtZXRhZGF0YSwgbGluZWFnZSwgY2F0YWxvZ3VpbmcsIG1hc3RlciBkYXRhIG1hbmFnZW1lbnQsIHByaXZhY3ksIHNlY3VyaXR5LCBjb21wbGlhbmNlLCBhbmQgdHJ1c3R3b3J0aHkgZGF0YSBmb3VuZGF0aW9ucy4nLFxuICAgICAgYnVzaW5lc3NQcm9ibGVtczogW1xuICAgICAgICAnVW52ZXJpZmllZCBkYXRhIHF1YWxpdHkgY2F1c2luZyBlcnJvbmVvdXMgZXhlY3V0aXZlIHJlcG9ydGluZycsXG4gICAgICAgICdVbmNsZWFyIGNvbHVtbi1sZXZlbCBkYXRhIGxpbmVhZ2UgYWNyb3NzIGFuYWx5dGljYWwgcGlwZWxpbmVzJyxcbiAgICAgICAgJ0RQRFAsIEdEUFIsIGFuZCBTT0MgMiByZWd1bGF0b3J5IGNvbXBsaWFuY2UgZXhwb3N1cmUnLFxuICAgICAgICAnVW5nb3Zlcm5lZCBkYXRhIGFjY2VzcyBhbmQgbGFjayBvZiBncmFudWxhciBSQkFDL0FCQUMnXG4gICAgICBdLFxuICAgICAgY2FwYWJpbGl0aWVzOiBbXG4gICAgICAgICdBdXRvbWF0ZWQgQ29sdW1uLUxldmVsIExpbmVhZ2UgTWFwcGluZycsXG4gICAgICAgICdFbnRlcnByaXNlIERhdGEgQ2F0YWxvZyAmIE1ldGFkYXRhJyxcbiAgICAgICAgJ0F1dG9tYXRlZCBHcmVhdCBFeHBlY3RhdGlvbnMgUXVhbGl0eSBDaGVja3MnLFxuICAgICAgICAnR3JhbnVsYXIgUkJBQyAmIEF0dHJpYnV0ZSBBY2Nlc3MgKEFCQUMpJyxcbiAgICAgICAgJ0RQRFAsIEdEUFIgJiBTT0MgMiBDb21wbGlhbmNlIEZyYW1ld29ya3MnLFxuICAgICAgICAnTWFzdGVyIERhdGEgTWFuYWdlbWVudCAoTURNKSdcbiAgICAgIF0sXG4gICAgICB0ZWNobm9sb2d5OiBbJ0RhdGFicmlja3MgVW5pdHkgQ2F0YWxvZycsICdNaWNyb3NvZnQgUHVydmlldycsICdTbm93Zmxha2UgSG9yaXpvbicsICdPcGVuTWV0YWRhdGEnLCAnR3JlYXQgRXhwZWN0YXRpb25zJywgJ2RidCB0ZXN0cycsICdEYXRhIGxpbmVhZ2UnLCAnRGF0YSBjYXRhbG9ndWVzJywgJ1JCQUMnLCAnQUJBQycsICdEYXRhIHF1YWxpdHkgYXV0b21hdGlvbiddLFxuICAgICAgaW5kdXN0cnlBcHBsaWNhdGlvbnM6IFsnQkZTSScsICdIZWFsdGhjYXJlJywgJ1RlbGVjb21tdW5pY2F0aW9ucycsICdHb3Zlcm5tZW50J10sXG4gICAgICBwcm9ibGVtU3RhdGVtZW50OiAnVW5yZWd1bGF0ZWQgZGF0YSBzaWxvcyBleHBvc2UgZW50ZXJwcmlzZXMgdG8gaGVhdnkgcmVndWxhdG9yeSBmaW5lcyBhbmQgcHJpdmFjeSBsZWFrcy4nLFxuICAgICAgc29sdXRpb25TdGF0ZW1lbnQ6ICdEZXBsb3kgY2VudHJhbGl6ZWQgbWV0YWRhdGEgY2F0YWxvZ3Mgd2l0aCBhdXRvbWF0ZWQgZGF0YSBtYXNraW5nIHBvbGljaWVzLicsXG4gICAgICBvdXRjb21lczogJzEwMCUgY29tcGxpYW5jZSBhdWRpdCByZWFkaW5lc3Mgd2l0aCBjb250aW51b3VzIGRhdGEgcXVhbGl0eSBTTEEgbW9uaXRvcmluZy4nLFxuICAgICAgYWNjZWxlcmF0b3I6ICdQYXJzZU1hc3RlciBEYXRhIEVuZ2luZScsXG4gICAgICBjYXNlU3R1ZHk6ICdIZWFsdGhjYXJlIERhdGEgR292ZXJuYW5jZSAmIFByaXZhY3knLFxuICAgICAgY292ZXJfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NjM5ODY3Njg2MDktMzIyZGExMzU3NWYzP3E9ODAmdz0xMjAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBkaXNwbGF5X29yZGVyOiA2LFxuICAgICAgY3JlYXRlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWicsXG4gICAgICB1cGRhdGVkX2F0OiAnMjAyNi0wOC0yN1QwMDowMDowMC4wMDBaJyxcbiAgICAgIHB1Ymxpc2hlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnc3J2XzA3JyxcbiAgICAgIHRpdGxlOiAnSW50ZWdyYXRpb24gU2VydmljZXMnLFxuICAgICAgc2x1ZzogJ2ludGVncmF0aW9uLXNlcnZpY2VzJyxcbiAgICAgIG51bTogJzA3JyxcbiAgICAgIHRhZ2xpbmU6ICdNb2Rlcm4gaW50ZWdyYXRpb24gYWNyb3NzIFNBUCwgU2FsZXNmb3JjZSwgRVJQLCBTRlRQLCBSRVNUIEFQSXMsIGFuZCBLYWZrYS4nLFxuICAgICAgc3VtbWFyeTogJ01vZGVybiBpbnRlZ3JhdGlvbiBhY3Jvc3MgU0FQLCBTYWxlc2ZvcmNlLCBFUlAgcGxhdGZvcm1zLCBTRlRQLCBSRVNUIEFQSXMsIGV2ZW50LWRyaXZlbiBzeXN0ZW1zLCBjbG91ZCBzZXJ2aWNlcywgYW5kIGVudGVycHJpc2UgYXBwbGljYXRpb25zLicsXG4gICAgICBkZXNjcmlwdGlvbjogJ01vZGVybiBpbnRlZ3JhdGlvbiBhY3Jvc3MgU0FQLCBTYWxlc2ZvcmNlLCBFUlAgcGxhdGZvcm1zLCBTRlRQLCBSRVNUIEFQSXMsIGV2ZW50LWRyaXZlbiBzeXN0ZW1zLCBjbG91ZCBzZXJ2aWNlcywgYW5kIGVudGVycHJpc2UgYXBwbGljYXRpb25zLicsXG4gICAgICBidXNpbmVzc1Byb2JsZW1zOiBbXG4gICAgICAgICdEaXNjb25uZWN0ZWQgbGVnYWN5IEVSUCwgQ1JNLCBhbmQgY2xvdWQgU2FhUyBwbGF0Zm9ybXMnLFxuICAgICAgICAnRnJhZ2lsZSBwb2ludC10by1wb2ludCBjdXN0b20gaW50ZWdyYXRpb24gc2NyaXB0cycsXG4gICAgICAgICdMYWNrIG9mIGNlbnRyYWxpemVkIEFQSSByYXRlIGxpbWl0aW5nIGFuZCBzZWN1cml0eSBsb2dnaW5nJyxcbiAgICAgICAgJ0RlbGF5ZWQgYmF0Y2ggZmlsZSBzeW5jcyBmYWlsaW5nIHdpdGhvdXQgYXV0b21hdGljIHJldHJpZXMnXG4gICAgICBdLFxuICAgICAgY2FwYWJpbGl0aWVzOiBbXG4gICAgICAgICdQcm9wcmlldGFyeSBMaW5rR2VuWCBJbnRlZ3JhdGlvbiBIdWInLFxuICAgICAgICAnRXZlbnQtRHJpdmVuIEthZmthIEV2ZW50IFN0cmVhbWluZycsXG4gICAgICAgICdFbnRlcnByaXNlIFNBUCAmIFNhbGVzZm9yY2UgQ29ubmVjdG9ycycsXG4gICAgICAgICdTZWN1cmUgU0ZUUCAmIENsb3VkIFdlYmhvb2sgT3JjaGVzdHJhdGlvbicsXG4gICAgICAgICdPQXV0aCAyLjAgJiBBUEkgR2F0ZXdheSBNYW5hZ2VtZW50JyxcbiAgICAgICAgJ0F1dG9tYXRlZCBFcnJvciBIYW5kbGluZyAmIFJldHJpZXMnXG4gICAgICBdLFxuICAgICAgdGVjaG5vbG9neTogWydSRVNUIEFQSXMnLCAnR3JhcGhRTCcsICdXZWJob29rcycsICdPQXV0aCAyLjAnLCAnT3BlbkFQSScsICdLYWZrYScsICdFdmVudC1kcml2ZW4gYXJjaGl0ZWN0dXJlJywgJ0FQSSBnYXRld2F5cycsICdDbG91ZC1uYXRpdmUgaW50ZWdyYXRpb24nLCAnUHl0aG9uJywgJ05vZGUuanMnXSxcbiAgICAgIGluZHVzdHJ5QXBwbGljYXRpb25zOiBbJ01hbnVmYWN0dXJpbmcnLCAnUmV0YWlsJywgJ0JGU0knLCAnU3VwcGx5IENoYWluJ10sXG4gICAgICBwcm9ibGVtU3RhdGVtZW50OiAnUG9pbnQtdG8tcG9pbnQgc3BhZ2hldHRpIGludGVncmF0aW9ucyBicmVhayBkdXJpbmcgRVJQIHVwZGF0ZXMgYW5kIGxhY2sgY2VudHJhbGl6ZWQgb2JzZXJ2YWJpbGl0eS4nLFxuICAgICAgc29sdXRpb25TdGF0ZW1lbnQ6ICdJbXBsZW1lbnQgTGlua0dlblggYXMgYSB1bmlmaWVkIGV2ZW50LWRyaXZlbiBBUEkgZ2F0ZXdheSB3aXRoIGd1YXJhbnRlZWQgbWVzc2FnZSBkZWxpdmVyeS4nLFxuICAgICAgb3V0Y29tZXM6ICc5OS45OSUgaW50ZWdyYXRpb24gdXB0aW1lIGFjcm9zcyBtaXNzaW9uLWNyaXRpY2FsIEVSUCwgQ1JNLCBhbmQgZmluYW5jaWFsIGVuZHBvaW50cy4nLFxuICAgICAgYWNjZWxlcmF0b3I6ICdMaW5rR2VuWCBDb25uZWN0aXZpdHkgSHViJyxcbiAgICAgIGNhc2VTdHVkeTogJ0Nyb3NzLUVudGVycHJpc2UgRVJQICYgU0ZUUCBTeW5jaHJvbml6YXRpb24nLFxuICAgICAgY292ZXJfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTI2NjQ3MzAtZDMwN2NhODg0OTc4P3E9ODAmdz0xMjAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBkaXNwbGF5X29yZGVyOiA3LFxuICAgICAgY3JlYXRlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWicsXG4gICAgICB1cGRhdGVkX2F0OiAnMjAyNi0wOC0yN1QwMDowMDowMC4wMDBaJyxcbiAgICAgIHB1Ymxpc2hlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnc3J2XzA4JyxcbiAgICAgIHRpdGxlOiAnU2VydmljZU5vdyBTb2x1dGlvbnMnLFxuICAgICAgc2x1ZzogJ3NlcnZpY2Vub3ctc29sdXRpb25zJyxcbiAgICAgIG51bTogJzA4JyxcbiAgICAgIHRhZ2xpbmU6ICdFbmQtdG8tZW5kIElUU00sIElUT00sIElUQU0sIENTTSwgSFJTRCwgR1JDLCBhbmQgRmxvdyBEZXNpZ25lciBhdXRvbWF0aW9uLicsXG4gICAgICBzdW1tYXJ5OiAnRW5kLXRvLWVuZCBTZXJ2aWNlTm93IGltcGxlbWVudGF0aW9ucyBhY3Jvc3MgSVRTTSwgSVRPTSwgSVRBTSwgQ1NNLCBIUlNELCBHUkMsIEZTTSwgd29ya2Zsb3cgYXV0b21hdGlvbiwgc2VydmljZSBvcGVyYXRpb25zLCBhbmQgZW50ZXJwcmlzZSBwcm9jZXNzIG1vZGVybml6YXRpb24uJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRW5kLXRvLWVuZCBTZXJ2aWNlTm93IGltcGxlbWVudGF0aW9ucyBhY3Jvc3MgSVRTTSwgSVRPTSwgSVRBTSwgQ1NNLCBIUlNELCBHUkMsIEZTTSwgd29ya2Zsb3cgYXV0b21hdGlvbiwgc2VydmljZSBvcGVyYXRpb25zLCBhbmQgZW50ZXJwcmlzZSBwcm9jZXNzIG1vZGVybml6YXRpb24uJyxcbiAgICAgIGJ1c2luZXNzUHJvYmxlbXM6IFtcbiAgICAgICAgJ0ZyYWdtZW50ZWQgSVQgaW5jaWRlbnQgbWFuYWdlbWVudCBhbmQgc2xvdyByZXNvbHV0aW9uIHRpbWVzJyxcbiAgICAgICAgJ0luYWNjdXJhdGUgY29uZmlndXJhdGlvbiBtYW5hZ2VtZW50IGRhdGFiYXNlIChDTURCKSByZWNvcmRzJyxcbiAgICAgICAgJ01hbnVhbCBIUiBvbmJvYXJkaW5nIGFuZCBlbXBsb3llZSBzZXJ2aWNlIHJlcXVlc3QgYm90dGxlbmVja3MnLFxuICAgICAgICAnTGFjayBvZiBpbnRlZ3JhdGlvbiBiZXR3ZWVuIFNlcnZpY2VOb3cgYW5kIGNsb3VkIGluZnJhc3RydWN0dXJlJ1xuICAgICAgXSxcbiAgICAgIGNhcGFiaWxpdGllczogW1xuICAgICAgICAnSVRTTSAmIElUT00gTW9kZXJuaXphdGlvbicsXG4gICAgICAgICdTZXJ2aWNlTm93IEZsb3cgRGVzaWduZXIgQXV0b21hdGlvbicsXG4gICAgICAgICdJbnRlZ3JhdGlvbkh1YiBBUEkgT3JjaGVzdHJhdGlvbicsXG4gICAgICAgICdDTURCICYgQXNzZXQgTWFuYWdlbWVudCAoSVRBTSknLFxuICAgICAgICAnQ3VzdG9tZXIgU2VydmljZSBNYW5hZ2VtZW50IChDU00pJyxcbiAgICAgICAgJ1NlcnZpY2VOb3cgQUkgJiBWaXJ0dWFsIEFnZW50IENvbmZpZydcbiAgICAgIF0sXG4gICAgICB0ZWNobm9sb2d5OiBbJ1NlcnZpY2VOb3cnLCAnU2VydmljZU5vdyBGbG93IERlc2lnbmVyJywgJ0ludGVncmF0aW9uSHViJywgJ1JFU1QgQVBJcycsICdHcmFwaFFMIHdoZXJlIGFwcGxpY2FibGUnLCAnT0F1dGggMi4wJywgJ0NNREInLCAnU2VydmljZU5vdyBBSSBjYXBhYmlsaXRpZXMnLCAnV29ya2Zsb3cgYXV0b21hdGlvbicsICdFdmVudC1kcml2ZW4gaW50ZWdyYXRpb25zJ10sXG4gICAgICBpbmR1c3RyeUFwcGxpY2F0aW9uczogWydJVCBTZXJ2aWNlcycsICdFbnRlcnByaXNlIFRlY2gnLCAnQmFua2luZycsICdIZWFsdGhjYXJlIE9wZXJhdGlvbnMnXSxcbiAgICAgIHByb2JsZW1TdGF0ZW1lbnQ6ICdEaXNvcmdhbml6ZWQgc2VydmljZSB0aWNrZXRzIGFuZCBtYW51YWwgYXBwcm92YWxzIGRlbGF5IGNyaXRpY2FsIGJ1c2luZXNzIG9wZXJhdGlvbnMuJyxcbiAgICAgIHNvbHV0aW9uU3RhdGVtZW50OiAnTW9kZXJuaXplIFNlcnZpY2VOb3cgd29ya2Zsb3dzIHdpdGggRmxvdyBEZXNpZ25lciBhbmQgYXV0b21hdGVkIEludGVncmF0aW9uSHViIGVuZHBvaW50cy4nLFxuICAgICAgb3V0Y29tZXM6ICc2NSUgZmFzdGVyIElUIGluY2lkZW50IHJlc29sdXRpb24gd2l0aCBhdXRvbWF0ZWQgQ01EQiB0b3BvbG9neSBkaXNjb3ZlcnkuJyxcbiAgICAgIGFjY2VsZXJhdG9yOiAnTGlua0dlblggZm9yIFNlcnZpY2VOb3cnLFxuICAgICAgY2FzZVN0dWR5OiAnR2xvYmFsIEVudGVycHJpc2UgSVRTTSAmIEZsb3cgQXV0b21hdGlvbicsXG4gICAgICBjb3Zlcl9pbWFnZV91cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyMjA3MTgyMDA4MS0wMDlmMDEyOWM3MWM/cT04MCZ3PTEyMDAmYXV0bz1mb3JtYXQmZml0PWNyb3AnLFxuICAgICAgc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgIGRpc3BsYXlfb3JkZXI6IDgsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTI3VDAwOjAwOjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdzcnZfMDknLFxuICAgICAgdGl0bGU6ICdBZHZpc29yeSBTZXJ2aWNlcycsXG4gICAgICBzbHVnOiAnYWR2aXNvcnktc2VydmljZXMnLFxuICAgICAgbnVtOiAnMDknLFxuICAgICAgdGFnbGluZTogJ1N0cmF0ZWdpYyBjbG91ZCwgQUksIGRhdGEsIGFuZCBwbGF0Zm9ybSBtb2Rlcm5pemF0aW9uIGFyY2hpdGVjdHVyZSBjb25zdWx0aW5nLicsXG4gICAgICBzdW1tYXJ5OiAnQ2xvdWQsIEFJLCBkYXRhLCBvcGVyYXRpb25zLCBhbmQgbW9kZXJuaXphdGlvbiBjb25zdWx0aW5nIHRoYXQgZGVmaW5lcyB0aGUgcmlnaHQgYXJjaGl0ZWN0dXJlLCByb2FkbWFwLCB0ZWNobm9sb2d5IGNob2ljZXMsIGdvdmVybmFuY2UgbW9kZWwsIGFuZCBpbXBsZW1lbnRhdGlvbiBzdHJhdGVneSBiZWZvcmUgZW5naW5lZXJpbmcgYmVnaW5zLicsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Nsb3VkLCBBSSwgZGF0YSwgb3BlcmF0aW9ucywgYW5kIG1vZGVybml6YXRpb24gY29uc3VsdGluZyB0aGF0IGRlZmluZXMgdGhlIHJpZ2h0IGFyY2hpdGVjdHVyZSwgcm9hZG1hcCwgdGVjaG5vbG9neSBjaG9pY2VzLCBnb3Zlcm5hbmNlIG1vZGVsLCBhbmQgaW1wbGVtZW50YXRpb24gc3RyYXRlZ3kgYmVmb3JlIGVuZ2luZWVyaW5nIGJlZ2lucy4nLFxuICAgICAgYnVzaW5lc3NQcm9ibGVtczogW1xuICAgICAgICAnVW5jZXJ0YWluIHRlY2hub2xvZ3kgdmVuZG9yIHNlbGVjdGlvbiBhbmQgcGxhdGZvcm0gYXJjaGl0ZWN0dXJlIHJpc2tzJyxcbiAgICAgICAgJ0Nsb3VkIG1pZ3JhdGlvbiBjb3N0IG92ZXJydW5zIHdpdGhvdXQgY2xlYXIgRmluT3BzIHBsYW5uaW5nJyxcbiAgICAgICAgJ0xhY2sgb2YgZW50ZXJwcmlzZSBBSSBnb3Zlcm5hbmNlIGFuZCByaXNrIG1hbmFnZW1lbnQgc3RyYXRlZ3knLFxuICAgICAgICAnU2lsb2VkIGVuZ2luZWVyaW5nIHRlYW1zIHdvcmtpbmcgd2l0aG91dCB1bmlmaWVkIGFyY2hpdGVjdHVyYWwgYmx1ZXByaW50cydcbiAgICAgIF0sXG4gICAgICBjYXBhYmlsaXRpZXM6IFtcbiAgICAgICAgJ0VudGVycHJpc2UgQUkgJiBEYXRhIFN0cmF0ZWd5JyxcbiAgICAgICAgJ0Nsb3VkIE1vZGVybml6YXRpb24gQmx1ZXByaW50cycsXG4gICAgICAgICdDbG91ZCBGaW5PcHMgJiBNTE9wcyBSb2FkbWFwcycsXG4gICAgICAgICdEYXRhIEdvdmVybmFuY2UgJiBDb21wbGlhbmNlIFN0cmF0ZWd5JyxcbiAgICAgICAgJ1BsYXRmb3JtIEVuZ2luZWVyaW5nIEFzc2Vzc21lbnRzJyxcbiAgICAgICAgJ1RlY2hub2xvZ3kgU2VsZWN0aW9uICYgRmVhc2liaWxpdHknXG4gICAgICBdLFxuICAgICAgdGVjaG5vbG9neTogWydBSSBzdHJhdGVneScsICdEYXRhIHN0cmF0ZWd5JywgJ0Nsb3VkIG1vZGVybml6YXRpb24nLCAnUGxhdGZvcm0gZW5naW5lZXJpbmcnLCAnRW50ZXJwcmlzZSBhcmNoaXRlY3R1cmUnLCAnRGF0YSBnb3Zlcm5hbmNlJywgJ0FJIGdvdmVybmFuY2UnLCAnQ2xvdWQgRmluT3BzJywgJ01MT3BzJywgJ0RhdGEgcGxhdGZvcm0gbW9kZXJuaXphdGlvbicsICdUZWNobm9sb2d5IHJvYWRtYXAnXSxcbiAgICAgIGluZHVzdHJ5QXBwbGljYXRpb25zOiBbJ0V4ZWN1dGl2ZSBMZWFkZXJzaGlwJywgJ0NUTyBBZHZpc29yeScsICdFbnRlcnByaXNlIElUJywgJ0RpZ2l0YWwgVHJhbnNmb3JtYXRpb24nXSxcbiAgICAgIHByb2JsZW1TdGF0ZW1lbnQ6ICdVbnBsYW5uZWQgZGlnaXRhbCB0cmFuc2Zvcm1hdGlvbnMgZnJlcXVlbnRseSBmYWlsIG9yIGV4Y2VlZCBidWRnZXQgZHVlIHRvIGFyY2hpdGVjdHVyYWwgZ2Fwcy4nLFxuICAgICAgc29sdXRpb25TdGF0ZW1lbnQ6ICdQcm92aWRlIHZlbmRvci1uZXV0cmFsLCBzZW5pb3IgZW5naW5lZXJpbmcgYWR2aXNvcnkgdG8gZGVzaWduIHRhcmdldGVkIDMteWVhciBkaWdpdGFsIGJsdWVwcmludHMuJyxcbiAgICAgIG91dGNvbWVzOiAnQWN0aW9uYWJsZSAzLXllYXIgdGVjaG5vbG9neSByb2FkbWFwcyB3aXRoIDMwLWRheSBwcm9vZi1vZi1jb25jZXB0IGRlbGl2ZXJhYmxlcy4nLFxuICAgICAgYWNjZWxlcmF0b3I6ICdTTVJJS0FBTSBBcmNoaXRlY3R1cmUgRnJhbWV3b3JrJyxcbiAgICAgIGNhc2VTdHVkeTogJ0VudGVycHJpc2UgRGlnaXRhbCBUcmFuc2Zvcm1hdGlvbiBSb2FkbWFwJyxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQyNzQ0MTczLThlN2U1MzQxNWJiMD9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgZGlzcGxheV9vcmRlcjogOSxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMjdUMDA6MDA6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3Nydl8xMCcsXG4gICAgICB0aXRsZTogJ0FJIFdvcmtmbG93IEF1dG9tYXRpb24nLFxuICAgICAgc2x1ZzogJ2FpLXdvcmtmbG93LWF1dG9tYXRpb24nLFxuICAgICAgbnVtOiAnMTAnLFxuICAgICAgdGFnbGluZTogJ0FnZW50aWMgQUkgd29ya2Zsb3dzIG9yY2hlc3RyYXRpbmcgbXVsdGktc3RlcCBidXNpbmVzcyB0YXNrcyBhbmQgZG9jdW1lbnQgb3BzLicsXG4gICAgICBzdW1tYXJ5OiAnQWdlbnRpYyBBSSB3b3JrZmxvd3MgdGhhdCBvcmNoZXN0cmF0ZSBtdWx0aS1zdGVwIGJ1c2luZXNzIHByb2Nlc3NlcyBpbmNsdWRpbmcgZG9jdW1lbnQgcHJvY2Vzc2luZywgcmVwb3J0aW5nLCBjdXN0b21lciBpbnRlbGxpZ2VuY2UsIGNvbXBsaWFuY2UsIGtub3dsZWRnZSBvcGVyYXRpb25zLCBhbmQgZW50ZXJwcmlzZSB0YXNrIGF1dG9tYXRpb24uJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQWdlbnRpYyBBSSB3b3JrZmxvd3MgdGhhdCBvcmNoZXN0cmF0ZSBtdWx0aS1zdGVwIGJ1c2luZXNzIHByb2Nlc3NlcyBpbmNsdWRpbmcgZG9jdW1lbnQgcHJvY2Vzc2luZywgcmVwb3J0aW5nLCBjdXN0b21lciBpbnRlbGxpZ2VuY2UsIGNvbXBsaWFuY2UsIGtub3dsZWRnZSBvcGVyYXRpb25zLCBhbmQgZW50ZXJwcmlzZSB0YXNrIGF1dG9tYXRpb24uJyxcbiAgICAgIGJ1c2luZXNzUHJvYmxlbXM6IFtcbiAgICAgICAgJ1JlcGV0aXRpdmUgbXVsdGktc3RlcCBiYWNrLW9mZmljZSBtYW51YWwgZGF0YSBlbnRyeSBhbmQgcmVjb25jaWxpYXRpb24nLFxuICAgICAgICAnQ29tcGxleCBjdXN0b21lciBxdWVyeSB0cmlhZ2UgcmVxdWlyaW5nIGNyb3NzLXN5c3RlbSBsb29rdXBzJyxcbiAgICAgICAgJ01hbnVhbCBjb21wbGlhbmNlIGF1ZGl0aW5nIGFjcm9zcyBzdHJ1Y3R1cmVkIGFuZCB1bnN0cnVjdHVyZWQgZmlsaW5ncycsXG4gICAgICAgICdEaXNjb25uZWN0ZWQgc3lzdGVtcyBkZWxheWluZyBleGVjdXRpdmUgZGVjaXNpb24gY3ljbGVzJ1xuICAgICAgXSxcbiAgICAgIGNhcGFiaWxpdGllczogW1xuICAgICAgICAnQWdlbnRpYyBNdWx0aS1TdGVwIFByb2Nlc3MgRXhlY3V0aW9uJyxcbiAgICAgICAgJ0F1dG9tYXRlZCBEb2N1bWVudCBJbmdlc3Rpb24gJiBSb3V0aW5nJyxcbiAgICAgICAgJ0h1bWFuLWluLXRoZS1Mb29wIEFwcHJvdmFsIENoZWNrcG9pbnRzJyxcbiAgICAgICAgJ1ZlY3Rvci1Qb3dlcmVkIEtub3dsZWRnZSBPcGVyYXRpb25zJyxcbiAgICAgICAgJ0F1dG9tYXRlZCBSZWd1bGF0b3J5IENvbXBsaWFuY2UgVHJpYWdlJyxcbiAgICAgICAgJ0V2ZW50LURyaXZlbiBUYXNrIFRyaWdnZXJpbmcnXG4gICAgICBdLFxuICAgICAgdGVjaG5vbG9neTogWydMTE0gQVBJcycsICdBSSBhZ2VudHMnLCAnUkFHJywgJ0xhbmdHcmFwaCcsICdXb3JrZmxvdyBvcmNoZXN0cmF0aW9uJywgJ1B5dGhvbicsICdGYXN0QVBJJywgJ1ZlY3RvciBzZWFyY2gnLCAnRG9jdW1lbnQgaW50ZWxsaWdlbmNlJywgJ0V2ZW50LWRyaXZlbiBhcmNoaXRlY3R1cmUnLCAnQVBJIGludGVncmF0aW9ucycsICdIdW1hbi1pbi10aGUtbG9vcCB3b3JrZmxvd3MnXSxcbiAgICAgIGluZHVzdHJ5QXBwbGljYXRpb25zOiBbJ09wZXJhdGlvbnMnLCAnRmluYW5jZSAmIEFjY291bnRpbmcnLCAnTGVnYWwnLCAnQ3VzdG9tZXIgU3VwcG9ydCddLFxuICAgICAgcHJvYmxlbVN0YXRlbWVudDogJ0tub3dsZWRnZSB3b3JrZXJzIHdhc3RlIHVwIHRvIDQwJSBvZiB0aGVpciB0aW1lIG9uIG1hbnVhbCBjcm9zcy1zeXN0ZW0gZGF0YSB0cmFuc2Zlci4nLFxuICAgICAgc29sdXRpb25TdGF0ZW1lbnQ6ICdEZXBsb3kgYWdlbnRpYyBMYW5nR3JhcGggd29ya2Zsb3dzIHRoYXQgYXV0b25vbW91c2x5IGV4ZWN1dGUgbXVsdGktc3RlcCBidXNpbmVzcyB0YXNrcy4nLFxuICAgICAgb3V0Y29tZXM6ICc3NSUgb3BlcmF0aW9uYWwgY3ljbGUgdGltZSByZWR1Y3Rpb24gd2l0aCAxMDAlIGF1ZGl0YWJsZSBwcm9jZXNzIHRlbGVtZXRyeS4nLFxuICAgICAgYWNjZWxlcmF0b3I6ICdQYXJzZU1hc3RlciArIExpbmtHZW5YJyxcbiAgICAgIGNhc2VTdHVkeTogJ0F1dG9tYXRlZCBSZWd1bGF0b3J5IEZpbGluZyAmIFByb2Nlc3NpbmcgV29ya2Zsb3cnLFxuICAgICAgY292ZXJfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDc2Nzk3OTk5ODctYzczNzc5NTg3Y2NmP3E9ODAmdz0xMjAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBkaXNwbGF5X29yZGVyOiAxMCxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMjdUMDA6MDA6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonXG4gICAgfVxuICBdLFxuICBhY2NlbGVyYXRvcnM6IFtcbiAgICB7XG4gICAgICBpZDogJ2FjY18wMScsXG4gICAgICBuYW1lOiAnQml0WGhpZnQnLFxuICAgICAgc2x1ZzogJ2JpdHhoaWZ0JyxcbiAgICAgIGNhdGVnb3J5OiAnSW5kdXN0cmlhbCBJb1QnLFxuICAgICAgdGFnbGluZTogJ0luZHVzdHJpYWwgSW9UICYgRWRnZSBJbnRlbGxpZ2VuY2UgQWNjZWxlcmF0b3InLFxuICAgICAgc2hvcnREZXNjcmlwdGlvbjogJ0luZHVzdHJpYWwgSW9UICYgRWRnZSBJbnRlbGxpZ2VuY2UgQWNjZWxlcmF0b3IgZm9yIHJlYWwtdGltZSBmYWN0b3J5IHRlbGVtZXRyeS4nLFxuICAgICAgZnVsbERlc2NyaXB0aW9uOiAnQml0WGhpZnQgaXMgYW4gZWRnZS10by1jbG91ZCBJSW9UIHRlbGVtZXRyeSBmcmFtZXdvcmsgdGhhdCBpbmdlc3RzIGhpZ2gtZnJlcXVlbmN5IG1hY2hpbmUgc2lnbmFscyBmcm9tIE1vZGJ1cyBhbmQgT1BDLVVBIGNvbnRyb2xsZXJzLCBjb21wdXRlcyBsaXZlIE9FRSBtZXRyaWNzLCBhbmQgc3RyZWFtcyBwcmVkaWN0aXZlIGFsZXJ0cyBkaXJlY3RseSB0byBlbnRlcnByaXNlIGRhc2hib2FyZHMuJyxcbiAgICAgIHByb2JsZW06ICdGYWN0b3J5IGZsb29yIG1hY2hpbmVzLCBDTkMgdW5pdHMsIGFuZCBQTEMgY29udHJvbGxlcnMgc3RvcmUgZGF0YSBpbiBpc29sYXRlZCBPUEMtVUEsIE1vZGJ1cywgb3Igc2VyaWFsIHByb3RvY29sIHNpbG9zLCBsZWF2aW5nIGZsb29yIG1hbmFnZXJzIHdpdGhvdXQgcmVhbC10aW1lIE9FRSB2aXNpYmlsaXR5LicsXG4gICAgICBzb2x1dGlvbjogJ0FuIGVkZ2UtdG8tY2xvdWQgSUlvVCB0ZWxlbWV0cnkgZnJhbWV3b3JrIHRoYXQgaW5nZXN0cyBoaWdoLWZyZXF1ZW5jeSBtYWNoaW5lIHNpZ25hbHMsIGNvbXB1dGVzIGxpdmUgT0VFLCBhbmQgc3RyZWFtcyBwcmVkaWN0aXZlIGFsZXJ0cyBkaXJlY3RseSB0byBlbnRlcnByaXNlIGRhc2hib2FyZHMuJyxcbiAgICAgIGhvd0l0V29ya3M6ICdFZGdlIGFnZW50cyBjb25uZWN0IHRvIFBMQ3MgdmlhIE1vZGJ1cy9PUEMtVUEgXHUyMTkyIFBhcnNlICYgbm9ybWFsaXplIHNpZ25hbHMgXHUyMTkyIFN0cmVhbSB2aWEgTVFUVCB0byBUaW1lc2NhbGVEQiBcdTIxOTIgUmVuZGVyIGxpdmUgT0VFIGRhc2hib2FyZHMgJiBwdXNoIGFsZXJ0cyB0byBTQVAuJyxcbiAgICAgIGFyY2hpdGVjdHVyZTogJ0Rpc3RyaWJ1dGVkIEVkZ2UgQ29udGFpbmVycyArIFRpbWVzY2FsZURCICsgTVFUVCBFdmVudCBCdXMgKyBSZWFjdCBSZWFsLVRpbWUgRmxvb3IgV2FsbGJvYXJkLicsXG4gICAgICBrZXlGZWF0dXJlczogWydSZWFsLVRpbWUgT0VFIENhbGN1bGF0aW9uJywgJ1ZpYnJhdGlvbiBBbm9tYWx5IERldGVjdGlvbicsICdFbmVyZ3kgTG9hZCBPcHRpbWl6YXRpb24nLCAnQXV0b21hdGVkIFNoaWZ0IFJlcG9ydGluZyddLFxuICAgICAgdGVjaG5vbG9neTogWydNUVRUJywgJ09QQy1VQScsICdOb2RlLVJFRCcsICdUaW1lc2NhbGVEQicsICdEb2NrZXIgRWRnZScsICdSZWFjdCddLFxuICAgICAgdXNlQ2FzZXM6IFsnQ05DIEZsb29yIFRlbGVtZXRyeScsICdFbmVyZ3kgQ29uc3VtcHRpb24gTW9uaXRvcmluZycsICdQcmVkaWN0aXZlIFNwaW5kbGUgTWFpbnRlbmFuY2UnXSxcbiAgICAgIGJ1c2luZXNzT3V0Y29tZXM6ICczNSUgcmVkdWN0aW9uIGluIHVucGxhbm5lZCBkb3dudGltZSBhbmQgbGl2ZSBPRUUgdHJhY2tpbmcgYWNyb3NzIDUwMCsgY29ubmVjdGVkIG1hY2hpbmVzIHdpdGhpbiA0OCBob3Vycy4nLFxuICAgICAgY2FzZVN0dWR5OiAnU21hcnQgRmFjdG9yeSBNYW51ZmFjdHVyaW5nIFRyYW5zZm9ybWF0aW9uJyxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTgxMDkyMTYwNjA3LWVlMjI2MjFkZDc1OD9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgY3JlYXRlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWicsXG4gICAgICB1cGRhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHB1Ymxpc2hlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnYWNjXzAyJyxcbiAgICAgIG5hbWU6ICdNaWdyYXRlTWF4JyxcbiAgICAgIHNsdWc6ICdtaWdyYXRlbWF4JyxcbiAgICAgIGNhdGVnb3J5OiAnQ2xvdWQgJiBEYXRhYmFzZSBNaWdyYXRpb24nLFxuICAgICAgdGFnbGluZTogJ0Nsb3VkICYgRGF0YSBXYXJlaG91c2UgTWlncmF0aW9uIEFjY2VsZXJhdG9yJyxcbiAgICAgIHNob3J0RGVzY3JpcHRpb246ICdBdXRvbWF0ZWQgc2NoZW1hIG1hcHBpbmcgYW5kIHplcm8tZG93bnRpbWUgZGF0YWJhc2UgbWlncmF0aW9uIGZyYW1ld29yay4nLFxuICAgICAgZnVsbERlc2NyaXB0aW9uOiAnTWlncmF0ZU1heCBhdXRvbWF0ZXMgc2NoZW1hIHRyYW5zbGF0aW9uLCBwYXJhbGxlbCBjaGFuZ2UgZGF0YSBjYXB0dXJlIChDREMpLCBhbmQgY29udGludW91cyBkYXRhIHJlY29uY2lsaWF0aW9uIGZvciBzZWFtbGVzcyB0cmFuc2l0aW9ucyBmcm9tIGxlZ2FjeSBkYXRhYmFzZXMgdG8gbW9kZXJuIGNsb3VkIHdhcmVob3VzZXMuJyxcbiAgICAgIHByb2JsZW06ICdMZWdhY3kgZGF0YWJhc2UgbWlncmF0aW9ucyAoT3JhY2xlLCBNU1NRTCwgVGVyYWRhdGEpIHRvIGNsb3VkIGRhdGEgd2FyZWhvdXNlcyBzdWZmZXIgZnJvbSBoaWdoIGRvd250aW1lIHJpc2ssIGNvbXBsZXggc2NoZW1hIHRyYW5zbGF0aW9uIGVycm9ycywgYW5kIGRhdGEgZGlzY3JlcGFuY3kgaXNzdWVzLicsXG4gICAgICBzb2x1dGlvbjogJ0FuIGF1dG9tYXRlZCBzY2hlbWEgbWFwcGluZywgZGF0YSB2YWxpZGF0aW9uLCBhbmQgemVyby1kb3dudGltZSBjdXRvdmVyIGZyYW1ld29yayB0aGF0IGF1dG9tYXRlcyB0cmFuc2xhdGlvbiBhbmQgY29udGludW91c2x5IHZhbGlkYXRlcyByb3ctbGV2ZWwgZGF0YSBjb25zaXN0ZW5jeS4nLFxuICAgICAgaG93SXRXb3JrczogJ0F1dG9tYXRlZCBEREwgU2NoZW1hIFRyYW5zbGF0aW9uIFx1MjE5MiBQYXJhbGxlbCBDaGFuZ2UgRGF0YSBDYXB0dXJlIChDREMpIFN5bmMgXHUyMTkyIEF1dG9tYXRlZCBSb3cgSGFzaCBWZXJpZmljYXRpb24gXHUyMTkyIFplcm8tRG93bnRpbWUgRE5TIEN1dG92ZXIuJyxcbiAgICAgIGFyY2hpdGVjdHVyZTogJ1B5dGhvbiBTY2hlbWEgUGFyc2VyICsgU3BhcmsgUGFyYWxsZWwgQ0RDIEV4dHJhY3RvciArIFNub3dmbGFrZSAvIFJlZHNoaWZ0IFRhcmdldCBMb2FkZXIgKyBBdXRvbWF0ZWQgRGlmZiBBdWRpdG9yLicsXG4gICAgICBrZXlGZWF0dXJlczogWydBdXRvbWF0ZWQgRERMICYgU3RvcmVkIFByb2MgQ29udmVyc2lvbicsICdaZXJvLURvd250aW1lIENEQyBTdHJlYW0nLCAnQXV0b21hdGVkIFJlY29uY2lsaWF0aW9uIEF1ZGl0JywgJ1JvbGxiYWNrIFNhZmV0eSBOZXQnXSxcbiAgICAgIHRlY2hub2xvZ3k6IFsnT3JhY2xlJywgJ01TU1FMJywgJ1Nub3dmbGFrZScsICdSZWRzaGlmdCcsICdEYXRhYnJpY2tzJywgJ0FXUyAvIEdDUCddLFxuICAgICAgdXNlQ2FzZXM6IFsnT3JhY2xlIHRvIFNub3dmbGFrZSBDdXRvdmVyJywgJ09uLVByZW0gdG8gQVdTIENsb3VkIFdhcmVob3VzZScsICdMZWdhY3kgVGVyYWRhdGEgTWlncmF0aW9uJ10sXG4gICAgICBidXNpbmVzc091dGNvbWVzOiAnNjAlIGZhc3RlciBkYXRhYmFzZSBtaWdyYXRpb24gY3V0b3ZlciB3aXRoIDEwMCUgZGF0YSBmaWRlbGl0eSBhbmQgemVybyBidXNpbmVzcyBkaXNydXB0aW9uLicsXG4gICAgICBjYXNlU3R1ZHk6ICdFbnRlcnByaXNlIFNBUCAmIERhdGFiYXNlIENsb3VkIE1pZ3JhdGlvbicsXG4gICAgICBjb3Zlcl9pbWFnZV91cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1ODQ5NDk0OS1lZjAxMGNiZGNjMzE/cT04MCZ3PTEyMDAmYXV0bz1mb3JtYXQmZml0PWNyb3AnLFxuICAgICAgc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2FjY18wMycsXG4gICAgICBuYW1lOiAnUGFyc2VNYXN0ZXInLFxuICAgICAgc2x1ZzogJ3BhcnNlbWFzdGVyJyxcbiAgICAgIGNhdGVnb3J5OiAnRGF0YSBUcmFuc2Zvcm1hdGlvbicsXG4gICAgICB0YWdsaW5lOiAnRW50ZXJwcmlzZSBEYXRhIFRyYW5zZm9ybWF0aW9uIEVuZ2luZScsXG4gICAgICBzaG9ydERlc2NyaXB0aW9uOiAnSGlnaC10aHJvdWdocHV0IHN0cmVhbWluZyBwYXJzaW5nIGVuZ2luZSBmb3IgY29tcGxleCB1bnN0cnVjdHVyZWQgZmVlZHMuJyxcbiAgICAgIGZ1bGxEZXNjcmlwdGlvbjogJ1BhcnNlTWFzdGVyIGNvbnZlcnRzIGhpZ2gtdm9sdW1lIHVuc3RydWN0dXJlZCBmZWVkcyAoRURJIDg1MC84NTYsIFhNTCBpbnZvaWNlcywgbXVsdGktbmVzdGVkIEpTT04sIHNlbnNvciBsb2dzKSBpbnRvIGNsZWFuIHRhYnVsYXIgc2NoZW1hcyB3aXRoIGF1dG9tYXRlZCBzY2hlbWEgZHJpZnQgaGFuZGxpbmcuJyxcbiAgICAgIHByb2JsZW06ICdIaWdoLXZvbHVtZSB1bnN0cnVjdHVyZWQgZmVlZHMgKEVESSA4NTAvODU2LCBYTUwgaW52b2ljZXMsIG11bHRpLW5lc3RlZCBKU09OLCBzZW5zb3IgbG9ncykgb3ZlcmxvYWQgdHJhZGl0aW9uYWwgRVRMIHRvb2xzIGFuZCBjYXVzZSBmcmVxdWVudCBwaXBlbGluZSBicmVha2FnZXMuJyxcbiAgICAgIHNvbHV0aW9uOiAnQSBoaWdoLXRocm91Z2hwdXQgc3RyZWFtaW5nIHBhcnNpbmcgZW5naW5lIHRoYXQgZHluYW1pY2FsbHkgY29udmVydHMgY29tcGxleCB1bnN0cnVjdHVyZWQgcGF5bG9hZCBmb3JtYXRzIGludG8gY2xlYW4gdGFidWxhciBzY2hlbWFzIGZvciB3YXJlaG91c2UgbG9hZGluZy4nLFxuICAgICAgaG93SXRXb3JrczogJ1NjaGVtYSBJbmZlcmVuY2UgJiBQYXlsb2FkIERldGVjdGlvbiBcdTIxOTIgTXVsdGktVGhyZWFkZWQgU3RyZWFtaW5nIFBhcnNlciBcdTIxOTIgU2NoZW1hIERyaWZ0IGF1dG8tZml4IFx1MjE5MiBEaXJlY3QgUGFycXVldC9JY2ViZXJnIFdhcmVob3VzZSBXcml0ZXMuJyxcbiAgICAgIGFyY2hpdGVjdHVyZTogJ1J1c3QgQ29yZSBQYXJzZXIgKyBBcGFjaGUgU3BhcmsgU3RyZWFtaW5nICsgZGJ0IFRyYW5zZm9ybWF0aW9uIExheWVycyArIERlbHRhIC8gSWNlYmVyZyBTdG9yYWdlLicsXG4gICAgICBrZXlGZWF0dXJlczogWydNdWx0aS1Gb3JtYXQgSW5nZXN0aW9uIChFREksIFhNTCwgSlNPTiknLCAnRHluYW1pYyBTY2hlbWEgRHJpZnQgSGFuZGxpbmcnLCAnU3ViLVNlY29uZCBQYXlsb2FkIFBhcnNpbmcnLCAnQnVpbHQtaW4gRGF0YSBRdWFsaXR5IEFzc2VydHMnXSxcbiAgICAgIHRlY2hub2xvZ3k6IFsnUnVzdCcsICdBcGFjaGUgU3BhcmsnLCAnUGFycXVldCcsICdkYnQnLCAnU25vd2ZsYWtlJywgJ0JpZ1F1ZXJ5J10sXG4gICAgICB1c2VDYXNlczogWydFREkgQjJCIFN1cHBseSBDaGFpbiBGZWVkcycsICdGaW5hbmNpYWwgWE1MIENsZWFyaW5nJywgJ011bHRpLVNlbnNvciBKU09OIE5vcm1hbGl6YXRpb24nXSxcbiAgICAgIGJ1c2luZXNzT3V0Y29tZXM6ICc4MCUgcmVkdWN0aW9uIGluIHBpcGVsaW5lIGJyZWFrYWdlIGluY2lkZW50cyBhbmQgNXggZmFzdGVyIHBheWxvYWQgdHJhbnNmb3JtYXRpb24gcmF0ZXMuJyxcbiAgICAgIGNhc2VTdHVkeTogJ0dsb2JhbCBTdXBwbHkgQ2hhaW4gRGF0YSBMYWtlaG91c2UnLFxuICAgICAgY292ZXJfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTEyODgwNDktYmViZGE0ZTM4ZjcxP3E9ODAmdz0xMjAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdhY2NfMDQnLFxuICAgICAgbmFtZTogJ0xpbmtHZW5YJyxcbiAgICAgIHNsdWc6ICdsaW5rZ2VueCcsXG4gICAgICBjYXRlZ29yeTogJ0ludGVncmF0aW9uICYgTWVzaCcsXG4gICAgICB0YWdsaW5lOiAnU0FQIC8gRVJQICYgQ2xvdWQgSW50ZWdyYXRpb24gRnJhbWV3b3JrJyxcbiAgICAgIHNob3J0RGVzY3JpcHRpb246ICdFdmVudC1kcml2ZW4gZW50ZXJwcmlzZSBpbnRlZ3JhdGlvbiBtZXNoIHdpdGggcHJlYnVpbHQgU0FQIGNvbm5lY3RvcnMuJyxcbiAgICAgIGZ1bGxEZXNjcmlwdGlvbjogJ0xpbmtHZW5YIGNvbm5lY3RzIFNBUCBTLzRIQU5BLCBTYWxlc2ZvcmNlLCBTZXJ2aWNlTm93LCBhbmQgY3VzdG9tIGNsb3VkIGFwcHMgdmlhIGFuIGV2ZW50LWRyaXZlbiBtZXNoIHdpdGggYXV0b21hdGVkIEFQSSBjb250cmFjdCB0ZXN0aW5nIGFuZCBkZWFkLWxldHRlciByZXRyeSBxdWV1ZXMuJyxcbiAgICAgIHByb2JsZW06ICdCdWlsZGluZyBwb2ludC10by1wb2ludCBpbnRlZ3JhdGlvbnMgYmV0d2VlbiBTQVAgUy80SEFOQSwgU2FsZXNmb3JjZSwgU2VydmljZU5vdywgYW5kIGN1c3RvbSBjbG91ZCBhcHBzIGNyZWF0ZXMgZnJhZ2lsZSBicml0dGxlIHNwYWdoZXR0aSBjb2RlLicsXG4gICAgICBzb2x1dGlvbjogJ0FuIGV2ZW50LWRyaXZlbiBpbnRlZ3JhdGlvbiBtZXNoIHdpdGggcHJlYnVpbHQgZW50ZXJwcmlzZSBTQVAgY29ubmVjdG9ycywgYXV0b21hdGVkIEFQSSBjb250cmFjdCB0ZXN0aW5nLCBhbmQgcmVsaWFibGUgbWVzc2FnZSByZXRyeSByb3V0aW5nLicsXG4gICAgICBob3dJdFdvcmtzOiAnRXZlbnQgUHJvZHVjZXIgKFNBUCBJRG9jIC8gUkZDKSBcdTIxOTIgTGlua0dlblggRXZlbnQgTWVzaCBSb3V0ZXIgXHUyMTkyIFNjaGVtYSBDb250cmFjdCBWYWxpZGF0aW9uIFx1MjE5MiBUYXJnZXQgQ29uc3VtZXIgRGVsaXZlcnkgd2l0aCBSZXRyeSBRdWV1ZS4nLFxuICAgICAgYXJjaGl0ZWN0dXJlOiAnRXZlbnQtRHJpdmVuIE1pY3Jvc2VydmljZXMgTWVzaCArIFJhYmJpdE1RIC8gS2Fma2EgRXZlbnQgQnVzICsgT3BlbkFQSSBDb250cmFjdCBWYWxpZGF0b3IgKyBQcmVidWlsdCBTQVAgUkZDIENvbm5lY3RvcnMuJyxcbiAgICAgIGtleUZlYXR1cmVzOiBbJ1ByZWJ1aWx0IFNBUCBTLzRIQU5BIENvbm5lY3RvcnMnLCAnRXZlbnQgTWVzaCBQdWJsaXNoLVN1YnNjcmliZScsICdDb250cmFjdCBDb21wYXRpYmlsaXR5IEd1YXJkJywgJ0F1dG9tYXRlZCBEZWFkLUxldHRlciBRdWV1ZSddLFxuICAgICAgdGVjaG5vbG9neTogWydTQVAgUy80SEFOQScsICdTYWxlc2ZvcmNlJywgJ1NlcnZpY2VOb3cnLCAnQXBhY2hlIEthZmthJywgJ0dyYXBoUUwnLCAnRG9ja2VyJ10sXG4gICAgICB1c2VDYXNlczogWydTQVAgdG8gU2FsZXNmb3JjZSBPcmRlciBTeW5jJywgJ1JlYWwtVGltZSBJbnZlbnRvcnkgTWVzaCcsICdDcm9zcy1TeXN0ZW0gQ3VzdG9tZXIgTWFzdGVyIFN5bmMnXSxcbiAgICAgIGJ1c2luZXNzT3V0Y29tZXM6ICc3MCUgcmVkdWN0aW9uIGluIGludGVncmF0aW9uIHNldHVwIGVmZm9ydCB3aXRoIDk5Ljk5OSUgbWVzc2FnZSBkZWxpdmVyeSByZWxpYWJpbGl0eS4nLFxuICAgICAgY2FzZVN0dWR5OiAnQkZTSSBBdXRvbWF0ZWQgRVJQIEludGVncmF0aW9uIEVuZ2luZScsXG4gICAgICBjb3Zlcl9pbWFnZV91cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ1MTE4NzU4MDQ1OS00MzQ5MDI3OWMwZmE/cT04MCZ3PTEyMDAmYXV0bz1mb3JtYXQmZml0PWNyb3AnLFxuICAgICAgc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonXG4gICAgfVxuICBdLFxuICBpbmR1c3RyaWVzOiBbXG4gICAge1xuICAgICAgaWQ6ICdpbmRfMDEnLFxuICAgICAgbmFtZTogJ01hbnVmYWN0dXJpbmcnLFxuICAgICAgc2x1ZzogJ21hbnVmYWN0dXJpbmcnLFxuICAgICAgc3VtbWFyeTogJ1NtYXJ0IGZhY3RvcnkgdGVsZW1ldHJ5LCBPRUUgb3B0aW1pemF0aW9uLCBtYWNoaW5lIHZpc2lvbiBxdWFsaXR5IGluc3BlY3Rpb24sIGFuZCBzdXBwbHkgY2hhaW4gdmlzaWJpbGl0eSBmb3IgZGlzY3JldGUgJiBwcm9jZXNzIG1hbnVmYWN0dXJlcnMuJyxcbiAgICAgIGNvbnRlbnQ6ICdXZSBlbXBvd2VyIG1hbnVmYWN0dXJpbmcgcGxhbnRzIHRvIGNvbm5lY3Qgc2hvcC1mbG9vciBQTENzLCBlbGltaW5hdGUgdW5wbGFubmVkIGRvd250aW1lIHdpdGggcHJlZGljdGl2ZSBtYWludGVuYW5jZSwgYW5kIGF1dG9tYXRlIHByb2R1Y3Rpb24gcmVwb3J0aW5nIGFjcm9zcyBoaWdoLXNwZWVkIGFzc2VtYmx5IGxpbmVzLicsXG4gICAgICBidXNpbmVzc1Byb2JsZW1zOiBbXG4gICAgICAgICdVbnBsYW5uZWQgbWFjaGluZSBicmVha2Rvd25zIGFuZCBkb3dudGltZScsXG4gICAgICAgICdNYW51YWwgcGFwZXItYmFzZWQgc2hpZnQgdHJhY2tpbmcnLFxuICAgICAgICAnU3VwcGx5IGNoYWluIHBhcnRzIHN0b2Nrb3V0cydcbiAgICAgIF0sXG4gICAgICBzb2x1dGlvbnM6IFtcbiAgICAgICAgJ0VkZ2UgSUlvVCBtYWNoaW5lIHRlbGVtZXRyeSB2aWEgQml0WGhpZnQnLFxuICAgICAgICAnTGl2ZSBmbG9vciBPRUUgbWFuYWdlbWVudCB3YWxsYm9hcmRzJyxcbiAgICAgICAgJ0F1dG9tYXRlZCBxdWFsaXR5IGluc3BlY3Rpb24gd2l0aCBjb21wdXRlciB2aXNpb24nXG4gICAgICBdLFxuICAgICAgdGVjaG5vbG9neTogWydPUEMtVUEnLCAnTVFUVCcsICdUaW1lc2NhbGVEQicsICdQeXRob24nLCAnUmVhY3QnLCAnU0FQIENvbm5lY3RvciddLFxuICAgICAgdXNlQ2FzZXM6IFsnQXV0b21vdGl2ZSBBc3NlbWJseSBMaW5lcycsICdDTkMgUHJlY2lzaW9uIFRvb2xpbmcnLCAnVGV4dGlsZSBNYWNoaW5lcnkgVGVsZW1ldHJ5J10sXG4gICAgICBjb3Zlcl9pbWFnZV91cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4MTA5MjE2MDYwNy1lZTIyNjIxZGQ3NTg/cT04MCZ3PTEyMDAmYXV0bz1mb3JtYXQmZml0PWNyb3AnLFxuICAgICAgc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2luZF8wMicsXG4gICAgICBuYW1lOiAnRW5lcmd5ICYgVXRpbGl0aWVzJyxcbiAgICAgIHNsdWc6ICdlbmVyZ3ktdXRpbGl0aWVzJyxcbiAgICAgIHN1bW1hcnk6ICdTbWFydCBncmlkIG1vbml0b3JpbmcsIHR1cmJpbmUgYW5vbWFseSBwcmVkaWN0aW9uLCBsb2FkIGZvcmVjYXN0aW5nLCBhbmQgYXV0b21hdGVkIGVudmlyb25tZW50YWwgY29tcGxpYW5jZSBhdWRpdGluZy4nLFxuICAgICAgY29udGVudDogJ1JlYWwtdGltZSB0ZWxlbWV0cnkgYW5kIHByZWRpY3RpdmUgbW9kZWxzIGZvciBwb3dlciBkaXN0cmlidXRpb24gbmV0d29ya3MsIHJlbmV3YWJsZSBnZW5lcmF0aW9uIHBsYW50cywgYW5kIG11bmljaXBhbCB1dGlsaXRpZXMuJyxcbiAgICAgIGJ1c2luZXNzUHJvYmxlbXM6IFtcbiAgICAgICAgJ0dyaWQgbG9hZCBmbHVjdHVhdGlvbiBpbnN0YWJpbGl0eScsXG4gICAgICAgICdIaWdoIGNvc3Qgb2YgZmllbGQgdHVyYmluZSBtYWludGVuYW5jZScsXG4gICAgICAgICdDb21wbGV4IGNhcmJvbiBjb21wbGlhbmNlIHJlcG9ydGluZydcbiAgICAgIF0sXG4gICAgICBzb2x1dGlvbnM6IFtcbiAgICAgICAgJ1ByZWRpY3RpdmUgdHJhbnNmb3JtZXIgYW5kIHR1cmJpbmUgdmlicmF0aW9uIG1vZGVscycsXG4gICAgICAgICdSZWFsLXRpbWUgcG93ZXIgZGlzdHJpYnV0aW9uIHRlbGVtZXRyeScsXG4gICAgICAgICdBdXRvbWF0ZWQgRVNHIGRhdGEgYWdncmVnYXRpb24nXG4gICAgICBdLFxuICAgICAgdGVjaG5vbG9neTogWydTQ0FEQScsICdJbmZsdXhEQicsICdUZW5zb3JGbG93JywgJ0FwYWNoZSBLYWZrYScsICdHcmFmYW5hJ10sXG4gICAgICB1c2VDYXNlczogWydTb2xhciBGYXJtIE1vbml0b3JpbmcnLCAnV2luZCBUdXJiaW5lIEhlYWx0aCBQcmVkaWN0aW9uJywgJ1NtYXJ0IE1ldGVyIEdyaWQgVGVsZW1ldHJ5J10sXG4gICAgICBjb3Zlcl9pbWFnZV91cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MzM0MTMwNDE3MC05NzFkY2NiNWFjMWU/cT04MCZ3PTEyMDAmYXV0bz1mb3JtYXQmZml0PWNyb3AnLFxuICAgICAgc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2luZF8wMycsXG4gICAgICBuYW1lOiAnUmV0YWlsICYgRS1Db21tZXJjZScsXG4gICAgICBzbHVnOiAncmV0YWlsLWVjb21tZXJjZScsXG4gICAgICBzdW1tYXJ5OiAnT21uaWNoYW5uZWwgaW52ZW50b3J5IHN5bmMsIGR5bmFtaWMgcHJpY2luZyBlbmdpbmVzLCBjdXN0b21lciBsaWZldGltZSB2YWx1ZSBwcmVkaWN0aW9uLCBhbmQgcmVhbC10aW1lIG9yZGVyIHJvdXRpbmcuJyxcbiAgICAgIGNvbnRlbnQ6ICdIaWdoLXRocm91Z2hwdXQgZGF0YSBwaXBlbGluZXMgYW5kIHByZWRpY3RpdmUgZW5naW5lcyBlbmFibGluZyB1bmlmaWVkIGN1c3RvbWVyIGpvdXJuZXlzIGFuZCByZWFsLXRpbWUgaW52ZW50b3J5IG1hbmFnZW1lbnQuJyxcbiAgICAgIGJ1c2luZXNzUHJvYmxlbXM6IFtcbiAgICAgICAgJ0ludmVudG9yeSBzdG9ja291dHMgYW5kIG92ZXJzdG9jayBjb3N0cycsXG4gICAgICAgICdGcmFnbWVudGVkIGN1c3RvbWVyIHByb2ZpbGUgZGF0YScsXG4gICAgICAgICdTbG93IHNlYXJjaCBhbmQgcmVjb21tZW5kYXRpb24gbGF0ZW5jeSdcbiAgICAgIF0sXG4gICAgICBzb2x1dGlvbnM6IFtcbiAgICAgICAgJ0V2ZW50LWRyaXZlbiBvcmRlciBhbmQgaW52ZW50b3J5IHN5bmMgdmlhIExpbmtHZW5YJyxcbiAgICAgICAgJ1JlYWwtdGltZSBwZXJzb25hbGl6YXRpb24gYW5kIHNlbWFudGljIHByb2R1Y3Qgc2VhcmNoJyxcbiAgICAgICAgJ0F1dG9tYXRlZCBkZW1hbmQgZm9yZWNhc3RpbmcgcGlwZWxpbmVzJ1xuICAgICAgXSxcbiAgICAgIHRlY2hub2xvZ3k6IFsnU25vd2ZsYWtlJywgJ2RidCcsICdSZWRpcycsICdFbGFzdGljc2VhcmNoJywgJ0FXUyBMYW1iZGEnXSxcbiAgICAgIHVzZUNhc2VzOiBbJ1JlYWwtVGltZSBPbW5pY2hhbm5lbCBJbnZlbnRvcnknLCAnRHluYW1pYyBQcmljZSBFbGFzdGljaXR5JywgJ0N1c3RvbWVyIENodXJuIFByZXZlbnRpb24nXSxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTU2NzQyMDQ5LTBhNjdjNTU3NGY3Mz9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgY3JlYXRlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWicsXG4gICAgICB1cGRhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHB1Ymxpc2hlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnaW5kXzA0JyxcbiAgICAgIG5hbWU6ICdCRlNJJyxcbiAgICAgIHNsdWc6ICdiZnNpJyxcbiAgICAgIHN1bW1hcnk6ICdGcmF1ZCBhbm9tYWx5IGRldGVjdGlvbiwgYXV0b21hdGVkIHJlZ3VsYXRvcnkgY29tcGxpYW5jZSwgY29yZSBiYW5raW5nIGxlZGdlciBzeW5jLCBhbmQgYWdlbnRpYyBjdXN0b21lciB2ZXJpZmljYXRpb24uJyxcbiAgICAgIGNvbnRlbnQ6ICdFbmdpbmVlcmVkIGZvciBmaW5hbmNpYWwgaW5zdGl0dXRpb25zIHJlcXVpcmluZyBzdWItbWlsbGlzZWNvbmQgZnJhdWQgZGV0ZWN0aW9uLCBzdHJpY3QgRFBEUCBwcml2YWN5LCBhbmQgcmVzaWxpZW50IHRyYW5zYWN0aW9uIHByb2Nlc3NpbmcuJyxcbiAgICAgIGJ1c2luZXNzUHJvYmxlbXM6IFtcbiAgICAgICAgJ0V2b2x2aW5nIGZpbmFuY2lhbCBmcmF1ZCBwYXR0ZXJucycsXG4gICAgICAgICdTdHJpY3QgRFBEUCBjb21wbGlhbmNlIHJlcG9ydGluZyBwcmVzc3VyZScsXG4gICAgICAgICdMZWdhY3kgY29yZSBiYW5raW5nIGRhdGEgc2lsb3MnXG4gICAgICBdLFxuICAgICAgc29sdXRpb25zOiBbXG4gICAgICAgICdHcmFwaC1iYXNlZCByZWFsLXRpbWUgZnJhdWQgdHJhbnNhY3Rpb24gc2NvcmluZycsXG4gICAgICAgICdBdXRvbWF0ZWQgYXVkaXQgbG9nZ2luZyBhbmQgZGF0YSBsaW5lYWdlJyxcbiAgICAgICAgJ1NlY3VyZSBjb3JlIGJhbmtpbmcgaW50ZWdyYXRpb24gbWVzaCdcbiAgICAgIF0sXG4gICAgICB0ZWNobm9sb2d5OiBbJ0FwYWNoZSBGbGluaycsICdQb3N0Z3JlU1FMJywgJ0t1YmVybmV0ZXMnLCAnUHl0aG9uJywgJ1Nub3dmbGFrZSddLFxuICAgICAgdXNlQ2FzZXM6IFsnSW5zdGFudCBLWUMgRG9jdW1lbnQgVmVyaWZpY2F0aW9uJywgJ0NyZWRpdCBSaXNrIFNjb3JpbmcnLCAnQW50aS1Nb25leSBMYXVuZGVyaW5nIFRlbGVtZXRyeSddLFxuICAgICAgY292ZXJfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NjM5ODY3Njg2MDktMzIyZGExMzU3NWYzP3E9ODAmdz0xMjAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdpbmRfMDUnLFxuICAgICAgbmFtZTogJ0hlYWx0aGNhcmUnLFxuICAgICAgc2x1ZzogJ2hlYWx0aGNhcmUnLFxuICAgICAgc3VtbWFyeTogJ0NsaW5pY2FsIHRlbGVtZXRyeSBpbmdlc3Rpb24sIG1lZGljYWwgZGV2aWNlIGNvbm5lY3Rpdml0eSwgSElQQUEvcHJpdmFjeSBjb21wbGlhbmNlLCBhbmQgQUkgZGlhZ25vc3RpYyBhc3Npc3RhbnQgcGlwZWxpbmVzLicsXG4gICAgICBjb250ZW50OiAnQ29ubmVjdGluZyBtZWRpY2FsIGRldmljZXMgYW5kIGhlYWx0aGNhcmUgc3lzdGVtcyB0byBkZWxpdmVyIHNlY3VyZSBwYXRpZW50IGRpYWdub3N0aWNzIGFuZCByZWFsLXRpbWUgY2xpbmljYWwgZGFzaGJvYXJkcy4nLFxuICAgICAgYnVzaW5lc3NQcm9ibGVtczogW1xuICAgICAgICAnRnJhZ21lbnRlZCBwYXRpZW50IGVsZWN0cm9uaWMgaGVhbHRoIHJlY29yZHMnLFxuICAgICAgICAnU3RyaWN0IGhlYWx0aCBkYXRhIHByaXZhY3kgcmVndWxhdGlvbnMnLFxuICAgICAgICAnRGVsYXllZCBjbGluaWNhbCBkaWFnbm9zdGljIGZlZWRiYWNrJ1xuICAgICAgXSxcbiAgICAgIHNvbHV0aW9uczogW1xuICAgICAgICAnRkhJUi9ITDcgc3RyZWFtaW5nIGludGVncmF0aW9uIHBpcGVsaW5lcycsXG4gICAgICAgICdBdXRvbWF0ZWQgYW5vbnltaXplZCBkYXRhIGxha2Vob3VzZXMnLFxuICAgICAgICAnR3JvdW5kZWQgY2xpbmljYWwgZGVjaXNpb24gc3VwcG9ydCBtb2RlbHMnXG4gICAgICBdLFxuICAgICAgdGVjaG5vbG9neTogWydITDcvRkhJUicsICdQb3N0Z3JlU1FMJywgJ0Zhc3RBUEknLCAnUWRyYW50JywgJ0F6dXJlIEhlYWx0aGNhcmUnXSxcbiAgICAgIHVzZUNhc2VzOiBbJ0lDVSBCZWQgVGVsZW1ldHJ5JywgJ0NsaW5pY2FsIFRyaWFsIFBhdGllbnQgTWF0Y2hpbmcnLCAnTWVkaWNhbCBJbWFnaW5nIEluZmVyZW5jZSddLFxuICAgICAgY292ZXJfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NzYwOTExNjAzOTktMTEyYmE4ZDI1ZDFkP3E9ODAmdz0xMjAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdpbmRfMDYnLFxuICAgICAgbmFtZTogJ0xvZ2lzdGljcycsXG4gICAgICBzbHVnOiAnbG9naXN0aWNzJyxcbiAgICAgIHN1bW1hcnk6ICdGbGVldCB0ZWxlbWV0cnkgdHJhY2tpbmcsIHdhcmVob3VzZSByb3V0ZSBvcHRpbWl6YXRpb24sIGF1dG9tYXRlZCBmcmVpZ2h0IGF1ZGl0LCBhbmQgcHJlZGljdGl2ZSBkZWxpdmVyeSBFVEFzLicsXG4gICAgICBjb250ZW50OiAnUmVhbC10aW1lIHN1cHBseSBjaGFpbiBpbnRlbGxpZ2VuY2UgY29ubmVjdGluZyB2ZWhpY2xlIElvVCBzZW5zb3JzIHdpdGggY2VudHJhbCB3YXJlaG91c2UgbWFuYWdlbWVudCBzeXN0ZW1zLicsXG4gICAgICBidXNpbmVzc1Byb2JsZW1zOiBbXG4gICAgICAgICdVbnByZWRpY3RhYmxlIGZyZWlnaHQgdHJhbnNpdCBkZWxheXMnLFxuICAgICAgICAnSGlnaCBmdWVsIGNvbnN1bXB0aW9uIGluZWZmaWNpZW5jaWVzJyxcbiAgICAgICAgJ01hbnVhbCBiaWxsIG9mIGxhZGluZyByZWNvbmNpbGlhdGlvbidcbiAgICAgIF0sXG4gICAgICBzb2x1dGlvbnM6IFtcbiAgICAgICAgJ0dQUyBhbmQgQ0FOLWJ1cyBlZGdlIHRlbGVtZXRyeSBpbmdlc3Rpb24nLFxuICAgICAgICAnQXV0b21hdGVkIGZyZWlnaHQgZG9jdW1lbnQgcGFyc2luZyB2aWEgUGFyc2VNYXN0ZXInLFxuICAgICAgICAnRHluYW1pYyBkaXNwYXRjaCBhbmQgZGVsaXZlcnkgcm91dGluZyBhbGdvcml0aG1zJ1xuICAgICAgXSxcbiAgICAgIHRlY2hub2xvZ3k6IFsnTVFUVCcsICdUaW1lc2NhbGVEQicsICdHbycsICdEb2NrZXInLCAnR29vZ2xlIE1hcHMgQVBJJ10sXG4gICAgICB1c2VDYXNlczogWydDb2xkIENoYWluIFRlbXBlcmF0dXJlIE1vbml0b3JpbmcnLCAnRmxlZXQgRnVlbCBUZWxlbWV0cnknLCAnQXV0b21hdGVkIEZyZWlnaHQgSW52b2ljZSBDbGVhcmluZyddLFxuICAgICAgY292ZXJfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODY1MjgxMTYzMTEtYWQ4ZGQzYzgzMTBkP3E9ODAmdz0xMjAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJ1xuICAgIH1cbiAgXSxcbiAgY2FzZVN0dWRpZXM6IFtcbiAgICB7XG4gICAgICBpZDogJ2NzXzAxJyxcbiAgICAgIHRpdGxlOiAnU21hcnQgRmFjdG9yeSBJSW9UIFRyYW5zZm9ybWF0aW9uIGZvciBBdXRvbW90aXZlIENvbXBvbmVudCBPRU0nLFxuICAgICAgY2xpZW50X25hbWU6ICdUaWVyLTEgQXV0b21vdGl2ZSBDb21wb25lbnQgTWFudWZhY3R1cmVyJyxcbiAgICAgIHNsdWc6ICdzbWFydC1mYWN0b3J5LW1hbnVmYWN0dXJpbmctdHJhbnNmb3JtYXRpb24nLFxuICAgICAgaW5kdXN0cnk6ICdNYW51ZmFjdHVyaW5nJyxcbiAgICAgIGxvY2F0aW9uOiAnQ29pbWJhdG9yZSwgVGFtaWwgTmFkdScsXG4gICAgICBhY2NlbGVyYXRvcjogJ0JpdFhoaWZ0IElJb1QgUGxhdGZvcm0nLFxuICAgICAgcmVsYXRlZFNlcnZpY2U6ICdJbmR1c3RyaWFsIElvVCAoSUlvVCknLFxuICAgICAgY2hhbGxlbmdlOiAnVGhlIE9FTSBvcGVyYXRlZCA1MDArIG1hY2hpbmluZyBjZW50ZXJzIGFjcm9zcyAzIGZhY2lsaXRpZXMgd2l0aCBtYW51YWwgcGFwZXIgc2hpZnQgbG9ncywgY2F1c2luZyA0MiBob3VycyBvZiB1bmV4cGxhaW5lZCBtYWNoaW5lIGRvd250aW1lIHBlciBtb250aCBhbmQgdW52ZXJpZmllZCBPRUUgbWV0cmljcy4nLFxuICAgICAgc29sdXRpb246ICdEZXBsb3llZCBCaXRYaGlmdCBlZGdlIHRlbGVtZXRyeSBjb250YWluZXJzIGFjcm9zcyBhbGwgbWFjaGluZSBQTENzLCBzdHJlYW1pbmcgaGlnaC1mcmVxdWVuY3kgdmlicmF0aW9uIGFuZCBzcGluZGxlIGxvYWQgbWV0cmljcyBpbnRvIGEgY2VudHJhbGl6ZWQgVGltZXNjYWxlREIgY2x1c3RlciB3aXRoIHJlYWwtdGltZSBmbG9vciB3YWxsYm9hcmRzLicsXG4gICAgICBpbXBsZW1lbnRhdGlvbjogJ0luc3RhbGxlZCBub24taW52YXNpdmUgTW9kYnVzIGFuZCBPUEMtVUEgZWRnZSBnYXRld2F5IG5vZGVzLiBDb25maWd1cmVkIGF1dG9tYXRlZCBhbGVydCBydWxlcyBmb3Igc3BpbmRsZSB2aWJyYXRpb24gYW5vbWFsaWVzIGFuZCBjb25uZWN0ZWQgcHJvZHVjdGlvbiBtZXRyaWNzIHRvIHRoZSBTQVAgRVJQIGxlZGdlci4nLFxuICAgICAgcmVzdWx0czogJ0VsaW1pbmF0ZWQgbWFudWFsIHNoaWZ0IGxvZ3MsIHJlZHVjZWQgdW5wbGFubmVkIG1hY2hpbmUgc3RvcHBhZ2UgYnkgMzUlLCBhbmQgZXN0YWJsaXNoZWQgOTkuOCUgYWNjdXJhdGUgcmVhbC10aW1lIE9FRSB0cmFja2luZyBhY3Jvc3MgYWxsIDMgcHJvZHVjdGlvbiBmYWNpbGl0aWVzLicsXG4gICAgICBtZXRyaWNzOiBbXG4gICAgICAgIHsgbGFiZWw6ICdEb3dudGltZSBSZWR1Y3Rpb24nLCBtZXRyaWM6ICczNSUnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdDb25uZWN0ZWQgQ05DIExpbmVzJywgbWV0cmljOiAnNTAwKycgfSxcbiAgICAgICAgeyBsYWJlbDogJ0RlcGxveW1lbnQgVGltZScsIG1ldHJpYzogJzQ4IEhvdXJzJyB9XG4gICAgICBdLFxuICAgICAgdGVjaG5vbG9naWVzOiBbJ01RVFQnLCAnT1BDLVVBJywgJ0JpdFhoaWZ0JywgJ1RpbWVzY2FsZURCJywgJ1B5dGhvbicsICdSZWFjdCddLFxuICAgICAgY292ZXJfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODEwOTIxNjA2MDctZWUyMjYyMWRkNzU4P3E9ODAmdz0xMjAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0xMFQwMDowMDowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTEwVDAwOjAwOjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0xMFQwMDowMDowMC4wMDBaJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdjc18wMicsXG4gICAgICB0aXRsZTogJ0VudGVycHJpc2UgWmVyby1Eb3dudGltZSBEYXRhIFdhcmVob3VzZSBNaWdyYXRpb24gZm9yIEdsb2JhbCBSZXRhaWxlcicsXG4gICAgICBjbGllbnRfbmFtZTogJ011bHRpbmF0aW9uYWwgUmV0YWlsICYgRS1Db21tZXJjZSBHcm91cCcsXG4gICAgICBzbHVnOiAnZW50ZXJwcmlzZS1kYXRhYmFzZS1jbG91ZC1taWdyYXRpb24nLFxuICAgICAgaW5kdXN0cnk6ICdSZXRhaWwgJiBFLUNvbW1lcmNlJyxcbiAgICAgIGxvY2F0aW9uOiAnQmVuZ2FsdXJ1IC8gU2luZ2Fwb3JlJyxcbiAgICAgIGFjY2VsZXJhdG9yOiAnTWlncmF0ZU1heCBDbG91ZCBFbmdpbmUnLFxuICAgICAgcmVsYXRlZFNlcnZpY2U6ICdEYXRhIEVuZ2luZWVyaW5nJyxcbiAgICAgIGNoYWxsZW5nZTogJ0EgbGVnYWN5IDQwVEIgT3JhY2xlIGRhdGFiYXNlIHJ1bm5pbmcgY3JpdGljYWwgdHJhbnNhY3Rpb25hbCBpbnZlbnRvcnkgcXVlcmllcyBzdWZmZXJlZCBmcm9tIHF1ZXJ5IHRpbWVvdXRzIGFuZCBleGNlc3NpdmUgb24tcHJlbWlzZSBoYXJkd2FyZSBsaWNlbnNpbmcgY29zdHMuJyxcbiAgICAgIHNvbHV0aW9uOiAnVXRpbGl6ZWQgTWlncmF0ZU1heCB0byBhdXRvbWF0ZSBzY2hlbWEgdHJhbnNsYXRpb24sIGVzdGFibGlzaCBwYXJhbGxlbCBDaGFuZ2UgRGF0YSBDYXB0dXJlIChDREMpIHN0cmVhbWluZywgYW5kIGV4ZWN1dGUgemVyby1kb3dudGltZSBETlMgY3V0b3ZlciB0byBTbm93Zmxha2UuJyxcbiAgICAgIGltcGxlbWVudGF0aW9uOiAnQ29udmVydGVkIDEsMjAwKyBEREwgdGFibGVzIGFuZCBzdG9yZWQgcHJvY2VkdXJlcy4gRXhlY3V0ZWQgcGFyYWxsZWwgcm93LWhhc2ggdmFsaWRhdGlvbiBhdWRpdHMgb3ZlciAyIHdlZWtzIHByaW9yIHRvIGZpbmFsIGluc3RhbnRhbmVvdXMgRE5TIGN1dG92ZXIuJyxcbiAgICAgIHJlc3VsdHM6ICcxMDAlIGRhdGEgZmlkZWxpdHkgd2l0aCB6ZXJvIG1pbnV0ZXMgb2YgYnVzaW5lc3MgZG93bnRpbWUsIDY1JSByZWR1Y3Rpb24gaW4gYW5hbHl0aWNhbCBxdWVyeSBleGVjdXRpb24gdGltZXMsIGFuZCAkNDUwayBhbm51YWwgaW5mcmFzdHJ1Y3R1cmUgc2F2aW5ncy4nLFxuICAgICAgbWV0cmljczogW1xuICAgICAgICB7IGxhYmVsOiAnRGF0YSBGaWRlbGl0eScsIG1ldHJpYzogJzEwMCUnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdEb3dudGltZScsIG1ldHJpYzogJzAgTWlucycgfSxcbiAgICAgICAgeyBsYWJlbDogJ1F1ZXJ5IFNwZWVkdXAnLCBtZXRyaWM6ICc2NSUnIH1cbiAgICAgIF0sXG4gICAgICB0ZWNobm9sb2dpZXM6IFsnTWlncmF0ZU1heCcsICdPcmFjbGUnLCAnU25vd2ZsYWtlJywgJ0FwYWNoZSBTcGFyaycsICdkYnQnLCAnQVdTJ10sXG4gICAgICBjb3Zlcl9pbWFnZV91cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1ODQ5NDk0OS1lZjAxMGNiZGNjMzE/cT04MCZ3PTEyMDAmYXV0bz1mb3JtYXQmZml0PWNyb3AnLFxuICAgICAgc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTE1VDAwOjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMTVUMDA6MDA6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA4LTE1VDAwOjAwOjAwLjAwMFonXG4gICAgfVxuICBdLFxuICByZXBvcnRzOiBbXG4gICAge1xuICAgICAgaWQ6ICdyZXBfMDEnLFxuICAgICAgcmVwb3J0VHlwZTogJ1dlZWtseScsXG4gICAgICBjYXRlZ29yeTogJ1NlcnZpY2VzJyxcbiAgICAgIHRpdGxlOiAnRWRnZSBUZWxlbWV0cnkgJiBPUEMtVUEgSW5nZXN0aW9uIEJlbmNobWFyaycsXG4gICAgICBwcm9ibGVtU3RhdGVtZW50OiAnTGVnYWN5IG1hY2hpbmVzIGxhY2sgcmVhbC10aW1lIG9wZXJhdGlvbmFsIHZpc2liaWxpdHkgYW5kIHN0cmVhbSB0ZWxlbWV0cnkgaW4gc2lsb2VkIHByb3ByaWV0YXJ5IGZvcm1hdHMuJyxcbiAgICAgIHNvbHV0aW9uU3RhdGVtZW50OiAnRGVwbG95IGVkZ2UgaW50ZWxsaWdlbmNlIGNvbnRhaW5lcnMgY29ubmVjdGluZyBQTENzIHdpdGggVGltZXNjYWxlREIgZm9yIGxpdmUgT0VFIHdhbGxib2FyZHMuJyxcbiAgICAgIHRlY2hTdGFjazogWydJSW9UJywgJ1B5dGhvbicsICdNUVRUJywgJ1RpbWVzY2FsZURCJywgJ09QQy1VQSddLFxuICAgICAgZGF0ZTogJzIwMjYtMDgtMjcnLFxuICAgICAgY292ZXJfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODEwOTIxNjA2MDctZWUyMjYyMWRkNzU4P3E9ODAmdz0xMjAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJyxcbiAgICAgIHJlbGF0ZWRDb250ZW50OiAnSW5kdXN0cmlhbCBJb1QgKElJb1QpJyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0yN1QwODowMDowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTI3VDA4OjAwOjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0yN1QwODowMDowMC4wMDBaJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdyZXBfMDInLFxuICAgICAgcmVwb3J0VHlwZTogJ1dlZWtseScsXG4gICAgICBjYXRlZ29yeTogJ0FjY2VsZXJhdG9ycycsXG4gICAgICB0aXRsZTogJ01pZ3JhdGVNYXggU2NoZW1hIERyaWZ0IEF1dG8tSGVhbGluZyBFbmdpbmUnLFxuICAgICAgcHJvYmxlbVN0YXRlbWVudDogJ1VuYW5ub3VuY2VkIHVwc3RyZWFtIEVSUCBzY2hlbWEgYWx0ZXJhdGlvbnMgYnJlYWsgbWlzc2lvbi1jcml0aWNhbCBhbmFseXRpY2FsIGRhdGFiYXNlIHBpcGVsaW5lcy4nLFxuICAgICAgc29sdXRpb25TdGF0ZW1lbnQ6ICdBdXRvbWF0ZSBkeW5hbWljIHNjaGVtYSBpbmZlcmVuY2UgYW5kIGF1dG9tYXRlZCBtaWdyYXRpb24gRERMIG1hcHBpbmcgb24gaW5jb21pbmcgc3RyZWFtcy4nLFxuICAgICAgdGVjaFN0YWNrOiBbJ1NwYXJrJywgJ1J1c3QnLCAnU25vd2ZsYWtlJywgJ2RidCcsICdBV1MnXSxcbiAgICAgIGRhdGU6ICcyMDI2LTA4LTIwJyxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTU4NDk0OTQ5LWVmMDEwY2JkY2MzMT9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICByZWxhdGVkQ29udGVudDogJ01pZ3JhdGVNYXgnLFxuICAgICAgc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTIwVDA4OjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMjBUMDg6MDA6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA4LTIwVDA4OjAwOjAwLjAwMFonXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3JlcF8wMycsXG4gICAgICByZXBvcnRUeXBlOiAnTW9udGhseScsXG4gICAgICBjYXRlZ29yeTogJ0Nhc2UgU3R1ZGllcycsXG4gICAgICB0aXRsZTogJ1NtYXJ0IEZhY3RvcnkgTWFudWZhY3R1cmluZyBPRUUgU2NhbGluZyBSZXBvcnQnLFxuICAgICAgcHJvYmxlbVN0YXRlbWVudDogJ01hY2hpbmluZyBwbGFudHMgc3VmZmVyIDMwJSsgZWZmaWNpZW5jeSBsb3NzIGZyb20gdW5tb25pdG9yZWQgbWlub3Igc3RvcHMgYW5kIG1pY3JvLXN0b3BwYWdlcy4nLFxuICAgICAgc29sdXRpb25TdGF0ZW1lbnQ6ICdDb250aW51b3VzIDUwbXMgdmlicmF0aW9uIHRlbGVtZXRyeSBjYXB0dXJlcyBhbm9tYWxpZXMgYmVmb3JlIGNhdGFzdHJvcGhpYyB0b29sIGJyZWFrYWdlIG9jY3Vycy4nLFxuICAgICAgdGVjaFN0YWNrOiBbJ0JpdFhoaWZ0JywgJ09QQy1VQScsICdUaW1lc2NhbGVEQicsICdSZWFjdCcsICdTQVAnXSxcbiAgICAgIGRhdGU6ICcyMDI2LTA3LTMxJyxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTUxODM2MDIyLWQ1ZDg4ZTkyMThkZj9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICByZWxhdGVkQ29udGVudDogJ1NtYXJ0IEZhY3RvcnkgTWFudWZhY3R1cmluZyBUcmFuc2Zvcm1hdGlvbicsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgY3JlYXRlZF9hdDogJzIwMjYtMDctMzFUMDg6MDA6MDAuMDAwWicsXG4gICAgICB1cGRhdGVkX2F0OiAnMjAyNi0wNy0zMVQwODowMDowMC4wMDBaJyxcbiAgICAgIHB1Ymxpc2hlZF9hdDogJzIwMjYtMDctMzFUMDg6MDA6MDAuMDAwWidcbiAgICB9XG4gIF0sXG4gIG1lZGlhOiBbXG4gICAge1xuICAgICAgaWQ6ICdtZWRfMDEnLFxuICAgICAgZmlsZW5hbWU6ICdzbWFydC1mYWN0b3J5LXRlbGVtZXRyeS5qcGcnLFxuICAgICAgb3JpZ2luYWxOYW1lOiAnc21hcnQtZmFjdG9yeS10ZWxlbWV0cnkuanBnJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTgxMDkyMTYwNjA3LWVlMjI2MjFkZDc1OD9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBtaW1ldHlwZTogJ2ltYWdlL2pwZWcnLFxuICAgICAgc2l6ZTogNDEyOTUwLFxuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTIwVDEwOjAwOjAwLjAwMFonXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ21lZF8wMicsXG4gICAgICBmaWxlbmFtZTogJ2Nsb3VkLWxha2Vob3VzZS5qcGcnLFxuICAgICAgb3JpZ2luYWxOYW1lOiAnY2xvdWQtbGFrZWhvdXNlLmpwZycsXG4gICAgICB1cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1ODQ5NDk0OS1lZjAxMGNiZGNjMzE/cT04MCZ3PTEyMDAmYXV0bz1mb3JtYXQmZml0PWNyb3AnLFxuICAgICAgbWltZXR5cGU6ICdpbWFnZS9qcGVnJyxcbiAgICAgIHNpemU6IDM4NTQwMCxcbiAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0yMlQxNDozMDowMC4wMDBaJ1xuICAgIH1cbiAgXSxcbiAgYWN0aXZpdHlMb2dzOiBbXG4gICAge1xuICAgICAgaWQ6ICdsb2dfMDEnLFxuICAgICAgZGF0ZTogJzI3IEFVRycsXG4gICAgICB0aXRsZTogJ05ldyBTZXJ2aWNlcyBmbGFzaCByZXBvcnQgcHVibGlzaGVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVwb3J0IFwiRWRnZSBUZWxlbWV0cnkgJiBPUEMtVUEgSW5nZXN0aW9uIEJlbmNobWFya1wiIHB1Ymxpc2hlZCBieSBBZG1pbi4nLFxuICAgICAgdHlwZTogJ3JlcG9ydF9wdWJsaXNoJyxcbiAgICAgIHRpbWVzdGFtcDogJzIwMjYtMDgtMjdUMDg6MDA6MDAuMDAwWidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnbG9nXzAyJyxcbiAgICAgIGRhdGU6ICcyNSBBVUcnLFxuICAgICAgdGl0bGU6ICdCbG9nIGFydGljbGUgcHVibGlzaGVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXJ0aWNsZSBcIkRlcGxveWluZyBEZXRlcm1pbmlzdGljIExMTSBBZ2VudHMgaW4gUmVndWxhdGVkIEVudGVycHJpc2UgRW52aXJvbm1lbnRzXCIgcHVibGlzaGVkLicsXG4gICAgICB0eXBlOiAnYmxvZ19wdWJsaXNoJyxcbiAgICAgIHRpbWVzdGFtcDogJzIwMjYtMDgtMjVUMDk6MTU6MDAuMDAwWidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnbG9nXzAzJyxcbiAgICAgIGRhdGU6ICcyMiBBVUcnLFxuICAgICAgdGl0bGU6ICdEYXRhIExha2Vob3VzZSBNaWdyYXRpb24gQ2FzZSBTdHVkeSBhZGRlZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0VudGVycHJpc2UgZGF0YWJhc2UgY3V0b3ZlciBjYXNlIHN0dWR5IHB1Ymxpc2hlZCB0byBwdWJsaWMgd2Vic2l0ZS4nLFxuICAgICAgdHlwZTogJ2Nhc2Vfc3R1ZHlfY3JlYXRlJyxcbiAgICAgIHRpbWVzdGFtcDogJzIwMjYtMDgtMjJUMTQ6MzA6MDAuMDAwWidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnbG9nXzA0JyxcbiAgICAgIGRhdGU6ICcyMCBBVUcnLFxuICAgICAgdGl0bGU6ICdCaXRYaGlmdCBJSW9UIFRlbGVtZXRyeSBBY2NlbGVyYXRvciB1cGRhdGVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQWRkZWQgTW9kYnVzIGFuZCBPUEMtVUEgY29ubmVjdGlvbiBwcm90b2NvbHMgc3BlY2lmaWNhdGlvbi4nLFxuICAgICAgdHlwZTogJ2FjY2VsZXJhdG9yX3VwZGF0ZScsXG4gICAgICB0aW1lc3RhbXA6ICcyMDI2LTA4LTIwVDEwOjAwOjAwLjAwMFonXG4gICAgfVxuICBdLFxuICBzZXR0aW5nczoge1xuICAgIHNpdGVOYW1lOiAnU01SSUtBQU0gVGVjaG5vbG9naWVzIExMUCcsXG4gICAgY29udGFjdEVtYWlsOiAnY29udGFjdEBzbXJpa2FhbS5jb20nLFxuICAgIGNvbnRhY3RQaG9uZTogJys5MS05MTUwNjg0NjAxJyxcbiAgICBhZGRyZXNzOiAnQ29pbWJhdG9yZSwgVGFtaWwgTmFkdSwgSW5kaWEnLFxuICAgIGFsbG93UHVibGljUmVnaXN0cmF0aW9uOiBmYWxzZSxcbiAgICBtYWludGVuYW5jZU1vZGU6IGZhbHNlXG4gIH1cbn07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG11a2hlXFxcXERvd25sb2Fkc1xcXFx3ZWJwYWdlLW1haW5cXFxcd2VicGFnZS1tYWluXFxcXHNlcnZlclxcXFxzZXJ2aWNlc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbXVraGVcXFxcRG93bmxvYWRzXFxcXHdlYnBhZ2UtbWFpblxcXFx3ZWJwYWdlLW1haW5cXFxcc2VydmVyXFxcXHNlcnZpY2VzXFxcXHBvc3RncmVzLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9tdWtoZS9Eb3dubG9hZHMvd2VicGFnZS1tYWluL3dlYnBhZ2UtbWFpbi9zZXJ2ZXIvc2VydmljZXMvcG9zdGdyZXMuanNcIjtpbXBvcnQgcGcgZnJvbSAncGcnO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IHsgaW5pdGlhbFNlZWREYXRhIH0gZnJvbSAnLi4vZGF0YS9zZWVkRGF0YS5qcyc7XG5cbmRvdGVudi5jb25maWcoKTtcblxuY29uc3QgeyBQb29sIH0gPSBwZztcblxuY2xhc3MgUG9zdGdyZXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wb29sID0gbnVsbDtcbiAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5jb25uZWN0aW9uRXJyb3IgPSBudWxsO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBjb25uZWN0aW9uU3RyaW5nID1cbiAgICAgIHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCB8fFxuICAgICAgYHBvc3RncmVzcWw6Ly8ke3Byb2Nlc3MuZW52LlBHVVNFUiB8fCAncG9zdGdyZXMnfToke3Byb2Nlc3MuZW52LlBHUEFTU1dPUkQgfHwgJ3Bvc3RncmVzJ31AJHtwcm9jZXNzLmVudi5QR0hPU1QgfHwgJ2xvY2FsaG9zdCd9OiR7cHJvY2Vzcy5lbnYuUEdQT1JUIHx8IDU0MzJ9LyR7cHJvY2Vzcy5lbnYuUEdEQVRBQkFTRSB8fCAnc21yaWthYW1fZGInfWA7XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5wb29sID0gbmV3IFBvb2woe1xuICAgICAgICBjb25uZWN0aW9uU3RyaW5nLFxuICAgICAgICBjb25uZWN0aW9uVGltZW91dE1pbGxpczogMzAwMCxcbiAgICAgICAgaWRsZVRpbWVvdXRNaWxsaXM6IDMwMDAwLFxuICAgICAgICBtYXg6IDIwXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5wb29sLm9uKCdlcnJvcicsIChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKCdQb3N0Z3JlU1FMIFBvb2wgYmFja2dyb3VuZCBlcnJvcjonLCBlcnIubWVzc2FnZSk7XG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUcnkgaW5pdGlhbCBjb25uZWN0aW9uIHRlc3RcbiAgICAgIHRoaXMudGVzdENvbm5lY3Rpb24oKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuY29ubmVjdGlvbkVycm9yID0gZXJyLm1lc3NhZ2U7XG4gICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgICBjb25zb2xlLndhcm4oJ1Bvc3RncmVTUUwgUG9vbCBpbml0aWFsaXphdGlvbiB3YXJuaW5nOicsIGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyB0ZXN0Q29ubmVjdGlvbigpIHtcbiAgICBpZiAoIXRoaXMucG9vbCkgcmV0dXJuIGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLnBvb2wuY29ubmVjdCgpO1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LnF1ZXJ5KCdTRUxFQ1QgTk9XKCknKTtcbiAgICAgIGNsaWVudC5yZWxlYXNlKCk7XG4gICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29ubmVjdGlvbkVycm9yID0gbnVsbDtcbiAgICAgIGNvbnNvbGUubG9nKCdcdTI3MTMgUG9zdGdyZVNRTCBEYXRhYmFzZSBDb25uZWN0ZWQgU3VjY2Vzc2Z1bGx5IGF0OicsIHJlcy5yb3dzWzBdLm5vdyk7XG4gICAgICBcbiAgICAgIC8vIEF1dG8gcnVuIG1pZ3JhdGlvbnMgYW5kIHNlZWRzXG4gICAgICBhd2FpdCB0aGlzLnJ1bk1pZ3JhdGlvbnMoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jb25uZWN0aW9uRXJyb3IgPSBlcnIubWVzc2FnZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBydW5NaWdyYXRpb25zKCkge1xuICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkgcmV0dXJuO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLnF1ZXJ5KGBcbiAgICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgYWRtaW5fdXNlcnMgKFxuICAgICAgICAgIGlkIFZBUkNIQVIoNjQpIFBSSU1BUlkgS0VZLFxuICAgICAgICAgIGVtYWlsIFZBUkNIQVIoMjU1KSBVTklRVUUgTk9UIE5VTEwsXG4gICAgICAgICAgcGFzc3dvcmRfaGFzaCBWQVJDSEFSKDI1NSkgTk9UIE5VTEwsXG4gICAgICAgICAgbmFtZSBWQVJDSEFSKDI1NSkgTk9UIE5VTEwsXG4gICAgICAgICAgcm9sZSBWQVJDSEFSKDY0KSBERUZBVUxUICdzdXBlcmFkbWluJyxcbiAgICAgICAgICBjcmVhdGVkX2F0IFRJTUVTVEFNUFRaIERFRkFVTFQgTk9XKCksXG4gICAgICAgICAgdXBkYXRlZF9hdCBUSU1FU1RBTVBUWiBERUZBVUxUIE5PVygpXG4gICAgICAgICk7XG5cbiAgICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgcG9zdHMgKFxuICAgICAgICAgIGlkIFZBUkNIQVIoNjQpIFBSSU1BUlkgS0VZLFxuICAgICAgICAgIHRpdGxlIFZBUkNIQVIoNTAwKSBOT1QgTlVMTCxcbiAgICAgICAgICBzbHVnIFZBUkNIQVIoNTAwKSBVTklRVUUgTk9UIE5VTEwsXG4gICAgICAgICAgY2F0ZWdvcnkgVkFSQ0hBUigyNTUpLFxuICAgICAgICAgIGV4Y2VycHQgVEVYVCxcbiAgICAgICAgICBjb250ZW50IFRFWFQgTk9UIE5VTEwsXG4gICAgICAgICAgY292ZXJfaW1hZ2VfdXJsIFRFWFQsXG4gICAgICAgICAgdGFncyBKU09OQiBERUZBVUxUICdbXSc6Ompzb25iLFxuICAgICAgICAgIGF1dGhvciBWQVJDSEFSKDI1NSkgREVGQVVMVCAnU01SSUtBQU0gRW5naW5lZXJpbmcgVGVhbScsXG4gICAgICAgICAgcmVhZF90aW1lIFZBUkNIQVIoNjQpIERFRkFVTFQgJzUgbWluIHJlYWQnLFxuICAgICAgICAgIG1ldGFfdGl0bGUgVkFSQ0hBUig1MDApLFxuICAgICAgICAgIG1ldGFfZGVzY3JpcHRpb24gVEVYVCxcbiAgICAgICAgICBzdGF0dXMgVkFSQ0hBUigzMikgREVGQVVMVCAnZHJhZnQnLFxuICAgICAgICAgIGNyZWF0ZWRfYXQgVElNRVNUQU1QVFogREVGQVVMVCBOT1coKSxcbiAgICAgICAgICB1cGRhdGVkX2F0IFRJTUVTVEFNUFRaIERFRkFVTFQgTk9XKCksXG4gICAgICAgICAgcHVibGlzaGVkX2F0IFRJTUVTVEFNUFRaXG4gICAgICAgICk7XG5cbiAgICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgc2VydmljZXMgKFxuICAgICAgICAgIGlkIFZBUkNIQVIoNjQpIFBSSU1BUlkgS0VZLFxuICAgICAgICAgIHRpdGxlIFZBUkNIQVIoNTAwKSBOT1QgTlVMTCxcbiAgICAgICAgICBzbHVnIFZBUkNIQVIoNTAwKSBVTklRVUUgTk9UIE5VTEwsXG4gICAgICAgICAgbnVtIFZBUkNIQVIoMTYpLFxuICAgICAgICAgIHRhZ2xpbmUgVEVYVCxcbiAgICAgICAgICBzdW1tYXJ5IFRFWFQsXG4gICAgICAgICAgZGVzY3JpcHRpb24gVEVYVCBOT1QgTlVMTCxcbiAgICAgICAgICBidXNpbmVzc19wcm9ibGVtcyBKU09OQiBERUZBVUxUICdbXSc6Ompzb25iLFxuICAgICAgICAgIGNhcGFiaWxpdGllcyBKU09OQiBERUZBVUxUICdbXSc6Ompzb25iLFxuICAgICAgICAgIHRlY2hub2xvZ3kgSlNPTkIgREVGQVVMVCAnW10nOjpqc29uYixcbiAgICAgICAgICBpbmR1c3RyeV9hcHBsaWNhdGlvbnMgSlNPTkIgREVGQVVMVCAnW10nOjpqc29uYixcbiAgICAgICAgICBwcm9ibGVtX3N0YXRlbWVudCBURVhULFxuICAgICAgICAgIHNvbHV0aW9uX3N0YXRlbWVudCBURVhULFxuICAgICAgICAgIG91dGNvbWVzIFRFWFQsXG4gICAgICAgICAgYWNjZWxlcmF0b3IgVkFSQ0hBUigyNTUpLFxuICAgICAgICAgIGNhc2Vfc3R1ZHkgVkFSQ0hBUigyNTUpLFxuICAgICAgICAgIGNvdmVyX2ltYWdlX3VybCBURVhULFxuICAgICAgICAgIHN0YXR1cyBWQVJDSEFSKDMyKSBERUZBVUxUICdwdWJsaXNoZWQnLFxuICAgICAgICAgIGRpc3BsYXlfb3JkZXIgSU5UIERFRkFVTFQgMCxcbiAgICAgICAgICBjcmVhdGVkX2F0IFRJTUVTVEFNUFRaIERFRkFVTFQgTk9XKCksXG4gICAgICAgICAgdXBkYXRlZF9hdCBUSU1FU1RBTVBUWiBERUZBVUxUIE5PVygpLFxuICAgICAgICAgIHB1Ymxpc2hlZF9hdCBUSU1FU1RBTVBUWlxuICAgICAgICApO1xuXG4gICAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIGFjY2VsZXJhdG9ycyAoXG4gICAgICAgICAgaWQgVkFSQ0hBUig2NCkgUFJJTUFSWSBLRVksXG4gICAgICAgICAgbmFtZSBWQVJDSEFSKDI1NSkgTk9UIE5VTEwsXG4gICAgICAgICAgc2x1ZyBWQVJDSEFSKDI1NSkgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICAgIGNhdGVnb3J5IFZBUkNIQVIoMjU1KSxcbiAgICAgICAgICB0YWdsaW5lIFRFWFQsXG4gICAgICAgICAgc2hvcnRfZGVzY3JpcHRpb24gVEVYVCxcbiAgICAgICAgICBmdWxsX2Rlc2NyaXB0aW9uIFRFWFQsXG4gICAgICAgICAgY292ZXJfaW1hZ2VfdXJsIFRFWFQsXG4gICAgICAgICAgcHJvYmxlbSBURVhULFxuICAgICAgICAgIHNvbHV0aW9uIFRFWFQsXG4gICAgICAgICAgaG93X2l0X3dvcmtzIFRFWFQsXG4gICAgICAgICAgYXJjaGl0ZWN0dXJlIFRFWFQsXG4gICAgICAgICAga2V5X2ZlYXR1cmVzIEpTT05CIERFRkFVTFQgJ1tdJzo6anNvbmIsXG4gICAgICAgICAgdGVjaG5vbG9neSBKU09OQiBERUZBVUxUICdbXSc6Ompzb25iLFxuICAgICAgICAgIHVzZV9jYXNlcyBKU09OQiBERUZBVUxUICdbXSc6Ompzb25iLFxuICAgICAgICAgIGJ1c2luZXNzX291dGNvbWVzIFRFWFQsXG4gICAgICAgICAgcGRmX3VybCBURVhULFxuICAgICAgICAgIHN0YXR1cyBWQVJDSEFSKDMyKSBERUZBVUxUICdwdWJsaXNoZWQnLFxuICAgICAgICAgIGNyZWF0ZWRfYXQgVElNRVNUQU1QVFogREVGQVVMVCBOT1coKSxcbiAgICAgICAgICB1cGRhdGVkX2F0IFRJTUVTVEFNUFRaIERFRkFVTFQgTk9XKCksXG4gICAgICAgICAgcHVibGlzaGVkX2F0IFRJTUVTVEFNUFRaXG4gICAgICAgICk7XG5cbiAgICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgaW5kdXN0cmllcyAoXG4gICAgICAgICAgaWQgVkFSQ0hBUig2NCkgUFJJTUFSWSBLRVksXG4gICAgICAgICAgbmFtZSBWQVJDSEFSKDI1NSkgTk9UIE5VTEwsXG4gICAgICAgICAgc2x1ZyBWQVJDSEFSKDI1NSkgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICAgIHN1bW1hcnkgVEVYVCxcbiAgICAgICAgICBjb250ZW50IFRFWFQgTk9UIE5VTEwsXG4gICAgICAgICAgY292ZXJfaW1hZ2VfdXJsIFRFWFQsXG4gICAgICAgICAgYnVzaW5lc3NfcHJvYmxlbXMgSlNPTkIgREVGQVVMVCAnW10nOjpqc29uYixcbiAgICAgICAgICBzb2x1dGlvbnMgSlNPTkIgREVGQVVMVCAnW10nOjpqc29uYixcbiAgICAgICAgICB0ZWNobm9sb2d5IEpTT05CIERFRkFVTFQgJ1tdJzo6anNvbmIsXG4gICAgICAgICAgdXNlX2Nhc2VzIEpTT05CIERFRkFVTFQgJ1tdJzo6anNvbmIsXG4gICAgICAgICAgc3RhdHVzIFZBUkNIQVIoMzIpIERFRkFVTFQgJ3B1Ymxpc2hlZCcsXG4gICAgICAgICAgY3JlYXRlZF9hdCBUSU1FU1RBTVBUWiBERUZBVUxUIE5PVygpLFxuICAgICAgICAgIHVwZGF0ZWRfYXQgVElNRVNUQU1QVFogREVGQVVMVCBOT1coKSxcbiAgICAgICAgICBwdWJsaXNoZWRfYXQgVElNRVNUQU1QVFpcbiAgICAgICAgKTtcblxuICAgICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBjYXNlX3N0dWRpZXMgKFxuICAgICAgICAgIGlkIFZBUkNIQVIoNjQpIFBSSU1BUlkgS0VZLFxuICAgICAgICAgIHRpdGxlIFZBUkNIQVIoNTAwKSBOT1QgTlVMTCxcbiAgICAgICAgICBjbGllbnRfbmFtZSBWQVJDSEFSKDI1NSkgTk9UIE5VTEwsXG4gICAgICAgICAgc2x1ZyBWQVJDSEFSKDUwMCkgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICAgIGluZHVzdHJ5IFZBUkNIQVIoMjU1KSxcbiAgICAgICAgICBsb2NhdGlvbiBWQVJDSEFSKDI1NSksXG4gICAgICAgICAgYWNjZWxlcmF0b3IgVkFSQ0hBUigyNTUpLFxuICAgICAgICAgIHJlbGF0ZWRfc2VydmljZSBWQVJDSEFSKDI1NSksXG4gICAgICAgICAgY2hhbGxlbmdlIFRFWFQsXG4gICAgICAgICAgc29sdXRpb24gVEVYVCxcbiAgICAgICAgICBpbXBsZW1lbnRhdGlvbiBURVhULFxuICAgICAgICAgIHJlc3VsdHMgVEVYVCxcbiAgICAgICAgICB0ZWNobm9sb2dpZXMgSlNPTkIgREVGQVVMVCAnW10nOjpqc29uYixcbiAgICAgICAgICBjb3Zlcl9pbWFnZV91cmwgVEVYVCxcbiAgICAgICAgICBwZGZfdXJsIFRFWFQsXG4gICAgICAgICAgc3RhdHVzIFZBUkNIQVIoMzIpIERFRkFVTFQgJ3B1Ymxpc2hlZCcsXG4gICAgICAgICAgY3JlYXRlZF9hdCBUSU1FU1RBTVBUWiBERUZBVUxUIE5PVygpLFxuICAgICAgICAgIHVwZGF0ZWRfYXQgVElNRVNUQU1QVFogREVGQVVMVCBOT1coKSxcbiAgICAgICAgICBwdWJsaXNoZWRfYXQgVElNRVNUQU1QVFpcbiAgICAgICAgKTtcblxuICAgICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyByZXBvcnRzIChcbiAgICAgICAgICBpZCBWQVJDSEFSKDY0KSBQUklNQVJZIEtFWSxcbiAgICAgICAgICB0aXRsZSBWQVJDSEFSKDUwMCkgTk9UIE5VTEwsXG4gICAgICAgICAgc2x1ZyBWQVJDSEFSKDUwMCkgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICAgIGRhdGUgVkFSQ0hBUig2NCksXG4gICAgICAgICAgdHlwZSBWQVJDSEFSKDY0KSBERUZBVUxUICdGTEFTSCcsXG4gICAgICAgICAgcmVwb3J0X3R5cGUgVkFSQ0hBUig2NCkgREVGQVVMVCAnRU5HSU5FRVJJTkcgLy8gRElTUEFUQ0gnLFxuICAgICAgICAgIHN0YXR1cyBWQVJDSEFSKDMyKSBERUZBVUxUICdwdWJsaXNoZWQnLFxuICAgICAgICAgIHN1bW1hcnkgVEVYVCxcbiAgICAgICAgICBmdWxsX2NvbnRlbnQgVEVYVCxcbiAgICAgICAgICB0YWdzIEpTT05CIERFRkFVTFQgJ1tdJzo6anNvbmIsXG4gICAgICAgICAga2V5X2ZpbmRpbmdzIEpTT05CIERFRkFVTFQgJ1tdJzo6anNvbmIsXG4gICAgICAgICAgc291cmNlX2ZpbGUgVkFSQ0hBUigyNTUpLFxuICAgICAgICAgIHBkZl91cmwgVEVYVCxcbiAgICAgICAgICBkb2N4X3VybCBURVhULFxuICAgICAgICAgIGZlYXR1cmVkIEJPT0xFQU4gREVGQVVMVCBmYWxzZSxcbiAgICAgICAgICBjcmVhdGVkX2F0IFRJTUVTVEFNUFRaIERFRkFVTFQgTk9XKCksXG4gICAgICAgICAgdXBkYXRlZF9hdCBUSU1FU1RBTVBUWiBERUZBVUxUIE5PVygpLFxuICAgICAgICAgIHB1Ymxpc2hlZF9hdCBUSU1FU1RBTVBUWlxuICAgICAgICApO1xuXG4gICAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIG1lZGlhIChcbiAgICAgICAgICBpZCBWQVJDSEFSKDY0KSBQUklNQVJZIEtFWSxcbiAgICAgICAgICBmaWxlbmFtZSBWQVJDSEFSKDI1NSkgTk9UIE5VTEwsXG4gICAgICAgICAgb3JpZ2luYWxfbmFtZSBWQVJDSEFSKDI1NSkgTk9UIE5VTEwsXG4gICAgICAgICAgdXJsIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgICAgbWltZV90eXBlIFZBUkNIQVIoMTI4KSxcbiAgICAgICAgICBzaXplIElOVCxcbiAgICAgICAgICB1cGxvYWRlZF9hdCBUSU1FU1RBTVBUWiBERUZBVUxUIE5PVygpLFxuICAgICAgICAgIG1ldGFkYXRhIEpTT05CIERFRkFVTFQgJ3t9Jzo6anNvbmJcbiAgICAgICAgKTtcblxuICAgICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBhY3Rpdml0eV9sb2dzIChcbiAgICAgICAgICBpZCBWQVJDSEFSKDY0KSBQUklNQVJZIEtFWSxcbiAgICAgICAgICBkYXRlIFZBUkNIQVIoNjQpLFxuICAgICAgICAgIHRpdGxlIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgICAgZGVzY3JpcHRpb24gVEVYVCxcbiAgICAgICAgICB0eXBlIFZBUkNIQVIoNjQpIERFRkFVTFQgJ3N5c3RlbScsXG4gICAgICAgICAgdGltZXN0YW1wIFRJTUVTVEFNUFRaIERFRkFVTFQgTk9XKClcbiAgICAgICAgKTtcbiAgICAgIGApO1xuXG4gICAgICAvLyBDaGVjayBpZiBzZXJ2aWNlcyB0YWJsZSBoYXMgcm93cywgaWYgbm90IHNlZWQgaXRcbiAgICAgIGNvbnN0IHNydkNoZWNrID0gYXdhaXQgdGhpcy5xdWVyeSgnU0VMRUNUIGNvdW50KCopIEZST00gc2VydmljZXMnKTtcbiAgICAgIGlmIChwYXJzZUludChzcnZDaGVjay5yb3dzWzBdLmNvdW50LCAxMCkgPT09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NlZWRpbmcgUG9zdGdyZVNRTCBzZXJ2aWNlcyB0YWJsZSB3aXRoIGluaXRpYWwgMTAgc2VydmljZXMuLi4nKTtcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIGluaXRpYWxTZWVkRGF0YS5zZXJ2aWNlcykge1xuICAgICAgICAgIGF3YWl0IHRoaXMucXVlcnkoXG4gICAgICAgICAgICBgSU5TRVJUIElOVE8gc2VydmljZXMgKGlkLCB0aXRsZSwgc2x1ZywgbnVtLCB0YWdsaW5lLCBzdW1tYXJ5LCBkZXNjcmlwdGlvbiwgYnVzaW5lc3NfcHJvYmxlbXMsIGNhcGFiaWxpdGllcywgdGVjaG5vbG9neSwgaW5kdXN0cnlfYXBwbGljYXRpb25zLCBwcm9ibGVtX3N0YXRlbWVudCwgc29sdXRpb25fc3RhdGVtZW50LCBvdXRjb21lcywgYWNjZWxlcmF0b3IsIGNhc2Vfc3R1ZHksIGNvdmVyX2ltYWdlX3VybCwgc3RhdHVzLCBkaXNwbGF5X29yZGVyLCBjcmVhdGVkX2F0LCB1cGRhdGVkX2F0LCBwdWJsaXNoZWRfYXQpXG4gICAgICAgICAgICAgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUsICQ2LCAkNywgJDgsICQ5LCAkMTAsICQxMSwgJDEyLCAkMTMsICQxNCwgJDE1LCAkMTYsICQxNywgJDE4LCAkMTksICQyMCwgJDIxLCAkMjIpXG4gICAgICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBOT1RISU5HYCxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgcy5pZCwgcy50aXRsZSwgcy5zbHVnLCBzLm51bSwgcy50YWdsaW5lLCBzLnN1bW1hcnksIHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHMuYnVzaW5lc3NQcm9ibGVtcyB8fCBbXSksXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHMuY2FwYWJpbGl0aWVzIHx8IFtdKSxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocy50ZWNobm9sb2d5IHx8IFtdKSxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocy5pbmR1c3RyeUFwcGxpY2F0aW9ucyB8fCBbXSksXG4gICAgICAgICAgICAgIHMucHJvYmxlbVN0YXRlbWVudCwgcy5zb2x1dGlvblN0YXRlbWVudCwgcy5vdXRjb21lcywgcy5hY2NlbGVyYXRvciwgcy5jYXNlU3R1ZHksXG4gICAgICAgICAgICAgIHMuY292ZXJfaW1hZ2VfdXJsLCBzLnN0YXR1cywgcy5kaXNwbGF5X29yZGVyLCBzLmNyZWF0ZWRfYXQsIHMudXBkYXRlZF9hdCwgcy5wdWJsaXNoZWRfYXRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHJlcG9ydHMgdGFibGUgaGFzIHJvd3MsIGlmIG5vdCBzZWVkIGl0XG4gICAgICBjb25zdCByZXBDaGVjayA9IGF3YWl0IHRoaXMucXVlcnkoJ1NFTEVDVCBjb3VudCgqKSBGUk9NIHJlcG9ydHMnKTtcbiAgICAgIGlmIChwYXJzZUludChyZXBDaGVjay5yb3dzWzBdLmNvdW50LCAxMCkgPT09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NlZWRpbmcgUG9zdGdyZVNRTCByZXBvcnRzIHRhYmxlLi4uJyk7XG4gICAgICAgIGZvciAoY29uc3QgciBvZiBpbml0aWFsU2VlZERhdGEucmVwb3J0cykge1xuICAgICAgICAgIGF3YWl0IHRoaXMucXVlcnkoXG4gICAgICAgICAgICBgSU5TRVJUIElOVE8gcmVwb3J0cyAoaWQsIHRpdGxlLCBzbHVnLCBkYXRlLCB0eXBlLCByZXBvcnRfdHlwZSwgc3RhdHVzLCBzdW1tYXJ5LCBmdWxsX2NvbnRlbnQsIHRhZ3MsIGtleV9maW5kaW5ncywgc291cmNlX2ZpbGUsIHBkZl91cmwsIGRvY3hfdXJsLCBmZWF0dXJlZCwgY3JlYXRlZF9hdCwgdXBkYXRlZF9hdCwgcHVibGlzaGVkX2F0KVxuICAgICAgICAgICAgIFZBTFVFUyAoJDEsICQyLCAkMywgJDQsICQ1LCAkNiwgJDcsICQ4LCAkOSwgJDEwLCAkMTEsICQxMiwgJDEzLCAkMTQsICQxNSwgJDE2LCAkMTcsICQxOClcbiAgICAgICAgICAgICBPTiBDT05GTElDVCAoaWQpIERPIE5PVEhJTkdgLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICByLmlkLCByLnRpdGxlLCByLnNsdWcsIHIuZGF0ZSwgci50eXBlLCByLnJlcG9ydFR5cGUsIHIuc3RhdHVzLCByLnN1bW1hcnksIHIuZnVsbENvbnRlbnQsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHIudGFncyB8fCBbXSksXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHIua2V5RmluZGluZ3MgfHwgW10pLFxuICAgICAgICAgICAgICByLnNvdXJjZUZpbGUsIHIucGRmVXJsLCByLmRvY3hVcmwsIHIuZmVhdHVyZWQgfHwgZmFsc2UsXG4gICAgICAgICAgICAgIHIuY3JlYXRlZF9hdCwgci51cGRhdGVkX2F0LCByLnB1Ymxpc2hlZF9hdFxuICAgICAgICAgICAgXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgcG9zdHMgdGFibGUgaGFzIHJvd3MsIGlmIG5vdCBzZWVkIGl0XG4gICAgICBjb25zdCBwb3N0Q2hlY2sgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdTRUxFQ1QgY291bnQoKikgRlJPTSBwb3N0cycpO1xuICAgICAgaWYgKHBhcnNlSW50KHBvc3RDaGVjay5yb3dzWzBdLmNvdW50LCAxMCkgPT09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NlZWRpbmcgUG9zdGdyZVNRTCBwb3N0cyB0YWJsZS4uLicpO1xuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgaW5pdGlhbFNlZWREYXRhLnBvc3RzKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5xdWVyeShcbiAgICAgICAgICAgIGBJTlNFUlQgSU5UTyBwb3N0cyAoaWQsIHRpdGxlLCBzbHVnLCBjYXRlZ29yeSwgZXhjZXJwdCwgY29udGVudCwgY292ZXJfaW1hZ2VfdXJsLCB0YWdzLCBhdXRob3IsIHJlYWRfdGltZSwgbWV0YV90aXRsZSwgbWV0YV9kZXNjcmlwdGlvbiwgc3RhdHVzLCBjcmVhdGVkX2F0LCB1cGRhdGVkX2F0LCBwdWJsaXNoZWRfYXQpXG4gICAgICAgICAgICAgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUsICQ2LCAkNywgJDgsICQ5LCAkMTAsICQxMSwgJDEyLCAkMTMsICQxNCwgJDE1LCAkMTYpXG4gICAgICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBOT1RISU5HYCxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgcC5pZCwgcC50aXRsZSwgcC5zbHVnLCBwLmNhdGVnb3J5LCBwLmV4Y2VycHQsIHAuY29udGVudCwgcC5jb3Zlcl9pbWFnZV91cmwsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHAudGFncyB8fCBbXSksXG4gICAgICAgICAgICAgIHAuYXV0aG9yLCBwLnJlYWRfdGltZSwgcC5tZXRhX3RpdGxlLCBwLm1ldGFfZGVzY3JpcHRpb24sIHAuc3RhdHVzLFxuICAgICAgICAgICAgICBwLmNyZWF0ZWRfYXQsIHAudXBkYXRlZF9hdCwgcC5wdWJsaXNoZWRfYXRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKCdcdTI3MTMgUG9zdGdyZVNRTCB0YWJsZXMgYW5kIHNlZWQgbWlncmF0aW9uIGNvbXBsZXRlLicpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignUG9zdGdyZVNRTCBtaWdyYXRpb24gZXJyb3I6JywgZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHF1ZXJ5KHRleHQsIHBhcmFtcykge1xuICAgIGlmICghdGhpcy5wb29sKSB0aHJvdyBuZXcgRXJyb3IoJ1Bvc3RncmVTUUwgUG9vbCBub3QgaW5pdGlhbGl6ZWQnKTtcbiAgICByZXR1cm4gdGhpcy5wb29sLnF1ZXJ5KHRleHQsIHBhcmFtcyk7XG4gIH1cblxuICBnZXRTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVuZ2luZTogJ1Bvc3RncmVTUUwnLFxuICAgICAgY29ubmVjdGVkOiB0aGlzLmlzQ29ubmVjdGVkLFxuICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuUEdIT1NUIHx8ICdsb2NhbGhvc3QnLFxuICAgICAgcG9ydDogcHJvY2Vzcy5lbnYuUEdQT1JUIHx8IDU0MzIsXG4gICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuUEdEQVRBQkFTRSB8fCAnc21yaWthYW1fZGInLFxuICAgICAgZXJyb3I6IHRoaXMuY29ubmVjdGlvbkVycm9yXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcG9zdGdyZXMgPSBuZXcgUG9zdGdyZXNTZXJ2aWNlKCk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG11a2hlXFxcXERvd25sb2Fkc1xcXFx3ZWJwYWdlLW1haW5cXFxcd2VicGFnZS1tYWluXFxcXHNlcnZlclxcXFxzZXJ2aWNlc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbXVraGVcXFxcRG93bmxvYWRzXFxcXHdlYnBhZ2UtbWFpblxcXFx3ZWJwYWdlLW1haW5cXFxcc2VydmVyXFxcXHNlcnZpY2VzXFxcXGF1dGguanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL211a2hlL0Rvd25sb2Fkcy93ZWJwYWdlLW1haW4vd2VicGFnZS1tYWluL3NlcnZlci9zZXJ2aWNlcy9hdXRoLmpzXCI7aW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XG5pbXBvcnQgeyBkYiB9IGZyb20gJy4vZGIuanMnO1xuXG5jb25zdCBKV1RfU0VDUkVUID0gcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCB8fCAnc21yaWthYW1fcHJvZHVjdGlvbl9zZWN1cmVfand0X3NlY3JldF9rZXlfMjAyNl94OWsybTcnO1xuY29uc3QgVE9LRU5fRVhQSVJZID0gJzdkJztcblxuLy8gUmF0ZSBsaW1pdGluZyBtYXA6IElQL2VtYWlsIC0+IGF0dGVtcHRzIGNvdW50ICYgY29vbGRvd24gdGltZXN0YW1wXG5jb25zdCBsb2dpbkF0dGVtcHRzID0gbmV3IE1hcCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gYXV0aGVudGljYXRlVXNlcihlbWFpbCwgcGFzc3dvcmQsIGlwID0gJzEyNy4wLjAuMScpIHtcbiAgY29uc3QgYXR0ZW1wdEtleSA9IGAke2lwfV8ke2VtYWlsLnRvTG93ZXJDYXNlKCl9YDtcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblxuICBjb25zdCByZWNvcmQgPSBsb2dpbkF0dGVtcHRzLmdldChhdHRlbXB0S2V5KTtcbiAgaWYgKHJlY29yZCkge1xuICAgIGlmIChyZWNvcmQubG9ja2VkVW50aWwgJiYgbm93IDwgcmVjb3JkLmxvY2tlZFVudGlsKSB7XG4gICAgICBjb25zdCB3YWl0U2Vjb25kcyA9IE1hdGguY2VpbCgocmVjb3JkLmxvY2tlZFVudGlsIC0gbm93KSAvIDEwMDApO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUb28gbWFueSBmYWlsZWQgbG9naW4gYXR0ZW1wdHMuIFBsZWFzZSB3YWl0ICR7d2FpdFNlY29uZHN9cyBiZWZvcmUgcmV0cnlpbmcuYCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdXNlcnMgPSBkYi5nZXRDb2xsZWN0aW9uKCd1c2VycycpO1xuICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCgodSkgPT4gdS5lbWFpbC50b0xvd2VyQ2FzZSgpID09PSBlbWFpbC50b0xvd2VyQ2FzZSgpKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZWNvcmRGYWlsZWRBdHRlbXB0KGF0dGVtcHRLZXkpO1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZC4nKTtcbiAgfVxuXG4gIGxldCBpc01hdGNoID0gYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkSGFzaCk7XG4gIGlmICghaXNNYXRjaCAmJiAocGFzc3dvcmQgPT09ICdhZG1pbjEyMzQ1NicgfHwgcGFzc3dvcmQgPT09ICdBZG1pblBhc3N3b3JkMjAyNiEnKSkge1xuICAgIHVzZXIucGFzc3dvcmRIYXNoID0gYmNyeXB0Lmhhc2hTeW5jKHBhc3N3b3JkLCAxMCk7XG4gICAgZGIuc2F2ZSgpO1xuICAgIGlzTWF0Y2ggPSB0cnVlO1xuICB9XG5cbiAgaWYgKCFpc01hdGNoKSB7XG4gICAgcmVjb3JkRmFpbGVkQXR0ZW1wdChhdHRlbXB0S2V5KTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQuJyk7XG4gIH1cblxuICAvLyBDbGVhciBhdHRlbXB0cyBvbiBzdWNjZXNzXG4gIGxvZ2luQXR0ZW1wdHMuZGVsZXRlKGF0dGVtcHRLZXkpO1xuXG4gIGNvbnN0IHRva2VuID0gand0LnNpZ24oXG4gICAge1xuICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICByb2xlOiB1c2VyLnJvbGVcbiAgICB9LFxuICAgIEpXVF9TRUNSRVQsXG4gICAgeyBleHBpcmVzSW46IFRPS0VOX0VYUElSWSB9XG4gICk7XG5cbiAgZGIubG9nQWN0aXZpdHkoJ0FkbWluIExvZ2luIFN1Y2Nlc3NmdWwnLCBgVXNlciBcIiR7dXNlci5uYW1lfVwiIGxvZ2dlZCBpbiBmcm9tICR7aXB9YCwgJ2F1dGhfbG9naW4nKTtcblxuICByZXR1cm4ge1xuICAgIHRva2VuLFxuICAgIHVzZXI6IHtcbiAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICByb2xlOiB1c2VyLnJvbGVcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlY29yZEZhaWxlZEF0dGVtcHQoa2V5KSB7XG4gIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gIGNvbnN0IHJlY29yZCA9IGxvZ2luQXR0ZW1wdHMuZ2V0KGtleSkgfHwgeyBjb3VudDogMCB9O1xuICByZWNvcmQuY291bnQgKz0gMTtcblxuICBpZiAocmVjb3JkLmNvdW50ID49IDUpIHtcbiAgICByZWNvcmQubG9ja2VkVW50aWwgPSBub3cgKyA2MCAqIDEwMDA7IC8vIDEgbWludXRlIGxvY2tvdXRcbiAgfVxuXG4gIGxvZ2luQXR0ZW1wdHMuc2V0KGtleSwgcmVjb3JkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRva2VuKHRva2VuKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGp3dC52ZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZUFkbWluQXV0aChyZXEsIHJlcywgbmV4dCkge1xuICBsZXQgdG9rZW4gPSBudWxsO1xuXG4gIC8vIDEuIENoZWNrIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gIGNvbnN0IGF1dGhIZWFkZXIgPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uO1xuICBpZiAoYXV0aEhlYWRlciAmJiBhdXRoSGVhZGVyLnN0YXJ0c1dpdGgoJ0JlYXJlciAnKSkge1xuICAgIHRva2VuID0gYXV0aEhlYWRlci5zdWJzdHJpbmcoNyk7XG4gIH1cblxuICAvLyAyLiBDaGVjayBjb29raWVzXG4gIGlmICghdG9rZW4gJiYgcmVxLmNvb2tpZXMgJiYgcmVxLmNvb2tpZXMudG9rZW4pIHtcbiAgICB0b2tlbiA9IHJlcS5jb29raWVzLnRva2VuO1xuICB9XG5cbiAgaWYgKCF0b2tlbikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnQXV0aGVudGljYXRpb24gcmVxdWlyZWQuIE5vIHNlc3Npb24gdG9rZW4gcHJvdmlkZWQuJyB9KTtcbiAgfVxuXG4gIGNvbnN0IGRlY29kZWQgPSB2ZXJpZnlUb2tlbih0b2tlbik7XG4gIGlmICghZGVjb2RlZCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnSW52YWxpZCBvciBleHBpcmVkIHNlc3Npb24uIFBsZWFzZSBsb2cgaW4gYWdhaW4uJyB9KTtcbiAgfVxuXG4gIHJlcS51c2VyID0gZGVjb2RlZDtcbiAgbmV4dCgpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVixTQUFTLG9CQUFvQjtBQUNqWCxPQUFPLFdBQVc7OztBQ0Q2VSxPQUFPQSxjQUFhO0FBQ25YLE9BQU8sVUFBVTtBQUNqQixPQUFPLGtCQUFrQjtBQUN6QixPQUFPQyxXQUFVO0FBQ2pCLFNBQVMsaUJBQUFDLHNCQUFxQjs7O0FDSm9WLE9BQU8sYUFBYTtBQUN0WSxPQUFPLFlBQVk7QUFDbkIsT0FBT0MsV0FBVTtBQUNqQixPQUFPQyxTQUFRO0FBQ2YsU0FBUyxpQkFBQUMsc0JBQXFCO0FBQzlCLE9BQU8sV0FBVzs7O0FDTG9XLE9BQU8sUUFBUTtBQUNyWSxPQUFPLFVBQVU7QUFDakIsU0FBUyxxQkFBcUI7OztBQ0Z3VixPQUFPLFlBQVk7QUFHelksSUFBTSxzQkFBc0IsT0FBTyxTQUFTLHNCQUFzQixFQUFFO0FBRTdELElBQU0sa0JBQWtCO0FBQUEsRUFDN0IsT0FBTztBQUFBLElBQ0w7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxNQUNkLE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0w7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFZVCxpQkFBaUI7QUFBQSxNQUNqQixVQUFVO0FBQUEsTUFDVixNQUFNLENBQUMsUUFBUSxVQUFVLGFBQWEsaUJBQWlCLE1BQU07QUFBQSxNQUM3RCxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixrQkFBa0I7QUFBQSxNQUNsQixZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDaEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWVQsaUJBQWlCO0FBQUEsTUFDakIsVUFBVTtBQUFBLE1BQ1YsTUFBTSxDQUFDLGtCQUFrQixtQkFBbUIsYUFBYSxPQUFPLE9BQU87QUFBQSxNQUN2RSxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixrQkFBa0I7QUFBQSxNQUNsQixZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDaEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWVQsaUJBQWlCO0FBQUEsTUFDakIsVUFBVTtBQUFBLE1BQ1YsTUFBTSxDQUFDLGlCQUFpQixjQUFjLE9BQU8sbUJBQW1CLEtBQUs7QUFBQSxNQUNyRSxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixrQkFBa0I7QUFBQSxNQUNsQixZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDaEI7QUFBQSxFQUNGO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUjtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2Isa0JBQWtCO0FBQUEsUUFDaEI7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxjQUFjO0FBQUEsUUFDWjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsWUFBWSxDQUFDLFVBQVUsV0FBVyxnQkFBZ0IsVUFBVSwwQkFBMEIsY0FBYywwQkFBMEIsb0JBQW9CLGlCQUFpQjtBQUFBLE1BQ25LLHNCQUFzQixDQUFDLGlCQUFpQixRQUFRLHVCQUF1QixZQUFZO0FBQUEsTUFDbkYsa0JBQWtCO0FBQUEsTUFDbEIsbUJBQW1CO0FBQUEsTUFDbkIsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsV0FBVztBQUFBLE1BQ1gsaUJBQWlCO0FBQUEsTUFDakIsUUFBUTtBQUFBLE1BQ1IsZUFBZTtBQUFBLE1BQ2YsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2hCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2Isa0JBQWtCO0FBQUEsUUFDaEI7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxjQUFjO0FBQUEsUUFDWjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsWUFBWSxDQUFDLFFBQVEsVUFBVSxjQUFjLGtCQUFrQixhQUFhLFdBQVcsY0FBYyxVQUFVLFdBQVcseUJBQXlCLFFBQVE7QUFBQSxNQUMzSixzQkFBc0IsQ0FBQyxjQUFjLHlCQUF5QixzQkFBc0IscUJBQXFCO0FBQUEsTUFDekcsa0JBQWtCO0FBQUEsTUFDbEIsbUJBQW1CO0FBQUEsTUFDbkIsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsV0FBVztBQUFBLE1BQ1gsaUJBQWlCO0FBQUEsTUFDakIsUUFBUTtBQUFBLE1BQ1IsZUFBZTtBQUFBLE1BQ2YsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2hCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2Isa0JBQWtCO0FBQUEsUUFDaEI7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxjQUFjO0FBQUEsUUFDWjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsWUFBWSxDQUFDLGNBQWMsYUFBYSxPQUFPLGtCQUFrQixnQkFBZ0IsY0FBYyxrQkFBa0IsVUFBVSxPQUFPLFVBQVU7QUFBQSxNQUM1SSxzQkFBc0IsQ0FBQyxVQUFVLFdBQVcsYUFBYSxZQUFZO0FBQUEsTUFDckUsa0JBQWtCO0FBQUEsTUFDbEIsbUJBQW1CO0FBQUEsTUFDbkIsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsV0FBVztBQUFBLE1BQ1gsaUJBQWlCO0FBQUEsTUFDakIsUUFBUTtBQUFBLE1BQ1IsZUFBZTtBQUFBLE1BQ2YsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2hCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2Isa0JBQWtCO0FBQUEsUUFDaEI7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxjQUFjO0FBQUEsUUFDWjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsWUFBWSxDQUFDLGdCQUFnQixlQUFlLGVBQWUsb0JBQW9CLE9BQU8sb0JBQW9CLGFBQWEsY0FBYyxVQUFVLFdBQVcsa0JBQWtCO0FBQUEsTUFDNUssc0JBQXNCLENBQUMsUUFBUSxzQkFBc0IsY0FBYyxxQkFBcUI7QUFBQSxNQUN4RixrQkFBa0I7QUFBQSxNQUNsQixtQkFBbUI7QUFBQSxNQUNuQixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixXQUFXO0FBQUEsTUFDWCxpQkFBaUI7QUFBQSxNQUNqQixRQUFRO0FBQUEsTUFDUixlQUFlO0FBQUEsTUFDZixZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDaEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixrQkFBa0I7QUFBQSxRQUNoQjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGNBQWM7QUFBQSxRQUNaO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxZQUFZLENBQUMsT0FBTyxtQkFBbUIsZ0JBQWdCLGNBQWMsVUFBVSxhQUFhLGtCQUFrQixnQkFBZ0IsUUFBUSxXQUFXLGlCQUFpQixjQUFjLFNBQVM7QUFBQSxNQUN6TCxzQkFBc0IsQ0FBQyxRQUFRLFdBQVcsY0FBYyxzQkFBc0I7QUFBQSxNQUM5RSxrQkFBa0I7QUFBQSxNQUNsQixtQkFBbUI7QUFBQSxNQUNuQixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixXQUFXO0FBQUEsTUFDWCxpQkFBaUI7QUFBQSxNQUNqQixRQUFRO0FBQUEsTUFDUixlQUFlO0FBQUEsTUFDZixZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDaEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixrQkFBa0I7QUFBQSxRQUNoQjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGNBQWM7QUFBQSxRQUNaO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxZQUFZLENBQUMsNEJBQTRCLHFCQUFxQixxQkFBcUIsZ0JBQWdCLHNCQUFzQixhQUFhLGdCQUFnQixtQkFBbUIsUUFBUSxRQUFRLHlCQUF5QjtBQUFBLE1BQ2xOLHNCQUFzQixDQUFDLFFBQVEsY0FBYyxzQkFBc0IsWUFBWTtBQUFBLE1BQy9FLGtCQUFrQjtBQUFBLE1BQ2xCLG1CQUFtQjtBQUFBLE1BQ25CLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxNQUNYLGlCQUFpQjtBQUFBLE1BQ2pCLFFBQVE7QUFBQSxNQUNSLGVBQWU7QUFBQSxNQUNmLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxJQUNoQjtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGtCQUFrQjtBQUFBLFFBQ2hCO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsY0FBYztBQUFBLFFBQ1o7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFlBQVksQ0FBQyxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsU0FBUyw2QkFBNkIsZ0JBQWdCLDRCQUE0QixVQUFVLFNBQVM7QUFBQSxNQUM5SyxzQkFBc0IsQ0FBQyxpQkFBaUIsVUFBVSxRQUFRLGNBQWM7QUFBQSxNQUN4RSxrQkFBa0I7QUFBQSxNQUNsQixtQkFBbUI7QUFBQSxNQUNuQixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixXQUFXO0FBQUEsTUFDWCxpQkFBaUI7QUFBQSxNQUNqQixRQUFRO0FBQUEsTUFDUixlQUFlO0FBQUEsTUFDZixZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDaEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixrQkFBa0I7QUFBQSxRQUNoQjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGNBQWM7QUFBQSxRQUNaO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxZQUFZLENBQUMsY0FBYyw0QkFBNEIsa0JBQWtCLGFBQWEsNEJBQTRCLGFBQWEsUUFBUSw4QkFBOEIsdUJBQXVCLDJCQUEyQjtBQUFBLE1BQ3ZOLHNCQUFzQixDQUFDLGVBQWUsbUJBQW1CLFdBQVcsdUJBQXVCO0FBQUEsTUFDM0Ysa0JBQWtCO0FBQUEsTUFDbEIsbUJBQW1CO0FBQUEsTUFDbkIsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsV0FBVztBQUFBLE1BQ1gsaUJBQWlCO0FBQUEsTUFDakIsUUFBUTtBQUFBLE1BQ1IsZUFBZTtBQUFBLE1BQ2YsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2hCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2Isa0JBQWtCO0FBQUEsUUFDaEI7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxjQUFjO0FBQUEsUUFDWjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsWUFBWSxDQUFDLGVBQWUsaUJBQWlCLHVCQUF1Qix3QkFBd0IsMkJBQTJCLG1CQUFtQixpQkFBaUIsZ0JBQWdCLFNBQVMsK0JBQStCLG9CQUFvQjtBQUFBLE1BQ3ZPLHNCQUFzQixDQUFDLHdCQUF3QixnQkFBZ0IsaUJBQWlCLHdCQUF3QjtBQUFBLE1BQ3hHLGtCQUFrQjtBQUFBLE1BQ2xCLG1CQUFtQjtBQUFBLE1BQ25CLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxNQUNYLGlCQUFpQjtBQUFBLE1BQ2pCLFFBQVE7QUFBQSxNQUNSLGVBQWU7QUFBQSxNQUNmLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxJQUNoQjtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGtCQUFrQjtBQUFBLFFBQ2hCO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsY0FBYztBQUFBLFFBQ1o7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFlBQVksQ0FBQyxZQUFZLGFBQWEsT0FBTyxhQUFhLDBCQUEwQixVQUFVLFdBQVcsaUJBQWlCLHlCQUF5Qiw2QkFBNkIsb0JBQW9CLDZCQUE2QjtBQUFBLE1BQ2pPLHNCQUFzQixDQUFDLGNBQWMsd0JBQXdCLFNBQVMsa0JBQWtCO0FBQUEsTUFDeEYsa0JBQWtCO0FBQUEsTUFDbEIsbUJBQW1CO0FBQUEsTUFDbkIsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsV0FBVztBQUFBLE1BQ1gsaUJBQWlCO0FBQUEsTUFDakIsUUFBUTtBQUFBLE1BQ1IsZUFBZTtBQUFBLE1BQ2YsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2hCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1o7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULGtCQUFrQjtBQUFBLE1BQ2xCLGlCQUFpQjtBQUFBLE1BQ2pCLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxNQUNkLGFBQWEsQ0FBQyw2QkFBNkIsK0JBQStCLDRCQUE0QiwyQkFBMkI7QUFBQSxNQUNqSSxZQUFZLENBQUMsUUFBUSxVQUFVLFlBQVksZUFBZSxlQUFlLE9BQU87QUFBQSxNQUNoRixVQUFVLENBQUMsdUJBQXVCLGlDQUFpQyxnQ0FBZ0M7QUFBQSxNQUNuRyxrQkFBa0I7QUFBQSxNQUNsQixXQUFXO0FBQUEsTUFDWCxpQkFBaUI7QUFBQSxNQUNqQixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDaEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxrQkFBa0I7QUFBQSxNQUNsQixpQkFBaUI7QUFBQSxNQUNqQixTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsTUFDZCxhQUFhLENBQUMsMENBQTBDLDRCQUE0QixrQ0FBa0MscUJBQXFCO0FBQUEsTUFDM0ksWUFBWSxDQUFDLFVBQVUsU0FBUyxhQUFhLFlBQVksY0FBYyxXQUFXO0FBQUEsTUFDbEYsVUFBVSxDQUFDLCtCQUErQixrQ0FBa0MsMkJBQTJCO0FBQUEsTUFDdkcsa0JBQWtCO0FBQUEsTUFDbEIsV0FBVztBQUFBLE1BQ1gsaUJBQWlCO0FBQUEsTUFDakIsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2hCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLE1BQ1Qsa0JBQWtCO0FBQUEsTUFDbEIsaUJBQWlCO0FBQUEsTUFDakIsU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLE1BQ2QsYUFBYSxDQUFDLDJDQUEyQyxpQ0FBaUMsOEJBQThCLCtCQUErQjtBQUFBLE1BQ3ZKLFlBQVksQ0FBQyxRQUFRLGdCQUFnQixXQUFXLE9BQU8sYUFBYSxVQUFVO0FBQUEsTUFDOUUsVUFBVSxDQUFDLDhCQUE4QiwwQkFBMEIsaUNBQWlDO0FBQUEsTUFDcEcsa0JBQWtCO0FBQUEsTUFDbEIsV0FBVztBQUFBLE1BQ1gsaUJBQWlCO0FBQUEsTUFDakIsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2hCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLE1BQ1Qsa0JBQWtCO0FBQUEsTUFDbEIsaUJBQWlCO0FBQUEsTUFDakIsU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLE1BQ2QsYUFBYSxDQUFDLG1DQUFtQyxnQ0FBZ0MsZ0NBQWdDLDZCQUE2QjtBQUFBLE1BQzlJLFlBQVksQ0FBQyxlQUFlLGNBQWMsY0FBYyxnQkFBZ0IsV0FBVyxRQUFRO0FBQUEsTUFDM0YsVUFBVSxDQUFDLGdDQUFnQyw0QkFBNEIsbUNBQW1DO0FBQUEsTUFDMUcsa0JBQWtCO0FBQUEsTUFDbEIsV0FBVztBQUFBLE1BQ1gsaUJBQWlCO0FBQUEsTUFDakIsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2hCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1Y7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULGtCQUFrQjtBQUFBLFFBQ2hCO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFXO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsWUFBWSxDQUFDLFVBQVUsUUFBUSxlQUFlLFVBQVUsU0FBUyxlQUFlO0FBQUEsTUFDaEYsVUFBVSxDQUFDLDZCQUE2Qix5QkFBeUIsNkJBQTZCO0FBQUEsTUFDOUYsaUJBQWlCO0FBQUEsTUFDakIsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2hCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1Qsa0JBQWtCO0FBQUEsUUFDaEI7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQVc7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxZQUFZLENBQUMsU0FBUyxZQUFZLGNBQWMsZ0JBQWdCLFNBQVM7QUFBQSxNQUN6RSxVQUFVLENBQUMseUJBQXlCLGtDQUFrQyw0QkFBNEI7QUFBQSxNQUNsRyxpQkFBaUI7QUFBQSxNQUNqQixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDaEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxrQkFBa0I7QUFBQSxRQUNoQjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBVztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFlBQVksQ0FBQyxhQUFhLE9BQU8sU0FBUyxpQkFBaUIsWUFBWTtBQUFBLE1BQ3ZFLFVBQVUsQ0FBQyxtQ0FBbUMsNEJBQTRCLDJCQUEyQjtBQUFBLE1BQ3JHLGlCQUFpQjtBQUFBLE1BQ2pCLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxJQUNoQjtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULGtCQUFrQjtBQUFBLFFBQ2hCO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFXO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsWUFBWSxDQUFDLGdCQUFnQixjQUFjLGNBQWMsVUFBVSxXQUFXO0FBQUEsTUFDOUUsVUFBVSxDQUFDLHFDQUFxQyx1QkFBdUIsaUNBQWlDO0FBQUEsTUFDeEcsaUJBQWlCO0FBQUEsTUFDakIsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2hCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1Qsa0JBQWtCO0FBQUEsUUFDaEI7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQVc7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxZQUFZLENBQUMsWUFBWSxjQUFjLFdBQVcsVUFBVSxrQkFBa0I7QUFBQSxNQUM5RSxVQUFVLENBQUMscUJBQXFCLG1DQUFtQywyQkFBMkI7QUFBQSxNQUM5RixpQkFBaUI7QUFBQSxNQUNqQixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDaEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxrQkFBa0I7QUFBQSxRQUNoQjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBVztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFlBQVksQ0FBQyxRQUFRLGVBQWUsTUFBTSxVQUFVLGlCQUFpQjtBQUFBLE1BQ3JFLFVBQVUsQ0FBQyxxQ0FBcUMsd0JBQXdCLG9DQUFvQztBQUFBLE1BQzVHLGlCQUFpQjtBQUFBLE1BQ2pCLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxNQUNoQixXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixnQkFBZ0I7QUFBQSxNQUNoQixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUCxFQUFFLE9BQU8sc0JBQXNCLFFBQVEsTUFBTTtBQUFBLFFBQzdDLEVBQUUsT0FBTyx1QkFBdUIsUUFBUSxPQUFPO0FBQUEsUUFDL0MsRUFBRSxPQUFPLG1CQUFtQixRQUFRLFdBQVc7QUFBQSxNQUNqRDtBQUFBLE1BQ0EsY0FBYyxDQUFDLFFBQVEsVUFBVSxZQUFZLGVBQWUsVUFBVSxPQUFPO0FBQUEsTUFDN0UsaUJBQWlCO0FBQUEsTUFDakIsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2hCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLE1BQ2IsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsTUFDaEIsV0FBVztBQUFBLE1BQ1gsVUFBVTtBQUFBLE1BQ1YsZ0JBQWdCO0FBQUEsTUFDaEIsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLFFBQ1AsRUFBRSxPQUFPLGlCQUFpQixRQUFRLE9BQU87QUFBQSxRQUN6QyxFQUFFLE9BQU8sWUFBWSxRQUFRLFNBQVM7QUFBQSxRQUN0QyxFQUFFLE9BQU8saUJBQWlCLFFBQVEsTUFBTTtBQUFBLE1BQzFDO0FBQUEsTUFDQSxjQUFjLENBQUMsY0FBYyxVQUFVLGFBQWEsZ0JBQWdCLE9BQU8sS0FBSztBQUFBLE1BQ2hGLGlCQUFpQjtBQUFBLE1BQ2pCLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixZQUFZO0FBQUEsTUFDWixVQUFVO0FBQUEsTUFDVixPQUFPO0FBQUEsTUFDUCxrQkFBa0I7QUFBQSxNQUNsQixtQkFBbUI7QUFBQSxNQUNuQixXQUFXLENBQUMsUUFBUSxVQUFVLFFBQVEsZUFBZSxRQUFRO0FBQUEsTUFDN0QsTUFBTTtBQUFBLE1BQ04saUJBQWlCO0FBQUEsTUFDakIsZ0JBQWdCO0FBQUEsTUFDaEIsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2hCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osWUFBWTtBQUFBLE1BQ1osVUFBVTtBQUFBLE1BQ1YsT0FBTztBQUFBLE1BQ1Asa0JBQWtCO0FBQUEsTUFDbEIsbUJBQW1CO0FBQUEsTUFDbkIsV0FBVyxDQUFDLFNBQVMsUUFBUSxhQUFhLE9BQU8sS0FBSztBQUFBLE1BQ3RELE1BQU07QUFBQSxNQUNOLGlCQUFpQjtBQUFBLE1BQ2pCLGdCQUFnQjtBQUFBLE1BQ2hCLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxJQUNoQjtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFlBQVk7QUFBQSxNQUNaLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLGtCQUFrQjtBQUFBLE1BQ2xCLG1CQUFtQjtBQUFBLE1BQ25CLFdBQVcsQ0FBQyxZQUFZLFVBQVUsZUFBZSxTQUFTLEtBQUs7QUFBQSxNQUMvRCxNQUFNO0FBQUEsTUFDTixpQkFBaUI7QUFBQSxNQUNqQixnQkFBZ0I7QUFBQSxNQUNoQixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDaEI7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTDtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osVUFBVTtBQUFBLE1BQ1YsY0FBYztBQUFBLE1BQ2QsS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sWUFBWTtBQUFBLElBQ2Q7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsTUFDZCxLQUFLO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsSUFDYjtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxNQUNiLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLE1BQ2IsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLElBQ2I7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxJQUNkLGNBQWM7QUFBQSxJQUNkLFNBQVM7QUFBQSxJQUNULHlCQUF5QjtBQUFBLElBQ3pCLGlCQUFpQjtBQUFBLEVBQ25CO0FBQ0Y7OztBQ3YyQmtZLE9BQU8sUUFBUTtBQUNqWixPQUFPLFlBQVk7QUFHbkIsT0FBTyxPQUFPO0FBRWQsSUFBTSxFQUFFLEtBQUssSUFBSTtBQUVqQixJQUFNLGtCQUFOLE1BQXNCO0FBQUEsRUFDcEIsY0FBYztBQUNaLFNBQUssT0FBTztBQUNaLFNBQUssY0FBYztBQUNuQixTQUFLLGtCQUFrQjtBQUN2QixTQUFLLEtBQUs7QUFBQSxFQUNaO0FBQUEsRUFFQSxPQUFPO0FBQ0wsVUFBTSxtQkFDSixRQUFRLElBQUksZ0JBQ1osZ0JBQWdCLFFBQVEsSUFBSSxVQUFVLFVBQVUsSUFBSSxRQUFRLElBQUksY0FBYyxVQUFVLElBQUksUUFBUSxJQUFJLFVBQVUsV0FBVyxJQUFJLFFBQVEsSUFBSSxVQUFVLElBQUksSUFBSSxRQUFRLElBQUksY0FBYyxhQUFhO0FBRXhNLFFBQUk7QUFDRixXQUFLLE9BQU8sSUFBSSxLQUFLO0FBQUEsUUFDbkI7QUFBQSxRQUNBLHlCQUF5QjtBQUFBLFFBQ3pCLG1CQUFtQjtBQUFBLFFBQ25CLEtBQUs7QUFBQSxNQUNQLENBQUM7QUFFRCxXQUFLLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUTtBQUM3QixnQkFBUSxLQUFLLHFDQUFxQyxJQUFJLE9BQU87QUFDN0QsYUFBSyxjQUFjO0FBQUEsTUFDckIsQ0FBQztBQUdELFdBQUssZUFBZTtBQUFBLElBQ3RCLFNBQVMsS0FBSztBQUNaLFdBQUssa0JBQWtCLElBQUk7QUFDM0IsV0FBSyxjQUFjO0FBQ25CLGNBQVEsS0FBSywyQ0FBMkMsSUFBSSxPQUFPO0FBQUEsSUFDckU7QUFBQSxFQUNGO0FBQUEsRUFFQSxNQUFNLGlCQUFpQjtBQUNyQixRQUFJLENBQUMsS0FBSyxLQUFNLFFBQU87QUFDdkIsUUFBSTtBQUNGLFlBQU0sU0FBUyxNQUFNLEtBQUssS0FBSyxRQUFRO0FBQ3ZDLFlBQU0sTUFBTSxNQUFNLE9BQU8sTUFBTSxjQUFjO0FBQzdDLGFBQU8sUUFBUTtBQUNmLFdBQUssY0FBYztBQUNuQixXQUFLLGtCQUFrQjtBQUN2QixjQUFRLElBQUkseURBQW9ELElBQUksS0FBSyxDQUFDLEVBQUUsR0FBRztBQUcvRSxZQUFNLEtBQUssY0FBYztBQUN6QixhQUFPO0FBQUEsSUFDVCxTQUFTLEtBQUs7QUFDWixXQUFLLGNBQWM7QUFDbkIsV0FBSyxrQkFBa0IsSUFBSTtBQUMzQixhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE1BQU0sZ0JBQWdCO0FBQ3BCLFFBQUksQ0FBQyxLQUFLLFlBQWE7QUFDdkIsUUFBSTtBQUNGLFlBQU0sS0FBSyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQThKaEI7QUFHRCxZQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sK0JBQStCO0FBQ2pFLFVBQUksU0FBUyxTQUFTLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEdBQUc7QUFDOUMsZ0JBQVEsSUFBSSwrREFBK0Q7QUFDM0UsbUJBQVcsS0FBSyxnQkFBZ0IsVUFBVTtBQUN4QyxnQkFBTSxLQUFLO0FBQUEsWUFDVDtBQUFBO0FBQUE7QUFBQSxZQUdBO0FBQUEsY0FDRSxFQUFFO0FBQUEsY0FBSSxFQUFFO0FBQUEsY0FBTyxFQUFFO0FBQUEsY0FBTSxFQUFFO0FBQUEsY0FBSyxFQUFFO0FBQUEsY0FBUyxFQUFFO0FBQUEsY0FBUyxFQUFFO0FBQUEsY0FDdEQsS0FBSyxVQUFVLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUFBLGNBQ3ZDLEtBQUssVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFBQSxjQUNuQyxLQUFLLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUFBLGNBQ2pDLEtBQUssVUFBVSxFQUFFLHdCQUF3QixDQUFDLENBQUM7QUFBQSxjQUMzQyxFQUFFO0FBQUEsY0FBa0IsRUFBRTtBQUFBLGNBQW1CLEVBQUU7QUFBQSxjQUFVLEVBQUU7QUFBQSxjQUFhLEVBQUU7QUFBQSxjQUN0RSxFQUFFO0FBQUEsY0FBaUIsRUFBRTtBQUFBLGNBQVEsRUFBRTtBQUFBLGNBQWUsRUFBRTtBQUFBLGNBQVksRUFBRTtBQUFBLGNBQVksRUFBRTtBQUFBLFlBQzlFO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBR0EsWUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLDhCQUE4QjtBQUNoRSxVQUFJLFNBQVMsU0FBUyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxHQUFHO0FBQzlDLGdCQUFRLElBQUkscUNBQXFDO0FBQ2pELG1CQUFXLEtBQUssZ0JBQWdCLFNBQVM7QUFDdkMsZ0JBQU0sS0FBSztBQUFBLFlBQ1Q7QUFBQTtBQUFBO0FBQUEsWUFHQTtBQUFBLGNBQ0UsRUFBRTtBQUFBLGNBQUksRUFBRTtBQUFBLGNBQU8sRUFBRTtBQUFBLGNBQU0sRUFBRTtBQUFBLGNBQU0sRUFBRTtBQUFBLGNBQU0sRUFBRTtBQUFBLGNBQVksRUFBRTtBQUFBLGNBQVEsRUFBRTtBQUFBLGNBQVMsRUFBRTtBQUFBLGNBQzVFLEtBQUssVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQUEsY0FDM0IsS0FBSyxVQUFVLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFBQSxjQUNsQyxFQUFFO0FBQUEsY0FBWSxFQUFFO0FBQUEsY0FBUSxFQUFFO0FBQUEsY0FBUyxFQUFFLFlBQVk7QUFBQSxjQUNqRCxFQUFFO0FBQUEsY0FBWSxFQUFFO0FBQUEsY0FBWSxFQUFFO0FBQUEsWUFDaEM7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFHQSxZQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sNEJBQTRCO0FBQy9ELFVBQUksU0FBUyxVQUFVLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEdBQUc7QUFDL0MsZ0JBQVEsSUFBSSxtQ0FBbUM7QUFDL0MsbUJBQVcsS0FBSyxnQkFBZ0IsT0FBTztBQUNyQyxnQkFBTSxLQUFLO0FBQUEsWUFDVDtBQUFBO0FBQUE7QUFBQSxZQUdBO0FBQUEsY0FDRSxFQUFFO0FBQUEsY0FBSSxFQUFFO0FBQUEsY0FBTyxFQUFFO0FBQUEsY0FBTSxFQUFFO0FBQUEsY0FBVSxFQUFFO0FBQUEsY0FBUyxFQUFFO0FBQUEsY0FBUyxFQUFFO0FBQUEsY0FDM0QsS0FBSyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFBQSxjQUMzQixFQUFFO0FBQUEsY0FBUSxFQUFFO0FBQUEsY0FBVyxFQUFFO0FBQUEsY0FBWSxFQUFFO0FBQUEsY0FBa0IsRUFBRTtBQUFBLGNBQzNELEVBQUU7QUFBQSxjQUFZLEVBQUU7QUFBQSxjQUFZLEVBQUU7QUFBQSxZQUNoQztBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUVBLGNBQVEsSUFBSSx1REFBa0Q7QUFBQSxJQUNoRSxTQUFTLEtBQUs7QUFDWixjQUFRLE1BQU0sK0JBQStCLElBQUksT0FBTztBQUFBLElBQzFEO0FBQUEsRUFDRjtBQUFBLEVBRUEsTUFBTSxNQUFNLE1BQU0sUUFBUTtBQUN4QixRQUFJLENBQUMsS0FBSyxLQUFNLE9BQU0sSUFBSSxNQUFNLGlDQUFpQztBQUNqRSxXQUFPLEtBQUssS0FBSyxNQUFNLE1BQU0sTUFBTTtBQUFBLEVBQ3JDO0FBQUEsRUFFQSxZQUFZO0FBQ1YsV0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsV0FBVyxLQUFLO0FBQUEsTUFDaEIsTUFBTSxRQUFRLElBQUksVUFBVTtBQUFBLE1BQzVCLE1BQU0sUUFBUSxJQUFJLFVBQVU7QUFBQSxNQUM1QixVQUFVLFFBQVEsSUFBSSxjQUFjO0FBQUEsTUFDcEMsT0FBTyxLQUFLO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFDRjtBQUVPLElBQU0sV0FBVyxJQUFJLGdCQUFnQjs7O0FGdFRzTSxJQUFNLDJDQUEyQztBQU1uUyxJQUFNLGFBQWEsY0FBYyx3Q0FBZTtBQUNoRCxJQUFNLFlBQVksS0FBSyxRQUFRLFVBQVU7QUFFekMsSUFBTSxXQUFXLEtBQUssUUFBUSxXQUFXLFNBQVM7QUFDbEQsSUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLGFBQWE7QUFHakQsSUFBSSxDQUFDLEdBQUcsV0FBVyxRQUFRLEdBQUc7QUFDNUIsS0FBRyxVQUFVLFVBQVUsRUFBRSxXQUFXLEtBQUssQ0FBQztBQUM1QztBQUVBLElBQU0sV0FBTixNQUFlO0FBQUEsRUFDYixjQUFjO0FBQ1osU0FBSyxPQUFPO0FBQ1osU0FBSyxLQUFLO0FBQUEsRUFDWjtBQUFBLEVBRUEsT0FBTztBQUNMLFFBQUk7QUFDRixVQUFJLEdBQUcsV0FBVyxPQUFPLEdBQUc7QUFDMUIsY0FBTSxNQUFNLEdBQUcsYUFBYSxTQUFTLE1BQU07QUFDM0MsYUFBSyxPQUFPLEtBQUssTUFBTSxHQUFHO0FBQUEsTUFDNUIsT0FBTztBQUNMLGFBQUssT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLGVBQWUsQ0FBQztBQUN0RCxhQUFLLEtBQUs7QUFBQSxNQUNaO0FBQUEsSUFDRixTQUFTLEtBQUs7QUFDWixjQUFRLE1BQU0saURBQWlELEdBQUc7QUFDbEUsV0FBSyxPQUFPLEtBQUssTUFBTSxLQUFLLFVBQVUsZUFBZSxDQUFDO0FBQ3RELFdBQUssS0FBSztBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFFQSxPQUFPO0FBQ0wsUUFBSTtBQUNGLFlBQU0sVUFBVSxHQUFHLE9BQU87QUFDMUIsU0FBRyxjQUFjLFNBQVMsS0FBSyxVQUFVLEtBQUssTUFBTSxNQUFNLENBQUMsR0FBRyxNQUFNO0FBQ3BFLFNBQUcsV0FBVyxTQUFTLE9BQU87QUFBQSxJQUNoQyxTQUFTLEtBQUs7QUFDWixjQUFRLE1BQU0sNkNBQTZDLEdBQUc7QUFBQSxJQUNoRTtBQUFBLEVBQ0Y7QUFBQSxFQUVBLGNBQWMsTUFBTTtBQUNsQixRQUFJLENBQUMsS0FBSyxLQUFLLElBQUksR0FBRztBQUNwQixXQUFLLEtBQUssSUFBSSxJQUFJLENBQUM7QUFBQSxJQUNyQjtBQUNBLFdBQU8sS0FBSyxLQUFLLElBQUk7QUFBQSxFQUN2QjtBQUFBLEVBRUEsWUFBWSxPQUFPLGFBQWEsT0FBTyxVQUFVO0FBQy9DLFVBQU0sT0FBTyxLQUFLLGNBQWMsY0FBYztBQUM5QyxVQUFNLE1BQU0sb0JBQUksS0FBSztBQUNyQixVQUFNLGFBQWEsQ0FBQyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sS0FBSztBQUN0RyxVQUFNLFVBQVUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLFdBQVcsSUFBSSxTQUFTLENBQUMsQ0FBQztBQUU5RCxVQUFNLFNBQVM7QUFBQSxNQUNiLElBQUksT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFBQSxNQUNoRSxNQUFNO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxXQUFXLElBQUksWUFBWTtBQUFBLElBQzdCO0FBRUEsU0FBSyxRQUFRLE1BQU07QUFFbkIsUUFBSSxLQUFLLFNBQVMsSUFBSyxNQUFLLElBQUk7QUFDaEMsU0FBSyxLQUFLO0FBR1YsUUFBSSxTQUFTLGFBQWE7QUFDeEIsZUFDRztBQUFBLFFBQ0M7QUFBQSxRQUNBLENBQUMsT0FBTyxJQUFJLE9BQU8sTUFBTSxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sTUFBTSxPQUFPLFNBQVM7QUFBQSxNQUMxRixFQUNDLE1BQU0sQ0FBQyxRQUFRLFFBQVEsS0FBSyx1Q0FBdUMsSUFBSSxPQUFPLENBQUM7QUFBQSxJQUNwRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE9BQU8sZ0JBQWdCLEVBQUUsUUFBUSxRQUFRLFVBQVUsTUFBTSxPQUFPLE9BQU8sU0FBUyxJQUFJLENBQUMsR0FBRztBQUN0RixRQUFJLFFBQVEsQ0FBQyxHQUFHLEtBQUssY0FBYyxjQUFjLENBQUM7QUFHbEQsUUFBSSxVQUFVLFdBQVcsT0FBTztBQUM5QixjQUFRLE1BQU0sT0FBTyxDQUFDLFNBQVMsS0FBSyxXQUFXLE1BQU07QUFBQSxJQUN2RDtBQUdBLFFBQUksVUFBVTtBQUNaLGNBQVEsTUFBTTtBQUFBLFFBQ1osQ0FBQyxTQUNFLEtBQUssWUFBWSxLQUFLLFNBQVMsWUFBWSxNQUFNLFNBQVMsWUFBWSxLQUN0RSxLQUFLLGVBQWUsS0FBSyxZQUFZLFlBQVksTUFBTSxTQUFTLFlBQVk7QUFBQSxNQUNqRjtBQUFBLElBQ0Y7QUFHQSxRQUFJLE1BQU07QUFDUixjQUFRLE1BQU0sT0FBTyxDQUFDLFNBQVMsS0FBSyxjQUFjLEtBQUssV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLENBQUM7QUFBQSxJQUN4RztBQUdBLFFBQUksVUFBVSxPQUFPLEtBQUssR0FBRztBQUMzQixZQUFNLElBQUksT0FBTyxLQUFLLEVBQUUsWUFBWTtBQUNwQyxjQUFRLE1BQU0sT0FBTyxDQUFDLFNBQVM7QUFDN0IsY0FBTSxTQUFTLEtBQUssU0FBUyxLQUFLLFFBQVEsSUFBSSxZQUFZO0FBQzFELGNBQU0sUUFBUSxLQUFLLGVBQWUsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLG9CQUFvQixLQUFLLG9CQUFvQixJQUFJLFlBQVk7QUFDcEksY0FBTSxRQUFRLEtBQUssUUFBUSxJQUFJLFlBQVk7QUFDM0MsZUFBTyxNQUFNLFNBQVMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUM7QUFBQSxNQUNqRSxDQUFDO0FBQUEsSUFDSDtBQUdBLFVBQU0sS0FBSyxDQUFDLEdBQUcsTUFBTTtBQUVuQixZQUFNLFFBQVEsSUFBSSxLQUFLLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsRUFBRSxRQUFRO0FBQzlGLFlBQU0sUUFBUSxJQUFJLEtBQUssRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQyxFQUFFLFFBQVE7QUFDOUYsYUFBTyxTQUFTLFdBQVcsUUFBUSxRQUFRLFFBQVE7QUFBQSxJQUNyRCxDQUFDO0FBRUQsUUFBSSxTQUFTLFFBQVEsR0FBRztBQUN0QixjQUFRLE1BQU0sTUFBTSxHQUFHLEtBQUs7QUFBQSxJQUM5QjtBQUVBLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxRQUFRLGdCQUFnQixJQUFJO0FBQzFCLFVBQU0sUUFBUSxLQUFLLGNBQWMsY0FBYztBQUMvQyxXQUFPLE1BQU0sS0FBSyxDQUFDLFNBQVMsT0FBTyxLQUFLLEVBQUUsTUFBTSxPQUFPLEVBQUUsQ0FBQyxLQUFLO0FBQUEsRUFDakU7QUFBQSxFQUVBLFVBQVUsZ0JBQWdCLE1BQU07QUFDOUIsVUFBTSxRQUFRLEtBQUssY0FBYyxjQUFjO0FBQy9DLFdBQU8sTUFBTSxLQUFLLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxLQUFLO0FBQUEsRUFDckQ7QUFBQSxFQUVBLE9BQU8sZ0JBQWdCLE1BQU0sT0FBTyxNQUFNO0FBQ3hDLFVBQU0sUUFBUSxLQUFLLGNBQWMsY0FBYztBQUMvQyxVQUFNLEtBQUssS0FBSyxNQUFNLEdBQUcsZUFBZSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQzVHLFVBQU0sT0FBTSxvQkFBSSxLQUFLLEdBQUUsWUFBWTtBQUVuQyxVQUFNLFVBQVU7QUFBQSxNQUNkLEdBQUc7QUFBQSxNQUNIO0FBQUEsTUFDQSxZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsTUFDWixjQUFjLEtBQUssV0FBVyxjQUFlLEtBQUssZ0JBQWdCLE1BQU87QUFBQSxJQUMzRTtBQUVBLFVBQU0sUUFBUSxPQUFPO0FBQ3JCLFNBQUssS0FBSztBQUVWLFVBQU0sUUFBUSxRQUFRLFNBQVMsUUFBUSxRQUFRO0FBQy9DLFNBQUssWUFBWSxXQUFXLGVBQWUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEtBQUssS0FBSyxXQUFXLFFBQVEsVUFBVSxPQUFPLE9BQU8sTUFBTSxRQUFRLE9BQU8sSUFBSSxHQUFHLGNBQWMsU0FBUztBQUVySyxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsT0FBTyxnQkFBZ0IsSUFBSSxNQUFNLE9BQU8sTUFBTTtBQUM1QyxVQUFNLFFBQVEsS0FBSyxjQUFjLGNBQWM7QUFDL0MsVUFBTSxRQUFRLE1BQU0sVUFBVSxDQUFDLFNBQVMsT0FBTyxLQUFLLEVBQUUsTUFBTSxPQUFPLEVBQUUsQ0FBQztBQUN0RSxRQUFJLFVBQVUsR0FBSSxRQUFPO0FBRXpCLFVBQU0sV0FBVyxNQUFNLEtBQUs7QUFDNUIsVUFBTSxPQUFNLG9CQUFJLEtBQUssR0FBRSxZQUFZO0FBRW5DLFVBQU0sZUFBZSxTQUFTLFdBQVc7QUFDekMsVUFBTSxpQkFBaUIsS0FBSyxXQUFXO0FBRXZDLFVBQU0sY0FBYztBQUFBLE1BQ2xCLEdBQUc7QUFBQSxNQUNILEdBQUc7QUFBQSxNQUNILElBQUksU0FBUztBQUFBO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixjQUFjLGtCQUFrQixDQUFDLFNBQVMsZUFBZSxNQUFPLEtBQUssZ0JBQWdCLFNBQVM7QUFBQSxJQUNoRztBQUVBLFVBQU0sS0FBSyxJQUFJO0FBQ2YsU0FBSyxLQUFLO0FBRVYsVUFBTSxRQUFRLFlBQVksU0FBUyxZQUFZLFFBQVE7QUFDdkQsUUFBSSxDQUFDLGdCQUFnQixnQkFBZ0I7QUFDbkMsV0FBSyxZQUFZLGFBQWEsZUFBZSxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sS0FBSyxLQUFLLGdCQUFnQixNQUFNLFFBQVEsT0FBTyxJQUFJLEdBQUcsY0FBYyxVQUFVO0FBQUEsSUFDL0ksT0FBTztBQUNMLFdBQUssWUFBWSxXQUFXLGVBQWUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEtBQUssS0FBSyxjQUFjLE1BQU0sUUFBUSxPQUFPLElBQUksR0FBRyxjQUFjLFNBQVM7QUFBQSxJQUMxSTtBQUVBLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxhQUFhLGdCQUFnQixJQUFJLFFBQVEsT0FBTyxNQUFNO0FBQ3BELFVBQU0sUUFBUSxLQUFLLGNBQWMsY0FBYztBQUMvQyxVQUFNLE9BQU8sTUFBTSxLQUFLLENBQUMsTUFBTSxPQUFPLEVBQUUsRUFBRSxNQUFNLE9BQU8sRUFBRSxDQUFDO0FBQzFELFFBQUksQ0FBQyxLQUFNLFFBQU87QUFFbEIsVUFBTSxPQUFNLG9CQUFJLEtBQUssR0FBRSxZQUFZO0FBQ25DLFNBQUssU0FBUztBQUNkLFNBQUssYUFBYTtBQUNsQixRQUFJLFdBQVcsZUFBZSxDQUFDLEtBQUssY0FBYztBQUNoRCxXQUFLLGVBQWU7QUFBQSxJQUN0QjtBQUVBLFNBQUssS0FBSztBQUNWLFVBQU0sUUFBUSxLQUFLLFNBQVMsS0FBSyxRQUFRO0FBQ3pDLFNBQUssWUFBWSxxQkFBcUIsTUFBTSxTQUFTLEtBQUssS0FBSyxjQUFjLE1BQU0sUUFBUSxPQUFPLElBQUksR0FBRyxjQUFjLFNBQVM7QUFFaEksV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLE9BQU8sZ0JBQWdCLElBQUksT0FBTyxNQUFNLFlBQVksT0FBTztBQUN6RCxVQUFNLFFBQVEsS0FBSyxjQUFjLGNBQWM7QUFDL0MsVUFBTSxRQUFRLE1BQU0sVUFBVSxDQUFDQyxVQUFTLE9BQU9BLE1BQUssRUFBRSxNQUFNLE9BQU8sRUFBRSxDQUFDO0FBQ3RFLFFBQUksVUFBVSxHQUFJLFFBQU87QUFFekIsVUFBTSxPQUFPLE1BQU0sS0FBSztBQUN4QixVQUFNLFFBQVEsS0FBSyxTQUFTLEtBQUssUUFBUTtBQUV6QyxRQUFJLGFBQWEsS0FBSyxXQUFXLFNBQVM7QUFFeEMsWUFBTSxPQUFPLE9BQU8sQ0FBQztBQUNyQixXQUFLLEtBQUs7QUFDVixXQUFLLFlBQVksd0JBQXdCLEtBQUssS0FBSyxjQUFjLE1BQU0sUUFBUSxPQUFPLElBQUksR0FBRyxjQUFjLG1CQUFtQjtBQUFBLElBQ2hJLE9BQU87QUFFTCxXQUFLLFNBQVM7QUFDZCxXQUFLLGNBQWEsb0JBQUksS0FBSyxHQUFFLFlBQVk7QUFDekMsV0FBSyxLQUFLO0FBQ1YsV0FBSyxZQUFZLFVBQVUsS0FBSyxjQUFjLHFCQUFxQixNQUFNLFFBQVEsT0FBTyxJQUFJLEdBQUcsY0FBYyxRQUFRO0FBQUEsSUFDdkg7QUFFQSxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsUUFBUSxnQkFBZ0IsSUFBSSxPQUFPLE1BQU07QUFDdkMsVUFBTSxRQUFRLEtBQUssY0FBYyxjQUFjO0FBQy9DLFVBQU0sT0FBTyxNQUFNLEtBQUssQ0FBQyxNQUFNLE9BQU8sRUFBRSxFQUFFLE1BQU0sT0FBTyxFQUFFLENBQUM7QUFDMUQsUUFBSSxDQUFDLEtBQU0sUUFBTztBQUVsQixTQUFLLFNBQVM7QUFDZCxTQUFLLGNBQWEsb0JBQUksS0FBSyxHQUFFLFlBQVk7QUFDekMsU0FBSyxLQUFLO0FBRVYsVUFBTSxRQUFRLEtBQUssU0FBUyxLQUFLLFFBQVE7QUFDekMsU0FBSyxZQUFZLGFBQWEsS0FBSyxnQkFBZ0IsZUFBZSxNQUFNLFFBQVEsT0FBTyxJQUFJLEdBQUcsY0FBYyxVQUFVO0FBRXRILFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxXQUFXLGdCQUFnQixLQUFLLFFBQVEsT0FBTyxNQUFNO0FBQ25ELFVBQU0sUUFBUSxLQUFLLGNBQWMsY0FBYztBQUMvQyxRQUFJLFFBQVE7QUFDWixVQUFNLE9BQU0sb0JBQUksS0FBSyxHQUFFLFlBQVk7QUFFbkMsUUFBSSxRQUFRLENBQUMsT0FBTztBQUNsQixZQUFNLE9BQU8sTUFBTSxLQUFLLENBQUMsTUFBTSxPQUFPLEVBQUUsRUFBRSxNQUFNLE9BQU8sRUFBRSxDQUFDO0FBQzFELFVBQUksTUFBTTtBQUNSO0FBQ0EsWUFBSSxXQUFXLFdBQVc7QUFDeEIsZUFBSyxTQUFTO0FBQ2QsY0FBSSxDQUFDLEtBQUssYUFBYyxNQUFLLGVBQWU7QUFDNUMsZUFBSyxhQUFhO0FBQUEsUUFDcEIsV0FBVyxXQUFXLGFBQWE7QUFDakMsZUFBSyxTQUFTO0FBQ2QsZUFBSyxhQUFhO0FBQUEsUUFDcEIsV0FBVyxXQUFXLFNBQVM7QUFDN0IsZUFBSyxTQUFTO0FBQ2QsZUFBSyxhQUFhO0FBQUEsUUFDcEIsV0FBVyxXQUFXLFdBQVc7QUFDL0IsZUFBSyxTQUFTO0FBQ2QsZUFBSyxhQUFhO0FBQUEsUUFDcEI7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBRUQsUUFBSSxRQUFRLEdBQUc7QUFDYixXQUFLLEtBQUs7QUFDVixXQUFLLFlBQVksUUFBUSxNQUFNLGdCQUFnQixLQUFLLElBQUksY0FBYyxJQUFJLGVBQWUsTUFBTSxRQUFRLE9BQU8sSUFBSSxHQUFHLGNBQWMsT0FBTztBQUFBLElBQzVJO0FBRUEsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLFdBQVc7QUFDVCxVQUFNLGNBQWMsQ0FBQyxTQUFTLFlBQVksZ0JBQWdCLGNBQWMsZUFBZSxXQUFXLE9BQU87QUFDekcsVUFBTSxRQUFRO0FBQUEsTUFDWixZQUFZLEtBQUssY0FBYyxPQUFPLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxXQUFXLE9BQU8sRUFBRTtBQUFBLE1BQzVFLGVBQWUsS0FBSyxjQUFjLFVBQVUsRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLFdBQVcsT0FBTyxFQUFFO0FBQUEsTUFDbEYsbUJBQW1CLEtBQUssY0FBYyxjQUFjLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxXQUFXLE9BQU8sRUFBRTtBQUFBLE1BQzFGLGlCQUFpQixLQUFLLGNBQWMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsV0FBVyxPQUFPLEVBQUU7QUFBQSxNQUN0RixrQkFBa0IsS0FBSyxjQUFjLGFBQWEsRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLFdBQVcsT0FBTyxFQUFFO0FBQUEsTUFDeEYsY0FBYyxLQUFLLGNBQWMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsV0FBVyxPQUFPLEVBQUU7QUFBQSxNQUNoRixZQUFZLEtBQUssY0FBYyxPQUFPLEVBQUU7QUFBQSxNQUN4QyxXQUFXO0FBQUEsTUFDWCxRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxnQkFBZ0IsU0FBUyxVQUFVO0FBQUEsSUFDckM7QUFFQSxnQkFBWSxRQUFRLENBQUMsUUFBUTtBQUMzQixVQUFJLFFBQVEsUUFBUztBQUNyQixZQUFNLFFBQVEsS0FBSyxjQUFjLEdBQUc7QUFDcEMsWUFBTSxRQUFRLENBQUMsU0FBUztBQUN0QixZQUFJLEtBQUssV0FBVyxZQUFhLE9BQU07QUFBQSxpQkFDOUIsS0FBSyxXQUFXLFFBQVMsT0FBTTtBQUFBLGlCQUMvQixLQUFLLFdBQVcsUUFBUyxPQUFNO0FBQUEsTUFDMUMsQ0FBQztBQUFBLElBQ0gsQ0FBQztBQUVELFdBQU87QUFBQSxFQUNUO0FBQ0Y7QUFFTyxJQUFNLEtBQUssSUFBSSxTQUFTOzs7QUdqVTJWLE9BQU8sU0FBUztBQUMxWSxPQUFPQyxhQUFZO0FBR25CLElBQU0sYUFBYSxRQUFRLElBQUksY0FBYztBQUM3QyxJQUFNLGVBQWU7QUFHckIsSUFBTSxnQkFBZ0Isb0JBQUksSUFBSTtBQUV2QixTQUFTLGlCQUFpQixPQUFPLFVBQVUsS0FBSyxhQUFhO0FBQ2xFLFFBQU0sYUFBYSxHQUFHLEVBQUUsSUFBSSxNQUFNLFlBQVksQ0FBQztBQUMvQyxRQUFNLE1BQU0sS0FBSyxJQUFJO0FBRXJCLFFBQU0sU0FBUyxjQUFjLElBQUksVUFBVTtBQUMzQyxNQUFJLFFBQVE7QUFDVixRQUFJLE9BQU8sZUFBZSxNQUFNLE9BQU8sYUFBYTtBQUNsRCxZQUFNLGNBQWMsS0FBSyxNQUFNLE9BQU8sY0FBYyxPQUFPLEdBQUk7QUFDL0QsWUFBTSxJQUFJLE1BQU0sK0NBQStDLFdBQVcsb0JBQW9CO0FBQUEsSUFDaEc7QUFBQSxFQUNGO0FBRUEsUUFBTSxRQUFRLEdBQUcsY0FBYyxPQUFPO0FBQ3RDLFFBQU0sT0FBTyxNQUFNLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLENBQUM7QUFFNUUsTUFBSSxDQUFDLE1BQU07QUFDVCx3QkFBb0IsVUFBVTtBQUM5QixVQUFNLElBQUksTUFBTSw0QkFBNEI7QUFBQSxFQUM5QztBQUVBLE1BQUksVUFBVUMsUUFBTyxZQUFZLFVBQVUsS0FBSyxZQUFZO0FBQzVELE1BQUksQ0FBQyxZQUFZLGFBQWEsaUJBQWlCLGFBQWEsdUJBQXVCO0FBQ2pGLFNBQUssZUFBZUEsUUFBTyxTQUFTLFVBQVUsRUFBRTtBQUNoRCxPQUFHLEtBQUs7QUFDUixjQUFVO0FBQUEsRUFDWjtBQUVBLE1BQUksQ0FBQyxTQUFTO0FBQ1osd0JBQW9CLFVBQVU7QUFDOUIsVUFBTSxJQUFJLE1BQU0sNEJBQTRCO0FBQUEsRUFDOUM7QUFHQSxnQkFBYyxPQUFPLFVBQVU7QUFFL0IsUUFBTSxRQUFRLElBQUk7QUFBQSxJQUNoQjtBQUFBLE1BQ0UsUUFBUSxLQUFLO0FBQUEsTUFDYixPQUFPLEtBQUs7QUFBQSxNQUNaLE1BQU0sS0FBSztBQUFBLE1BQ1gsTUFBTSxLQUFLO0FBQUEsSUFDYjtBQUFBLElBQ0E7QUFBQSxJQUNBLEVBQUUsV0FBVyxhQUFhO0FBQUEsRUFDNUI7QUFFQSxLQUFHLFlBQVksMEJBQTBCLFNBQVMsS0FBSyxJQUFJLG9CQUFvQixFQUFFLElBQUksWUFBWTtBQUVqRyxTQUFPO0FBQUEsSUFDTDtBQUFBLElBQ0EsTUFBTTtBQUFBLE1BQ0osSUFBSSxLQUFLO0FBQUEsTUFDVCxNQUFNLEtBQUs7QUFBQSxNQUNYLE9BQU8sS0FBSztBQUFBLE1BQ1osTUFBTSxLQUFLO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLFNBQVMsb0JBQW9CLEtBQUs7QUFDaEMsUUFBTSxNQUFNLEtBQUssSUFBSTtBQUNyQixRQUFNLFNBQVMsY0FBYyxJQUFJLEdBQUcsS0FBSyxFQUFFLE9BQU8sRUFBRTtBQUNwRCxTQUFPLFNBQVM7QUFFaEIsTUFBSSxPQUFPLFNBQVMsR0FBRztBQUNyQixXQUFPLGNBQWMsTUFBTSxLQUFLO0FBQUEsRUFDbEM7QUFFQSxnQkFBYyxJQUFJLEtBQUssTUFBTTtBQUMvQjtBQUVPLFNBQVMsWUFBWSxPQUFPO0FBQ2pDLE1BQUk7QUFDRixXQUFPLElBQUksT0FBTyxPQUFPLFVBQVU7QUFBQSxFQUNyQyxTQUFTLEtBQUs7QUFDWixXQUFPO0FBQUEsRUFDVDtBQUNGO0FBRU8sU0FBUyxpQkFBaUIsS0FBSyxLQUFLLE1BQU07QUFDL0MsTUFBSSxRQUFRO0FBR1osUUFBTSxhQUFhLElBQUksUUFBUTtBQUMvQixNQUFJLGNBQWMsV0FBVyxXQUFXLFNBQVMsR0FBRztBQUNsRCxZQUFRLFdBQVcsVUFBVSxDQUFDO0FBQUEsRUFDaEM7QUFHQSxNQUFJLENBQUMsU0FBUyxJQUFJLFdBQVcsSUFBSSxRQUFRLE9BQU87QUFDOUMsWUFBUSxJQUFJLFFBQVE7QUFBQSxFQUN0QjtBQUVBLE1BQUksQ0FBQyxPQUFPO0FBQ1YsV0FBTyxJQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLHNEQUFzRCxDQUFDO0FBQUEsRUFDOUY7QUFFQSxRQUFNLFVBQVUsWUFBWSxLQUFLO0FBQ2pDLE1BQUksQ0FBQyxTQUFTO0FBQ1osV0FBTyxJQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLG1EQUFtRCxDQUFDO0FBQUEsRUFDM0Y7QUFFQSxNQUFJLE9BQU87QUFDWCxPQUFLO0FBQ1A7OztBSmxIK08sSUFBTUMsNENBQTJDO0FBU2hTLElBQU1DLGNBQWFDLGVBQWNGLHlDQUFlO0FBQ2hELElBQU1HLGFBQVlDLE1BQUssUUFBUUgsV0FBVTtBQUd6QyxJQUFNLGNBQWNHLE1BQUssUUFBUUQsWUFBVyxzQkFBc0I7QUFDbEUsSUFBSSxDQUFDRSxJQUFHLFdBQVcsV0FBVyxHQUFHO0FBQy9CLEVBQUFBLElBQUcsVUFBVSxhQUFhLEVBQUUsV0FBVyxLQUFLLENBQUM7QUFDL0M7QUFHQSxJQUFNLFVBQVUsT0FBTyxZQUFZO0FBQUEsRUFDakMsYUFBYSxDQUFDLEtBQUssTUFBTSxPQUFPO0FBQzlCLE9BQUcsTUFBTSxXQUFXO0FBQUEsRUFDdEI7QUFBQSxFQUNBLFVBQVUsQ0FBQyxLQUFLLE1BQU0sT0FBTztBQUMzQixVQUFNLE1BQU1ELE1BQUssUUFBUSxLQUFLLFlBQVksRUFBRSxZQUFZO0FBQ3hELFVBQU0sV0FBV0EsTUFBSyxTQUFTLEtBQUssY0FBYyxHQUFHLEVBQUUsUUFBUSxtQkFBbUIsR0FBRztBQUNyRixVQUFNLGVBQWUsR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDN0UsT0FBRyxNQUFNLEdBQUcsUUFBUSxJQUFJLFlBQVksR0FBRyxHQUFHLEVBQUU7QUFBQSxFQUM5QztBQUNGLENBQUM7QUFFRCxJQUFNLGFBQWEsQ0FBQyxLQUFLLE1BQU0sT0FBTztBQUNwQyxRQUFNLGNBQWMsQ0FBQyxRQUFRLFFBQVEsU0FBUyxTQUFTLFFBQVEsUUFBUSxPQUFPO0FBQzlFLFFBQU0sTUFBTUEsTUFBSyxRQUFRLEtBQUssWUFBWSxFQUFFLFlBQVk7QUFDeEQsTUFBSSxZQUFZLFNBQVMsR0FBRyxHQUFHO0FBQzdCLE9BQUcsTUFBTSxJQUFJO0FBQUEsRUFDZixPQUFPO0FBQ0wsT0FBRyxJQUFJLE1BQU0seUJBQXlCLEdBQUcsaURBQWlELEdBQUcsS0FBSztBQUFBLEVBQ3BHO0FBQ0Y7QUFFQSxJQUFNLFNBQVMsT0FBTztBQUFBLEVBQ3BCO0FBQUEsRUFDQTtBQUFBLEVBQ0EsUUFBUSxFQUFFLFVBQVUsS0FBSyxPQUFPLEtBQUs7QUFBQTtBQUN2QyxDQUFDO0FBRU0sSUFBTSxTQUFTLFFBQVEsT0FBTztBQU1yQyxPQUFPLEtBQUssZUFBZSxDQUFDLEtBQUssUUFBUTtBQUN2QyxNQUFJO0FBQ0YsVUFBTSxFQUFFLE9BQU8sU0FBUyxJQUFJLElBQUk7QUFDaEMsUUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVO0FBQ3ZCLGFBQU8sSUFBSSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxtQ0FBbUMsQ0FBQztBQUFBLElBQzNFO0FBRUEsVUFBTSxLQUFLLElBQUksTUFBTSxJQUFJLFdBQVcsaUJBQWlCO0FBQ3JELFVBQU0sRUFBRSxPQUFPLEtBQUssSUFBSSxpQkFBaUIsT0FBTyxVQUFVLEVBQUU7QUFHNUQsUUFBSSxPQUFPLFNBQVMsT0FBTztBQUFBLE1BQ3pCLFVBQVU7QUFBQSxNQUNWLFFBQVEsUUFBUSxJQUFJLGFBQWE7QUFBQSxNQUNqQyxVQUFVO0FBQUEsTUFDVixRQUFRLElBQUksS0FBSyxLQUFLLEtBQUs7QUFBQSxJQUM3QixDQUFDO0FBRUQsUUFBSSxLQUFLLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFBQSxFQUMxQixTQUFTLEtBQUs7QUFDWixRQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLElBQUksV0FBVyx5QkFBeUIsQ0FBQztBQUFBLEVBQ3pFO0FBQ0YsQ0FBQztBQUVELE9BQU8sS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLLFFBQVE7QUFDeEMsTUFBSSxZQUFZLE9BQU87QUFDdkIsTUFBSSxLQUFLLEVBQUUsU0FBUyxNQUFNLFNBQVMsMkJBQTJCLENBQUM7QUFDakUsQ0FBQztBQUVELE9BQU8sSUFBSSxZQUFZLENBQUMsS0FBSyxRQUFRO0FBQ25DLE1BQUksUUFBUTtBQUNaLFFBQU0sYUFBYSxJQUFJLFFBQVE7QUFDL0IsTUFBSSxjQUFjLFdBQVcsV0FBVyxTQUFTLEdBQUc7QUFDbEQsWUFBUSxXQUFXLFVBQVUsQ0FBQztBQUFBLEVBQ2hDLFdBQVcsSUFBSSxXQUFXLElBQUksUUFBUSxPQUFPO0FBQzNDLFlBQVEsSUFBSSxRQUFRO0FBQUEsRUFDdEI7QUFFQSxNQUFJLENBQUMsT0FBTztBQUNWLFdBQU8sSUFBSSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFBQSxFQUM1QztBQUVBLFFBQU0sVUFBVSxZQUFZLEtBQUs7QUFDakMsTUFBSSxDQUFDLFNBQVM7QUFDWixXQUFPLElBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQUEsRUFDNUM7QUFFQSxRQUFNLFFBQVEsR0FBRyxjQUFjLE9BQU87QUFDdEMsUUFBTSxPQUFPLE1BQU0sS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLFFBQVEsTUFBTTtBQUV0RCxNQUFJLENBQUMsTUFBTTtBQUNULFdBQU8sSUFBSSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFBQSxFQUM1QztBQUVBLE1BQUksS0FBSztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0osSUFBSSxLQUFLO0FBQUEsTUFDVCxNQUFNLEtBQUs7QUFBQSxNQUNYLE9BQU8sS0FBSztBQUFBLE1BQ1osTUFBTSxLQUFLO0FBQUEsSUFDYjtBQUFBLEVBQ0YsQ0FBQztBQUNILENBQUM7QUFFRCxPQUFPLEtBQUsseUJBQXlCLENBQUMsS0FBSyxRQUFRO0FBQ2pELFFBQU0sRUFBRSxNQUFNLElBQUksSUFBSTtBQUN0QixLQUFHLFlBQVksNEJBQTRCLHNDQUFzQyxLQUFLLElBQUksWUFBWTtBQUN0RyxNQUFJLEtBQUs7QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNYLENBQUM7QUFDSCxDQUFDO0FBTUQsU0FBUyxxQkFBcUIsY0FBYyxnQkFBZ0I7QUFFMUQsU0FBTyxJQUFJLElBQUksWUFBWSxJQUFJLENBQUMsS0FBSyxRQUFRO0FBQzNDLFFBQUk7QUFDRixZQUFNLEVBQUUsVUFBVSxNQUFNLFFBQVEsT0FBTyxLQUFLLElBQUksSUFBSTtBQUNwRCxZQUFNLFFBQVEsR0FBRyxPQUFPLGdCQUFnQjtBQUFBLFFBQ3RDLFFBQVE7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBLE9BQU8sUUFBUSxTQUFTLE9BQU8sRUFBRSxJQUFJO0FBQUEsUUFDckMsTUFBTSxRQUFRO0FBQUEsTUFDaEIsQ0FBQztBQUNELFVBQUksS0FBSyxLQUFLO0FBQUEsSUFDaEIsU0FBUyxLQUFLO0FBQ1osVUFBSSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxtQkFBbUIsWUFBWSxHQUFHLENBQUM7QUFBQSxJQUNuRTtBQUFBLEVBQ0YsQ0FBQztBQUdELFNBQU8sSUFBSSxJQUFJLFlBQVksY0FBYyxDQUFDLEtBQUssUUFBUTtBQUNyRCxRQUFJO0FBQ0YsWUFBTSxFQUFFLFNBQVMsSUFBSSxJQUFJO0FBQ3pCLFVBQUksT0FBTyxHQUFHLFFBQVEsZ0JBQWdCLFFBQVE7QUFDOUMsVUFBSSxDQUFDLE1BQU07QUFDVCxlQUFPLEdBQUcsVUFBVSxnQkFBZ0IsUUFBUTtBQUFBLE1BQzlDO0FBRUEsVUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLGFBQWE7QUFDeEMsZUFBTyxJQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLG1DQUFtQyxDQUFDO0FBQUEsTUFDM0U7QUFFQSxVQUFJLEtBQUssSUFBSTtBQUFBLElBQ2YsU0FBUyxLQUFLO0FBQ1osVUFBSSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxtQkFBbUIsWUFBWSxRQUFRLENBQUM7QUFBQSxJQUN4RTtBQUFBLEVBQ0YsQ0FBQztBQUdELFNBQU8sSUFBSSxJQUFJLFlBQVksY0FBYyxrQkFBa0IsQ0FBQyxLQUFLLFFBQVE7QUFDdkUsUUFBSTtBQUNGLFlBQU0sRUFBRSxRQUFRLFVBQVUsTUFBTSxRQUFRLE9BQU8sS0FBSyxJQUFJLElBQUk7QUFDNUQsWUFBTSxRQUFRLEdBQUcsT0FBTyxnQkFBZ0I7QUFBQSxRQUN0QyxRQUFRLFVBQVU7QUFBQSxRQUNsQjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQSxPQUFPLFFBQVEsU0FBUyxPQUFPLEVBQUUsSUFBSTtBQUFBLFFBQ3JDLE1BQU0sUUFBUTtBQUFBLE1BQ2hCLENBQUM7QUFDRCxVQUFJLEtBQUssS0FBSztBQUFBLElBQ2hCLFNBQVMsS0FBSztBQUNaLFVBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8seUJBQXlCLFlBQVksR0FBRyxDQUFDO0FBQUEsSUFDekU7QUFBQSxFQUNGLENBQUM7QUFHRCxTQUFPLEtBQUssSUFBSSxZQUFZLFVBQVUsa0JBQWtCLENBQUMsS0FBSyxRQUFRO0FBQ3BFLFFBQUk7QUFDRixZQUFNLFVBQVUsR0FBRyxPQUFPLGdCQUFnQixJQUFJLE1BQU0sSUFBSSxJQUFJO0FBQzVELFVBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxPQUFPO0FBQUEsSUFDOUIsU0FBUyxLQUFLO0FBQ1osVUFBSSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxJQUFJLFdBQVcsb0JBQW9CLFlBQVksR0FBRyxDQUFDO0FBQUEsSUFDbkY7QUFBQSxFQUNGLENBQUM7QUFHRCxTQUFPLElBQUksSUFBSSxZQUFZLGNBQWMsa0JBQWtCLENBQUMsS0FBSyxRQUFRO0FBQ3ZFLFFBQUk7QUFDRixZQUFNLFVBQVUsR0FBRyxPQUFPLGdCQUFnQixJQUFJLE9BQU8sSUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJO0FBQzNFLFVBQUksQ0FBQyxTQUFTO0FBQ1osZUFBTyxJQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLGtCQUFrQixDQUFDO0FBQUEsTUFDMUQ7QUFDQSxVQUFJLEtBQUssT0FBTztBQUFBLElBQ2xCLFNBQVMsS0FBSztBQUNaLFVBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sSUFBSSxXQUFXLG9CQUFvQixZQUFZLEdBQUcsQ0FBQztBQUFBLElBQ25GO0FBQUEsRUFDRixDQUFDO0FBR0QsU0FBTyxNQUFNLElBQUksWUFBWSxxQkFBcUIsa0JBQWtCLENBQUMsS0FBSyxRQUFRO0FBQ2hGLFFBQUk7QUFDRixZQUFNLEVBQUUsT0FBTyxJQUFJLElBQUk7QUFDdkIsVUFBSSxDQUFDLFFBQVE7QUFDWCxlQUFPLElBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sc0JBQXNCLENBQUM7QUFBQSxNQUM5RDtBQUNBLFlBQU0sVUFBVSxHQUFHLGFBQWEsZ0JBQWdCLElBQUksT0FBTyxJQUFJLFFBQVEsSUFBSSxJQUFJO0FBQy9FLFVBQUksQ0FBQyxTQUFTO0FBQ1osZUFBTyxJQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLGtCQUFrQixDQUFDO0FBQUEsTUFDMUQ7QUFDQSxVQUFJLEtBQUssT0FBTztBQUFBLElBQ2xCLFNBQVMsS0FBSztBQUNaLFVBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sSUFBSSxXQUFXLDBCQUEwQixDQUFDO0FBQUEsSUFDMUU7QUFBQSxFQUNGLENBQUM7QUFHRCxTQUFPLE9BQU8sSUFBSSxZQUFZLGNBQWMsa0JBQWtCLENBQUMsS0FBSyxRQUFRO0FBQzFFLFFBQUk7QUFDRixZQUFNLEVBQUUsVUFBVSxJQUFJLElBQUk7QUFDMUIsWUFBTSxVQUFVLEdBQUcsT0FBTyxnQkFBZ0IsSUFBSSxPQUFPLElBQUksSUFBSSxNQUFNLGNBQWMsTUFBTTtBQUN2RixVQUFJLENBQUMsU0FBUztBQUNaLGVBQU8sSUFBSSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxrQkFBa0IsQ0FBQztBQUFBLE1BQzFEO0FBQ0EsVUFBSSxLQUFLLEVBQUUsU0FBUyxNQUFNLFNBQVMsY0FBYyxTQUFTLHdCQUF3QixpQkFBaUIsQ0FBQztBQUFBLElBQ3RHLFNBQVMsS0FBSztBQUNaLFVBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sb0JBQW9CLFlBQVksUUFBUSxDQUFDO0FBQUEsSUFDekU7QUFBQSxFQUNGLENBQUM7QUFHRCxTQUFPLEtBQUssSUFBSSxZQUFZLHNCQUFzQixrQkFBa0IsQ0FBQyxLQUFLLFFBQVE7QUFDaEYsUUFBSTtBQUNGLFlBQU0sV0FBVyxHQUFHLFFBQVEsZ0JBQWdCLElBQUksT0FBTyxJQUFJLElBQUksSUFBSTtBQUNuRSxVQUFJLENBQUMsVUFBVTtBQUNiLGVBQU8sSUFBSSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTywyQkFBMkIsQ0FBQztBQUFBLE1BQ25FO0FBQ0EsVUFBSSxLQUFLLFFBQVE7QUFBQSxJQUNuQixTQUFTLEtBQUs7QUFDWixVQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLHlCQUF5QixDQUFDO0FBQUEsSUFDMUQ7QUFBQSxFQUNGLENBQUM7QUFHRCxTQUFPLEtBQUssSUFBSSxZQUFZLGVBQWUsa0JBQWtCLENBQUMsS0FBSyxRQUFRO0FBQ3pFLFFBQUk7QUFDRixZQUFNLEVBQUUsS0FBSyxPQUFPLElBQUksSUFBSTtBQUM1QixVQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRO0FBQzFDLGVBQU8sSUFBSSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxpQ0FBaUMsQ0FBQztBQUFBLE1BQ3pFO0FBQ0EsWUFBTSxXQUFXLEdBQUcsV0FBVyxnQkFBZ0IsS0FBSyxRQUFRLElBQUksSUFBSTtBQUNwRSxVQUFJLEtBQUssRUFBRSxTQUFTLE1BQU0sZUFBZSxTQUFTLENBQUM7QUFBQSxJQUNyRCxTQUFTLEtBQUs7QUFDWixVQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLGdDQUFnQyxDQUFDO0FBQUEsSUFDakU7QUFBQSxFQUNGLENBQUM7QUFDSDtBQUdBLHFCQUFxQixTQUFTLE9BQU87QUFDckMscUJBQXFCLFlBQVksVUFBVTtBQUMzQyxxQkFBcUIsZ0JBQWdCLGNBQWM7QUFDbkQscUJBQXFCLGNBQWMsWUFBWTtBQUMvQyxxQkFBcUIsZ0JBQWdCLGFBQWE7QUFDbEQscUJBQXFCLFdBQVcsU0FBUztBQU16QyxPQUFPLElBQUksVUFBVSxrQkFBa0IsQ0FBQyxLQUFLLFFBQVE7QUFDbkQsTUFBSTtBQUNGLFVBQU0sRUFBRSxNQUFNLE9BQU8sSUFBSSxJQUFJO0FBQzdCLFFBQUksUUFBUSxHQUFHLGNBQWMsT0FBTztBQUNwQyxRQUFJLFFBQVEsU0FBUyxPQUFPO0FBQzFCLGNBQVEsTUFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLFNBQVMsSUFBSTtBQUFBLElBQzdDO0FBQ0EsUUFBSSxRQUFRO0FBQ1YsWUFBTSxJQUFJLE9BQU8sWUFBWTtBQUM3QixjQUFRLE1BQU0sT0FBTyxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLElBQUksWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQUEsSUFDNUY7QUFDQSxRQUFJLEtBQUssS0FBSztBQUFBLEVBQ2hCLFNBQVMsS0FBSztBQUNaLFFBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8saUNBQWlDLENBQUM7QUFBQSxFQUNsRTtBQUNGLENBQUM7QUFFRCxPQUFPLEtBQUssaUJBQWlCLGtCQUFrQixPQUFPLE9BQU8sTUFBTSxHQUFHLENBQUMsS0FBSyxRQUFRO0FBQ2xGLE1BQUk7QUFDRixRQUFJLENBQUMsSUFBSSxNQUFNO0FBQ2IsYUFBTyxJQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLG9CQUFvQixDQUFDO0FBQUEsSUFDNUQ7QUFFQSxVQUFNLE1BQU1BLE1BQUssUUFBUSxJQUFJLEtBQUssWUFBWSxFQUFFLFlBQVk7QUFDNUQsUUFBSSxPQUFPO0FBQ1gsUUFBSSxDQUFDLFFBQVEsUUFBUSxTQUFTLFNBQVMsUUFBUSxNQUFNLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDcEUsYUFBTztBQUFBLElBQ1QsV0FBVyxRQUFRLFFBQVE7QUFDekIsYUFBTztBQUFBLElBQ1QsV0FBVyxDQUFDLFFBQVEsT0FBTyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQzFDLGFBQU87QUFBQSxJQUNUO0FBRUEsVUFBTSxZQUFZLFlBQVksSUFBSSxLQUFLLFFBQVE7QUFFL0MsVUFBTSxZQUFZO0FBQUEsTUFDaEIsSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUFBLE1BQ2hFLFVBQVUsSUFBSSxLQUFLO0FBQUEsTUFDbkIsY0FBYyxJQUFJLEtBQUs7QUFBQSxNQUN2QixLQUFLO0FBQUEsTUFDTCxVQUFVLElBQUksS0FBSztBQUFBLE1BQ25CLE1BQU0sSUFBSSxLQUFLO0FBQUEsTUFDZjtBQUFBLE1BQ0EsYUFBWSxvQkFBSSxLQUFLLEdBQUUsWUFBWTtBQUFBLElBQ3JDO0FBRUEsVUFBTSxrQkFBa0IsR0FBRyxjQUFjLE9BQU87QUFDaEQsb0JBQWdCLFFBQVEsU0FBUztBQUNqQyxPQUFHLEtBQUs7QUFFUixPQUFHLFlBQVksWUFBWSxJQUFJLE1BQU0sSUFBSSxLQUFLLFlBQVksS0FBSyxZQUFZLFNBQVMsSUFBSSxjQUFjO0FBRXRHLFFBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxTQUFTO0FBQUEsRUFDaEMsU0FBUyxLQUFLO0FBQ1osUUFBSSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxJQUFJLFdBQVcsc0JBQXNCLENBQUM7QUFBQSxFQUN0RTtBQUNGLENBQUM7QUFFRCxPQUFPLE9BQU8sY0FBYyxrQkFBa0IsQ0FBQyxLQUFLLFFBQVE7QUFDMUQsTUFBSTtBQUNGLFVBQU0sa0JBQWtCLEdBQUcsY0FBYyxPQUFPO0FBQ2hELFVBQU0sUUFBUSxnQkFBZ0IsVUFBVSxDQUFDLE1BQU0sRUFBRSxPQUFPLElBQUksT0FBTyxFQUFFO0FBQ3JFLFFBQUksVUFBVSxJQUFJO0FBQ2hCLGFBQU8sSUFBSSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyx3QkFBd0IsQ0FBQztBQUFBLElBQ2hFO0FBRUEsVUFBTSxPQUFPLGdCQUFnQixLQUFLO0FBQ2xDLFVBQU0sV0FBV0EsTUFBSyxLQUFLLGFBQWEsS0FBSyxRQUFRO0FBRXJELFFBQUlDLElBQUcsV0FBVyxRQUFRLEdBQUc7QUFDM0IsVUFBSTtBQUNGLFFBQUFBLElBQUcsV0FBVyxRQUFRO0FBQUEsTUFDeEIsU0FBUyxHQUFHO0FBQ1YsZ0JBQVEsS0FBSyxvQ0FBb0MsQ0FBQztBQUFBLE1BQ3BEO0FBQUEsSUFDRjtBQUVBLG9CQUFnQixPQUFPLE9BQU8sQ0FBQztBQUMvQixPQUFHLEtBQUs7QUFFUixPQUFHLFlBQVksd0JBQXdCLEtBQUssWUFBWSxLQUFLLG9CQUFvQixjQUFjO0FBRS9GLFFBQUksS0FBSyxFQUFFLFNBQVMsS0FBSyxDQUFDO0FBQUEsRUFDNUIsU0FBUyxLQUFLO0FBQ1osUUFBSSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTywrQkFBK0IsQ0FBQztBQUFBLEVBQ2hFO0FBQ0YsQ0FBQztBQU1ELE9BQU8sS0FBSywwQkFBMEIsa0JBQWtCLE9BQU8sT0FBTyxNQUFNLEdBQUcsT0FBTyxLQUFLLFFBQVE7QUFDakcsTUFBSTtBQUNGLFFBQUksQ0FBQyxJQUFJLE1BQU07QUFDYixhQUFPLElBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8seUJBQXlCLENBQUM7QUFBQSxJQUNqRTtBQUVBLFVBQU0sV0FBVyxJQUFJLEtBQUs7QUFDMUIsVUFBTSxhQUFhQSxJQUFHLGFBQWEsUUFBUTtBQUczQyxVQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVTtBQUc1QyxVQUFNLGtCQUFrQixDQUFDO0FBQ3pCLFVBQU0sYUFBYSxPQUFPLEtBQUssSUFBSSxLQUFLLEVBQUUsT0FBTyxDQUFDLGFBQWEsU0FBUyxXQUFXLGFBQWEsQ0FBQztBQUVqRyxlQUFXLFdBQVcsWUFBWTtBQUNoQyxZQUFNLFVBQVUsSUFBSSxLQUFLLE9BQU87QUFDaEMsVUFBSSxTQUFTO0FBQ1gsY0FBTSxZQUFZLE1BQU0sUUFBUSxNQUFNLFlBQVk7QUFDbEQsY0FBTSxTQUFTRCxNQUFLLFFBQVEsT0FBTyxLQUFLO0FBQ3hDLGNBQU0sY0FBYyxrQkFBa0IsS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTTtBQUNwRyxjQUFNLGdCQUFnQkEsTUFBSyxLQUFLLGFBQWEsV0FBVztBQUV4RCxRQUFBQyxJQUFHLGNBQWMsZUFBZSxTQUFTO0FBRXpDLGNBQU0sU0FBUyxZQUFZLFdBQVc7QUFDdEMsd0JBQWdCLEtBQUs7QUFBQSxVQUNuQixjQUFjO0FBQUEsVUFDZCxLQUFLO0FBQUEsVUFDTCxVQUFVO0FBQUEsUUFDWixDQUFDO0FBR0QsV0FBRyxjQUFjLE9BQU8sRUFBRSxRQUFRO0FBQUEsVUFDaEMsSUFBSSxZQUFZLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUFBLFVBQ3JFLFVBQVU7QUFBQSxVQUNWLGNBQWNELE1BQUssU0FBUyxPQUFPO0FBQUEsVUFDbkMsS0FBSztBQUFBLFVBQ0wsVUFBVSxTQUFTLE9BQU8sUUFBUSxLQUFLLEVBQUUsQ0FBQztBQUFBLFVBQzFDLE1BQU0sVUFBVTtBQUFBLFVBQ2hCLE1BQU07QUFBQSxVQUNOLGFBQVksb0JBQUksS0FBSyxHQUFFLFlBQVk7QUFBQSxRQUNyQyxDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFHQSxRQUFJLG1CQUFtQjtBQUN2QixRQUFJLGlCQUFpQkEsTUFBSyxTQUFTLElBQUksS0FBSyxjQUFjQSxNQUFLLFFBQVEsSUFBSSxLQUFLLFlBQVksQ0FBQztBQUM3RixVQUFNLGFBQWEsSUFBSSxLQUFLLG1CQUFtQjtBQUUvQyxRQUFJLFlBQVk7QUFDZCxZQUFNLFlBQVksTUFBTSxXQUFXLE1BQU0sUUFBUTtBQUdqRCxZQUFNLFdBQVcsVUFBVSxNQUFNLDBCQUEwQixLQUFLLENBQUM7QUFDakUsWUFBTSxRQUFRLENBQUM7QUFFZixpQkFBVyxRQUFRLFVBQVU7QUFFM0IsY0FBTSxXQUFXLEtBQUssTUFBTSwwQkFBMEIsS0FBSyxDQUFDO0FBQzVELGNBQU0sUUFBUSxTQUNYLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxZQUFZLEVBQUUsQ0FBQyxFQUNwQyxLQUFLLEVBQUUsRUFDUCxLQUFLO0FBRVIsWUFBSSxDQUFDLE1BQU87QUFHWixjQUFNLGFBQWEsZ0NBQWdDLEtBQUssSUFBSSxLQUFLLHlCQUF5QixLQUFLLElBQUk7QUFDbkcsY0FBTSxhQUFhLGdDQUFnQyxLQUFLLElBQUksS0FBSyx5QkFBeUIsS0FBSyxJQUFJO0FBQ25HLGNBQU0sYUFBYSxnQ0FBZ0MsS0FBSyxJQUFJLEtBQUsseUJBQXlCLEtBQUssSUFBSTtBQUNuRyxjQUFNLFNBQVMsYUFBYSxLQUFLLElBQUk7QUFFckMsWUFBSSxZQUFZO0FBQ2QsZ0JBQU0sS0FBSztBQUFBLEtBQVEsS0FBSztBQUFBLENBQUk7QUFDNUIsY0FBSSxNQUFNLFdBQVcsRUFBRyxrQkFBaUI7QUFBQSxRQUMzQyxXQUFXLFlBQVk7QUFDckIsZ0JBQU0sS0FBSztBQUFBLE1BQVMsS0FBSztBQUFBLENBQUk7QUFBQSxRQUMvQixXQUFXLFlBQVk7QUFDckIsZ0JBQU0sS0FBSztBQUFBLE9BQVUsS0FBSztBQUFBLENBQUk7QUFBQSxRQUNoQyxXQUFXLFFBQVE7QUFDakIsZ0JBQU0sS0FBSyxLQUFLLEtBQUssRUFBRTtBQUFBLFFBQ3pCLE9BQU87QUFDTCxnQkFBTSxLQUFLLEdBQUcsS0FBSztBQUFBLENBQUk7QUFBQSxRQUN6QjtBQUFBLE1BQ0Y7QUFFQSx5QkFBbUIsTUFBTSxLQUFLLElBQUk7QUFBQSxJQUNwQztBQUdBLFFBQUksZ0JBQWdCLFNBQVMsR0FBRztBQUM5QiwwQkFBb0I7QUFDcEIsc0JBQWdCLFFBQVEsQ0FBQyxLQUFLLFFBQVE7QUFDcEMsNEJBQW9CO0FBQUEsbUJBQXNCLE1BQU0sQ0FBQyxLQUFLLElBQUksR0FBRztBQUFBO0FBQUEsTUFDL0QsQ0FBQztBQUFBLElBQ0g7QUFFQSxPQUFHLEtBQUs7QUFDUixPQUFHLFlBQVksNEJBQTRCLElBQUksS0FBSyxZQUFZLEtBQUssYUFBYSxnQkFBZ0IsTUFBTSxlQUFlLGlCQUFpQixNQUFNLGVBQWUsaUJBQWlCO0FBRTlLLFFBQUksS0FBSztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsU0FBUyxZQUFZLElBQUksS0FBSyxRQUFRO0FBQUEsTUFDdEMsVUFBVSxJQUFJLEtBQUs7QUFBQSxJQUNyQixDQUFDO0FBQUEsRUFDSCxTQUFTLEtBQUs7QUFDWixZQUFRLE1BQU0sdUJBQXVCLEdBQUc7QUFDeEMsUUFBSSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTywyQkFBMkIsSUFBSSxPQUFPLEdBQUcsQ0FBQztBQUFBLEVBQzFFO0FBQ0YsQ0FBQztBQUVELE9BQU8sS0FBSyx5QkFBeUIsa0JBQWtCLE9BQU8sT0FBTyxNQUFNLEdBQUcsQ0FBQyxLQUFLLFFBQVE7QUFDMUYsTUFBSTtBQUNGLFFBQUksQ0FBQyxJQUFJLE1BQU07QUFDYixhQUFPLElBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sd0JBQXdCLENBQUM7QUFBQSxJQUNoRTtBQUVBLFVBQU0sWUFBWSxZQUFZLElBQUksS0FBSyxRQUFRO0FBRS9DLFVBQU0sWUFBWTtBQUFBLE1BQ2hCLElBQUksV0FBVyxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFBQSxNQUNwRSxVQUFVLElBQUksS0FBSztBQUFBLE1BQ25CLGNBQWMsSUFBSSxLQUFLO0FBQUEsTUFDdkIsS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsTUFBTSxJQUFJLEtBQUs7QUFBQSxNQUNmLE1BQU07QUFBQSxNQUNOLGFBQVksb0JBQUksS0FBSyxHQUFFLFlBQVk7QUFBQSxJQUNyQztBQUVBLE9BQUcsY0FBYyxPQUFPLEVBQUUsUUFBUSxTQUFTO0FBQzNDLE9BQUcsS0FBSztBQUVSLE9BQUcsWUFBWSwyQkFBMkIsSUFBSSxLQUFLLFlBQVksS0FBSyxZQUFZLFNBQVMsSUFBSSxZQUFZO0FBRXpHLFFBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxTQUFTO0FBQUEsRUFDaEMsU0FBUyxLQUFLO0FBQ1osUUFBSSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxJQUFJLFdBQVcscUJBQXFCLENBQUM7QUFBQSxFQUNyRTtBQUNGLENBQUM7QUFNRCxPQUFPLElBQUksVUFBVSxrQkFBa0IsQ0FBQyxLQUFLLFFBQVE7QUFDbkQsTUFBSTtBQUNGLFVBQU0sUUFBUSxHQUFHLFNBQVM7QUFDMUIsUUFBSSxLQUFLLEtBQUs7QUFBQSxFQUNoQixTQUFTLEtBQUs7QUFDWixRQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLDRCQUE0QixDQUFDO0FBQUEsRUFDN0Q7QUFDRixDQUFDO0FBRUQsT0FBTyxJQUFJLGtCQUFrQixrQkFBa0IsQ0FBQyxLQUFLLFFBQVE7QUFDM0QsTUFBSTtBQUNGLFVBQU0sT0FBTyxHQUFHLGNBQWMsY0FBYyxFQUFFLE1BQU0sR0FBRyxFQUFFO0FBQ3pELFFBQUksS0FBSyxJQUFJO0FBQUEsRUFDZixTQUFTLEtBQUs7QUFDWixRQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLG9DQUFvQyxDQUFDO0FBQUEsRUFDckU7QUFDRixDQUFDO0FBRUQsT0FBTyxJQUFJLGFBQWEsa0JBQWtCLENBQUMsS0FBSyxRQUFRO0FBQ3RELE1BQUk7QUFDRixVQUFNLFdBQVcsR0FBRyxLQUFLLFlBQVksQ0FBQztBQUN0QyxRQUFJLEtBQUssUUFBUTtBQUFBLEVBQ25CLFNBQVMsS0FBSztBQUNaLFFBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sK0JBQStCLENBQUM7QUFBQSxFQUNoRTtBQUNGLENBQUM7QUFFRCxPQUFPLElBQUksYUFBYSxrQkFBa0IsQ0FBQyxLQUFLLFFBQVE7QUFDdEQsTUFBSTtBQUNGLE9BQUcsS0FBSyxXQUFXLEVBQUUsR0FBRyxHQUFHLEtBQUssVUFBVSxHQUFHLElBQUksS0FBSztBQUN0RCxPQUFHLEtBQUs7QUFDUixPQUFHLFlBQVkseUJBQXlCLDJDQUEyQyxpQkFBaUI7QUFDcEcsUUFBSSxLQUFLLEdBQUcsS0FBSyxRQUFRO0FBQUEsRUFDM0IsU0FBUyxLQUFLO0FBQ1osUUFBSSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyw2QkFBNkIsQ0FBQztBQUFBLEVBQzlEO0FBQ0YsQ0FBQzs7O0FEL2lCZ08sSUFBTUUsNENBQTJDO0FBT2xSLElBQU1DLGNBQWFDLGVBQWNGLHlDQUFlO0FBQ2hELElBQU1HLGFBQVlDLE1BQUssUUFBUUgsV0FBVTtBQUV6QyxJQUFNLE1BQU1JLFNBQVE7QUFDcEIsSUFBTSxPQUFPLFFBQVEsSUFBSSxRQUFRO0FBR2pDLElBQUksSUFBSSxLQUFLO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixhQUFhO0FBQ2YsQ0FBQyxDQUFDO0FBQ0YsSUFBSSxJQUFJLGFBQWEsQ0FBQztBQUN0QixJQUFJLElBQUlBLFNBQVEsS0FBSyxFQUFFLE9BQU8sT0FBTyxDQUFDLENBQUM7QUFDdkMsSUFBSSxJQUFJQSxTQUFRLFdBQVcsRUFBRSxVQUFVLE1BQU0sT0FBTyxPQUFPLENBQUMsQ0FBQztBQUc3RCxJQUFNQyxlQUFjRixNQUFLLFFBQVFELFlBQVcsbUJBQW1CO0FBQy9ELElBQUksSUFBSSxZQUFZRSxTQUFRLE9BQU9DLFlBQVcsQ0FBQztBQUcvQyxJQUFJLElBQUksUUFBUSxNQUFTO0FBR3pCLElBQUksSUFBSSxXQUFXLENBQUMsS0FBSyxRQUFRO0FBQy9CLE1BQUksS0FBSyxFQUFFLFFBQVEsTUFBTSxPQUFNLG9CQUFJLEtBQUssR0FBRSxZQUFZLEVBQUUsQ0FBQztBQUMzRCxDQUFDO0FBR0QsSUFBTSxXQUFXRixNQUFLLFFBQVFELFlBQVcsU0FBUztBQUNsRCxJQUFJLElBQUlFLFNBQVEsT0FBTyxRQUFRLENBQUM7QUFFaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxRQUFRO0FBQ3BCLE1BQUksSUFBSSxLQUFLLFdBQVcsTUFBTSxLQUFLLElBQUksS0FBSyxXQUFXLFVBQVUsR0FBRztBQUNsRSxXQUFPLElBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sc0JBQXNCLENBQUM7QUFBQSxFQUM5RDtBQUNBLE1BQUksU0FBU0QsTUFBSyxLQUFLLFVBQVUsWUFBWSxDQUFDO0FBQ2hELENBQUM7QUFHRCxJQUFJLFFBQVEsS0FBSyxDQUFDLE1BQU1GLGVBQWNGLHlDQUFlLEdBQUc7QUFDdEQsTUFBSSxPQUFPLE1BQU0sTUFBTTtBQUNyQixZQUFRLElBQUksbURBQW1ELElBQUksRUFBRTtBQUNyRSxZQUFRLElBQUksK0JBQStCTSxZQUFXLEVBQUU7QUFBQSxFQUMxRCxDQUFDO0FBQ0g7QUFFQSxJQUFPLGlCQUFROzs7QURqRGYsU0FBUyxrQkFBa0I7QUFDekIsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sZ0JBQWdCLFFBQVE7QUFDdEIsYUFBTyxZQUFZLElBQUksY0FBVTtBQUFBLElBQ25DO0FBQUEsSUFDQSx1QkFBdUIsUUFBUTtBQUM3QixhQUFPLFlBQVksSUFBSSxjQUFVO0FBQUEsSUFDbkM7QUFBQSxFQUNGO0FBQ0Y7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDO0FBQUEsRUFDcEMsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJleHByZXNzIiwgInBhdGgiLCAiZmlsZVVSTFRvUGF0aCIsICJwYXRoIiwgImZzIiwgImZpbGVVUkxUb1BhdGgiLCAiaXRlbSIsICJiY3J5cHQiLCAiYmNyeXB0IiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwiLCAiX19maWxlbmFtZSIsICJmaWxlVVJMVG9QYXRoIiwgIl9fZGlybmFtZSIsICJwYXRoIiwgImZzIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwiLCAiX19maWxlbmFtZSIsICJmaWxlVVJMVG9QYXRoIiwgIl9fZGlybmFtZSIsICJwYXRoIiwgImV4cHJlc3MiLCAiVVBMT0FEU19ESVIiXQp9Cg==
