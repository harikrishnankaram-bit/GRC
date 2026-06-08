import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { industriesData } from "@/data/industries-data";
import { servicesData } from "@/data/services-data";
import { casesData } from "@/data/cases-data";
import { industryServicesData } from "@/data/industry-services-data";
import { 
  ArrowLeft, CheckCircle2, Shield, ShieldCheck, ShieldAlert, 
  FileCheck, TrendingUp, Briefcase 
} from "lucide-react";

export default function IndustryDetailPage() {
  const { industryId } = useParams<{ industryId: string }>();

  // Find target industry
  const industry = industriesData.find((ind) => ind.id === industryId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [industryId]);

  if (!industry) {
    return <Navigate to="/" replace />;
  }

  const IconComp = industry.icon;

  // Filter services mapping to this industry
  const mappedServices = servicesData.filter((serv) =>
    serv.industries.includes(industry.id)
  );

  // Find cases mapping to this industry
  const mappedCase = casesData.find(
    (cs) => cs.industry.toLowerCase() === industry.title.toLowerCase()
  );

  // Dynamic sections representing the exact rich layout of the ISI Landing pages
  const sections = [
    {
      id: "risk-governance",
      title: "Sector Risk Governance & Controls",
      icon: Shield,
      offering: {
        title: "Strategic Risk Frameworks",
        description: `Establish enterprise-wide GRC controls, customized operational risk indices, and internal control structures tailored specifically to the unique compliance realities of the ${industry.title} industry.`,
        features: industry.challenges.map((ch) => `Resolves: ${ch}`),
      }
    },
    {
      id: "statutory-standards",
      title: "Statutory Standards Enforcement",
      icon: FileCheck,
      offering: {
        title: "Regulatory Integration & Compliance Assurance",
        description: `GOVENICS provides automated, continuous auditing frameworks to ensure absolute compliance with the primary statutory regulations governing ${industry.title} operations.`,
        features: industry.regulations.map((reg) => `Enforces: Full implementation and continuous operational checkmarks for ${reg}`),
      }
    },
    {
      id: "grc-outcomes",
      title: "Statutory Integrity Assured",
      icon: TrendingUp,
      offering: {
        title: "Measurable Business Outcomes",
        description: "Verify operational safety, minimize compliance litigation exposure, and secure stakeholders' trust with our GRC advisory processes.",
        features: industry.outcomes,
      }
    }
  ];

  return (
    <Layout>
      <div className="bg-background min-h-screen pb-24 text-slate-700">
        
        {/* Industry Page Hero - Centered Header matching ISI exactly */}
        <div className={`relative py-16 bg-gradient-to-br ${industry.color} overflow-hidden`}>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

          {/* Absolute back button */}
          <div className="absolute top-6 left-4 z-20">
            <Link to="/">
              <button className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 rounded-xl text-xs font-bold uppercase tracking-wider transition-all">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>
            </Link>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center space-y-6">
              {/* Large Centered Icon in primary container */}
              <div className="flex justify-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 shadow-xl border border-white/10">
                  <IconComp className="w-8 h-8 text-white animate-pulse" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-white font-heading tracking-tight drop-shadow-md">
                {industry.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-100 max-w-3xl mx-auto font-sans font-medium opacity-90 leading-relaxed">
                {industry.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Content Body Grid */}
        <div className="container mx-auto px-6 max-w-6xl mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Block: Overview & Multi-Section Elements (7 cols) */}
            <div className="lg:col-span-7 space-y-12 text-left">
              
              {/* Overview block matching the ISI style card */}
              <div className="bg-slate-100/60 p-8 rounded-2xl border border-slate-200/80">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 font-heading">Sector Overview</h2>
                <p className="text-slate-600 leading-relaxed font-sans text-sm font-medium">
                  Achieving operational integrity and regulatory trust in the <strong className="text-slate-800">{industry.title}</strong> sector requires robust GRC frameworks. GOVENICS by ISI provides comprehensive, technology-driven GRC advisory, internal audit tracking, and regulatory alignment tailored specifically to {industry.title} enterprises. We enable companies to systematically map operational risks, prevent compliance penalties, and secure continuous regulatory license compliance.
                </p>
              </div>

              {/* Targeted GRC Service Offerings */}
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  Targeted GRC Service Offerings
                </h3>
                <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-lg bg-white">
                  <div className="hidden md:grid grid-cols-12 bg-slate-50 border-b border-slate-200 text-[10px] font-black uppercase tracking-wider text-slate-500 p-4 gap-4">
                    <div className="col-span-4">Service Offering</div>
                    <div className="col-span-5">Description</div>
                    <div className="col-span-3">Strategic Outcome</div>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {(industryServicesData[industry.id] || []).map((service, idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-1 md:grid-cols-12 p-5 gap-4 items-start hover:bg-slate-50/50 transition-colors"
                      >
                        <div className="md:col-span-4 text-sm font-bold text-slate-900 font-heading">
                          {service.title}
                        </div>
                        <div className="md:col-span-5 text-xs text-slate-650 font-semibold leading-relaxed">
                          {service.description}
                        </div>
                        <div className="md:col-span-3 text-xs text-emerald-600 font-bold leading-relaxed">
                          {service.outcome}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic ISI Sections Structure */}
              {sections.map((sec, secIdx) => {
                const SectionIcon = sec.icon;
                return (
                  <div key={sec.id} className="space-y-6">
                    {/* Section Header */}
                    <div className="flex items-start gap-4 pb-2 border-b border-slate-100">
                      <div className="p-3.5 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-600">
                        <SectionIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900 font-heading">
                          {sec.title}
                        </h2>
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">GOVENICS Framework Segment</span>
                      </div>
                    </div>

                    {/* Offering Detail */}
                    <div className="space-y-4 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                      <h3 className="text-lg font-bold text-slate-800 font-heading">
                        {sec.offering.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        {sec.offering.description}
                      </p>
                      
                      {/* Features Bullet List with Checkmarks */}
                      <ul className="space-y-3.5 pt-2">
                        {sec.offering.features.map((feat, featIdx) => (
                          <li key={featIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-600 leading-relaxed font-medium">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Subtle section divider */}
                    {secIdx < sections.length - 1 && (
                      <div className="h-px bg-slate-100 my-8" />
                    )}
                  </div>
                );
              })}

              {/* Key Benefits Card Grid (ISI Style Card Columns) */}
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 font-heading">Key GRC Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-3 bg-blue-500/10 rounded-xl w-fit text-blue-600 mb-4">
                      <FileCheck className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-2 font-heading">Audit Readiness</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Always-on governance logs, compliance checklists, and verified audit trails prevent statutory penalty exposure.</p>
                  </div>

                  <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-3 bg-blue-500/10 rounded-xl w-fit text-blue-600 mb-4">
                      <ShieldAlert className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-2 font-heading">Vulnerability Control</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Proactive vulnerability monitoring, vendor due diligence, and policy controls secure enterprise infrastructure.</p>
                  </div>

                  <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-3 bg-blue-500/10 rounded-xl w-fit text-blue-600 mb-4">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-2 font-heading">Enterprise Trust</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Fostering robust credibility with customers, legal boards, and regulatory inspectors with certified compliance metrics.</p>
                  </div>
                </div>
              </div>

              {/* Case Study Section if available */}
              {mappedCase && (
                <div className="space-y-6 pt-6 border-t border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">Sector Case Study</h3>
                  <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl space-y-6 shadow-md">
                    <h4 className="text-lg font-bold text-blue-600 font-heading">{mappedCase.title}</h4>
                    <div className="space-y-4">
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">
                        <strong className="text-slate-800">Challenge:</strong> {mappedCase.challenge}
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        <strong className="text-slate-800">Solution:</strong> {mappedCase.solution}
                      </p>
                    </div>
                    
                    {/* Dynamic Case Study Metric Grid in light styling */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                      {mappedCase.metrics.map((met, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl md:text-3xl font-black text-blue-600">{met.value}</div>
                          <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">{met.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Closing Summary Statement matching the ISI theme */}
              <div className="bg-slate-100/50 p-6 rounded-2xl border border-slate-200/80 mt-12 text-left">
                <span className="inline-flex items-center px-2.5 py-1.5 rounded-lg bg-blue-500/10 text-blue-600 text-xs font-black uppercase tracking-wider mb-3">Summary</span>
                <p className="text-sm text-slate-600 leading-relaxed italic font-medium font-sans">
                  "By converging regulatory compliance, statutory due diligence, EHS safety audits, and continuous GRC overwatch into a single accountable ecosystem, GOVENICS transforms mandatory compliance from an administrative friction point into a profound, trust-earned asset. Partner with our senior consultants to audit, secure, and accelerate your operations today."
                </p>
              </div>

              {/* Bottom Central CTA */}
              <div className="text-center pt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-sm tracking-wide transition-all shadow-lg shadow-blue-500/20 hover:scale-[1.02]"
                >
                  Initiate {industry.title} Risk Audit
                </Link>
              </div>

            </div>

            {/* Right Block: Services Listing Side Panel (5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 sticky top-28 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 font-heading flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Briefcase className="w-5 h-5 text-blue-600" /> Recommended GRC Offerings
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  Based on current statutory guidelines and market risk trends, our risk advisors recommend the following services to ensure compliance.
                </p>
                
                <div className="divide-y divide-slate-100">
                  {mappedServices.map((serv) => (
                    <Link
                      key={serv.id}
                      to={`/services/${serv.id}`}
                      className="flex flex-col py-4 first:pt-0 last:pb-0 group"
                    >
                      <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {serv.title}
                      </span>
                      <span className="text-[10px] text-slate-400 leading-snug line-clamp-1 mt-1 font-semibold">
                        {serv.problem}
                      </span>
                    </Link>
                  ))}
                </div>
                
                <Link to="/contact" className="block pt-2">
                  <button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-blue-500/20">
                    Request Risk Assessment
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </Layout>
  );
}
