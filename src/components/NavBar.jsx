import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown, Sun, Moon } from 'lucide-react';
import Logo from './Logo';
import { useCMS } from '../context/CMSContext';

export default function NavBar() {
  const {
    services: cmsPublishedServices,
    accelerators: cmsPublishedAccelerators,
    industries: cmsPublishedIndustries
  } = useCMS() || {};
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [acceleratorsDropdown, setAcceleratorsDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const [caseStudiesDropdown, setCaseStudiesDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);

  // Mobile accordion drawer state
  const [mobileAccordions, setMobileAccordions] = useState({
    services: false,
    products: false,
    industries: false,
    caseStudies: false,
    company: false
  });

  const toggleMobileAccordion = (key) => {
    setMobileAccordions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const navContainerRef = useRef(null);
  const location = useLocation();

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('smrikaam_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return document.documentElement.classList.contains('dark') ? 'dark' : 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('smrikaam_theme', theme);
  }, [theme]);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target)) {
        setServicesDropdown(false);
        setAcceleratorsDropdown(false);
        setIndustriesDropdown(false);
        setCaseStudiesDropdown(false);
        setCompanyDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setServicesDropdown(false);
    setAcceleratorsDropdown(false);
    setIndustriesDropdown(false);
    setCaseStudiesDropdown(false);
    setCompanyDropdown(false);
    setMobileOpen(false);
  }, [location.pathname]);

  // Handle mobile menu drawer body-scroll locking and ESC key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setServicesDropdown(false);
        setAcceleratorsDropdown(false);
        setIndustriesDropdown(false);
        setCaseStudiesDropdown(false);
        setCompanyDropdown(false);
      }
    };

    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const servicesSubLinks = useMemo(() => {
    const list = Array.isArray(cmsPublishedServices) && cmsPublishedServices.length > 0
      ? cmsPublishedServices.map((s) => ({
          name: s.title || s.name,
          path: `/services/${s.slug}`
        }))
      : [];
    return [...list, { name: 'Staffing Services', path: '/staffing' }];
  }, [cmsPublishedServices]);

  const acceleratorsSubLinks = useMemo(() => {
    if (Array.isArray(cmsPublishedAccelerators) && cmsPublishedAccelerators.length > 0) {
      return cmsPublishedAccelerators.map((a) => ({
        name: a.name || a.title,
        path: `/products/${a.slug || a.id}`
      }));
    }
    return [
      { name: 'BitXhift', path: '/products/bitxhift' },
      { name: 'MigrateMax', path: '/products/migratemax' },
      { name: 'ParseMaster', path: '/products/parsemaster' },
      { name: 'LinkGenX', path: '/products/linkgenx' },
    ];
  }, [cmsPublishedAccelerators]);

  const industriesSubLinks = useMemo(() => {
    if (Array.isArray(cmsPublishedIndustries) && cmsPublishedIndustries.length > 0) {
      return cmsPublishedIndustries.map((i) => ({
        name: i.name || i.title,
        path: `/industries/${i.slug || i.id}`
      }));
    }
    return [
      { name: 'Manufacturing', path: '/industries/manufacturing' },
      { name: 'Energy & Utilities', path: '/industries/energy-utilities' },
      { name: 'Retail & E-Commerce', path: '/industries/retail-e-commerce' },
      { name: 'BFSI', path: '/industries/bfsi' },
      { name: 'Healthcare', path: '/industries/healthcare-life-sciences' },
      { name: 'Logistics', path: '/industries/logistics-supply-chain' },
    ];
  }, [cmsPublishedIndustries]);

  const caseStudiesSubLinks = [
    { name: 'Blogs & Insights', path: '/blog' },
    { name: 'All Case Studies', path: '/case-studies' },
  ];

  const companySubLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path.split('#')[0]);
  };

  const isServicesActive = servicesSubLinks.some((link) => location.pathname === link.path || location.pathname.startsWith(link.path.split('#')[0])) || location.pathname === '/services';
  const isAcceleratorsActive = acceleratorsSubLinks.some((link) => location.pathname === link.path || location.pathname.startsWith(link.path.split('#')[0])) || location.pathname === '/products' || location.pathname === '/accelerators';
  const isIndustriesActive = industriesSubLinks.some((link) => location.pathname === link.path || location.pathname.startsWith(link.path)) || location.pathname === '/industries';
  const isCaseStudiesActive = caseStudiesSubLinks.some((link) => location.pathname.startsWith(link.path)) || location.pathname === '/case-studies';
  const isCompanyActive = companySubLinks.some((link) => location.pathname.startsWith(link.path));

  return (
    <nav
      ref={navContainerRef}
      className="nav relative z-50 bg-[var(--ribbon-bg)] backdrop-blur-md border-b border-[var(--ribbon-border)] px-4 sm:px-6 md:px-10 h-16 flex items-center justify-between transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link to="/" className="nav-brand shrink-0 flex items-center" aria-label="SMRIKAAM Technologies home">
          <Logo height={34} isLightBackground={false} />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          {/* HOME */}
          <Link
            to="/"
            className={`text-xs uppercase tracking-widest font-semibold transition-colors ${
              isActive('/') ? 'text-[var(--ribbon-active)] border-b-2 border-[var(--ribbon-active)] pb-0.5' : 'text-[var(--ribbon-text-secondary)] hover:text-[var(--ribbon-text)]'
            }`}
          >
            HOME
          </Link>

          {/* SERVICES — Hover reveals drop list, Click enters /services */}
          <div
            className="relative flex items-center h-full py-2"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <Link
              to="/services"
              onClick={() => setServicesDropdown(false)}
              className={`text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 cursor-pointer bg-transparent border-0 outline-none p-0 transition-colors ${
                isServicesActive || servicesDropdown ? 'text-[var(--ribbon-active)]' : 'text-[var(--ribbon-text-secondary)] hover:text-[var(--ribbon-text)]'
              }`}
            >
              <span>SERVICES</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesDropdown ? 'rotate-180 text-[var(--ribbon-text)]' : 'text-[var(--ribbon-text-muted)]'
                }`}
                aria-hidden="true"
                focusable="false"
              />
            </Link>

            {servicesDropdown && (
              <div
                className="absolute left-0 top-full pt-1 w-64 z-50"
                style={{ filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.45))' }}
              >
                <div className="bg-[var(--ribbon-dropdown-bg)] border border-[var(--ribbon-dropdown-border)] p-1.5 shadow-2xl flex flex-col gap-0.5 rounded-none max-h-[70vh] overflow-y-auto custom-scrollbar">
                  {servicesSubLinks.map((sub) => {
                    const subActive = isActive(sub.path);
                    return (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setServicesDropdown(false)}
                        className={`px-3 py-2 text-xs uppercase tracking-wider flex items-center justify-between transition-colors duration-150 rounded-none group ${
                          subActive
                            ? 'text-[var(--ribbon-dropdown-text)] font-bold bg-[var(--ribbon-dropdown-active)] border-l-2 border-[var(--ribbon-dropdown-text)]'
                            : 'text-[var(--ribbon-dropdown-text-secondary)] hover:bg-[var(--ribbon-dropdown-hover)] hover:text-[var(--ribbon-dropdown-text)]'
                        }`}
                      >
                        <span className="truncate mr-2">{sub.name}</span>
                        <span
                          className={`text-xs transition-all duration-150 shrink-0 ${
                            subActive
                              ? 'text-[var(--ribbon-dropdown-text)] translate-x-0.5 opacity-100'
                              : 'text-[var(--ribbon-dropdown-text-muted)] opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5'
                          }`}
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* ACCELERATORS — Hover reveals drop list, Click enters /accelerators */}
          <div
            className="relative flex items-center h-full py-2"
            onMouseEnter={() => setAcceleratorsDropdown(true)}
            onMouseLeave={() => setAcceleratorsDropdown(false)}
          >
            <Link
              to="/products"
              onClick={() => setAcceleratorsDropdown(false)}
              className={`text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 cursor-pointer bg-transparent border-0 outline-none p-0 transition-colors ${
                isAcceleratorsActive || acceleratorsDropdown ? 'text-[var(--ribbon-active)]' : 'text-[var(--ribbon-text-secondary)] hover:text-[var(--ribbon-text)]'
              }`}
            >
              <span>PRODUCTS</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  acceleratorsDropdown ? 'rotate-180 text-[var(--ribbon-text)]' : 'text-[var(--ribbon-text-muted)]'
                }`}
                aria-hidden="true"
                focusable="false"
              />
            </Link>

            {acceleratorsDropdown && (
              <div
                className="absolute left-0 top-full pt-1 w-64 z-50"
                style={{ filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.45))' }}
              >
                <div className="bg-[var(--ribbon-dropdown-bg)] border border-[var(--ribbon-dropdown-border)] p-1.5 shadow-2xl flex flex-col gap-0.5 rounded-none max-h-[70vh] overflow-y-auto custom-scrollbar">
                  {acceleratorsSubLinks.map((sub) => {
                    const subActive = isActive(sub.path);
                    return (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setAcceleratorsDropdown(false)}
                        className={`px-3 py-2 text-xs uppercase tracking-wider flex items-center justify-between transition-colors duration-150 rounded-none group ${
                          subActive
                            ? 'text-[var(--ribbon-dropdown-text)] font-bold bg-[var(--ribbon-dropdown-active)] border-l-2 border-[var(--ribbon-dropdown-text)]'
                            : 'text-[var(--ribbon-dropdown-text-secondary)] hover:bg-[var(--ribbon-dropdown-hover)] hover:text-[var(--ribbon-dropdown-text)]'
                        }`}
                      >
                        <span className="truncate mr-2">{sub.name}</span>
                        <span
                          className={`text-xs transition-all duration-150 shrink-0 ${
                            subActive
                              ? 'text-[var(--ribbon-dropdown-text)] translate-x-0.5 opacity-100'
                              : 'text-[var(--ribbon-dropdown-text-muted)] opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5'
                          }`}
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* INDUSTRIES — Hover reveals drop list, Click enters /industries */}
          <div
            className="relative flex items-center h-full py-2"
            onMouseEnter={() => setIndustriesDropdown(true)}
            onMouseLeave={() => setIndustriesDropdown(false)}
          >
            <Link
              to="/industries"
              onClick={() => setIndustriesDropdown(false)}
              className={`text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 cursor-pointer bg-transparent border-0 outline-none p-0 transition-colors ${
                isIndustriesActive || industriesDropdown ? 'text-[var(--ribbon-active)]' : 'text-[var(--ribbon-text-secondary)] hover:text-[var(--ribbon-text)]'
              }`}
            >
              <span>INDUSTRIES</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  industriesDropdown ? 'rotate-180 text-[var(--ribbon-text)]' : 'text-[var(--ribbon-text-muted)]'
                }`}
                aria-hidden="true"
                focusable="false"
              />
            </Link>

            {industriesDropdown && (
              <div
                className="absolute left-0 top-full pt-1 w-64 z-50"
                style={{ filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.45))' }}
              >
                <div className="bg-[var(--ribbon-dropdown-bg)] border border-[var(--ribbon-dropdown-border)] p-1.5 shadow-2xl flex flex-col gap-0.5 rounded-none max-h-[70vh] overflow-y-auto custom-scrollbar">
                  {industriesSubLinks.map((sub) => {
                    const subActive = isActive(sub.path);
                    return (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setIndustriesDropdown(false)}
                        className={`px-3 py-2 text-xs uppercase tracking-wider flex items-center justify-between transition-colors duration-150 rounded-none group ${
                          subActive
                            ? 'text-[var(--ribbon-dropdown-text)] font-bold bg-[var(--ribbon-dropdown-active)] border-l-2 border-[var(--ribbon-dropdown-text)]'
                            : 'text-[var(--ribbon-dropdown-text-secondary)] hover:bg-[var(--ribbon-dropdown-hover)] hover:text-[var(--ribbon-dropdown-text)]'
                        }`}
                      >
                        <span className="truncate mr-2">{sub.name}</span>
                        <span
                          className={`text-xs transition-all duration-150 shrink-0 ${
                            subActive
                              ? 'text-[var(--ribbon-dropdown-text)] translate-x-0.5 opacity-100'
                              : 'text-[var(--ribbon-dropdown-text-muted)] opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5'
                          }`}
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* CASE STUDIES — Hover reveals drop list, Click enters /case-studies */}
          <div
            className="relative flex items-center h-full py-2"
            onMouseEnter={() => setCaseStudiesDropdown(true)}
            onMouseLeave={() => setCaseStudiesDropdown(false)}
          >
            <Link
              to="/case-studies"
              onClick={() => setCaseStudiesDropdown(false)}
              className={`text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 cursor-pointer bg-transparent border-0 outline-none p-0 transition-colors ${
                isCaseStudiesActive || caseStudiesDropdown ? 'text-[var(--ribbon-active)]' : 'text-[var(--ribbon-text-secondary)] hover:text-[var(--ribbon-text)]'
              }`}
            >
              <span>CASE STUDIES</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  caseStudiesDropdown ? 'rotate-180 text-[var(--ribbon-text)]' : 'text-[var(--ribbon-text-muted)]'
                }`}
                aria-hidden="true"
                focusable="false"
              />
            </Link>

            {caseStudiesDropdown && (
              <div
                className="absolute left-0 top-full pt-1 w-64 z-50"
                style={{ filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.45))' }}
              >
                <div className="bg-[var(--ribbon-dropdown-bg)] border border-[var(--ribbon-dropdown-border)] p-1.5 shadow-2xl flex flex-col gap-0.5 rounded-none max-h-[70vh] overflow-y-auto custom-scrollbar">
                  {caseStudiesSubLinks.map((sub) => {
                    const subActive = isActive(sub.path);
                    return (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setCaseStudiesDropdown(false)}
                        className={`px-3 py-2 text-xs uppercase tracking-wider flex items-center justify-between transition-colors duration-150 rounded-none group ${
                          subActive
                            ? 'text-[var(--ribbon-dropdown-text)] font-bold bg-[var(--ribbon-dropdown-active)] border-l-2 border-[var(--ribbon-dropdown-text)]'
                            : 'text-[var(--ribbon-dropdown-text-secondary)] hover:bg-[var(--ribbon-dropdown-hover)] hover:text-[var(--ribbon-dropdown-text)]'
                        }`}
                      >
                        <span className="truncate mr-2">{sub.name}</span>
                        <span
                          className={`text-xs transition-all duration-150 shrink-0 ${
                            subActive
                              ? 'text-[var(--ribbon-dropdown-text)] translate-x-0.5 opacity-100'
                              : 'text-[var(--ribbon-dropdown-text-muted)] opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5'
                          }`}
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* COMPANY — Hover reveals drop list, Click enters /about */}
          <div
            className="relative flex items-center h-full py-2"
            onMouseEnter={() => setCompanyDropdown(true)}
            onMouseLeave={() => setCompanyDropdown(false)}
          >
            <Link
              to="/about"
              onClick={() => setCompanyDropdown(false)}
              className={`text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 cursor-pointer bg-transparent border-0 outline-none p-0 transition-colors ${
                isCompanyActive || companyDropdown ? 'text-[var(--ribbon-active)]' : 'text-[var(--ribbon-text-secondary)] hover:text-[var(--ribbon-text)]'
              }`}
            >
              <span>COMPANY</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  companyDropdown ? 'rotate-180 text-[var(--ribbon-text)]' : 'text-[var(--ribbon-text-muted)]'
                }`}
                aria-hidden="true"
                focusable="false"
              />
            </Link>

            {companyDropdown && (
              <div
                className="absolute left-0 top-full pt-1 w-64 z-50"
                style={{ filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.45))' }}
              >
                <div className="bg-[var(--ribbon-dropdown-bg)] border border-[var(--ribbon-dropdown-border)] p-1.5 shadow-2xl flex flex-col gap-0.5 rounded-none max-h-[70vh] overflow-y-auto custom-scrollbar">
                  {companySubLinks.map((sub) => {
                    const subActive = isActive(sub.path);
                    return (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setCompanyDropdown(false)}
                        className={`px-3 py-2 text-xs uppercase tracking-wider flex items-center justify-between transition-colors duration-150 rounded-none group ${
                          subActive
                            ? 'text-[var(--ribbon-dropdown-text)] font-bold bg-[var(--ribbon-dropdown-active)] border-l-2 border-[var(--ribbon-dropdown-text)]'
                            : 'text-[var(--ribbon-dropdown-text-secondary)] hover:bg-[var(--ribbon-dropdown-hover)] hover:text-[var(--ribbon-dropdown-text)]'
                        }`}
                      >
                        <span className="truncate mr-2">{sub.name}</span>
                        <span
                          className={`text-xs transition-all duration-150 shrink-0 ${
                            subActive
                              ? 'text-[var(--ribbon-dropdown-text)] translate-x-0.5 opacity-100'
                              : 'text-[var(--ribbon-dropdown-text-muted)] opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5'
                          }`}
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right CTA + Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="h-9 w-9 border border-[var(--ribbon-icon-border)] bg-[var(--ribbon-icon-bg)] hover:opacity-85 text-[var(--ribbon-icon)] transition-colors flex items-center justify-center cursor-pointer"
            title={theme === 'dark' ? 'Switch to White Theme' : 'Switch to Black Theme'}
            aria-label={theme === 'dark' ? 'Switch to White Theme' : 'Switch to Black Theme'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[var(--ribbon-icon)]" aria-hidden="true" focusable="false" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--ribbon-icon)]" aria-hidden="true" focusable="false" />
            )}
          </button>

          <Link
            to="/contact"
            className="h-9 px-4 bg-[var(--ribbon-button-bg)] text-[var(--ribbon-button-text)] border border-[var(--ribbon-button-border)] hover:opacity-90 text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 transition-all shadow-sm"
          >
            <span>BOOK A CALL</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-current" strokeWidth={1.5} aria-hidden="true" focusable="false" />
          </Link>
        </div>

        {/* Mobile Actions: Theme Toggle + Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="w-11 h-11 min-h-[44px] min-w-[44px] border border-[var(--ribbon-icon-border)] bg-[var(--ribbon-icon-bg)] hover:opacity-85 text-[var(--ribbon-icon)] transition-colors flex items-center justify-center cursor-pointer"
            title={theme === 'dark' ? 'Switch to White Theme' : 'Switch to Black Theme'}
            aria-label={theme === 'dark' ? 'Switch to White Theme' : 'Switch to Black Theme'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[var(--ribbon-icon)]" aria-hidden="true" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--ribbon-icon)]" aria-hidden="true" />
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-11 h-11 min-h-[44px] min-w-[44px] border border-[var(--ribbon-icon-border)] bg-[var(--ribbon-icon-bg)] hover:opacity-85 text-[var(--ribbon-icon)] transition-colors flex items-center justify-center cursor-pointer"
            aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5 text-[var(--ribbon-icon)]" strokeWidth={1.5} aria-hidden="true" /> : <Menu className="w-5 h-5 text-[var(--ribbon-icon)]" strokeWidth={1.5} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Accessible, Accordion-Based, Safe-Area Constrained) */}
      {mobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 top-16 bg-black/50 backdrop-blur-[2px] z-40 transition-opacity"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="lg:hidden fixed inset-x-0 top-16 bg-[var(--ribbon-bg)] border-b border-[var(--ribbon-border)] p-5 shadow-2xl flex flex-col gap-2 max-h-[calc(100dvh-4rem)] overflow-y-auto z-50 text-[var(--ribbon-text)] pb-8">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className={`text-xs uppercase tracking-widest min-h-[44px] flex items-center px-2 border-b border-[var(--ribbon-border)] transition-colors ${
                isActive('/') ? 'text-[var(--ribbon-text)] font-bold border-l-2 border-[var(--ribbon-active)] pl-3' : 'text-[var(--ribbon-text-secondary)] hover:text-[var(--ribbon-text)]'
              }`}
            >
              HOME
            </Link>

            {/* Mobile Services Accordion */}
            <div className="border-b border-[var(--ribbon-border)] pb-1">
              <button
                type="button"
                onClick={() => toggleMobileAccordion('services')}
                className="w-full min-h-[44px] flex items-center justify-between text-xs text-[var(--ribbon-active)] uppercase tracking-widest font-bold px-2 hover:opacity-90"
                aria-expanded={mobileAccordions.services}
              >
                <span>SERVICES</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileAccordions.services ? 'rotate-180 text-[var(--ribbon-text)]' : 'text-[var(--ribbon-text-muted)]'
                  }`}
                />
              </button>
              {mobileAccordions.services && (
                <div className="pl-3 pr-1 pb-3 flex flex-col gap-1 border-l-2 border-[var(--ribbon-border)] ml-2 animate-in fade-in duration-150">
                  <Link
                    to="/services"
                    onClick={() => setMobileOpen(false)}
                    className="text-xs uppercase tracking-wider py-2 px-1 text-[var(--ribbon-active)] font-bold hover:underline flex items-center justify-between"
                  >
                    <span>ALL SERVICES</span>
                    <span>→</span>
                  </Link>
                  {servicesSubLinks.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={() => setMobileOpen(false)}
                      className={`text-xs uppercase tracking-wider min-h-[38px] flex items-center px-1 transition-colors ${
                        isActive(sub.path) ? 'text-[var(--ribbon-text)] font-bold' : 'text-[var(--ribbon-text-secondary)] hover:text-[var(--ribbon-text)]'
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Products Accordion */}
            <div className="border-b border-[var(--ribbon-border)] pb-1">
              <button
                type="button"
                onClick={() => toggleMobileAccordion('products')}
                className="w-full min-h-[44px] flex items-center justify-between text-xs text-[var(--ribbon-active)] uppercase tracking-widest font-bold px-2 hover:opacity-90"
                aria-expanded={mobileAccordions.products}
              >
                <span>PRODUCTS</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileAccordions.products ? 'rotate-180 text-[var(--ribbon-text)]' : 'text-[var(--ribbon-text-muted)]'
                  }`}
                />
              </button>
              {mobileAccordions.products && (
                <div className="pl-3 pr-1 pb-3 flex flex-col gap-1 border-l-2 border-[var(--ribbon-border)] ml-2 animate-in fade-in duration-150">
                  <Link
                    to="/products"
                    onClick={() => setMobileOpen(false)}
                    className="text-xs uppercase tracking-wider py-2 px-1 text-[var(--ribbon-active)] font-bold hover:underline flex items-center justify-between"
                  >
                    <span>ALL PRODUCTS</span>
                    <span>→</span>
                  </Link>
                  {acceleratorsSubLinks.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      onClick={() => setMobileOpen(false)}
                      className="text-xs uppercase tracking-wider min-h-[38px] flex items-center px-1 text-[var(--ribbon-text-secondary)] hover:text-[var(--ribbon-text)] transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries Accordion */}
            <div className="border-b border-[var(--ribbon-border)] pb-1">
              <button
                type="button"
                onClick={() => toggleMobileAccordion('industries')}
                className="w-full min-h-[44px] flex items-center justify-between text-xs text-[var(--ribbon-active)] uppercase tracking-widest font-bold px-2 hover:opacity-90"
                aria-expanded={mobileAccordions.industries}
              >
                <span>INDUSTRIES</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileAccordions.industries ? 'rotate-180 text-[var(--ribbon-text)]' : 'text-[var(--ribbon-text-muted)]'
                  }`}
                />
              </button>
              {mobileAccordions.industries && (
                <div className="pl-3 pr-1 pb-3 flex flex-col gap-1 border-l-2 border-[var(--ribbon-border)] ml-2 animate-in fade-in duration-150">
                  <Link
                    to="/industries"
                    onClick={() => setMobileOpen(false)}
                    className="text-xs uppercase tracking-wider py-2 px-1 text-[var(--ribbon-active)] font-bold hover:underline flex items-center justify-between"
                  >
                    <span>ALL INDUSTRIES</span>
                    <span>→</span>
                  </Link>
                  {industriesSubLinks.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={() => setMobileOpen(false)}
                      className={`text-xs uppercase tracking-wider min-h-[38px] flex items-center px-1 transition-colors ${
                        isActive(sub.path) ? 'text-[var(--ribbon-text)] font-bold' : 'text-[var(--ribbon-text-secondary)] hover:text-[var(--ribbon-text)]'
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Case Studies Accordion */}
            <div className="border-b border-[var(--ribbon-border)] pb-1">
              <button
                type="button"
                onClick={() => toggleMobileAccordion('caseStudies')}
                className="w-full min-h-[44px] flex items-center justify-between text-xs text-[var(--ribbon-active)] uppercase tracking-widest font-bold px-2 hover:opacity-90"
                aria-expanded={mobileAccordions.caseStudies}
              >
                <span>CASE STUDIES</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileAccordions.caseStudies ? 'rotate-180 text-[var(--ribbon-text)]' : 'text-[var(--ribbon-text-muted)]'
                  }`}
                />
              </button>
              {mobileAccordions.caseStudies && (
                <div className="pl-3 pr-1 pb-3 flex flex-col gap-1 border-l-2 border-[var(--ribbon-border)] ml-2 animate-in fade-in duration-150">
                  <Link
                    to="/case-studies"
                    onClick={() => setMobileOpen(false)}
                    className="text-xs uppercase tracking-wider py-2 px-1 text-[var(--ribbon-active)] font-bold hover:underline flex items-center justify-between"
                  >
                    <span>All Case Studies</span>
                    <span>→</span>
                  </Link>
                  {caseStudiesSubLinks.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={() => setMobileOpen(false)}
                      className={`text-xs uppercase tracking-wider min-h-[38px] flex items-center px-1 transition-colors ${
                        isActive(sub.path) ? 'text-[var(--ribbon-text)] font-bold' : 'text-[var(--ribbon-text-secondary)] hover:text-[var(--ribbon-text)]'
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Company Accordion */}
            <div className="border-b border-[var(--ribbon-border)] pb-1">
              <button
                type="button"
                onClick={() => toggleMobileAccordion('company')}
                className="w-full min-h-[44px] flex items-center justify-between text-xs text-[var(--ribbon-active)] uppercase tracking-widest font-bold px-2 hover:opacity-90"
                aria-expanded={mobileAccordions.company}
              >
                <span>COMPANY</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileAccordions.company ? 'rotate-180 text-[var(--ribbon-text)]' : 'text-[var(--ribbon-text-muted)]'
                  }`}
                />
              </button>
              {mobileAccordions.company && (
                <div className="pl-3 pr-1 pb-3 flex flex-col gap-1 border-l-2 border-[var(--ribbon-border)] ml-2 animate-in fade-in duration-150">
                  {companySubLinks.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={() => setMobileOpen(false)}
                      className={`text-xs uppercase tracking-wider min-h-[38px] flex items-center px-1 transition-colors ${
                        isActive(sub.path) ? 'text-[var(--ribbon-text)] font-bold' : 'text-[var(--ribbon-text-secondary)] hover:text-[var(--ribbon-text)]'
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-3 mt-1 flex flex-col gap-2">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-[var(--ribbon-button-bg)] text-[var(--ribbon-button-text)] border border-[var(--ribbon-button-border)] min-h-[44px] py-2.5 px-4 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                Book Strategy Call <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
