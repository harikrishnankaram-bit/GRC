import { useEffect, useState, useRef } from "react";
import { Terminal, Shield, Wifi, AlertTriangle } from "lucide-react";

export const GrcTrustgrid = () => {
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM INITIALIZED] - TrustGrid.AI Compliance Overwatch active.",
    "[INFO] - Port 8081 unmasked. Integrity scan complete.",
    "[SECURE] - Quantum-safe SSL handshake verified with local node.",
  ]);
  const [riskScore, setRiskScore] = useState(96.4);
  const [isThreatActive, setIsThreatActive] = useState(false);
  const [activeTab, setActiveTab] = useState<"logs" | "watchlist">("logs");
  const logContainerRef = useRef<HTMLDivElement | null>(null);

  // Scroll logs to bottom when updated
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  // Simulate server logs scrolling
  useEffect(() => {
    const logPool = [
      "Securing network packets - SHA-256 validation complete.",
      "Access control audit - User 'Admin_01' logged on from IP 192.168.1.105.",
      "Regulatory check - Factories Act checklist completed on Plant #03.",
      "DPDP Consent log - User registration securely stored with encryption hash.",
      "EMF Radiation alert - Telecom tower #82 checked (EMF = 0.04 W/m2 - Safe).",
      "RBI Transaction check - Cash transit CIT vehicle #403 GPS coordinate updated.",
      "ISO 27001 ISMS check - Firewall policies successfully validated."
    ];

    const interval = setInterval(() => {
      const randomLog = logPool[Math.floor(Math.random() * logPool.length)];
      const timestamp = new Date().toLocaleTimeString();
      setLogs((prev) => [...prev.slice(-30), `[${timestamp}] - ${randomLog}`]);
      
      // Randomly adjust risk score slightly to look alive
      setRiskScore((prev) => {
        const delta = (Math.random() - 0.5) * 0.4;
        const next = Math.max(90, Math.min(100, prev + delta));
        return parseFloat(next.toFixed(2));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const triggerThreatSimulation = () => {
    setIsThreatActive(true);
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [
      ...prev,
      `[${timestamp}] - WARNING: Suspicious IP traffic profiling alert triggered!`,
      `[${timestamp}] - TRUSTGRID.AI SENTRY: Initiated IP Watchlist verification protocols.`,
      `[${timestamp}] - [SECURED]: Unmasked IP 42.109.112.5 dynamically blocked.`
    ]);

    setTimeout(() => {
      setIsThreatActive(false);
    }, 6000);
  };

  return (
    <section id="trustgrid" className="py-14 bg-gradient-to-tr from-blue-50/50 via-indigo-50/25 to-slate-50/30 relative overflow-hidden border-t border-slate-200/80">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Text Segment */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest rounded-full">
            Cyber & AI Intelligence
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight font-heading">
            TRUSTGRID.AI: Futuristic Compliance Overwatch
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
            By embedding AI overwatch models directly into client sites, our proprietary <span className="text-blue-600 font-bold">TRUSTGRID.AI</span> platform continuously scans network packets, maps data compliance, audits third-party SLAs, and monitors perimeter warning dials.
          </p>
          <div className="space-y-4">
            {[
              "AI-powered continuous compliance risk auditing.",
              "Live dynamic dashboards mapping security standards.",
              "Quantum-resilient IP Watchlists & data protection."
            ].map((feat, i) => (
              <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-700">
                <Shield className="w-5 h-5 text-blue-500 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
          
          <button
            onClick={triggerThreatSimulation}
            disabled={isThreatActive}
            className={`flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wide transition-all shadow-lg ${
              isThreatActive
                ? "bg-red-600 text-white animate-pulse shadow-red-500/20"
                : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20 hover:scale-[1.02]"
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            {isThreatActive ? "Simulating Threat Intrusion..." : "Trigger Live Threat Simulation"}
          </button>
        </div>

        {/* Right Dashboard Mockup Segment */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 relative overflow-hidden shadow-2xl">
          {/* Subtle grid lines background inside the dashboard */}
          <div className="absolute inset-0 bg-cyber-grid bg-[size:24px_24px] opacity-10 pointer-events-none" />

          {/* Top Panel Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase ml-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-blue-500" /> Govenics Cyber Core v2.4
              </span>
            </div>
            <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-0.5 border border-slate-200">
              <button
                onClick={() => setActiveTab("logs")}
                className={`px-3 py-1 rounded text-[9px] font-bold uppercase tracking-wider transition-colors ${activeTab === "logs" ? "bg-blue-600 text-white" : "text-slate-500 hover:text-slate-800"}`}
              >
                Log Feed
              </button>
              <button
                onClick={() => setActiveTab("watchlist")}
                className={`px-3 py-1 rounded text-[9px] font-bold uppercase tracking-wider transition-colors ${activeTab === "watchlist" ? "bg-blue-600 text-white" : "text-slate-500 hover:text-slate-800"}`}
              >
                IP Watchlist
              </button>
            </div>
          </div>

          {/* Dashboard Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 py-6 relative z-10 border-b border-slate-100">
            <div className="bg-slate-50 p-4 border border-slate-150 rounded-2xl text-center space-y-1">
              <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">GRC Risk Score</div>
              <div className="text-xl md:text-2xl font-black text-slate-900">{riskScore}%</div>
              <div className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">Secured Status</div>
            </div>
            <div className="bg-slate-50 p-4 border border-slate-150 rounded-2xl text-center space-y-1">
              <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Scanner Vitals</div>
              <div className="text-xl md:text-2xl font-black text-slate-900 flex items-center justify-center gap-1">
                <Wifi className="w-5 h-5 text-emerald-500" /> Active
              </div>
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Ping &lt; 2ms</div>
            </div>
            <div className="bg-slate-50 p-4 border border-slate-150 rounded-2xl text-center space-y-1">
              <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">DPDP Consent Logs</div>
              <div className="text-xl md:text-2xl font-black text-blue-600">4,382</div>
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Fully Encrypted</div>
            </div>
          </div>

          {/* Interactive Logs or Watchlist Pane */}
          <div className="pt-6 h-60 overflow-hidden relative z-10">
            {activeTab === "logs" ? (
              <div
                ref={logContainerRef}
                className="h-full overflow-y-auto space-y-2 text-left font-mono text-[10px] text-slate-600 scrollbar-hide select-text"
              >
                {logs.map((log, index) => {
                  let logClass = "text-slate-500";
                  if (log.includes("WARNING")) logClass = "text-red-500 font-bold";
                  if (log.includes("SENTRY")) logClass = "text-blue-600 font-bold";
                  if (log.includes("[SECURED]")) logClass = "text-emerald-600 font-bold";
                  return (
                    <div key={index} className={`leading-relaxed border-l-2 border-slate-200/80 pl-2.5 ${logClass}`}>
                      {log}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="h-full overflow-y-auto space-y-2.5 text-left scrollbar-hide text-xs text-slate-700 select-text">
                {[
                  { ip: "42.109.112.5", origin: "Mumbai, IN", alert: "High-Freq Port Scan", status: "Blocked", time: "Just now" },
                  { ip: "185.220.101.44", origin: "Berlin, DE", alert: "TOR Exit Node Profile", status: "Inspected", time: "5m ago" },
                  { ip: "91.240.118.15", origin: "Kyiv, UA", alert: "SQL injection threat", status: "Blocked", time: "14m ago" }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-150 rounded-xl flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="font-mono text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${item.status === "Blocked" ? "bg-red-500" : "bg-yellow-500 animate-pulse"}`} />
                        {item.ip}
                      </div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{item.origin} • {item.alert}</div>
                    </div>
                    <div className="text-right space-y-1 shrink-0">
                      <div className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest ${item.status === "Blocked" ? "bg-red-50 text-red-600 border border-red-200" : "bg-yellow-50 text-yellow-600 border border-yellow-250"}`}>
                        {item.status}
                      </div>
                      <div className="text-[9px] text-slate-500 font-bold">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
