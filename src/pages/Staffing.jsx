import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowUpRight, CheckCircle2, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import BlueprintWrapper from '../components/BlueprintWrapper';
import TextReveal from '../components/anim/TextReveal';
import BannerDrawBorder from '../components/anim/BannerDrawBorder';
import Reveal from '../components/anim/Reveal';

export default function Staffing() {
  const [openFaq, setOpenFaq] = useState(null);

  const stats = [
    { num: '2,500+', label: 'Vetted Specialists' },
    { num: '72h', label: 'Avg. Time to Shortlist' },
    { num: '95%', label: 'Offer Acceptance' },
    { num: '40+', label: 'Enterprise Clients' }
  ];

  const models = [
    {
      title: 'Temporary Staffing',
      subtitle: 'On-demand specialists for surge capacity and short-term programs.',
      desc: 'Scale your team within days with pre-vetted technology professionals for project sprints, seasonal demand, parental leave cover, or transformation programs. We handle sourcing, screening, onboarding, and payroll.',
      bullets: ['48–72h shortlist turnaround', 'Fully payrolled & compliant', 'Engineering, data, cloud & IIoT roles', 'Onsite, hybrid or fully remote']
    },
    {
      title: 'Permanent Placement',
      subtitle: 'End-to-end recruitment for full-time technology hires.',
      desc: 'Hire senior engineers, data scientists, architects, and product specialists who will stay and grow with you. Our multi-stage technical and behavioural screening ensures every candidate matches your stack and culture.',
      bullets: ['Niche AI, Data, IIoT, Cloud roles', 'Cultural & leadership fit screening', 'Replacement guarantee', 'Salary benchmarking & offer support']
    },
    {
      title: 'Contract & Project-Based Staffing',
      subtitle: 'Outcome-driven pods for time-boxed transformation programs.',
      desc: 'Build a dedicated delivery pod—engineers, data scientists, SREs, and product owners—aligned to a specific roadmap with clear milestones and outcomes. Ideal for analytics platforms, IIoT rollouts, and cloud migrations.',
      bullets: ['Fixed-duration engagements (3–18 months)', 'Milestone-based delivery', 'Dedicated pod with single accountability', 'Smooth handover & documentation']
    },
    {
      title: 'Executive Search',
      subtitle: 'Confidential search for CXO, VP and Director-level technology leaders.',
      desc: 'When you are hiring a CTO, Head of Data, VP Engineering, or transformation leader, we run a discreet executive search across India and key global markets—combining domain mapping and reference assessments.',
      bullets: ['CTO, CIO, CDO, VP Eng & Head of Data', 'Confidential market mapping', 'Reference-backed shortlists', 'Onboarding & 90-day success support']
    }
  ];

  const verticals = ['Manufacturing', 'Energy & Utilities', 'Retail & E-Commerce', 'BFSI', 'Healthcare & Life Sciences', 'Logistics & Supply Chain', 'Automotive', 'Telecom', 'Media'];

  const processSteps = [
    { num: '1', name: 'Discovery', desc: 'We map your role, stack, team culture, and success criteria—usually in a single call.' },
    { num: '2', name: 'Sourcing', desc: 'We tap our pre-vetted talent pool and run targeted outreach across India.' },
    { num: '3', name: 'Screening', desc: 'Technical interviews, system-design tasks, and behavioural assessment by senior engineers.' },
    { num: '4', name: 'Onboarding', desc: 'We coordinate offer, paperwork, onboarding, and a 90-day check-in for every placement.' }
  ];

  const faqs = [
    { q: 'How fast can you shortlist candidates?', a: 'For temporary staffing and staff augmentation, we deliver a shortlist of 3-5 pre-screened candidates within 48 to 72 hours.' },
    { q: 'Do you handle payroll and compliance for contract staff?', a: 'Yes. SMRIKAAM Technologies LLP manages complete statutory compliance, PF/ESI, payroll, background checks, and NDAs for all temporary and contract talent.' },
    { q: 'What technology areas do you specialise in?', a: 'We specialise exclusively in Data Engineering, Industrial IoT, AI/ML (Generative & RAG), Cloud Infrastructure (AWS/Azure/GCP), DevOps/Kubernetes, and SAP/ERP Integrations.' },
    { q: 'Can you build a dedicated offshore team for us?', a: 'Yes, we set up dedicated engineering pods and ODCs from our Coimbatore headquarters with single-point project delivery management.' },
    { q: 'Do you offer a replacement guarantee?', a: 'All permanent placement hires come with a 90-day replacement guarantee at zero additional cost.' },
    { q: 'Which locations do you serve?', a: 'We serve enterprise clients across India and global remote teams directly from our Coimbatore headquarters.' }
  ];

  return (
    <div className="relative z-10 pt-28 pb-32 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div id="overview" data-scroll-label="STAFFING" className="page-title-surface relative border border-border p-8 md:p-12 mb-16 overflow-hidden">
        <BannerDrawBorder />
        <div className="flex items-center justify-between mb-4">
          <div className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
            STAFFING SERVICES // TECH TALENT AUGMENTATION
          </div>
          <div className="font-mono text-xs text-text-muted border border-border px-3 py-1 bg-black/[0.02] dark:bg-white/[0.03]">
            2,500+ VETTED SPECIALISTS
          </div>
        </div>

        <TextReveal
          text="SPECIALIST TECHNOLOGY TALENT. ENGINEERED FOR DELIVERY."
          as="h1"
          className="font-heading text-4xl md:text-6xl font-bold uppercase text-text mb-4"
        />
        <p className="text-text-muted text-lg max-w-3xl border-l-2 border-accent pl-4 font-normal leading-relaxed">
          Temporary staffing, permanent placement, contract &amp; project-based pods, and executive search—across AI, Data, Cloud, DevOps, IIoT, and enterprise transformation.
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((s, idx) => (
          <BlueprintWrapper key={idx} className="p-6 text-center">
            <div className="font-heading font-bold text-4xl text-accent mb-2">{s.num}</div>
            <div className="font-mono text-[14px] text-text-muted uppercase tracking-wider font-normal">{s.label}</div>
          </BlueprintWrapper>
        ))}
      </div>

      {/* 4 Engagement Models */}
      <div id="models" data-scroll-label="ENGAGEMENT MODELS" className="mb-16">
        <div className="font-mono text-[13px] text-accent uppercase tracking-[0.18em] mb-2 font-medium">
          ENGAGEMENT MODELS // FLEXIBLE HIRING
        </div>
        <h2 className="font-heading text-3xl font-semibold uppercase text-text mb-8 border-b border-border pb-4">
          FOUR WAYS TO HIRE WITH SMRIKAAM
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((m, idx) => (
            <BlueprintWrapper key={idx} className="p-8 flex flex-col justify-between group hover:border-accent">
              <div>
                <span className="font-mono text-[13px] text-accent font-medium mb-2 block">MODEL // 0{idx + 1}</span>
                <h3 className="font-heading text-2xl font-semibold uppercase text-text mb-2 group-hover:text-accent transition-colors">
                  {m.title}
                </h3>
                <p className="font-sans text-[15px] font-medium text-text mb-4">
                  {m.subtitle}
                </p>
                <p className="text-text-muted text-[15px] font-normal leading-[1.55] mb-6">
                  {m.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-border space-y-2">
                {m.bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 font-mono text-[14px] font-normal text-text">
                    <span className="text-accent font-medium">+</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </BlueprintWrapper>
          ))}
        </div>
      </div>

      {/* Industries Served */}
      <div id="verticals" data-scroll-label="DOMAINS" className="mb-16">
        <div className="font-mono text-[13px] text-accent uppercase tracking-[0.18em] mb-2 font-medium">
          VERTICAL EXPERIENCE // DOMAIN SPECTRUM
        </div>
        <h2 className="font-heading text-2xl font-semibold uppercase text-text mb-6">
          TALENT FOR EVERY VERTICAL WE TOUCH
        </h2>

        <div className="flex flex-wrap gap-2">
          {verticals.map((v, idx) => (
            <span key={idx} className="tag tag-accent text-[13px] font-normal py-2 px-4">
              + {v}
            </span>
          ))}
        </div>
      </div>

      {/* 4-Step Process */}
      <div id="process" data-scroll-label="4-STEP PROCESS" className="mb-16">
        <div className="font-mono text-[13px] text-accent uppercase tracking-[0.18em] mb-2 font-medium">
          VETTING &amp; SELECTION // REPEATABLE PROCESS
        </div>
        <h2 className="font-heading text-3xl font-semibold uppercase text-text mb-8 border-b border-border pb-4">
          FROM BRIEF TO ONBOARDED — IN 4 STEPS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <BlueprintWrapper key={idx} className="p-6">
              <div className="font-heading font-bold text-3xl text-accent mb-2">{step.num}</div>
              <div className="font-heading font-semibold text-lg uppercase text-text mb-2">{step.name}</div>
              <p className="text-[14px] font-normal text-text-muted leading-[1.5]">{step.desc}</p>
            </BlueprintWrapper>
          ))}
        </div>
      </div>

      {/* FAQ Accordions */}
      <div id="faq" data-scroll-label="FAQ" className="mb-16">
        <div className="font-mono text-[13px] text-accent uppercase tracking-[0.18em] mb-2 font-medium">
          FREQUENTLY ASKED QUESTIONS // FAQ
        </div>
        <h2 className="font-heading text-3xl font-semibold uppercase text-text mb-8 border-b border-border pb-4">
          STAFFING FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <BlueprintWrapper key={idx} className="p-4 cursor-pointer" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
              <div className="flex items-center justify-between font-sans text-base font-medium text-text">
                <span>{faq.q}</span>
                {openFaq === idx ? <ChevronUp className="w-5 h-5 text-accent" /> : <ChevronDown className="w-5 h-5 text-text-muted" />}
              </div>
              {openFaq === idx && (
                <div className="mt-3 pt-3 border-t border-border text-[15px] font-normal text-text-muted leading-[1.55]">
                  {faq.a}
                </div>
              )}
            </BlueprintWrapper>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div id="cta" data-scroll-label="HIRE TALENT">
        <BlueprintWrapper className="p-8 md:p-12 text-center bg-bg/95 backdrop-blur-md">
          <h2 className="font-heading text-3xl font-semibold uppercase text-text mb-4">
            HIRE SPECIALIST TECHNOLOGY TALENT — FASTER
          </h2>
          <p className="text-text-muted text-[15px] font-normal max-w-2xl mx-auto mb-8">
            Tell us about your program. We will respond with a tailored shortlist and engagement plan within 72 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-primary font-semibold uppercase tracking-wider text-[14px]">
              HIRE SPECIALIST TECHNOLOGY TALENT <ArrowUpRight className="w-4 h-4 ml-1" strokeWidth={1.5} />
            </Link>
            <a href="tel:+919150684601" className="btn btn-secondary text-[14px] font-medium">
              Call +91-9150684601
            </a>
          </div>
        </BlueprintWrapper>
      </div>
    </div>
  );
}
