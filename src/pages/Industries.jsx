import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, BatteryCharging, ShoppingBag, Landmark, Stethoscope, Truck, Car, PhoneCall, Tv, ArrowUpRight } from 'lucide-react';
import BlueprintWrapper from '../components/BlueprintWrapper';
import TextReveal from '../components/anim/TextReveal';
import BannerDrawBorder from '../components/anim/BannerDrawBorder';
import Reveal from '../components/anim/Reveal';

export default function Industries() {
  const industriesData = [
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: Factory,
      challenge: 'Machine downtime, unmonitored OEE, manual quality inspections, and fragmented shop-floor PLC data.',
      solution: 'Edge IIoT deployment, live OEE telemetry dashboards, vibration anomaly models, and SAP S/4HANA production order sync.',
      technology: ['OPC-UA', 'MQTT', 'BitXhift IIoT', 'TimescaleDB', 'Python Edge AI'],
      outcome: '35% downtime reduction and 4.2% OEE index improvement across 500+ connected factory units.',
      caseStudy: 'Smart Factory Manufacturing Transformation'
    },
    {
      id: 'energy',
      name: 'Energy & Utilities',
      icon: BatteryCharging,
      challenge: 'Grid load fluctuations, legacy meter telemetry silos, and reactive transformer maintenance.',
      solution: 'High-frequency telemetry ingestion pipelines, predictive grid loading analytics, and transformer thermal monitoring.',
      technology: ['Modbus', 'TimescaleDB', 'ParseMaster', 'Apache Spark', 'Grafana'],
      outcome: '22% reduction in unmetered energy loss and 12-hour advance warning on grid equipment overloads.',
      caseStudy: 'Smart Meter & Thermal Grid Telemetry'
    },
    {
      id: 'retail',
      name: 'Retail & E-Commerce',
      icon: ShoppingBag,
      challenge: 'Stockouts, slow inventory reconciliation across warehouses, and fragmented customer purchase logs.',
      solution: 'Unified inventory telemetry lakehouse, real-time demand forecasting models, and automated ERP reconciliation.',
      technology: ['Snowflake', 'dbt', 'LinkGenX', 'PostgreSQL', 'LangChain'],
      outcome: '99.4% inventory accuracy and 15% reduction in carrying costs across nationwide fulfillment centers.',
      caseStudy: 'Retail Enterprise Supply Chain Transformation'
    },
    {
      id: 'bfsi',
      name: 'BFSI (Banking & Financial Services)',
      icon: Landmark,
      challenge: 'Legacy core banking system isolation, slow loan document processing, and strict audit compliance burdens.',
      solution: 'Agentic AI document processing, zero-trust cloud data lakehouse, and automated DPDP audit lineage logging.',
      technology: ['MigrateMax', 'ParseMaster', 'LangChain', 'Python OCR', 'PostgreSQL'],
      outcome: '80% faster loan application turnaround and 100% compliance audit readiness.',
      caseStudy: 'BFSI Intelligent Document Processing'
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Life Sciences',
      icon: Stethoscope,
      challenge: 'Siloed patient EHR databases, HIPAA compliance restrictions, and slow clinical research analytics.',
      solution: 'De-identified medical data ingestion lakehouse, HIPAA-compliant access controls, and AI patient outcome models.',
      technology: ['FHIR API', 'ParseMaster', 'PostgreSQL', 'Python ML', 'Terraform'],
      outcome: '10x faster clinical query speeds and zero data security breaches.',
      caseStudy: 'Healthcare Data Governance & Privacy'
    },
    {
      id: 'logistics',
      name: 'Logistics & Supply Chain',
      icon: Truck,
      challenge: 'Fleet route inefficiency, manual customs document parsing, and lack of real-time shipment status visibility.',
      solution: 'Real-time GPS & IoT telematics streaming, automated EDI 856 parsing, and dynamic route optimization engines.',
      technology: ['ParseMaster', 'MQTT', 'PostgreSQL', 'Google Maps API', 'Kafka'],
      outcome: '18% fuel cost savings and sub-second container tracking across regional transit corridors.',
      caseStudy: 'Global Supply Chain Data Lakehouse'
    },
    {
      id: 'automotive',
      name: 'Automotive OEM & Components',
      icon: Car,
      challenge: 'Assembly line bottlenecks, vendor component quality variances, and complex warranty analytics.',
      solution: 'Vision-based defect detection at assembly stations, supplier portal ERP sync, and warranty anomaly detection.',
      technology: ['BitXhift IIoT', 'LinkGenX', 'OpenCV', 'PyTorch', 'SAP S/4HANA'],
      outcome: '99.8% first-pass yield rate and 45% reduction in warranty claim processing times.',
      caseStudy: 'Automotive OEM Live Analytics Dashboard'
    },
    {
      id: 'telecom',
      name: 'Telecom & Infrastructure',
      icon: PhoneCall,
      challenge: '5G tower power management overhead, high subscriber churn, and massive call detail record (CDR) volumes.',
      solution: 'High-throughput CDR streaming lakehouse, tower battery AI power optimization, and subscriber churn risk scoring.',
      technology: ['ParseMaster', 'Apache Spark', 'Databricks', 'TimescaleDB', 'Python ML'],
      outcome: '25% reduction in cell tower energy consumption and 12% lower customer churn.',
      caseStudy: 'Telecom Infrastructure CDR Analytics'
    },
    {
      id: 'media',
      name: 'Media & Digital Publishing',
      icon: Tv,
      challenge: 'Unstructured video metadata, slow content asset search, and unmonitored streaming CDN performance.',
      solution: 'AI multimodal asset indexing, real-time CDN streaming telemetry, and automated metadata tagging.',
      technology: ['Gemini API', 'LangChain', 'ParseMaster', 'Pinecone', 'AWS CloudFront'],
      outcome: '90% faster media asset discovery and sub-second video search indexing.',
      caseStudy: 'Media Enterprise Digital Asset AI Search'
    }
  ];

  return (
    <div className="relative z-10 pt-28 pb-32 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div id="overview" data-scroll-label="INDUSTRIES" className="page-title-surface relative border border-border p-8 md:p-12 mb-16 overflow-hidden">
        <BannerDrawBorder />
        <div className="flex items-center justify-between mb-4">
          <div className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
            INDUSTRIES &amp; DOMAINS // DEPLOYMENT BLUEPRINTS
          </div>
          <div className="font-mono text-xs text-text-muted border border-border px-3 py-1 bg-black/[0.02] dark:bg-white/[0.03]">
            9 SECTOR SOLUTIONS
          </div>
        </div>

        <TextReveal
          text="TECHNOLOGY THAT UNDERSTANDS YOUR INDUSTRY."
          as="h1"
          className="font-heading text-4xl md:text-6xl font-bold uppercase text-text mb-4"
        />
        <p className="text-text-muted text-lg max-w-3xl border-l-2 border-accent pl-4 font-normal leading-relaxed">
          SMRIKAAM brings domain expertise and specialized engineering frameworks tailored to the unique operational realities of major global sectors.
        </p>
      </div>

      {/* Grid of Industries */}
      <div id="sectors" data-scroll-label="SECTORS" className="space-y-12 mb-16">
        {industriesData.map((ind, idx) => {
          const Icon = ind.icon;
          return (
            <Reveal key={ind.id} index={idx}>
              <BlueprintWrapper className="p-8 hover:border-accent transition-colors">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                  {/* Left: Industry & Challenge */}
                  <div className="lg:w-1/2 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-accent uppercase">SECTOR // 0{idx + 1}</span>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-text uppercase">
                          {ind.name}
                        </h2>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-mono text-xs text-text-muted uppercase font-bold mb-1">INDUSTRY CHALLENGE</h3>
                      <p className="text-sm text-text leading-relaxed subtle-readable-surface p-3 border border-border">{ind.challenge}</p>
                    </div>

                    <div>
                      <h3 className="font-mono text-xs text-accent uppercase font-bold mb-1">SMRIKAAM SOLUTION</h3>
                      <p className="text-sm text-text font-medium leading-relaxed bg-accent/5 p-3 border border-accent/30">{ind.solution}</p>
                    </div>
                  </div>

                  {/* Right: Tech, Outcome & Case Study */}
                  <div className="lg:w-1/2 subtle-readable-surface border border-border p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-mono text-xs text-text font-bold uppercase mb-2">TECHNOLOGY STACK</h3>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {ind.technology.map((tech, i) => (
                          <span key={i} className="inline-block px-2.5 py-1 text-xs subtle-readable-surface font-mono text-text font-medium uppercase border border-border">{tech}</span>
                        ))}
                      </div>

                      <h3 className="font-mono text-xs text-text font-bold uppercase mb-1">BUSINESS OUTCOME</h3>
                      <p className="text-sm font-semibold text-text mb-4">{ind.outcome}</p>
                    </div>

                    <div className="pt-4 border-t border-border flex items-center justify-between font-mono text-xs">
                      <span className="text-text-muted">CASE STUDY: <strong className="text-text">{ind.caseStudy}</strong></span>
                      <Link to="/case-studies" className="btn btn-ghost p-0 text-accent font-bold uppercase flex items-center gap-1">
                        View Blueprint <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </BlueprintWrapper>
            </Reveal>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div id="cta" data-scroll-label="STRATEGY CALL" className="border border-border p-10 text-center bg-bg/95 backdrop-blur-md">
        <h2 className="font-heading text-3xl font-bold uppercase text-text mb-3">
          NEED AN ENGINEERING BLUEPRINT FOR YOUR INDUSTRY?
        </h2>
        <p className="text-text-muted max-w-xl mx-auto mb-6">
          Schedule a strategy call to explore architecture diagrams and industry-specific case studies.
        </p>
        <Link to="/contact" className="btn btn-primary text-sm font-bold uppercase tracking-wider">
          BOOK STRATEGY CALL <ArrowUpRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}
