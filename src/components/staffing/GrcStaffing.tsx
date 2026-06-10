import { useState } from "react";
import { staffingData } from "@/data/staffing-data";
import { CheckCircle2, UserCheck, ShieldCheck, Clock } from "lucide-react";

export const GrcStaffing = () => {
  const [activeSlaTab, setActiveSlaTab] = useState<"fillRate" | "compliance" | "pipeline">("fillRate");

  return (
    <section id="staffing" className="py-8 bg-white border-t border-slate-200/80 relative overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest rounded-full">
            Compliance-Integrated Staffing
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight font-heading">
            Managed Workforce & SLA Staffing
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We deliver domain-certified, pre-vetted compliance officers, manufacturing safety teams, and BFSI operations staff managed under strict statutory SLAs.
          </p>
        </div>

        {/* Dynamic Split Section: Staffing List & SLA Dashboard */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          
          {/* Left: Staffing Services list (7 cols) */}
          <div className="xl:col-span-7 space-y-4 max-h-[700px] overflow-y-auto pr-2 scrollbar-hide">
            {staffingData.map((item) => (
              <div
                key={item.id}
                className="group relative p-6 bg-slate-50 border border-slate-200/80 hover:border-blue-500/30 hover:bg-white rounded-2xl transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] font-black text-blue-600 uppercase tracking-widest">
                      SLA: {item.slaTarget}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                    {item.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {item.features.slice(0, 2).map((feat, idx) => (
                      <span key={idx} className="text-[10px] text-slate-700 flex items-center gap-1 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-4 pt-3 border-t border-slate-100">
                  Ideal For: <span className="text-slate-600">{item.idealFor}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: SLA Dashboard (5 cols) */}
          <div className="xl:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl">
            {/* Dashboard Inner Background */}
            <div className="absolute inset-0 bg-cyber-grid bg-[size:32px_32px] opacity-10 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-blue-500" /> Staffing Operations Control
                </h3>
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black text-emerald-400 uppercase tracking-widest">
                  Live SLA Active
                </span>
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-3 gap-1 bg-slate-100 rounded-xl p-0.5 border border-slate-200">
                <button
                  onClick={() => setActiveSlaTab("fillRate")}
                  className={`py-2 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all ${
                    activeSlaTab === "fillRate" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  Fill Rates
                </button>
                <button
                  onClick={() => setActiveSlaTab("compliance")}
                  className={`py-2 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all ${
                    activeSlaTab === "compliance" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  Compliance
                </button>
                <button
                  onClick={() => setActiveSlaTab("pipeline")}
                  className={`py-2 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all ${
                    activeSlaTab === "pipeline" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  Pipelines
                </button>
              </div>

              {/* Dynamic Content Display */}
              <div className="h-64 flex flex-col justify-center">
                {activeSlaTab === "fillRate" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-slate-700">
                        <span>Managed Staffing SLA</span>
                        <span>98.6% / 95% Target</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: "98.6%" }} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-slate-700">
                        <span>Contingency Deployment (48 Hrs)</span>
                        <span>94.2% / 90% Target</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: "94.2%" }} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-slate-700">
                        <span>Talent Retention Score (1 Year)</span>
                        <span>91.8% / 85% Target</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: "91.8%" }} />
                      </div>
                    </div>
                  </div>
                )}

                {activeSlaTab === "compliance" && (
                  <div className="space-y-3">
                    {[
                      { title: "Statutory Payroll (PF/ESIC/PT)", value: "100% Compliant", color: "text-emerald-600" },
                      { title: "Labour Law Audits (CLRA Registers)", value: "Flawless Logs", color: "text-emerald-600" },
                      { title: "Pre-Vetting Background Checks", value: "Triple-Layer Active", color: "text-emerald-600" },
                      { title: "Client SLA Monthly Reconciliation", value: "0 Deviations", color: "text-emerald-600" }
                    ].map((stat, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 border border-slate-150 rounded-xl flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-600">{stat.title}</span>
                        <span className={`font-black uppercase tracking-widest ${stat.color}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeSlaTab === "pipeline" && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between bg-slate-50 p-3.5 border border-slate-150 rounded-2xl">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-500" />
                        <div className="text-xs">
                          <div className="font-bold text-slate-900">Active Talent Pool</div>
                          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Regulated Sector Resumes</div>
                        </div>
                      </div>
                      <span className="text-base font-black text-blue-600">12,482+</span>
                    </div>
 
                    <div className="flex items-center justify-between bg-slate-50 p-3.5 border border-slate-150 rounded-2xl">
                      <div className="flex items-center gap-2">
                        <UserCheck className="w-5 h-5 text-blue-500" />
                        <div className="text-xs">
                          <div className="font-bold text-slate-900">Pre-Vetted Candidates</div>
                          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Background Checks Verified</div>
                        </div>
                      </div>
                      <span className="text-base font-black text-blue-600">4,380</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Core compliance bottom assurances */}
            <div className="mt-8 pt-4 border-t border-slate-100 space-y-2 relative z-10 text-[10px] text-slate-500 font-bold tracking-widest uppercase">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-500" /> Statutory registers updated automatically
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-500" /> Integrated with TRUSTGRID.AI Watchlists
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
