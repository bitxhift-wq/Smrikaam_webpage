import React from 'react';

export const ENTERPRISE_TECHNOLOGIES = [
  'AWS',
  'Azure',
  'Google Cloud',
  'Snowflake',
  'Databricks',
  'dbt',
  'Apache Spark',
  'Kubernetes',
  'Docker',
  'Terraform',
  'Grafana',
  'Apache Kafka',
  'ServiceNow',
  'SAP',
  'Python',
  'PyTorch',
  'MLflow',
  'OpenAI',
  'Azure OpenAI',
  'AWS Bedrock'
];

export default function TechStackRibbon({ className = '' }) {
  // Duplicate array 2x for seamless infinite marquee loop
  const marqueeItems = [...ENTERPRISE_TECHNOLOGIES, ...ENTERPRISE_TECHNOLOGIES];

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      {/* Ribbon Header Label */}
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 max-w-7xl mx-auto mb-2">
        <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-text-muted)] uppercase tracking-[0.2em] font-semibold flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[var(--color-accent)] animate-pulse" />
          <span>POWERED BY ENTERPRISE-GRADE TECHNOLOGIES</span>
        </div>
        <div className="font-mono text-[10px] text-[var(--color-text-muted)] tracking-wider hidden sm:block">
          LIVE RUNNING STACK // 20 NODES
        </div>
      </div>

      {/* Marquee Viewport with Edge Fade Masks */}
      <div
        className="tech-ribbon-container py-2.5"
        role="region"
        aria-label="Enterprise Technologies Powered by SMRIKAAM"
      >
        <div className="tech-ribbon-track">
          {marqueeItems.map((tech, idx) => (
            <div key={`${tech}-${idx}`} className="tech-ribbon-item">
              <span>{tech}</span>
              <span className="tech-ribbon-sep" aria-hidden="true">/</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
