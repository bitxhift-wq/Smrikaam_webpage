import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowUpRight, Activity, Cpu, CheckCircle2, Zap } from 'lucide-react';
import BlueprintWrapper from '../components/BlueprintWrapper';
import TextReveal from '../components/anim/TextReveal';
import BannerDrawBorder from '../components/anim/BannerDrawBorder';
import Reveal from '../components/anim/Reveal';
import DecorativeSideCubes from '../components/visuals/DecorativeSideCubes';
import PageCTA from '../components/PageCTA';

export default function Careers() {
  const perks = [
    'Real Projects from Day 1',
    'Industrial AI Exposure',
    'Modern Tech Stack',
    'Direct Mentorship',
    'Fast Career Growth',
    'Flexible Work Culture',
    'Learning Support',
    'Enterprise-Scale Projects'
  ];

  const techStack = [
    'Python', 'Azure', 'AWS', 'Snowflake', 'LangChain', 'LlamaIndex',
    'Airflow', 'Grafana', 'Docker', 'Kubernetes', 'TensorFlow', 'PyTorch'
  ];

  const hiringSteps = [
    { num: '1', name: 'Apply', desc: 'Submit resume & portfolio' },
    { num: '2', name: 'Technical Challenge', desc: 'Practical hands-on task' },
    { num: '3', name: 'Technical Discussion', desc: 'Deep dive with lead engineers' },
    { num: '4', name: 'Culture Conversation', desc: 'Meet leadership team' },
    { num: '5', name: 'Offer', desc: 'Join SMRIKAAM Technologies' }
  ];

  return (
    <div className="relative z-10 pt-20 sm:pt-28 pb-20 sm:pb-32 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="relative mb-16">
        <DecorativeSideCubes leftSize={120} rightSize={140} leftTop="10%" rightTop="25%" />
        <div className="page-title-surface relative z-10 border border-border p-6 sm:p-8 md:p-12 overflow-hidden">
          <BannerDrawBorder />
          <div className="flex items-center justify-between mb-4">
            <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-accent)] uppercase tracking-[0.2em] font-semibold">
              BUILD WITH US
            </div>
            <div className="font-mono text-[10px] md:text-[11px] text-[var(--color-text-muted)] border border-[var(--color-border)] px-3 py-1 bg-black/[0.02] dark:bg-white/[0.03]">
              COIMBATORE &amp; REMOTE
            </div>
          </div>

          <TextReveal
            text="ENGINEERS. ARCHITECTS. PROBLEM SOLVERS."
            as="h1"
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--color-text)] leading-[0.96] mb-4"
          />
          <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[var(--color-text-secondary)] max-w-3xl border-l-2 border-[var(--color-accent)] pl-4 font-normal leading-[1.6]">
            Join a technology organization building production-grade systems across data, AI, cloud, IIoT, and security.
          </p>
        </div>
      </div>

      {/* Live Operations Widget */}
      <BlueprintWrapper className="p-4 sm:p-8 mb-12 sm:mb-16 shadow-lg">
        <div className="flex items-center justify-between border-b border-border pb-4 mb-6 font-mono text-xs">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-accent" />
            <span className="font-semibold text-text uppercase">OPERATIONS METRICS</span>
          </div>
          <div className="flex gap-4 text-text-muted">
            <span>UPTIME: <span className="text-accent font-bold">99.9%</span></span>
            <span>LATENCY: <span className="text-accent font-bold">142ms</span></span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center font-mono">
          <div className="p-2 sm:p-4 subtle-readable-surface border border-border">
            <div className="text-[8px] sm:text-[10px] md:text-xs mb-0.5 sm:mb-1 font-semibold truncate">OEE INDEX</div>
            <div className="font-heading font-bold text-base sm:text-2xl md:text-3xl text-accent">92.4%</div>
          </div>
          <div className="p-2 sm:p-4 subtle-readable-surface border border-border">
            <div className="text-[8px] sm:text-[10px] md:text-xs mb-0.5 sm:mb-1 font-semibold truncate">ACTIVE MODELS</div>
            <div className="font-heading font-bold text-base sm:text-2xl md:text-3xl text-text">27</div>
          </div>
          <div className="p-2 sm:p-4 subtle-readable-surface border border-border">
            <div className="text-[8px] sm:text-[10px] md:text-xs mb-0.5 sm:mb-1 font-semibold truncate">DATA STREAMS</div>
            <div className="font-heading font-bold text-base sm:text-2xl md:text-3xl text-text">1.2k/s</div>
          </div>
          <div className="p-2 sm:p-4 subtle-readable-surface border border-border">
            <div className="text-[8px] sm:text-[10px] md:text-xs mb-0.5 sm:mb-1 font-semibold truncate">CLUSTER</div>
            <div className="font-heading font-bold text-base sm:text-2xl md:text-3xl text-accent">LIVE</div>
          </div>
        </div>
      </BlueprintWrapper>

      {/* Why Engineers Choose SMRIKAAM */}
      <div className="mb-16">
        <div className="label-accent mb-2">
          CULTURE &amp; GROWTH
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-text mb-8 border-b border-border pb-4">
          WHY ENGINEERS CHOOSE SMRIKAAM
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {perks.map((perk, idx) => (
            <BlueprintWrapper key={idx} className="p-4 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" strokeWidth={1.5} />
              <span className="font-sans text-[13px] md:text-sm font-medium text-text uppercase">{perk}</span>
            </BlueprintWrapper>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="mb-16">
        <div className="label-accent mb-2">
          JOIN US • OPEN POSITIONS
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-text mb-8 border-b border-border pb-4">
          ACTIVE OPPORTUNITIES
        </h2>

        <div className="space-y-8">
          {/* Position 1 */}
          <BlueprintWrapper className="p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div>
                <span className="tag tag-accent mb-2 text-[12px] font-normal">FULL-TIME · COIMBATORE / REMOTE</span>
                <h3 className="font-heading text-2xl font-bold uppercase text-text">
                  Data &amp; AI Engineer (Fresher)
                </h3>
              </div>
              <Link to="/contact" className="btn btn-primary font-semibold text-[14px] uppercase tracking-wider">
                Apply Now <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>

            <p className="text-[15px] font-normal text-text-muted leading-[1.65] mb-6">
              We are looking for IT and Computer Science graduates with strong Python skills and curiosity about Machine Learning and Generative AI. Work on live enterprise projects involving analytics dashboards, data pipelines, and LLM-powered applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-bg border border-border font-mono text-[13px]">
              <div>
                <div className="text-accent font-medium mb-2 uppercase">MUST HAVE:</div>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'ML fundamentals', 'Pandas / NumPy', 'SQL basics', 'Git'].map((s, i) => (
                    <span key={i} className="tag tag-neutral text-[12px] font-normal">+ {s}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-text font-medium mb-2 uppercase">GOOD TO HAVE:</div>
                <div className="flex flex-wrap gap-1.5">
                  {['ChatGPT APIs', 'Azure / AWS basics', 'Streamlit', 'Jupyter'].map((s, i) => (
                    <span key={i} className="tag tag-neutral text-[12px] font-normal">+ {s}</span>
                  ))}
                </div>
              </div>
            </div>
          </BlueprintWrapper>

          {/* Position 2 */}
          <BlueprintWrapper className="p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div>
                <span className="tag tag-accent mb-2 text-[12px] font-normal">FULL-TIME · COIMBATORE / REMOTE</span>
                <h3 className="font-heading text-2xl font-bold uppercase text-text">
                  Senior Data &amp; AI Engineer
                </h3>
              </div>
              <Link to="/contact" className="btn btn-primary font-semibold text-[14px] uppercase tracking-wider">
                Apply Now <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>

            <p className="text-[15px] font-normal text-text-muted leading-[1.65] mb-6">
              Lead enterprise AI, data engineering, and cloud transformation projects involving ML systems, Industrial IoT, operational intelligence, and enterprise-scale analytics platforms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-bg border border-border font-mono text-[13px]">
              <div>
                <div className="text-accent font-medium mb-2 uppercase">MUST HAVE:</div>
                <div className="flex flex-wrap gap-1.5">
                  {['Production-grade Python', 'ML/DL frameworks', 'LangChain / RAG', 'SQL', 'ETL pipelines', 'Cloud platforms'].map((s, i) => (
                    <span key={i} className="tag tag-neutral text-[12px] font-normal">+ {s}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-text font-medium mb-2 uppercase">GOOD TO HAVE:</div>
                <div className="flex flex-wrap gap-1.5">
                  {['Docker', 'Kubernetes', 'Grafana', 'MQTT / Modbus', 'FastAPI'].map((s, i) => (
                    <span key={i} className="tag tag-neutral text-[12px] font-normal">+ {s}</span>
                  ))}
                </div>
              </div>
            </div>
          </BlueprintWrapper>
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div className="mb-16">
        <div className="label-accent mb-2">
          TOOLING &amp; TECHNOLOGIES
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-text mb-6">
          MODERN TECH STACK
        </h2>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span key={i} className="tag tag-accent text-[12px] font-normal py-1.5 px-3">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 5-Step Hiring Process */}
      <div className="mb-16">
        <div className="label-accent mb-2">
          HIRING FLOW
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-text mb-8 border-b border-border pb-4">
          OUR HIRING PROCESS
        </h2>

        <div className="grid grid-cols-5 gap-1.5 sm:gap-3 lg:gap-4">
          {hiringSteps.map((step, idx) => (
            <BlueprintWrapper key={idx} className="p-2 sm:p-4 lg:p-6 text-center">
              <div className="font-heading font-bold text-base sm:text-2xl lg:text-3xl text-accent mb-0.5 sm:mb-2">{step.num}</div>
              <div className="font-heading font-bold text-[8px] sm:text-xs lg:text-base uppercase text-text mb-0.5 sm:mb-1 truncate">{step.name}</div>
              <div className="hidden sm:block text-[8px] sm:text-[10px] lg:text-xs text-text-muted leading-tight">{step.desc}</div>
            </BlueprintWrapper>
          ))}
        </div>
      </div>

      {/* CTA */}
      <PageCTA
        eyebrow="CAREERS &amp; OPPORTUNITIES"
        title="READY TO BUILD WHAT'S NEXT?"
        description="Join SMRIKAAM Technologies and help shape the future of Industrial AI, operational intelligence, and enterprise automation."
        buttonText="APPLY NOW"
        buttonLink="/contact"
      />
    </div>
  );
}
