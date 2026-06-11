import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { GrcSliderHero } from "@/components/hero/GrcSliderHero";
import { 
  CheckCircle2, ShieldCheck, ClipboardCheck, Clock, BarChart3,
  Users, ArrowRightLeft, Settings, Layers,
  ArrowRight, AlertCircle, Info, Briefcase, Activity, Star, Shield
} from "lucide-react";

import { 
  skillTiers, engagementModels, industryMatrix, 
  detailedOfferings, screeningPhases, clientBenefits, hiringFormats 
} from "@/data/staffing-compendium-data";
import { getIndustryIcon } from "@/data/industries-data";

import heroAiDriven from "@/assets/hero-ai-driven.jpg";
import heroIntegration from "@/assets/hero-integration.jpg";
import heroVerify from "@/assets/hero-verify.jpg";
import heroCommand from "@/assets/command_center_1.jpg";

export default function ManageStaffingPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<typeof industryMatrix[0]>(industryMatrix[0]);

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

  const getTabIcon = (id: string) => {
    switch (id) {
      case "offering-perm": return Users;
      case "offering-contract": return Briefcase;
      case "offering-c2h": return ArrowRightLeft;
      case "offering-temp-cont": return Clock;
      case "offering-emergency": return Activity;
      case "offering-executive": return Star;
      case "offering-project": return Settings;
      case "offering-msp": return Layers;
      case "offering-rpo": return ClipboardCheck;
      default: return Users;
    }
  };

  const getAccentColor = (id: string) => {
    switch (id) {
      case "offering-perm": return "blue";
      case "offering-contract": return "emerald";
      case "offering-c2h": return "indigo";
      case "offering-temp-cont": return "cyan";
      case "offering-emergency": return "rose";
      case "offering-executive": return "violet";
      case "offering-project": return "orange";
      case "offering-msp": return "purple";
      case "offering-rpo": return "teal";
      default: return "blue";
    }
  };



  return (
    <Layout>
      <div className="bg-white pb-24 text-slate-600 relative">
        


        {/* Panel 1: Title & Hero Description Carousel */}
        <div>
          <GrcSliderHero 
            slides={slides} 
            backLink={{ to: "/", label: "Back to Home" }} 
            categoryLabel="Staffing Solutions"
          />
        </div>

        {/* Panel 2: Statistics Grid */}
        <section className="py-6 relative overflow-hidden bg-white border-b border-slate-100">
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

        {/* PART I Panel: Manpower Categorization by Skill Tier */}
        <section id="part-1-skills" className="py-12 bg-white scroll-mt-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Part I
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                Manpower Categorization by Skill Tier
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                Every manpower engagement begins with a precise classification of the talent required. We categorize all manpower into three distinct tiers based on education, certification, experience, and functional complexity.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {skillTiers.map((tier, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 text-left"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl uppercase tracking-wider">
                        {tier.title.split(" ")[0]} Skill
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] font-black text-blue-600 uppercase tracking-widest">
                        Tier {idx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      {tier.profile}
                    </p>

                    <div className="pt-4 border-t border-slate-200 space-y-2">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                        Functional Characteristics:
                      </h4>
                      <ul className="space-y-2">
                        {tier.characteristics.map((char, i) => (
                          <li key={i} className="text-xs font-semibold text-slate-700 flex items-start gap-1.5">
                            <span className="text-blue-500 mt-0.5">•</span>
                            <span>{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 space-y-2.5">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                      Representative Roles by Sector:
                    </h4>
                    <div className="space-y-2">
                      {Object.entries(tier.roles).slice(0, 4).map(([domain, roles]) => (
                        <div key={domain} className="space-y-0.5">
                          <div className="text-[9px] font-black text-blue-600 uppercase tracking-widest">{domain}</div>
                          <div className="text-[11px] font-semibold text-slate-700 leading-tight">
                            {roles.join(", ")}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PART II Panel: Core Staffing Categories (Hiring Formats) */}
        <section id="part-2-formats" className="py-16 bg-slate-50/50 border-y border-slate-100 scroll-mt-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Part II
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                Core Staffing Categories (Hiring Formats)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                Staffing categories define the duration, nature, and urgency of the employment relationship itself. Each category serves a distinct operational purpose.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hiringFormats.map((format) => (
                <div 
                  key={format.id}
                  className="bg-white border border-slate-200/80 rounded-3xl p-6 hover:border-blue-500/40 hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-extrabold text-slate-900 text-base leading-snug">
                        {format.title.split(" (")[0]}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[8px] font-bold text-slate-500 uppercase tracking-wider shrink-0">
                        {format.urgency.split(" (")[0]}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      {format.definition}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 space-y-2">
                    <h4 className="text-[9px] font-black text-blue-600 uppercase tracking-widest">
                      When to Use:
                    </h4>
                    <ul className="space-y-1.5">
                      {format.whenToUse.map((item, idx) => (
                        <li key={idx} className="text-[11px] font-semibold text-slate-700 flex items-start gap-1.5 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PART III Panel: Strategic Engagement Models */}
        <section id="part-3-models" className="py-16 bg-white scroll-mt-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Part III
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                Strategic Engagement Models
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                While staffing categories define the job, engagement models define the business relationship between the client and Govenics—how talent is sourced, compensated, managed, and transitioned.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {engagementModels.map((model) => (
                <div 
                  key={model.id}
                  className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 hover:border-blue-500/40 hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <h3 className="font-extrabold text-slate-900 text-base leading-snug uppercase tracking-wider border-l-2 border-blue-500 pl-2">
                      {model.title.split(" (")[0]}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      {model.howItWorks}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200 space-y-1.5">
                    {model.details.map((detail, idx) => (
                      <div key={idx} className="text-[11px] font-semibold text-slate-700 flex items-start gap-1.5 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PART IV Panel: Industry-Specific Manpower Solutions Matrix */}
        <section id="part-4-matrix" className="py-16 bg-slate-50/50 border-y border-slate-100 scroll-mt-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Part IV
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                Industry-Specific Manpower Solutions Matrix
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                Click any industry vertical below to load its pre-calibrated staffing configurations, recommended skill tiers, and compliance safeguards in the interactive preview panel.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {industryMatrix.map((ind) => {
                const IconComp = getIndustryIcon(ind.id);
                const isSelected = selectedIndustry.id === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`flex flex-col items-center justify-between gap-3 p-5 rounded-3xl border transition-all hover:scale-[1.03] text-center ${
                      isSelected
                        ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25"
                        : "bg-white border-slate-200/80 hover:border-blue-500/25 hover:shadow-md text-slate-800"
                    }`}
                  >
                    <div className={`p-3 rounded-2xl shrink-0 transition-colors ${
                      isSelected ? "bg-white/20 text-white" : "bg-blue-500/10 text-blue-600"
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-wider line-clamp-2 min-h-[30px] flex items-center justify-center">
                      {ind.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Interactive Preview Box */}
            {selectedIndustry && (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 text-left shadow-lg space-y-6 animate-fade-in">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4 flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-500/10 text-blue-600 rounded-2xl">
                      {(() => {
                        const IconComp = getIndustryIcon(selectedIndustry.id);
                        return <IconComp className="w-6 h-6" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 font-heading">
                        {selectedIndustry.title} Staffing Calibration
                      </h3>
                      <p className="text-[9px] font-black uppercase text-blue-600 tracking-wider">
                        Active Industry GRC Configuration Matrix
                      </p>
                    </div>
                  </div>
                  <Link to={`/industries/${selectedIndustry.id}`}>
                    <button className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/10">
                      View Full Sector Profile <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  {/* Skill tiers columns */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Low-Skill Roles</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedIndustry.lowSkill.roles.map((r) => (
                          <span key={r} className="text-[9px] font-extrabold bg-white border border-slate-200/80 rounded-lg px-2.5 py-1 text-slate-700">
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-3 border-t border-slate-200/60 text-[10px] space-y-1">
                      <div><span className="font-bold text-slate-400 uppercase text-[8px] tracking-wider">Hiring Format:</span> <span className="font-semibold text-slate-700">{selectedIndustry.lowSkill.category}</span></div>
                      <div><span className="font-bold text-slate-400 uppercase text-[8px] tracking-wider">Engagement Model:</span> <span className="font-semibold text-slate-700">{selectedIndustry.lowSkill.model}</span></div>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Medium-Skill Roles</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedIndustry.mediumSkill.roles.map((r) => (
                          <span key={r} className="text-[9px] font-extrabold bg-white border border-slate-200/80 rounded-lg px-2.5 py-1 text-slate-700">
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-3 border-t border-slate-200/60 text-[10px] space-y-1">
                      <div><span className="font-bold text-slate-400 uppercase text-[8px] tracking-wider">Hiring Format:</span> <span className="font-semibold text-slate-700">{selectedIndustry.mediumSkill.category}</span></div>
                      <div><span className="font-bold text-slate-400 uppercase text-[8px] tracking-wider">Engagement Model:</span> <span className="font-semibold text-slate-700">{selectedIndustry.mediumSkill.model}</span></div>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-wider">High-Skill Roles</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedIndustry.highSkill.roles.map((r) => (
                          <span key={r} className="text-[9px] font-extrabold bg-white border border-slate-200/80 rounded-lg px-2.5 py-1 text-slate-700">
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-3 border-t border-slate-200/60 text-[10px] space-y-1">
                      <div><span className="font-bold text-slate-400 uppercase text-[8px] tracking-wider">Hiring Format:</span> <span className="font-semibold text-slate-700">{selectedIndustry.highSkill.category}</span></div>
                      <div><span className="font-bold text-slate-400 uppercase text-[8px] tracking-wider">Engagement Model:</span> <span className="font-semibold text-slate-700">{selectedIndustry.highSkill.model}</span></div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50/50 border border-amber-200 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-1.5 text-amber-800">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <h4 className="text-[10px] font-black uppercase tracking-wider">
                      Sector-Specific GRC Considerations
                    </h4>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {selectedIndustry.considerations.map((item, idx) => (
                      <li key={idx} className="text-xs font-semibold text-slate-700 flex items-start gap-1.5 leading-snug">
                        <Info className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* PART V Panel Introduction */}
        <section id="part-5-offerings" className="py-12 bg-white pb-0 scroll-mt-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Part V
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                Detailed Service Offerings
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                Detailed breakdowns of our 9 specialized manpower and compliance staffing offerings. Scroll down to review timelines, capabilities, and delivery workflows for each offering.
              </p>
            </div>
          </div>
        </section>

        {/* 9 SEPARATE OFFERING PANEL SECTIONS (Alternating background / steppers layout) */}
        {detailedOfferings.map((offering, idx) => {
          const isEven = idx % 2 === 0;
          const accent = getAccentColor(offering.id);
          const OfferingIcon = getTabIcon(offering.id);
          
          return (
            <section 
              key={offering.id} 
              id={offering.id}
              className={`py-16 scroll-mt-20 ${
                isEven ? "bg-slate-50/45 border-y border-slate-100" : "bg-white"
              }`}
            >
              <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-10 items-stretch">
                  
                  {/* Left Column (Content & Timelines) */}
                  <div className={`lg:w-1/2 flex flex-col justify-between space-y-6 text-left ${
                    !isEven ? "lg:order-last" : ""
                  }`}>
                    <div className="space-y-4">
                      {/* Sub-Header */}
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-${accent}-500/10 text-${accent}-600`}>
                          <OfferingIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">
                            Offering Category {idx + 1}
                          </span>
                          <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl uppercase tracking-wider">
                            {offering.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                        {offering.overview}
                      </p>

                      {/* Capabilities checklist inside card */}
                      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 space-y-3.5 shadow-sm">
                        <h4 className="font-extrabold text-blue-600 text-[10px] uppercase tracking-widest border-l-2 border-blue-500 pl-2">
                          Capabilities & Core Benefits
                        </h4>
                        <ul className="space-y-2.5">
                          {offering.benefits.map((item, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-600 font-semibold leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                              <div>
                                <strong className="text-slate-800">{item.title}:</strong> {item.desc}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Standard Deploy Timelines */}
                    <div className="pt-4 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm mt-4">
                      {Object.entries(offering.deployTime).map(([tier, time]) => (
                        <div key={tier} className="text-left">
                          <div className="text-[8px] text-slate-400 font-bold uppercase tracking-widest leading-none">{tier}</div>
                          <div className="text-[10px] text-slate-800 font-extrabold mt-1">{time}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (Timeline Stepper) */}
                  <div className="lg:w-1/2 text-left">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md h-full flex flex-col justify-between">
                      <div className="space-y-4">
                        <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider mb-2 border-b border-slate-100 pb-3 flex items-center gap-2">
                          <Clock className="w-4.5 h-4.5 text-blue-600" />
                          <span>Recruitment & Deployment Workflow</span>
                        </h4>
                        <div className="relative border-l-2 border-slate-100 pl-4 ml-2 space-y-5">
                          {offering.processSteps.map((step, sIdx) => (
                            <div key={sIdx} className="relative">
                              {/* Dot indicator */}
                              <div className="absolute -left-[23px] top-0.5 w-3 h-3 rounded-full bg-blue-600 border border-white flex items-center justify-center shadow-md shadow-blue-500/30" />
                              <div className="space-y-0.5">
                                <div className="text-[10px] font-black text-slate-900 uppercase tracking-wide">
                                  Step {sIdx + 1}: {step.title}
                                </div>
                                <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                                  {step.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-slate-400">
                        <span>GRC Calibrated</span>
                        <span className="text-blue-600 flex items-center gap-1">
                          SLA-Backed <ShieldCheck className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}

        {/* PART VI Panel: The Advanced Screening & Selection Process */}
        <section id="part-6-screening" className="py-16 bg-slate-50/50 border-y border-slate-100 scroll-mt-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Part VI
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                The Advanced Screening & Selection Process
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                To guarantee zero GRC deviation and compliance integrity, every candidate passes through our multidimensional vetting journey before deployment.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-6">
              {screeningPhases.map((phase, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-3xl p-5 text-left relative flex flex-col justify-between hover:border-blue-500/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="w-8 h-8 rounded-full bg-blue-600/10 text-blue-600 font-black text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-[8px] font-black uppercase text-blue-500 tracking-wider">
                        {phase.phase}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-slate-950 text-xs sm:text-sm uppercase tracking-wide leading-snug">
                      {phase.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PART VII Panel: Key Benefits & Strategic Advantages */}
        <section id="part-7-benefits" className="py-16 bg-white scroll-mt-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Part VII
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                Key Benefits & Strategic Advantages
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                Why global companies choose Govenics GRC for statutory payroll, staffing, and compliance-aware labor management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {clientBenefits.map((benefit, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 text-left flex items-start gap-4 hover:border-blue-500/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-900 text-sm sm:text-base uppercase tracking-wide">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Panel 18: CTA Bottom Section */}
        <section className="py-16 bg-slate-50/50 border-t border-slate-100">
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
