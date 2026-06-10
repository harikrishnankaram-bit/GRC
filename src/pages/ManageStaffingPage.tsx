import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { GrcSliderHero } from "@/components/hero/GrcSliderHero";
import { staffingData } from "@/data/staffing-data";
import { industriesData } from "@/data/industries-data";
import { 
  CheckCircle2, ShieldCheck, ClipboardCheck, Clock, BarChart3,
  Users, ArrowRightLeft, Settings, Shield, Cpu, Layers,
  ArrowRight
} from "lucide-react";

import heroAiDriven from "@/assets/hero-ai-driven.jpg";
import heroIntegration from "@/assets/hero-integration.jpg";
import heroVerify from "@/assets/hero-verify.jpg";
import heroCommand from "@/assets/command_center_1.jpg";

export default function ManageStaffingPage() {
  const [activeTab, setActiveTab] = useState(0);
  const tabContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const slides = [
    {
      badge: "Workforce Solutions",
      title: "Compliance-Integrated",
      highlight: "SLA Staffing",
      description: "Deploy domain-certified, pre-vetted compliance officers, audit teams, and operations staff managed under strict SLAs.",
      image: heroVerify,
    },
    {
      badge: "Compliance Vetting",
      title: "Triple-Layer Candidate",
      highlight: "Pre-Vetting Process",
      description: "Every candidate undergoes background checks, statutory verifications, and compliance knowledge test logs.",
      image: heroAiDriven,
    },
    {
      badge: "Rapid Deployment",
      title: "Contingency Staffing within",
      highlight: "48-72 Hours",
      description: "Access our pre-vetted talent pool of 12,000+ compliance professionals ready for immediate deployment.",
      image: heroCommand,
    },
    {
      badge: "Statutory Assurances",
      title: "Zero-Deviation GRC",
      highlight: "Statutory Operations",
      description: "Full management of statutory payroll (PF/ESIC/PT), labor law registers, and client-side reconciliation logs.",
      image: heroIntegration,
    }
  ];

  // Panel 2: Statistics Grid (Staffing Specific)
  const stats = [
    { value: "↓ 40", suffix: "%", label: "Average Hiring Cost Reduction", icon: ShieldCheck },
    { value: "98.6", suffix: "%", label: "SLA-Backed Fill Rate", icon: ClipboardCheck },
    { value: "100", suffix: "%", label: "Statutory Payroll Compliance", icon: Clock },
    { value: "12,000", suffix: "+", label: "Pre-Vetted Talent Pool", icon: BarChart3 }
  ];

  // Panel 3: Portfolio Card Grid (Staffing Pillars)
  const portfolio = [
    {
      title: "SLA Operations Control",
      icon: Shield,
      features: [
        "Dedicated account management",
        "Live KPI tracking dashboard",
        "48-72 Hour turnaround SLA"
      ]
    },
    {
      title: "Compliance-First Vetting",
      icon: Cpu,
      features: [
        "Triple-layer background checks",
        "Credential & cert validation",
        "Police clearance verification"
      ]
    },
    {
      title: "Statutory Safeguards",
      icon: Layers,
      features: [
        "Automated PF, ESIC & PT filing",
        "CLRA master registers kept live",
        "Zero payroll deviation guarantee"
      ]
    },
    {
      title: "Domain Integration",
      icon: BarChart3,
      features: [
        "Domain-certified specialists",
        "TRUSTGRID.AI checks integrated",
        "Compliance-first site training"
      ]
    }
  ];

  // Panel 4: Vertical Tabs Setup
  const tabs = staffingData.map((item) => {
    const getTabIcon = (id: string) => {
      switch (id) {
        case "managed-staffing": return Users;
        case "contingency-staffing": return Clock;
        case "temporary-staffing": return ClipboardCheck;
        case "rpo": return ArrowRightLeft;
        case "payroll-compliance": return ShieldCheck;
        case "industry-specific": return Settings;
        case "compliance-first": return Shield;
        default: return Users;
      }
    };
    return {
      ...item,
      icon: getTabIcon(item.id)
    };
  });

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    if (tabContentRef.current) {
      tabContentRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  // Panel 5: Pre-Calibrated Sector Implementations
  const targetIndustryIds = ["bfsi", "manufacturing", "healthcare", "it-services", "real-estate-infra", "logistics-supply-chain", "retail-ecommerce"];
  const relatedIndustries = industriesData.filter(ind => targetIndustryIds.includes(ind.id));

  return (
    <Layout>
      <div className="bg-white pb-24 text-slate-600">
        
        {/* Panel 1: Title & Hero Description Carousel */}
        <GrcSliderHero 
          slides={slides} 
          backLink={{ to: "/", label: "Back to Home" }} 
          categoryLabel="Staffing Solutions"
        />

        {/* Panel 2: Statistics Grid */}
        <section className="py-12 relative overflow-hidden bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-slate-50 border border-slate-200/80 rounded-3xl p-6 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden transform hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 space-y-4 text-left">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                        <StatIcon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-0.5 text-3xl sm:text-4xl font-black text-slate-900">
                          {stat.value}
                          {stat.suffix && <span className="text-lg text-slate-500 font-bold ml-0.5">{stat.suffix}</span>}
                        </div>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Panel 3: Portfolio Card Grid */}
        <section className="py-16 bg-slate-50/50 border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-6xl space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolio.map((card, index) => {
                const CardIcon = card.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white border border-slate-200/80 rounded-3xl p-6 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-1 text-left"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 space-y-5">
                      <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                        <CardIcon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-base leading-snug group-hover:text-blue-600 transition-colors">
                        {card.title}
                      </h3>
                      <ul className="space-y-2 pt-2 border-t border-slate-100">
                        {card.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-semibold leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Panel 4: Rich Vertical Tabs */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Left tab buttons (1/3 width) */}
              <div className="lg:w-1/3 space-y-3 text-left">
                {tabs.map((tab, index) => {
                  const TabIcon = tab.icon;
                  const isActive = activeTab === index;
                  return (
                    <button
                      key={index}
                      onClick={() => handleTabChange(index)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-3 ${
                        isActive
                          ? "bg-blue-600 text-white border-blue-500 shadow-xl shadow-blue-500/25"
                          : "bg-slate-50 border-slate-200/80 hover:border-blue-500/50 hover:bg-white hover:shadow-md"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? "bg-white/20" : "bg-blue-500/10"
                      }`}>
                        <TabIcon className={`w-5 h-5 ${isActive ? "text-white" : "text-blue-600"}`} />
                      </div>
                      <span className="font-bold text-xs sm:text-sm uppercase tracking-wide">
                        {tab.title.split(" (")[0]} {/* truncate brackets for compact styling */}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right content panel (2/3 width) */}
              <div ref={tabContentRef} className="lg:w-2/3 text-left">
                <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 min-h-[420px] flex flex-col justify-between shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                      <h4 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                        {tabs[activeTab].title}
                      </h4>
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-black text-blue-600 uppercase tracking-widest">
                        SLA: {tabs[activeTab].slaTarget}
                      </span>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                      {tabs[activeTab].description}
                    </p>

                    <div className="bg-white rounded-2xl p-6 border border-slate-200">
                      <h5 className="font-extrabold text-blue-600 mb-4 text-sm uppercase tracking-widest">
                        Key Capabilities & Features
                      </h5>
                      <ul className="space-y-3">
                        {tabs[activeTab].features.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider pt-2">
                      Ideal For: <span className="text-slate-700">{tabs[activeTab].idealFor}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Panel 5: Pre-Calibrated Sector Implementations */}
        <section className="py-16 bg-slate-50/20 border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-6xl text-center space-y-8">
            <div className="max-w-2xl mx-auto space-y-3">
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Pre-Calibrated Sector Staffing
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Our compliance-integrated staffing models are certified and fully operational for the following target industries.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 justify-center">
              {relatedIndustries.map((ind) => {
                const IconComp = ind.icon;
                return (
                  <Link
                    key={ind.id}
                    to={`/industries/${ind.id}`}
                    className="flex flex-col items-center gap-3 p-5 bg-white border border-slate-200/80 hover:border-blue-500/25 rounded-3xl group transition-all hover:scale-[1.03] hover:shadow-md"
                  >
                    <div className="p-3 bg-blue-500/10 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-wider">
                        {ind.title}
                      </div>
                      <div className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">
                        Solutions &rarr;
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Panel 6: CTA Bottom Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-3xl text-center space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
              Ready to deploy compliance-integrated staffing?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-lg mx-auto">
              Initiate a custom staffing requirement assessment and configure your SLA-backed GRC workforce.
            </p>
            <div className="pt-2">
              <Link to="/contact">
                <button className="group bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-all flex items-center gap-2 mx-auto text-sm tracking-wide">
                  Schedule Staffing Requirements Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
