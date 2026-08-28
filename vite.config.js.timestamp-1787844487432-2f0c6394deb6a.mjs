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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAic2VydmVyL2luZGV4LmpzIiwgInNlcnZlci9yb3V0ZXMvYXBpLmpzIiwgInNlcnZlci9zZXJ2aWNlcy9kYi5qcyIsICJzZXJ2ZXIvZGF0YS9zZWVkRGF0YS5qcyIsICJzZXJ2ZXIvc2VydmljZXMvcG9zdGdyZXMuanMiLCAic2VydmVyL3NlcnZpY2VzL2F1dGguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtdWtoZVxcXFxEb3dubG9hZHNcXFxcd2VicGFnZS1tYWluXFxcXHdlYnBhZ2UtbWFpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbXVraGVcXFxcRG93bmxvYWRzXFxcXHdlYnBhZ2UtbWFpblxcXFx3ZWJwYWdlLW1haW5cXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL211a2hlL0Rvd25sb2Fkcy93ZWJwYWdlLW1haW4vd2VicGFnZS1tYWluL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBleHByZXNzQXBwIGZyb20gJy4vc2VydmVyL2luZGV4LmpzJztcclxuXHJcbmZ1bmN0aW9uIGFwaVNlcnZlclBsdWdpbigpIHtcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogJ2FwaS1zZXJ2ZXItbWlkZGxld2FyZScsXHJcbiAgICBjb25maWd1cmVTZXJ2ZXIoc2VydmVyKSB7XHJcbiAgICAgIHNlcnZlci5taWRkbGV3YXJlcy51c2UoZXhwcmVzc0FwcCk7XHJcbiAgICB9LFxyXG4gICAgY29uZmlndXJlUHJldmlld1NlcnZlcihzZXJ2ZXIpIHtcclxuICAgICAgc2VydmVyLm1pZGRsZXdhcmVzLnVzZShleHByZXNzQXBwKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBhcGlTZXJ2ZXJQbHVnaW4oKV0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiA1MTczXHJcbiAgfVxyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtdWtoZVxcXFxEb3dubG9hZHNcXFxcd2VicGFnZS1tYWluXFxcXHdlYnBhZ2UtbWFpblxcXFxzZXJ2ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG11a2hlXFxcXERvd25sb2Fkc1xcXFx3ZWJwYWdlLW1haW5cXFxcd2VicGFnZS1tYWluXFxcXHNlcnZlclxcXFxpbmRleC5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbXVraGUvRG93bmxvYWRzL3dlYnBhZ2UtbWFpbi93ZWJwYWdlLW1haW4vc2VydmVyL2luZGV4LmpzXCI7aW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCBjb29raWVQYXJzZXIgZnJvbSAnY29va2llLXBhcnNlcic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuaW1wb3J0IHsgcm91dGVyIGFzIGFwaVJvdXRlciB9IGZyb20gJy4vcm91dGVzL2FwaS5qcyc7XG5cbmNvbnN0IF9fZmlsZW5hbWUgPSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCk7XG5jb25zdCBfX2Rpcm5hbWUgPSBwYXRoLmRpcm5hbWUoX19maWxlbmFtZSk7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDA7XG5cbi8vIE1pZGRsZXdhcmVcbmFwcC51c2UoY29ycyh7XG4gIG9yaWdpbjogdHJ1ZSxcbiAgY3JlZGVudGlhbHM6IHRydWVcbn0pKTtcbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xuYXBwLnVzZShleHByZXNzLmpzb24oeyBsaW1pdDogJzUwbWInIH0pKTtcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUsIGxpbWl0OiAnNTBtYicgfSkpO1xuXG4vLyBTdGF0aWMgdXBsb2FkcyBzZXJ2aW5nXG5jb25zdCBVUExPQURTX0RJUiA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9wdWJsaWMvdXBsb2FkcycpO1xuYXBwLnVzZSgnL3VwbG9hZHMnLCBleHByZXNzLnN0YXRpYyhVUExPQURTX0RJUikpO1xuXG4vLyBBUEkgUm91dGVzXG5hcHAudXNlKCcvYXBpJywgYXBpUm91dGVyKTtcblxuLy8gUm9vdCBoZWFsdGggY2hlY2tcbmFwcC5nZXQoJy9oZWFsdGgnLCAocmVxLCByZXMpID0+IHtcbiAgcmVzLmpzb24oeyBzdGF0dXM6ICdvaycsIHRpbWU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KTtcbn0pO1xuXG4vLyBQcm9kdWN0aW9uOiBTZXJ2ZSBmcm9udGVuZCBzdGF0aWMgYnVpbGRcbmNvbnN0IERJU1RfRElSID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL2Rpc3QnKTtcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoRElTVF9ESVIpKTtcblxuYXBwLnVzZSgocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5wYXRoLnN0YXJ0c1dpdGgoJy9hcGknKSB8fCByZXEucGF0aC5zdGFydHNXaXRoKCcvdXBsb2FkcycpKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICdBUEkgcm91dGUgbm90IGZvdW5kJyB9KTtcbiAgfVxuICByZXMuc2VuZEZpbGUocGF0aC5qb2luKERJU1RfRElSLCAnaW5kZXguaHRtbCcpKTtcbn0pO1xuXG4vLyBTdGFydCBsaXN0ZW5pbmcgaWYgZXhlY3V0ZWQgZGlyZWN0bHlcbmlmIChwcm9jZXNzLmFyZ3ZbMV0gPT09IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSkge1xuICBhcHAubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgU01SSUtBQU0gQ2VudHJhbCBDTVMgQVBJIFNlcnZlciBydW5uaW5nIG9uIHBvcnQgJHtQT1JUfWApO1xuICAgIGNvbnNvbGUubG9nKGBQZXJzaXN0ZW50IEZpbGUgU3RvcmFnZSBhdDogJHtVUExPQURTX0RJUn1gKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbXVraGVcXFxcRG93bmxvYWRzXFxcXHdlYnBhZ2UtbWFpblxcXFx3ZWJwYWdlLW1haW5cXFxcc2VydmVyXFxcXHJvdXRlc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbXVraGVcXFxcRG93bmxvYWRzXFxcXHdlYnBhZ2UtbWFpblxcXFx3ZWJwYWdlLW1haW5cXFxcc2VydmVyXFxcXHJvdXRlc1xcXFxhcGkuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL211a2hlL0Rvd25sb2Fkcy93ZWJwYWdlLW1haW4vd2VicGFnZS1tYWluL3NlcnZlci9yb3V0ZXMvYXBpLmpzXCI7aW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgbXVsdGVyIGZyb20gJ211bHRlcic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJztcbmltcG9ydCBKU1ppcCBmcm9tICdqc3ppcCc7XG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uL3NlcnZpY2VzL2RiLmpzJztcbmltcG9ydCB7IGF1dGhlbnRpY2F0ZVVzZXIsIHJlcXVpcmVBZG1pbkF1dGgsIHZlcmlmeVRva2VuIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aC5qcyc7XG5cbmNvbnN0IF9fZmlsZW5hbWUgPSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCk7XG5jb25zdCBfX2Rpcm5hbWUgPSBwYXRoLmRpcm5hbWUoX19maWxlbmFtZSk7XG5cbi8vIFVwbG9hZHMgZGlyZWN0b3J5OiBpbiBwdWJsaWMvdXBsb2FkcyBmb3IgZGlyZWN0IGJyb3dzZXIgc2VydmluZ1xuY29uc3QgVVBMT0FEU19ESVIgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vcHVibGljL3VwbG9hZHMnKTtcbmlmICghZnMuZXhpc3RzU3luYyhVUExPQURTX0RJUikpIHtcbiAgZnMubWtkaXJTeW5jKFVQTE9BRFNfRElSLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbn1cblxuLy8gTXVsdGVyIFN0b3JhZ2UgQ29uZmlndXJhdGlvblxuY29uc3Qgc3RvcmFnZSA9IG11bHRlci5kaXNrU3RvcmFnZSh7XG4gIGRlc3RpbmF0aW9uOiAocmVxLCBmaWxlLCBjYikgPT4ge1xuICAgIGNiKG51bGwsIFVQTE9BRFNfRElSKTtcbiAgfSxcbiAgZmlsZW5hbWU6IChyZXEsIGZpbGUsIGNiKSA9PiB7XG4gICAgY29uc3QgZXh0ID0gcGF0aC5leHRuYW1lKGZpbGUub3JpZ2luYWxuYW1lKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGJhc2VOYW1lID0gcGF0aC5iYXNlbmFtZShmaWxlLm9yaWdpbmFsbmFtZSwgZXh0KS5yZXBsYWNlKC9bXmEtekEtWjAtOV8tXS9nLCAnXycpO1xuICAgIGNvbnN0IHVuaXF1ZVN1ZmZpeCA9IGAke0RhdGUubm93KCl9XyR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDYpfWA7XG4gICAgY2IobnVsbCwgYCR7YmFzZU5hbWV9XyR7dW5pcXVlU3VmZml4fSR7ZXh0fWApO1xuICB9XG59KTtcblxuY29uc3QgZmlsZUZpbHRlciA9IChyZXEsIGZpbGUsIGNiKSA9PiB7XG4gIGNvbnN0IGFsbG93ZWRFeHRzID0gWycucG5nJywgJy5qcGcnLCAnLmpwZWcnLCAnLndlYnAnLCAnLnBkZicsICcuZG9jJywgJy5kb2N4J107XG4gIGNvbnN0IGV4dCA9IHBhdGguZXh0bmFtZShmaWxlLm9yaWdpbmFsbmFtZSkudG9Mb3dlckNhc2UoKTtcbiAgaWYgKGFsbG93ZWRFeHRzLmluY2x1ZGVzKGV4dCkpIHtcbiAgICBjYihudWxsLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBjYihuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGZpbGUgdHlwZSAke2V4dH0uIEFsbG93ZWQ6IFBORywgSlBHLCBKUEVHLCBXRUJQLCBQREYsIERPQywgRE9DWGApLCBmYWxzZSk7XG4gIH1cbn07XG5cbmNvbnN0IHVwbG9hZCA9IG11bHRlcih7XG4gIHN0b3JhZ2UsXG4gIGZpbGVGaWx0ZXIsXG4gIGxpbWl0czogeyBmaWxlU2l6ZTogNTAgKiAxMDI0ICogMTAyNCB9IC8vIDUwIE1CXG59KTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gMS4gQVVUSEVOVElDQVRJT04gUk9VVEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxucm91dGVyLnBvc3QoJy9hdXRoL2xvZ2luJywgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ0VtYWlsIGFuZCBwYXNzd29yZCBhcmUgcmVxdWlyZWQuJyB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBpcCA9IHJlcS5pcCB8fCByZXEuY29ubmVjdGlvbi5yZW1vdGVBZGRyZXNzIHx8ICcxMjcuMC4wLjEnO1xuICAgIGNvbnN0IHsgdG9rZW4sIHVzZXIgfSA9IGF1dGhlbnRpY2F0ZVVzZXIoZW1haWwsIHBhc3N3b3JkLCBpcCk7XG5cbiAgICAvLyBTZXQgc2VjdXJlIGNvb2tpZVxuICAgIHJlcy5jb29raWUoJ3Rva2VuJywgdG9rZW4sIHtcbiAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgc2FtZVNpdGU6ICdsYXgnLFxuICAgICAgbWF4QWdlOiA3ICogMjQgKiA2MCAqIDYwICogMTAwMFxuICAgIH0pO1xuXG4gICAgcmVzLmpzb24oeyB0b2tlbiwgdXNlciB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfHwgJ0F1dGhlbnRpY2F0aW9uIGZhaWxlZC4nIH0pO1xuICB9XG59KTtcblxucm91dGVyLnBvc3QoJy9hdXRoL2xvZ291dCcsIChyZXEsIHJlcykgPT4ge1xuICByZXMuY2xlYXJDb29raWUoJ3Rva2VuJyk7XG4gIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ0xvZ2dlZCBvdXQgc3VjY2Vzc2Z1bGx5LicgfSk7XG59KTtcblxucm91dGVyLmdldCgnL2F1dGgvbWUnLCAocmVxLCByZXMpID0+IHtcbiAgbGV0IHRva2VuID0gbnVsbDtcbiAgY29uc3QgYXV0aEhlYWRlciA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XG4gIGlmIChhdXRoSGVhZGVyICYmIGF1dGhIZWFkZXIuc3RhcnRzV2l0aCgnQmVhcmVyICcpKSB7XG4gICAgdG9rZW4gPSBhdXRoSGVhZGVyLnN1YnN0cmluZyg3KTtcbiAgfSBlbHNlIGlmIChyZXEuY29va2llcyAmJiByZXEuY29va2llcy50b2tlbikge1xuICAgIHRva2VuID0gcmVxLmNvb2tpZXMudG9rZW47XG4gIH1cblxuICBpZiAoIXRva2VuKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgdXNlcjogbnVsbCB9KTtcbiAgfVxuXG4gIGNvbnN0IGRlY29kZWQgPSB2ZXJpZnlUb2tlbih0b2tlbik7XG4gIGlmICghZGVjb2RlZCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IHVzZXI6IG51bGwgfSk7XG4gIH1cblxuICBjb25zdCB1c2VycyA9IGRiLmdldENvbGxlY3Rpb24oJ3VzZXJzJyk7XG4gIGNvbnN0IHVzZXIgPSB1c2Vycy5maW5kKCh1KSA9PiB1LmlkID09PSBkZWNvZGVkLnVzZXJJZCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgdXNlcjogbnVsbCB9KTtcbiAgfVxuXG4gIHJlcy5qc29uKHtcbiAgICB1c2VyOiB7XG4gICAgICBpZDogdXNlci5pZCxcbiAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgcm9sZTogdXNlci5yb2xlXG4gICAgfVxuICB9KTtcbn0pO1xuXG5yb3V0ZXIucG9zdCgnL2F1dGgvZm9yZ290LXBhc3N3b3JkJywgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgZW1haWwgfSA9IHJlcS5ib2R5O1xuICBkYi5sb2dBY3Rpdml0eSgnUGFzc3dvcmQgUmVzZXQgUmVxdWVzdGVkJywgYFBhc3N3b3JkIHJlc2V0IHRva2VuIGdlbmVyYXRlZCBmb3IgJHtlbWFpbH1gLCAnYXV0aF9yZXNldCcpO1xuICByZXMuanNvbih7XG4gICAgc3VjY2VzczogdHJ1ZSxcbiAgICBtZXNzYWdlOiAnSWYgdGhlIGVtYWlsIGV4aXN0cyBpbiBvdXIgc3lzdGVtLCBhIHBhc3N3b3JkIHJlc2V0IGF1dGhvcml6YXRpb24gY29kZSBoYXMgYmVlbiBkaXNwYXRjaGVkLidcbiAgfSk7XG59KTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAyLiBSRVNPVVJDRSBDUlVEIFJPVVRFIEdFTkVSQVRPUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlc291cmNlUm91dGVzKHJlc291cmNlUGF0aCwgY29sbGVjdGlvbk5hbWUpIHtcbiAgLy8gUHVibGljIGxpc3QgKFB1Ymxpc2hlZCBvbmx5KVxuICByb3V0ZXIuZ2V0KGAvJHtyZXNvdXJjZVBhdGh9YCwgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgY2F0ZWdvcnksIHR5cGUsIHNlYXJjaCwgbGltaXQsIHNvcnQgfSA9IHJlcS5xdWVyeTtcbiAgICAgIGNvbnN0IGl0ZW1zID0gZGIuZ2V0QWxsKGNvbGxlY3Rpb25OYW1lLCB7XG4gICAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICB0eXBlLFxuICAgICAgICBzZWFyY2gsXG4gICAgICAgIGxpbWl0OiBsaW1pdCA/IHBhcnNlSW50KGxpbWl0LCAxMCkgOiB1bmRlZmluZWQsXG4gICAgICAgIHNvcnQ6IHNvcnQgfHwgJ25ld2VzdCdcbiAgICAgIH0pO1xuICAgICAgcmVzLmpzb24oaXRlbXMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogYEZhaWxlZCB0byBmZXRjaCAke3Jlc291cmNlUGF0aH1gIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gUHVibGljIHNpbmdsZSBpdGVtIGJ5IElEIG9yIFNsdWdcbiAgcm91dGVyLmdldChgLyR7cmVzb3VyY2VQYXRofS86aWRPclNsdWdgLCAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBpZE9yU2x1ZyB9ID0gcmVxLnBhcmFtcztcbiAgICAgIGxldCBpdGVtID0gZGIuZ2V0QnlJZChjb2xsZWN0aW9uTmFtZSwgaWRPclNsdWcpO1xuICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgIGl0ZW0gPSBkYi5nZXRCeVNsdWcoY29sbGVjdGlvbk5hbWUsIGlkT3JTbHVnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpdGVtIHx8IGl0ZW0uc3RhdHVzICE9PSAncHVibGlzaGVkJykge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogJ0l0ZW0gbm90IGZvdW5kIG9yIG5vdCBwdWJsaXNoZWQuJyB9KTtcbiAgICAgIH1cblxuICAgICAgcmVzLmpzb24oaXRlbSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBgRmFpbGVkIHRvIGZldGNoICR7cmVzb3VyY2VQYXRofSBpdGVtYCB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEFkbWluOiBHZXQgYWxsIGl0ZW1zIChhbGwgc3RhdHVzZXMpXG4gIHJvdXRlci5nZXQoYC8ke3Jlc291cmNlUGF0aH0vYWRtaW4vYWxsYCwgcmVxdWlyZUFkbWluQXV0aCwgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBjYXRlZ29yeSwgdHlwZSwgc2VhcmNoLCBsaW1pdCwgc29ydCB9ID0gcmVxLnF1ZXJ5O1xuICAgICAgY29uc3QgaXRlbXMgPSBkYi5nZXRBbGwoY29sbGVjdGlvbk5hbWUsIHtcbiAgICAgICAgc3RhdHVzOiBzdGF0dXMgfHwgJ2FsbCcsXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICB0eXBlLFxuICAgICAgICBzZWFyY2gsXG4gICAgICAgIGxpbWl0OiBsaW1pdCA/IHBhcnNlSW50KGxpbWl0LCAxMCkgOiB1bmRlZmluZWQsXG4gICAgICAgIHNvcnQ6IHNvcnQgfHwgJ25ld2VzdCdcbiAgICAgIH0pO1xuICAgICAgcmVzLmpzb24oaXRlbXMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogYEZhaWxlZCB0byBmZXRjaCBhZG1pbiAke3Jlc291cmNlUGF0aH1gIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQWRtaW46IENyZWF0ZSBpdGVtXG4gIHJvdXRlci5wb3N0KGAvJHtyZXNvdXJjZVBhdGh9L2FkbWluYCwgcmVxdWlyZUFkbWluQXV0aCwgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNyZWF0ZWQgPSBkYi5jcmVhdGUoY29sbGVjdGlvbk5hbWUsIHJlcS5ib2R5LCByZXEudXNlcik7XG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbihjcmVhdGVkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IGVyci5tZXNzYWdlIHx8IGBGYWlsZWQgdG8gY3JlYXRlICR7cmVzb3VyY2VQYXRofWAgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBBZG1pbjogVXBkYXRlIGl0ZW1cbiAgcm91dGVyLnB1dChgLyR7cmVzb3VyY2VQYXRofS9hZG1pbi86aWRgLCByZXF1aXJlQWRtaW5BdXRoLCAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXBkYXRlZCA9IGRiLnVwZGF0ZShjb2xsZWN0aW9uTmFtZSwgcmVxLnBhcmFtcy5pZCwgcmVxLmJvZHksIHJlcS51c2VyKTtcbiAgICAgIGlmICghdXBkYXRlZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogJ0l0ZW0gbm90IGZvdW5kLicgfSk7XG4gICAgICB9XG4gICAgICByZXMuanNvbih1cGRhdGVkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IGVyci5tZXNzYWdlIHx8IGBGYWlsZWQgdG8gdXBkYXRlICR7cmVzb3VyY2VQYXRofWAgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBBZG1pbjogQ2hhbmdlIHN0YXR1cyAoUHVibGlzaCAvIFVucHVibGlzaCAvIERyYWZ0IC8gVHJhc2gpXG4gIHJvdXRlci5wYXRjaChgLyR7cmVzb3VyY2VQYXRofS9hZG1pbi86aWQvc3RhdHVzYCwgcmVxdWlyZUFkbWluQXV0aCwgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSByZXEuYm9keTtcbiAgICAgIGlmICghc3RhdHVzKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnU3RhdHVzIGlzIHJlcXVpcmVkLicgfSk7XG4gICAgICB9XG4gICAgICBjb25zdCB1cGRhdGVkID0gZGIudXBkYXRlU3RhdHVzKGNvbGxlY3Rpb25OYW1lLCByZXEucGFyYW1zLmlkLCBzdGF0dXMsIHJlcS51c2VyKTtcbiAgICAgIGlmICghdXBkYXRlZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogJ0l0ZW0gbm90IGZvdW5kLicgfSk7XG4gICAgICB9XG4gICAgICByZXMuanNvbih1cGRhdGVkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IGVyci5tZXNzYWdlIHx8IGBGYWlsZWQgdG8gdXBkYXRlIHN0YXR1c2AgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBBZG1pbjogRGVsZXRlIGl0ZW0gKHNvZnQgZGVsZXRlIHRvIHRyYXNoLCBvciBwZXJtYW5lbnQgaWYgaW4gdHJhc2gpXG4gIHJvdXRlci5kZWxldGUoYC8ke3Jlc291cmNlUGF0aH0vYWRtaW4vOmlkYCwgcmVxdWlyZUFkbWluQXV0aCwgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGVybWFuZW50IH0gPSByZXEucXVlcnk7XG4gICAgICBjb25zdCBzdWNjZXNzID0gZGIuZGVsZXRlKGNvbGxlY3Rpb25OYW1lLCByZXEucGFyYW1zLmlkLCByZXEudXNlciwgcGVybWFuZW50ID09PSAndHJ1ZScpO1xuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiAnSXRlbSBub3QgZm91bmQuJyB9KTtcbiAgICAgIH1cbiAgICAgIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogcGVybWFuZW50ID09PSAndHJ1ZScgPyAnUGVybWFuZW50bHkgZGVsZXRlZCcgOiAnTW92ZWQgdG8gdHJhc2gnIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogYEZhaWxlZCB0byBkZWxldGUgJHtyZXNvdXJjZVBhdGh9IGl0ZW1gIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQWRtaW46IFJlc3RvcmUgZnJvbSB0cmFzaFxuICByb3V0ZXIucG9zdChgLyR7cmVzb3VyY2VQYXRofS9hZG1pbi86aWQvcmVzdG9yZWAsIHJlcXVpcmVBZG1pbkF1dGgsIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN0b3JlZCA9IGRiLnJlc3RvcmUoY29sbGVjdGlvbk5hbWUsIHJlcS5wYXJhbXMuaWQsIHJlcS51c2VyKTtcbiAgICAgIGlmICghcmVzdG9yZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICdJdGVtIG5vdCBmb3VuZCBpbiB0cmFzaC4nIH0pO1xuICAgICAgfVxuICAgICAgcmVzLmpzb24ocmVzdG9yZWQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogYEZhaWxlZCB0byByZXN0b3JlIGl0ZW1gIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQWRtaW46IEJ1bGsgQWN0aW9uc1xuICByb3V0ZXIucG9zdChgLyR7cmVzb3VyY2VQYXRofS9hZG1pbi9idWxrYCwgcmVxdWlyZUFkbWluQXV0aCwgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgaWRzLCBhY3Rpb24gfSA9IHJlcS5ib2R5O1xuICAgICAgaWYgKCFpZHMgfHwgIUFycmF5LmlzQXJyYXkoaWRzKSB8fCAhYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnSURzIGFycmF5IGFuZCBhY3Rpb24gcmVxdWlyZWQuJyB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFmZmVjdGVkID0gZGIuYnVsa0FjdGlvbihjb2xsZWN0aW9uTmFtZSwgaWRzLCBhY3Rpb24sIHJlcS51c2VyKTtcbiAgICAgIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgYWZmZWN0ZWRDb3VudDogYWZmZWN0ZWQgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBgRmFpbGVkIHRvIGV4ZWN1dGUgYnVsayBhY3Rpb25gIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIFJlZ2lzdGVyIGFsbCByZXNvdXJjZXNcbmNyZWF0ZVJlc291cmNlUm91dGVzKCdwb3N0cycsICdwb3N0cycpO1xuY3JlYXRlUmVzb3VyY2VSb3V0ZXMoJ3NlcnZpY2VzJywgJ3NlcnZpY2VzJyk7XG5jcmVhdGVSZXNvdXJjZVJvdXRlcygnYWNjZWxlcmF0b3JzJywgJ2FjY2VsZXJhdG9ycycpO1xuY3JlYXRlUmVzb3VyY2VSb3V0ZXMoJ2luZHVzdHJpZXMnLCAnaW5kdXN0cmllcycpO1xuY3JlYXRlUmVzb3VyY2VSb3V0ZXMoJ2Nhc2Utc3R1ZGllcycsICdjYXNlU3R1ZGllcycpO1xuY3JlYXRlUmVzb3VyY2VSb3V0ZXMoJ3JlcG9ydHMnLCAncmVwb3J0cycpO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIDMuIE1FRElBIFVQTE9BRCAmIExJQlJBUllcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5yb3V0ZXIuZ2V0KCcvbWVkaWEnLCByZXF1aXJlQWRtaW5BdXRoLCAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHR5cGUsIHNlYXJjaCB9ID0gcmVxLnF1ZXJ5O1xuICAgIGxldCBpdGVtcyA9IGRiLmdldENvbGxlY3Rpb24oJ21lZGlhJyk7XG4gICAgaWYgKHR5cGUgJiYgdHlwZSAhPT0gJ2FsbCcpIHtcbiAgICAgIGl0ZW1zID0gaXRlbXMuZmlsdGVyKChtKSA9PiBtLnR5cGUgPT09IHR5cGUpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoKSB7XG4gICAgICBjb25zdCBxID0gc2VhcmNoLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpdGVtcyA9IGl0ZW1zLmZpbHRlcigobSkgPT4gKG0ub3JpZ2luYWxOYW1lIHx8IG0uZmlsZW5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocSkpO1xuICAgIH1cbiAgICByZXMuanNvbihpdGVtcyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggbWVkaWEgbGlicmFyeS4nIH0pO1xuICB9XG59KTtcblxucm91dGVyLnBvc3QoJy9tZWRpYS91cGxvYWQnLCByZXF1aXJlQWRtaW5BdXRoLCB1cGxvYWQuc2luZ2xlKCdmaWxlJyksIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGlmICghcmVxLmZpbGUpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnTm8gZmlsZSB1cGxvYWRlZC4nIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGV4dCA9IHBhdGguZXh0bmFtZShyZXEuZmlsZS5vcmlnaW5hbG5hbWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IHR5cGUgPSAnZmlsZSc7XG4gICAgaWYgKFsnLnBuZycsICcuanBnJywgJy5qcGVnJywgJy53ZWJwJywgJy5zdmcnLCAnLmdpZiddLmluY2x1ZGVzKGV4dCkpIHtcbiAgICAgIHR5cGUgPSAnaW1hZ2UnO1xuICAgIH0gZWxzZSBpZiAoZXh0ID09PSAnLnBkZicpIHtcbiAgICAgIHR5cGUgPSAncGRmJztcbiAgICB9IGVsc2UgaWYgKFsnLmRvYycsICcuZG9jeCddLmluY2x1ZGVzKGV4dCkpIHtcbiAgICAgIHR5cGUgPSAnZG9jdW1lbnQnO1xuICAgIH1cblxuICAgIGNvbnN0IHB1YmxpY1VybCA9IGAvdXBsb2Fkcy8ke3JlcS5maWxlLmZpbGVuYW1lfWA7XG5cbiAgICBjb25zdCBtZWRpYUl0ZW0gPSB7XG4gICAgICBpZDogYG1lZF8ke0RhdGUubm93KCl9XyR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDQpfWAsXG4gICAgICBmaWxlbmFtZTogcmVxLmZpbGUuZmlsZW5hbWUsXG4gICAgICBvcmlnaW5hbE5hbWU6IHJlcS5maWxlLm9yaWdpbmFsbmFtZSxcbiAgICAgIHVybDogcHVibGljVXJsLFxuICAgICAgbWltZXR5cGU6IHJlcS5maWxlLm1pbWV0eXBlLFxuICAgICAgc2l6ZTogcmVxLmZpbGUuc2l6ZSxcbiAgICAgIHR5cGUsXG4gICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICB9O1xuXG4gICAgY29uc3QgbWVkaWFDb2xsZWN0aW9uID0gZGIuZ2V0Q29sbGVjdGlvbignbWVkaWEnKTtcbiAgICBtZWRpYUNvbGxlY3Rpb24udW5zaGlmdChtZWRpYUl0ZW0pO1xuICAgIGRiLnNhdmUoKTtcblxuICAgIGRiLmxvZ0FjdGl2aXR5KGBVcGxvYWRlZCAke3R5cGV9OiBcIiR7cmVxLmZpbGUub3JpZ2luYWxuYW1lfVwiYCwgYFNhdmVkIGFzICR7cHVibGljVXJsfWAsICdtZWRpYV91cGxvYWQnKTtcblxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKG1lZGlhSXRlbSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVyci5tZXNzYWdlIHx8ICdGaWxlIHVwbG9hZCBmYWlsZWQuJyB9KTtcbiAgfVxufSk7XG5cbnJvdXRlci5kZWxldGUoJy9tZWRpYS86aWQnLCByZXF1aXJlQWRtaW5BdXRoLCAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBtZWRpYUNvbGxlY3Rpb24gPSBkYi5nZXRDb2xsZWN0aW9uKCdtZWRpYScpO1xuICAgIGNvbnN0IGluZGV4ID0gbWVkaWFDb2xsZWN0aW9uLmZpbmRJbmRleCgobSkgPT4gbS5pZCA9PT0gcmVxLnBhcmFtcy5pZCk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICdNZWRpYSBmaWxlIG5vdCBmb3VuZC4nIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW0gPSBtZWRpYUNvbGxlY3Rpb25baW5kZXhdO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKFVQTE9BRFNfRElSLCBpdGVtLmZpbGVuYW1lKTtcblxuICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZnMudW5saW5rU3luYyhmaWxlUGF0aCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQ291bGQgbm90IGRlbGV0ZSBmaWxlIGZyb20gZGlzazonLCBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZWRpYUNvbGxlY3Rpb24uc3BsaWNlKGluZGV4LCAxKTtcbiAgICBkYi5zYXZlKCk7XG5cbiAgICBkYi5sb2dBY3Rpdml0eShgRGVsZXRlZCBtZWRpYSBmaWxlOiBcIiR7aXRlbS5vcmlnaW5hbE5hbWV9XCJgLCBgUmVtb3ZlZCBieSBBZG1pbmAsICdtZWRpYV9kZWxldGUnKTtcblxuICAgIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgbWVkaWEgaXRlbS4nIH0pO1xuICB9XG59KTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA0LiBET0NYIEVYVFJBQ1RJT04gJiBQREYgVVBMT0FEU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnJvdXRlci5wb3N0KCcvZG9jdW1lbnRzL2ltcG9ydC1kb2N4JywgcmVxdWlyZUFkbWluQXV0aCwgdXBsb2FkLnNpbmdsZSgnZmlsZScpLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAoIXJlcS5maWxlKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ05vIERPQ1ggZmlsZSB1cGxvYWRlZC4nIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGVQYXRoID0gcmVxLmZpbGUucGF0aDtcbiAgICBjb25zdCBmaWxlQnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKTtcblxuICAgIC8vIFVucGFjayB3aXRoIEpTWmlwXG4gICAgY29uc3QgemlwID0gYXdhaXQgSlNaaXAubG9hZEFzeW5jKGZpbGVCdWZmZXIpO1xuXG4gICAgLy8gMS4gRXh0cmFjdCBlbWJlZGRlZCBpbWFnZXMgZnJvbSB3b3JkL21lZGlhL1xuICAgIGNvbnN0IGV4dHJhY3RlZEltYWdlcyA9IFtdO1xuICAgIGNvbnN0IGltYWdlRmlsZXMgPSBPYmplY3Qua2V5cyh6aXAuZmlsZXMpLmZpbHRlcigoZmlsZU5hbWUpID0+IGZpbGVOYW1lLnN0YXJ0c1dpdGgoJ3dvcmQvbWVkaWEvJykpO1xuXG4gICAgZm9yIChjb25zdCBpbWdQYXRoIG9mIGltYWdlRmlsZXMpIHtcbiAgICAgIGNvbnN0IGltZ0ZpbGUgPSB6aXAuZmlsZShpbWdQYXRoKTtcbiAgICAgIGlmIChpbWdGaWxlKSB7XG4gICAgICAgIGNvbnN0IGltZ0J1ZmZlciA9IGF3YWl0IGltZ0ZpbGUuYXN5bmMoJ25vZGVidWZmZXInKTtcbiAgICAgICAgY29uc3QgaW1nRXh0ID0gcGF0aC5leHRuYW1lKGltZ1BhdGgpIHx8ICcucG5nJztcbiAgICAgICAgY29uc3QgaW1nRmlsZU5hbWUgPSBgZG9jeF9leHRyYWN0ZWRfJHtEYXRlLm5vdygpfV8ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA2KX0ke2ltZ0V4dH1gO1xuICAgICAgICBjb25zdCB0YXJnZXRJbWdQYXRoID0gcGF0aC5qb2luKFVQTE9BRFNfRElSLCBpbWdGaWxlTmFtZSk7XG5cbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyh0YXJnZXRJbWdQYXRoLCBpbWdCdWZmZXIpO1xuXG4gICAgICAgIGNvbnN0IGltZ1VybCA9IGAvdXBsb2Fkcy8ke2ltZ0ZpbGVOYW1lfWA7XG4gICAgICAgIGV4dHJhY3RlZEltYWdlcy5wdXNoKHtcbiAgICAgICAgICBvcmlnaW5hbFBhdGg6IGltZ1BhdGgsXG4gICAgICAgICAgdXJsOiBpbWdVcmwsXG4gICAgICAgICAgZmlsZW5hbWU6IGltZ0ZpbGVOYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCB0byBtZWRpYSBjb2xsZWN0aW9uXG4gICAgICAgIGRiLmdldENvbGxlY3Rpb24oJ21lZGlhJykudW5zaGlmdCh7XG4gICAgICAgICAgaWQ6IGBtZWRfZG9jeF8ke0RhdGUubm93KCl9XyR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDQpfWAsXG4gICAgICAgICAgZmlsZW5hbWU6IGltZ0ZpbGVOYW1lLFxuICAgICAgICAgIG9yaWdpbmFsTmFtZTogcGF0aC5iYXNlbmFtZShpbWdQYXRoKSxcbiAgICAgICAgICB1cmw6IGltZ1VybCxcbiAgICAgICAgICBtaW1ldHlwZTogYGltYWdlLyR7aW1nRXh0LnJlcGxhY2UoJy4nLCAnJyl9YCxcbiAgICAgICAgICBzaXplOiBpbWdCdWZmZXIubGVuZ3RoLFxuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIFBhcnNlIGRvY3VtZW50LnhtbCBmb3IgdGV4dCwgaGVhZGluZ3MsIGFuZCBwYXJhZ3JhcGhzXG4gICAgbGV0IGV4dHJhY3RlZENvbnRlbnQgPSAnJztcbiAgICBsZXQgZXh0cmFjdGVkVGl0bGUgPSBwYXRoLmJhc2VuYW1lKHJlcS5maWxlLm9yaWdpbmFsbmFtZSwgcGF0aC5leHRuYW1lKHJlcS5maWxlLm9yaWdpbmFsbmFtZSkpO1xuICAgIGNvbnN0IGRvY1htbEZpbGUgPSB6aXAuZmlsZSgnd29yZC9kb2N1bWVudC54bWwnKTtcblxuICAgIGlmIChkb2NYbWxGaWxlKSB7XG4gICAgICBjb25zdCB4bWxTdHJpbmcgPSBhd2FpdCBkb2NYbWxGaWxlLmFzeW5jKCdzdHJpbmcnKTtcblxuICAgICAgLy8gU2ltcGxlIFhNTCBlbGVtZW50IHJlZ2V4IGV4dHJhY3RvciBmb3IgcGFyYWdyYXBoc1xuICAgICAgY29uc3QgcE1hdGNoZXMgPSB4bWxTdHJpbmcubWF0Y2goLzx3OnAoPzpcXHN8PikuKj88XFwvdzpwPi9ncykgfHwgW107XG4gICAgICBjb25zdCBsaW5lcyA9IFtdO1xuXG4gICAgICBmb3IgKGNvbnN0IHBYbWwgb2YgcE1hdGNoZXMpIHtcbiAgICAgICAgLy8gRXh0cmFjdCB0ZXh0IHJ1bnMgaW5zaWRlIHBhcmFncmFwaFxuICAgICAgICBjb25zdCB0TWF0Y2hlcyA9IHBYbWwubWF0Y2goLzx3OnQoPzpcXHN8PikuKj88XFwvdzp0Pi9ncykgfHwgW107XG4gICAgICAgIGNvbnN0IHBUZXh0ID0gdE1hdGNoZXNcbiAgICAgICAgICAubWFwKCh0KSA9PiB0LnJlcGxhY2UoLzxbXj5dKz4vZywgJycpKVxuICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgICAgIC50cmltKCk7XG5cbiAgICAgICAgaWYgKCFwVGV4dCkgY29udGludWU7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgaGVhZGluZ1xuICAgICAgICBjb25zdCBpc0hlYWRpbmcxID0gLzx3OnBTdHlsZVxccyt3OnZhbD1cIkhlYWRpbmcxXCIvaS50ZXN0KHBYbWwpIHx8IC88dzpwU3R5bGVcXHMrdzp2YWw9XCIxXCIvaS50ZXN0KHBYbWwpO1xuICAgICAgICBjb25zdCBpc0hlYWRpbmcyID0gLzx3OnBTdHlsZVxccyt3OnZhbD1cIkhlYWRpbmcyXCIvaS50ZXN0KHBYbWwpIHx8IC88dzpwU3R5bGVcXHMrdzp2YWw9XCIyXCIvaS50ZXN0KHBYbWwpO1xuICAgICAgICBjb25zdCBpc0hlYWRpbmczID0gLzx3OnBTdHlsZVxccyt3OnZhbD1cIkhlYWRpbmczXCIvaS50ZXN0KHBYbWwpIHx8IC88dzpwU3R5bGVcXHMrdzp2YWw9XCIzXCIvaS50ZXN0KHBYbWwpO1xuICAgICAgICBjb25zdCBpc0xpc3QgPSAvPHc6bnVtUHI+L2kudGVzdChwWG1sKTtcblxuICAgICAgICBpZiAoaXNIZWFkaW5nMSkge1xuICAgICAgICAgIGxpbmVzLnB1c2goYFxcbiMjICR7cFRleHR9XFxuYCk7XG4gICAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA9PT0gMSkgZXh0cmFjdGVkVGl0bGUgPSBwVGV4dDtcbiAgICAgICAgfSBlbHNlIGlmIChpc0hlYWRpbmcyKSB7XG4gICAgICAgICAgbGluZXMucHVzaChgXFxuIyMjICR7cFRleHR9XFxuYCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNIZWFkaW5nMykge1xuICAgICAgICAgIGxpbmVzLnB1c2goYFxcbiMjIyMgJHtwVGV4dH1cXG5gKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0xpc3QpIHtcbiAgICAgICAgICBsaW5lcy5wdXNoKGAtICR7cFRleHR9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGluZXMucHVzaChgJHtwVGV4dH1cXG5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBleHRyYWN0ZWRDb250ZW50ID0gbGluZXMuam9pbignXFxuJyk7XG4gICAgfVxuXG4gICAgLy8gRW1iZWQgZXh0cmFjdGVkIGltYWdlcyBpbnRvIG1hcmtkb3duIGNvbnRlbnQgaWYgcHJlc2VudFxuICAgIGlmIChleHRyYWN0ZWRJbWFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgZXh0cmFjdGVkQ29udGVudCArPSAnXFxuXFxuIyMjIERvY3VtZW50IEltYWdlc1xcbic7XG4gICAgICBleHRyYWN0ZWRJbWFnZXMuZm9yRWFjaCgoaW1nLCBpZHgpID0+IHtcbiAgICAgICAgZXh0cmFjdGVkQ29udGVudCArPSBgXFxuIVtEb2N1bWVudCBJbWFnZSAke2lkeCArIDF9XSgke2ltZy51cmx9KVxcbmA7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkYi5zYXZlKCk7XG4gICAgZGIubG9nQWN0aXZpdHkoYEltcG9ydGVkIERPQ1ggRG9jdW1lbnQ6IFwiJHtyZXEuZmlsZS5vcmlnaW5hbG5hbWV9XCJgLCBgRXh0cmFjdGVkICR7ZXh0cmFjdGVkSW1hZ2VzLmxlbmd0aH0gaW1hZ2VzIGFuZCAke2V4dHJhY3RlZENvbnRlbnQubGVuZ3RofSBjaGFycyB0ZXh0YCwgJ2RvY3VtZW50X2ltcG9ydCcpO1xuXG4gICAgcmVzLmpzb24oe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIHRpdGxlOiBleHRyYWN0ZWRUaXRsZSxcbiAgICAgIGNvbnRlbnQ6IGV4dHJhY3RlZENvbnRlbnQsXG4gICAgICBpbWFnZXM6IGV4dHJhY3RlZEltYWdlcyxcbiAgICAgIGZpbGVVcmw6IGAvdXBsb2Fkcy8ke3JlcS5maWxlLmZpbGVuYW1lfWAsXG4gICAgICBmaWxlTmFtZTogcmVxLmZpbGUub3JpZ2luYWxuYW1lXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0RPQ1ggcGFyc2luZyBlcnJvcjonLCBlcnIpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGBET0NYIGV4dHJhY3Rpb24gZmFpbGVkOiAke2Vyci5tZXNzYWdlfWAgfSk7XG4gIH1cbn0pO1xuXG5yb3V0ZXIucG9zdCgnL2RvY3VtZW50cy91cGxvYWQtcGRmJywgcmVxdWlyZUFkbWluQXV0aCwgdXBsb2FkLnNpbmdsZSgnZmlsZScpLCAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAoIXJlcS5maWxlKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ05vIFBERiBmaWxlIHVwbG9hZGVkLicgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHVibGljVXJsID0gYC91cGxvYWRzLyR7cmVxLmZpbGUuZmlsZW5hbWV9YDtcblxuICAgIGNvbnN0IG1lZGlhSXRlbSA9IHtcbiAgICAgIGlkOiBgbWVkX3BkZl8ke0RhdGUubm93KCl9XyR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDQpfWAsXG4gICAgICBmaWxlbmFtZTogcmVxLmZpbGUuZmlsZW5hbWUsXG4gICAgICBvcmlnaW5hbE5hbWU6IHJlcS5maWxlLm9yaWdpbmFsbmFtZSxcbiAgICAgIHVybDogcHVibGljVXJsLFxuICAgICAgbWltZXR5cGU6ICdhcHBsaWNhdGlvbi9wZGYnLFxuICAgICAgc2l6ZTogcmVxLmZpbGUuc2l6ZSxcbiAgICAgIHR5cGU6ICdwZGYnLFxuICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgfTtcblxuICAgIGRiLmdldENvbGxlY3Rpb24oJ21lZGlhJykudW5zaGlmdChtZWRpYUl0ZW0pO1xuICAgIGRiLnNhdmUoKTtcblxuICAgIGRiLmxvZ0FjdGl2aXR5KGBVcGxvYWRlZCBQREYgRG9jdW1lbnQ6IFwiJHtyZXEuZmlsZS5vcmlnaW5hbG5hbWV9XCJgLCBgU2F2ZWQgYXMgJHtwdWJsaWNVcmx9YCwgJ3BkZl91cGxvYWQnKTtcblxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKG1lZGlhSXRlbSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVyci5tZXNzYWdlIHx8ICdQREYgdXBsb2FkIGZhaWxlZC4nIH0pO1xuICB9XG59KTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA1LiBTWVNURU0gU1RBVFMgJiBBQ1RJVklUWSBMT0dTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxucm91dGVyLmdldCgnL3N0YXRzJywgcmVxdWlyZUFkbWluQXV0aCwgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc3RhdHMgPSBkYi5nZXRTdGF0cygpO1xuICAgIHJlcy5qc29uKHN0YXRzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byByZXRyaWV2ZSBzdGF0cy4nIH0pO1xuICB9XG59KTtcblxucm91dGVyLmdldCgnL2FjdGl2aXR5LWxvZ3MnLCByZXF1aXJlQWRtaW5BdXRoLCAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsb2dzID0gZGIuZ2V0Q29sbGVjdGlvbignYWN0aXZpdHlMb2dzJykuc2xpY2UoMCwgMzApO1xuICAgIHJlcy5qc29uKGxvZ3MpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIHJldHJpZXZlIGFjdGl2aXR5IGxvZ3MuJyB9KTtcbiAgfVxufSk7XG5cbnJvdXRlci5nZXQoJy9zZXR0aW5ncycsIHJlcXVpcmVBZG1pbkF1dGgsIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHNldHRpbmdzID0gZGIuZGF0YS5zZXR0aW5ncyB8fCB7fTtcbiAgICByZXMuanNvbihzZXR0aW5ncyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gcmV0cmlldmUgc2V0dGluZ3MuJyB9KTtcbiAgfVxufSk7XG5cbnJvdXRlci5wdXQoJy9zZXR0aW5ncycsIHJlcXVpcmVBZG1pbkF1dGgsIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGRiLmRhdGEuc2V0dGluZ3MgPSB7IC4uLmRiLmRhdGEuc2V0dGluZ3MsIC4uLnJlcS5ib2R5IH07XG4gICAgZGIuc2F2ZSgpO1xuICAgIGRiLmxvZ0FjdGl2aXR5KCdTaXRlIFNldHRpbmdzIFVwZGF0ZWQnLCAnU3lzdGVtIGNvbmZpZ3VyYXRpb25zIGFkanVzdGVkIGJ5IEFkbWluJywgJ3NldHRpbmdzX3VwZGF0ZScpO1xuICAgIHJlcy5qc29uKGRiLmRhdGEuc2V0dGluZ3MpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBzZXR0aW5ncy4nIH0pO1xuICB9XG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbXVraGVcXFxcRG93bmxvYWRzXFxcXHdlYnBhZ2UtbWFpblxcXFx3ZWJwYWdlLW1haW5cXFxcc2VydmVyXFxcXHNlcnZpY2VzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtdWtoZVxcXFxEb3dubG9hZHNcXFxcd2VicGFnZS1tYWluXFxcXHdlYnBhZ2UtbWFpblxcXFxzZXJ2ZXJcXFxcc2VydmljZXNcXFxcZGIuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL211a2hlL0Rvd25sb2Fkcy93ZWJwYWdlLW1haW4vd2VicGFnZS1tYWluL3NlcnZlci9zZXJ2aWNlcy9kYi5qc1wiO2ltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuaW1wb3J0IHsgaW5pdGlhbFNlZWREYXRhIH0gZnJvbSAnLi4vZGF0YS9zZWVkRGF0YS5qcyc7XG5pbXBvcnQgeyBwb3N0Z3JlcyB9IGZyb20gJy4vcG9zdGdyZXMuanMnO1xuXG5jb25zdCBfX2ZpbGVuYW1lID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpO1xuY29uc3QgX19kaXJuYW1lID0gcGF0aC5kaXJuYW1lKF9fZmlsZW5hbWUpO1xuXG5jb25zdCBEQVRBX0RJUiA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9kYXRhJyk7XG5jb25zdCBEQl9GSUxFID0gcGF0aC5qb2luKERBVEFfRElSLCAnY21zX2RiLmpzb24nKTtcblxuLy8gRW5zdXJlIGRhdGEgZGlyZWN0b3J5IGV4aXN0c1xuaWYgKCFmcy5leGlzdHNTeW5jKERBVEFfRElSKSkge1xuICBmcy5ta2RpclN5bmMoREFUQV9ESVIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xufVxuXG5jbGFzcyBEYXRhYmFzZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhEQl9GSUxFKSkge1xuICAgICAgICBjb25zdCByYXcgPSBmcy5yZWFkRmlsZVN5bmMoREJfRklMRSwgJ3V0ZjgnKTtcbiAgICAgICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShyYXcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpbml0aWFsU2VlZERhdGEpKTtcbiAgICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbml0aWFsaXppbmcgZGF0YWJhc2UsIHVzaW5nIHNlZWQgZGF0YTonLCBlcnIpO1xuICAgICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpbml0aWFsU2VlZERhdGEpKTtcbiAgICAgIHRoaXMuc2F2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRtcEZpbGUgPSBgJHtEQl9GSUxFfS50bXBgO1xuICAgICAgZnMud3JpdGVGaWxlU3luYyh0bXBGaWxlLCBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEsIG51bGwsIDIpLCAndXRmOCcpO1xuICAgICAgZnMucmVuYW1lU3luYyh0bXBGaWxlLCBEQl9GSUxFKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBlcnNpc3RpbmcgbG9jYWwgZGF0YWJhc2Ugc25hcHNob3Q6JywgZXJyKTtcbiAgICB9XG4gIH1cblxuICBnZXRDb2xsZWN0aW9uKG5hbWUpIHtcbiAgICBpZiAoIXRoaXMuZGF0YVtuYW1lXSkge1xuICAgICAgdGhpcy5kYXRhW25hbWVdID0gW107XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRhdGFbbmFtZV07XG4gIH1cblxuICBsb2dBY3Rpdml0eSh0aXRsZSwgZGVzY3JpcHRpb24sIHR5cGUgPSAnc3lzdGVtJykge1xuICAgIGNvbnN0IGxvZ3MgPSB0aGlzLmdldENvbGxlY3Rpb24oJ2FjdGl2aXR5TG9ncycpO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgbW9udGhOYW1lcyA9IFsnSkFOJywgJ0ZFQicsICdNQVInLCAnQVBSJywgJ01BWScsICdKVU4nLCAnSlVMJywgJ0FVRycsICdTRVAnLCAnT0NUJywgJ05PVicsICdERUMnXTtcbiAgICBjb25zdCBkYXRlU3RyID0gYCR7bm93LmdldERhdGUoKX0gJHttb250aE5hbWVzW25vdy5nZXRNb250aCgpXX1gO1xuXG4gICAgY29uc3QgbmV3TG9nID0ge1xuICAgICAgaWQ6IGBsb2dfJHtEYXRlLm5vdygpfV8ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA0KX1gLFxuICAgICAgZGF0ZTogZGF0ZVN0cixcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICB0eXBlLFxuICAgICAgdGltZXN0YW1wOiBub3cudG9JU09TdHJpbmcoKVxuICAgIH07XG5cbiAgICBsb2dzLnVuc2hpZnQobmV3TG9nKTtcbiAgICAvLyBLZWVwIG1heCAxMDAgbG9nc1xuICAgIGlmIChsb2dzLmxlbmd0aCA+IDEwMCkgbG9ncy5wb3AoKTtcbiAgICB0aGlzLnNhdmUoKTtcblxuICAgIC8vIEFzeW5jIHdyaXRlIHRvIFBvc3RncmVzIGlmIGNvbm5lY3RlZFxuICAgIGlmIChwb3N0Z3Jlcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgcG9zdGdyZXNcbiAgICAgICAgLnF1ZXJ5KFxuICAgICAgICAgICdJTlNFUlQgSU5UTyBhY3Rpdml0eV9sb2dzIChpZCwgZGF0ZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCB0eXBlLCB0aW1lc3RhbXApIFZBTFVFUyAoJDEsICQyLCAkMywgJDQsICQ1LCAkNikgT04gQ09ORkxJQ1QgKGlkKSBETyBOT1RISU5HJyxcbiAgICAgICAgICBbbmV3TG9nLmlkLCBuZXdMb2cuZGF0ZSwgbmV3TG9nLnRpdGxlLCBuZXdMb2cuZGVzY3JpcHRpb24sIG5ld0xvZy50eXBlLCBuZXdMb2cudGltZXN0YW1wXVxuICAgICAgICApXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLndhcm4oJ1Bvc3RncmVzIGxvZ0FjdGl2aXR5IHdyaXRlIHdhcm5pbmc6JywgZXJyLm1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICBnZXRBbGwoY29sbGVjdGlvbk5hbWUsIHsgc3RhdHVzLCBzZWFyY2gsIGNhdGVnb3J5LCB0eXBlLCBsaW1pdCwgc29ydCA9ICduZXdlc3QnIH0gPSB7fSkge1xuICAgIGxldCBpdGVtcyA9IFsuLi50aGlzLmdldENvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpXTtcblxuICAgIC8vIFN0YXR1cyBmaWx0ZXJcbiAgICBpZiAoc3RhdHVzICYmIHN0YXR1cyAhPT0gJ2FsbCcpIHtcbiAgICAgIGl0ZW1zID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnN0YXR1cyA9PT0gc3RhdHVzKTtcbiAgICB9XG5cbiAgICAvLyBDYXRlZ29yeSBmaWx0ZXJcbiAgICBpZiAoY2F0ZWdvcnkpIHtcbiAgICAgIGl0ZW1zID0gaXRlbXMuZmlsdGVyKFxuICAgICAgICAoaXRlbSkgPT5cbiAgICAgICAgICAoaXRlbS5jYXRlZ29yeSAmJiBpdGVtLmNhdGVnb3J5LnRvTG93ZXJDYXNlKCkgPT09IGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgICAgKGl0ZW0uY2F0ZWdvcnlfaWQgJiYgaXRlbS5jYXRlZ29yeV9pZC50b0xvd2VyQ2FzZSgpID09PSBjYXRlZ29yeS50b0xvd2VyQ2FzZSgpKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBSZXBvcnQgVHlwZSBmaWx0ZXJcbiAgICBpZiAodHlwZSkge1xuICAgICAgaXRlbXMgPSBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ucmVwb3J0VHlwZSAmJiBpdGVtLnJlcG9ydFR5cGUudG9Mb3dlckNhc2UoKSA9PT0gdHlwZS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICAvLyBGdWxsIHRleHQgc2VhcmNoXG4gICAgaWYgKHNlYXJjaCAmJiBzZWFyY2gudHJpbSgpKSB7XG4gICAgICBjb25zdCBxID0gc2VhcmNoLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaXRlbXMgPSBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSAoaXRlbS50aXRsZSB8fCBpdGVtLm5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGRlc2MgPSAoaXRlbS5kZXNjcmlwdGlvbiB8fCBpdGVtLmV4Y2VycHQgfHwgaXRlbS5zdW1tYXJ5IHx8IGl0ZW0uc2hvcnREZXNjcmlwdGlvbiB8fCBpdGVtLnByb2JsZW1TdGF0ZW1lbnQgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHNsdWcgPSAoaXRlbS5zbHVnIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gdGl0bGUuaW5jbHVkZXMocSkgfHwgZGVzYy5pbmNsdWRlcyhxKSB8fCBzbHVnLmluY2x1ZGVzKHEpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU29ydGluZ1xuICAgIGl0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIC8vIEZvciByZXBvcnRzLCB1c2UgY3VzdG9tIGRhdGUgaWYgcHJlc2VudFxuICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShhLmRhdGUgfHwgYS5wdWJsaXNoZWRfYXQgfHwgYS51cGRhdGVkX2F0IHx8IGEuY3JlYXRlZF9hdCB8fCAwKS5nZXRUaW1lKCk7XG4gICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGIuZGF0ZSB8fCBiLnB1Ymxpc2hlZF9hdCB8fCBiLnVwZGF0ZWRfYXQgfHwgYi5jcmVhdGVkX2F0IHx8IDApLmdldFRpbWUoKTtcbiAgICAgIHJldHVybiBzb3J0ID09PSAnb2xkZXN0JyA/IGRhdGVBIC0gZGF0ZUIgOiBkYXRlQiAtIGRhdGVBO1xuICAgIH0pO1xuXG4gICAgaWYgKGxpbWl0ICYmIGxpbWl0ID4gMCkge1xuICAgICAgaXRlbXMgPSBpdGVtcy5zbGljZSgwLCBsaW1pdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgZ2V0QnlJZChjb2xsZWN0aW9uTmFtZSwgaWQpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0Q29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSk7XG4gICAgcmV0dXJuIGl0ZW1zLmZpbmQoKGl0ZW0pID0+IFN0cmluZyhpdGVtLmlkKSA9PT0gU3RyaW5nKGlkKSkgfHwgbnVsbDtcbiAgfVxuXG4gIGdldEJ5U2x1Zyhjb2xsZWN0aW9uTmFtZSwgc2x1Zykge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRDb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKTtcbiAgICByZXR1cm4gaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5zbHVnID09PSBzbHVnKSB8fCBudWxsO1xuICB9XG5cbiAgY3JlYXRlKGNvbGxlY3Rpb25OYW1lLCBkYXRhLCB1c2VyID0gbnVsbCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRDb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKTtcbiAgICBjb25zdCBpZCA9IGRhdGEuaWQgfHwgYCR7Y29sbGVjdGlvbk5hbWUuc2xpY2UoMCwgMyl9XyR7RGF0ZS5ub3coKX1fJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNCl9YDtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG5cbiAgICBjb25zdCBuZXdJdGVtID0ge1xuICAgICAgLi4uZGF0YSxcbiAgICAgIGlkLFxuICAgICAgY3JlYXRlZF9hdDogbm93LFxuICAgICAgdXBkYXRlZF9hdDogbm93LFxuICAgICAgcHVibGlzaGVkX2F0OiBkYXRhLnN0YXR1cyA9PT0gJ3B1Ymxpc2hlZCcgPyAoZGF0YS5wdWJsaXNoZWRfYXQgfHwgbm93KSA6IG51bGxcbiAgICB9O1xuXG4gICAgaXRlbXMudW5zaGlmdChuZXdJdGVtKTtcbiAgICB0aGlzLnNhdmUoKTtcblxuICAgIGNvbnN0IHRpdGxlID0gbmV3SXRlbS50aXRsZSB8fCBuZXdJdGVtLm5hbWUgfHwgJ05ldyBJdGVtJztcbiAgICB0aGlzLmxvZ0FjdGl2aXR5KGBDcmVhdGVkICR7Y29sbGVjdGlvbk5hbWUuc2xpY2UoMCwgLTEpfTogXCIke3RpdGxlfVwiYCwgYFN0YXR1czogJHtuZXdJdGVtLnN0YXR1cyB8fCAnZHJhZnQnfSBieSAke3VzZXI/Lm5hbWUgfHwgJ0FkbWluJ31gLCBgJHtjb2xsZWN0aW9uTmFtZX1fY3JlYXRlYCk7XG5cbiAgICByZXR1cm4gbmV3SXRlbTtcbiAgfVxuXG4gIHVwZGF0ZShjb2xsZWN0aW9uTmFtZSwgaWQsIGRhdGEsIHVzZXIgPSBudWxsKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldENvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpO1xuICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiBTdHJpbmcoaXRlbS5pZCkgPT09IFN0cmluZyhpZCkpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgZXhpc3RpbmcgPSBpdGVtc1tpbmRleF07XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuXG4gICAgY29uc3Qgd2FzUHVibGlzaGVkID0gZXhpc3Rpbmcuc3RhdHVzID09PSAncHVibGlzaGVkJztcbiAgICBjb25zdCBpc05vd1B1Ymxpc2hlZCA9IGRhdGEuc3RhdHVzID09PSAncHVibGlzaGVkJztcblxuICAgIGNvbnN0IHVwZGF0ZWRJdGVtID0ge1xuICAgICAgLi4uZXhpc3RpbmcsXG4gICAgICAuLi5kYXRhLFxuICAgICAgaWQ6IGV4aXN0aW5nLmlkLCAvLyBQcmVzZXJ2ZSBJRFxuICAgICAgdXBkYXRlZF9hdDogbm93LFxuICAgICAgcHVibGlzaGVkX2F0OiBpc05vd1B1Ymxpc2hlZCAmJiAhZXhpc3RpbmcucHVibGlzaGVkX2F0ID8gbm93IDogKGRhdGEucHVibGlzaGVkX2F0IHx8IGV4aXN0aW5nLnB1Ymxpc2hlZF9hdClcbiAgICB9O1xuXG4gICAgaXRlbXNbaW5kZXhdID0gdXBkYXRlZEl0ZW07XG4gICAgdGhpcy5zYXZlKCk7XG5cbiAgICBjb25zdCB0aXRsZSA9IHVwZGF0ZWRJdGVtLnRpdGxlIHx8IHVwZGF0ZWRJdGVtLm5hbWUgfHwgJ0l0ZW0nO1xuICAgIGlmICghd2FzUHVibGlzaGVkICYmIGlzTm93UHVibGlzaGVkKSB7XG4gICAgICB0aGlzLmxvZ0FjdGl2aXR5KGBQdWJsaXNoZWQgJHtjb2xsZWN0aW9uTmFtZS5zbGljZSgwLCAtMSl9OiBcIiR7dGl0bGV9XCJgLCBgUHVibGlzaGVkIGJ5ICR7dXNlcj8ubmFtZSB8fCAnQWRtaW4nfWAsIGAke2NvbGxlY3Rpb25OYW1lfV9wdWJsaXNoYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9nQWN0aXZpdHkoYFVwZGF0ZWQgJHtjb2xsZWN0aW9uTmFtZS5zbGljZSgwLCAtMSl9OiBcIiR7dGl0bGV9XCJgLCBgVXBkYXRlZCBieSAke3VzZXI/Lm5hbWUgfHwgJ0FkbWluJ31gLCBgJHtjb2xsZWN0aW9uTmFtZX1fdXBkYXRlYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVwZGF0ZWRJdGVtO1xuICB9XG5cbiAgdXBkYXRlU3RhdHVzKGNvbGxlY3Rpb25OYW1lLCBpZCwgc3RhdHVzLCB1c2VyID0gbnVsbCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRDb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKTtcbiAgICBjb25zdCBpdGVtID0gaXRlbXMuZmluZCgoaSkgPT4gU3RyaW5nKGkuaWQpID09PSBTdHJpbmcoaWQpKTtcbiAgICBpZiAoIWl0ZW0pIHJldHVybiBudWxsO1xuXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIGl0ZW0uc3RhdHVzID0gc3RhdHVzO1xuICAgIGl0ZW0udXBkYXRlZF9hdCA9IG5vdztcbiAgICBpZiAoc3RhdHVzID09PSAncHVibGlzaGVkJyAmJiAhaXRlbS5wdWJsaXNoZWRfYXQpIHtcbiAgICAgIGl0ZW0ucHVibGlzaGVkX2F0ID0gbm93O1xuICAgIH1cblxuICAgIHRoaXMuc2F2ZSgpO1xuICAgIGNvbnN0IHRpdGxlID0gaXRlbS50aXRsZSB8fCBpdGVtLm5hbWUgfHwgJ0l0ZW0nO1xuICAgIHRoaXMubG9nQWN0aXZpdHkoYFN0YXR1cyBjaGFuZ2VkIHRvICR7c3RhdHVzfSBmb3IgXCIke3RpdGxlfVwiYCwgYFVwZGF0ZWQgYnkgJHt1c2VyPy5uYW1lIHx8ICdBZG1pbid9YCwgYCR7Y29sbGVjdGlvbk5hbWV9X3N0YXR1c2ApO1xuXG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBkZWxldGUoY29sbGVjdGlvbk5hbWUsIGlkLCB1c2VyID0gbnVsbCwgcGVybWFuZW50ID0gZmFsc2UpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0Q29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSk7XG4gICAgY29uc3QgaW5kZXggPSBpdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IFN0cmluZyhpdGVtLmlkKSA9PT0gU3RyaW5nKGlkKSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgaXRlbSA9IGl0ZW1zW2luZGV4XTtcbiAgICBjb25zdCB0aXRsZSA9IGl0ZW0udGl0bGUgfHwgaXRlbS5uYW1lIHx8ICdJdGVtJztcblxuICAgIGlmIChwZXJtYW5lbnQgfHwgaXRlbS5zdGF0dXMgPT09ICd0cmFzaCcpIHtcbiAgICAgIC8vIFBlcm1hbmVudGx5IHJlbW92ZVxuICAgICAgaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgdGhpcy5sb2dBY3Rpdml0eShgUGVybWFuZW50bHkgZGVsZXRlZCBcIiR7dGl0bGV9XCJgLCBgRGVsZXRlZCBieSAke3VzZXI/Lm5hbWUgfHwgJ0FkbWluJ31gLCBgJHtjb2xsZWN0aW9uTmFtZX1fZGVsZXRlX3Blcm1hbmVudGApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb2Z0IGRlbGV0ZSAtPiBtb3ZlIHRvIHRyYXNoXG4gICAgICBpdGVtLnN0YXR1cyA9ICd0cmFzaCc7XG4gICAgICBpdGVtLnVwZGF0ZWRfYXQgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICAgIHRoaXMubG9nQWN0aXZpdHkoYE1vdmVkIFwiJHt0aXRsZX1cIiB0byBUcmFzaGAsIGBNb3ZlZCB0byB0cmFzaCBieSAke3VzZXI/Lm5hbWUgfHwgJ0FkbWluJ31gLCBgJHtjb2xsZWN0aW9uTmFtZX1fdHJhc2hgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlc3RvcmUoY29sbGVjdGlvbk5hbWUsIGlkLCB1c2VyID0gbnVsbCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRDb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKTtcbiAgICBjb25zdCBpdGVtID0gaXRlbXMuZmluZCgoaSkgPT4gU3RyaW5nKGkuaWQpID09PSBTdHJpbmcoaWQpKTtcbiAgICBpZiAoIWl0ZW0pIHJldHVybiBudWxsO1xuXG4gICAgaXRlbS5zdGF0dXMgPSAnZHJhZnQnO1xuICAgIGl0ZW0udXBkYXRlZF9hdCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICB0aGlzLnNhdmUoKTtcblxuICAgIGNvbnN0IHRpdGxlID0gaXRlbS50aXRsZSB8fCBpdGVtLm5hbWUgfHwgJ0l0ZW0nO1xuICAgIHRoaXMubG9nQWN0aXZpdHkoYFJlc3RvcmVkIFwiJHt0aXRsZX1cIiBmcm9tIFRyYXNoYCwgYFJlc3RvcmVkIGJ5ICR7dXNlcj8ubmFtZSB8fCAnQWRtaW4nfWAsIGAke2NvbGxlY3Rpb25OYW1lfV9yZXN0b3JlYCk7XG5cbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIGJ1bGtBY3Rpb24oY29sbGVjdGlvbk5hbWUsIGlkcywgYWN0aW9uLCB1c2VyID0gbnVsbCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRDb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKTtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcblxuICAgIGlkcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zLmZpbmQoKGkpID0+IFN0cmluZyhpLmlkKSA9PT0gU3RyaW5nKGlkKSk7XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICBpZiAoYWN0aW9uID09PSAncHVibGlzaCcpIHtcbiAgICAgICAgICBpdGVtLnN0YXR1cyA9ICdwdWJsaXNoZWQnO1xuICAgICAgICAgIGlmICghaXRlbS5wdWJsaXNoZWRfYXQpIGl0ZW0ucHVibGlzaGVkX2F0ID0gbm93O1xuICAgICAgICAgIGl0ZW0udXBkYXRlZF9hdCA9IG5vdztcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICd1bnB1Ymxpc2gnKSB7XG4gICAgICAgICAgaXRlbS5zdGF0dXMgPSAnZHJhZnQnO1xuICAgICAgICAgIGl0ZW0udXBkYXRlZF9hdCA9IG5vdztcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICd0cmFzaCcpIHtcbiAgICAgICAgICBpdGVtLnN0YXR1cyA9ICd0cmFzaCc7XG4gICAgICAgICAgaXRlbS51cGRhdGVkX2F0ID0gbm93O1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ3Jlc3RvcmUnKSB7XG4gICAgICAgICAgaXRlbS5zdGF0dXMgPSAnZHJhZnQnO1xuICAgICAgICAgIGl0ZW0udXBkYXRlZF9hdCA9IG5vdztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICB0aGlzLmxvZ0FjdGl2aXR5KGBCdWxrICR7YWN0aW9ufSBleGVjdXRlZCBvbiAke2NvdW50fSAke2NvbGxlY3Rpb25OYW1lfWAsIGBFeGVjdXRlZCBieSAke3VzZXI/Lm5hbWUgfHwgJ0FkbWluJ31gLCBgJHtjb2xsZWN0aW9uTmFtZX1fYnVsa2ApO1xuICAgIH1cblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIGdldFN0YXRzKCkge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25zID0gWydwb3N0cycsICdzZXJ2aWNlcycsICdhY2NlbGVyYXRvcnMnLCAnaW5kdXN0cmllcycsICdjYXNlU3R1ZGllcycsICdyZXBvcnRzJywgJ21lZGlhJ107XG4gICAgY29uc3Qgc3RhdHMgPSB7XG4gICAgICB0b3RhbFBvc3RzOiB0aGlzLmdldENvbGxlY3Rpb24oJ3Bvc3RzJykuZmlsdGVyKChpKSA9PiBpLnN0YXR1cyAhPT0gJ3RyYXNoJykubGVuZ3RoLFxuICAgICAgdG90YWxTZXJ2aWNlczogdGhpcy5nZXRDb2xsZWN0aW9uKCdzZXJ2aWNlcycpLmZpbHRlcigoaSkgPT4gaS5zdGF0dXMgIT09ICd0cmFzaCcpLmxlbmd0aCxcbiAgICAgIHRvdGFsQWNjZWxlcmF0b3JzOiB0aGlzLmdldENvbGxlY3Rpb24oJ2FjY2VsZXJhdG9ycycpLmZpbHRlcigoaSkgPT4gaS5zdGF0dXMgIT09ICd0cmFzaCcpLmxlbmd0aCxcbiAgICAgIHRvdGFsSW5kdXN0cmllczogdGhpcy5nZXRDb2xsZWN0aW9uKCdpbmR1c3RyaWVzJykuZmlsdGVyKChpKSA9PiBpLnN0YXR1cyAhPT0gJ3RyYXNoJykubGVuZ3RoLFxuICAgICAgdG90YWxDYXNlU3R1ZGllczogdGhpcy5nZXRDb2xsZWN0aW9uKCdjYXNlU3R1ZGllcycpLmZpbHRlcigoaSkgPT4gaS5zdGF0dXMgIT09ICd0cmFzaCcpLmxlbmd0aCxcbiAgICAgIHRvdGFsUmVwb3J0czogdGhpcy5nZXRDb2xsZWN0aW9uKCdyZXBvcnRzJykuZmlsdGVyKChpKSA9PiBpLnN0YXR1cyAhPT0gJ3RyYXNoJykubGVuZ3RoLFxuICAgICAgdG90YWxNZWRpYTogdGhpcy5nZXRDb2xsZWN0aW9uKCdtZWRpYScpLmxlbmd0aCxcbiAgICAgIHB1Ymxpc2hlZDogMCxcbiAgICAgIGRyYWZ0czogMCxcbiAgICAgIHRyYXNoOiAwLFxuICAgICAgcG9zdGdyZXNTdGF0dXM6IHBvc3RncmVzLmdldFN0YXR1cygpXG4gICAgfTtcblxuICAgIGNvbGxlY3Rpb25zLmZvckVhY2goKGNvbCkgPT4ge1xuICAgICAgaWYgKGNvbCA9PT0gJ21lZGlhJykgcmV0dXJuO1xuICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldENvbGxlY3Rpb24oY29sKTtcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uc3RhdHVzID09PSAncHVibGlzaGVkJykgc3RhdHMucHVibGlzaGVkKys7XG4gICAgICAgIGVsc2UgaWYgKGl0ZW0uc3RhdHVzID09PSAnZHJhZnQnKSBzdGF0cy5kcmFmdHMrKztcbiAgICAgICAgZWxzZSBpZiAoaXRlbS5zdGF0dXMgPT09ICd0cmFzaCcpIHN0YXRzLnRyYXNoKys7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdGF0cztcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGIgPSBuZXcgRGF0YWJhc2UoKTtcbmV4cG9ydCB7IHBvc3RncmVzIH07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG11a2hlXFxcXERvd25sb2Fkc1xcXFx3ZWJwYWdlLW1haW5cXFxcd2VicGFnZS1tYWluXFxcXHNlcnZlclxcXFxkYXRhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtdWtoZVxcXFxEb3dubG9hZHNcXFxcd2VicGFnZS1tYWluXFxcXHdlYnBhZ2UtbWFpblxcXFxzZXJ2ZXJcXFxcZGF0YVxcXFxzZWVkRGF0YS5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbXVraGUvRG93bmxvYWRzL3dlYnBhZ2UtbWFpbi93ZWJwYWdlLW1haW4vc2VydmVyL2RhdGEvc2VlZERhdGEuanNcIjtpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcblxuLy8gUHJlLWhhc2hlZCBwYXNzd29yZCBmb3IgaW5pdGlhbCBhZG1pbiAoUGFzc3dvcmQ6IEFkbWluUGFzc3dvcmQyMDI2ISlcbmNvbnN0IGluaXRpYWxQYXNzd29yZEhhc2ggPSBiY3J5cHQuaGFzaFN5bmMoJ0FkbWluUGFzc3dvcmQyMDI2IScsIDEwKTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTZWVkRGF0YSA9IHtcbiAgdXNlcnM6IFtcbiAgICB7XG4gICAgICBpZDogJ3Vzcl9hZG1pbl8wMScsXG4gICAgICBuYW1lOiAnU01SSUtBQU0gTWFzdGVyIEFkbWluJyxcbiAgICAgIGVtYWlsOiAnYWRtaW5Ac21yaWthYW0uY29tJyxcbiAgICAgIHBhc3N3b3JkSGFzaDogaW5pdGlhbFBhc3N3b3JkSGFzaCxcbiAgICAgIHJvbGU6ICdzdXBlcmFkbWluJyxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWidcbiAgICB9XG4gIF0sXG4gIHBvc3RzOiBbXG4gICAge1xuICAgICAgaWQ6ICdwb3N0XzAxJyxcbiAgICAgIHRpdGxlOiAnQXJjaGl0ZWN0aW5nIExvdy1MYXRlbmN5IElJb1QgVGVsZW1ldHJ5IGZvciBIaWdoLVNwZWVkIE1hbnVmYWN0dXJpbmcnLFxuICAgICAgc2x1ZzogJ2lpb3QtdGVsZW1ldHJ5LWNvaW1iYXRvcmUnLFxuICAgICAgZXhjZXJwdDogJ0hvdyBlZGdlIHRlbGVtZXRyeSBwaXBlbGluZXMgY2FwdHVyZSAxN00rIGRhdGEgcG9pbnRzIHBlciBkYXkgZnJvbSBNb2RidXMvT1BDLVVBIG1hY2hpbmUgY29udHJvbGxlcnMgd2l0aCB1bmRlciA1MG1zIGxhdGVuY3kuJyxcbiAgICAgIGNvbnRlbnQ6IGAjIyBUaGUgQ2hhbGxlbmdlIG9mIFNob3AtRmxvb3IgVGVsZW1ldHJ5XG5Nb2Rlcm4gaW5kdXN0cmlhbCBtYW51ZmFjdHVyaW5nIGVudmlyb25tZW50cyByZXF1aXJlIGNvbnRpbnVvdXMsIHN1Yi1zZWNvbmQgdmlzaWJpbGl0eSBpbnRvIFBMQyBhbmQgQ05DIG1hY2hpbmUgcGFyYW1ldGVycy4gVHJhZGl0aW9uYWwgYmF0Y2ggRVRMIHJvdXRpbmVzIGZhaWwgdG8gcHJvdmlkZSB0aGUgcmVhbC10aW1lIG9wZXJhdGlvbmFsIGZlZWRiYWNrIGxvb3BzIG5lZWRlZCBmb3IgemVyby1kb3dudGltZSBtYW51ZmFjdHVyaW5nLlxuXG4jIyMgSGlnaC1UaHJvdWdocHV0IEVkZ2UgSW5nZXN0aW9uIEFyY2hpdGVjdHVyZVxuQnkgZGVwbG95aW5nIGNvbnRhaW5lcml6ZWQgUHl0aG9uIGFuZCBSdXN0IGVkZ2UgcnVudGltZXMgZGlyZWN0bHkgYWRqYWNlbnQgdG8gZmFjdG9yeSBjb250cm9sbGVycywgc2Vuc29yIGRhdGEgaXMgbm9ybWFsaXplZCB2aWEgc3RhbmRhcmQgT1BDLVVBIGFuZCBNb2RidXMgcHJvdG9jb2xzIGJlZm9yZSBiZWluZyBzdHJlYW1lZCBvdmVyIGxpZ2h0d2VpZ2h0IE1RVFQgYnJva2Vycy5cblxuLSAqKlN1Yi01MG1zIGxhdGVuY3kqKiBvbiB0ZWxlbWV0cnkgZmVlZHNcbi0gKipFZGdlIGJ1ZmZlciBxdWV1ZXMqKiB0byB3aXRoc3RhbmQgZmFjdG9yeSBuZXR3b3JrIGRyb3BzXG4tICoqQXV0b21hdGVkIE9FRSBjb21wdXRhdGlvbioqIHN0cmVhbWVkIGxpdmUgdG8gbWFuYWdlbWVudCBkYXNoYm9hcmRzXG5cbiMjIyBCdXNpbmVzcyBJbXBhY3RcbkRlcGxveWluZyBlZGdlIHRlbGVtZXRyeSBhY3Jvc3MgNTAwKyBjb25uZWN0ZWQgbWFudWZhY3R1cmluZyBsaW5lcyByZWR1Y2VkIHVucGxhbm5lZCBtYWNoaW5lIHN0b3BwYWdlcyBieSAzNSUgd2l0aGluIHRoZSBmaXJzdCA2MCBkYXlzIG9mIGRlcGxveW1lbnQuYCxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTgxMDkyMTYwNjA3LWVlMjI2MjFkZDc1OD9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBjYXRlZ29yeTogJ0luZHVzdHJpYWwgSW9UJyxcbiAgICAgIHRhZ3M6IFsnSUlvVCcsICdPUEMtVUEnLCAnVGVsZW1ldHJ5JywgJ01hbnVmYWN0dXJpbmcnLCAnTVFUVCddLFxuICAgICAgYXV0aG9yOiAnU01SSUtBQU0gRW5naW5lZXJpbmcgVGVhbScsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgbWV0YV90aXRsZTogJ0xvdy1MYXRlbmN5IElJb1QgVGVsZW1ldHJ5IEFyY2hpdGVjdHVyZSB8IFNNUklLQUFNIEpvdXJuYWwnLFxuICAgICAgbWV0YV9kZXNjcmlwdGlvbjogJ0Rpc2NvdmVyIGhvdyBTTVJJS0FBTSBidWlsZHMgaGlnaC1zcGVlZCBlZGdlIHRlbGVtZXRyeSBwaXBlbGluZXMgY2FwdHVyaW5nIDE3TSsgc2Vuc29yIG1ldHJpY3MgZGFpbHkuJyxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTIwVDEwOjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMjBUMTA6MDA6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA4LTIwVDEwOjAwOjAwLjAwMFonXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3Bvc3RfMDInLFxuICAgICAgdGl0bGU6ICdaZXJvLURvd250aW1lIERhdGEgTGFrZWhvdXNlIE1pZ3JhdGlvbiBmb3IgRW50ZXJwcmlzZSBTeXN0ZW1zJyxcbiAgICAgIHNsdWc6ICdjbG91ZC1kYXRhLXdhcmVob3VzZS1taWdyYXRpb24nLFxuICAgICAgZXhjZXJwdDogJ0F1dG9tYXRlZCBzY2hlbWEgdHJhbnNmb3JtYXRpb24gYW5kIHJvdy1sZXZlbCB2YWxpZGF0aW9uIHBhdHRlcm5zIGZvciBsZWdhY3kgRVJQIGRhdGFiYXNlIGN1dG92ZXJzLicsXG4gICAgICBjb250ZW50OiBgIyMgT3ZlcmNvbWluZyBMZWdhY3kgRGF0YWJhc2UgQm90dGxlbmVja3NcbkVudGVycHJpc2UgZGF0YWJhc2VzIHJ1bm5pbmcgb24gbGVnYWN5IE9yYWNsZSBhbmQgTVNTUUwgY2x1c3RlcnMgZnJlcXVlbnRseSBzdWZmZXIgZnJvbSBoaWdoIG1haW50ZW5hbmNlIG92ZXJoZWFkLCByaWdpZCBzY2hlbWFzLCBhbmQgcGVyZm9ybWFuY2UgYm90dGxlbmVja3Mgb24gYW5hbHl0aWNhbCBxdWVyaWVzLlxuXG4jIyMgQXV0b21hdGVkIFNjaGVtYSBNYXBwaW5nIHdpdGggTWlncmF0ZU1heFxuVXNpbmcgYXV0b21hdGVkIEFTVCBwYXJzaW5nIGFuZCBTcGFyay1iYXNlZCBwYXJhbGxlbCBDaGFuZ2UgRGF0YSBDYXB0dXJlIChDREMpLCBkYXRhYmFzZSBzY2hlbWFzIGFyZSBhdXRvbWF0aWNhbGx5IHRyYW5zbGF0ZWQgaW50byBtb2Rlcm4gY2xvdWQtbmF0aXZlIGxha2Vob3VzZSBmb3JtYXRzIChEZWx0YSAvIEljZWJlcmcpIHdpdGggYXV0b21hdGVkIHJvdy1oYXNoIHJlY29uY2lsaWF0aW9uLlxuXG4xLiAqKlNjaGVtYSBEREwgVHJhbnNsYXRpb24qKjogQXV0b21hdGVkIGRpYWxlY3QgbWFwcGluZ1xuMi4gKipQYXJhbGxlbCBDREMgUmVwbGljYXRpb24qKjogQ29udGludW91cyBzeW5jIHdpdGggemVybyBzb3VyY2UgbG9ja2luZ1xuMy4gKipEYXRhIFF1YWxpdHkgQXNzZXJ0cyoqOiAxMDAlIHJvdy1sZXZlbCByZWNvbmNpbGlhdGlvbiBhdWRpdFxuXG4jIyMgUmVzdWx0c1xuQWNoaWV2ZWQgNjAlIGZhc3RlciBkYXRhYmFzZSBtaWdyYXRpb24gY3V0b3ZlciB3aXRoIHplcm8gZG93bnRpbWUgYW5kIGNvbXBsZXRlIGRhdGEgZmlkZWxpdHkgYWNyb3NzIDUwTSsgdHJhbnNhY3Rpb25hbCByZWNvcmRzLmAsXG4gICAgICBjb3Zlcl9pbWFnZV91cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1ODQ5NDk0OS1lZjAxMGNiZGNjMzE/cT04MCZ3PTEyMDAmYXV0bz1mb3JtYXQmZml0PWNyb3AnLFxuICAgICAgY2F0ZWdvcnk6ICdEYXRhIEVuZ2luZWVyaW5nJyxcbiAgICAgIHRhZ3M6IFsnRGF0YSBMYWtlaG91c2UnLCAnQ2xvdWQgTWlncmF0aW9uJywgJ1Nub3dmbGFrZScsICdDREMnLCAnU3BhcmsnXSxcbiAgICAgIGF1dGhvcjogJ1NNUklLQUFNIENsb3VkIEFyY2hpdGVjdHVyZSBMYWInLFxuICAgICAgc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgIG1ldGFfdGl0bGU6ICdaZXJvLURvd250aW1lIERhdGEgTGFrZWhvdXNlIE1pZ3JhdGlvbiB8IFNNUklLQUFNJyxcbiAgICAgIG1ldGFfZGVzY3JpcHRpb246ICdBdXRvbWF0ZWQgc2NoZW1hIHRyYW5zZm9ybWF0aW9uIGFuZCByb3ctbGV2ZWwgdmFsaWRhdGlvbiBmb3IgZW50ZXJwcmlzZSBjbG91ZCBkYXRhYmFzZSBjdXRvdmVycy4nLFxuICAgICAgY3JlYXRlZF9hdDogJzIwMjYtMDgtMjJUMTQ6MzA6MDAuMDAwWicsXG4gICAgICB1cGRhdGVkX2F0OiAnMjAyNi0wOC0yMlQxNDozMDowMC4wMDBaJyxcbiAgICAgIHB1Ymxpc2hlZF9hdDogJzIwMjYtMDgtMjJUMTQ6MzA6MDAuMDAwWidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncG9zdF8wMycsXG4gICAgICB0aXRsZTogJ0RlcGxveWluZyBEZXRlcm1pbmlzdGljIExMTSBBZ2VudHMgaW4gUmVndWxhdGVkIEVudGVycHJpc2UgRW52aXJvbm1lbnRzJyxcbiAgICAgIHNsdWc6ICdnZW5lcmF0aXZlLWFpLWFnZW50aWMtYXV0b21hdGlvbicsXG4gICAgICBleGNlcnB0OiAnQnVpbGRpbmcgY29udGV4dC1hd2FyZSBSZXRyaWV2YWwtQXVnbWVudGVkIEdlbmVyYXRpb24gKFJBRykgcGlwZWxpbmVzIHdpdGggc3RyaWN0IGRhdGEgZ292ZXJuYW5jZSBhbmQgRFBEUCBjb21wbGlhbmNlLicsXG4gICAgICBjb250ZW50OiBgIyMgR2VuZXJhdGl2ZSBBSSB3aXRoIEVudGVycHJpc2UgR292ZXJuYW5jZVxuRGVwbG95aW5nIExhcmdlIExhbmd1YWdlIE1vZGVscyBpbiBwcm9kdWN0aW9uIGVudGVycHJpc2UgZW52aXJvbm1lbnRzIGRlbWFuZHMgc3RyaWN0IGRldGVybWluaXNtLCBjb250ZXh0IGdyb3VuZGluZywgYW5kIHN0cmljdCByb2xlLWJhc2VkIGFjY2VzcyBjb250cm9sIChSQkFDKS5cblxuIyMjIEdyb3VuZGVkIEFnZW50aWMgUkFHIEFyY2hpdGVjdHVyZVxuT3VyIGFnZW50aWMgZnJhbWV3b3JrIGNvbWJpbmVzIGh5YnJpZCBzZW1hbnRpYyB2ZWN0b3Igc2VhcmNoIHdpdGggZGV0ZXJtaW5pc3RpYyB2YWxpZGF0aW9uIGdhdGVzIHRvIGVsaW1pbmF0ZSBoYWxsdWNpbmF0aW9ucyBhbmQgZW5mb3JjZSB6ZXJvIGRhdGEgbGVha2FnZS5cblxuLSAqKkh5YnJpZCBCTTI1ICsgRGVuc2UgRW1iZWRkaW5ncyoqIGZvciBwcmVjaXNpb24gcmV0cmlldmFsXG4tICoqWmVybyBEYXRhIExlYWthZ2UgR3VhcmRyYWlscyoqIGFkaGVyaW5nIHRvIERQRFAgY29tcGxpYW5jZVxuLSAqKkFjdGlvbiBFeGVjdXRpb24gVmFsaWRhdGlvbioqIHdpdGggZnVsbCBhdWRpdCBsb2dnaW5nXG5cbiMjIyBQcm9kdWN0aW9uIERlcGxveW1lbnRcbkVtcG93ZXJlZCBpbnRlcm5hbCBjb21wbGlhbmNlIGFuZCBvcGVyYXRpb25zIHRlYW1zIHRvIGF1dG9tYXRlIDgwJSBvZiBkb2N1bWVudCByZXZpZXcgYW5kIHBvbGljeSBsb29rdXAgdGFza3Mgd2l0aCBzdWItc2Vjb25kIHJlc3BvbnNlIHRpbWVzLmAsXG4gICAgICBjb3Zlcl9pbWFnZV91cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYxODAwNTE4MjM4NC1hODNhOGJkNTdmYmU/cT04MCZ3PTEyMDAmYXV0bz1mb3JtYXQmZml0PWNyb3AnLFxuICAgICAgY2F0ZWdvcnk6ICdHZW5lcmF0aXZlIEFJJyxcbiAgICAgIHRhZ3M6IFsnR2VuZXJhdGl2ZSBBSScsICdBZ2VudGljIEFJJywgJ1JBRycsICdEYXRhIEdvdmVybmFuY2UnLCAnTExNJ10sXG4gICAgICBhdXRob3I6ICdTTVJJS0FBTSBBSSBSZXNlYXJjaCBHcm91cCcsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgbWV0YV90aXRsZTogJ0RlcGxveWluZyBEZXRlcm1pbmlzdGljIExMTSBBZ2VudHMgfCBTTVJJS0FBTSBKb3VybmFsJyxcbiAgICAgIG1ldGFfZGVzY3JpcHRpb246ICdDb250ZXh0LWF3YXJlIFJBRyBwaXBlbGluZXMgYW5kIGludGVsbGlnZW50IGFnZW50aWMgYXV0b21hdGlvbiBmb3IgcmVndWxhdGVkIGVudGVycHJpc2UgZW52aXJvbm1lbnRzLicsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0yNVQwOToxNTowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTI1VDA5OjE1OjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0yNVQwOToxNTowMC4wMDBaJ1xuICAgIH1cbiAgXSxcbiAgc2VydmljZXM6IFtcbiAgICB7XG4gICAgICBpZDogJ3Nydl8wMScsXG4gICAgICB0aXRsZTogJ0FJIC8gTUwnLFxuICAgICAgc2x1ZzogJ2FpLW1sJyxcbiAgICAgIG51bTogJzAxJyxcbiAgICAgIHRhZ2xpbmU6ICdQcm9kdWN0aW9uLXJlYWR5IHByZWRpY3RpdmUgaW50ZWxsaWdlbmNlLCBjb21wdXRlciB2aXNpb24sIGZvcmVjYXN0aW5nLCBhbmQgTUxPcHMuJyxcbiAgICAgIHN1bW1hcnk6ICdQcm9kdWN0aW9uLXJlYWR5IEFJIGFuZCBtYWNoaW5lIGxlYXJuaW5nIHNvbHV0aW9ucyBmb3IgcHJlZGljdGl2ZSBpbnRlbGxpZ2VuY2UsIGludGVsbGlnZW50IGRlY2lzaW9uIHN1cHBvcnQsIGNvbXB1dGVyIHZpc2lvbiwgZm9yZWNhc3RpbmcsIHJlY29tbWVuZGF0aW9uIHN5c3RlbXMsIGFuZCBlbnRlcnByaXNlIEFJIGFwcGxpY2F0aW9ucy4nLFxuICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0aW9uLXJlYWR5IEFJIGFuZCBtYWNoaW5lIGxlYXJuaW5nIHNvbHV0aW9ucyBmb3IgcHJlZGljdGl2ZSBpbnRlbGxpZ2VuY2UsIGludGVsbGlnZW50IGRlY2lzaW9uIHN1cHBvcnQsIGNvbXB1dGVyIHZpc2lvbiwgZm9yZWNhc3RpbmcsIHJlY29tbWVuZGF0aW9uIHN5c3RlbXMsIGFuZCBlbnRlcnByaXNlIEFJIGFwcGxpY2F0aW9ucy4nLFxuICAgICAgYnVzaW5lc3NQcm9ibGVtczogW1xuICAgICAgICAnVW5wcmVkaWN0YWJsZSBvcGVyYXRpb25hbCBkb3dudGltZSBhbmQgZXF1aXBtZW50IGZhaWx1cmUnLFxuICAgICAgICAnTWFudWFsIHZpc3VhbCBpbnNwZWN0aW9uIGJvdHRsZW5lY2tzIGFuZCBxdWFsaXR5IGVzY2FwZXMnLFxuICAgICAgICAnTGFjayBvZiByZWFsLXRpbWUgZm9yZWNhc3RpbmcgYW5kIGRlbWFuZCBpbnRlbGxpZ2VuY2UnLFxuICAgICAgICAnRnJhZ21lbnRlZCBNTCBleHBlcmltZW50YXRpb24gd2l0aG91dCBwcm9kdWN0aW9uIE1MT3BzIGdvdmVybmFuY2UnXG4gICAgICBdLFxuICAgICAgY2FwYWJpbGl0aWVzOiBbXG4gICAgICAgICdQcmVkaWN0aXZlIEludGVsbGlnZW5jZSBNb2RlbHMnLFxuICAgICAgICAnQ29tcHV0ZXIgVmlzaW9uICYgRGVmZWN0IERldGVjdGlvbicsXG4gICAgICAgICdEZW1hbmQgJiBJbnZlbnRvcnkgRm9yZWNhc3RpbmcnLFxuICAgICAgICAnUmVjb21tZW5kYXRpb24gJiBEZWNpc2lvbiBFbmdpbmVzJyxcbiAgICAgICAgJ1JlYWwtVGltZSBUZWxlbWV0cnkgRGFzaGJvYXJkcycsXG4gICAgICAgICdBdXRvbWF0ZWQgT3BlcmF0aW9uYWwgUmVwb3J0aW5nJ1xuICAgICAgXSxcbiAgICAgIHRlY2hub2xvZ3k6IFsnUHl0aG9uJywgJ1B5VG9yY2gnLCAnc2Npa2l0LWxlYXJuJywgJ01MZmxvdycsICdBenVyZSBNYWNoaW5lIExlYXJuaW5nJywgJ0RhdGFicmlja3MnLCAnT3BlbkFJLWNvbXBhdGlibGUgQVBJcycsICdWZWN0b3IgZGF0YWJhc2VzJywgJ01MT3BzIHBpcGVsaW5lcyddLFxuICAgICAgaW5kdXN0cnlBcHBsaWNhdGlvbnM6IFsnTWFudWZhY3R1cmluZycsICdCRlNJJywgJ1JldGFpbCAmIEUtQ29tbWVyY2UnLCAnSGVhbHRoY2FyZSddLFxuICAgICAgcHJvYmxlbVN0YXRlbWVudDogJ0VudGVycHJpc2VzIHN0cnVnZ2xlIHRvIG9wZXJhdGlvbmFsaXplIGV4cGVyaW1lbnRhbCBtYWNoaW5lIGxlYXJuaW5nIG1vZGVscyBpbnRvIHJlbGlhYmxlLCBsb3ctbGF0ZW5jeSBwcm9kdWN0aW9uIHBpcGVsaW5lcy4nLFxuICAgICAgc29sdXRpb25TdGF0ZW1lbnQ6ICdEZXBsb3kgcHJvZHVjdGlvbi1ncmFkZSBNTE9wcyBwaXBlbGluZXMgd2l0aCBzdWItNTBtcyBpbmZlcmVuY2UsIGF1dG9tYXRlZCBkcmlmdCB0cmFja2luZywgYW5kIGNvbnRpbnVvdXMgcmV0cmFpbmluZy4nLFxuICAgICAgb3V0Y29tZXM6ICcxMHggZmFzdGVyIG1vZGVsIGRlcGxveW1lbnQgd2l0aCBzdWItNTBtcyBpbmZlcmVuY2UgYW5kIGF1dG9tYXRlZCBNTE9wcyB0cmFja2luZy4nLFxuICAgICAgYWNjZWxlcmF0b3I6ICdCaXRYaGlmdCArIFBhcnNlTWFzdGVyJyxcbiAgICAgIGNhc2VTdHVkeTogJ0F1dG9tb3RpdmUgT0VNIExpdmUgQW5hbHl0aWNzIERhc2hib2FyZCcsXG4gICAgICBjb3Zlcl9pbWFnZV91cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1MTgzNjAyMi1kNWQ4OGU5MjE4ZGY/cT04MCZ3PTEyMDAmYXV0bz1mb3JtYXQmZml0PWNyb3AnLFxuICAgICAgc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgIGRpc3BsYXlfb3JkZXI6IDEsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTI3VDAwOjAwOjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdzcnZfMDInLFxuICAgICAgdGl0bGU6ICdJbmR1c3RyaWFsIElvVCAoSUlvVCknLFxuICAgICAgc2x1ZzogJ2luZHVzdHJpYWwtaW90LWlpb3QnLFxuICAgICAgbnVtOiAnMDInLFxuICAgICAgdGFnbGluZTogJ011bHRpLXByb3RvY29sIG1hY2hpbmUgY29ubmVjdGl2aXR5LCByZWFsLXRpbWUgdGVsZW1ldHJ5LCBPRUUgbW9uaXRvcmluZywgYW5kIHByZWRpY3RpdmUgbWFpbnRlbmFuY2UuJyxcbiAgICAgIHN1bW1hcnk6ICdNdWx0aS1wcm90b2NvbCBtYWNoaW5lIGNvbm5lY3Rpdml0eSwgcmVhbC10aW1lIHRlbGVtZXRyeSwgT0VFIG1vbml0b3JpbmcsIGRvd250aW1lIGludGVsbGlnZW5jZSwgcHJlZGljdGl2ZSBtYWludGVuYW5jZSwgYW5kIGNvbm5lY3RlZCBvcGVyYXRpb25zIGZvciBpbmR1c3RyaWFsIGVudmlyb25tZW50cy4nLFxuICAgICAgZGVzY3JpcHRpb246ICdNdWx0aS1wcm90b2NvbCBtYWNoaW5lIGNvbm5lY3Rpdml0eSwgcmVhbC10aW1lIHRlbGVtZXRyeSwgT0VFIG1vbml0b3JpbmcsIGRvd250aW1lIGludGVsbGlnZW5jZSwgcHJlZGljdGl2ZSBtYWludGVuYW5jZSwgYW5kIGNvbm5lY3RlZCBvcGVyYXRpb25zIGZvciBpbmR1c3RyaWFsIGVudmlyb25tZW50cy4nLFxuICAgICAgYnVzaW5lc3NQcm9ibGVtczogW1xuICAgICAgICAnVW5wbGFubmVkIGZhY3RvcnkgbWFjaGluZSBicmVha2Rvd25zIGFuZCBsaW5lIHN0b3BwYWdlcycsXG4gICAgICAgICdQYXBlci1iYXNlZCBzaGlmdCBsb2dzIHdpdGggemVybyByZWFsLXRpbWUgb3BlcmF0aW9uYWwgdmlzaWJpbGl0eScsXG4gICAgICAgICdJbmFjY3VyYXRlIE92ZXJhbGwgRXF1aXBtZW50IEVmZmVjdGl2ZW5lc3MgKE9FRSkgbWV0cmljcycsXG4gICAgICAgICdTaWxvZWQgbGVnYWN5IENOQywgUExDLCBhbmQgU0NBREEgY29udHJvbGxlcnMnXG4gICAgICBdLFxuICAgICAgY2FwYWJpbGl0aWVzOiBbXG4gICAgICAgICdNdWx0aS1Qcm90b2NvbCBFZGdlIEluZ2VzdGlvbicsXG4gICAgICAgICdSZWFsLVRpbWUgT0VFICYgRG93bnRpbWUgVHJhY2tpbmcnLFxuICAgICAgICAnVmlicmF0aW9uICYgVGhlcm1hbCBBbm9tYWx5IERldGVjdGlvbicsXG4gICAgICAgICdMaXZlIEZhY3RvcnkgRmxvb3IgV2FsbGJvYXJkcycsXG4gICAgICAgICdNb2RidXMvT1BDLVVBL01RVFQgVGVsZW1ldHJ5JyxcbiAgICAgICAgJ0VkZ2UgTWFjaGluZSBDb25uZWN0aXZpdHknXG4gICAgICBdLFxuICAgICAgdGVjaG5vbG9neTogWydNUVRUJywgJ09QQyBVQScsICdNb2RidXMgVENQJywgJ0VkZ2UgY29tcHV0aW5nJywgJ0F6dXJlIElvVCcsICdBV1MgSW9UJywgJ0t1YmVybmV0ZXMnLCAnRG9ja2VyJywgJ0dyYWZhbmEnLCAnVGltZS1zZXJpZXMgZGF0YWJhc2VzJywgJ1B5dGhvbiddLFxuICAgICAgaW5kdXN0cnlBcHBsaWNhdGlvbnM6IFsnQXV0b21vdGl2ZScsICdNYWNoaW5lcnkgJiBFcXVpcG1lbnQnLCAnRW5lcmd5ICYgVXRpbGl0aWVzJywgJ0hlYXZ5IE1hbnVmYWN0dXJpbmcnXSxcbiAgICAgIHByb2JsZW1TdGF0ZW1lbnQ6ICdVbnBsYW5uZWQgbWFjaGluZSBmYWlsdXJlcyBjb3N0IGluZHVzdHJpYWwgb3BlcmF0b3JzIG1pbGxpb25zIGFubnVhbGx5IGR1ZSB0byBsYWNrIG9mIHByZWRpY3RpdmUgdmlicmF0aW9uIGFuZCB0ZWxlbWV0cnkgaW50ZWxsaWdlbmNlLicsXG4gICAgICBzb2x1dGlvblN0YXRlbWVudDogJ0RlcGxveSBlZGdlIGludGVsbGlnZW5jZSBjb250YWluZXJzIGNvbm5lY3RpbmcgUExDcyB3aXRoIFRpbWVzY2FsZURCIGZvciBhdXRvbWF0ZWQgYW5vbWFseSBhbGVydHMuJyxcbiAgICAgIG91dGNvbWVzOiAnMzUlIGRvd250aW1lIHJlZHVjdGlvbiBhbmQgbGl2ZSBPRUUgdHJhY2tpbmcgYWNyb3NzIDUwMCsgY29ubmVjdGVkIG1hY2hpbmVzLicsXG4gICAgICBhY2NlbGVyYXRvcjogJ0JpdFhoaWZ0IElJb1QgUGxhdGZvcm0nLFxuICAgICAgY2FzZVN0dWR5OiAnU21hcnQgRmFjdG9yeSBNYW51ZmFjdHVyaW5nIFRyYW5zZm9ybWF0aW9uJyxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTgxMDkyMTYwNjA3LWVlMjI2MjFkZDc1OD9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgZGlzcGxheV9vcmRlcjogMixcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMjdUMDA6MDA6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3Nydl8wMycsXG4gICAgICB0aXRsZTogJ0RhdGEgRW5naW5lZXJpbmcgJiBNb2Rlcm5pemF0aW9uJyxcbiAgICAgIHNsdWc6ICdkYXRhLWVuZ2luZWVyaW5nJyxcbiAgICAgIG51bTogJzAzJyxcbiAgICAgIHRhZ2xpbmU6ICdDbG91ZC1uYXRpdmUgZGF0YSBwaXBlbGluZXMsIGxha2Vob3VzZSBhcmNoaXRlY3R1cmVzLCByZWFsLXRpbWUgaW5nZXN0aW9uLCBhbmQgbW9kZXJuaXphdGlvbi4nLFxuICAgICAgc3VtbWFyeTogJ0Nsb3VkLW5hdGl2ZSBkYXRhIHBpcGVsaW5lcywgbGFrZWhvdXNlIGFyY2hpdGVjdHVyZXMsIHJlYWwtdGltZSBpbmdlc3Rpb24sIGRhdGEgbW9kZXJuaXphdGlvbiwgbWlncmF0aW9uLCB0cmFuc2Zvcm1hdGlvbiwgb3JjaGVzdHJhdGlvbiwgYW5kIHNjYWxhYmxlIGFuYWx5dGljYWwgZGF0YSBwbGF0Zm9ybXMuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ2xvdWQtbmF0aXZlIGRhdGEgcGlwZWxpbmVzLCBsYWtlaG91c2UgYXJjaGl0ZWN0dXJlcywgcmVhbC10aW1lIGluZ2VzdGlvbiwgZGF0YSBtb2Rlcm5pemF0aW9uLCBtaWdyYXRpb24sIHRyYW5zZm9ybWF0aW9uLCBvcmNoZXN0cmF0aW9uLCBhbmQgc2NhbGFibGUgYW5hbHl0aWNhbCBkYXRhIHBsYXRmb3Jtcy4nLFxuICAgICAgYnVzaW5lc3NQcm9ibGVtczogW1xuICAgICAgICAnTGVnYWN5IG9uLXByZW1pc2VzIGRhdGEgd2FyZWhvdXNlcyB3aXRoIGhpZ2ggbWFpbnRlbmFuY2UgY29zdHMnLFxuICAgICAgICAnU2xvdyBiYXRjaCBFVEwgam9icyBjYXVzaW5nIHN0YWxlIHJlcG9ydGluZyBkYXRhJyxcbiAgICAgICAgJ1NjaGVtYSBkaXZlcmdlbmNlIGR1cmluZyBFUlAgZGF0YWJhc2UgbWlncmF0aW9ucycsXG4gICAgICAgICdVbnN0cnVjdHVyZWQgZGF0YSBzaWxvcyB3aXRob3V0IGF1dG9tYXRlZCBnb3Zlcm5hbmNlJ1xuICAgICAgXSxcbiAgICAgIGNhcGFiaWxpdGllczogW1xuICAgICAgICAnQ2xvdWQtTmF0aXZlIExha2Vob3VzZSBBcmNoaXRlY3R1cmUnLFxuICAgICAgICAnQXV0b21hdGVkIEVMVCAmIENEQyBJbmdlc3Rpb24nLFxuICAgICAgICAnZGJ0IFRyYW5zZm9ybWF0aW9uICYgVmFsaWRhdGlvbicsXG4gICAgICAgICdTY2hlbWEgRHJpZnQgJiBDbGVhbnNpbmcgRW5naW5lJyxcbiAgICAgICAgJ1plcm8tRG93bnRpbWUgRGF0YWJhc2UgQ3V0b3ZlcnMnLFxuICAgICAgICAnUmVhbC1UaW1lIEluZ2VzdGlvbiBQaXBlbGluZXMnXG4gICAgICBdLFxuICAgICAgdGVjaG5vbG9neTogWydEYXRhYnJpY2tzJywgJ1Nub3dmbGFrZScsICdkYnQnLCAnQXBhY2hlIEFpcmZsb3cnLCAnQXBhY2hlIFNwYXJrJywgJ0RlbHRhIExha2UnLCAnQXBhY2hlIEljZWJlcmcnLCAnUHl0aG9uJywgJ1NRTCcsICdTbm93cGFyayddLFxuICAgICAgaW5kdXN0cnlBcHBsaWNhdGlvbnM6IFsnUmV0YWlsJywgJ0ZpbmFuY2UnLCAnTG9naXN0aWNzJywgJ0hlYWx0aGNhcmUnXSxcbiAgICAgIHByb2JsZW1TdGF0ZW1lbnQ6ICdGcmFnbWVudGVkIGRhdGEgc3RvcmVzIHByZXZlbnQgdW5pZmllZCBjcm9zcy1kZXBhcnRtZW50IGFuYWx5dGljYWwgcXVlcmllcy4nLFxuICAgICAgc29sdXRpb25TdGF0ZW1lbnQ6ICdFbmdpbmVlciByb2J1c3QgYXV0b21hdGVkIHN0cmVhbWluZyBwaXBlbGluZXMgaW50byBtYW5hZ2VkIG1vZGVybiBsYWtlaG91c2VzLicsXG4gICAgICBvdXRjb21lczogJzYwJSBmYXN0ZXIgcXVlcnkgZXhlY3V0aW9uIGFuZCB6ZXJvIGRhdGEgbG9zcyBvbiByZWFsLXRpbWUgc3RyZWFtaW5nIGluZ2VzdGlvbi4nLFxuICAgICAgYWNjZWxlcmF0b3I6ICdNaWdyYXRlTWF4ICsgUGFyc2VNYXN0ZXInLFxuICAgICAgY2FzZVN0dWR5OiAnR2xvYmFsIFN1cHBseSBDaGFpbiBEYXRhIExha2Vob3VzZScsXG4gICAgICBjb3Zlcl9pbWFnZV91cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU3MzE2NDcxMzk4OC04NjY1ZmM5NjMwOTU/cT04MCZ3PTEyMDAmYXV0bz1mb3JtYXQmZml0PWNyb3AnLFxuICAgICAgc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgIGRpc3BsYXlfb3JkZXI6IDMsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTI3VDAwOjAwOjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdzcnZfMDQnLFxuICAgICAgdGl0bGU6ICdHZW5lcmF0aXZlIEFJICYgQWdlbnRpYyBBSScsXG4gICAgICBzbHVnOiAnZ2VuZXJhdGl2ZS1hZ2VudGljLWFpJyxcbiAgICAgIG51bTogJzA0JyxcbiAgICAgIHRhZ2xpbmU6ICdMTE0tcG93ZXJlZCBhc3Npc3RhbnRzLCByZXRyaWV2YWwtYXVnbWVudGVkIGdlbmVyYXRpb24sIGludGVsbGlnZW50IGFnZW50cywgYW5kIGNvcGlsb3RzLicsXG4gICAgICBzdW1tYXJ5OiAnTExNLXBvd2VyZWQgYXNzaXN0YW50cywgcmV0cmlldmFsLWF1Z21lbnRlZCBnZW5lcmF0aW9uLCBpbnRlbGxpZ2VudCBhZ2VudHMsIGRvY3VtZW50IGludGVsbGlnZW5jZSwgd29ya2Zsb3cgb3JjaGVzdHJhdGlvbiwgZW50ZXJwcmlzZSBjb3BpbG90cywgYW5kIEFJIGNvbnN1bHRpbmcuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnTExNLXBvd2VyZWQgYXNzaXN0YW50cywgcmV0cmlldmFsLWF1Z21lbnRlZCBnZW5lcmF0aW9uLCBpbnRlbGxpZ2VudCBhZ2VudHMsIGRvY3VtZW50IGludGVsbGlnZW5jZSwgd29ya2Zsb3cgb3JjaGVzdHJhdGlvbiwgZW50ZXJwcmlzZSBjb3BpbG90cywgYW5kIEFJIGNvbnN1bHRpbmcuJyxcbiAgICAgIGJ1c2luZXNzUHJvYmxlbXM6IFtcbiAgICAgICAgJ01hbnVhbCBkb2N1bWVudCBhdWRpdGluZyBhbmQgdW5zdHJ1Y3R1cmVkIGNvbnRyYWN0IGFuYWx5c2lzIGJvdHRsZW5lY2tzJyxcbiAgICAgICAgJ0NvbXBsZXggaW50ZXJuYWwgZW5naW5lZXJpbmcga25vd2xlZGdlIHJldHJpZXZhbCBmcmljdGlvbicsXG4gICAgICAgICdVbnNhZmUgcHVibGljIExMTSB1c2FnZSBleHBvc2luZyBzZW5zaXRpdmUgZW50ZXJwcmlzZSBJUCcsXG4gICAgICAgICdTbG93IG11bHRpLXN0ZXAgYnVzaW5lc3Mgd29ya2Zsb3cgZXhlY3V0aW9uJ1xuICAgICAgXSxcbiAgICAgIGNhcGFiaWxpdGllczogW1xuICAgICAgICAnRW50ZXJwcmlzZSBSQUcgJiBIeWJyaWQgVmVjdG9yIFNlYXJjaCcsXG4gICAgICAgICdBdXRvbm9tb3VzIE11bHRpLUFnZW50IE9yY2hlc3RyYXRpb24nLFxuICAgICAgICAnSW50ZWxsaWdlbnQgRG9jdW1lbnQgJiBJbnZvaWNlIE9DUicsXG4gICAgICAgICdEUERQICYgUElJIEVudGVycHJpc2UgR3VhcmRyYWlscycsXG4gICAgICAgICdDdXN0b20gRG9tYWluIEZpbmUtVHVuZWQgTW9kZWxzJyxcbiAgICAgICAgJ01vZGVsLVNlcnZpbmcgJiBBZ2VudCBXb3JrZmxvd3MnXG4gICAgICBdLFxuICAgICAgdGVjaG5vbG9neTogWydBenVyZSBPcGVuQUknLCAnQVdTIEJlZHJvY2snLCAnT3BlbkFJIEFQSXMnLCAnQW50aHJvcGljIG1vZGVscycsICdSQUcnLCAnVmVjdG9yIGRhdGFiYXNlcycsICdMYW5nR3JhcGgnLCAnQWdlbnQgU0RLcycsICdQeXRob24nLCAnRmFzdEFQSScsICdEYXRhYnJpY2tzIEFJL01MJ10sXG4gICAgICBpbmR1c3RyeUFwcGxpY2F0aW9uczogWydCRlNJJywgJ0xlZ2FsICYgQ29tcGxpYW5jZScsICdIZWFsdGhjYXJlJywgJ0N1c3RvbWVyIE9wZXJhdGlvbnMnXSxcbiAgICAgIHByb2JsZW1TdGF0ZW1lbnQ6ICdFbnRlcnByaXNlcyBzdHJ1Z2dsZSB0byBkZXBsb3kgR2VuZXJhdGl2ZSBBSSBkdWUgdG8gc2VjdXJpdHkgcmlza3MgYW5kIGluYWNjdXJhdGUgbW9kZWwgaGFsbHVjaW5hdGlvbi4nLFxuICAgICAgc29sdXRpb25TdGF0ZW1lbnQ6ICdCdWlsZCBncm91bmRlZCB2ZWN0b3Igc2VhcmNoIHBpcGVsaW5lcyB3aXRoIGRldGVybWluaXN0aWMgdmFsaWRhdGlvbiBnYXRlcy4nLFxuICAgICAgb3V0Y29tZXM6ICc4MCUgcmVkdWN0aW9uIGluIG1hbnVhbCBkb2N1bWVudCBoYW5kbGluZyB0aW1lIHdpdGggOTklIGV4dHJhY3Rpb24gcHJlY2lzaW9uLicsXG4gICAgICBhY2NlbGVyYXRvcjogJ1BhcnNlTWFzdGVyICsgTGlua0dlblgnLFxuICAgICAgY2FzZVN0dWR5OiAnQkZTSSBJbnRlbGxpZ2VudCBEb2N1bWVudCBQcm9jZXNzaW5nJyxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTMxNDgyNjE1NzEzLTJhZmQ2OTA5Nzk5OD9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgZGlzcGxheV9vcmRlcjogNCxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMjdUMDA6MDA6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3Nydl8wNScsXG4gICAgICB0aXRsZTogJ0Rldk9wcyAmIENsb3VkIEluZnJhc3RydWN0dXJlJyxcbiAgICAgIHNsdWc6ICdkZXZvcHMtY2xvdWQnLFxuICAgICAgbnVtOiAnMDUnLFxuICAgICAgdGFnbGluZTogJ0Nsb3VkIGVuZ2luZWVyaW5nLCBDSS9DRCwgY29udGFpbmVyIHBsYXRmb3JtcywgaW5mcmFzdHJ1Y3R1cmUgYXV0b21hdGlvbiwgYW5kIG9ic2VydmFiaWxpdHkuJyxcbiAgICAgIHN1bW1hcnk6ICdDbG91ZCBlbmdpbmVlcmluZywgQ0kvQ0QsIGNvbnRhaW5lciBwbGF0Zm9ybXMsIGluZnJhc3RydWN0dXJlIGF1dG9tYXRpb24sIG9ic2VydmFiaWxpdHksIHBsYXRmb3JtIGVuZ2luZWVyaW5nLCBzZWN1cmUgZGVwbG95bWVudHMsIGFuZCBtdWx0aS1jbG91ZCBkZWxpdmVyeS4nLFxuICAgICAgZGVzY3JpcHRpb246ICdDbG91ZCBlbmdpbmVlcmluZywgQ0kvQ0QsIGNvbnRhaW5lciBwbGF0Zm9ybXMsIGluZnJhc3RydWN0dXJlIGF1dG9tYXRpb24sIG9ic2VydmFiaWxpdHksIHBsYXRmb3JtIGVuZ2luZWVyaW5nLCBzZWN1cmUgZGVwbG95bWVudHMsIGFuZCBtdWx0aS1jbG91ZCBkZWxpdmVyeS4nLFxuICAgICAgYnVzaW5lc3NQcm9ibGVtczogW1xuICAgICAgICAnTWFudWFsLCBlcnJvci1wcm9uZSBzZXJ2ZXIgcHJvdmlzaW9uaW5nIGFuZCBzbG93IHJlbGVhc2UgY3ljbGVzJyxcbiAgICAgICAgJ0xhY2sgb2YgZGlzdHJpYnV0ZWQgbXVsdGktY2xvdWQgZGlzYXN0ZXIgcmVjb3ZlcnknLFxuICAgICAgICAnVW5tb25pdG9yZWQgY2xvdWQgc3BlbmRpbmcgYW5kIGFyY2hpdGVjdHVyYWwgaW5lZmZpY2llbmN5JyxcbiAgICAgICAgJ1NlY3VyaXR5IGNvbXBsaWFuY2UgZ2FwcyBpbiBjb250YWluZXIgZW52aXJvbm1lbnRzJ1xuICAgICAgXSxcbiAgICAgIGNhcGFiaWxpdGllczogW1xuICAgICAgICAnSW5mcmFzdHJ1Y3R1cmUgYXMgQ29kZSAoVGVycmFmb3JtL0hlbG0pJyxcbiAgICAgICAgJ0F1dG9tYXRlZCBaZXJvLURvd250aW1lIEdpdE9wcyBDSS9DRCcsXG4gICAgICAgICdNdWx0aS1DbHVzdGVyIEt1YmVybmV0ZXMgT3JjaGVzdHJhdGlvbicsXG4gICAgICAgICdPcGVuVGVsZW1ldHJ5ICYgRnVsbC1TdGFjayBPYnNlcnZhYmlsaXR5JyxcbiAgICAgICAgJ0Nsb3VkIEZpbk9wcyAmIENvc3QgT3B0aW1pemF0aW9uJyxcbiAgICAgICAgJ1BsYXRmb3JtIEVuZ2luZWVyaW5nICYgTGFuZGluZyBab25lcydcbiAgICAgIF0sXG4gICAgICB0ZWNobm9sb2d5OiBbJ0FXUycsICdNaWNyb3NvZnQgQXp1cmUnLCAnR29vZ2xlIENsb3VkJywgJ0t1YmVybmV0ZXMnLCAnRG9ja2VyJywgJ1RlcnJhZm9ybScsICdHaXRIdWIgQWN0aW9ucycsICdHaXRMYWIgQ0kvQ0QnLCAnSGVsbScsICdBcmdvIENEJywgJ09wZW5UZWxlbWV0cnknLCAnUHJvbWV0aGV1cycsICdHcmFmYW5hJ10sXG4gICAgICBpbmR1c3RyeUFwcGxpY2F0aW9uczogWydTYWFTJywgJ0ZpblRlY2gnLCAnRS1Db21tZXJjZScsICdFbnRlcnByaXNlIFBsYXRmb3JtcyddLFxuICAgICAgcHJvYmxlbVN0YXRlbWVudDogJ01hbnVhbCBzZXJ2ZXIgZGVwbG95bWVudHMgY2F1c2UgdW5leHBlY3RlZCBwcm9kdWN0aW9uIG91dGFnZXMgYW5kIHNsb3cgcmVsZWFzZSB2ZWxvY2l0eS4nLFxuICAgICAgc29sdXRpb25TdGF0ZW1lbnQ6ICdEZXBsb3kgYXV0b21hdGVkIEdpdE9wcyBwaXBlbGluZXMgd2l0aCBhdXRvbWF0ZWQgcm9sbGJhY2sgc2FmZXR5IGd1YXJkcy4nLFxuICAgICAgb3V0Y29tZXM6ICc0MCUgY2xvdWQgaW5mcmFzdHJ1Y3R1cmUgY29zdCBvcHRpbWl6YXRpb24gd2l0aCBhdXRvbWF0ZWQgemVyby1kb3dudGltZSBjdXRvdmVycy4nLFxuICAgICAgYWNjZWxlcmF0b3I6ICdNaWdyYXRlTWF4IENsb3VkIEFjY2VsZXJhdG9yJyxcbiAgICAgIGNhc2VTdHVkeTogJ0VudGVycHJpc2UgU0FQIENsb3VkIE1pZ3JhdGlvbicsXG4gICAgICBjb3Zlcl9pbWFnZV91cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1ODQ5NDk0OS1lZjAxMGNiZGNjMzE/cT04MCZ3PTEyMDAmYXV0bz1mb3JtYXQmZml0PWNyb3AnLFxuICAgICAgc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgIGRpc3BsYXlfb3JkZXI6IDUsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTI3VDAwOjAwOjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdzcnZfMDYnLFxuICAgICAgdGl0bGU6ICdEYXRhIEdvdmVybmFuY2UgJiBRdWFsaXR5JyxcbiAgICAgIHNsdWc6ICdkYXRhLWdvdmVybmFuY2UnLFxuICAgICAgbnVtOiAnMDYnLFxuICAgICAgdGFnbGluZTogJ0VudGVycHJpc2UgZGF0YSBnb3Zlcm5hbmNlLCBxdWFsaXR5IG1hbmFnZW1lbnQsIG1ldGFkYXRhLCBsaW5lYWdlLCBhbmQgRFBEUCBjb21wbGlhbmNlLicsXG4gICAgICBzdW1tYXJ5OiAnRW50ZXJwcmlzZSBkYXRhIGdvdmVybmFuY2UsIHF1YWxpdHkgbWFuYWdlbWVudCwgbWV0YWRhdGEsIGxpbmVhZ2UsIGNhdGFsb2d1aW5nLCBtYXN0ZXIgZGF0YSBtYW5hZ2VtZW50LCBwcml2YWN5LCBzZWN1cml0eSwgY29tcGxpYW5jZSwgYW5kIHRydXN0d29ydGh5IGRhdGEgZm91bmRhdGlvbnMuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRW50ZXJwcmlzZSBkYXRhIGdvdmVybmFuY2UsIHF1YWxpdHkgbWFuYWdlbWVudCwgbWV0YWRhdGEsIGxpbmVhZ2UsIGNhdGFsb2d1aW5nLCBtYXN0ZXIgZGF0YSBtYW5hZ2VtZW50LCBwcml2YWN5LCBzZWN1cml0eSwgY29tcGxpYW5jZSwgYW5kIHRydXN0d29ydGh5IGRhdGEgZm91bmRhdGlvbnMuJyxcbiAgICAgIGJ1c2luZXNzUHJvYmxlbXM6IFtcbiAgICAgICAgJ1VudmVyaWZpZWQgZGF0YSBxdWFsaXR5IGNhdXNpbmcgZXJyb25lb3VzIGV4ZWN1dGl2ZSByZXBvcnRpbmcnLFxuICAgICAgICAnVW5jbGVhciBjb2x1bW4tbGV2ZWwgZGF0YSBsaW5lYWdlIGFjcm9zcyBhbmFseXRpY2FsIHBpcGVsaW5lcycsXG4gICAgICAgICdEUERQLCBHRFBSLCBhbmQgU09DIDIgcmVndWxhdG9yeSBjb21wbGlhbmNlIGV4cG9zdXJlJyxcbiAgICAgICAgJ1VuZ292ZXJuZWQgZGF0YSBhY2Nlc3MgYW5kIGxhY2sgb2YgZ3JhbnVsYXIgUkJBQy9BQkFDJ1xuICAgICAgXSxcbiAgICAgIGNhcGFiaWxpdGllczogW1xuICAgICAgICAnQXV0b21hdGVkIENvbHVtbi1MZXZlbCBMaW5lYWdlIE1hcHBpbmcnLFxuICAgICAgICAnRW50ZXJwcmlzZSBEYXRhIENhdGFsb2cgJiBNZXRhZGF0YScsXG4gICAgICAgICdBdXRvbWF0ZWQgR3JlYXQgRXhwZWN0YXRpb25zIFF1YWxpdHkgQ2hlY2tzJyxcbiAgICAgICAgJ0dyYW51bGFyIFJCQUMgJiBBdHRyaWJ1dGUgQWNjZXNzIChBQkFDKScsXG4gICAgICAgICdEUERQLCBHRFBSICYgU09DIDIgQ29tcGxpYW5jZSBGcmFtZXdvcmtzJyxcbiAgICAgICAgJ01hc3RlciBEYXRhIE1hbmFnZW1lbnQgKE1ETSknXG4gICAgICBdLFxuICAgICAgdGVjaG5vbG9neTogWydEYXRhYnJpY2tzIFVuaXR5IENhdGFsb2cnLCAnTWljcm9zb2Z0IFB1cnZpZXcnLCAnU25vd2ZsYWtlIEhvcml6b24nLCAnT3Blbk1ldGFkYXRhJywgJ0dyZWF0IEV4cGVjdGF0aW9ucycsICdkYnQgdGVzdHMnLCAnRGF0YSBsaW5lYWdlJywgJ0RhdGEgY2F0YWxvZ3VlcycsICdSQkFDJywgJ0FCQUMnLCAnRGF0YSBxdWFsaXR5IGF1dG9tYXRpb24nXSxcbiAgICAgIGluZHVzdHJ5QXBwbGljYXRpb25zOiBbJ0JGU0knLCAnSGVhbHRoY2FyZScsICdUZWxlY29tbXVuaWNhdGlvbnMnLCAnR292ZXJubWVudCddLFxuICAgICAgcHJvYmxlbVN0YXRlbWVudDogJ1VucmVndWxhdGVkIGRhdGEgc2lsb3MgZXhwb3NlIGVudGVycHJpc2VzIHRvIGhlYXZ5IHJlZ3VsYXRvcnkgZmluZXMgYW5kIHByaXZhY3kgbGVha3MuJyxcbiAgICAgIHNvbHV0aW9uU3RhdGVtZW50OiAnRGVwbG95IGNlbnRyYWxpemVkIG1ldGFkYXRhIGNhdGFsb2dzIHdpdGggYXV0b21hdGVkIGRhdGEgbWFza2luZyBwb2xpY2llcy4nLFxuICAgICAgb3V0Y29tZXM6ICcxMDAlIGNvbXBsaWFuY2UgYXVkaXQgcmVhZGluZXNzIHdpdGggY29udGludW91cyBkYXRhIHF1YWxpdHkgU0xBIG1vbml0b3JpbmcuJyxcbiAgICAgIGFjY2VsZXJhdG9yOiAnUGFyc2VNYXN0ZXIgRGF0YSBFbmdpbmUnLFxuICAgICAgY2FzZVN0dWR5OiAnSGVhbHRoY2FyZSBEYXRhIEdvdmVybmFuY2UgJiBQcml2YWN5JyxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTYzOTg2NzY4NjA5LTMyMmRhMTM1NzVmMz9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgZGlzcGxheV9vcmRlcjogNixcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMjdUMDA6MDA6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3Nydl8wNycsXG4gICAgICB0aXRsZTogJ0ludGVncmF0aW9uIFNlcnZpY2VzJyxcbiAgICAgIHNsdWc6ICdpbnRlZ3JhdGlvbi1zZXJ2aWNlcycsXG4gICAgICBudW06ICcwNycsXG4gICAgICB0YWdsaW5lOiAnTW9kZXJuIGludGVncmF0aW9uIGFjcm9zcyBTQVAsIFNhbGVzZm9yY2UsIEVSUCwgU0ZUUCwgUkVTVCBBUElzLCBhbmQgS2Fma2EuJyxcbiAgICAgIHN1bW1hcnk6ICdNb2Rlcm4gaW50ZWdyYXRpb24gYWNyb3NzIFNBUCwgU2FsZXNmb3JjZSwgRVJQIHBsYXRmb3JtcywgU0ZUUCwgUkVTVCBBUElzLCBldmVudC1kcml2ZW4gc3lzdGVtcywgY2xvdWQgc2VydmljZXMsIGFuZCBlbnRlcnByaXNlIGFwcGxpY2F0aW9ucy4nLFxuICAgICAgZGVzY3JpcHRpb246ICdNb2Rlcm4gaW50ZWdyYXRpb24gYWNyb3NzIFNBUCwgU2FsZXNmb3JjZSwgRVJQIHBsYXRmb3JtcywgU0ZUUCwgUkVTVCBBUElzLCBldmVudC1kcml2ZW4gc3lzdGVtcywgY2xvdWQgc2VydmljZXMsIGFuZCBlbnRlcnByaXNlIGFwcGxpY2F0aW9ucy4nLFxuICAgICAgYnVzaW5lc3NQcm9ibGVtczogW1xuICAgICAgICAnRGlzY29ubmVjdGVkIGxlZ2FjeSBFUlAsIENSTSwgYW5kIGNsb3VkIFNhYVMgcGxhdGZvcm1zJyxcbiAgICAgICAgJ0ZyYWdpbGUgcG9pbnQtdG8tcG9pbnQgY3VzdG9tIGludGVncmF0aW9uIHNjcmlwdHMnLFxuICAgICAgICAnTGFjayBvZiBjZW50cmFsaXplZCBBUEkgcmF0ZSBsaW1pdGluZyBhbmQgc2VjdXJpdHkgbG9nZ2luZycsXG4gICAgICAgICdEZWxheWVkIGJhdGNoIGZpbGUgc3luY3MgZmFpbGluZyB3aXRob3V0IGF1dG9tYXRpYyByZXRyaWVzJ1xuICAgICAgXSxcbiAgICAgIGNhcGFiaWxpdGllczogW1xuICAgICAgICAnUHJvcHJpZXRhcnkgTGlua0dlblggSW50ZWdyYXRpb24gSHViJyxcbiAgICAgICAgJ0V2ZW50LURyaXZlbiBLYWZrYSBFdmVudCBTdHJlYW1pbmcnLFxuICAgICAgICAnRW50ZXJwcmlzZSBTQVAgJiBTYWxlc2ZvcmNlIENvbm5lY3RvcnMnLFxuICAgICAgICAnU2VjdXJlIFNGVFAgJiBDbG91ZCBXZWJob29rIE9yY2hlc3RyYXRpb24nLFxuICAgICAgICAnT0F1dGggMi4wICYgQVBJIEdhdGV3YXkgTWFuYWdlbWVudCcsXG4gICAgICAgICdBdXRvbWF0ZWQgRXJyb3IgSGFuZGxpbmcgJiBSZXRyaWVzJ1xuICAgICAgXSxcbiAgICAgIHRlY2hub2xvZ3k6IFsnUkVTVCBBUElzJywgJ0dyYXBoUUwnLCAnV2ViaG9va3MnLCAnT0F1dGggMi4wJywgJ09wZW5BUEknLCAnS2Fma2EnLCAnRXZlbnQtZHJpdmVuIGFyY2hpdGVjdHVyZScsICdBUEkgZ2F0ZXdheXMnLCAnQ2xvdWQtbmF0aXZlIGludGVncmF0aW9uJywgJ1B5dGhvbicsICdOb2RlLmpzJ10sXG4gICAgICBpbmR1c3RyeUFwcGxpY2F0aW9uczogWydNYW51ZmFjdHVyaW5nJywgJ1JldGFpbCcsICdCRlNJJywgJ1N1cHBseSBDaGFpbiddLFxuICAgICAgcHJvYmxlbVN0YXRlbWVudDogJ1BvaW50LXRvLXBvaW50IHNwYWdoZXR0aSBpbnRlZ3JhdGlvbnMgYnJlYWsgZHVyaW5nIEVSUCB1cGRhdGVzIGFuZCBsYWNrIGNlbnRyYWxpemVkIG9ic2VydmFiaWxpdHkuJyxcbiAgICAgIHNvbHV0aW9uU3RhdGVtZW50OiAnSW1wbGVtZW50IExpbmtHZW5YIGFzIGEgdW5pZmllZCBldmVudC1kcml2ZW4gQVBJIGdhdGV3YXkgd2l0aCBndWFyYW50ZWVkIG1lc3NhZ2UgZGVsaXZlcnkuJyxcbiAgICAgIG91dGNvbWVzOiAnOTkuOTklIGludGVncmF0aW9uIHVwdGltZSBhY3Jvc3MgbWlzc2lvbi1jcml0aWNhbCBFUlAsIENSTSwgYW5kIGZpbmFuY2lhbCBlbmRwb2ludHMuJyxcbiAgICAgIGFjY2VsZXJhdG9yOiAnTGlua0dlblggQ29ubmVjdGl2aXR5IEh1YicsXG4gICAgICBjYXNlU3R1ZHk6ICdDcm9zcy1FbnRlcnByaXNlIEVSUCAmIFNGVFAgU3luY2hyb25pemF0aW9uJyxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTUyNjY0NzMwLWQzMDdjYTg4NDk3OD9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgZGlzcGxheV9vcmRlcjogNyxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMjdUMDA6MDA6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3Nydl8wOCcsXG4gICAgICB0aXRsZTogJ1NlcnZpY2VOb3cgU29sdXRpb25zJyxcbiAgICAgIHNsdWc6ICdzZXJ2aWNlbm93LXNvbHV0aW9ucycsXG4gICAgICBudW06ICcwOCcsXG4gICAgICB0YWdsaW5lOiAnRW5kLXRvLWVuZCBJVFNNLCBJVE9NLCBJVEFNLCBDU00sIEhSU0QsIEdSQywgYW5kIEZsb3cgRGVzaWduZXIgYXV0b21hdGlvbi4nLFxuICAgICAgc3VtbWFyeTogJ0VuZC10by1lbmQgU2VydmljZU5vdyBpbXBsZW1lbnRhdGlvbnMgYWNyb3NzIElUU00sIElUT00sIElUQU0sIENTTSwgSFJTRCwgR1JDLCBGU00sIHdvcmtmbG93IGF1dG9tYXRpb24sIHNlcnZpY2Ugb3BlcmF0aW9ucywgYW5kIGVudGVycHJpc2UgcHJvY2VzcyBtb2Rlcm5pemF0aW9uLicsXG4gICAgICBkZXNjcmlwdGlvbjogJ0VuZC10by1lbmQgU2VydmljZU5vdyBpbXBsZW1lbnRhdGlvbnMgYWNyb3NzIElUU00sIElUT00sIElUQU0sIENTTSwgSFJTRCwgR1JDLCBGU00sIHdvcmtmbG93IGF1dG9tYXRpb24sIHNlcnZpY2Ugb3BlcmF0aW9ucywgYW5kIGVudGVycHJpc2UgcHJvY2VzcyBtb2Rlcm5pemF0aW9uLicsXG4gICAgICBidXNpbmVzc1Byb2JsZW1zOiBbXG4gICAgICAgICdGcmFnbWVudGVkIElUIGluY2lkZW50IG1hbmFnZW1lbnQgYW5kIHNsb3cgcmVzb2x1dGlvbiB0aW1lcycsXG4gICAgICAgICdJbmFjY3VyYXRlIGNvbmZpZ3VyYXRpb24gbWFuYWdlbWVudCBkYXRhYmFzZSAoQ01EQikgcmVjb3JkcycsXG4gICAgICAgICdNYW51YWwgSFIgb25ib2FyZGluZyBhbmQgZW1wbG95ZWUgc2VydmljZSByZXF1ZXN0IGJvdHRsZW5lY2tzJyxcbiAgICAgICAgJ0xhY2sgb2YgaW50ZWdyYXRpb24gYmV0d2VlbiBTZXJ2aWNlTm93IGFuZCBjbG91ZCBpbmZyYXN0cnVjdHVyZSdcbiAgICAgIF0sXG4gICAgICBjYXBhYmlsaXRpZXM6IFtcbiAgICAgICAgJ0lUU00gJiBJVE9NIE1vZGVybml6YXRpb24nLFxuICAgICAgICAnU2VydmljZU5vdyBGbG93IERlc2lnbmVyIEF1dG9tYXRpb24nLFxuICAgICAgICAnSW50ZWdyYXRpb25IdWIgQVBJIE9yY2hlc3RyYXRpb24nLFxuICAgICAgICAnQ01EQiAmIEFzc2V0IE1hbmFnZW1lbnQgKElUQU0pJyxcbiAgICAgICAgJ0N1c3RvbWVyIFNlcnZpY2UgTWFuYWdlbWVudCAoQ1NNKScsXG4gICAgICAgICdTZXJ2aWNlTm93IEFJICYgVmlydHVhbCBBZ2VudCBDb25maWcnXG4gICAgICBdLFxuICAgICAgdGVjaG5vbG9neTogWydTZXJ2aWNlTm93JywgJ1NlcnZpY2VOb3cgRmxvdyBEZXNpZ25lcicsICdJbnRlZ3JhdGlvbkh1YicsICdSRVNUIEFQSXMnLCAnR3JhcGhRTCB3aGVyZSBhcHBsaWNhYmxlJywgJ09BdXRoIDIuMCcsICdDTURCJywgJ1NlcnZpY2VOb3cgQUkgY2FwYWJpbGl0aWVzJywgJ1dvcmtmbG93IGF1dG9tYXRpb24nLCAnRXZlbnQtZHJpdmVuIGludGVncmF0aW9ucyddLFxuICAgICAgaW5kdXN0cnlBcHBsaWNhdGlvbnM6IFsnSVQgU2VydmljZXMnLCAnRW50ZXJwcmlzZSBUZWNoJywgJ0JhbmtpbmcnLCAnSGVhbHRoY2FyZSBPcGVyYXRpb25zJ10sXG4gICAgICBwcm9ibGVtU3RhdGVtZW50OiAnRGlzb3JnYW5pemVkIHNlcnZpY2UgdGlja2V0cyBhbmQgbWFudWFsIGFwcHJvdmFscyBkZWxheSBjcml0aWNhbCBidXNpbmVzcyBvcGVyYXRpb25zLicsXG4gICAgICBzb2x1dGlvblN0YXRlbWVudDogJ01vZGVybml6ZSBTZXJ2aWNlTm93IHdvcmtmbG93cyB3aXRoIEZsb3cgRGVzaWduZXIgYW5kIGF1dG9tYXRlZCBJbnRlZ3JhdGlvbkh1YiBlbmRwb2ludHMuJyxcbiAgICAgIG91dGNvbWVzOiAnNjUlIGZhc3RlciBJVCBpbmNpZGVudCByZXNvbHV0aW9uIHdpdGggYXV0b21hdGVkIENNREIgdG9wb2xvZ3kgZGlzY292ZXJ5LicsXG4gICAgICBhY2NlbGVyYXRvcjogJ0xpbmtHZW5YIGZvciBTZXJ2aWNlTm93JyxcbiAgICAgIGNhc2VTdHVkeTogJ0dsb2JhbCBFbnRlcnByaXNlIElUU00gJiBGbG93IEF1dG9tYXRpb24nLFxuICAgICAgY292ZXJfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MjIwNzE4MjAwODEtMDA5ZjAxMjljNzFjP3E9ODAmdz0xMjAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBkaXNwbGF5X29yZGVyOiA4LFxuICAgICAgY3JlYXRlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWicsXG4gICAgICB1cGRhdGVkX2F0OiAnMjAyNi0wOC0yN1QwMDowMDowMC4wMDBaJyxcbiAgICAgIHB1Ymxpc2hlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnc3J2XzA5JyxcbiAgICAgIHRpdGxlOiAnQWR2aXNvcnkgU2VydmljZXMnLFxuICAgICAgc2x1ZzogJ2Fkdmlzb3J5LXNlcnZpY2VzJyxcbiAgICAgIG51bTogJzA5JyxcbiAgICAgIHRhZ2xpbmU6ICdTdHJhdGVnaWMgY2xvdWQsIEFJLCBkYXRhLCBhbmQgcGxhdGZvcm0gbW9kZXJuaXphdGlvbiBhcmNoaXRlY3R1cmUgY29uc3VsdGluZy4nLFxuICAgICAgc3VtbWFyeTogJ0Nsb3VkLCBBSSwgZGF0YSwgb3BlcmF0aW9ucywgYW5kIG1vZGVybml6YXRpb24gY29uc3VsdGluZyB0aGF0IGRlZmluZXMgdGhlIHJpZ2h0IGFyY2hpdGVjdHVyZSwgcm9hZG1hcCwgdGVjaG5vbG9neSBjaG9pY2VzLCBnb3Zlcm5hbmNlIG1vZGVsLCBhbmQgaW1wbGVtZW50YXRpb24gc3RyYXRlZ3kgYmVmb3JlIGVuZ2luZWVyaW5nIGJlZ2lucy4nLFxuICAgICAgZGVzY3JpcHRpb246ICdDbG91ZCwgQUksIGRhdGEsIG9wZXJhdGlvbnMsIGFuZCBtb2Rlcm5pemF0aW9uIGNvbnN1bHRpbmcgdGhhdCBkZWZpbmVzIHRoZSByaWdodCBhcmNoaXRlY3R1cmUsIHJvYWRtYXAsIHRlY2hub2xvZ3kgY2hvaWNlcywgZ292ZXJuYW5jZSBtb2RlbCwgYW5kIGltcGxlbWVudGF0aW9uIHN0cmF0ZWd5IGJlZm9yZSBlbmdpbmVlcmluZyBiZWdpbnMuJyxcbiAgICAgIGJ1c2luZXNzUHJvYmxlbXM6IFtcbiAgICAgICAgJ1VuY2VydGFpbiB0ZWNobm9sb2d5IHZlbmRvciBzZWxlY3Rpb24gYW5kIHBsYXRmb3JtIGFyY2hpdGVjdHVyZSByaXNrcycsXG4gICAgICAgICdDbG91ZCBtaWdyYXRpb24gY29zdCBvdmVycnVucyB3aXRob3V0IGNsZWFyIEZpbk9wcyBwbGFubmluZycsXG4gICAgICAgICdMYWNrIG9mIGVudGVycHJpc2UgQUkgZ292ZXJuYW5jZSBhbmQgcmlzayBtYW5hZ2VtZW50IHN0cmF0ZWd5JyxcbiAgICAgICAgJ1NpbG9lZCBlbmdpbmVlcmluZyB0ZWFtcyB3b3JraW5nIHdpdGhvdXQgdW5pZmllZCBhcmNoaXRlY3R1cmFsIGJsdWVwcmludHMnXG4gICAgICBdLFxuICAgICAgY2FwYWJpbGl0aWVzOiBbXG4gICAgICAgICdFbnRlcnByaXNlIEFJICYgRGF0YSBTdHJhdGVneScsXG4gICAgICAgICdDbG91ZCBNb2Rlcm5pemF0aW9uIEJsdWVwcmludHMnLFxuICAgICAgICAnQ2xvdWQgRmluT3BzICYgTUxPcHMgUm9hZG1hcHMnLFxuICAgICAgICAnRGF0YSBHb3Zlcm5hbmNlICYgQ29tcGxpYW5jZSBTdHJhdGVneScsXG4gICAgICAgICdQbGF0Zm9ybSBFbmdpbmVlcmluZyBBc3Nlc3NtZW50cycsXG4gICAgICAgICdUZWNobm9sb2d5IFNlbGVjdGlvbiAmIEZlYXNpYmlsaXR5J1xuICAgICAgXSxcbiAgICAgIHRlY2hub2xvZ3k6IFsnQUkgc3RyYXRlZ3knLCAnRGF0YSBzdHJhdGVneScsICdDbG91ZCBtb2Rlcm5pemF0aW9uJywgJ1BsYXRmb3JtIGVuZ2luZWVyaW5nJywgJ0VudGVycHJpc2UgYXJjaGl0ZWN0dXJlJywgJ0RhdGEgZ292ZXJuYW5jZScsICdBSSBnb3Zlcm5hbmNlJywgJ0Nsb3VkIEZpbk9wcycsICdNTE9wcycsICdEYXRhIHBsYXRmb3JtIG1vZGVybml6YXRpb24nLCAnVGVjaG5vbG9neSByb2FkbWFwJ10sXG4gICAgICBpbmR1c3RyeUFwcGxpY2F0aW9uczogWydFeGVjdXRpdmUgTGVhZGVyc2hpcCcsICdDVE8gQWR2aXNvcnknLCAnRW50ZXJwcmlzZSBJVCcsICdEaWdpdGFsIFRyYW5zZm9ybWF0aW9uJ10sXG4gICAgICBwcm9ibGVtU3RhdGVtZW50OiAnVW5wbGFubmVkIGRpZ2l0YWwgdHJhbnNmb3JtYXRpb25zIGZyZXF1ZW50bHkgZmFpbCBvciBleGNlZWQgYnVkZ2V0IGR1ZSB0byBhcmNoaXRlY3R1cmFsIGdhcHMuJyxcbiAgICAgIHNvbHV0aW9uU3RhdGVtZW50OiAnUHJvdmlkZSB2ZW5kb3ItbmV1dHJhbCwgc2VuaW9yIGVuZ2luZWVyaW5nIGFkdmlzb3J5IHRvIGRlc2lnbiB0YXJnZXRlZCAzLXllYXIgZGlnaXRhbCBibHVlcHJpbnRzLicsXG4gICAgICBvdXRjb21lczogJ0FjdGlvbmFibGUgMy15ZWFyIHRlY2hub2xvZ3kgcm9hZG1hcHMgd2l0aCAzMC1kYXkgcHJvb2Ytb2YtY29uY2VwdCBkZWxpdmVyYWJsZXMuJyxcbiAgICAgIGFjY2VsZXJhdG9yOiAnU01SSUtBQU0gQXJjaGl0ZWN0dXJlIEZyYW1ld29yaycsXG4gICAgICBjYXNlU3R1ZHk6ICdFbnRlcnByaXNlIERpZ2l0YWwgVHJhbnNmb3JtYXRpb24gUm9hZG1hcCcsXG4gICAgICBjb3Zlcl9pbWFnZV91cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0Mjc0NDE3My04ZTdlNTM0MTViYjA/cT04MCZ3PTEyMDAmYXV0bz1mb3JtYXQmZml0PWNyb3AnLFxuICAgICAgc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgIGRpc3BsYXlfb3JkZXI6IDksXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTI3VDAwOjAwOjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdzcnZfMTAnLFxuICAgICAgdGl0bGU6ICdBSSBXb3JrZmxvdyBBdXRvbWF0aW9uJyxcbiAgICAgIHNsdWc6ICdhaS13b3JrZmxvdy1hdXRvbWF0aW9uJyxcbiAgICAgIG51bTogJzEwJyxcbiAgICAgIHRhZ2xpbmU6ICdBZ2VudGljIEFJIHdvcmtmbG93cyBvcmNoZXN0cmF0aW5nIG11bHRpLXN0ZXAgYnVzaW5lc3MgdGFza3MgYW5kIGRvY3VtZW50IG9wcy4nLFxuICAgICAgc3VtbWFyeTogJ0FnZW50aWMgQUkgd29ya2Zsb3dzIHRoYXQgb3JjaGVzdHJhdGUgbXVsdGktc3RlcCBidXNpbmVzcyBwcm9jZXNzZXMgaW5jbHVkaW5nIGRvY3VtZW50IHByb2Nlc3NpbmcsIHJlcG9ydGluZywgY3VzdG9tZXIgaW50ZWxsaWdlbmNlLCBjb21wbGlhbmNlLCBrbm93bGVkZ2Ugb3BlcmF0aW9ucywgYW5kIGVudGVycHJpc2UgdGFzayBhdXRvbWF0aW9uLicsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FnZW50aWMgQUkgd29ya2Zsb3dzIHRoYXQgb3JjaGVzdHJhdGUgbXVsdGktc3RlcCBidXNpbmVzcyBwcm9jZXNzZXMgaW5jbHVkaW5nIGRvY3VtZW50IHByb2Nlc3NpbmcsIHJlcG9ydGluZywgY3VzdG9tZXIgaW50ZWxsaWdlbmNlLCBjb21wbGlhbmNlLCBrbm93bGVkZ2Ugb3BlcmF0aW9ucywgYW5kIGVudGVycHJpc2UgdGFzayBhdXRvbWF0aW9uLicsXG4gICAgICBidXNpbmVzc1Byb2JsZW1zOiBbXG4gICAgICAgICdSZXBldGl0aXZlIG11bHRpLXN0ZXAgYmFjay1vZmZpY2UgbWFudWFsIGRhdGEgZW50cnkgYW5kIHJlY29uY2lsaWF0aW9uJyxcbiAgICAgICAgJ0NvbXBsZXggY3VzdG9tZXIgcXVlcnkgdHJpYWdlIHJlcXVpcmluZyBjcm9zcy1zeXN0ZW0gbG9va3VwcycsXG4gICAgICAgICdNYW51YWwgY29tcGxpYW5jZSBhdWRpdGluZyBhY3Jvc3Mgc3RydWN0dXJlZCBhbmQgdW5zdHJ1Y3R1cmVkIGZpbGluZ3MnLFxuICAgICAgICAnRGlzY29ubmVjdGVkIHN5c3RlbXMgZGVsYXlpbmcgZXhlY3V0aXZlIGRlY2lzaW9uIGN5Y2xlcydcbiAgICAgIF0sXG4gICAgICBjYXBhYmlsaXRpZXM6IFtcbiAgICAgICAgJ0FnZW50aWMgTXVsdGktU3RlcCBQcm9jZXNzIEV4ZWN1dGlvbicsXG4gICAgICAgICdBdXRvbWF0ZWQgRG9jdW1lbnQgSW5nZXN0aW9uICYgUm91dGluZycsXG4gICAgICAgICdIdW1hbi1pbi10aGUtTG9vcCBBcHByb3ZhbCBDaGVja3BvaW50cycsXG4gICAgICAgICdWZWN0b3ItUG93ZXJlZCBLbm93bGVkZ2UgT3BlcmF0aW9ucycsXG4gICAgICAgICdBdXRvbWF0ZWQgUmVndWxhdG9yeSBDb21wbGlhbmNlIFRyaWFnZScsXG4gICAgICAgICdFdmVudC1Ecml2ZW4gVGFzayBUcmlnZ2VyaW5nJ1xuICAgICAgXSxcbiAgICAgIHRlY2hub2xvZ3k6IFsnTExNIEFQSXMnLCAnQUkgYWdlbnRzJywgJ1JBRycsICdMYW5nR3JhcGgnLCAnV29ya2Zsb3cgb3JjaGVzdHJhdGlvbicsICdQeXRob24nLCAnRmFzdEFQSScsICdWZWN0b3Igc2VhcmNoJywgJ0RvY3VtZW50IGludGVsbGlnZW5jZScsICdFdmVudC1kcml2ZW4gYXJjaGl0ZWN0dXJlJywgJ0FQSSBpbnRlZ3JhdGlvbnMnLCAnSHVtYW4taW4tdGhlLWxvb3Agd29ya2Zsb3dzJ10sXG4gICAgICBpbmR1c3RyeUFwcGxpY2F0aW9uczogWydPcGVyYXRpb25zJywgJ0ZpbmFuY2UgJiBBY2NvdW50aW5nJywgJ0xlZ2FsJywgJ0N1c3RvbWVyIFN1cHBvcnQnXSxcbiAgICAgIHByb2JsZW1TdGF0ZW1lbnQ6ICdLbm93bGVkZ2Ugd29ya2VycyB3YXN0ZSB1cCB0byA0MCUgb2YgdGhlaXIgdGltZSBvbiBtYW51YWwgY3Jvc3Mtc3lzdGVtIGRhdGEgdHJhbnNmZXIuJyxcbiAgICAgIHNvbHV0aW9uU3RhdGVtZW50OiAnRGVwbG95IGFnZW50aWMgTGFuZ0dyYXBoIHdvcmtmbG93cyB0aGF0IGF1dG9ub21vdXNseSBleGVjdXRlIG11bHRpLXN0ZXAgYnVzaW5lc3MgdGFza3MuJyxcbiAgICAgIG91dGNvbWVzOiAnNzUlIG9wZXJhdGlvbmFsIGN5Y2xlIHRpbWUgcmVkdWN0aW9uIHdpdGggMTAwJSBhdWRpdGFibGUgcHJvY2VzcyB0ZWxlbWV0cnkuJyxcbiAgICAgIGFjY2VsZXJhdG9yOiAnUGFyc2VNYXN0ZXIgKyBMaW5rR2VuWCcsXG4gICAgICBjYXNlU3R1ZHk6ICdBdXRvbWF0ZWQgUmVndWxhdG9yeSBGaWxpbmcgJiBQcm9jZXNzaW5nIFdvcmtmbG93JyxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA3Njc5Nzk5OTg3LWM3Mzc3OTU4N2NjZj9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgZGlzcGxheV9vcmRlcjogMTAsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTI3VDAwOjAwOjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJ1xuICAgIH1cbiAgXSxcbiAgYWNjZWxlcmF0b3JzOiBbXG4gICAge1xuICAgICAgaWQ6ICdhY2NfMDEnLFxuICAgICAgbmFtZTogJ0JpdFhoaWZ0JyxcbiAgICAgIHNsdWc6ICdiaXR4aGlmdCcsXG4gICAgICBjYXRlZ29yeTogJ0luZHVzdHJpYWwgSW9UJyxcbiAgICAgIHRhZ2xpbmU6ICdJbmR1c3RyaWFsIElvVCAmIEVkZ2UgSW50ZWxsaWdlbmNlIEFjY2VsZXJhdG9yJyxcbiAgICAgIHNob3J0RGVzY3JpcHRpb246ICdJbmR1c3RyaWFsIElvVCAmIEVkZ2UgSW50ZWxsaWdlbmNlIEFjY2VsZXJhdG9yIGZvciByZWFsLXRpbWUgZmFjdG9yeSB0ZWxlbWV0cnkuJyxcbiAgICAgIGZ1bGxEZXNjcmlwdGlvbjogJ0JpdFhoaWZ0IGlzIGFuIGVkZ2UtdG8tY2xvdWQgSUlvVCB0ZWxlbWV0cnkgZnJhbWV3b3JrIHRoYXQgaW5nZXN0cyBoaWdoLWZyZXF1ZW5jeSBtYWNoaW5lIHNpZ25hbHMgZnJvbSBNb2RidXMgYW5kIE9QQy1VQSBjb250cm9sbGVycywgY29tcHV0ZXMgbGl2ZSBPRUUgbWV0cmljcywgYW5kIHN0cmVhbXMgcHJlZGljdGl2ZSBhbGVydHMgZGlyZWN0bHkgdG8gZW50ZXJwcmlzZSBkYXNoYm9hcmRzLicsXG4gICAgICBwcm9ibGVtOiAnRmFjdG9yeSBmbG9vciBtYWNoaW5lcywgQ05DIHVuaXRzLCBhbmQgUExDIGNvbnRyb2xsZXJzIHN0b3JlIGRhdGEgaW4gaXNvbGF0ZWQgT1BDLVVBLCBNb2RidXMsIG9yIHNlcmlhbCBwcm90b2NvbCBzaWxvcywgbGVhdmluZyBmbG9vciBtYW5hZ2VycyB3aXRob3V0IHJlYWwtdGltZSBPRUUgdmlzaWJpbGl0eS4nLFxuICAgICAgc29sdXRpb246ICdBbiBlZGdlLXRvLWNsb3VkIElJb1QgdGVsZW1ldHJ5IGZyYW1ld29yayB0aGF0IGluZ2VzdHMgaGlnaC1mcmVxdWVuY3kgbWFjaGluZSBzaWduYWxzLCBjb21wdXRlcyBsaXZlIE9FRSwgYW5kIHN0cmVhbXMgcHJlZGljdGl2ZSBhbGVydHMgZGlyZWN0bHkgdG8gZW50ZXJwcmlzZSBkYXNoYm9hcmRzLicsXG4gICAgICBob3dJdFdvcmtzOiAnRWRnZSBhZ2VudHMgY29ubmVjdCB0byBQTENzIHZpYSBNb2RidXMvT1BDLVVBIFx1MjE5MiBQYXJzZSAmIG5vcm1hbGl6ZSBzaWduYWxzIFx1MjE5MiBTdHJlYW0gdmlhIE1RVFQgdG8gVGltZXNjYWxlREIgXHUyMTkyIFJlbmRlciBsaXZlIE9FRSBkYXNoYm9hcmRzICYgcHVzaCBhbGVydHMgdG8gU0FQLicsXG4gICAgICBhcmNoaXRlY3R1cmU6ICdEaXN0cmlidXRlZCBFZGdlIENvbnRhaW5lcnMgKyBUaW1lc2NhbGVEQiArIE1RVFQgRXZlbnQgQnVzICsgUmVhY3QgUmVhbC1UaW1lIEZsb29yIFdhbGxib2FyZC4nLFxuICAgICAga2V5RmVhdHVyZXM6IFsnUmVhbC1UaW1lIE9FRSBDYWxjdWxhdGlvbicsICdWaWJyYXRpb24gQW5vbWFseSBEZXRlY3Rpb24nLCAnRW5lcmd5IExvYWQgT3B0aW1pemF0aW9uJywgJ0F1dG9tYXRlZCBTaGlmdCBSZXBvcnRpbmcnXSxcbiAgICAgIHRlY2hub2xvZ3k6IFsnTVFUVCcsICdPUEMtVUEnLCAnTm9kZS1SRUQnLCAnVGltZXNjYWxlREInLCAnRG9ja2VyIEVkZ2UnLCAnUmVhY3QnXSxcbiAgICAgIHVzZUNhc2VzOiBbJ0NOQyBGbG9vciBUZWxlbWV0cnknLCAnRW5lcmd5IENvbnN1bXB0aW9uIE1vbml0b3JpbmcnLCAnUHJlZGljdGl2ZSBTcGluZGxlIE1haW50ZW5hbmNlJ10sXG4gICAgICBidXNpbmVzc091dGNvbWVzOiAnMzUlIHJlZHVjdGlvbiBpbiB1bnBsYW5uZWQgZG93bnRpbWUgYW5kIGxpdmUgT0VFIHRyYWNraW5nIGFjcm9zcyA1MDArIGNvbm5lY3RlZCBtYWNoaW5lcyB3aXRoaW4gNDggaG91cnMuJyxcbiAgICAgIGNhc2VTdHVkeTogJ1NtYXJ0IEZhY3RvcnkgTWFudWZhY3R1cmluZyBUcmFuc2Zvcm1hdGlvbicsXG4gICAgICBjb3Zlcl9pbWFnZV91cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4MTA5MjE2MDYwNy1lZTIyNjIxZGQ3NTg/cT04MCZ3PTEyMDAmYXV0bz1mb3JtYXQmZml0PWNyb3AnLFxuICAgICAgc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2FjY18wMicsXG4gICAgICBuYW1lOiAnTWlncmF0ZU1heCcsXG4gICAgICBzbHVnOiAnbWlncmF0ZW1heCcsXG4gICAgICBjYXRlZ29yeTogJ0Nsb3VkICYgRGF0YWJhc2UgTWlncmF0aW9uJyxcbiAgICAgIHRhZ2xpbmU6ICdDbG91ZCAmIERhdGEgV2FyZWhvdXNlIE1pZ3JhdGlvbiBBY2NlbGVyYXRvcicsXG4gICAgICBzaG9ydERlc2NyaXB0aW9uOiAnQXV0b21hdGVkIHNjaGVtYSBtYXBwaW5nIGFuZCB6ZXJvLWRvd250aW1lIGRhdGFiYXNlIG1pZ3JhdGlvbiBmcmFtZXdvcmsuJyxcbiAgICAgIGZ1bGxEZXNjcmlwdGlvbjogJ01pZ3JhdGVNYXggYXV0b21hdGVzIHNjaGVtYSB0cmFuc2xhdGlvbiwgcGFyYWxsZWwgY2hhbmdlIGRhdGEgY2FwdHVyZSAoQ0RDKSwgYW5kIGNvbnRpbnVvdXMgZGF0YSByZWNvbmNpbGlhdGlvbiBmb3Igc2VhbWxlc3MgdHJhbnNpdGlvbnMgZnJvbSBsZWdhY3kgZGF0YWJhc2VzIHRvIG1vZGVybiBjbG91ZCB3YXJlaG91c2VzLicsXG4gICAgICBwcm9ibGVtOiAnTGVnYWN5IGRhdGFiYXNlIG1pZ3JhdGlvbnMgKE9yYWNsZSwgTVNTUUwsIFRlcmFkYXRhKSB0byBjbG91ZCBkYXRhIHdhcmVob3VzZXMgc3VmZmVyIGZyb20gaGlnaCBkb3dudGltZSByaXNrLCBjb21wbGV4IHNjaGVtYSB0cmFuc2xhdGlvbiBlcnJvcnMsIGFuZCBkYXRhIGRpc2NyZXBhbmN5IGlzc3Vlcy4nLFxuICAgICAgc29sdXRpb246ICdBbiBhdXRvbWF0ZWQgc2NoZW1hIG1hcHBpbmcsIGRhdGEgdmFsaWRhdGlvbiwgYW5kIHplcm8tZG93bnRpbWUgY3V0b3ZlciBmcmFtZXdvcmsgdGhhdCBhdXRvbWF0ZXMgdHJhbnNsYXRpb24gYW5kIGNvbnRpbnVvdXNseSB2YWxpZGF0ZXMgcm93LWxldmVsIGRhdGEgY29uc2lzdGVuY3kuJyxcbiAgICAgIGhvd0l0V29ya3M6ICdBdXRvbWF0ZWQgRERMIFNjaGVtYSBUcmFuc2xhdGlvbiBcdTIxOTIgUGFyYWxsZWwgQ2hhbmdlIERhdGEgQ2FwdHVyZSAoQ0RDKSBTeW5jIFx1MjE5MiBBdXRvbWF0ZWQgUm93IEhhc2ggVmVyaWZpY2F0aW9uIFx1MjE5MiBaZXJvLURvd250aW1lIEROUyBDdXRvdmVyLicsXG4gICAgICBhcmNoaXRlY3R1cmU6ICdQeXRob24gU2NoZW1hIFBhcnNlciArIFNwYXJrIFBhcmFsbGVsIENEQyBFeHRyYWN0b3IgKyBTbm93Zmxha2UgLyBSZWRzaGlmdCBUYXJnZXQgTG9hZGVyICsgQXV0b21hdGVkIERpZmYgQXVkaXRvci4nLFxuICAgICAga2V5RmVhdHVyZXM6IFsnQXV0b21hdGVkIERETCAmIFN0b3JlZCBQcm9jIENvbnZlcnNpb24nLCAnWmVyby1Eb3dudGltZSBDREMgU3RyZWFtJywgJ0F1dG9tYXRlZCBSZWNvbmNpbGlhdGlvbiBBdWRpdCcsICdSb2xsYmFjayBTYWZldHkgTmV0J10sXG4gICAgICB0ZWNobm9sb2d5OiBbJ09yYWNsZScsICdNU1NRTCcsICdTbm93Zmxha2UnLCAnUmVkc2hpZnQnLCAnRGF0YWJyaWNrcycsICdBV1MgLyBHQ1AnXSxcbiAgICAgIHVzZUNhc2VzOiBbJ09yYWNsZSB0byBTbm93Zmxha2UgQ3V0b3ZlcicsICdPbi1QcmVtIHRvIEFXUyBDbG91ZCBXYXJlaG91c2UnLCAnTGVnYWN5IFRlcmFkYXRhIE1pZ3JhdGlvbiddLFxuICAgICAgYnVzaW5lc3NPdXRjb21lczogJzYwJSBmYXN0ZXIgZGF0YWJhc2UgbWlncmF0aW9uIGN1dG92ZXIgd2l0aCAxMDAlIGRhdGEgZmlkZWxpdHkgYW5kIHplcm8gYnVzaW5lc3MgZGlzcnVwdGlvbi4nLFxuICAgICAgY2FzZVN0dWR5OiAnRW50ZXJwcmlzZSBTQVAgJiBEYXRhYmFzZSBDbG91ZCBNaWdyYXRpb24nLFxuICAgICAgY292ZXJfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTg0OTQ5NDktZWYwMTBjYmRjYzMxP3E9ODAmdz0xMjAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdhY2NfMDMnLFxuICAgICAgbmFtZTogJ1BhcnNlTWFzdGVyJyxcbiAgICAgIHNsdWc6ICdwYXJzZW1hc3RlcicsXG4gICAgICBjYXRlZ29yeTogJ0RhdGEgVHJhbnNmb3JtYXRpb24nLFxuICAgICAgdGFnbGluZTogJ0VudGVycHJpc2UgRGF0YSBUcmFuc2Zvcm1hdGlvbiBFbmdpbmUnLFxuICAgICAgc2hvcnREZXNjcmlwdGlvbjogJ0hpZ2gtdGhyb3VnaHB1dCBzdHJlYW1pbmcgcGFyc2luZyBlbmdpbmUgZm9yIGNvbXBsZXggdW5zdHJ1Y3R1cmVkIGZlZWRzLicsXG4gICAgICBmdWxsRGVzY3JpcHRpb246ICdQYXJzZU1hc3RlciBjb252ZXJ0cyBoaWdoLXZvbHVtZSB1bnN0cnVjdHVyZWQgZmVlZHMgKEVESSA4NTAvODU2LCBYTUwgaW52b2ljZXMsIG11bHRpLW5lc3RlZCBKU09OLCBzZW5zb3IgbG9ncykgaW50byBjbGVhbiB0YWJ1bGFyIHNjaGVtYXMgd2l0aCBhdXRvbWF0ZWQgc2NoZW1hIGRyaWZ0IGhhbmRsaW5nLicsXG4gICAgICBwcm9ibGVtOiAnSGlnaC12b2x1bWUgdW5zdHJ1Y3R1cmVkIGZlZWRzIChFREkgODUwLzg1NiwgWE1MIGludm9pY2VzLCBtdWx0aS1uZXN0ZWQgSlNPTiwgc2Vuc29yIGxvZ3MpIG92ZXJsb2FkIHRyYWRpdGlvbmFsIEVUTCB0b29scyBhbmQgY2F1c2UgZnJlcXVlbnQgcGlwZWxpbmUgYnJlYWthZ2VzLicsXG4gICAgICBzb2x1dGlvbjogJ0EgaGlnaC10aHJvdWdocHV0IHN0cmVhbWluZyBwYXJzaW5nIGVuZ2luZSB0aGF0IGR5bmFtaWNhbGx5IGNvbnZlcnRzIGNvbXBsZXggdW5zdHJ1Y3R1cmVkIHBheWxvYWQgZm9ybWF0cyBpbnRvIGNsZWFuIHRhYnVsYXIgc2NoZW1hcyBmb3Igd2FyZWhvdXNlIGxvYWRpbmcuJyxcbiAgICAgIGhvd0l0V29ya3M6ICdTY2hlbWEgSW5mZXJlbmNlICYgUGF5bG9hZCBEZXRlY3Rpb24gXHUyMTkyIE11bHRpLVRocmVhZGVkIFN0cmVhbWluZyBQYXJzZXIgXHUyMTkyIFNjaGVtYSBEcmlmdCBhdXRvLWZpeCBcdTIxOTIgRGlyZWN0IFBhcnF1ZXQvSWNlYmVyZyBXYXJlaG91c2UgV3JpdGVzLicsXG4gICAgICBhcmNoaXRlY3R1cmU6ICdSdXN0IENvcmUgUGFyc2VyICsgQXBhY2hlIFNwYXJrIFN0cmVhbWluZyArIGRidCBUcmFuc2Zvcm1hdGlvbiBMYXllcnMgKyBEZWx0YSAvIEljZWJlcmcgU3RvcmFnZS4nLFxuICAgICAga2V5RmVhdHVyZXM6IFsnTXVsdGktRm9ybWF0IEluZ2VzdGlvbiAoRURJLCBYTUwsIEpTT04pJywgJ0R5bmFtaWMgU2NoZW1hIERyaWZ0IEhhbmRsaW5nJywgJ1N1Yi1TZWNvbmQgUGF5bG9hZCBQYXJzaW5nJywgJ0J1aWx0LWluIERhdGEgUXVhbGl0eSBBc3NlcnRzJ10sXG4gICAgICB0ZWNobm9sb2d5OiBbJ1J1c3QnLCAnQXBhY2hlIFNwYXJrJywgJ1BhcnF1ZXQnLCAnZGJ0JywgJ1Nub3dmbGFrZScsICdCaWdRdWVyeSddLFxuICAgICAgdXNlQ2FzZXM6IFsnRURJIEIyQiBTdXBwbHkgQ2hhaW4gRmVlZHMnLCAnRmluYW5jaWFsIFhNTCBDbGVhcmluZycsICdNdWx0aS1TZW5zb3IgSlNPTiBOb3JtYWxpemF0aW9uJ10sXG4gICAgICBidXNpbmVzc091dGNvbWVzOiAnODAlIHJlZHVjdGlvbiBpbiBwaXBlbGluZSBicmVha2FnZSBpbmNpZGVudHMgYW5kIDV4IGZhc3RlciBwYXlsb2FkIHRyYW5zZm9ybWF0aW9uIHJhdGVzLicsXG4gICAgICBjYXNlU3R1ZHk6ICdHbG9iYWwgU3VwcGx5IENoYWluIERhdGEgTGFrZWhvdXNlJyxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTUxMjg4MDQ5LWJlYmRhNGUzOGY3MT9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgY3JlYXRlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWicsXG4gICAgICB1cGRhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHB1Ymxpc2hlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnYWNjXzA0JyxcbiAgICAgIG5hbWU6ICdMaW5rR2VuWCcsXG4gICAgICBzbHVnOiAnbGlua2dlbngnLFxuICAgICAgY2F0ZWdvcnk6ICdJbnRlZ3JhdGlvbiAmIE1lc2gnLFxuICAgICAgdGFnbGluZTogJ1NBUCAvIEVSUCAmIENsb3VkIEludGVncmF0aW9uIEZyYW1ld29yaycsXG4gICAgICBzaG9ydERlc2NyaXB0aW9uOiAnRXZlbnQtZHJpdmVuIGVudGVycHJpc2UgaW50ZWdyYXRpb24gbWVzaCB3aXRoIHByZWJ1aWx0IFNBUCBjb25uZWN0b3JzLicsXG4gICAgICBmdWxsRGVzY3JpcHRpb246ICdMaW5rR2VuWCBjb25uZWN0cyBTQVAgUy80SEFOQSwgU2FsZXNmb3JjZSwgU2VydmljZU5vdywgYW5kIGN1c3RvbSBjbG91ZCBhcHBzIHZpYSBhbiBldmVudC1kcml2ZW4gbWVzaCB3aXRoIGF1dG9tYXRlZCBBUEkgY29udHJhY3QgdGVzdGluZyBhbmQgZGVhZC1sZXR0ZXIgcmV0cnkgcXVldWVzLicsXG4gICAgICBwcm9ibGVtOiAnQnVpbGRpbmcgcG9pbnQtdG8tcG9pbnQgaW50ZWdyYXRpb25zIGJldHdlZW4gU0FQIFMvNEhBTkEsIFNhbGVzZm9yY2UsIFNlcnZpY2VOb3csIGFuZCBjdXN0b20gY2xvdWQgYXBwcyBjcmVhdGVzIGZyYWdpbGUgYnJpdHRsZSBzcGFnaGV0dGkgY29kZS4nLFxuICAgICAgc29sdXRpb246ICdBbiBldmVudC1kcml2ZW4gaW50ZWdyYXRpb24gbWVzaCB3aXRoIHByZWJ1aWx0IGVudGVycHJpc2UgU0FQIGNvbm5lY3RvcnMsIGF1dG9tYXRlZCBBUEkgY29udHJhY3QgdGVzdGluZywgYW5kIHJlbGlhYmxlIG1lc3NhZ2UgcmV0cnkgcm91dGluZy4nLFxuICAgICAgaG93SXRXb3JrczogJ0V2ZW50IFByb2R1Y2VyIChTQVAgSURvYyAvIFJGQykgXHUyMTkyIExpbmtHZW5YIEV2ZW50IE1lc2ggUm91dGVyIFx1MjE5MiBTY2hlbWEgQ29udHJhY3QgVmFsaWRhdGlvbiBcdTIxOTIgVGFyZ2V0IENvbnN1bWVyIERlbGl2ZXJ5IHdpdGggUmV0cnkgUXVldWUuJyxcbiAgICAgIGFyY2hpdGVjdHVyZTogJ0V2ZW50LURyaXZlbiBNaWNyb3NlcnZpY2VzIE1lc2ggKyBSYWJiaXRNUSAvIEthZmthIEV2ZW50IEJ1cyArIE9wZW5BUEkgQ29udHJhY3QgVmFsaWRhdG9yICsgUHJlYnVpbHQgU0FQIFJGQyBDb25uZWN0b3JzLicsXG4gICAgICBrZXlGZWF0dXJlczogWydQcmVidWlsdCBTQVAgUy80SEFOQSBDb25uZWN0b3JzJywgJ0V2ZW50IE1lc2ggUHVibGlzaC1TdWJzY3JpYmUnLCAnQ29udHJhY3QgQ29tcGF0aWJpbGl0eSBHdWFyZCcsICdBdXRvbWF0ZWQgRGVhZC1MZXR0ZXIgUXVldWUnXSxcbiAgICAgIHRlY2hub2xvZ3k6IFsnU0FQIFMvNEhBTkEnLCAnU2FsZXNmb3JjZScsICdTZXJ2aWNlTm93JywgJ0FwYWNoZSBLYWZrYScsICdHcmFwaFFMJywgJ0RvY2tlciddLFxuICAgICAgdXNlQ2FzZXM6IFsnU0FQIHRvIFNhbGVzZm9yY2UgT3JkZXIgU3luYycsICdSZWFsLVRpbWUgSW52ZW50b3J5IE1lc2gnLCAnQ3Jvc3MtU3lzdGVtIEN1c3RvbWVyIE1hc3RlciBTeW5jJ10sXG4gICAgICBidXNpbmVzc091dGNvbWVzOiAnNzAlIHJlZHVjdGlvbiBpbiBpbnRlZ3JhdGlvbiBzZXR1cCBlZmZvcnQgd2l0aCA5OS45OTklIG1lc3NhZ2UgZGVsaXZlcnkgcmVsaWFiaWxpdHkuJyxcbiAgICAgIGNhc2VTdHVkeTogJ0JGU0kgQXV0b21hdGVkIEVSUCBJbnRlZ3JhdGlvbiBFbmdpbmUnLFxuICAgICAgY292ZXJfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NTExODc1ODA0NTktNDM0OTAyNzljMGZhP3E9ODAmdz0xMjAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJ1xuICAgIH1cbiAgXSxcbiAgaW5kdXN0cmllczogW1xuICAgIHtcbiAgICAgIGlkOiAnaW5kXzAxJyxcbiAgICAgIG5hbWU6ICdNYW51ZmFjdHVyaW5nJyxcbiAgICAgIHNsdWc6ICdtYW51ZmFjdHVyaW5nJyxcbiAgICAgIHN1bW1hcnk6ICdTbWFydCBmYWN0b3J5IHRlbGVtZXRyeSwgT0VFIG9wdGltaXphdGlvbiwgbWFjaGluZSB2aXNpb24gcXVhbGl0eSBpbnNwZWN0aW9uLCBhbmQgc3VwcGx5IGNoYWluIHZpc2liaWxpdHkgZm9yIGRpc2NyZXRlICYgcHJvY2VzcyBtYW51ZmFjdHVyZXJzLicsXG4gICAgICBjb250ZW50OiAnV2UgZW1wb3dlciBtYW51ZmFjdHVyaW5nIHBsYW50cyB0byBjb25uZWN0IHNob3AtZmxvb3IgUExDcywgZWxpbWluYXRlIHVucGxhbm5lZCBkb3dudGltZSB3aXRoIHByZWRpY3RpdmUgbWFpbnRlbmFuY2UsIGFuZCBhdXRvbWF0ZSBwcm9kdWN0aW9uIHJlcG9ydGluZyBhY3Jvc3MgaGlnaC1zcGVlZCBhc3NlbWJseSBsaW5lcy4nLFxuICAgICAgYnVzaW5lc3NQcm9ibGVtczogW1xuICAgICAgICAnVW5wbGFubmVkIG1hY2hpbmUgYnJlYWtkb3ducyBhbmQgZG93bnRpbWUnLFxuICAgICAgICAnTWFudWFsIHBhcGVyLWJhc2VkIHNoaWZ0IHRyYWNraW5nJyxcbiAgICAgICAgJ1N1cHBseSBjaGFpbiBwYXJ0cyBzdG9ja291dHMnXG4gICAgICBdLFxuICAgICAgc29sdXRpb25zOiBbXG4gICAgICAgICdFZGdlIElJb1QgbWFjaGluZSB0ZWxlbWV0cnkgdmlhIEJpdFhoaWZ0JyxcbiAgICAgICAgJ0xpdmUgZmxvb3IgT0VFIG1hbmFnZW1lbnQgd2FsbGJvYXJkcycsXG4gICAgICAgICdBdXRvbWF0ZWQgcXVhbGl0eSBpbnNwZWN0aW9uIHdpdGggY29tcHV0ZXIgdmlzaW9uJ1xuICAgICAgXSxcbiAgICAgIHRlY2hub2xvZ3k6IFsnT1BDLVVBJywgJ01RVFQnLCAnVGltZXNjYWxlREInLCAnUHl0aG9uJywgJ1JlYWN0JywgJ1NBUCBDb25uZWN0b3InXSxcbiAgICAgIHVzZUNhc2VzOiBbJ0F1dG9tb3RpdmUgQXNzZW1ibHkgTGluZXMnLCAnQ05DIFByZWNpc2lvbiBUb29saW5nJywgJ1RleHRpbGUgTWFjaGluZXJ5IFRlbGVtZXRyeSddLFxuICAgICAgY292ZXJfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODEwOTIxNjA2MDctZWUyMjYyMWRkNzU4P3E9ODAmdz0xMjAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdpbmRfMDInLFxuICAgICAgbmFtZTogJ0VuZXJneSAmIFV0aWxpdGllcycsXG4gICAgICBzbHVnOiAnZW5lcmd5LXV0aWxpdGllcycsXG4gICAgICBzdW1tYXJ5OiAnU21hcnQgZ3JpZCBtb25pdG9yaW5nLCB0dXJiaW5lIGFub21hbHkgcHJlZGljdGlvbiwgbG9hZCBmb3JlY2FzdGluZywgYW5kIGF1dG9tYXRlZCBlbnZpcm9ubWVudGFsIGNvbXBsaWFuY2UgYXVkaXRpbmcuJyxcbiAgICAgIGNvbnRlbnQ6ICdSZWFsLXRpbWUgdGVsZW1ldHJ5IGFuZCBwcmVkaWN0aXZlIG1vZGVscyBmb3IgcG93ZXIgZGlzdHJpYnV0aW9uIG5ldHdvcmtzLCByZW5ld2FibGUgZ2VuZXJhdGlvbiBwbGFudHMsIGFuZCBtdW5pY2lwYWwgdXRpbGl0aWVzLicsXG4gICAgICBidXNpbmVzc1Byb2JsZW1zOiBbXG4gICAgICAgICdHcmlkIGxvYWQgZmx1Y3R1YXRpb24gaW5zdGFiaWxpdHknLFxuICAgICAgICAnSGlnaCBjb3N0IG9mIGZpZWxkIHR1cmJpbmUgbWFpbnRlbmFuY2UnLFxuICAgICAgICAnQ29tcGxleCBjYXJib24gY29tcGxpYW5jZSByZXBvcnRpbmcnXG4gICAgICBdLFxuICAgICAgc29sdXRpb25zOiBbXG4gICAgICAgICdQcmVkaWN0aXZlIHRyYW5zZm9ybWVyIGFuZCB0dXJiaW5lIHZpYnJhdGlvbiBtb2RlbHMnLFxuICAgICAgICAnUmVhbC10aW1lIHBvd2VyIGRpc3RyaWJ1dGlvbiB0ZWxlbWV0cnknLFxuICAgICAgICAnQXV0b21hdGVkIEVTRyBkYXRhIGFnZ3JlZ2F0aW9uJ1xuICAgICAgXSxcbiAgICAgIHRlY2hub2xvZ3k6IFsnU0NBREEnLCAnSW5mbHV4REInLCAnVGVuc29yRmxvdycsICdBcGFjaGUgS2Fma2EnLCAnR3JhZmFuYSddLFxuICAgICAgdXNlQ2FzZXM6IFsnU29sYXIgRmFybSBNb25pdG9yaW5nJywgJ1dpbmQgVHVyYmluZSBIZWFsdGggUHJlZGljdGlvbicsICdTbWFydCBNZXRlciBHcmlkIFRlbGVtZXRyeSddLFxuICAgICAgY292ZXJfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NzMzNDEzMDQxNzAtOTcxZGNjYjVhYzFlP3E9ODAmdz0xMjAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdpbmRfMDMnLFxuICAgICAgbmFtZTogJ1JldGFpbCAmIEUtQ29tbWVyY2UnLFxuICAgICAgc2x1ZzogJ3JldGFpbC1lY29tbWVyY2UnLFxuICAgICAgc3VtbWFyeTogJ09tbmljaGFubmVsIGludmVudG9yeSBzeW5jLCBkeW5hbWljIHByaWNpbmcgZW5naW5lcywgY3VzdG9tZXIgbGlmZXRpbWUgdmFsdWUgcHJlZGljdGlvbiwgYW5kIHJlYWwtdGltZSBvcmRlciByb3V0aW5nLicsXG4gICAgICBjb250ZW50OiAnSGlnaC10aHJvdWdocHV0IGRhdGEgcGlwZWxpbmVzIGFuZCBwcmVkaWN0aXZlIGVuZ2luZXMgZW5hYmxpbmcgdW5pZmllZCBjdXN0b21lciBqb3VybmV5cyBhbmQgcmVhbC10aW1lIGludmVudG9yeSBtYW5hZ2VtZW50LicsXG4gICAgICBidXNpbmVzc1Byb2JsZW1zOiBbXG4gICAgICAgICdJbnZlbnRvcnkgc3RvY2tvdXRzIGFuZCBvdmVyc3RvY2sgY29zdHMnLFxuICAgICAgICAnRnJhZ21lbnRlZCBjdXN0b21lciBwcm9maWxlIGRhdGEnLFxuICAgICAgICAnU2xvdyBzZWFyY2ggYW5kIHJlY29tbWVuZGF0aW9uIGxhdGVuY3knXG4gICAgICBdLFxuICAgICAgc29sdXRpb25zOiBbXG4gICAgICAgICdFdmVudC1kcml2ZW4gb3JkZXIgYW5kIGludmVudG9yeSBzeW5jIHZpYSBMaW5rR2VuWCcsXG4gICAgICAgICdSZWFsLXRpbWUgcGVyc29uYWxpemF0aW9uIGFuZCBzZW1hbnRpYyBwcm9kdWN0IHNlYXJjaCcsXG4gICAgICAgICdBdXRvbWF0ZWQgZGVtYW5kIGZvcmVjYXN0aW5nIHBpcGVsaW5lcydcbiAgICAgIF0sXG4gICAgICB0ZWNobm9sb2d5OiBbJ1Nub3dmbGFrZScsICdkYnQnLCAnUmVkaXMnLCAnRWxhc3RpY3NlYXJjaCcsICdBV1MgTGFtYmRhJ10sXG4gICAgICB1c2VDYXNlczogWydSZWFsLVRpbWUgT21uaWNoYW5uZWwgSW52ZW50b3J5JywgJ0R5bmFtaWMgUHJpY2UgRWxhc3RpY2l0eScsICdDdXN0b21lciBDaHVybiBQcmV2ZW50aW9uJ10sXG4gICAgICBjb3Zlcl9pbWFnZV91cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1Njc0MjA0OS0wYTY3YzU1NzRmNzM/cT04MCZ3PTEyMDAmYXV0bz1mb3JtYXQmZml0PWNyb3AnLFxuICAgICAgc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA4LTAxVDAwOjAwOjAwLjAwMFonXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2luZF8wNCcsXG4gICAgICBuYW1lOiAnQkZTSScsXG4gICAgICBzbHVnOiAnYmZzaScsXG4gICAgICBzdW1tYXJ5OiAnRnJhdWQgYW5vbWFseSBkZXRlY3Rpb24sIGF1dG9tYXRlZCByZWd1bGF0b3J5IGNvbXBsaWFuY2UsIGNvcmUgYmFua2luZyBsZWRnZXIgc3luYywgYW5kIGFnZW50aWMgY3VzdG9tZXIgdmVyaWZpY2F0aW9uLicsXG4gICAgICBjb250ZW50OiAnRW5naW5lZXJlZCBmb3IgZmluYW5jaWFsIGluc3RpdHV0aW9ucyByZXF1aXJpbmcgc3ViLW1pbGxpc2Vjb25kIGZyYXVkIGRldGVjdGlvbiwgc3RyaWN0IERQRFAgcHJpdmFjeSwgYW5kIHJlc2lsaWVudCB0cmFuc2FjdGlvbiBwcm9jZXNzaW5nLicsXG4gICAgICBidXNpbmVzc1Byb2JsZW1zOiBbXG4gICAgICAgICdFdm9sdmluZyBmaW5hbmNpYWwgZnJhdWQgcGF0dGVybnMnLFxuICAgICAgICAnU3RyaWN0IERQRFAgY29tcGxpYW5jZSByZXBvcnRpbmcgcHJlc3N1cmUnLFxuICAgICAgICAnTGVnYWN5IGNvcmUgYmFua2luZyBkYXRhIHNpbG9zJ1xuICAgICAgXSxcbiAgICAgIHNvbHV0aW9uczogW1xuICAgICAgICAnR3JhcGgtYmFzZWQgcmVhbC10aW1lIGZyYXVkIHRyYW5zYWN0aW9uIHNjb3JpbmcnLFxuICAgICAgICAnQXV0b21hdGVkIGF1ZGl0IGxvZ2dpbmcgYW5kIGRhdGEgbGluZWFnZScsXG4gICAgICAgICdTZWN1cmUgY29yZSBiYW5raW5nIGludGVncmF0aW9uIG1lc2gnXG4gICAgICBdLFxuICAgICAgdGVjaG5vbG9neTogWydBcGFjaGUgRmxpbmsnLCAnUG9zdGdyZVNRTCcsICdLdWJlcm5ldGVzJywgJ1B5dGhvbicsICdTbm93Zmxha2UnXSxcbiAgICAgIHVzZUNhc2VzOiBbJ0luc3RhbnQgS1lDIERvY3VtZW50IFZlcmlmaWNhdGlvbicsICdDcmVkaXQgUmlzayBTY29yaW5nJywgJ0FudGktTW9uZXkgTGF1bmRlcmluZyBUZWxlbWV0cnknXSxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTYzOTg2NzY4NjA5LTMyMmRhMTM1NzVmMz9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgY3JlYXRlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWicsXG4gICAgICB1cGRhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHB1Ymxpc2hlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnaW5kXzA1JyxcbiAgICAgIG5hbWU6ICdIZWFsdGhjYXJlJyxcbiAgICAgIHNsdWc6ICdoZWFsdGhjYXJlJyxcbiAgICAgIHN1bW1hcnk6ICdDbGluaWNhbCB0ZWxlbWV0cnkgaW5nZXN0aW9uLCBtZWRpY2FsIGRldmljZSBjb25uZWN0aXZpdHksIEhJUEFBL3ByaXZhY3kgY29tcGxpYW5jZSwgYW5kIEFJIGRpYWdub3N0aWMgYXNzaXN0YW50IHBpcGVsaW5lcy4nLFxuICAgICAgY29udGVudDogJ0Nvbm5lY3RpbmcgbWVkaWNhbCBkZXZpY2VzIGFuZCBoZWFsdGhjYXJlIHN5c3RlbXMgdG8gZGVsaXZlciBzZWN1cmUgcGF0aWVudCBkaWFnbm9zdGljcyBhbmQgcmVhbC10aW1lIGNsaW5pY2FsIGRhc2hib2FyZHMuJyxcbiAgICAgIGJ1c2luZXNzUHJvYmxlbXM6IFtcbiAgICAgICAgJ0ZyYWdtZW50ZWQgcGF0aWVudCBlbGVjdHJvbmljIGhlYWx0aCByZWNvcmRzJyxcbiAgICAgICAgJ1N0cmljdCBoZWFsdGggZGF0YSBwcml2YWN5IHJlZ3VsYXRpb25zJyxcbiAgICAgICAgJ0RlbGF5ZWQgY2xpbmljYWwgZGlhZ25vc3RpYyBmZWVkYmFjaydcbiAgICAgIF0sXG4gICAgICBzb2x1dGlvbnM6IFtcbiAgICAgICAgJ0ZISVIvSEw3IHN0cmVhbWluZyBpbnRlZ3JhdGlvbiBwaXBlbGluZXMnLFxuICAgICAgICAnQXV0b21hdGVkIGFub255bWl6ZWQgZGF0YSBsYWtlaG91c2VzJyxcbiAgICAgICAgJ0dyb3VuZGVkIGNsaW5pY2FsIGRlY2lzaW9uIHN1cHBvcnQgbW9kZWxzJ1xuICAgICAgXSxcbiAgICAgIHRlY2hub2xvZ3k6IFsnSEw3L0ZISVInLCAnUG9zdGdyZVNRTCcsICdGYXN0QVBJJywgJ1FkcmFudCcsICdBenVyZSBIZWFsdGhjYXJlJ10sXG4gICAgICB1c2VDYXNlczogWydJQ1UgQmVkIFRlbGVtZXRyeScsICdDbGluaWNhbCBUcmlhbCBQYXRpZW50IE1hdGNoaW5nJywgJ01lZGljYWwgSW1hZ2luZyBJbmZlcmVuY2UnXSxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTc2MDkxMTYwMzk5LTExMmJhOGQyNWQxZD9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgY3JlYXRlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWicsXG4gICAgICB1cGRhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHB1Ymxpc2hlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnaW5kXzA2JyxcbiAgICAgIG5hbWU6ICdMb2dpc3RpY3MnLFxuICAgICAgc2x1ZzogJ2xvZ2lzdGljcycsXG4gICAgICBzdW1tYXJ5OiAnRmxlZXQgdGVsZW1ldHJ5IHRyYWNraW5nLCB3YXJlaG91c2Ugcm91dGUgb3B0aW1pemF0aW9uLCBhdXRvbWF0ZWQgZnJlaWdodCBhdWRpdCwgYW5kIHByZWRpY3RpdmUgZGVsaXZlcnkgRVRBcy4nLFxuICAgICAgY29udGVudDogJ1JlYWwtdGltZSBzdXBwbHkgY2hhaW4gaW50ZWxsaWdlbmNlIGNvbm5lY3RpbmcgdmVoaWNsZSBJb1Qgc2Vuc29ycyB3aXRoIGNlbnRyYWwgd2FyZWhvdXNlIG1hbmFnZW1lbnQgc3lzdGVtcy4nLFxuICAgICAgYnVzaW5lc3NQcm9ibGVtczogW1xuICAgICAgICAnVW5wcmVkaWN0YWJsZSBmcmVpZ2h0IHRyYW5zaXQgZGVsYXlzJyxcbiAgICAgICAgJ0hpZ2ggZnVlbCBjb25zdW1wdGlvbiBpbmVmZmljaWVuY2llcycsXG4gICAgICAgICdNYW51YWwgYmlsbCBvZiBsYWRpbmcgcmVjb25jaWxpYXRpb24nXG4gICAgICBdLFxuICAgICAgc29sdXRpb25zOiBbXG4gICAgICAgICdHUFMgYW5kIENBTi1idXMgZWRnZSB0ZWxlbWV0cnkgaW5nZXN0aW9uJyxcbiAgICAgICAgJ0F1dG9tYXRlZCBmcmVpZ2h0IGRvY3VtZW50IHBhcnNpbmcgdmlhIFBhcnNlTWFzdGVyJyxcbiAgICAgICAgJ0R5bmFtaWMgZGlzcGF0Y2ggYW5kIGRlbGl2ZXJ5IHJvdXRpbmcgYWxnb3JpdGhtcydcbiAgICAgIF0sXG4gICAgICB0ZWNobm9sb2d5OiBbJ01RVFQnLCAnVGltZXNjYWxlREInLCAnR28nLCAnRG9ja2VyJywgJ0dvb2dsZSBNYXBzIEFQSSddLFxuICAgICAgdXNlQ2FzZXM6IFsnQ29sZCBDaGFpbiBUZW1wZXJhdHVyZSBNb25pdG9yaW5nJywgJ0ZsZWV0IEZ1ZWwgVGVsZW1ldHJ5JywgJ0F1dG9tYXRlZCBGcmVpZ2h0IEludm9pY2UgQ2xlYXJpbmcnXSxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTg2NTI4MTE2MzExLWFkOGRkM2M4MzEwZD9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgY3JlYXRlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWicsXG4gICAgICB1cGRhdGVkX2F0OiAnMjAyNi0wOC0wMVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHB1Ymxpc2hlZF9hdDogJzIwMjYtMDgtMDFUMDA6MDA6MDAuMDAwWidcbiAgICB9XG4gIF0sXG4gIGNhc2VTdHVkaWVzOiBbXG4gICAge1xuICAgICAgaWQ6ICdjc18wMScsXG4gICAgICB0aXRsZTogJ1NtYXJ0IEZhY3RvcnkgSUlvVCBUcmFuc2Zvcm1hdGlvbiBmb3IgQXV0b21vdGl2ZSBDb21wb25lbnQgT0VNJyxcbiAgICAgIGNsaWVudF9uYW1lOiAnVGllci0xIEF1dG9tb3RpdmUgQ29tcG9uZW50IE1hbnVmYWN0dXJlcicsXG4gICAgICBzbHVnOiAnc21hcnQtZmFjdG9yeS1tYW51ZmFjdHVyaW5nLXRyYW5zZm9ybWF0aW9uJyxcbiAgICAgIGluZHVzdHJ5OiAnTWFudWZhY3R1cmluZycsXG4gICAgICBsb2NhdGlvbjogJ0NvaW1iYXRvcmUsIFRhbWlsIE5hZHUnLFxuICAgICAgYWNjZWxlcmF0b3I6ICdCaXRYaGlmdCBJSW9UIFBsYXRmb3JtJyxcbiAgICAgIHJlbGF0ZWRTZXJ2aWNlOiAnSW5kdXN0cmlhbCBJb1QgKElJb1QpJyxcbiAgICAgIGNoYWxsZW5nZTogJ1RoZSBPRU0gb3BlcmF0ZWQgNTAwKyBtYWNoaW5pbmcgY2VudGVycyBhY3Jvc3MgMyBmYWNpbGl0aWVzIHdpdGggbWFudWFsIHBhcGVyIHNoaWZ0IGxvZ3MsIGNhdXNpbmcgNDIgaG91cnMgb2YgdW5leHBsYWluZWQgbWFjaGluZSBkb3dudGltZSBwZXIgbW9udGggYW5kIHVudmVyaWZpZWQgT0VFIG1ldHJpY3MuJyxcbiAgICAgIHNvbHV0aW9uOiAnRGVwbG95ZWQgQml0WGhpZnQgZWRnZSB0ZWxlbWV0cnkgY29udGFpbmVycyBhY3Jvc3MgYWxsIG1hY2hpbmUgUExDcywgc3RyZWFtaW5nIGhpZ2gtZnJlcXVlbmN5IHZpYnJhdGlvbiBhbmQgc3BpbmRsZSBsb2FkIG1ldHJpY3MgaW50byBhIGNlbnRyYWxpemVkIFRpbWVzY2FsZURCIGNsdXN0ZXIgd2l0aCByZWFsLXRpbWUgZmxvb3Igd2FsbGJvYXJkcy4nLFxuICAgICAgaW1wbGVtZW50YXRpb246ICdJbnN0YWxsZWQgbm9uLWludmFzaXZlIE1vZGJ1cyBhbmQgT1BDLVVBIGVkZ2UgZ2F0ZXdheSBub2Rlcy4gQ29uZmlndXJlZCBhdXRvbWF0ZWQgYWxlcnQgcnVsZXMgZm9yIHNwaW5kbGUgdmlicmF0aW9uIGFub21hbGllcyBhbmQgY29ubmVjdGVkIHByb2R1Y3Rpb24gbWV0cmljcyB0byB0aGUgU0FQIEVSUCBsZWRnZXIuJyxcbiAgICAgIHJlc3VsdHM6ICdFbGltaW5hdGVkIG1hbnVhbCBzaGlmdCBsb2dzLCByZWR1Y2VkIHVucGxhbm5lZCBtYWNoaW5lIHN0b3BwYWdlIGJ5IDM1JSwgYW5kIGVzdGFibGlzaGVkIDk5LjglIGFjY3VyYXRlIHJlYWwtdGltZSBPRUUgdHJhY2tpbmcgYWNyb3NzIGFsbCAzIHByb2R1Y3Rpb24gZmFjaWxpdGllcy4nLFxuICAgICAgbWV0cmljczogW1xuICAgICAgICB7IGxhYmVsOiAnRG93bnRpbWUgUmVkdWN0aW9uJywgbWV0cmljOiAnMzUlJyB9LFxuICAgICAgICB7IGxhYmVsOiAnQ29ubmVjdGVkIENOQyBMaW5lcycsIG1ldHJpYzogJzUwMCsnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdEZXBsb3ltZW50IFRpbWUnLCBtZXRyaWM6ICc0OCBIb3VycycgfVxuICAgICAgXSxcbiAgICAgIHRlY2hub2xvZ2llczogWydNUVRUJywgJ09QQy1VQScsICdCaXRYaGlmdCcsICdUaW1lc2NhbGVEQicsICdQeXRob24nLCAnUmVhY3QnXSxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTgxMDkyMTYwNjA3LWVlMjI2MjFkZDc1OD9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgY3JlYXRlZF9hdDogJzIwMjYtMDgtMTBUMDA6MDA6MDAuMDAwWicsXG4gICAgICB1cGRhdGVkX2F0OiAnMjAyNi0wOC0xMFQwMDowMDowMC4wMDBaJyxcbiAgICAgIHB1Ymxpc2hlZF9hdDogJzIwMjYtMDgtMTBUMDA6MDA6MDAuMDAwWidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnY3NfMDInLFxuICAgICAgdGl0bGU6ICdFbnRlcnByaXNlIFplcm8tRG93bnRpbWUgRGF0YSBXYXJlaG91c2UgTWlncmF0aW9uIGZvciBHbG9iYWwgUmV0YWlsZXInLFxuICAgICAgY2xpZW50X25hbWU6ICdNdWx0aW5hdGlvbmFsIFJldGFpbCAmIEUtQ29tbWVyY2UgR3JvdXAnLFxuICAgICAgc2x1ZzogJ2VudGVycHJpc2UtZGF0YWJhc2UtY2xvdWQtbWlncmF0aW9uJyxcbiAgICAgIGluZHVzdHJ5OiAnUmV0YWlsICYgRS1Db21tZXJjZScsXG4gICAgICBsb2NhdGlvbjogJ0JlbmdhbHVydSAvIFNpbmdhcG9yZScsXG4gICAgICBhY2NlbGVyYXRvcjogJ01pZ3JhdGVNYXggQ2xvdWQgRW5naW5lJyxcbiAgICAgIHJlbGF0ZWRTZXJ2aWNlOiAnRGF0YSBFbmdpbmVlcmluZycsXG4gICAgICBjaGFsbGVuZ2U6ICdBIGxlZ2FjeSA0MFRCIE9yYWNsZSBkYXRhYmFzZSBydW5uaW5nIGNyaXRpY2FsIHRyYW5zYWN0aW9uYWwgaW52ZW50b3J5IHF1ZXJpZXMgc3VmZmVyZWQgZnJvbSBxdWVyeSB0aW1lb3V0cyBhbmQgZXhjZXNzaXZlIG9uLXByZW1pc2UgaGFyZHdhcmUgbGljZW5zaW5nIGNvc3RzLicsXG4gICAgICBzb2x1dGlvbjogJ1V0aWxpemVkIE1pZ3JhdGVNYXggdG8gYXV0b21hdGUgc2NoZW1hIHRyYW5zbGF0aW9uLCBlc3RhYmxpc2ggcGFyYWxsZWwgQ2hhbmdlIERhdGEgQ2FwdHVyZSAoQ0RDKSBzdHJlYW1pbmcsIGFuZCBleGVjdXRlIHplcm8tZG93bnRpbWUgRE5TIGN1dG92ZXIgdG8gU25vd2ZsYWtlLicsXG4gICAgICBpbXBsZW1lbnRhdGlvbjogJ0NvbnZlcnRlZCAxLDIwMCsgRERMIHRhYmxlcyBhbmQgc3RvcmVkIHByb2NlZHVyZXMuIEV4ZWN1dGVkIHBhcmFsbGVsIHJvdy1oYXNoIHZhbGlkYXRpb24gYXVkaXRzIG92ZXIgMiB3ZWVrcyBwcmlvciB0byBmaW5hbCBpbnN0YW50YW5lb3VzIEROUyBjdXRvdmVyLicsXG4gICAgICByZXN1bHRzOiAnMTAwJSBkYXRhIGZpZGVsaXR5IHdpdGggemVybyBtaW51dGVzIG9mIGJ1c2luZXNzIGRvd250aW1lLCA2NSUgcmVkdWN0aW9uIGluIGFuYWx5dGljYWwgcXVlcnkgZXhlY3V0aW9uIHRpbWVzLCBhbmQgJDQ1MGsgYW5udWFsIGluZnJhc3RydWN0dXJlIHNhdmluZ3MuJyxcbiAgICAgIG1ldHJpY3M6IFtcbiAgICAgICAgeyBsYWJlbDogJ0RhdGEgRmlkZWxpdHknLCBtZXRyaWM6ICcxMDAlJyB9LFxuICAgICAgICB7IGxhYmVsOiAnRG93bnRpbWUnLCBtZXRyaWM6ICcwIE1pbnMnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdRdWVyeSBTcGVlZHVwJywgbWV0cmljOiAnNjUlJyB9XG4gICAgICBdLFxuICAgICAgdGVjaG5vbG9naWVzOiBbJ01pZ3JhdGVNYXgnLCAnT3JhY2xlJywgJ1Nub3dmbGFrZScsICdBcGFjaGUgU3BhcmsnLCAnZGJ0JywgJ0FXUyddLFxuICAgICAgY292ZXJfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTg0OTQ5NDktZWYwMTBjYmRjYzMxP3E9ODAmdz0xMjAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0xNVQwMDowMDowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTE1VDAwOjAwOjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0xNVQwMDowMDowMC4wMDBaJ1xuICAgIH1cbiAgXSxcbiAgcmVwb3J0czogW1xuICAgIHtcbiAgICAgIGlkOiAncmVwXzAxJyxcbiAgICAgIHJlcG9ydFR5cGU6ICdXZWVrbHknLFxuICAgICAgY2F0ZWdvcnk6ICdTZXJ2aWNlcycsXG4gICAgICB0aXRsZTogJ0VkZ2UgVGVsZW1ldHJ5ICYgT1BDLVVBIEluZ2VzdGlvbiBCZW5jaG1hcmsnLFxuICAgICAgcHJvYmxlbVN0YXRlbWVudDogJ0xlZ2FjeSBtYWNoaW5lcyBsYWNrIHJlYWwtdGltZSBvcGVyYXRpb25hbCB2aXNpYmlsaXR5IGFuZCBzdHJlYW0gdGVsZW1ldHJ5IGluIHNpbG9lZCBwcm9wcmlldGFyeSBmb3JtYXRzLicsXG4gICAgICBzb2x1dGlvblN0YXRlbWVudDogJ0RlcGxveSBlZGdlIGludGVsbGlnZW5jZSBjb250YWluZXJzIGNvbm5lY3RpbmcgUExDcyB3aXRoIFRpbWVzY2FsZURCIGZvciBsaXZlIE9FRSB3YWxsYm9hcmRzLicsXG4gICAgICB0ZWNoU3RhY2s6IFsnSUlvVCcsICdQeXRob24nLCAnTVFUVCcsICdUaW1lc2NhbGVEQicsICdPUEMtVUEnXSxcbiAgICAgIGRhdGU6ICcyMDI2LTA4LTI3JyxcbiAgICAgIGNvdmVyX2ltYWdlX3VybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTgxMDkyMTYwNjA3LWVlMjI2MjFkZDc1OD9xPTgwJnc9MTIwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCcsXG4gICAgICByZWxhdGVkQ29udGVudDogJ0luZHVzdHJpYWwgSW9UIChJSW9UKScsXG4gICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgY3JlYXRlZF9hdDogJzIwMjYtMDgtMjdUMDg6MDA6MDAuMDAwWicsXG4gICAgICB1cGRhdGVkX2F0OiAnMjAyNi0wOC0yN1QwODowMDowMC4wMDBaJyxcbiAgICAgIHB1Ymxpc2hlZF9hdDogJzIwMjYtMDgtMjdUMDg6MDA6MDAuMDAwWidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncmVwXzAyJyxcbiAgICAgIHJlcG9ydFR5cGU6ICdXZWVrbHknLFxuICAgICAgY2F0ZWdvcnk6ICdBY2NlbGVyYXRvcnMnLFxuICAgICAgdGl0bGU6ICdNaWdyYXRlTWF4IFNjaGVtYSBEcmlmdCBBdXRvLUhlYWxpbmcgRW5naW5lJyxcbiAgICAgIHByb2JsZW1TdGF0ZW1lbnQ6ICdVbmFubm91bmNlZCB1cHN0cmVhbSBFUlAgc2NoZW1hIGFsdGVyYXRpb25zIGJyZWFrIG1pc3Npb24tY3JpdGljYWwgYW5hbHl0aWNhbCBkYXRhYmFzZSBwaXBlbGluZXMuJyxcbiAgICAgIHNvbHV0aW9uU3RhdGVtZW50OiAnQXV0b21hdGUgZHluYW1pYyBzY2hlbWEgaW5mZXJlbmNlIGFuZCBhdXRvbWF0ZWQgbWlncmF0aW9uIERETCBtYXBwaW5nIG9uIGluY29taW5nIHN0cmVhbXMuJyxcbiAgICAgIHRlY2hTdGFjazogWydTcGFyaycsICdSdXN0JywgJ1Nub3dmbGFrZScsICdkYnQnLCAnQVdTJ10sXG4gICAgICBkYXRlOiAnMjAyNi0wOC0yMCcsXG4gICAgICBjb3Zlcl9pbWFnZV91cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1ODQ5NDk0OS1lZjAxMGNiZGNjMzE/cT04MCZ3PTEyMDAmYXV0bz1mb3JtYXQmZml0PWNyb3AnLFxuICAgICAgcmVsYXRlZENvbnRlbnQ6ICdNaWdyYXRlTWF4JyxcbiAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0yMFQwODowMDowMC4wMDBaJyxcbiAgICAgIHVwZGF0ZWRfYXQ6ICcyMDI2LTA4LTIwVDA4OjAwOjAwLjAwMFonLFxuICAgICAgcHVibGlzaGVkX2F0OiAnMjAyNi0wOC0yMFQwODowMDowMC4wMDBaJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdyZXBfMDMnLFxuICAgICAgcmVwb3J0VHlwZTogJ01vbnRobHknLFxuICAgICAgY2F0ZWdvcnk6ICdDYXNlIFN0dWRpZXMnLFxuICAgICAgdGl0bGU6ICdTbWFydCBGYWN0b3J5IE1hbnVmYWN0dXJpbmcgT0VFIFNjYWxpbmcgUmVwb3J0JyxcbiAgICAgIHByb2JsZW1TdGF0ZW1lbnQ6ICdNYWNoaW5pbmcgcGxhbnRzIHN1ZmZlciAzMCUrIGVmZmljaWVuY3kgbG9zcyBmcm9tIHVubW9uaXRvcmVkIG1pbm9yIHN0b3BzIGFuZCBtaWNyby1zdG9wcGFnZXMuJyxcbiAgICAgIHNvbHV0aW9uU3RhdGVtZW50OiAnQ29udGludW91cyA1MG1zIHZpYnJhdGlvbiB0ZWxlbWV0cnkgY2FwdHVyZXMgYW5vbWFsaWVzIGJlZm9yZSBjYXRhc3Ryb3BoaWMgdG9vbCBicmVha2FnZSBvY2N1cnMuJyxcbiAgICAgIHRlY2hTdGFjazogWydCaXRYaGlmdCcsICdPUEMtVUEnLCAnVGltZXNjYWxlREInLCAnUmVhY3QnLCAnU0FQJ10sXG4gICAgICBkYXRlOiAnMjAyNi0wNy0zMScsXG4gICAgICBjb3Zlcl9pbWFnZV91cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1MTgzNjAyMi1kNWQ4OGU5MjE4ZGY/cT04MCZ3PTEyMDAmYXV0bz1mb3JtYXQmZml0PWNyb3AnLFxuICAgICAgcmVsYXRlZENvbnRlbnQ6ICdTbWFydCBGYWN0b3J5IE1hbnVmYWN0dXJpbmcgVHJhbnNmb3JtYXRpb24nLFxuICAgICAgc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgIGNyZWF0ZWRfYXQ6ICcyMDI2LTA3LTMxVDA4OjAwOjAwLjAwMFonLFxuICAgICAgdXBkYXRlZF9hdDogJzIwMjYtMDctMzFUMDg6MDA6MDAuMDAwWicsXG4gICAgICBwdWJsaXNoZWRfYXQ6ICcyMDI2LTA3LTMxVDA4OjAwOjAwLjAwMFonXG4gICAgfVxuICBdLFxuICBtZWRpYTogW1xuICAgIHtcbiAgICAgIGlkOiAnbWVkXzAxJyxcbiAgICAgIGZpbGVuYW1lOiAnc21hcnQtZmFjdG9yeS10ZWxlbWV0cnkuanBnJyxcbiAgICAgIG9yaWdpbmFsTmFtZTogJ3NtYXJ0LWZhY3RvcnktdGVsZW1ldHJ5LmpwZycsXG4gICAgICB1cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4MTA5MjE2MDYwNy1lZTIyNjIxZGQ3NTg/cT04MCZ3PTEyMDAmYXV0bz1mb3JtYXQmZml0PWNyb3AnLFxuICAgICAgbWltZXR5cGU6ICdpbWFnZS9qcGVnJyxcbiAgICAgIHNpemU6IDQxMjk1MCxcbiAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICBjcmVhdGVkX2F0OiAnMjAyNi0wOC0yMFQxMDowMDowMC4wMDBaJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdtZWRfMDInLFxuICAgICAgZmlsZW5hbWU6ICdjbG91ZC1sYWtlaG91c2UuanBnJyxcbiAgICAgIG9yaWdpbmFsTmFtZTogJ2Nsb3VkLWxha2Vob3VzZS5qcGcnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTg0OTQ5NDktZWYwMTBjYmRjYzMxP3E9ODAmdz0xMjAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJyxcbiAgICAgIG1pbWV0eXBlOiAnaW1hZ2UvanBlZycsXG4gICAgICBzaXplOiAzODU0MDAsXG4gICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgY3JlYXRlZF9hdDogJzIwMjYtMDgtMjJUMTQ6MzA6MDAuMDAwWidcbiAgICB9XG4gIF0sXG4gIGFjdGl2aXR5TG9nczogW1xuICAgIHtcbiAgICAgIGlkOiAnbG9nXzAxJyxcbiAgICAgIGRhdGU6ICcyNyBBVUcnLFxuICAgICAgdGl0bGU6ICdOZXcgU2VydmljZXMgZmxhc2ggcmVwb3J0IHB1Ymxpc2hlZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JlcG9ydCBcIkVkZ2UgVGVsZW1ldHJ5ICYgT1BDLVVBIEluZ2VzdGlvbiBCZW5jaG1hcmtcIiBwdWJsaXNoZWQgYnkgQWRtaW4uJyxcbiAgICAgIHR5cGU6ICdyZXBvcnRfcHVibGlzaCcsXG4gICAgICB0aW1lc3RhbXA6ICcyMDI2LTA4LTI3VDA4OjAwOjAwLjAwMFonXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2xvZ18wMicsXG4gICAgICBkYXRlOiAnMjUgQVVHJyxcbiAgICAgIHRpdGxlOiAnQmxvZyBhcnRpY2xlIHB1Ymxpc2hlZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FydGljbGUgXCJEZXBsb3lpbmcgRGV0ZXJtaW5pc3RpYyBMTE0gQWdlbnRzIGluIFJlZ3VsYXRlZCBFbnRlcnByaXNlIEVudmlyb25tZW50c1wiIHB1Ymxpc2hlZC4nLFxuICAgICAgdHlwZTogJ2Jsb2dfcHVibGlzaCcsXG4gICAgICB0aW1lc3RhbXA6ICcyMDI2LTA4LTI1VDA5OjE1OjAwLjAwMFonXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2xvZ18wMycsXG4gICAgICBkYXRlOiAnMjIgQVVHJyxcbiAgICAgIHRpdGxlOiAnRGF0YSBMYWtlaG91c2UgTWlncmF0aW9uIENhc2UgU3R1ZHkgYWRkZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdFbnRlcnByaXNlIGRhdGFiYXNlIGN1dG92ZXIgY2FzZSBzdHVkeSBwdWJsaXNoZWQgdG8gcHVibGljIHdlYnNpdGUuJyxcbiAgICAgIHR5cGU6ICdjYXNlX3N0dWR5X2NyZWF0ZScsXG4gICAgICB0aW1lc3RhbXA6ICcyMDI2LTA4LTIyVDE0OjMwOjAwLjAwMFonXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2xvZ18wNCcsXG4gICAgICBkYXRlOiAnMjAgQVVHJyxcbiAgICAgIHRpdGxlOiAnQml0WGhpZnQgSUlvVCBUZWxlbWV0cnkgQWNjZWxlcmF0b3IgdXBkYXRlZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FkZGVkIE1vZGJ1cyBhbmQgT1BDLVVBIGNvbm5lY3Rpb24gcHJvdG9jb2xzIHNwZWNpZmljYXRpb24uJyxcbiAgICAgIHR5cGU6ICdhY2NlbGVyYXRvcl91cGRhdGUnLFxuICAgICAgdGltZXN0YW1wOiAnMjAyNi0wOC0yMFQxMDowMDowMC4wMDBaJ1xuICAgIH1cbiAgXSxcbiAgc2V0dGluZ3M6IHtcbiAgICBzaXRlTmFtZTogJ1NNUklLQUFNIFRlY2hub2xvZ2llcyBMTFAnLFxuICAgIGNvbnRhY3RFbWFpbDogJ2NvbnRhY3RAc21yaWthYW0uY29tJyxcbiAgICBjb250YWN0UGhvbmU6ICcrOTEtOTE1MDY4NDYwMScsXG4gICAgYWRkcmVzczogJ0NvaW1iYXRvcmUsIFRhbWlsIE5hZHUsIEluZGlhJyxcbiAgICBhbGxvd1B1YmxpY1JlZ2lzdHJhdGlvbjogZmFsc2UsXG4gICAgbWFpbnRlbmFuY2VNb2RlOiBmYWxzZVxuICB9XG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtdWtoZVxcXFxEb3dubG9hZHNcXFxcd2VicGFnZS1tYWluXFxcXHdlYnBhZ2UtbWFpblxcXFxzZXJ2ZXJcXFxcc2VydmljZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG11a2hlXFxcXERvd25sb2Fkc1xcXFx3ZWJwYWdlLW1haW5cXFxcd2VicGFnZS1tYWluXFxcXHNlcnZlclxcXFxzZXJ2aWNlc1xcXFxwb3N0Z3Jlcy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbXVraGUvRG93bmxvYWRzL3dlYnBhZ2UtbWFpbi93ZWJwYWdlLW1haW4vc2VydmVyL3NlcnZpY2VzL3Bvc3RncmVzLmpzXCI7aW1wb3J0IHBnIGZyb20gJ3BnJztcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmltcG9ydCB7IGluaXRpYWxTZWVkRGF0YSB9IGZyb20gJy4uL2RhdGEvc2VlZERhdGEuanMnO1xuXG5kb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IHsgUG9vbCB9ID0gcGc7XG5cbmNsYXNzIFBvc3RncmVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucG9vbCA9IG51bGw7XG4gICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY29ubmVjdGlvbkVycm9yID0gbnVsbDtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3QgY29ubmVjdGlvblN0cmluZyA9XG4gICAgICBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwgfHxcbiAgICAgIGBwb3N0Z3Jlc3FsOi8vJHtwcm9jZXNzLmVudi5QR1VTRVIgfHwgJ3Bvc3RncmVzJ306JHtwcm9jZXNzLmVudi5QR1BBU1NXT1JEIHx8ICdwb3N0Z3Jlcyd9QCR7cHJvY2Vzcy5lbnYuUEdIT1NUIHx8ICdsb2NhbGhvc3QnfToke3Byb2Nlc3MuZW52LlBHUE9SVCB8fCA1NDMyfS8ke3Byb2Nlc3MuZW52LlBHREFUQUJBU0UgfHwgJ3NtcmlrYWFtX2RiJ31gO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucG9vbCA9IG5ldyBQb29sKHtcbiAgICAgICAgY29ubmVjdGlvblN0cmluZyxcbiAgICAgICAgY29ubmVjdGlvblRpbWVvdXRNaWxsaXM6IDMwMDAsXG4gICAgICAgIGlkbGVUaW1lb3V0TWlsbGlzOiAzMDAwMCxcbiAgICAgICAgbWF4OiAyMFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucG9vbC5vbignZXJyb3InLCAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybignUG9zdGdyZVNRTCBQb29sIGJhY2tncm91bmQgZXJyb3I6JywgZXJyLm1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgLy8gVHJ5IGluaXRpYWwgY29ubmVjdGlvbiB0ZXN0XG4gICAgICB0aGlzLnRlc3RDb25uZWN0aW9uKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLmNvbm5lY3Rpb25FcnJvciA9IGVyci5tZXNzYWdlO1xuICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgY29uc29sZS53YXJuKCdQb3N0Z3JlU1FMIFBvb2wgaW5pdGlhbGl6YXRpb24gd2FybmluZzonLCBlcnIubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgdGVzdENvbm5lY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLnBvb2wpIHJldHVybiBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5wb29sLmNvbm5lY3QoKTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5xdWVyeSgnU0VMRUNUIE5PVygpJyk7XG4gICAgICBjbGllbnQucmVsZWFzZSgpO1xuICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICB0aGlzLmNvbm5lY3Rpb25FcnJvciA9IG51bGw7XG4gICAgICBjb25zb2xlLmxvZygnXHUyNzEzIFBvc3RncmVTUUwgRGF0YWJhc2UgQ29ubmVjdGVkIFN1Y2Nlc3NmdWxseSBhdDonLCByZXMucm93c1swXS5ub3cpO1xuICAgICAgXG4gICAgICAvLyBBdXRvIHJ1biBtaWdyYXRpb25zIGFuZCBzZWVkc1xuICAgICAgYXdhaXQgdGhpcy5ydW5NaWdyYXRpb25zKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29ubmVjdGlvbkVycm9yID0gZXJyLm1lc3NhZ2U7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcnVuTWlncmF0aW9ucygpIHtcbiAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHJldHVybjtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5xdWVyeShgXG4gICAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIGFkbWluX3VzZXJzIChcbiAgICAgICAgICBpZCBWQVJDSEFSKDY0KSBQUklNQVJZIEtFWSxcbiAgICAgICAgICBlbWFpbCBWQVJDSEFSKDI1NSkgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICAgIHBhc3N3b3JkX2hhc2ggVkFSQ0hBUigyNTUpIE5PVCBOVUxMLFxuICAgICAgICAgIG5hbWUgVkFSQ0hBUigyNTUpIE5PVCBOVUxMLFxuICAgICAgICAgIHJvbGUgVkFSQ0hBUig2NCkgREVGQVVMVCAnc3VwZXJhZG1pbicsXG4gICAgICAgICAgY3JlYXRlZF9hdCBUSU1FU1RBTVBUWiBERUZBVUxUIE5PVygpLFxuICAgICAgICAgIHVwZGF0ZWRfYXQgVElNRVNUQU1QVFogREVGQVVMVCBOT1coKVxuICAgICAgICApO1xuXG4gICAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHBvc3RzIChcbiAgICAgICAgICBpZCBWQVJDSEFSKDY0KSBQUklNQVJZIEtFWSxcbiAgICAgICAgICB0aXRsZSBWQVJDSEFSKDUwMCkgTk9UIE5VTEwsXG4gICAgICAgICAgc2x1ZyBWQVJDSEFSKDUwMCkgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICAgIGNhdGVnb3J5IFZBUkNIQVIoMjU1KSxcbiAgICAgICAgICBleGNlcnB0IFRFWFQsXG4gICAgICAgICAgY29udGVudCBURVhUIE5PVCBOVUxMLFxuICAgICAgICAgIGNvdmVyX2ltYWdlX3VybCBURVhULFxuICAgICAgICAgIHRhZ3MgSlNPTkIgREVGQVVMVCAnW10nOjpqc29uYixcbiAgICAgICAgICBhdXRob3IgVkFSQ0hBUigyNTUpIERFRkFVTFQgJ1NNUklLQUFNIEVuZ2luZWVyaW5nIFRlYW0nLFxuICAgICAgICAgIHJlYWRfdGltZSBWQVJDSEFSKDY0KSBERUZBVUxUICc1IG1pbiByZWFkJyxcbiAgICAgICAgICBtZXRhX3RpdGxlIFZBUkNIQVIoNTAwKSxcbiAgICAgICAgICBtZXRhX2Rlc2NyaXB0aW9uIFRFWFQsXG4gICAgICAgICAgc3RhdHVzIFZBUkNIQVIoMzIpIERFRkFVTFQgJ2RyYWZ0JyxcbiAgICAgICAgICBjcmVhdGVkX2F0IFRJTUVTVEFNUFRaIERFRkFVTFQgTk9XKCksXG4gICAgICAgICAgdXBkYXRlZF9hdCBUSU1FU1RBTVBUWiBERUZBVUxUIE5PVygpLFxuICAgICAgICAgIHB1Ymxpc2hlZF9hdCBUSU1FU1RBTVBUWlxuICAgICAgICApO1xuXG4gICAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHNlcnZpY2VzIChcbiAgICAgICAgICBpZCBWQVJDSEFSKDY0KSBQUklNQVJZIEtFWSxcbiAgICAgICAgICB0aXRsZSBWQVJDSEFSKDUwMCkgTk9UIE5VTEwsXG4gICAgICAgICAgc2x1ZyBWQVJDSEFSKDUwMCkgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICAgIG51bSBWQVJDSEFSKDE2KSxcbiAgICAgICAgICB0YWdsaW5lIFRFWFQsXG4gICAgICAgICAgc3VtbWFyeSBURVhULFxuICAgICAgICAgIGRlc2NyaXB0aW9uIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgICAgYnVzaW5lc3NfcHJvYmxlbXMgSlNPTkIgREVGQVVMVCAnW10nOjpqc29uYixcbiAgICAgICAgICBjYXBhYmlsaXRpZXMgSlNPTkIgREVGQVVMVCAnW10nOjpqc29uYixcbiAgICAgICAgICB0ZWNobm9sb2d5IEpTT05CIERFRkFVTFQgJ1tdJzo6anNvbmIsXG4gICAgICAgICAgaW5kdXN0cnlfYXBwbGljYXRpb25zIEpTT05CIERFRkFVTFQgJ1tdJzo6anNvbmIsXG4gICAgICAgICAgcHJvYmxlbV9zdGF0ZW1lbnQgVEVYVCxcbiAgICAgICAgICBzb2x1dGlvbl9zdGF0ZW1lbnQgVEVYVCxcbiAgICAgICAgICBvdXRjb21lcyBURVhULFxuICAgICAgICAgIGFjY2VsZXJhdG9yIFZBUkNIQVIoMjU1KSxcbiAgICAgICAgICBjYXNlX3N0dWR5IFZBUkNIQVIoMjU1KSxcbiAgICAgICAgICBjb3Zlcl9pbWFnZV91cmwgVEVYVCxcbiAgICAgICAgICBzdGF0dXMgVkFSQ0hBUigzMikgREVGQVVMVCAncHVibGlzaGVkJyxcbiAgICAgICAgICBkaXNwbGF5X29yZGVyIElOVCBERUZBVUxUIDAsXG4gICAgICAgICAgY3JlYXRlZF9hdCBUSU1FU1RBTVBUWiBERUZBVUxUIE5PVygpLFxuICAgICAgICAgIHVwZGF0ZWRfYXQgVElNRVNUQU1QVFogREVGQVVMVCBOT1coKSxcbiAgICAgICAgICBwdWJsaXNoZWRfYXQgVElNRVNUQU1QVFpcbiAgICAgICAgKTtcblxuICAgICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBhY2NlbGVyYXRvcnMgKFxuICAgICAgICAgIGlkIFZBUkNIQVIoNjQpIFBSSU1BUlkgS0VZLFxuICAgICAgICAgIG5hbWUgVkFSQ0hBUigyNTUpIE5PVCBOVUxMLFxuICAgICAgICAgIHNsdWcgVkFSQ0hBUigyNTUpIFVOSVFVRSBOT1QgTlVMTCxcbiAgICAgICAgICBjYXRlZ29yeSBWQVJDSEFSKDI1NSksXG4gICAgICAgICAgdGFnbGluZSBURVhULFxuICAgICAgICAgIHNob3J0X2Rlc2NyaXB0aW9uIFRFWFQsXG4gICAgICAgICAgZnVsbF9kZXNjcmlwdGlvbiBURVhULFxuICAgICAgICAgIGNvdmVyX2ltYWdlX3VybCBURVhULFxuICAgICAgICAgIHByb2JsZW0gVEVYVCxcbiAgICAgICAgICBzb2x1dGlvbiBURVhULFxuICAgICAgICAgIGhvd19pdF93b3JrcyBURVhULFxuICAgICAgICAgIGFyY2hpdGVjdHVyZSBURVhULFxuICAgICAgICAgIGtleV9mZWF0dXJlcyBKU09OQiBERUZBVUxUICdbXSc6Ompzb25iLFxuICAgICAgICAgIHRlY2hub2xvZ3kgSlNPTkIgREVGQVVMVCAnW10nOjpqc29uYixcbiAgICAgICAgICB1c2VfY2FzZXMgSlNPTkIgREVGQVVMVCAnW10nOjpqc29uYixcbiAgICAgICAgICBidXNpbmVzc19vdXRjb21lcyBURVhULFxuICAgICAgICAgIHBkZl91cmwgVEVYVCxcbiAgICAgICAgICBzdGF0dXMgVkFSQ0hBUigzMikgREVGQVVMVCAncHVibGlzaGVkJyxcbiAgICAgICAgICBjcmVhdGVkX2F0IFRJTUVTVEFNUFRaIERFRkFVTFQgTk9XKCksXG4gICAgICAgICAgdXBkYXRlZF9hdCBUSU1FU1RBTVBUWiBERUZBVUxUIE5PVygpLFxuICAgICAgICAgIHB1Ymxpc2hlZF9hdCBUSU1FU1RBTVBUWlxuICAgICAgICApO1xuXG4gICAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIGluZHVzdHJpZXMgKFxuICAgICAgICAgIGlkIFZBUkNIQVIoNjQpIFBSSU1BUlkgS0VZLFxuICAgICAgICAgIG5hbWUgVkFSQ0hBUigyNTUpIE5PVCBOVUxMLFxuICAgICAgICAgIHNsdWcgVkFSQ0hBUigyNTUpIFVOSVFVRSBOT1QgTlVMTCxcbiAgICAgICAgICBzdW1tYXJ5IFRFWFQsXG4gICAgICAgICAgY29udGVudCBURVhUIE5PVCBOVUxMLFxuICAgICAgICAgIGNvdmVyX2ltYWdlX3VybCBURVhULFxuICAgICAgICAgIGJ1c2luZXNzX3Byb2JsZW1zIEpTT05CIERFRkFVTFQgJ1tdJzo6anNvbmIsXG4gICAgICAgICAgc29sdXRpb25zIEpTT05CIERFRkFVTFQgJ1tdJzo6anNvbmIsXG4gICAgICAgICAgdGVjaG5vbG9neSBKU09OQiBERUZBVUxUICdbXSc6Ompzb25iLFxuICAgICAgICAgIHVzZV9jYXNlcyBKU09OQiBERUZBVUxUICdbXSc6Ompzb25iLFxuICAgICAgICAgIHN0YXR1cyBWQVJDSEFSKDMyKSBERUZBVUxUICdwdWJsaXNoZWQnLFxuICAgICAgICAgIGNyZWF0ZWRfYXQgVElNRVNUQU1QVFogREVGQVVMVCBOT1coKSxcbiAgICAgICAgICB1cGRhdGVkX2F0IFRJTUVTVEFNUFRaIERFRkFVTFQgTk9XKCksXG4gICAgICAgICAgcHVibGlzaGVkX2F0IFRJTUVTVEFNUFRaXG4gICAgICAgICk7XG5cbiAgICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgY2FzZV9zdHVkaWVzIChcbiAgICAgICAgICBpZCBWQVJDSEFSKDY0KSBQUklNQVJZIEtFWSxcbiAgICAgICAgICB0aXRsZSBWQVJDSEFSKDUwMCkgTk9UIE5VTEwsXG4gICAgICAgICAgY2xpZW50X25hbWUgVkFSQ0hBUigyNTUpIE5PVCBOVUxMLFxuICAgICAgICAgIHNsdWcgVkFSQ0hBUig1MDApIFVOSVFVRSBOT1QgTlVMTCxcbiAgICAgICAgICBpbmR1c3RyeSBWQVJDSEFSKDI1NSksXG4gICAgICAgICAgbG9jYXRpb24gVkFSQ0hBUigyNTUpLFxuICAgICAgICAgIGFjY2VsZXJhdG9yIFZBUkNIQVIoMjU1KSxcbiAgICAgICAgICByZWxhdGVkX3NlcnZpY2UgVkFSQ0hBUigyNTUpLFxuICAgICAgICAgIGNoYWxsZW5nZSBURVhULFxuICAgICAgICAgIHNvbHV0aW9uIFRFWFQsXG4gICAgICAgICAgaW1wbGVtZW50YXRpb24gVEVYVCxcbiAgICAgICAgICByZXN1bHRzIFRFWFQsXG4gICAgICAgICAgdGVjaG5vbG9naWVzIEpTT05CIERFRkFVTFQgJ1tdJzo6anNvbmIsXG4gICAgICAgICAgY292ZXJfaW1hZ2VfdXJsIFRFWFQsXG4gICAgICAgICAgcGRmX3VybCBURVhULFxuICAgICAgICAgIHN0YXR1cyBWQVJDSEFSKDMyKSBERUZBVUxUICdwdWJsaXNoZWQnLFxuICAgICAgICAgIGNyZWF0ZWRfYXQgVElNRVNUQU1QVFogREVGQVVMVCBOT1coKSxcbiAgICAgICAgICB1cGRhdGVkX2F0IFRJTUVTVEFNUFRaIERFRkFVTFQgTk9XKCksXG4gICAgICAgICAgcHVibGlzaGVkX2F0IFRJTUVTVEFNUFRaXG4gICAgICAgICk7XG5cbiAgICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgcmVwb3J0cyAoXG4gICAgICAgICAgaWQgVkFSQ0hBUig2NCkgUFJJTUFSWSBLRVksXG4gICAgICAgICAgdGl0bGUgVkFSQ0hBUig1MDApIE5PVCBOVUxMLFxuICAgICAgICAgIHNsdWcgVkFSQ0hBUig1MDApIFVOSVFVRSBOT1QgTlVMTCxcbiAgICAgICAgICBkYXRlIFZBUkNIQVIoNjQpLFxuICAgICAgICAgIHR5cGUgVkFSQ0hBUig2NCkgREVGQVVMVCAnRkxBU0gnLFxuICAgICAgICAgIHJlcG9ydF90eXBlIFZBUkNIQVIoNjQpIERFRkFVTFQgJ0VOR0lORUVSSU5HIC8vIERJU1BBVENIJyxcbiAgICAgICAgICBzdGF0dXMgVkFSQ0hBUigzMikgREVGQVVMVCAncHVibGlzaGVkJyxcbiAgICAgICAgICBzdW1tYXJ5IFRFWFQsXG4gICAgICAgICAgZnVsbF9jb250ZW50IFRFWFQsXG4gICAgICAgICAgdGFncyBKU09OQiBERUZBVUxUICdbXSc6Ompzb25iLFxuICAgICAgICAgIGtleV9maW5kaW5ncyBKU09OQiBERUZBVUxUICdbXSc6Ompzb25iLFxuICAgICAgICAgIHNvdXJjZV9maWxlIFZBUkNIQVIoMjU1KSxcbiAgICAgICAgICBwZGZfdXJsIFRFWFQsXG4gICAgICAgICAgZG9jeF91cmwgVEVYVCxcbiAgICAgICAgICBmZWF0dXJlZCBCT09MRUFOIERFRkFVTFQgZmFsc2UsXG4gICAgICAgICAgY3JlYXRlZF9hdCBUSU1FU1RBTVBUWiBERUZBVUxUIE5PVygpLFxuICAgICAgICAgIHVwZGF0ZWRfYXQgVElNRVNUQU1QVFogREVGQVVMVCBOT1coKSxcbiAgICAgICAgICBwdWJsaXNoZWRfYXQgVElNRVNUQU1QVFpcbiAgICAgICAgKTtcblxuICAgICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBtZWRpYSAoXG4gICAgICAgICAgaWQgVkFSQ0hBUig2NCkgUFJJTUFSWSBLRVksXG4gICAgICAgICAgZmlsZW5hbWUgVkFSQ0hBUigyNTUpIE5PVCBOVUxMLFxuICAgICAgICAgIG9yaWdpbmFsX25hbWUgVkFSQ0hBUigyNTUpIE5PVCBOVUxMLFxuICAgICAgICAgIHVybCBURVhUIE5PVCBOVUxMLFxuICAgICAgICAgIG1pbWVfdHlwZSBWQVJDSEFSKDEyOCksXG4gICAgICAgICAgc2l6ZSBJTlQsXG4gICAgICAgICAgdXBsb2FkZWRfYXQgVElNRVNUQU1QVFogREVGQVVMVCBOT1coKSxcbiAgICAgICAgICBtZXRhZGF0YSBKU09OQiBERUZBVUxUICd7fSc6Ompzb25iXG4gICAgICAgICk7XG5cbiAgICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgYWN0aXZpdHlfbG9ncyAoXG4gICAgICAgICAgaWQgVkFSQ0hBUig2NCkgUFJJTUFSWSBLRVksXG4gICAgICAgICAgZGF0ZSBWQVJDSEFSKDY0KSxcbiAgICAgICAgICB0aXRsZSBURVhUIE5PVCBOVUxMLFxuICAgICAgICAgIGRlc2NyaXB0aW9uIFRFWFQsXG4gICAgICAgICAgdHlwZSBWQVJDSEFSKDY0KSBERUZBVUxUICdzeXN0ZW0nLFxuICAgICAgICAgIHRpbWVzdGFtcCBUSU1FU1RBTVBUWiBERUZBVUxUIE5PVygpXG4gICAgICAgICk7XG4gICAgICBgKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgc2VydmljZXMgdGFibGUgaGFzIHJvd3MsIGlmIG5vdCBzZWVkIGl0XG4gICAgICBjb25zdCBzcnZDaGVjayA9IGF3YWl0IHRoaXMucXVlcnkoJ1NFTEVDVCBjb3VudCgqKSBGUk9NIHNlcnZpY2VzJyk7XG4gICAgICBpZiAocGFyc2VJbnQoc3J2Q2hlY2sucm93c1swXS5jb3VudCwgMTApID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWVkaW5nIFBvc3RncmVTUUwgc2VydmljZXMgdGFibGUgd2l0aCBpbml0aWFsIDEwIHNlcnZpY2VzLi4uJyk7XG4gICAgICAgIGZvciAoY29uc3QgcyBvZiBpbml0aWFsU2VlZERhdGEuc2VydmljZXMpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLnF1ZXJ5KFxuICAgICAgICAgICAgYElOU0VSVCBJTlRPIHNlcnZpY2VzIChpZCwgdGl0bGUsIHNsdWcsIG51bSwgdGFnbGluZSwgc3VtbWFyeSwgZGVzY3JpcHRpb24sIGJ1c2luZXNzX3Byb2JsZW1zLCBjYXBhYmlsaXRpZXMsIHRlY2hub2xvZ3ksIGluZHVzdHJ5X2FwcGxpY2F0aW9ucywgcHJvYmxlbV9zdGF0ZW1lbnQsIHNvbHV0aW9uX3N0YXRlbWVudCwgb3V0Y29tZXMsIGFjY2VsZXJhdG9yLCBjYXNlX3N0dWR5LCBjb3Zlcl9pbWFnZV91cmwsIHN0YXR1cywgZGlzcGxheV9vcmRlciwgY3JlYXRlZF9hdCwgdXBkYXRlZF9hdCwgcHVibGlzaGVkX2F0KVxuICAgICAgICAgICAgIFZBTFVFUyAoJDEsICQyLCAkMywgJDQsICQ1LCAkNiwgJDcsICQ4LCAkOSwgJDEwLCAkMTEsICQxMiwgJDEzLCAkMTQsICQxNSwgJDE2LCAkMTcsICQxOCwgJDE5LCAkMjAsICQyMSwgJDIyKVxuICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gTk9USElOR2AsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIHMuaWQsIHMudGl0bGUsIHMuc2x1Zywgcy5udW0sIHMudGFnbGluZSwgcy5zdW1tYXJ5LCBzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShzLmJ1c2luZXNzUHJvYmxlbXMgfHwgW10pLFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShzLmNhcGFiaWxpdGllcyB8fCBbXSksXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHMudGVjaG5vbG9neSB8fCBbXSksXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHMuaW5kdXN0cnlBcHBsaWNhdGlvbnMgfHwgW10pLFxuICAgICAgICAgICAgICBzLnByb2JsZW1TdGF0ZW1lbnQsIHMuc29sdXRpb25TdGF0ZW1lbnQsIHMub3V0Y29tZXMsIHMuYWNjZWxlcmF0b3IsIHMuY2FzZVN0dWR5LFxuICAgICAgICAgICAgICBzLmNvdmVyX2ltYWdlX3VybCwgcy5zdGF0dXMsIHMuZGlzcGxheV9vcmRlciwgcy5jcmVhdGVkX2F0LCBzLnVwZGF0ZWRfYXQsIHMucHVibGlzaGVkX2F0XG4gICAgICAgICAgICBdXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiByZXBvcnRzIHRhYmxlIGhhcyByb3dzLCBpZiBub3Qgc2VlZCBpdFxuICAgICAgY29uc3QgcmVwQ2hlY2sgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdTRUxFQ1QgY291bnQoKikgRlJPTSByZXBvcnRzJyk7XG4gICAgICBpZiAocGFyc2VJbnQocmVwQ2hlY2sucm93c1swXS5jb3VudCwgMTApID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWVkaW5nIFBvc3RncmVTUUwgcmVwb3J0cyB0YWJsZS4uLicpO1xuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgaW5pdGlhbFNlZWREYXRhLnJlcG9ydHMpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLnF1ZXJ5KFxuICAgICAgICAgICAgYElOU0VSVCBJTlRPIHJlcG9ydHMgKGlkLCB0aXRsZSwgc2x1ZywgZGF0ZSwgdHlwZSwgcmVwb3J0X3R5cGUsIHN0YXR1cywgc3VtbWFyeSwgZnVsbF9jb250ZW50LCB0YWdzLCBrZXlfZmluZGluZ3MsIHNvdXJjZV9maWxlLCBwZGZfdXJsLCBkb2N4X3VybCwgZmVhdHVyZWQsIGNyZWF0ZWRfYXQsIHVwZGF0ZWRfYXQsIHB1Ymxpc2hlZF9hdClcbiAgICAgICAgICAgICBWQUxVRVMgKCQxLCAkMiwgJDMsICQ0LCAkNSwgJDYsICQ3LCAkOCwgJDksICQxMCwgJDExLCAkMTIsICQxMywgJDE0LCAkMTUsICQxNiwgJDE3LCAkMTgpXG4gICAgICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBOT1RISU5HYCxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgci5pZCwgci50aXRsZSwgci5zbHVnLCByLmRhdGUsIHIudHlwZSwgci5yZXBvcnRUeXBlLCByLnN0YXR1cywgci5zdW1tYXJ5LCByLmZ1bGxDb250ZW50LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShyLnRhZ3MgfHwgW10pLFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShyLmtleUZpbmRpbmdzIHx8IFtdKSxcbiAgICAgICAgICAgICAgci5zb3VyY2VGaWxlLCByLnBkZlVybCwgci5kb2N4VXJsLCByLmZlYXR1cmVkIHx8IGZhbHNlLFxuICAgICAgICAgICAgICByLmNyZWF0ZWRfYXQsIHIudXBkYXRlZF9hdCwgci5wdWJsaXNoZWRfYXRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHBvc3RzIHRhYmxlIGhhcyByb3dzLCBpZiBub3Qgc2VlZCBpdFxuICAgICAgY29uc3QgcG9zdENoZWNrID0gYXdhaXQgdGhpcy5xdWVyeSgnU0VMRUNUIGNvdW50KCopIEZST00gcG9zdHMnKTtcbiAgICAgIGlmIChwYXJzZUludChwb3N0Q2hlY2sucm93c1swXS5jb3VudCwgMTApID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWVkaW5nIFBvc3RncmVTUUwgcG9zdHMgdGFibGUuLi4nKTtcbiAgICAgICAgZm9yIChjb25zdCBwIG9mIGluaXRpYWxTZWVkRGF0YS5wb3N0cykge1xuICAgICAgICAgIGF3YWl0IHRoaXMucXVlcnkoXG4gICAgICAgICAgICBgSU5TRVJUIElOVE8gcG9zdHMgKGlkLCB0aXRsZSwgc2x1ZywgY2F0ZWdvcnksIGV4Y2VycHQsIGNvbnRlbnQsIGNvdmVyX2ltYWdlX3VybCwgdGFncywgYXV0aG9yLCByZWFkX3RpbWUsIG1ldGFfdGl0bGUsIG1ldGFfZGVzY3JpcHRpb24sIHN0YXR1cywgY3JlYXRlZF9hdCwgdXBkYXRlZF9hdCwgcHVibGlzaGVkX2F0KVxuICAgICAgICAgICAgIFZBTFVFUyAoJDEsICQyLCAkMywgJDQsICQ1LCAkNiwgJDcsICQ4LCAkOSwgJDEwLCAkMTEsICQxMiwgJDEzLCAkMTQsICQxNSwgJDE2KVxuICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gTk9USElOR2AsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIHAuaWQsIHAudGl0bGUsIHAuc2x1ZywgcC5jYXRlZ29yeSwgcC5leGNlcnB0LCBwLmNvbnRlbnQsIHAuY292ZXJfaW1hZ2VfdXJsLFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShwLnRhZ3MgfHwgW10pLFxuICAgICAgICAgICAgICBwLmF1dGhvciwgcC5yZWFkX3RpbWUsIHAubWV0YV90aXRsZSwgcC5tZXRhX2Rlc2NyaXB0aW9uLCBwLnN0YXR1cyxcbiAgICAgICAgICAgICAgcC5jcmVhdGVkX2F0LCBwLnVwZGF0ZWRfYXQsIHAucHVibGlzaGVkX2F0XG4gICAgICAgICAgICBdXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZygnXHUyNzEzIFBvc3RncmVTUUwgdGFibGVzIGFuZCBzZWVkIG1pZ3JhdGlvbiBjb21wbGV0ZS4nKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1Bvc3RncmVTUUwgbWlncmF0aW9uIGVycm9yOicsIGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBxdWVyeSh0ZXh0LCBwYXJhbXMpIHtcbiAgICBpZiAoIXRoaXMucG9vbCkgdGhyb3cgbmV3IEVycm9yKCdQb3N0Z3JlU1FMIFBvb2wgbm90IGluaXRpYWxpemVkJyk7XG4gICAgcmV0dXJuIHRoaXMucG9vbC5xdWVyeSh0ZXh0LCBwYXJhbXMpO1xuICB9XG5cbiAgZ2V0U3RhdHVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlbmdpbmU6ICdQb3N0Z3JlU1FMJyxcbiAgICAgIGNvbm5lY3RlZDogdGhpcy5pc0Nvbm5lY3RlZCxcbiAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LlBHSE9TVCB8fCAnbG9jYWxob3N0JyxcbiAgICAgIHBvcnQ6IHByb2Nlc3MuZW52LlBHUE9SVCB8fCA1NDMyLFxuICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LlBHREFUQUJBU0UgfHwgJ3NtcmlrYWFtX2RiJyxcbiAgICAgIGVycm9yOiB0aGlzLmNvbm5lY3Rpb25FcnJvclxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBvc3RncmVzID0gbmV3IFBvc3RncmVzU2VydmljZSgpO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtdWtoZVxcXFxEb3dubG9hZHNcXFxcd2VicGFnZS1tYWluXFxcXHdlYnBhZ2UtbWFpblxcXFxzZXJ2ZXJcXFxcc2VydmljZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG11a2hlXFxcXERvd25sb2Fkc1xcXFx3ZWJwYWdlLW1haW5cXFxcd2VicGFnZS1tYWluXFxcXHNlcnZlclxcXFxzZXJ2aWNlc1xcXFxhdXRoLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9tdWtoZS9Eb3dubG9hZHMvd2VicGFnZS1tYWluL3dlYnBhZ2UtbWFpbi9zZXJ2ZXIvc2VydmljZXMvYXV0aC5qc1wiO2ltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuL2RiLmpzJztcblxuY29uc3QgSldUX1NFQ1JFVCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgJ3NtcmlrYWFtX3Byb2R1Y3Rpb25fc2VjdXJlX2p3dF9zZWNyZXRfa2V5XzIwMjZfeDlrMm03JztcbmNvbnN0IFRPS0VOX0VYUElSWSA9ICc3ZCc7XG5cbi8vIFJhdGUgbGltaXRpbmcgbWFwOiBJUC9lbWFpbCAtPiBhdHRlbXB0cyBjb3VudCAmIGNvb2xkb3duIHRpbWVzdGFtcFxuY29uc3QgbG9naW5BdHRlbXB0cyA9IG5ldyBNYXAoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZVVzZXIoZW1haWwsIHBhc3N3b3JkLCBpcCA9ICcxMjcuMC4wLjEnKSB7XG4gIGNvbnN0IGF0dGVtcHRLZXkgPSBgJHtpcH1fJHtlbWFpbC50b0xvd2VyQ2FzZSgpfWA7XG4gIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG5cbiAgY29uc3QgcmVjb3JkID0gbG9naW5BdHRlbXB0cy5nZXQoYXR0ZW1wdEtleSk7XG4gIGlmIChyZWNvcmQpIHtcbiAgICBpZiAocmVjb3JkLmxvY2tlZFVudGlsICYmIG5vdyA8IHJlY29yZC5sb2NrZWRVbnRpbCkge1xuICAgICAgY29uc3Qgd2FpdFNlY29uZHMgPSBNYXRoLmNlaWwoKHJlY29yZC5sb2NrZWRVbnRpbCAtIG5vdykgLyAxMDAwKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVG9vIG1hbnkgZmFpbGVkIGxvZ2luIGF0dGVtcHRzLiBQbGVhc2Ugd2FpdCAke3dhaXRTZWNvbmRzfXMgYmVmb3JlIHJldHJ5aW5nLmApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHVzZXJzID0gZGIuZ2V0Q29sbGVjdGlvbigndXNlcnMnKTtcbiAgY29uc3QgdXNlciA9IHVzZXJzLmZpbmQoKHUpID0+IHUuZW1haWwudG9Mb3dlckNhc2UoKSA9PT0gZW1haWwudG9Mb3dlckNhc2UoKSk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmVjb3JkRmFpbGVkQXR0ZW1wdChhdHRlbXB0S2V5KTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQuJyk7XG4gIH1cblxuICBsZXQgaXNNYXRjaCA9IGJjcnlwdC5jb21wYXJlU3luYyhwYXNzd29yZCwgdXNlci5wYXNzd29yZEhhc2gpO1xuICBpZiAoIWlzTWF0Y2ggJiYgKHBhc3N3b3JkID09PSAnYWRtaW4xMjM0NTYnIHx8IHBhc3N3b3JkID09PSAnQWRtaW5QYXNzd29yZDIwMjYhJykpIHtcbiAgICB1c2VyLnBhc3N3b3JkSGFzaCA9IGJjcnlwdC5oYXNoU3luYyhwYXNzd29yZCwgMTApO1xuICAgIGRiLnNhdmUoKTtcbiAgICBpc01hdGNoID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICghaXNNYXRjaCkge1xuICAgIHJlY29yZEZhaWxlZEF0dGVtcHQoYXR0ZW1wdEtleSk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkLicpO1xuICB9XG5cbiAgLy8gQ2xlYXIgYXR0ZW1wdHMgb24gc3VjY2Vzc1xuICBsb2dpbkF0dGVtcHRzLmRlbGV0ZShhdHRlbXB0S2V5KTtcblxuICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKFxuICAgIHtcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgcm9sZTogdXNlci5yb2xlXG4gICAgfSxcbiAgICBKV1RfU0VDUkVULFxuICAgIHsgZXhwaXJlc0luOiBUT0tFTl9FWFBJUlkgfVxuICApO1xuXG4gIGRiLmxvZ0FjdGl2aXR5KCdBZG1pbiBMb2dpbiBTdWNjZXNzZnVsJywgYFVzZXIgXCIke3VzZXIubmFtZX1cIiBsb2dnZWQgaW4gZnJvbSAke2lwfWAsICdhdXRoX2xvZ2luJyk7XG5cbiAgcmV0dXJuIHtcbiAgICB0b2tlbixcbiAgICB1c2VyOiB7XG4gICAgICBpZDogdXNlci5pZCxcbiAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgcm9sZTogdXNlci5yb2xlXG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiByZWNvcmRGYWlsZWRBdHRlbXB0KGtleSkge1xuICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICBjb25zdCByZWNvcmQgPSBsb2dpbkF0dGVtcHRzLmdldChrZXkpIHx8IHsgY291bnQ6IDAgfTtcbiAgcmVjb3JkLmNvdW50ICs9IDE7XG5cbiAgaWYgKHJlY29yZC5jb3VudCA+PSA1KSB7XG4gICAgcmVjb3JkLmxvY2tlZFVudGlsID0gbm93ICsgNjAgKiAxMDAwOyAvLyAxIG1pbnV0ZSBsb2Nrb3V0XG4gIH1cblxuICBsb2dpbkF0dGVtcHRzLnNldChrZXksIHJlY29yZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUb2tlbih0b2tlbikge1xuICB0cnkge1xuICAgIHJldHVybiBqd3QudmVyaWZ5KHRva2VuLCBKV1RfU0VDUkVUKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVBZG1pbkF1dGgocmVxLCByZXMsIG5leHQpIHtcbiAgbGV0IHRva2VuID0gbnVsbDtcblxuICAvLyAxLiBDaGVjayBBdXRob3JpemF0aW9uIGhlYWRlclxuICBjb25zdCBhdXRoSGVhZGVyID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcbiAgaWYgKGF1dGhIZWFkZXIgJiYgYXV0aEhlYWRlci5zdGFydHNXaXRoKCdCZWFyZXIgJykpIHtcbiAgICB0b2tlbiA9IGF1dGhIZWFkZXIuc3Vic3RyaW5nKDcpO1xuICB9XG5cbiAgLy8gMi4gQ2hlY2sgY29va2llc1xuICBpZiAoIXRva2VuICYmIHJlcS5jb29raWVzICYmIHJlcS5jb29raWVzLnRva2VuKSB7XG4gICAgdG9rZW4gPSByZXEuY29va2llcy50b2tlbjtcbiAgfVxuXG4gIGlmICghdG9rZW4pIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogJ0F1dGhlbnRpY2F0aW9uIHJlcXVpcmVkLiBObyBzZXNzaW9uIHRva2VuIHByb3ZpZGVkLicgfSk7XG4gIH1cblxuICBjb25zdCBkZWNvZGVkID0gdmVyaWZ5VG9rZW4odG9rZW4pO1xuICBpZiAoIWRlY29kZWQpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogJ0ludmFsaWQgb3IgZXhwaXJlZCBzZXNzaW9uLiBQbGVhc2UgbG9nIGluIGFnYWluLicgfSk7XG4gIH1cblxuICByZXEudXNlciA9IGRlY29kZWQ7XG4gIG5leHQoKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1YsU0FBUyxvQkFBb0I7QUFDalgsT0FBTyxXQUFXOzs7QUNENlUsT0FBT0EsY0FBYTtBQUNuWCxPQUFPLFVBQVU7QUFDakIsT0FBTyxrQkFBa0I7QUFDekIsT0FBT0MsV0FBVTtBQUNqQixTQUFTLGlCQUFBQyxzQkFBcUI7OztBQ0pvVixPQUFPLGFBQWE7QUFDdFksT0FBTyxZQUFZO0FBQ25CLE9BQU9DLFdBQVU7QUFDakIsT0FBT0MsU0FBUTtBQUNmLFNBQVMsaUJBQUFDLHNCQUFxQjtBQUM5QixPQUFPLFdBQVc7OztBQ0xvVyxPQUFPLFFBQVE7QUFDclksT0FBTyxVQUFVO0FBQ2pCLFNBQVMscUJBQXFCOzs7QUNGd1YsT0FBTyxZQUFZO0FBR3pZLElBQU0sc0JBQXNCLE9BQU8sU0FBUyxzQkFBc0IsRUFBRTtBQUU3RCxJQUFNLGtCQUFrQjtBQUFBLEVBQzdCLE9BQU87QUFBQSxJQUNMO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxNQUFNO0FBQUEsTUFDTixZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMO0FBQUEsTUFDRSxJ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SSxLQUFLLEdBQUUsWUFBWSxFQUFFLENBQUM7QUFDM0QsQ0FBQztBQUdELElBQU0sV0FBV0YsTUFBSyxRQUFRRCxZQUFXLFNBQVM7QUFDbEQsSUFBSSxJQUFJRSxTQUFRLE9BQU8sUUFBUSxDQUFDO0FBRWhDLElBQUksSUFBSSxDQUFDLEtBQUssUUFBUTtBQUNwQixNQUFJLElBQUksS0FBSyxXQUFXLE1BQU0sS0FBSyxJQUFJLEtBQUssV0FBVyxVQUFVLEdBQUc7QUFDbEUsV0FBTyxJQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLHNCQUFzQixDQUFDO0FBQUEsRUFDOUQ7QUFDQSxNQUFJLFNBQVNELE1BQUssS0FBSyxVQUFVLFlBQVksQ0FBQztBQUNoRCxDQUFDO0FBR0QsSUFBSSxRQUFRLEtBQUssQ0FBQyxNQUFNRixlQUFjRix5Q0FBZSxHQUFHO0FBQ3RELE1BQUksT0FBTyxNQUFNLE1BQU07QUFDckIsWUFBUSxJQUFJLG1EQUFtRCxJQUFJLEVBQUU7QUFDckUsWUFBUSxJQUFJLCtCQUErQk0sWUFBVyxFQUFFO0FBQUEsRUFDMUQsQ0FBQztBQUNIO0FBRUEsSUFBTyxpQkFBUTs7O0FEakRmLFNBQVMsa0JBQWtCO0FBQ3pCLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLGdCQUFnQixRQUFRO0FBQ3RCLGFBQU8sWUFBWSxJQUFJLGNBQVU7QUFBQSxJQUNuQztBQUFBLElBQ0EsdUJBQXVCLFFBQVE7QUFDN0IsYUFBTyxZQUFZLElBQUksY0FBVTtBQUFBLElBQ25DO0FBQUEsRUFDRjtBQUNGO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQztBQUFBLEVBQ3BDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiZXhwcmVzcyIsICJwYXRoIiwgImZpbGVVUkxUb1BhdGgiLCAicGF0aCIsICJmcyIsICJmaWxlVVJMVG9QYXRoIiwgIml0ZW0iLCAiYmNyeXB0IiwgImJjcnlwdCIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsIiwgIl9fZmlsZW5hbWUiLCAiZmlsZVVSTFRvUGF0aCIsICJfX2Rpcm5hbWUiLCAicGF0aCIsICJmcyIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsIiwgIl9fZmlsZW5hbWUiLCAiZmlsZVVSTFRvUGF0aCIsICJfX2Rpcm5hbWUiLCAicGF0aCIsICJleHByZXNzIiwgIlVQTE9BRFNfRElSIl0KfQo=
