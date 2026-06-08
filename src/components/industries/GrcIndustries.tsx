import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { industriesData } from "@/data/industries-data";
import { Shield, ArrowRight } from "lucide-react";

export const GrcIndustries = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"challenges" | "regulations">("challenges");

  return (
    <section id="industries" className="py-14 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full">
            Industry Verticals
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight font-heading">
            Securing 15+ Regulated Sectors
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl font-medium">
            We deliver targeted governance frameworks, audit controls, and risk consulting calibrated specifically for your industry's compliance demands.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((ind) => {
            const IconComp = ind.icon;
            const isHovered = hoveredCard === ind.id;

            return (
              <motion.div
                key={ind.id}
                onMouseEnter={() => setHoveredCard(ind.id)}
                onMouseLeave={() => setHoveredCard(null)}
                layout
                className="group relative bg-white border border-slate-200/85 hover:border-blue-500/20 rounded-3xl transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[420px] shadow-sm hover:shadow-xl"
              >
                {/* Visual Accent Card Header */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${ind.color}`} />

                {/* Primary Card View */}
                <div className="p-8 space-y-6 flex-grow">
                  
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-blue-600 group-hover:scale-105 transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1">
                      {ind.regulations.slice(0, 2).map((reg, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-50 border border-slate-200/60 rounded text-[9px] font-bold text-slate-500 uppercase">
                          {reg}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {ind.subtitle}
                    </p>
                  </div>

                  {/* Industry Focus Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {ind.focusAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full bg-blue-500/5 text-blue-600 text-[10px] font-bold border border-blue-500/10 uppercase tracking-wider"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  {/* Expanding mini landing page view content inside the card on hover */}
                  <div className="relative overflow-hidden transition-all duration-500 max-h-[140px] md:max-h-[160px] overflow-y-auto pr-1">
                    <AnimatePresence mode="wait">
                      {!isHovered ? (
                        <motion.div
                          key="default"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-3"
                        >
                          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                            <Shield className="w-3.5 h-3.5 text-blue-600" /> Sector Risk Strategy
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed line-clamp-4 font-medium">
                            {ind.challenges[0]} {ind.challenges[1]}
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="expanded"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="space-y-3"
                        >
                          <div className="flex border-b border-slate-100 pb-1">
                            <button
                              onClick={(e) => { e.preventDefault(); setActiveTab("challenges"); }}
                              className={`text-[10px] font-bold uppercase tracking-wider mr-4 pb-1 ${activeTab === "challenges" ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-400"}`}
                            >
                              Challenges
                            </button>
                            <button
                              onClick={(e) => { e.preventDefault(); setActiveTab("regulations"); }}
                              className={`text-[10px] font-bold uppercase tracking-wider pb-1 ${activeTab === "regulations" ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-400"}`}
                            >
                              Rules
                            </button>
                          </div>

                          {activeTab === "challenges" ? (
                            <ul className="space-y-1.5">
                              {ind.challenges.slice(0, 2).map((ch, idx) => (
                                <li key={idx} className="text-[11px] text-slate-650 leading-snug flex items-start gap-1 font-medium">
                                  <span className="text-blue-500 font-bold mt-0.5">•</span>
                                  <span>{ch}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <div className="flex flex-wrap gap-1">
                              {ind.regulations.map((reg, idx) => (
                                <span key={idx} className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[9px] font-black text-blue-600 uppercase tracking-widest">
                                  {reg}
                                </span>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>

                {/* Card Footer Clickable */}
                <div className="p-8 pt-0 border-t border-slate-100 bg-slate-50/50">
                  <Link
                    to={`/industries/${ind.id}`}
                    className="w-full flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider"
                  >
                    <span>View Sector Solutions</span>
                    <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
