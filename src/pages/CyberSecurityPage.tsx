import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { GrcSliderHero } from "@/components/hero/GrcSliderHero";
import { 
  CheckCircle2, ShieldCheck, Clock, BarChart3,
  ArrowRight, Activity, Shield, Lock, Search, 
  Zap, RefreshCw, Sliders, Check, X
} from "lucide-react";

import { 
  securityOfferings, 
  nistFunctionsList 
} from "@/data/cybersecurity-compendium-data";

import heroAiDriven from "@/assets/hero-ai-driven.jpg";
import heroIntegration from "@/assets/hero-integration.jpg";
import heroVerify from "@/assets/hero-verify.jpg";
import heroCommand from "@/assets/command_center_1.jpg";

export default function CyberSecurityPage() {

  const slides = [
    {
      badge: "NIST CSF 2.0 Aligned",
      title: "End-to-End",
      highlight: "AI Security Value Chain",
      description: "A comprehensive portfolio of 15 integrated offerings covering the complete AI security lifecycle — from governance through quantum-safe readiness.",
      image: heroVerify,
    },
    {
      badge: "Continuous Exploit Validation",
      title: "Continuous AI Penetration",
      highlight: "Testing as a Service",
      description: "Autonomous AI agents and continuous red-teaming to actively probe and harden model endpoints, LLMs, and RAG databases.",
      image: heroAiDriven,
    },
    {
      badge: "Future-Proof Defense",
      title: "Quantum-Safe Readiness for",
      highlight: "Proprietary AI Models",
      description: "Safeguard AI intellectual property and training data history against quantum decryption threats with post-quantum cryptography.",
      image: heroCommand,
    },
    {
      badge: "Machine-Speed Overwatch",
      title: "Autonomous Threat Hunting &",
      highlight: "Agentic SOC Defense",
      description: "Shift to self-driving security operations using collaborative LLM agents to investigate, contain, and remediate alerts in seconds.",
      image: heroIntegration,
    }
  ];

  // Helper to get color values for badges and highlights
  const getNistColor = (nistFunc: string) => {
    switch (nistFunc) {
      case "Govern": return { bg: "bg-rose-50 border-rose-100 text-rose-600", text: "text-rose-600", border: "border-rose-200", iconBg: "bg-rose-500/10 text-rose-500" };
      case "Identify": return { bg: "bg-blue-50 border-blue-100 text-blue-600", text: "text-blue-600", border: "border-blue-200", iconBg: "bg-blue-500/10 text-blue-500" };
      case "Protect": return { bg: "bg-emerald-50 border-emerald-100 text-emerald-600", text: "text-emerald-600", border: "border-emerald-200", iconBg: "bg-emerald-500/10 text-emerald-500" };
      case "Detect": return { bg: "bg-amber-50 border-amber-100 text-amber-600", text: "text-amber-600", border: "border-amber-200", iconBg: "bg-amber-500/10 text-amber-500" };
      case "Respond": return { bg: "bg-purple-50 border-purple-100 text-purple-600", text: "text-purple-600", border: "border-purple-200", iconBg: "bg-purple-500/10 text-purple-500" };
      case "Recover": return { bg: "bg-indigo-50 border-indigo-100 text-indigo-600", text: "text-indigo-600", border: "border-indigo-200", iconBg: "bg-indigo-500/10 text-indigo-500" };
      case "Cross-cutting": return { bg: "bg-cyan-50 border-cyan-100 text-cyan-600", text: "text-cyan-600", border: "border-cyan-200", iconBg: "bg-cyan-500/10 text-cyan-500" };
      default: return { bg: "bg-slate-50 border-slate-100 text-slate-600", text: "text-slate-600", border: "border-slate-200", iconBg: "bg-slate-500/10 text-slate-500" };
    }
  };

  const getNistIcon = (nistFunc: string) => {
    switch (nistFunc) {
      case "Govern": return Shield;
      case "Identify": return Search;
      case "Protect": return Lock;
      case "Detect": return Activity;
      case "Respond": return Zap;
      case "Recover": return RefreshCw;
      case "Cross-cutting": return Sliders;
      default: return Shield;
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Group offerings by NIST function for easy TOC sub-mapping
  const getOfferingsForNist = (func: string) => {
    return securityOfferings.filter(o => o.nistFunction === func);
  };

  return (
    <Layout>
      <div className="bg-white pb-24 text-slate-600 relative">
        


        {/* Panel 1: Title & Hero Description Slider */}
        <div id="overview-hero">
          <GrcSliderHero 
            slides={slides} 
            backLink={{ to: "/", label: "Back to Home" }} 
            categoryLabel="AI Security Services"
          />
        </div>

        {/* Panel 2: Interactive NIST CSF 2.0 Mapping Matrix */}
        <section id="nist-matrix" className="py-16 bg-slate-50/50 border-y border-slate-100 scroll-mt-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                LifeCycle Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                NIST CSF 2.0 Mapping Architecture
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                Click any offering card in the mapping matrix below to jump directly to its complete threat validation timeline, compliance matrices, and SLA benchmarks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {nistFunctionsList.map((f) => {
                const IconComp = getNistIcon(f.id);
                return (
                  <div 
                    key={f.id}
                    className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-2.5">
                        <div className={`p-2 rounded-xl bg-${f.color}-500/10 text-${f.color}-600`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">
                          {f.label}
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {getOfferingsForNist(f.id).map((o) => (
                          <button
                            key={o.id}
                            onClick={() => scrollToSection(o.id)}
                            className="w-full text-left p-3 rounded-2xl bg-slate-50 hover:bg-blue-600 hover:text-white border border-slate-100 hover:border-blue-600 transition-all text-xs font-semibold group flex items-start justify-between gap-1.5"
                          >
                            <span className="line-clamp-2">
                              O{o.offeringNumber}: {o.title}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 mt-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Cross-Cutting Footer Alert */}
            <div className="mt-8 bg-blue-600/5 border border-blue-500/15 rounded-3xl p-6 flex items-start gap-4 text-left">
              <div className="p-3 bg-blue-600/10 text-blue-600 rounded-2xl shrink-0">
                <Sliders className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider">
                  Cross-Cutting Tier: Offering 12 AI-Driven Penetration Testing
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  Continuous validation, red/purple teaming, and simulation frameworks run horizontally across all categories to continuously test controls under adversarial conditions and verify SLA compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 15 DETAILED OFFERING PANELS */}
        {securityOfferings.map((offering, idx) => {
          const isEven = idx % 2 === 0;
          const { bg, iconBg } = getNistColor(offering.nistFunction);
          const OfferingIcon = getNistIcon(offering.nistFunction);

          return (
            <section
              key={offering.id}
              id={offering.id}
              className={`py-16 scroll-mt-20 border-b border-slate-100 ${
                isEven ? "bg-slate-50/45" : "bg-white"
              }`}
            >
              <div className="container mx-auto px-6 max-w-6xl">
                <div className="space-y-10">
                  
                  {/* Header Tier */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-left pb-6 border-b border-slate-200/60">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
                        <OfferingIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                            Offering {offering.offeringNumber} of 15
                          </span>
                          <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border ${bg}`}>
                            NIST: {offering.nistFunction}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading mt-1">
                          {offering.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Body Tier: Overview & Before vs Situation */}
                  <div className="grid lg:grid-cols-12 gap-10 items-stretch">
                    
                    {/* Left side: Overview, Value, Components */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left">
                      <div className="space-y-4">
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                          {offering.overview}
                        </p>

                        {/* Statement of Value Block */}
                        <div className="border-l-4 border-blue-600 bg-blue-600/5 p-4 rounded-r-2xl">
                          <p className="text-xs text-slate-700 italic font-bold">
                            &ldquo;{offering.statementOfValue}&rdquo;
                          </p>
                        </div>

                        {/* Service Components Card */}
                        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4">
                          <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-2">
                            <Sliders className="w-4 h-4 text-blue-600" />
                            <span>Service Delivery Components</span>
                          </h4>
                          <ul className="grid sm:grid-cols-1 gap-3">
                            {offering.components.map((comp, cIdx) => {
                              const [title, desc] = comp.split(": ");
                              return (
                                <li key={cIdx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold leading-relaxed">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                  <div>
                                    <strong className="text-slate-800">{title}:</strong> {desc}
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Right side: Before vs Situation Cards & Timeline */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                      
                      {/* Before / Situation Comparison */}
                      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col divide-y divide-slate-100 text-left">
                        {/* Before */}
                        <div className="p-5 bg-rose-500/[0.02]">
                          <span className="text-[8px] font-black uppercase text-rose-500 tracking-wider flex items-center gap-1 mb-2">
                            <X className="w-3 h-3" /> Before Implementation
                          </span>
                          <ul className="space-y-1.5">
                            {offering.before.map((bItem, bIdx) => (
                              <li key={bIdx} className="text-[11px] font-semibold text-slate-500 flex items-start gap-1.5">
                                <span className="text-rose-500 mt-0.5">•</span>
                                <span>{bItem}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Situation */}
                        <div className="p-5 bg-emerald-500/[0.02]">
                          <span className="text-[8px] font-black uppercase text-emerald-500 tracking-wider flex items-center gap-1 mb-2">
                            <Check className="w-3 h-3" /> Target Scenario
                          </span>
                          <p className="text-[11px] font-semibold text-slate-700 leading-relaxed">
                            {offering.situation}
                          </p>
                        </div>
                      </div>

                      {/* Timeline Card */}
                      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm text-left">
                        <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-2 mb-4">
                          <Clock className="w-4.5 h-4.5 text-blue-600" />
                          <span>Engagement Timeline & Milestones</span>
                        </h4>
                        <div className="relative border-l-2 border-slate-100 pl-4 ml-2 space-y-4">
                          {offering.timeline.map((step, sIdx) => {
                            const [phase, phaseDesc] = step.split(": ");
                            return (
                              <div key={sIdx} className="relative">
                                <div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-blue-600 border border-white flex items-center justify-center shadow-md shadow-blue-500/30" />
                                <div className="space-y-0.5">
                                  <div className="text-[10px] font-black text-slate-900 uppercase tracking-wide">
                                    {phase}
                                  </div>
                                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                                    {phaseDesc}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Pentesting & Regulatory Grid */}
                  <div className="grid md:grid-cols-2 gap-8 text-left">
                    
                    {/* Pentest Integration */}
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-between shadow-inner">
                      <div className="space-y-3">
                        <span className="text-[9px] font-black uppercase text-blue-600 tracking-wider bg-blue-100/60 px-2 py-0.5 rounded border border-blue-200">
                          AI-Driven Pentesting Integration
                        </span>
                        <p className="text-xs font-semibold text-slate-700 leading-relaxed mt-2">
                          {offering.pentestIntegration}
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-slate-200 mt-4">
                        <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Core Benefits</h5>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {offering.benefits.map((bItem, bIdx) => (
                            <li key={bIdx} className="text-[11px] font-semibold text-slate-700 flex items-start gap-1.5 leading-snug">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                              <span>{bItem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Regulatory Matrix Table */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm overflow-x-auto flex flex-col justify-between">
                      <div>
                        <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-2 mb-3">
                          <ShieldCheck className="w-4 h-4 text-blue-600" />
                          <span>Regulatory Alignment Matrix</span>
                        </h4>
                        <table className="w-full text-left text-xs divide-y divide-slate-100">
                          <thead>
                            <tr className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">
                              <th className="py-2">Regulatory Requirement</th>
                              <th className="py-2 text-right">Coverage</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                            {offering.regulatoryAlignment.map((reg, rIdx) => (
                              <tr key={rIdx}>
                                <td className="py-2.5 pr-2">{reg.requirement}</td>
                                <td className="py-2.5 text-right">
                                  <span className="px-2 py-0.5 bg-emerald-50 border border-emerald-100 rounded text-emerald-600 text-[9px] font-black uppercase tracking-widest">
                                    {reg.coverage}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      {/* GRC Calibrated Badge */}
                      <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-slate-400">
                        <span>Cyber Security Framework</span>
                        <span className="text-blue-600 flex items-center gap-1">
                          SLA-Backed <ShieldCheck className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Statistics metrics dashboard */}
                  <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm text-left">
                    <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-2 mb-4">
                      <BarChart3 className="w-4 h-4 text-blue-600" />
                      <span>Security Validation Metrics (Before vs After)</span>
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                      {offering.statistics.map((stat, sIdx) => (
                        <div key={sIdx} className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 flex flex-col justify-between space-y-3">
                          <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-snug h-[30px] line-clamp-2">
                            {stat.kpi}
                          </div>
                          <div className="flex items-baseline justify-between pt-1 border-t border-slate-200/60">
                            <div>
                              <div className="text-[8px] font-bold text-slate-400 uppercase">Before</div>
                              <div className="text-xs font-bold text-rose-500 line-through">{stat.before}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-[8px] font-bold text-slate-400 uppercase">After</div>
                              <div className="text-sm font-black text-emerald-600">{stat.after}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}

        {/* Panel 18: CTA Bottom Section */}
        <section id="cta-bottom" className="py-16 bg-slate-50/50 border-t border-slate-100 scroll-mt-20">
          <div className="container mx-auto px-6 max-w-3xl text-center space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
              Ready to secure your enterprise AI deployments?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-lg mx-auto">
              Initiate a comprehensive AI Security Requirements Audit and design your NIST CSF 2.0 aligned security posture.
            </p>
            <div className="pt-2">
              <Link to="/contact">
                <button className="group bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-all flex items-center gap-2 mx-auto text-sm tracking-wide">
                  Schedule AI Security Audit
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
