import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const { Client } = pg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const services = [
  {
    id: "srv_01",
    title: "Artificial Intelligence & Machine Learning",
    slug: "ai-ml",
    num: "01",
    tagline: "Production-ready predictive intelligence, computer vision, forecasting, recommendation systems, and MLOps.",
    summary: "We engineer production-ready AI and machine learning solutions for predictive intelligence, intelligent decision support, computer vision, forecasting, recommendation systems, and enterprise AI applications.",
    description: "We engineer production-ready AI and machine learning solutions for predictive intelligence, intelligent decision support, computer vision, forecasting, recommendation systems, and enterprise AI applications.",
    content: "We engineer production-ready AI and machine learning solutions for predictive intelligence, intelligent decision support, computer vision, forecasting, recommendation systems, and enterprise AI applications.",
    businessProblems: [
      "Operational Unpredictability: Unpredictable operational downtime and equipment failure caused by the lack of predictive anomaly detection and intelligent monitoring.",
      "Manual Quality Bottlenecks: Manual visual inspection errors, inconsistent quality decisions, and slow throughput across high-speed production environments.",
      "Forecast Inaccuracy: Limited demand and inventory intelligence causing stockouts, excess inventory, and unnecessary working-capital exposure.",
      "Production ML Fragmentation: Machine-learning experiments remaining isolated in notebooks without production-grade MLOps, governance, monitoring, and continuous deployment."
    ],
    capabilities: [
      "Predictive Intelligence Models",
      "Computer Vision & Defect Detection",
      "Demand & Inventory Forecasting",
      "Recommendation & Decision Engines",
      "Real-Time AI Inference",
      "Production MLOps & Model Monitoring"
    ],
    technology: [
      "Python", "PyTorch", "scikit-learn", "MLflow", "Azure Machine Learning", "Databricks", "Vector Databases", "MLOps Pipelines"
    ],
    industryApplications: [
      "Manufacturing", "BFSI", "Retail & E-Commerce", "Healthcare"
    ],
    problemStatement: "Enterprises struggle to operationalize experimental machine learning models into reliable, low-latency production pipelines.",
    solutionStatement: "Deploy production-grade MLOps pipelines with sub-50ms inference, automated drift tracking, and continuous retraining.",
    outcomes: "10x faster model deployment with sub-50ms inference, automated model monitoring, and production-grade MLOps governance.",
    accelerator: "ParseMaster + BitXhift",
    acceleratorSlug: "bitxhift",
    caseStudy: "Smart Factory Manufacturing Transformation",
    caseStudySlug: "case-studies",
    cover_image_url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    status: "published",
    display_order: 1
  },
  {
    id: "srv_02",
    title: "Industrial IoT (IIoT)",
    slug: "industrial-iot-iiot",
    num: "02",
    tagline: "Multi-protocol machine connectivity, OEE dashboards, downtime alerts, and predictive maintenance.",
    summary: "Multi-protocol machine connectivity, OEE dashboards, downtime alerts, and predictive maintenance — powered by BitXhift.",
    description: "We deliver end-to-end Industrial IoT (IIoT) architectures connecting shop-floor machinery, legacy CNCs, PLCs, and SCADA networks to modern edge compute and real-time cloud analytics — powered by BitXhift.",
    content: "We deliver end-to-end Industrial IoT (IIoT) architectures connecting shop-floor machinery, legacy CNCs, PLCs, and SCADA networks to modern edge compute and real-time cloud analytics — powered by BitXhift.",
    businessProblems: [
      "Unplanned Machine Breakdowns: Costly factory line stoppages caused by undetected mechanical wear and thermal anomalies.",
      "Paper-Based Shift Logs: Lack of real-time visibility into machine availability, performance, and scrap rates.",
      "Inaccurate OEE Calculation: Misleading Overall Equipment Effectiveness metrics derived from manual operator tally sheets.",
      "Heterogeneous Protocol Silos: Incompatible Modbus, OPC-UA, Profinet, and proprietary fieldbus communication protocols."
    ],
    capabilities: [
      "Multi-Protocol Edge Ingestion",
      "Real-Time OEE & Downtime Tracking",
      "Vibration & Thermal Anomaly Detection",
      "Live Factory Floor Wallboards",
      "Modbus/OPC-UA/MQTT Telemetry",
      "Edge Machine Connectivity"
    ],
    technology: [
      "MQTT", "OPC UA", "Modbus TCP", "Edge computing", "Azure IoT", "AWS IoT", "TimescaleDB", "Docker", "Python"
    ],
    industryApplications: [
      "Automotive", "Machinery & Equipment", "Energy & Utilities", "Heavy Manufacturing"
    ],
    problemStatement: "Unplanned machine failures cost industrial operators millions annually due to lack of predictive vibration and telemetry intelligence.",
    solutionStatement: "Deploy BitXhift multi-protocol edge gateways streaming machine telemetry to real-time OEE dashboards.",
    outcomes: "35% downtime reduction within 60 days of telemetry activation with 100% automated OEE tracking.",
    accelerator: "BitXhift",
    acceleratorSlug: "bitxhift",
    caseStudy: "Smart Factory Manufacturing Transformation",
    caseStudySlug: "case-studies",
    cover_image_url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    status: "published",
    display_order: 2
  },
  {
    id: "srv_03",
    title: "DevOps & Cloud Infrastructure",
    slug: "devops-cloud",
    num: "03",
    tagline: "Resilient multi-cloud infrastructure, automated CI/CD pipelines, and FinOps cloud cost optimization.",
    summary: "We architect resilient, secure, and cost-optimized multi-cloud infrastructure and automated CI/CD deployment pipelines on AWS, Azure, and GCP — accelerated by MigrateMax.",
    description: "We architect resilient, secure, and cost-optimized multi-cloud infrastructure and automated CI/CD deployment pipelines on AWS, Azure, and GCP — accelerated by MigrateMax.",
    content: "We architect resilient, secure, and cost-optimized multi-cloud infrastructure and automated CI/CD deployment pipelines on AWS, Azure, and GCP — accelerated by MigrateMax.",
    businessProblems: [
      "Cloud Over-Provisioning: Uncontrolled monthly cloud bills caused by unoptimized compute sizing and idle infrastructure.",
      "Manual Deployment Risks: Human error during production releases resulting in unexpected downtime and rollback friction.",
      "Security & Compliance Drift: Inconsistent IAM policies, unencrypted data stores, and non-compliant cloud configurations.",
      "Slow Release Velocity: Monolithic deployment pipelines stalling release cadence and feature delivery."
    ],
    capabilities: [
      "Infrastructure as Code (IaC)",
      "Kubernetes Container Orchestration",
      "Automated Zero-Downtime CI/CD",
      "Multi-Cloud Security & Compliance",
      "Cloud Cost Optimization (FinOps)",
      "Site Reliability Engineering (SRE)"
    ],
    technology: [
      "Terraform", "Kubernetes", "Docker", "AWS", "Azure", "GCP", "GitHub Actions", "Prometheus", "ArgoCD"
    ],
    industryApplications: [
      "Software & SaaS", "BFSI", "Healthcare", "E-Commerce"
    ],
    problemStatement: "Legacy deployment workflows and fragmented cloud resources cause frequent outages and inflated cloud spending.",
    solutionStatement: "Implement automated IaC pipelines, GitOps continuous delivery, and FinOps resource rightsizing.",
    outcomes: "99.99% system availability with 70% faster release cycles and 30% cloud infrastructure cost reduction.",
    accelerator: "MigrateMax",
    acceleratorSlug: "migratemax",
    caseStudy: "Multi-Cloud Migration & FinOps Optimization",
    caseStudySlug: "case-studies",
    cover_image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    status: "published",
    display_order: 3
  },
  {
    id: "srv_04",
    title: "Enterprise Data Engineering",
    slug: "data-engineering",
    num: "04",
    tagline: "High-throughput data lakes, real-time streaming pipelines, and modern data stack analytics.",
    summary: "We build high-throughput data lakes, real-time streaming pipelines, automated ETL/ELT workflows, and modern data stack architectures for enterprise analytics.",
    description: "We build high-throughput data lakes, real-time streaming pipelines, automated ETL/ELT workflows, and modern data stack architectures for enterprise analytics.",
    content: "We build high-throughput data lakes, real-time streaming pipelines, automated ETL/ELT workflows, and modern data stack architectures for enterprise analytics.",
    businessProblems: [
      "Data Silos & Fragmentation: Disparate database systems delaying cross-functional reporting and business intelligence.",
      "High Pipeline Latency: Batch-only data integration causing outdated analytical reports and stale metrics.",
      "Poor Data Quality: Inconsistent schemas and missing validation leading to unreliable business reporting.",
      "Scalability Bottlenecks: Legacy data warehouses crashing under high query volume and large analytical workloads."
    ],
    capabilities: [
      "High-Throughput Data Lakes",
      "Real-Time Stream Processing",
      "Automated ETL/ELT Pipelines",
      "Modern Data Warehouse Architecture",
      "Data Modeling & Schema Optimization",
      "Automated Data Pipeline Monitoring"
    ],
    technology: [
      "Apache Spark", "Snowflake", "BigQuery", "dbt", "Airflow", "Kafka", "PostgreSQL", "Python"
    ],
    industryApplications: [
      "Retail & E-Commerce", "BFSI", "Logistics", "Manufacturing"
    ],
    problemStatement: "Stale batch data pipelines prevent real-time business decision-making and operational responsiveness.",
    solutionStatement: "Deploy real-time streaming data lakes with automated quality checks and sub-second query performance.",
    outcomes: "10x faster query performance with zero data loss and real-time analytical pipeline latency under 5 seconds.",
    accelerator: "BitXhift + LinkGenX",
    acceleratorSlug: "bitxhift",
    caseStudy: "Real-Time Data Pipeline Acceleration",
    caseStudySlug: "case-studies",
    cover_image_url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    status: "published",
    display_order: 4
  },
  {
    id: "srv_05",
    title: "Generative AI & LLM Systems",
    slug: "generative-ai",
    num: "05",
    tagline: "Context-aware RAG pipelines, fine-tuned domain models, and autonomous enterprise AI agents.",
    summary: "We build enterprise-grade Generative AI applications, Retrieval-Augmented Generation (RAG) pipelines, fine-tuned domain models, and autonomous AI agents.",
    description: "We build enterprise-grade Generative AI applications, Retrieval-Augmented Generation (RAG) pipelines, fine-tuned domain models, and autonomous AI agents.",
    content: "We build enterprise-grade Generative AI applications, Retrieval-Augmented Generation (RAG) pipelines, fine-tuned domain models, and autonomous AI agents.",
    businessProblems: [
      "Hallucination & Accuracy Risks: Generative AI outputs failing strict enterprise accuracy and reliability requirements.",
      "Unstructured Data Ingestion: Inability to search and query complex technical documents, PDFs, and internal knowledge bases.",
      "Data Privacy & Compliance: Risks of exposing sensitive corporate data to public LLM provider endpoints.",
      "High API & Token Costs: Inefficient prompt engineering and unoptimized model selection increasing operational costs."
    ],
    capabilities: [
      "Enterprise RAG Architectures",
      "Autonomous AI Agent Systems",
      "Domain-Specific LLM Fine-Tuning",
      "Vector Database Integration",
      "Prompt Engineering & Guardrails",
      "Private Enterprise AI Deployment"
    ],
    technology: [
      "LangChain", "LlamaIndex", "Pinecone", "Qdrant", "Python", "OpenAI API", "Anthropic Claude", "vLLM"
    ],
    industryApplications: [
      "Legal & Compliance", "Healthcare", "BFSI", "Customer Support"
    ],
    problemStatement: "Organizations struggle to leverage LLMs securely over private unstructured document repositories without hallucination risks.",
    solutionStatement: "Architect private, context-aware RAG pipelines with deterministic guardrails and vector search.",
    outcomes: "80% reduction in manual research effort with sub-second context retrieval and 100% data privacy compliance.",
    accelerator: "ParseMaster",
    acceleratorSlug: "parsemaster",
    caseStudy: "Autonomous Agentic AI Automation",
    caseStudySlug: "case-studies",
    cover_image_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    status: "published",
    display_order: 5
  },
  {
    id: "srv_06",
    title: "Data Governance & Compliance",
    slug: "data-governance",
    num: "06",
    tagline: "Automated data catalogs, end-to-end lineage tracking, PII masking, and regulatory compliance.",
    summary: "We implement enterprise data governance frameworks, automated metadata catalogs, data lineage tracking, and strict regulatory compliance solutions.",
    description: "We implement enterprise data governance frameworks, automated metadata catalogs, data lineage tracking, and strict regulatory compliance solutions.",
    content: "We implement enterprise data governance frameworks, automated metadata catalogs, data lineage tracking, and strict regulatory compliance solutions.",
    businessProblems: [
      "Regulatory Penalty Vulnerability: Inability to audit sensitive PII data access across multi-cloud environments.",
      "Lack of Lineage Transparency: Unclear data origin and transformations impairing trust in financial and operational reports.",
      "Uncoordinated Access Control: Over-permissioned user accounts increasing security risk and data breach exposure.",
      "Inconsistent Data Definitions: Differing KPI metrics across departments causing conflicting business reporting."
    ],
    capabilities: [
      "Automated Data Cataloging",
      "End-to-End Lineage Tracking",
      "Role-Based Access Control (RBAC)",
      "PII Anonymization & Masking",
      "Regulatory Compliance (GDPR/HIPAA)",
      "Data Quality Auditing"
    ],
    technology: [
      "Collibra", "Apache Atlas", "DataHub", "Snowflake Governance", "BigQuery Dataplex", "Python"
    ],
    industryApplications: [
      "BFSI", "Healthcare", "Telecom", "Government"
    ],
    problemStatement: "Unclear data lineage and unmonitored PII exposure lead to severe regulatory fines and audit failures.",
    solutionStatement: "Deploy automated metadata discovery, granular RBAC policies, and real-time lineage visualization.",
    outcomes: "100% compliance audit readiness with zero unauthorized access incidents and automated data lineage tracking.",
    accelerator: "ParseMaster",
    acceleratorSlug: "parsemaster",
    caseStudy: "Enterprise Data Governance Transformation",
    caseStudySlug: "case-studies",
    cover_image_url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    status: "published",
    display_order: 6
  },
  {
    id: "srv_07",
    title: "Enterprise Integration & API Engineering",
    slug: "integration",
    num: "07",
    tagline: "Event-driven API gateways, legacy modernization, and high-performance microservices routing.",
    summary: "We build scalable event-driven API gateways, microservices integration layers, and enterprise service bus architectures connecting legacy and modern systems — powered by LinkGenX.",
    description: "We build scalable event-driven API gateways, microservices integration layers, and enterprise service bus architectures connecting legacy and modern systems — powered by LinkGenX.",
    content: "We build scalable event-driven API gateways, microservices integration layers, and enterprise service bus architectures connecting legacy and modern systems — powered by LinkGenX.",
    businessProblems: [
      "Legacy System Isolation: Mainframe and legacy ERP systems unable to connect with modern cloud microservices.",
      "API Bottlenecks & Outages: High-traffic periods crashing unthrottled API endpoints and internal services.",
      "Complex Point-to-Point Glue: Spaghetti integrations increasing maintenance overhead and failure points.",
      "Security Vulnerabilities: Unsecured API endpoints exposing internal business logic and databases."
    ],
    capabilities: [
      "API Gateway Architecture",
      "Event-Driven Microservices",
      "Legacy System Modernization",
      "OAuth2 & JWT API Security",
      "GraphQL & RESTful API Design",
      "Sub-Second Message Routing"
    ],
    technology: [
      "Kong", "Apigee", "Kafka", "RabbitMQ", "Node.js", "Go", "Docker", "Kubernetes"
    ],
    industryApplications: [
      "BFSI", "Retail", "Logistics", "Healthcare"
    ],
    problemStatement: "Monolithic, point-to-point integrations create brittle systems that fail during peak transaction volumes.",
    solutionStatement: "Engineer event-driven microservices around high-availability API gateways with automated rate limiting.",
    outcomes: "99.999% uptime for API transactions with sub-10ms routing latency and zero system downtime.",
    accelerator: "LinkGenX",
    acceleratorSlug: "linkgenx",
    caseStudy: "Event-Driven Microservices Integration",
    caseStudySlug: "case-studies",
    cover_image_url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    status: "published",
    display_order: 7
  },
  {
    id: "srv_08",
    title: "ServiceNow & IT Workflow Automation",
    slug: "servicenow",
    num: "08",
    tagline: "ServiceNow ITSM/ITOM implementation, custom App Engine workflows, and automated incident response.",
    summary: "We implement, customize, and automate enterprise ITSM, ITOM, and custom workflow applications on the ServiceNow platform.",
    description: "We implement, customize, and automate enterprise ITSM, ITOM, and custom workflow applications on the ServiceNow platform.",
    content: "We implement, customize, and automate enterprise ITSM, ITOM, and custom workflow applications on the ServiceNow platform.",
    businessProblems: [
      "Slow Incident Resolution: Manual ticket assignment and triage causing high Mean Time to Resolution (MTTR).",
      "Disjointed Asset Tracking: Inaccurate CMDB data leading to software license compliance penalties and audit issues.",
      "High Service Desk Volume: Repeated manual request handling burdening IT support teams.",
      "Lack of Workflow Visibility: Opaque approval cycles causing project delays and operational friction."
    ],
    capabilities: [
      "ServiceNow ITSM & ITOM Implementation",
      "Custom App Engine Workflows",
      "CMDB & Service Graph Mapping",
      "Automated Incident & Change Management",
      "Service Portal Customization",
      "REST/SOAP Integration Hub"
    ],
    technology: [
      "ServiceNow Platform", "JavaScript", "Flow Designer", "IntegrationHub", "REST API", "Service Portal"
    ],
    industryApplications: [
      "IT Services", "BFSI", "Healthcare", "Telecom"
    ],
    problemStatement: "Manual IT support processes delay incident response times and reduce enterprise workforce productivity.",
    solutionStatement: "Deploy automated ServiceNow ITSM/ITOM workflows with AI-driven ticket routing and self-service portals.",
    outcomes: "60% reduction in incident resolution time (MTTR) with 45% automated self-service ticket resolution.",
    accelerator: "LinkGenX",
    acceleratorSlug: "linkgenx",
    caseStudy: "ServiceNow IT Workflow Automation",
    caseStudySlug: "case-studies",
    cover_image_url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop",
    status: "published",
    display_order: 8
  },
  {
    id: "srv_09",
    title: "Enterprise Technology Advisory",
    slug: "advisory",
    num: "09",
    tagline: "Strategic enterprise architecture, multi-year cloud roadmaps, and digital transformation consulting.",
    summary: "We provide strategic technology consulting, enterprise architecture blueprints, cloud roadmap design, and digital transformation guidance.",
    description: "We provide strategic technology consulting, enterprise architecture blueprints, cloud roadmap design, and digital transformation guidance.",
    content: "We provide strategic technology consulting, enterprise architecture blueprints, cloud roadmap design, and digital transformation guidance.",
    businessProblems: [
      "Misaligned Tech Roadmaps: Technology investments failing to produce tangible business ROI or competitive advantage.",
      "High Technical Debt: Accumulation of legacy software architectures blocking new feature development.",
      "Cloud Vendor Lock-In: Inflexible Cloud strategies increasing long-term operational costs.",
      "Skill & Talent Gaps: Lack of in-house expertise in modern AI, Cloud, and Data architectures."
    ],
    capabilities: [
      "Enterprise Architecture Blueprints",
      "Cloud Strategy & Migration Roadmaps",
      "Technical Debt Audit & Refactoring",
      "Vendor Selection & Evaluation",
      "AI Readiness Assessment",
      "CTO & Executive Advisory"
    ],
    technology: [
      "TOGAF", "AWS Architecture", "Azure Architecture", "GCP Architecture", "FinOps", "Cybersecurity"
    ],
    industryApplications: [
      "Cross-Industry", "BFSI", "Manufacturing", "Healthcare"
    ],
    problemStatement: "Unplanned technology investments without architectural blueprints lead to technical debt and missed ROI.",
    solutionStatement: "Deliver actionable 3-year technology blueprints aligned directly with enterprise business growth goals.",
    outcomes: "Clear 3-year digital transformation roadmap delivering 40% efficiency gains and zero technical debt accumulation.",
    accelerator: "MigrateMax + BitXhift",
    acceleratorSlug: "migratemax",
    caseStudy: "Enterprise Technology Advisory Roadmap",
    caseStudySlug: "case-studies",
    cover_image_url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    status: "published",
    display_order: 9
  },
  {
    id: "srv_10",
    title: "Intelligent AI Workflow Automation",
    slug: "ai-workflow",
    num: "10",
    tagline: "Intelligent document processing (IDP), RPA, and automated AI decision workflow engines.",
    summary: "We automate complex multi-step enterprise workflows using intelligent document processing, Robotic Process Automation (RPA), and AI decision agents.",
    description: "We automate complex multi-step enterprise workflows using intelligent document processing, Robotic Process Automation (RPA), and AI decision agents.",
    content: "We automate complex multi-step enterprise workflows using intelligent document processing, Robotic Process Automation (RPA), and AI decision agents.",
    businessProblems: [
      "Manual Document Processing: High error rates and slow turnaround times in processing invoices, contracts, and claims.",
      "Repetitive Data Entry: Human resources trapped in mundane data extraction across disparate legacy applications.",
      "Workflow Bottlenecks: Delayed approval chains stalling order fulfillment and customer onboarding.",
      "Lack of Process Analytics: Inability to measure process bottlenecks and operational throughput in real time."
    ],
    capabilities: [
      "Intelligent Document Processing (IDP)",
      "AI Agentic Workflow Automation",
      "RPA & Legacy Automation",
      "OCR & Structural Data Extraction",
      "Process Mining & Analytics",
      "Human-in-the-Loop Validation"
    ],
    technology: [
      "ParseMaster", "UiPath", "Python", "Tesseract OCR", "OpenAI API", "Node.js", "Docker"
    ],
    industryApplications: [
      "Insurance", "Logistics", "BFSI", "Supply Chain"
    ],
    problemStatement: "Manual document extraction and repetitive data entry slow down operations and increase error rates.",
    solutionStatement: "Deploy ParseMaster intelligent document extraction agents and automated RPA workflow engines.",
    outcomes: "85% faster document processing times with 99.5% extraction accuracy and $1.2M annual operational savings.",
    accelerator: "ParseMaster",
    acceleratorSlug: "parsemaster",
    caseStudy: "Intelligent Document & Workflow Automation",
    caseStudySlug: "case-studies",
    cover_image_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    status: "published",
    display_order: 10
  }
];

