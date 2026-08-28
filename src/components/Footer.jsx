import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Globe, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-md pt-8 pb-8 text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-6">
        {/* Column 1: Brand + Contact Info */}
        <div className="lg:col-span-4 space-y-3">
          <Link to="/" className="inline-block mb-1">
            <Logo height={38} />
          </Link>

          <p className="text-[13px] font-normal text-[var(--color-text-secondary)] leading-[1.5] max-w-sm">
            Transforming factories, operations, and enterprise systems with AI-powered analytics, Industrial IoT, cloud engineering, and intelligent automation.
          </p>

          <div className="space-y-1.5 text-[12px] text-[var(--color-text-secondary)] border-t border-[var(--color-border)] pt-3 font-mono">
            <div className="flex items-center gap-2.5">
              <Mail className="w-3.5 h-3.5 text-[var(--color-text)] shrink-0" strokeWidth={1.5} aria-hidden="true" />
              <a href="mailto:contact@smrikaam.com" className="hover:text-[var(--color-text)] transition-colors">
                contact@smrikaam.com
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-3.5 h-3.5 text-[var(--color-text)] shrink-0" strokeWidth={1.5} aria-hidden="true" />
              <a href="tel:+919150684601" className="hover:text-[var(--color-text)] transition-colors">
                +91-9150684601
              </a>
            </div>
            <div className="flex items-start gap-2.5 pt-0.5">
              <MapPin className="w-3.5 h-3.5 text-[var(--color-text)] shrink-0 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
              <div className="leading-[1.4]">
                <span className="font-semibold block text-[var(--color-text)]">SMRIKAAM Technologies LLP</span>
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Services Navigation */}
        <div className="lg:col-span-2">
          <h4 className="font-mono text-xs font-bold tracking-wider text-[var(--color-text)] uppercase mb-2 border-b border-[var(--color-border)] pb-1">
            Services
          </h4>
          <ul className="space-y-1.5 text-[12px] font-mono">
            <li><Link to="/services/ai-ml" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">AI / ML</Link></li>
            <li><Link to="/services/industrial-iot-iiot" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Industrial IoT (IIoT)</Link></li>
            <li><Link to="/services/data-engineering" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Data Engineering</Link></li>
            <li><Link to="/services/generative-agentic-ai" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Generative &amp; Agentic AI</Link></li>
            <li><Link to="/services/devops-cloud" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">DevOps &amp; Cloud</Link></li>
            <li><Link to="/services/data-governance" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Data Governance</Link></li>
            <li><Link to="/services/integration-services" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Integration Services</Link></li>
            <li><Link to="/services/servicenow-solutions" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">ServiceNow Solutions</Link></li>
            <li><Link to="/services/advisory-services" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Advisory Services</Link></li>
            <li><Link to="/services/ai-workflow-automation" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">AI Workflow Automation</Link></li>
            <li><Link to="/staffing" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Staffing Services</Link></li>
          </ul>
        </div>

        {/* Column 3: Accelerators Navigation */}
        <div className="lg:col-span-2">
          <h4 className="font-mono text-xs font-bold tracking-wider text-[var(--color-text)] uppercase mb-2 border-b border-[var(--color-border)] pb-1">
            Accelerators
          </h4>
          <ul className="space-y-1.5 text-[12px] font-mono">
            <li><Link to="/accelerators" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">BitXhift</Link></li>
            <li><Link to="/accelerators" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">MigrateMax</Link></li>
            <li><Link to="/accelerators" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">ParseMaster</Link></li>
            <li><Link to="/accelerators" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">LinkGenX</Link></li>
          </ul>
        </div>

        {/* Column 4: Industries Navigation */}
        <div className="lg:col-span-2">
          <h4 className="font-mono text-xs font-bold tracking-wider text-[var(--color-text)] uppercase mb-2 border-b border-[var(--color-border)] pb-1">
            Industries
          </h4>
          <ul className="space-y-1.5 text-[12px] font-mono">
            <li><Link to="/industries" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Manufacturing</Link></li>
            <li><Link to="/industries" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Energy &amp; Utilities</Link></li>
            <li><Link to="/industries" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Retail &amp; E-Commerce</Link></li>
            <li><Link to="/industries" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">BFSI</Link></li>
            <li><Link to="/industries" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Healthcare</Link></li>
            <li><Link to="/industries" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Logistics</Link></li>
          </ul>
        </div>

        {/* Column 5: Social & Company */}
        <div className="lg:col-span-2 space-y-4">
          <div>
            <h4 className="font-mono text-xs font-bold tracking-wider text-[var(--color-text)] uppercase mb-2 border-b border-[var(--color-border)] pb-1">
              Company
            </h4>
            <ul className="space-y-1.5 text-[12px] font-mono">
              <li><Link to="/about" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Case Studies</Link></li>
              <li><Link to="/careers" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-1.5">
              FOLLOW US
            </div>
            <div className="flex items-center gap-1.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-7 h-7 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--color-surface-subtle)] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-7 h-7 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--color-surface-subtle)] transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--color-surface-subtle)] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--color-surface-subtle)] transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-4 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[var(--color-text-muted)] gap-2">
        <div>
          &copy; 2026 SMRIKAAM Technologies LLP. All rights reserved.
        </div>
        <div className="flex gap-4">
          <Link to="/contact" className="hover:text-[var(--color-text)] transition-colors">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-[var(--color-text)] transition-colors">Terms of Service</Link>
          <Link to="/contact" className="hover:text-[var(--color-text)] transition-colors">Security</Link>
        </div>
      </div>
    </footer>
  );
}



