import { 
  Landmark, Activity, Laptop, Utensils, Scissors, HardHat, 
  Scroll, Zap, ShieldAlert, ShoppingCart, Truck, GraduationCap, Home, PhoneCall 
} from "lucide-react";

export interface IndustrySegment {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  focusAreas: string[];
  regulations: string[];
  challenges: string[];
  outcomes: string[];
  color: string;
}

export const industriesData: IndustrySegment[] = [
  {
    id: "bfsi",
    title: "BFSI",
    subtitle: "Risk Governance & Banking Compliance",
    icon: Landmark,
    focusAreas: ["Risk Governance", "Regulatory Compliance", "Data Privacy"],
    regulations: ["RBI Guidelines", "IRDAI", "SEBI", "DPDP Act", "PCI-DSS"],
    challenges: [
      "Extremely complex and dynamic regulatory reporting requirements.",
      "High vulnerability to cybersecurity incidents and system breaches.",
      "Third-party vendor oversight and fintech partner liabilities.",
      "Strict data localization and privacy mandates."
    ],
    outcomes: [
      "Significant reduction in regulatory non-compliance penalties.",
      "Always-audit-ready controls aligned with RBI and SEBI audits.",
      "Enhanced customer and depositor trust."
    ],
    color: "from-blue-600 to-indigo-700"
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    subtitle: "Industrial Risk & Factory EHS",
    icon: HardHat,
    focusAreas: ["EHS", "Factory Compliance", "Supply Chain Risk"],
    regulations: ["Factories Act", "ISO 45001", "EPA", "BIS Standards"],
    challenges: [
      "Adhering to diverse labor laws and factory safety registers.",
      "Maintaining robust environmental standards and waste management.",
      "Ethical supply chain tracking and raw material audit trails.",
      "Operational liability due to workplace accidents."
    ],
    outcomes: [
      "Zero-incident factory environments and enhanced safety scores.",
      "Uninterrupted industrial operations with 100% license continuity.",
      "Sourcing trust aligned with global buyer standards."
    ],
    color: "from-orange-600 to-amber-600"
  },
  {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "Clinical Governance & Patient Privacy",
    icon: Activity,
    focusAreas: ["Patient Data Privacy", "Clinical Governance", "Accreditation"],
    regulations: ["NABH", "HIPAA", "DPDP Act", "CDSCO", "NMC Guidelines"],
    challenges: [
      "Securing electronic health records (EHR) against leaks.",
      "Adhering to strict NABH quality accreditation standards.",
      "Patient care protocol standardization across clinical networks.",
      "Medical device licensing and clinical trial compliance."
    ],
    outcomes: [
      "Successful NABH accreditation with high audit scores.",
      "100% compliance with DPDP and HIPAA privacy laws.",
      "Reduced clinical negligence risks and high patient satisfaction."
    ],
    color: "from-emerald-600 to-teal-600"
  },
  {
    id: "it-services",
    title: "IT Services",
    subtitle: "Cybersecurity & Data Protection",
    icon: Laptop,
    focusAreas: ["Cybersecurity", "Data Protection", "Vendor Risk"],
    regulations: ["ISO 27001", "DPDP Act", "CERT-In", "SOC 2", "GDPR"],
    challenges: [
      "Rapidly scaling cybersecurity controls across global operations.",
      "Strict data mapping and consent governance for offshore contracts.",
      "SaaS credibility and continuous audit monitoring.",
      "Securing remote developer networks against insider threats."
    ],
    outcomes: [
      "Global contract eligibility with SOC 2 and ISO 27001 stamps.",
      "Robust data governance preventing costly cross-border leaks.",
      "Under 6-hour CERT-In incident reporting readiness."
    ],
    color: "from-cyan-600 to-blue-600"
  },
  {
    id: "food-processing",
    title: "Food Processing",
    subtitle: "Food Safety, Traceability & Quality Standards",
    icon: Utensils,
    focusAreas: ["Food Safety", "Quality Compliance", "Traceability"],
    regulations: ["FSSAI", "ISO 22000", "HACCP", "APEDA Regulations"],
    challenges: [
      "Strict labeling, manufacturing and hygiene regulations.",
      "Continuous batch traceability from farm to packaging.",
      "Meeting stringent international export standards.",
      "Complex environmental clearances for wastewater discharge."
    ],
    outcomes: [
      "High consumer confidence and seamless FSSAI inspections.",
      "Enhanced global market access with zero batch recall events.",
      "Audit-ready ESG reporting aligned with BRSR standards."
    ],
    color: "from-green-600 to-emerald-600"
  },
  {
    id: "textiles",
    title: "Textiles",
    subtitle: "Labour Standards & Export Audits",
    icon: Scissors,
    focusAreas: ["Labour Compliance", "Environmental Standards", "Export Norms"],
    regulations: ["Textile Committee Act", "CLRA", "EHS Norms", "BSCI"],
    challenges: [
      "Ensuring social compliance audits (BSCI, GOTS) across subcontractors.",
      "Statutory registers for massive contract workforces under CLRA.",
      "Managing chemical hazard and wastewater discharge guidelines.",
      "Adhering to foreign export buyer codes of conduct."
    ],
    outcomes: [
      "Clear status as a preferred supplier to high-end global buyers.",
      "Zero litigation and penalty exposure regarding labor disputes.",
      "Successful zero liquid discharge (ZLD) compliance audits."
    ],
    color: "from-purple-600 to-pink-600"
  },
  {
    id: "mining",
    title: "Mining",
    subtitle: "DGMS Guidelines & Environmental Clearances",
    icon: HardHat, // Handled inside mapping fallback
    focusAreas: ["Safety Compliance", "Environmental Clearance", "Community Engagement"],
    regulations: ["Mines Act", "DGMS Guidelines", "EPA", "Forest Clearance"],
    challenges: [
      "Extremely hazardous working environments requiring strict safety audits.",
      "Obtaining complex environmental and forest clearances.",
      "Fulfilling local community needs and statutory CSR governance.",
      "Contractor vetting and site induction tracking."
    ],
    outcomes: [
      "Zero stop-work regulatory orders and stellar safety logs.",
      "Robust social license to operate with high local community trust.",
      "Green clearances and full carbon tracking capabilities."
    ],
    color: "from-stone-600 to-neutral-700"
  },
  {
    id: "government-psu",
    title: "Government & PSU",
    subtitle: "Public Accountability & GFR Norms",
    icon: Scroll,
    focusAreas: ["Public Accountability", "Procurement Compliance", "Digital Governance"],
    regulations: ["GFR", "CVC Guidelines", "RTI", "MeitY Standards"],
    challenges: [
      "Ensuring transparency in high-volume public procurements.",
      "Systematic response tracking under the Right to Information (RTI) Act.",
      "Complying with MeitY standards for public cloud data hosting.",
      "Corporate governance for listed state-owned enterprises."
    ],
    outcomes: [
      "Flawless audit clearances by the Comptroller and Auditor General (CAG).",
      "Minimized litigation risk in large public tenders and GeM purchases.",
      "Highly secure, citizen-trusted digital public services."
    ],
    color: "from-sky-700 to-blue-800"
  },
  {
    id: "energy-utilities",
    title: "Energy & Utilities",
    subtitle: "Grid Compliance, Tariffs & ESG Reporting",
    icon: Zap,
    focusAreas: ["Regulatory Compliance", "Asset Risk", "Sustainability"],
    regulations: ["CERC/SERC Regulations", "EPA", "ISO 50001", "ESG Reporting"],
    challenges: [
      "Complying with complex grid code limits and CERC/SERC filings.",
      "Modeling operational and environmental risk for critical energy assets.",
      "Meeting renewable purchase obligations (RPO) and carbon goals.",
      "Ensuring physical and cyber security for critical utility grids."
    ],
    outcomes: [
      "Protected revenue with optimized tariff capture and filings.",
      "High asset availability with minimal unexpected maintenance downtime.",
      "Enhanced ESG rating profiles, unlocking low-cost sustainable financing."
    ],
    color: "from-yellow-600 to-amber-500"
  },
  {
    id: "pharma-sciences",
    title: "Pharma & Life Sciences",
    subtitle: "GxP Data Integrity & USFDA GMP Audits",
    icon: ShieldAlert,
    focusAreas: ["GxP Compliance", "Clinical Trial Governance", "IP Protection"],
    regulations: ["CDSCO", "Schedule M", "ICH-GCP", "USFDA", "EMA Guidelines"],
    challenges: [
      "Strict data integrity protocols under ALCOA+ standards.",
      "Securing international GMP clearance (USFDA, EMA) for local units.",
      "Managing clinical trial data and ethical committee clearances.",
      "Post-market surveillance and adverse event tracking."
    ],
    outcomes: [
      "Successful global inspections with zero warning letters.",
      "Accurate, tamper-proof clinical trials with faster drug approval cycles.",
      "Full compliance with Schedule M and local CDSCO guidelines."
    ],
    color: "from-red-600 to-rose-700"
  },
  {
    id: "retail-ecommerce",
    title: "Retail & E-commerce",
    subtitle: "Consumer Protection & Marketplace GRC",
    icon: ShoppingCart,
    focusAreas: ["Consumer Protection", "Data Privacy", "Supply Chain Ethics"],
    regulations: ["Consumer Protection Act", "DPDP Act", "FDI Norms", "GST Compliance"],
    challenges: [
      "Managing user consent and data minimization under the DPDP Act.",
      "Strict adherence to FDI regulations for marketplace platforms.",
      "Maintaining vendor compliance and labor standards for supply lines.",
      "Scaling return policies and dispute resolution workflows."
    ],
    outcomes: [
      "Robust consumer trust with minimized platform litigation.",
      "100% legal compliance for high-volume customer data portals.",
      "Highly secure, tax-compliant marketplace ecosystems."
    ],
    color: "from-pink-600 to-rose-600"
  },
  {
    id: "logistics-supply-chain",
    title: "Logistics & Supply Chain",
    subtitle: "AEO Customs Norms & Cargo Security",
    icon: Truck,
    focusAreas: ["Vendor Risk", "Transport Compliance", "Customs Regulations"],
    regulations: ["Customs Act", "Motor Vehicles Act", "ICDR", "ISO 28000"],
    challenges: [
      "High compliance overhead for large truck fleets and drivers.",
      "Complex customs classification and duty drawback claims.",
      "Vetting carrier safety standards and sub-3PL logistics partners.",
      "Securing warehouses against fire hazards and labor disputes."
    ],
    outcomes: [
      "Uninterrupted freight flows with faster customs clearance (AEO).",
      "Minimized liability and asset shrinkage across transit lines.",
      "Zero compliance interruptions at key storage and hub points."
    ],
    color: "from-blue-700 to-sky-600"
  },
  {
    id: "education",
    title: "Education",
    subtitle: "UGC/AICTE Norms & Student Data Privacy",
    icon: GraduationCap,
    focusAreas: ["Institutional Governance", "Data Protection", "Accreditation"],
    regulations: ["UGC/AICTE Norms", "DPDP Act", "NAAC Standards", "RTE Act"],
    challenges: [
      "Strict documentation for university affiliation and UGC cycles.",
      "Managing student and parent data privacy under the DPDP Act.",
      "Maintaining teacher-student ratio logs and compliance standards.",
      "Safeguarding digital learning systems and intellectual content."
    ],
    outcomes: [
      "Top-tier NAAC/NBA accreditation scores and better institutional rankings.",
      "Legally compliant student admission and portal systems.",
      "Zero litigation and penalty risk from regulatory bodies."
    ],
    color: "from-indigo-600 to-violet-700"
  },
  {
    id: "real-estate-infra",
    title: "Real Estate & Infrastructure",
    subtitle: "RERA Project Compliance & BOCW Safety",
    icon: Home,
    focusAreas: ["Project Compliance", "Environmental Clearance", "Labour Laws"],
    regulations: ["RERA", "EPA", "CLRA", "Building Bye-Laws", "NBFC Regulations"],
    challenges: [
      "Managing RERA disclosures and project escrow accounts.",
      "Obtaining and tracking environment clearances (EIA) for green sites.",
      "Ensuring site safety (BOCW) and wage compliance for thousands of workers.",
      "Managing vendor and contractor SLAs for critical milestones."
    ],
    outcomes: [
      "Stellar buyer trust with zero delays, warnings, or RERA litigation.",
      "Green credentials attracting premium pricing and environment-first funds.",
      "Safe, injury-free site environments with zero legal penalty exposure."
    ],
    color: "from-emerald-700 to-green-600"
  },
  {
    id: "telecom",
    title: "Telecom",
    subtitle: "TRAI Grid, EMF & User Consent",
    icon: PhoneCall,
    focusAreas: ["Spectrum Compliance", "Data Localization", "Consumer Grievance"],
    regulations: ["TRAI Regulations", "DPDP Act", "USOF Guidelines", "ISO 27001"],
    challenges: [
      "Adhering to strict TRAI limits for Quality of Service (QoS).",
      "DPDP compliance and call data record (CDR) encryption.",
      "Complying with spectrum limits and tower EMF radiation targets.",
      "Tracking tower roll-out right-of-way permissions."
    ],
    outcomes: [
      "Zero spectrum penalties and high regulatory goodwill with TRAI.",
      "100% compliance with DPDP, securing communication lines.",
      "Highly secure, reliable network operations with zero downtime."
    ],
    color: "from-blue-600 to-teal-500"
  }
];

// Fallback helper in case icon import issues occur
export const getIndustryIcon = (id: string) => {
  const segment = industriesData.find(ind => ind.id === id);
  return segment ? segment.icon : Landmark;
};
