import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown, Sun, Moon } from 'lucide-react';
import Logo from './Logo';

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [acceleratorsDropdown, setAcceleratorsDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const [caseStudiesDropdown, setCaseStudiesDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);

  const navContainerRef = useRef(null);
  const location = useLocation();

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('smrikaam_theme');
    if (saved) return saved;
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
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

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const servicesSubLinks = [
    { name: 'AI / ML', path: '/services/ai-ml' },
    { name: 'Industrial IoT (IIoT)', path: '/services/industrial-iot-iiot' },
    { name: 'Data Engineering', path: '/services/data-engineering' },
    { name: 'Generative & Agentic AI', path: '/services/generative-agentic-ai' },
    { name: 'DevOps & Cloud', path: '/services/devops-cloud' },
    { name: 'Data Governance', path: '/services/data-governance' },
    { name: 'Integration Services', path: '/services/integration-services' },
    { name: 'ServiceNow Solutions', path: '/services/servicenow-solutions' },
    { name: 'Advisory Services', path: '/services/advisory-services' },
    { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation' },
    { name: 'Staffing Services', path: '/staffing' },
  ];

  const acceleratorsSubLinks = [
    { name: 'BitXhift', path: '/accelerators#bitxhift' },
    { name: 'MigrateMax', path: '/accelerators#migratemax' },
    { name: 'ParseMaster', path: '/accelerators#parsemaster' },
    { name: 'LinkGenX', path: '/accelerators#linkgenx' },
  ];

  const industriesSubLinks = [
    { name: 'Manufacturing', path: '/industries/manufacturing' },
    { name: 'Energy & Utilities', path: '/industries/energy-utilities' },
    { name: 'Retail & E-Commerce', path: '/industries/retail-e-commerce' },
    { name: 'BFSI', path: '/industries/bfsi' },
    { name: 'Healthcare', path: '/industries/healthcare-life-sciences' },
    { name: 'Logistics', path: '/industries/logistics-supply-chain' },
  ];

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
  const isAcceleratorsActive = location.pathname === '/accelerators';
  const isIndustriesActive = industriesSubLinks.some((link) => location.pathname === link.path || location.pathname.startsWith(link.path)) || location.pathname === '/industries';
  const isCaseStudiesActive = caseStudiesSubLinks.some((link) => location.pathname.startsWith(link.path)) || location.pathname === '/case-studies';
  const isCompanyActive = companySubLinks.some((link) => location.pathname.startsWith(link.path));

  return (
    <nav
      ref={navContainerRef}
      className="nav relative z-50 bg-[var(--ribbon-bg)] backdrop-blur-md border-b border-[var(--ribbon-border)] px-6 md:px-10 h-16 flex items-center justify-between transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link to="/" className="nav-brand shrink-0 flex items-center">
          <Logo height={38} isLightBackground={false} />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          {/* HOME */}
          <Link
            to="/"
            className={`font-mono text-xs uppercase tracking-widest font-semibold transition-colors ${
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
              className={`font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 cursor-pointer bg-transparent border-0 outline-none p-0 transition-colors ${
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
                <div className="bg-[var(--ribbon-dropdown-bg)] border border-[var(--ribbon-dropdown-border)] p-1.5 shadow-2xl flex flex-col gap-0.5 rounded-none">
                  {servicesSubLinks.map((sub) => {
                    const subActive = isActive(sub.path);
                    return (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setServicesDropdown(false)}
                        className={`px-3 py-2 text-xs font-mono uppercase tracking-wider transition-colors duration-150 rounded-none ${
                          subActive
                            ? 'text-[var(--ribbon-dropdown-text)] font-bold bg-[var(--ribbon-dropdown-active)] border-l-2 border-[var(--ribbon-dropdown-text)]'
                            : 'text-[var(--ribbon-dropdown-text-secondary)] hover:bg-[var(--ribbon-dropdown-hover)] hover:text-[var(--ribbon-dropdown-text)]'
                        }`}
                      >
                        {sub.name}
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
              to="/accelerators"
              onClick={() => setAcceleratorsDropdown(false)}
              className={`font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 cursor-pointer bg-transparent border-0 outline-none p-0 transition-colors ${
                isAcceleratorsActive || acceleratorsDropdown ? 'text-[var(--ribbon-active)]' : 'text-[var(--ribbon-text-secondary)] hover:text-[var(--ribbon-text)]'
              }`}
            >
              <span>ACCELERATORS</span>
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
                className="absolute left-0 top-full pt-1 w-56 z-50"
                style={{ filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.45))' }}
              >
                <div className="bg-[var(--ribbon-dropdown-bg)] border border-[var(--ribbon-dropdown-border)] p-1.5 shadow-2xl flex flex-col gap-0.5 rounded-none">
                  {acceleratorsSubLinks.map((sub) => {
                    return (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setAcceleratorsDropdown(false)}
                        className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-[var(--ribbon-dropdown-text-secondary)] hover:bg-[var(--ribbon-dropdown-hover)] hover:text-[var(--ribbon-dropdown-text)] transition-colors duration-150 rounded-none"
                      >
                        {sub.name}
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
              className={`font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 cursor-pointer bg-transparent border-0 outline-none p-0 transition-colors ${
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
                <div className="bg-[var(--ribbon-dropdown-bg)] border border-[var(--ribbon-dropdown-border)] p-1.5 shadow-2xl flex flex-col gap-0.5 rounded-none">
                  {industriesSubLinks.map((sub) => {
                    const subActive = isActive(sub.path);
                    return (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setIndustriesDropdown(false)}
                        className={`px-3 py-2 text-xs font-mono uppercase tracking-wider transition-colors duration-150 rounded-none ${
                          subActive
                            ? 'text-[var(--ribbon-dropdown-text)] font-bold bg-[var(--ribbon-dropdown-active)] border-l-2 border-[var(--ribbon-dropdown-text)]'
                            : 'text-[var(--ribbon-dropdown-text-secondary)] hover:bg-[var(--ribbon-dropdown-hover)] hover:text-[var(--ribbon-dropdown-text)]'
                        }`}
                      >
                        {sub.name}
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
              className={`font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 cursor-pointer bg-transparent border-0 outline-none p-0 transition-colors ${
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
                className="absolute left-0 top-full pt-1 w-56 z-50"
                style={{ filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.45))' }}
              >
                <div className="bg-[var(--ribbon-dropdown-bg)] border border-[var(--ribbon-dropdown-border)] p-1.5 shadow-2xl flex flex-col gap-0.5 rounded-none">
                  {caseStudiesSubLinks.map((sub) => {
                    const subActive = isActive(sub.path);
                    return (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setCaseStudiesDropdown(false)}
                        className={`px-3 py-2 text-xs font-mono uppercase tracking-wider transition-colors duration-150 rounded-none ${
                          subActive
                            ? 'text-[var(--ribbon-dropdown-text)] font-bold bg-[var(--ribbon-dropdown-active)] border-l-2 border-[var(--ribbon-dropdown-text)]'
                            : 'text-[var(--ribbon-dropdown-text-secondary)] hover:bg-[var(--ribbon-dropdown-hover)] hover:text-[var(--ribbon-dropdown-text)]'
                        }`}
                      >
                        {sub.name}
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
              className={`font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 cursor-pointer bg-transparent border-0 outline-none p-0 transition-colors ${
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
                className="absolute left-0 top-full pt-1 w-56 z-50"
                style={{ filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.45))' }}
              >
                <div className="bg-[var(--ribbon-dropdown-bg)] border border-[var(--ribbon-dropdown-border)] p-1.5 shadow-2xl flex flex-col gap-0.5 rounded-none">
                  {companySubLinks.map((sub) => {
                    const subActive = isActive(sub.path);
                    return (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setCompanyDropdown(false)}
                        className={`px-3 py-2 text-xs font-mono uppercase tracking-wider transition-colors duration-150 rounded-none ${
                          subActive
                            ? 'text-[var(--ribbon-dropdown-text)] font-bold bg-[var(--ribbon-dropdown-active)] border-l-2 border-[var(--ribbon-dropdown-text)]'
                            : 'text-[var(--ribbon-dropdown-text-secondary)] hover:bg-[var(--ribbon-dropdown-hover)] hover:text-[var(--ribbon-dropdown-text)]'
                        }`}
                      >
                        {sub.name}
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
            className="h-9 px-4 bg-[var(--ribbon-button-bg)] text-[var(--ribbon-button-text)] border border-[var(--ribbon-button-border)] hover:opacity-90 text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-all shadow-sm"
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
            className="h-9 w-9 border border-[var(--ribbon-icon-border)] bg-[var(--ribbon-icon-bg)] hover:opacity-85 text-[var(--ribbon-icon)] transition-colors flex items-center justify-center cursor-pointer"
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
            className="h-9 w-9 border border-[var(--ribbon-icon-border)] bg-[var(--ribbon-icon-bg)] hover:opacity-85 text-[var(--ribbon-icon)] transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-[var(--ribbon-icon)]" strokeWidth={1.5} aria-hidden="true" /> : <Menu className="w-5 h-5 text-[var(--ribbon-icon)]" strokeWidth={1.5} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[4rem] bg-[var(--ribbon-bg)] border-b border-[var(--ribbon-border)] p-6 shadow-2xl flex flex-col gap-3 max-h-[85vh] overflow-y-auto z-50 text-[var(--ribbon-text)]">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className={`font-mono text-sm uppercase tracking-wider py-2 border-b border-[var(--ribbon-border)] transition-colors ${
              isActive('/') ? 'text-[var(--ribbon-text)] font-bold border-l-2 border-[var(--ribbon-active)] pl-2' : 'text-[var(--ribbon-text-secondary)] hover:text-[var(--ribbon-text)]'
            }`}
          >
            HOME
          </Link>

          {/* Mobile Services Section */}
          <div className="pt-2">
            <Link
              to="/services"
              onClick={() => setMobileOpen(false)}
              className="font-mono text-xs text-[var(--ribbon-active)] uppercase tracking-widest mb-2 font-bold block hover:underline"
            >
              SERVICES
            </Link>
            <div className="pl-3 flex flex-col gap-2 border-l-2 border-[var(--ribbon-border)]">
              {servicesSubLinks.map((sub) => (
                <Link
                  key={sub.path}
                  to={sub.path}
                  onClick={() => setMobileOpen(false)}
                  className={`font-mono text-xs uppercase tracking-wider py-1 transition-colors ${
                    isActive(sub.path) ? 'text-[var(--ribbon-text)] font-bold' : 'text-[var(--ribbon-text-secondary)] hover:text-[var(--ribbon-text)]'
                  }`}
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Accelerators Section */}
          <div className="pt-2">
            <Link
              to="/accelerators"
              onClick={() => setMobileOpen(false)}
              className="font-mono text-xs text-[var(--ribbon-active)] uppercase tracking-widest mb-2 font-bold block hover:underline"
            >
              ACCELERATORS
            </Link>
            <div className="pl-3 flex flex-col gap-2 border-l-2 border-[var(--ribbon-border)]">
              {acceleratorsSubLinks.map((sub) => (
                <Link
                  key={sub.name}
                  to={sub.path}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-xs uppercase tracking-wider py-1 text-[var(--ribbon-text-secondary)] hover:text-[var(--ribbon-text)] transition-colors"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Industries Section */}
          <div className="pt-2">
            <Link
              to="/industries"
              onClick={() => setMobileOpen(false)}
              className="font-mono text-xs text-[var(--ribbon-active)] uppercase tracking-widest mb-2 font-bold block hover:underline"
            >
              INDUSTRIES
            </Link>
            <div className="pl-3 flex flex-col gap-2 border-l-2 border-[var(--ribbon-border)]">
              {industriesSubLinks.map((sub) => (
                <Link
                  key={sub.path}
                  to={sub.path}
                  onClick={() => setMobileOpen(false)}
                  className={`font-mono text-xs uppercase tracking-wider py-1 transition-colors ${
                    isActive(sub.path) ? 'text-[var(--ribbon-text)] font-bold' : 'text-[var(--ribbon-text-secondary)] hover:text-[var(--ribbon-text)]'
                  }`}
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Case Studies Section */}
          <div className="pt-2">
            <Link
              to="/case-studies"
              onClick={() => setMobileOpen(false)}
              className="font-mono text-xs text-[var(--ribbon-active)] uppercase tracking-widest mb-2 font-bold block hover:underline"
            >
              CASE STUDIES
            </Link>
            <div className="pl-3 flex flex-col gap-2 border-l-2 border-[var(--ribbon-border)]">
              {caseStudiesSubLinks.map((sub) => (
                <Link
                  key={sub.path}
                  to={sub.path}
                  onClick={() => setMobileOpen(false)}
                  className={`font-mono text-xs uppercase tracking-wider py-1 transition-colors ${
                    isActive(sub.path) ? 'text-[var(--ribbon-text)] font-bold' : 'text-[var(--ribbon-text-secondary)] hover:text-[var(--ribbon-text)]'
                  }`}
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Company Section */}
          <div className="pt-2">
            <div className="font-mono text-xs text-[var(--ribbon-active)] uppercase tracking-widest mb-2 font-bold">
              COMPANY
            </div>
            <div className="pl-3 flex flex-col gap-2 border-l-2 border-[var(--ribbon-border)]">
              {companySubLinks.map((sub) => (
                <Link
                  key={sub.path}
                  to={sub.path}
                  onClick={() => setMobileOpen(false)}
                  className={`font-mono text-xs uppercase tracking-wider py-1 transition-colors ${
                    isActive(sub.path) ? 'text-[var(--ribbon-text)] font-bold' : 'text-[var(--ribbon-text-secondary)] hover:text-[var(--ribbon-text)]'
                  }`}
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[var(--ribbon-border)] mt-2 flex flex-col gap-2">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-[var(--ribbon-button-bg)] text-[var(--ribbon-button-text)] border border-[var(--ribbon-button-border)] py-3 px-4 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              Book Strategy Call <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
