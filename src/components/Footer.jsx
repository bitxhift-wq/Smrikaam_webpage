import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Globe, Linkedin, Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';
import { useCMS } from '../context/CMSContext';

export default function Footer() {
  const { services: cmsPublishedServices } = useCMS() || {};

  const servicesList = useMemo(() => {
    const list = Array.isArray(cmsPublishedServices) && cmsPublishedServices.length > 0
      ? cmsPublishedServices.map((s) => ({
          name: s.title || s.name,
          path: `/services/${s.slug}`
        }))
      : [];
    return [...list, { name: 'Staffing Services', path: '/staffing' }];
  }, [cmsPublishedServices]);

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

          <div className="space-y-1.5 text-[12px] text-[var(--color-text-secondary)] border-t border-[var(--color-border)] pt-3">
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
            <a
              href="https://maps.app.goo.gl/kViWRBkDBqauRi8z7?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open SMRIKAAM Technologies location in Google Maps"
              className="flex items-start gap-2.5 pt-0.5 group/footermap hover:text-[var(--color-text)] transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[var(--color-text)] shrink-0 mt-0.5 group-hover/footermap:scale-110 transition-transform" strokeWidth={1.5} aria-hidden="true" />
              <div className="leading-[1.4]">
                <span className="font-semibold block text-[var(--color-text)]">SMRIKAAM Technologies LLP</span>
                <span className="text-[var(--color-text-secondary)] group-hover/footermap:text-[var(--color-text)] transition-colors">Coimbatore, Tamil Nadu, India</span>
              </div>
            </a>
          </div>
        </div>

        {/* Column 2: Services Navigation */}
        <div className="lg:col-span-2">
          <h4 className="text-xs font-semibold tracking-wider text-[var(--color-text)] uppercase mb-2 border-b border-[var(--color-border)] pb-1">
            Services
          </h4>
          <ul className="space-y-1.5 text-[12px]">
            {servicesList.map((item, idx) => (
              <li key={idx}>
                <Link to={item.path} className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Accelerators Navigation */}
        <div className="lg:col-span-2">
          <h4 className="text-xs font-semibold tracking-wider text-[var(--color-text)] uppercase mb-2 border-b border-[var(--color-border)] pb-1">
            Accelerators
          </h4>
          <ul className="space-y-1.5 text-[12px]">
            <li><Link to="/products" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">BitXhift</Link></li>
            <li><Link to="/products" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">MigrateMax</Link></li>
            <li><Link to="/products" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">ParseMaster</Link></li>
            <li><Link to="/products" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">LinkGenX</Link></li>
          </ul>
        </div>

        {/* Column 4: Industries Navigation */}
        <div className="lg:col-span-2">
          <h4 className="text-xs font-semibold tracking-wider text-[var(--color-text)] uppercase mb-2 border-b border-[var(--color-border)] pb-1">
            Industries
          </h4>
          <ul className="space-y-1.5 text-[12px]">
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
            <h4 className="text-xs font-semibold tracking-wider text-[var(--color-text)] uppercase mb-2 border-b border-[var(--color-border)] pb-1">
              Company
            </h4>
            <ul className="space-y-1.5 text-[12px]">
              <li><Link to="/about" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Case Studies</Link></li>
              <li><Link to="/careers" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1.5">
              FOLLOW US
            </div>
            <div className="flex items-center gap-1.5">
              <a
                href="https://www.linkedin.com/company/143362970/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SMRIKAAM on LinkedIn"
                className="w-7 h-7 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--color-surface-subtle)] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com/smrikaam_tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SMRIKAAM on X"
                className="w-7 h-7 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--color-surface-subtle)] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/smrikaam_tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SMRIKAAM on Instagram"
                className="w-7 h-7 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--color-surface-subtle)] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61593678981066"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SMRIKAAM on Facebook"
                className="w-7 h-7 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--color-surface-subtle)] transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-4 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[var(--color-text-muted)] gap-2">
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



