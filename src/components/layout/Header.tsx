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
          <Link to="/staffing" className={getLinkClass("/staffing")}>
            Manage Staffing Services
          </Link>
          <Link to="/cybersecurity" className={getLinkClass("/cybersecurity")}>
            Cyber Security
          </Link>
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

            <Link
              to="/staffing"
              onClick={() => setMobileOpen(false)}
              className="p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg block"
            >
              Manage Staffing Services
            </Link>
            <Link
              to="/cybersecurity"
              onClick={() => setMobileOpen(false)}
              className="p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg block"
            >
              Cyber Security
            </Link>
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
