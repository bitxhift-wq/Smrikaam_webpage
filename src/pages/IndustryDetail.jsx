import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import api from '../api';
import BlueprintWrapper from '../components/BlueprintWrapper';
import ReadingProgressBar from '../components/anim/ReadingProgressBar';
import TextReveal from '../components/anim/TextReveal';
import Reveal from '../components/anim/Reveal';

export default function IndustryDetail() {
  const { slug } = useParams();
  const [industry, setIndustry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const defaultIndustriesMap = {
    'manufacturing': {
      name: 'Manufacturing & Industrial Machinery',
      slug: 'manufacturing',
      summary: 'Smart factory engineering, edge telemetry, and automated machine yield optimization.',
      content: `Discrete and process manufacturing facilities require real-time visibility across CNC lines, PLC controllers, and assembly operations. SMRIKAAM deploys BitXhift IIoT telemetry pipelines that aggregate Modbus/OPC-UA sensor feeds, calculate live OEE, and trigger automated preventive maintenance alerts.`,
      key_solutions: ['Modbus/OPC-UA Machine Integration', 'Live Shop-Floor OEE Analytics', 'ParseMaster EDI & Data Processing', 'Predictive Downtime Prevention']
    },
    'energy-utilities': {
      name: 'Energy & Utilities',
      slug: 'energy-utilities',
      summary: 'Grid telemetry, smart meter data ingestion, and renewable generation forecasting.',
      content: `Substations, solar installations, and distribution grids demand high-frequency time-series telemetry. SMRIKAAM builds scalable IoT telemetry pipelines that stream SCADA and smart meter metrics into cloud lakehouses for load forecasting and grid health analytics.`,
      key_solutions: ['SCADA & Smart Meter Ingestion', 'Time-Series Telemetry Storage', 'Renewable Generation Forecasting', 'Grid Anomaly Detection']
    },
    'retail-e-commerce': {
      name: 'Retail & E-Commerce',
      slug: 'retail-e-commerce',
      summary: 'Real-time inventory intelligence, demand forecasting, and omnichannel data pipelines.',
      content: `Omnichannel retail operations depend on real-time inventory synchronization across ERPs, warehouses, and e-commerce storefronts. SMRIKAAM builds event-driven data integration meshes using LinkGenX to prevent stockouts and optimize fulfillment logistics.`,
      key_solutions: ['Omnichannel ERP Integration', 'Real-Time Stock Synchronization', 'Automated Demand Forecasting', 'Customer Data Governance']
    },
    'bfsi': {
      name: 'BFSI & Financial Services',
      slug: 'bfsi',
      summary: 'Secure financial data lakehouses, automated fraud detection, and regulatory reporting.',
      content: `Financial institutions require bulletproof security, audit lineage, and sub-second transaction processing. SMRIKAAM architects DPDP and RBI-compliant data lakehouses with automated lineage tracking, role-based encryption, and streaming transaction analytics.`,
      key_solutions: ['Secure Financial Lakehouse', 'Automated Audit Lineage', 'DPDP & Regulatory Compliance', 'Streaming Transaction Auditing']
    },
    'healthcare-life-sciences': {
      name: 'Healthcare & Life Sciences',
      slug: 'healthcare-life-sciences',
      summary: 'De-identified clinical data pipelines, FHIR API integration, and HIPAA compliance.',
      content: `Healthcare networks and clinical research labs require compliant EHR data ingestion and secure analytics pipelines. SMRIKAAM builds de-identified patient data lakehouses with FHIR API adapters, automated privacy masking, and high-performance querying.`,
      key_solutions: ['FHIR API Integration', 'De-Identified Patient Lakehouse', 'HIPAA & DPDP Privacy Masking', 'Clinical Query Acceleration']
    },
    'logistics-supply-chain': {
      name: 'Logistics & Supply Chain',
      slug: 'logistics-supply-chain',
      summary: 'Fleet telemetry, warehouse WMS integration, and route optimization pipelines.',
      content: `Supply chain networks require real-time fleet GPS tracking, warehouse management system (WMS) integration, and automated shipment milestone updates. SMRIKAAM builds high-throughput streaming pipelines that connect telemetry feeds with core ERPs.`,
      key_solutions: ['Fleet Telemetry Ingestion', 'WMS & ERP Synchronization', 'Automated Milestone Tracking', 'Route & Fuel Analytics']
    }
  };

  // Aliases
  defaultIndustriesMap['energy'] = defaultIndustriesMap['energy-utilities'];
  defaultIndustriesMap['retail'] = defaultIndustriesMap['retail-e-commerce'];
  defaultIndustriesMap['retail-ecommerce'] = defaultIndustriesMap['retail-e-commerce'];
  defaultIndustriesMap['healthcare'] = defaultIndustriesMap['healthcare-life-sciences'];
  defaultIndustriesMap['logistics'] = defaultIndustriesMap['logistics-supply-chain'];

  useEffect(() => {
    async function loadIndustry() {
      try {
        const res = await api.get(`/industries/${slug}`);
        if (res.data) {
          setIndustry(res.data);
        } else if (defaultIndustriesMap[slug]) {
          setIndustry(defaultIndustriesMap[slug]);
        } else {
          setError('Industry profile not found.');
        }
      } catch (err) {
        if (defaultIndustriesMap[slug]) {
          setIndustry(defaultIndustriesMap[slug]);
        } else {
          setError('Industry profile not found.');
        }
      } finally {
        setLoading(false);
      }
    }
    loadIndustry();
  }, [slug]);

  if (loading) {
    return <div className="font-mono text-sm text-text-muted pt-32 pb-24 text-center">LOADING_SECTOR_PROFILE...</div>;
  }

  if (error || !industry) {
    return (
      <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto text-center">
        <BlueprintWrapper className="p-12">
          <div className="font-mono text-xs text-accent uppercase mb-4">404 // NOT_FOUND</div>
          <h1 className="font-heading text-3xl text-text mb-4">SECTOR NOT FOUND</h1>
          <p className="text-text-muted mb-6">{error}</p>
          <Link to="/industries" className="btn btn-primary">
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Industries
          </Link>
        </BlueprintWrapper>
      </div>
    );
  }

  return (
    <div className="relative z-10 pt-28 pb-24 px-6 md:px-16 max-w-5xl mx-auto">
      <ReadingProgressBar />

      <Link to="/industries" className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase mb-8 hover:underline">
        <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Industries
      </Link>

      <BlueprintWrapper className="service-detail-surface p-8 md:p-12 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="tag tag-accent">INDUSTRY SECTOR</span>
          <span className="font-mono text-xs text-text-muted">SLUG: {industry.slug}</span>
        </div>

        <TextReveal
          text={industry.name}
          as="h1"
          className="font-heading text-4xl md:text-5xl font-bold uppercase text-text mb-6 tracking-tight"
        />

        <p className="text-lg md:text-xl text-text-muted font-normal border-l-2 border-accent pl-4 mb-8 leading-relaxed">
          {industry.summary}
        </p>

        {industry.cover_image_url && (
          <Reveal className="mb-10 overflow-hidden border border-border h-80 relative bg-black/5 dark:bg-white/5">
            <img src={industry.cover_image_url} alt={industry.name} className="w-full h-full object-cover duotone" />
          </Reveal>
        )}

        <Reveal className="prose prose-content max-w-none text-text mb-12 whitespace-pre-line leading-relaxed text-base font-normal">
          {industry.content}
        </Reveal>

        {industry.key_solutions && industry.key_solutions.length > 0 && (
          <Reveal className="border-t border-border pt-8 mb-12">
            <h3 className="font-heading text-xl font-bold text-text mb-4 uppercase">
              DEPLOYED SOLUTIONS IN THIS SECTOR
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industry.key_solutions.map((sol, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 subtle-readable-surface border border-border">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="font-mono text-sm text-text font-medium">{sol}</span>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-heading text-lg font-bold text-text uppercase">Consult with Sector Experts</div>
            <div className="font-mono text-xs text-text-muted font-normal">Explore how our solution maps to your shop floor</div>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Request Sector Audit <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </BlueprintWrapper>
    </div>
  );
}
