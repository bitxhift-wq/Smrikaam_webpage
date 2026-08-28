import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Cpu, Cloud, Database, Network, CheckCircle2, ArrowRight } from 'lucide-react';
import BlueprintWrapper from '../components/BlueprintWrapper';
import TextReveal from '../components/anim/TextReveal';
import BannerDrawBorder from '../components/anim/BannerDrawBorder';
import Reveal from '../components/anim/Reveal';

export default function Accelerators() {
  const acceleratorsData = [
    {
      id: 'bitxhift',
      name: 'BitXhift',
      tagline: 'Industrial IoT & Edge Intelligence Accelerator',
      icon: Cpu,
      problem: 'Factory floor machines, CNC units, and PLC controllers store data in isolated OPC-UA, Modbus, or serial protocol silos, leaving floor managers without real-time OEE visibility.',
      solution: 'An edge-to-cloud IIoT telemetry framework that ingests high-frequency machine signals, computes live OEE, and streams predictive alerts directly to enterprise dashboards.',
      howItWorks: 'Edge agents connect to PLCs via Modbus/OPC-UA → Parse & normalize signals → Stream via MQTT to TimescaleDB → Render live OEE dashboards & push alerts to SAP.',
      architecture: 'Distributed Edge Containers + TimescaleDB + MQTT Event Bus + React Real-Time Floor Wallboard.',
      keyCapabilities: ['Real-Time OEE Calculation', 'Vibration Anomaly Detection', 'Energy Load Optimization', 'Automated Shift Reporting'],
      technology: ['MQTT', 'OPC-UA', 'Node-RED', 'TimescaleDB', 'Docker Edge'],
      businessOutcomes: '35% reduction in unplanned downtime and live OEE tracking across 500+ connected machines within 48 hours.',
      caseStudy: 'Smart Factory Manufacturing Transformation',
    },
    {
      id: 'migratemax',
      name: 'MigrateMax',
      tagline: 'Cloud & Data Warehouse Migration Accelerator',
      icon: Cloud,
      problem: 'Legacy database migrations (Oracle, MSSQL, Teradata) to cloud data warehouses suffer from high downtime risk, complex schema translation errors, and data discrepancy issues.',
      solution: 'An automated schema mapping, data validation, and zero-downtime cutover framework that automates translation and continuously validates row-level data consistency.',
      howItWorks: 'Automated DDL Schema Translation → Parallel Change Data Capture (CDC) Sync → Automated Row Hash Verification → Zero-Downtime DNS Cutover.',
      architecture: 'Python Schema Parser + Spark Parallel CDC Extractor + Snowflake / Redshift Target Loader + Automated Diff Auditor.',
      keyCapabilities: ['Automated DDL & Stored Proc Conversion', 'Zero-Downtime CDC Stream', 'Automated Reconciliation Audit', 'Rollback Safety Net'],
      technology: ['Oracle', 'MSSQL', 'Snowflake', 'Redshift', 'Databricks', 'AWS / GCP'],
      businessOutcomes: '60% faster database migration cutover with 100% data fidelity and zero business disruption.',
      caseStudy: 'Enterprise SAP & Database Cloud Migration',
    },
    {
      id: 'parsemaster',
      name: 'ParseMaster',
      tagline: 'Enterprise Data Transformation Engine',
      icon: Database,
      problem: 'High-volume unstructured feeds (EDI 850/856, XML invoices, multi-nested JSON, sensor logs) overload traditional ETL tools and cause frequent pipeline breakages.',
      solution: 'A high-throughput streaming parsing engine that dynamically converts complex unstructured payload formats into clean tabular schemas for warehouse loading.',
      howItWorks: 'Schema Inference & Payload Detection → Multi-Threaded Streaming Parser → Schema Drift auto-fix → Direct Parquet/Iceberg Warehouse Writes.',
      architecture: 'Rust Core Parser + Apache Spark Streaming + dbt Transformation Layers + Delta / Iceberg Storage.',
      keyCapabilities: ['Multi-Format Ingestion (EDI, XML, JSON)', 'Dynamic Schema Drift Handling', 'Sub-Second Payload Parsing', 'Built-in Data Quality Asserts'],
      technology: ['Rust', 'Apache Spark', 'Parquet', 'dbt', 'Snowflake', 'BigQuery'],
      businessOutcomes: '80% reduction in pipeline breakage incidents and 5x faster payload transformation rates.',
      caseStudy: 'Global Supply Chain Data Lakehouse',
    },
    {
      id: 'linkgenx',
      name: 'LinkGenX',
      tagline: 'SAP / ERP & Cloud Integration Framework',
      icon: Network,
      problem: 'Building point-to-point integrations between SAP S/4HANA, Salesforce, ServiceNow, and custom cloud apps creates fragile brittle spaghetti code.',
      solution: 'An event-driven integration mesh with prebuilt enterprise SAP connectors, automated API contract testing, and reliable message retry routing.',
      howItWorks: 'Event Producer (SAP IDoc / RFC) → LinkGenX Event Mesh Router → Schema Contract Validation → Target Consumer Delivery with Retry Queue.',
      architecture: 'Event-Driven Microservices Mesh + RabbitMQ / Kafka Event Bus + OpenAPI Contract Validator + Prebuilt SAP RFC Connectors.',
      keyCapabilities: ['Prebuilt SAP S/4HANA Connectors', 'Event Mesh Publish-Subscribe', 'Contract Compatibility Guard', 'Automated Dead-Letter Queue'],
      technology: ['SAP S/4HANA', 'Salesforce', 'ServiceNow', 'Apache Kafka', 'GraphQL', 'Docker'],
      businessOutcomes: '70% reduction in integration setup effort with 99.999% message delivery reliability.',
      caseStudy: 'BFSI Automated ERP Integration Engine',
    }
  ];

  return (
    <div className="relative z-10 pt-28 pb-32 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div id="overview" data-scroll-label="ACCELERATORS" className="page-title-surface relative border border-border p-8 md:p-12 mb-16 overflow-hidden">
        <BannerDrawBorder />
        <div className="flex items-center justify-between mb-4">
          <div className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
            PROPRIETARY ASSETS // REUSABLE IP
          </div>
          <div className="font-mono text-xs text-text-muted border border-border px-3 py-1 bg-black/[0.02] dark:bg-white/[0.03]">
            4 ENTERPRISE ACCELERATORS
          </div>
        </div>

        <TextReveal
          text="ACCELERATE TRANSFORMATION. DON'T START FROM ZERO."
          as="h1"
          className="font-heading text-4xl md:text-6xl font-bold uppercase text-text mb-4"
        />
        <p className="text-text-muted text-lg max-w-3xl border-l-2 border-accent pl-4 font-normal leading-relaxed">
          SMRIKAAM proprietary engineering assets and reusable accelerators reduce enterprise deployment timelines by up to 60%.
        </p>
      </div>

      {/* Product-Style Experience */}
      <div className="space-y-16">
        {acceleratorsData.map((acc, idx) => {
          const Icon = acc.icon;
          return (
            <Reveal key={acc.id} index={idx}>
              <div id={acc.id} data-scroll-label={acc.name.toUpperCase()}>
                <BlueprintWrapper className="p-8 md:p-12 hover:border-accent transition-colors">
                <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8 pb-8 border-b border-border">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="tag tag-accent text-xs font-mono">REUSABLE ENGINEERING ASSET</span>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text uppercase">
                          {acc.name}
                        </h2>
                      </div>
                    </div>
                    <p className="font-mono text-sm text-text-muted">{acc.tagline}</p>
                  </div>
                  <div className="shrink-0 flex items-center">
                    <Link to="/contact" className="btn btn-primary text-xs font-bold uppercase tracking-wider">
                      REQUEST DEMO <ArrowUpRight className="w-4 h-4 ml-1" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Column 1: Problem & Solution */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-mono text-xs text-text-muted uppercase font-bold mb-2">1. PROBLEM</h3>
                      <p className="text-xs text-text leading-relaxed subtle-readable-surface p-3 border border-border">{acc.problem}</p>
                    </div>
                    <div>
                      <h3 className="font-mono text-xs text-accent uppercase font-bold mb-2">2. SOLUTION</h3>
                      <p className="text-xs text-text font-medium leading-relaxed bg-accent/5 p-3 border border-accent/30">{acc.solution}</p>
                    </div>
                  </div>

                  {/* Column 2: How it works & Architecture */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-mono text-xs text-text-muted uppercase font-bold mb-2">3. HOW IT WORKS</h3>
                      <p className="text-xs text-text-muted leading-relaxed">{acc.howItWorks}</p>
                    </div>
                    <div>
                      <h3 className="font-mono text-xs text-text-muted uppercase font-bold mb-2">4. ARCHITECTURE</h3>
                      <p className="text-xs text-text font-mono subtle-readable-surface p-3 border border-border">{acc.architecture}</p>
                    </div>
                  </div>

                  {/* Column 3: Capabilities, Tech & Outcome */}
                  <div className="space-y-6 subtle-readable-surface p-4 border border-border">
                    <div>
                      <h3 className="font-mono text-xs text-text font-bold uppercase mb-2">5. KEY CAPABILITIES</h3>
                      <ul className="space-y-1.5">
                        {acc.keyCapabilities.map((cap, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-xs text-text font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-mono text-xs text-text font-bold uppercase mb-1.5">6. TECHNOLOGY</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {acc.technology.map((tech, i) => (
                          <span key={i} className="tag tag-neutral text-xs font-mono font-medium">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-mono text-xs text-accent font-bold uppercase mb-1">7. BUSINESS OUTCOME</h3>
                      <p className="text-xs text-text font-semibold leading-relaxed">{acc.businessOutcomes}</p>
                    </div>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-text-muted">LINKED CASE STUDY:</span>
                    <span className="text-text font-bold">{acc.caseStudy}</span>
                  </div>
                  <Link to="/case-studies" className="text-accent hover:underline flex items-center gap-1 font-bold">
                    View Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </BlueprintWrapper>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* End CTA */}
      <div id="cta" data-scroll-label="STRATEGY CALL" className="mt-16 border border-border p-10 text-center bg-bg/95 backdrop-blur-md">
        <h2 className="font-heading text-3xl font-bold uppercase text-text mb-3">
          WANT TO DEPLOY AN ACCELERATOR IN YOUR ENTERPRISE?
        </h2>
        <p className="text-text-muted max-w-xl mx-auto mb-6">
          Our solutions engineering team can conduct a 48-hour pilot setup using BitXhift, MigrateMax, ParseMaster, or LinkGenX.
        </p>
        <Link to="/contact" className="btn btn-primary text-sm font-bold uppercase tracking-wider">
          BOOK STRATEGY CALL <ArrowUpRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}
