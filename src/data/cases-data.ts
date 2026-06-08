export interface CaseStudy {
  id: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { value: string; label: string }[];
}

export const casesData: CaseStudy[] = [
  {
    id: "bfsi-governance",
    industry: "BFSI",
    title: "Securing India's Leading Fintech Partner against RBI IT Outsource Audits",
    challenge: "A leading payment aggregator faced severe audit deviations regarding subcontractor network access, data mapping gaps, and lack of third-party SLAs, risking transaction halts.",
    solution: "We designed a robust GRC Outsource Framework, conducted data mapping for DPDP alignment, instituted third-party security audits, and built a real-time risk dashboard for their board.",
    results: [
      "Successfully cleared the RBI IT Outsource inspection with zero critical deviations.",
      "100% data residency and local database logs securely established.",
      "Vetted and onboarded 40+ fintech partners into an active SLA monitor system."
    ],
    metrics: [
      { value: "0", label: "Critical RBI Deviations" },
      { value: "100%", label: "Data Residency Compliant" },
      { value: "10 days", label: "Audit Readiness Achieved" }
    ]
  },
  {
    id: "manufacturing-safety",
    industry: "Manufacturing",
    title: "100% EHS & Factory Compliance for an Automotive Giants Plant Network",
    challenge: "An automotive components major with 5,000+ contract workers suffered from recurrent factory audit warnings, register gaps under the Factories Act, and low safety training logs.",
    solution: "Deployed Govenics' Factory Compliance systems. We automated statutory register entries, mapped daily CLRA compliance, and implemented a real-time EHS monitoring platform.",
    results: [
      "Zero stop-work safety notices across all 6 manufacturing plants.",
      "40% drop in workforce absenteeism due to better site safety conditions.",
      "Stellar compliance scorecards in government labor inspections."
    ],
    metrics: [
      { value: "100%", label: "CLRA Compliance Score" },
      { value: "↓ 60%", label: "Safety Incidents Cut" },
      { value: "6 Plants", label: "Fully Audited & Safe" }
    ]
  },
  {
    id: "healthcare-privacy",
    industry: "Healthcare",
    title: "HIPAA & DPDP Patient Data Governance for a Multi-Specialty Hospital Chain",
    challenge: "A hospital chain with 12 units struggled to manage patient consent across EMR applications, leaving electronic records vulnerable to leaks and exposing the board to heavy DPDP penalties.",
    solution: "Instituted a 'Privacy-by-Default' patient record system. We audited telemedicine partners, built DPDP consent manager controls, and trained hospital units in HIPAA rules.",
    results: [
      "100% secure patient data portals across all 12 multi-specialty units.",
      "Flawless NABH quality audits with record-breaking compliance scores.",
      "Zero clinical patient record leak events post-implementation."
    ],
    metrics: [
      { value: "12", label: "Hospitals Secured" },
      { value: "100%", label: "DPDP Consent Implemented" },
      { value: "Zero", label: "Data Breach Events" }
    ]
  },
  {
    id: "telecom-trai",
    industry: "Telecom",
    title: "Automating Spectrum EMF & TRAI QoS Compliance for a National Operator",
    challenge: "A leading communication services provider faced spectral fine threats from TRAI due to inconsistent tower radiation tracking and delays in QoS metrics consolidation.",
    solution: "We deployed Govenics' grid compliance pipelines, connecting spectrum telemetry directly with EMF tracking logs, and automated TRAI QoS board dashboard updates.",
    results: [
      "Achieved zero regulatory penalties during high-intensity TRAI tower checks.",
      "Saved estimated ₹12 Crores in potential spectral compliance slippage.",
      "Rapidly secured tower right-of-way certifications."
    ],
    metrics: [
      { value: "0", label: "TRAI Spectrum Fines" },
      { value: "₹12Cr+", label: "Regulatory Costs Saved" },
      { value: "100%", label: "Tower EMF Checked" }
    ]
  }
];
