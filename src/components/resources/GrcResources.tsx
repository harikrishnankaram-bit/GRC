import { useState } from "react";
import { resourcesData } from "@/data/resources-data";
import { Search, ArrowRight, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const GrcResources = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = ["All", "whitepaper", "alert", "update", "report", "blog"];

  const filteredItems = resourcesData.filter((item) => {
    const matchesTab = activeTab === "All" || item.type === activeTab;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });


  return (
    <section className="py-8 bg-transparent border-t border-slate-200/60 relative overflow-hidden">
      <div className="container mx-auto px-6 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <div className="space-y-4 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full">
              GRC Knowledge Hub
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight font-heading">
              Resources & Updates
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md font-medium mx-auto">
              Access Govenics' regulatory guides, legislative compliance alerts, and GxP data integrity frameworks.
            </p>
          </div>

          {/* Dynamic Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search reports, alerts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-11 pr-5 rounded-2xl bg-white border border-slate-250 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "bg-white text-slate-500 hover:text-slate-800 border border-slate-200 shadow-sm"
              }`}
            >
              {tab === "All" ? "All Formats" : tab + "s"}
            </button>
          ))}
        </div>

        {/* Resource Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white border border-slate-200/85 hover:border-blue-500/20 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl shadow-sm min-h-[300px]"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[9px] font-black text-blue-600 uppercase tracking-widest animate-pulse">
                        {item.type}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold">{item.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2 font-heading">
                      {item.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 font-medium">
                      {item.summary}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <span>By: {item.author}</span>
                    {item.downloadUrl ? (
                      <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors">
                        <Download className="w-3.5 h-3.5" /> PDF
                      </button>
                    ) : (
                      <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors">
                        <span>Read</span> <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
