import { ShieldCheck, XCircle, CheckCircle2 } from "lucide-react";

interface ComparisonRow {
  advantage: string;
  govenics: string;
  traditional: string;
  status: "success" | "warning" | "error";
}

const comparisonData: ComparisonRow[] = [
  {
    advantage: "Implementation Velocity",
    govenics: "Phased 18-month blueprints with immediate critical audits launched within 10 days.",
    traditional: "Slow, abstract advisory phases extending over 6-12 months with high documentation overhead.",
    status: "success"
  },
  {
    advantage: "Compliance Automation",
    govenics: "Integrated GOVENICS.AI client-site trackers auditing environmental, telecom & data logs dynamically.",
    traditional: "Static annual Excel spreadsheets and manual auditing folders that become stale instantly.",
    status: "success"
  },
  {
    advantage: "Industry Specificity",
    govenics: "15 dedicated industrial segments pre-codified with CDSCO, RBI, RERA, FSSAI & CPCB regulations.",
    traditional: "Generic, one-size-fits-all questionnaires requiring long stakeholder workshops to align.",
    status: "success"
  },
  {
    advantage: "Operational Overwatch",
    govenics: "24/7 Remote Command Center tracking live telemetry, incident alarms, and IP watchlists.",
    traditional: "Passive consultants who leave as soon as standard reports are compiled and presented.",
    status: "success"
  },
  {
    advantage: "Workforce Staffing",
    govenics: "Statutory SLA-managed workforce and pre-vetted compliance talent deployed in 48-72 hours.",
    traditional: "Consulting firms who only advise, leaving client HR to search and source specialized talent.",
    status: "success"
  },
  {
    advantage: "Cost Efficiency",
    govenics: "Predictable, SaaS-backed or SLA-fixed retainer models offering high return on investment.",
    traditional: "Astronomical hourly fees with unpredictable custom billing additions and change orders.",
    status: "success"
  }
];

export const WhyGovenics = () => {
  return (
    <section id="why-govenics" className="py-8 bg-transparent border-t border-slate-200/60 relative overflow-hidden">
      <div className="container mx-auto px-6 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full">
            The Govenics Difference
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight font-heading">
            GOVENICS vs Traditional Advisory
          </h2>
          <p className="text-slate-650 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Traditional Big Four firms deliver slide decks. We deliver automated controls, pre-codified frameworks, and GRC-integrated staffing to enforce execution.
          </p>
        </div>

        {/* Comparison Table Grid */}
        <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-lg text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-50 border-b border-slate-200 text-[10px] font-black uppercase tracking-wider text-slate-500 p-6 gap-4">
            <div className="md:col-span-3">Advantage Segment</div>
            <div className="md:col-span-5 text-blue-600 flex items-center gap-1.5 font-extrabold">
              <ShieldCheck className="w-4.5 h-4.5" /> GOVENICS Consulting
            </div>
            <div className="md:col-span-4 text-slate-400 font-extrabold">Traditional Consulting Firms</div>
          </div>

          <div className="divide-y divide-slate-100">
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-6 gap-4 items-start hover:bg-slate-50/30 transition-colors"
              >
                {/* Column 1: Advantage (3 cols) */}
                <div className="md:col-span-3 text-sm font-black text-slate-900 leading-snug font-heading">
                  {row.advantage}
                </div>

                {/* Column 2: Govenics (5 cols) */}
                <div className="md:col-span-5 text-xs text-slate-650 font-semibold leading-relaxed flex items-start gap-2 pr-6">
                  <CheckCircle2 className="w-4.5 h-4.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{row.govenics}</span>
                </div>

                {/* Column 3: Traditional (4 cols) */}
                <div className="md:col-span-4 text-xs text-slate-400 leading-relaxed flex items-start gap-2">
                  <XCircle className="w-4.5 h-4.5 text-slate-300 shrink-0 mt-0.5" />
                  <span className="text-slate-500 font-medium">{row.traditional}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
