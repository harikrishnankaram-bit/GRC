import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";
import { industriesData } from "@/data/industries-data";
import { servicesData } from "@/data/services-data";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    const baseClass = "px-3 py-2 text-sm font-semibold transition-colors duration-200";
    return `${baseClass} ${isActive ? "text-blue-600 font-bold" : "text-slate-700 hover:text-blue-600"}`;
  };

  const getNavItemClass = () => {
    const baseClass = "px-3 py-2 text-sm font-semibold flex items-center gap-1 transition-colors duration-200";
    return `${baseClass} text-slate-700 hover:text-blue-600`;
  };

  const clusters = [
    "Manufacturing & Industrial",
    "Technology & Electronics",
    "Infrastructure & Construction",
    "Energy & Utilities",
    "Financial Services",
    "Healthcare & Life Sciences",
    "Consumer & Retail",
    "Media & Services"
  ];

  const getClusterId = (name: string) => {
    return name.toLowerCase()
      .replace(/ & /g, "-")
      .replace(/ /g, "-");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileOpen
        ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-md"
        : "bg-transparent"
        }`}
    >
      {/* Top Info Bar */}
      <div
        className={`border-b transition-all duration-300 ${scrolled
          ? "h-0 opacity-0 overflow-hidden"
          : "h-10 opacity-100 border-slate-200 bg-slate-50 text-slate-600"
          }`}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-center text-[11px] font-bold tracking-wider uppercase text-center">
          <span className="text-slate-500">
            Governance, Risk & Compliance Excellence
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between relative">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span
              className="text-xl font-black tracking-tight transition-colors font-heading text-slate-900 group-hover:text-blue-600"
            >
              GOVENICS
            </span>
            <span className="text-[9px] font-bold tracking-[0.2em] -mt-1 uppercase text-slate-400">
              GRC Consulting
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-1">
          <Link to="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link to="/about" className={getLinkClass("/about")}>
            About Us
          </Link>

          {/* Industry Mega Dropdown */}
          <div
            className=""
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={getNavItemClass()}>
              Industry <ChevronDown className="w-4 h-4 text-current" />
            </button>
            {activeDropdown === "industries" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[95dvw] max-w-6xl bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 grid grid-cols-4 gap-6 animate-slide-up-dropdown mt-1">
                {/* Bridge to prevent hover loss */}
                <div className="absolute -top-8 left-0 right-0 h-8 bg-transparent" />
                <div className="col-span-4 pb-3 mb-1 border-b border-slate-100">
                  <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                    Industry Segments & GRC Calibration
                  </h3>
                </div>
                {clusters.map((clusterName) => (
                  <div key={clusterName} className="space-y-2.5">
                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider border-l-2 border-blue-500 pl-2">
                      {clusterName}
                    </h4>
                    <div className="flex flex-col gap-1.5 pl-2">
                      {industriesData
                        .filter((ind) => ind.cluster === clusterName)
                        .map((ind) => {
                          const IconComp = ind.icon;
                          return (
                            <Link
                              key={ind.id}
                              to={`/industries/${getClusterId(clusterName)}#${ind.id}`}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors py-0.5 group/link"
                            >
                              <IconComp className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-blue-600 transition-colors shrink-0" />
                              <span className="truncate">{ind.title}</span>
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Solutions Mega Dropdown */}
          <div
            className=""
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={getNavItemClass()}>
              Solutions <ChevronDown className="w-4 h-4 text-current" />
            </button>
            {activeDropdown === "services" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[95dvw] max-w-4xl bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 grid grid-cols-2 gap-x-6 gap-y-3 animate-slide-up-dropdown mt-1">
                {/* Bridge to prevent hover loss */}
                <div className="absolute -top-8 left-0 right-0 h-8 bg-transparent" />
                <div className="col-span-2 pb-3 mb-2 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                    Specialized GRC Offerings
                  </h3>
                </div>
                {servicesData.slice(0, 10).map((serv) => (
                  <Link
                    key={serv.id}
                    to={`/services/${serv.id}`}
                    onClick={() => setActiveDropdown(null)}
                    className="flex flex-col p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {serv.title}
                    </span>
                    <span className="text-[10px] text-slate-500 leading-snug line-clamp-1 mt-0.5">
                      {serv.problem}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* Staffing Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("staffing")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={getNavItemClass()}>
              Manage Staffing <ChevronDown className="w-4 h-4 text-current" />
            </button>
            {activeDropdown === "staffing" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[240px] bg-white border border-slate-200 shadow-2xl rounded-2xl p-4 flex flex-col gap-2.5 animate-slide-up-dropdown mt-1">
                {/* Bridge to prevent hover loss */}
                <div className="absolute -top-8 left-0 right-0 h-8 bg-transparent" />
                <div className="pb-1.5 mb-0.5 border-b border-slate-100">
                  <h3 className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                    Staffing Services
                  </h3>
                </div>
                <Link to="/staffing#part-1-skills" onClick={() => setActiveDropdown(null)} className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors">Part I: Skill Tiers</Link>
                <Link to="/staffing#part-2-formats" onClick={() => setActiveDropdown(null)} className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors">Part II: Hiring Formats</Link>
                <Link to="/staffing#part-3-models" onClick={() => setActiveDropdown(null)} className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors">Part III: Strategic Models</Link>
                <Link to="/staffing#part-4-matrix" onClick={() => setActiveDropdown(null)} className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors">Part IV: Industry Matrix</Link>
                <Link to="/staffing#part-5-offerings" onClick={() => setActiveDropdown(null)} className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors">Part V: Service Offerings</Link>
                <Link to="/staffing#part-6-screening" onClick={() => setActiveDropdown(null)} className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors">Part VI: Candidate Vetting</Link>
                <Link to="/staffing#part-7-benefits" onClick={() => setActiveDropdown(null)} className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors">Part VII: Key Advantages</Link>
              </div>
            )}
          </div>

          {/* Cyber Security Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("cybersecurity")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={getNavItemClass()}>
              Cyber Security <ChevronDown className="w-4 h-4 text-current" />
            </button>
            {activeDropdown === "cybersecurity" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[780px] bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 grid grid-cols-3 gap-6 animate-slide-up-dropdown mt-1 text-left">
                {/* Bridge to prevent hover loss */}
                <div className="absolute -top-8 left-0 right-0 h-8 bg-transparent" />
                
                {/* Left Side: Overview & Summary */}
                <div className="col-span-1 bg-slate-50 border border-slate-100 rounded-xl p-4 space-y-3">
                  <h3 className="text-xs font-black text-blue-600 uppercase tracking-widest">
                    Cyber Security
                  </h3>
                  <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                    NIST CSF 2.0 aligned security frameworks and compliance auditing for enterprise GRC postures.
                  </p>
                  <div className="flex flex-col gap-2 pt-2 border-t border-slate-200/60">
                    <Link 
                      to="/cybersecurity#overview-hero" 
                      onClick={() => setActiveDropdown(null)} 
                      className="text-xs font-bold text-slate-800 hover:text-blue-600 transition-colors flex items-center gap-1 group/link"
                    >
                      <span>Executive Summary</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </Link>
                    <Link 
                      to="/cybersecurity#nist-matrix" 
                      onClick={() => setActiveDropdown(null)} 
                      className="text-xs font-bold text-slate-800 hover:text-blue-600 transition-colors flex items-center gap-1 group/link"
                    >
                      <span>NIST CSF 2.0 Mapping</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </Link>
                  </div>
                </div>

                {/* Right Side: 2 Columns of Offerings */}
                <div className="col-span-2 grid grid-cols-2 gap-4">
                  {/* Column 1 */}
                  <div className="space-y-4">
                    {/* Govern */}
                    <div className="space-y-1.5">
                      <div className="text-[9px] font-black text-rose-500 uppercase tracking-wider border-l-2 border-rose-500 pl-1.5">Govern (GV)</div>
                      <div className="flex flex-col gap-1 pl-2">
                        <Link to="/cybersecurity#offering-grc" onClick={() => setActiveDropdown(null)} className="text-[10px] font-semibold text-slate-600 hover:text-rose-600 transition-colors">O1: AI-GRC Platform</Link>
                        <Link to="/cybersecurity#offering-compliance" onClick={() => setActiveDropdown(null)} className="text-[10px] font-semibold text-slate-600 hover:text-rose-600 transition-colors">O3: Regulatory Compliance</Link>
                        <Link to="/cybersecurity#offering-sovereign" onClick={() => setActiveDropdown(null)} className="text-[10px] font-semibold text-slate-600 hover:text-rose-600 transition-colors">O13: Sovereign AI</Link>
                      </div>
                    </div>

                    {/* Identify */}
                    <div className="space-y-1.5">
                      <div className="text-[9px] font-black text-blue-500 uppercase tracking-wider border-l-2 border-blue-500 pl-1.5">Identify (ID)</div>
                      <div className="flex flex-col gap-1 pl-2">
                        <Link to="/cybersecurity#offering-posture" onClick={() => setActiveDropdown(null)} className="text-[10px] font-semibold text-slate-600 hover:text-blue-600 transition-colors">O2: Risk Posture</Link>
                        <Link to="/cybersecurity#offering-risk" onClick={() => setActiveDropdown(null)} className="text-[10px] font-semibold text-slate-600 hover:text-blue-600 transition-colors">O4: Risk Assessment</Link>
                      </div>
                    </div>

                    {/* Protect */}
                    <div className="space-y-1.5">
                      <div className="text-[9px] font-black text-emerald-500 uppercase tracking-wider border-l-2 border-emerald-500 pl-1.5">Protect (PR)</div>
                      <div className="flex flex-col gap-1 pl-2">
                        <Link to="/cybersecurity#offering-architecture" onClick={() => setActiveDropdown(null)} className="text-[10px] font-semibold text-slate-600 hover:text-emerald-600 transition-colors">O5: Zero Trust Architecture</Link>
                        <Link to="/cybersecurity#offering-llm" onClick={() => setActiveDropdown(null)} className="text-[10px] font-semibold text-slate-600 hover:text-emerald-600 transition-colors">O6: LLM & Agent Security</Link>
                        <Link to="/cybersecurity#offering-quantum" onClick={() => setActiveDropdown(null)} className="text-[10px] font-semibold text-slate-600 hover:text-emerald-600 transition-colors">O15: Quantum-Safe Readiness</Link>
                      </div>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-4">
                    {/* Detect */}
                    <div className="space-y-1.5">
                      <div className="text-[9px] font-black text-amber-500 uppercase tracking-wider border-l-2 border-amber-500 pl-1.5">Detect (DE)</div>
                      <div className="flex flex-col gap-1 pl-2">
                        <Link to="/cybersecurity#offering-hunting" onClick={() => setActiveDropdown(null)} className="text-[10px] font-semibold text-slate-600 hover:text-amber-600 transition-colors">O7: Threat Hunting</Link>
                        <Link to="/cybersecurity#offering-bas" onClick={() => setActiveDropdown(null)} className="text-[10px] font-semibold text-slate-600 hover:text-amber-600 transition-colors">O8: AI-BAS Platform</Link>
                      </div>
                    </div>

                    {/* Respond */}
                    <div className="space-y-1.5">
                      <div className="text-[9px] font-black text-purple-500 uppercase tracking-wider border-l-2 border-purple-500 pl-1.5">Respond (RS)</div>
                      <div className="flex flex-col gap-1 pl-2">
                        <Link to="/cybersecurity#offering-mdr" onClick={() => setActiveDropdown(null)} className="text-[10px] font-semibold text-slate-600 hover:text-purple-600 transition-colors">O9: AI-MDR Service</Link>
                        <Link to="/cybersecurity#offering-soc" onClick={() => setActiveDropdown(null)} className="text-[10px] font-semibold text-slate-600 hover:text-purple-600 transition-colors">O10: Agentic SOC Operations</Link>
                      </div>
                    </div>

                    {/* Recover */}
                    <div className="space-y-1.5">
                      <div className="text-[9px] font-black text-indigo-500 uppercase tracking-wider border-l-2 border-indigo-500 pl-1.5">Recover (RC)</div>
                      <div className="flex flex-col gap-1 pl-2">
                        <Link to="/cybersecurity#offering-incident" onClick={() => setActiveDropdown(null)} className="text-[10px] font-semibold text-slate-600 hover:text-indigo-600 transition-colors">O11: Incident Response</Link>
                        <Link to="/cybersecurity#offering-range" onClick={() => setActiveDropdown(null)} className="text-[10px] font-semibold text-slate-600 hover:text-indigo-600 transition-colors">O14: Cyber Range</Link>
                      </div>
                    </div>

                    {/* Cross-cutting */}
                    <div className="space-y-1.5">
                      <div className="text-[9px] font-black text-cyan-500 uppercase tracking-wider border-l-2 border-cyan-500 pl-1.5">Cross-cutting (CC)</div>
                      <div className="flex flex-col gap-1 pl-2">
                        <Link to="/cybersecurity#offering-pentesting" onClick={() => setActiveDropdown(null)} className="text-[10px] font-semibold text-slate-600 hover:text-cyan-600 transition-colors">O12: Continuous Pentesting</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link to="/resources" className={getLinkClass("/resources")}>
            Resources
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden xl:flex items-center gap-3">
          <Link to="/contact">
            <button className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg shadow-blue-500/20 text-xs font-bold tracking-wide transition-all hover:scale-[1.02]">
              Consultation <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 transition-colors text-slate-800 hover:text-slate-900"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Panel */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200/80 p-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl">
          <div className="flex flex-col gap-1.5">
            <Link to="/" onClick={() => setMobileOpen(false)} className="p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg">
              Home
            </Link>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg">
              About Us
            </Link>

            {/* Mobile Accordion for Industry */}
            <div>
              <button
                onClick={() => toggleDropdown("industries")}
                className="w-full flex justify-between items-center p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                <span>Industry</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "industries" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "industries" && (
                <div className="pl-4 my-1 flex flex-col gap-4 bg-slate-50 rounded-lg p-3 border border-slate-100 max-h-[350px] overflow-y-auto">
                  {clusters.map((clusterName) => (
                    <div key={clusterName} className="space-y-1">
                      <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-l-2 border-blue-500 pl-1.5">
                        {clusterName}
                      </div>
                      <div className="pl-2 flex flex-col gap-1">
                        {industriesData
                          .filter((ind) => ind.cluster === clusterName)
                          .map((ind) => (
                            <Link
                               key={ind.id}
                               to={`/industries/${getClusterId(clusterName)}#${ind.id}`}
                               onClick={() => setMobileOpen(false)}
                               className="text-xs text-slate-750 text-slate-700 hover:text-blue-600 font-semibold py-0.5"
                            >
                              {ind.title}
                            </Link>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Accordion for Solutions */}
            <div>
              <button
                onClick={() => toggleDropdown("services")}
                className="w-full flex justify-between items-center p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "services" && (
                <div className="pl-4 my-1 flex flex-col gap-1.5 bg-slate-50 rounded-lg p-2 border border-slate-100">
                  {servicesData.slice(0, 8).map((serv) => (
                    <Link
                      key={serv.id}
                      to={`/services/${serv.id}`}
                      onClick={() => setMobileOpen(false)}
                      className="text-xs text-slate-600 hover:text-blue-600 font-semibold"
                    >
                      {serv.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Accordion for Staffing */}
            <div>
              <button
                onClick={() => toggleDropdown("staffing")}
                className="w-full flex justify-between items-center p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                <span>Manage Staffing</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "staffing" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "staffing" && (
                <div className="pl-4 my-1 flex flex-col gap-2 bg-slate-50 rounded-lg p-3 border border-slate-100">
                  <Link to="/staffing#part-1-skills" onClick={() => setMobileOpen(false)} className="text-xs font-semibold text-slate-700">Part I: Skill Tiers</Link>
                  <Link to="/staffing#part-2-formats" onClick={() => setMobileOpen(false)} className="text-xs font-semibold text-slate-700">Part II: Hiring Formats</Link>
                  <Link to="/staffing#part-3-models" onClick={() => setMobileOpen(false)} className="text-xs font-semibold text-slate-700">Part III: Strategic Models</Link>
                  <Link to="/staffing#part-4-matrix" onClick={() => setMobileOpen(false)} className="text-xs font-semibold text-slate-700">Part IV: Industry Matrix</Link>
                  <Link to="/staffing#part-5-offerings" onClick={() => setMobileOpen(false)} className="text-xs font-semibold text-slate-700">Part V: Service Offerings</Link>
                  <Link to="/staffing#part-6-screening" onClick={() => setMobileOpen(false)} className="text-xs font-semibold text-slate-700">Part VI: Candidate Vetting</Link>
                  <Link to="/staffing#part-7-benefits" onClick={() => setMobileOpen(false)} className="text-xs font-semibold text-slate-700">Part VII: Key Advantages</Link>
                </div>
              )}
            </div>

            {/* Mobile Accordion for Cyber Security */}
            <div>
              <button
                onClick={() => toggleDropdown("cybersecurity")}
                className="w-full flex justify-between items-center p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                <span>Cyber Security</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "cybersecurity" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "cybersecurity" && (
                <div className="pl-4 my-1 flex flex-col gap-3 bg-slate-50 rounded-lg p-3 border border-slate-100 max-h-[300px] overflow-y-auto">
                  <Link to="/cybersecurity#overview-hero" onClick={() => setMobileOpen(false)} className="text-xs font-semibold text-slate-700 font-bold">Executive Summary</Link>
                  <Link to="/cybersecurity#nist-matrix" onClick={() => setMobileOpen(false)} className="text-xs font-semibold text-slate-700 font-bold">NIST CSF 2.0 Mapping Matrix</Link>
                  
                  <div className="text-[10px] font-black text-rose-500 uppercase tracking-widest pt-1 border-t border-slate-200/50">Govern</div>
                  <Link to="/cybersecurity#offering-grc" onClick={() => setMobileOpen(false)} className="pl-2 text-xs text-slate-700">O1: AI-GRC Platform</Link>
                  <Link to="/cybersecurity#offering-compliance" onClick={() => setMobileOpen(false)} className="pl-2 text-xs text-slate-700">O3: Regulatory Compliance</Link>
                  <Link to="/cybersecurity#offering-sovereign" onClick={() => setMobileOpen(false)} className="pl-2 text-xs text-slate-700">O13: Sovereign AI</Link>

                  <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest pt-1 border-t border-slate-200/50">Identify</div>
                  <Link to="/cybersecurity#offering-posture" onClick={() => setMobileOpen(false)} className="pl-2 text-xs text-slate-700">O2: AI Risk Posture</Link>
                  <Link to="/cybersecurity#offering-risk" onClick={() => setMobileOpen(false)} className="pl-2 text-xs text-slate-700">O4: AI Risk Assessment</Link>

                  <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest pt-1 border-t border-slate-200/50">Protect</div>
                  <Link to="/cybersecurity#offering-architecture" onClick={() => setMobileOpen(false)} className="pl-2 text-xs text-slate-700">O5: Zero Trust Architecture</Link>
                  <Link to="/cybersecurity#offering-llm" onClick={() => setMobileOpen(false)} className="pl-2 text-xs text-slate-700">O6: LLM & Agent Security</Link>
                  <Link to="/cybersecurity#offering-quantum" onClick={() => setMobileOpen(false)} className="pl-2 text-xs text-slate-700">O15: Quantum-Safe Readiness</Link>

                  <div className="text-[10px] font-black text-amber-500 uppercase tracking-widest pt-1 border-t border-slate-200/50">Detect</div>
                  <Link to="/cybersecurity#offering-hunting" onClick={() => setMobileOpen(false)} className="pl-2 text-xs text-slate-700">O7: Threat Hunting</Link>
                  <Link to="/cybersecurity#offering-bas" onClick={() => setMobileOpen(false)} className="pl-2 text-xs text-slate-700">O8: AI-BAS Platform</Link>

                  <div className="text-[10px] font-black text-purple-500 uppercase tracking-widest pt-1 border-t border-slate-200/50">Respond</div>
                  <Link to="/cybersecurity#offering-mdr" onClick={() => setMobileOpen(false)} className="pl-2 text-xs text-slate-700">O9: AI-MDR Service</Link>
                  <Link to="/cybersecurity#offering-soc" onClick={() => setMobileOpen(false)} className="pl-2 text-xs text-slate-700">O10: Agentic SOC Operations</Link>

                  <div className="text-[10px] font-black text-indigo-500 uppercase tracking-widest pt-1 border-t border-slate-200/50">Recover</div>
                  <Link to="/cybersecurity#offering-incident" onClick={() => setMobileOpen(false)} className="pl-2 text-xs text-slate-700">O11: Incident Response</Link>
                  <Link to="/cybersecurity#offering-range" onClick={() => setMobileOpen(false)} className="pl-2 text-xs text-slate-700">O14: Cyber Range</Link>

                  <div className="text-[10px] font-black text-cyan-500 uppercase tracking-widest pt-1 border-t border-slate-200/50">Cross-cutting</div>
                  <Link to="/cybersecurity#offering-pentesting" onClick={() => setMobileOpen(false)} className="pl-2 text-xs text-slate-700">O12: Continuous Pentest</Link>
                </div>
              )}
            </div>
            <Link to="/resources" onClick={() => setMobileOpen(false)} className="p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg">
              Resources
            </Link>
          </div>

          <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-100">
            <Link to="/contact" className="w-full">
              <button className="w-full flex items-center justify-center gap-1.5 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20">
                Book Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