// 1. Update cms_db.json
const cmsDbPath = path.join(__dirname, '../server/data/cms_db.json');
if (fs.existsSync(cmsDbPath)) {
  const dbData = JSON.parse(fs.readFileSync(cmsDbPath, 'utf8'));
  dbData.services = services;
  fs.writeFileSync(cmsDbPath, JSON.stringify(dbData, null, 2), 'utf8');
  console.log('Successfully updated cms_db.json with standardized service data!');
}

// 2. Update seedData.js
const seedDataPath = path.join(__dirname, '../server/data/seedData.js');
if (fs.existsSync(seedDataPath)) {
  let content = fs.readFileSync(seedDataPath, 'utf8');
  const servicesJson = JSON.stringify(services, null, 4);
  content = content.replace(/services:\s*\[[\s\S]*?\n  \],\n  accelerators:/, `services: ${servicesJson},\n  accelerators:`);
  fs.writeFileSync(seedDataPath, content, 'utf8');
  console.log('Successfully updated seedData.js with standardized service data!');
}

// 3. Update Supabase Database if DATABASE_URL is set
async function updateSupabase() {
  const connectionString = process.env.DATABASE_URL || "postgresql://postgres:Smrikaam!123%40321!@db.xkvdyeruawdvkownbnam.supabase.co:5432/postgres";
  if (!connectionString) {
    console.log('No DATABASE_URL found, skipping Supabase update.');
    return;
  }

  const client = new Client({ connectionString });
  try {
    await client.connect();
    console.log('Connected to Supabase PostgreSQL...');

    for (const srv of services) {
      const query = `
        UPDATE services
        SET 
          title = $1,
          tagline = $2,
          summary = $3,
          description = $4,
          business_problems = $5,
          capabilities = $6,
          technology = $7,
          outcomes = $8,
          accelerator = $9,
          case_study = $10,
          cover_image_url = $11,
          updated_at = NOW()
        WHERE slug = $12 OR id = $13;
      `;
      const values = [
        srv.title,
        srv.tagline,
        srv.summary,
        srv.description,
        JSON.stringify(srv.businessProblems),
        JSON.stringify(srv.capabilities),
        JSON.stringify(srv.technology),
        srv.outcomes,
        srv.accelerator,
        srv.caseStudy,
        srv.cover_image_url,
        srv.slug,
        srv.id
      ];

      await client.query(query, values);
      console.log(`Updated DB service: ${srv.title} (${srv.slug})`);
    }

    console.log('All services successfully updated in Supabase DB!');
  } catch (err) {
    console.error('Error updating Supabase DB:', err.message);
  } finally {
    await client.end();
  }
}

updateSupabase();
