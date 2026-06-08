export interface GrcService {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  benefits: string[];
  standards: string[];
  industries: string[];
}

export const servicesData: GrcService[] = [
  {
    id: "regulatory-compliance",
    title: "Regulatory Compliance Management",
    category: "Governance & Risk Advisory",
    problem: "Organizations face dynamic compliance standards across agencies (RBI, SEBI, TRAI, CPCB, FSSAI) with fragmented operations, leading to severe audit penalties, legal litigation, and brand loss.",
    solution: "We provide end-to-end, dynamic compliance tracking and advisory. Our system maps every operational task against statutory rules, automates register filings, and monitors audit-readiness in real-time.",
    benefits: [
      "Significant reduction in statutory penalties and compliance slippage.",
      "Always-audit-ready corporate postures across local and international standards.",
      "Clear accountability with role-based internal task routing."
    ],
    standards: ["Factories Act", "RBI Master Circulars", "SEBI ICDR", "FSSAI Guidelines", "TRAI QoS"],
    industries: ["bfsi", "manufacturing", "healthcare", "food-processing", "government-psu", "energy-utilities", "telecom"]
  },
  {
    id: "enterprise-risk-management",
    title: "Enterprise Risk Management (ERM)",
    category: "Governance & Risk Advisory",
    problem: "Risk assessments are traditionally static, reactive and siloed across departments, exposing boards to unexpected market liabilities, operational failures, and asset damage.",
    solution: "We design and deploy futuristic ERM frameworks. By integrating operational telemetry with risk thresholds, we build dynamic RCSA (Risk Control Self-Assessment) and KRI (Key Risk Indicator) dashboards.",
    benefits: [
      "Board-level foresight with predictive risk indicators and real-time triggers.",
      "Standardized risk taxonomy across all departments and assets.",
      "Stronger risk mitigation with pre-mapped contingency SOPs."
    ],
    standards: ["ISO 31000", "COSO Framework", "DGMS Guidelines", "RAMS Protocols"],
    industries: ["bfsi", "manufacturing", "healthcare", "mining", "energy-utilities", "real-estate-infra"]
  },
  {
    id: "governance-framework",
    title: "Governance Framework Design",
    category: "Governance & Risk Advisory",
    problem: "Siloed management layers, weak policy tracking, and disconnected boards lead to failures in fiduciary accountability, investor litigation, and internal fraud.",
    solution: "We codify robust corporate governance charters and operational workflows, integrating board-level committees with physical checkmarks to enforce transparency and compliance.",
    benefits: [
      "Enhanced transparency and corporate reputation, boosting investor appeal.",
      "Clear policy orchestration and conflict-of-interest prevention.",
      "Standardized delegation of authority (DoA) matrices."
    ],
    standards: ["Companies Act 2013", "SEBI LODR", "CVC Guidelines", "GFR Rules"],
    industries: ["bfsi", "government-psu", "telecom", "pharma-sciences", "education"]
  },
  {
    id: "internal-audit",
    title: "Internal Audit Services",
    category: "Audit & Assurance",
    problem: "Generic annual audits lack sector-specific GRC context, failing to identify operational loopholes, control bypasses, and leakage until a breach or investigation occurs.",
    solution: "Our compliance-integrated internal audit engine validates physical controls, software logic, and contractor SLAs on a continuous cycle with automated action tracking.",
    benefits: [
      "Proactive discovery of control gaps before statutory regulators inspect.",
      "Actionable dashboard tracing management corrective responses.",
      "Strict financial and operational leak prevention."
    ],
    standards: ["ISO 19011", "CAG Guidelines", "GFR Rules", "COSO Internal Controls"],
    industries: ["bfsi", "manufacturing", "healthcare", "government-psu", "real-estate-infra"]
  },
  {
    id: "data-privacy-dpdp",
    title: "Data Privacy & DPDP Compliance",
    category: "Digital Trust & Cybersecurity",
    problem: "Under India's Digital Personal Data Protection (DPDP) Act, organizations handling customer or student records face penalties of up to ₹250 Crores for lack of consent governance or data leaks.",
    solution: "We provide comprehensive DPDP and HIPAA audits, data classification, consent manager installations, and robust client/patient breach response plans.",
    benefits: [
      "100% legal compliance with the DPDP Act and global GDPR norms.",
      "Secure consent architecture that enhances user trust and privacy.",
      "Audit-proof data processing registers and mapping."
    ],
    standards: ["DPDP Act 2023", "GDPR Compliance", "HIPAA Rules", "21 CFR Part 11"],
    industries: ["bfsi", "healthcare", "it-services", "retail-ecommerce", "education", "telecom"]
  },
  {
    id: "cybersecurity-iso27001",
    title: "Cybersecurity & ISO 27001",
    category: "Digital Trust & Cybersecurity",
    problem: "Rapidly expanding IT infrastructure creates security blindspots, exposing client records and intellectual properties to network extortion, data leaks, and service outages.",
    solution: "We build and certify custom Information Security Management Systems (ISMS). We run penetration testing, establish secure developer networks, and coordinate ISO 27001/SOC 2 reviews.",
    benefits: [
      "ISO 27001 and SOC 2 certifications unlocking premium enterprise contracts.",
      "Always-active risk tracking across networks, databases and clouds.",
      "Drastic reduction in incident and breach probability."
    ],
    standards: ["ISO 27001", "SOC 2 (Type II)", "CERT-In Directives", "NIST CSF"],
    industries: ["it-services", "bfsi", "healthcare", "retail-ecommerce", "telecom"]
  },
  {
    id: "vendor-risk-management",
    title: "Vendor & Third-Party Risk Management",
    category: "Governance & Risk Advisory",
    problem: "Enterprises rely heavily on vendor stacks and third-party developers, yet they lack central systems to audit subcontractor security, resulting in critical data links and SLA breaches.",
    solution: "We deploy ongoing third-party due diligence and security questionnaire audits. We track supplier performance and coordinate incident responses across your entire supply chain.",
    benefits: [
      "Total supply chain transparency and contract liability tracking.",
      "Prevention of downstream database exploits from vendor access points.",
      "Automated vendor health scores and alerts."
    ],
    standards: ["ISO 27001 (A.15)", "RBI IT Outsourcing Norms", "HIPAA Business Associate Rules"],
    industries: ["bfsi", "it-services", "healthcare", "logistics-supply-chain", "retail-ecommerce"]
  },
  {
    id: "esg-sustainability",
    title: "ESG & Sustainability Reporting",
    category: "Governance & Risk Advisory",
    problem: "Global investors and regulators are demanding detailed ESG and BRSR (Business Responsibility & Sustainability Reporting) logs, yet firms lack unified pipelines to track waste, water and carbon footprints.",
    solution: "We integrate utilities telemetry with ESG frameworks to automate environmental reporting, audit waste registers, and prepare audit-proof filings.",
    benefits: [
      "Full alignment with SEBI BRSR, GRI and TCFD reporting guidelines.",
      "Access to premium global capital and sustainability-first funding.",
      "Enhanced brand positioning as an ethical market leader."
    ],
    standards: ["BRSR Standards", "GRI Framework", "TCFD Guidelines", "ISO 50001", "ESG Rules"],
    industries: ["manufacturing", "food-processing", "mining", "energy-utilities", "real-estate-infra"]
  },
  {
    id: "incident-response",
    title: "Incident Response & CERT-In Support",
    category: "Digital Trust & Cybersecurity",
    problem: "Under CERT-In directives, cybersecurity incidents must be reported within 6 hours. Delay or lack of forensics protocols leads to heavy regulatory penalties and litigation.",
    solution: "We build 6-hour response plans, run forensic checks, conduct simulated drills, and act as your dedicated incident liaison during critical network events.",
    benefits: [
      "Guaranteed regulatory compliance during emergency cyber events.",
      "Rapid threat isolation preserving business continuity.",
      "Post-incident forensic analysis to patch security vulnerabilities."
    ],
    standards: ["CERT-In Directions 2022", "NIST SP 800-61", "ISO 27035"],
    industries: ["it-services", "bfsi", "telecom", "retail-ecommerce", "government-psu"]
  },
  {
    id: "accreditation-services",
    title: "Accreditation & Certification Services",
    category: "Audit & Assurance",
    problem: "Obtaining elite institutional stamps (NABH, NAAC, NABL) is highly complex, involving massive paperwork, gap analyses, and structural audits with high rejection rates.",
    solution: "We act as your dedicated accreditation command team: running gap assessments, codifying policy checklists, training staff, and coordinating mock inspector audits.",
    benefits: [
      "Higher pass rates and top-tier rankings on first-attempt inspections.",
      "Standardized operations conforming to premium national guidelines.",
      "Enhanced brand credibility in healthcare and higher education."
    ],
    standards: ["NABH Standards", "NAAC Guidelines", "NABL ISO 17025", "NBA Accreditations"],
    industries: ["healthcare", "education"]
  },
  {
    id: "supply-chain-compliance",
    title: "Supply Chain Compliance",
    category: "Audit & Assurance",
    problem: "Global brands face massive reputational damage and import bans if subcontractors use unsafe sites, child labor, or purchase non-compliant materials.",
    solution: "We execute on-site and dynamic supply chain due diligence, auditing third-party working conditions, wage records, and safety controls against standard buyer norms.",
    benefits: [
      "Protection against brand boycotts and export customs blockades.",
      "Fully documented, ethical supplier networks attracting premium buyers.",
      "Flawless compliance with BSCI, OEKO-TEX, and social audit codes."
    ],
    standards: ["BSCI Audit Codes", "GOTS Certification", "OEKO-TEX Norms", "Export Acts"],
    industries: ["textiles", "manufacturing", "food-processing", "retail-ecommerce", "logistics-supply-chain"]
  },
  {
    id: "labour-law-compliance",
    title: "Labour Law Compliance",
    category: "Audit & Assurance",
    problem: "Adhering to CLRA, Minimum Wages, PF, and ESIC standards is extremely complex when managing thousands of contract laborers, exposing companies to strikes and heavy penalties.",
    solution: "We manage statutory registers, audit sub-contractor wage slips, track PF/ESIC filings, and prepare organizations for inspection under the Contract Labour Act.",
    benefits: [
      "Elimination of labor litigation and unexpected factory shutdown risks.",
      "100% compliant workforce registers and statutory audits.",
      "Clear, ethical branding as an employer of choice."
    ],
    standards: ["CLRA Act 1970", "Minimum Wages Act", "BOCW Act", "PF & ESIC Rules"],
    industries: ["manufacturing", "textiles", "mining", "real-estate-infra", "logistics-supply-chain"]
  },
  {
    id: "environmental-compliance",
    title: "Environmental Compliance",
    category: "Audit & Assurance",
    problem: "Dyeing units, processing plants, and heavy factories face closure orders if they fail SPCB consents or breach Zero Liquid Discharge (ZLD) norms.",
    solution: "We monitor effluent data, manage CPCB/SPCB consent renewals, audit waste pathways, and ensure industrial processing units meet local environmental clearances.",
    benefits: [
      "Zero stop-work environment orders from regulatory boards.",
      "Documented green performance credentials supporting corporate goals.",
      "Secure, long-term operational license continuity."
    ],
    standards: ["EPA 1986", "Water & Air Acts", "SPCB Consent Norms", "ZLD Rules"],
    industries: ["textiles", "manufacturing", "food-processing", "mining", "energy-utilities"]
  },
  {
    id: "rera-compliance",
    title: "RERA Compliance Management",
    category: "Governance & Risk Advisory",
    problem: "Real estate companies risk massive project freezes and heavy buyer lawsuits for late filings, escrow accounts deviations, or changing plans without approval.",
    solution: "We manage monthly project status filings, escrow balance audits, customer grievance response systems, and coordinate standard project closures.",
    benefits: [
      "Total buyer confidence and zero regulatory warning alerts under RERA.",
      "Safe, audit-proof project cash routing inside escrow structures.",
      "Smooth project handovers with clean regulatory documentation."
    ],
    standards: ["RERA Act 2016", "Building Bye-Laws", "BOCW Safety Guidelines"],
    industries: ["real-estate-infra"]
  },
  {
    id: "clinical-governance",
    title: "Clinical Governance",
    category: "Audit & Assurance",
    problem: "Hospitals face severe liabilities and clinical trust breakdown if standard protocols are bypassed, resulting in patient complications or ethical trial disputes.",
    solution: "We standardise clinical workflows, manage Adverse Event reporting systems, and establish research guidelines under global ICH-GCP codes.",
    benefits: [
      "Maximized patient safety and minimized medical liability claims.",
      "Shorter clinical trial approvals with robust ethics workflows.",
      "Tamper-proof incident logging and root-cause analysis."
    ],
    standards: ["ICH-GCP Guidelines", "NMC Rules", "CDSCO Trial Codes", "NABH Guidelines"],
    industries: ["healthcare", "pharma-sciences"]
  },
  {
    id: "telecom-compliance",
    title: "Telecom Compliance",
    category: "Governance & Risk Advisory",
    problem: "Telecom networks face heavy specturm penalties and license cancellations for delayed QoS reporting or customer grievance NCCP portal issues.",
    solution: "We automate network QoS metric collections, coordinate spectrum filings, audit EMF tower emissions, and build TRAI-compliant consumer portals.",
    benefits: [
      "Protected specturm assets with zero regulatory QoS penalties.",
      "Perfect scorecards in TRAI grid audits.",
      "Smooth tower deployment with right-of-way clearances."
    ],
    standards: ["TRAI Spectrum Rules", "USOF Guidelines", "NCCP Portal Codes"],
    industries: ["telecom"]
  }
];

export const getServiceById = (id: string) => {
  return servicesData.find(serv => serv.id === id);
};
