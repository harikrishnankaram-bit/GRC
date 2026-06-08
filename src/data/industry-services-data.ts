export interface IndustryServiceOffering {
  title: string;
  description: string;
  outcome: string;
}

export const industryServicesData: Record<string, IndustryServiceOffering[]> = {
  bfsi: [
    {
      title: "Regulatory Compliance Management",
      description: "End-to-end adherence to RBI, SEBI, IRDAI guidelines with automated tracking.",
      outcome: "Reduced regulatory penalties, audit readiness"
    },
    {
      title: "Risk Assessment & Governance Framework",
      description: "Enterprise Risk Management (ERM) design, RCSA, and KRI dashboards.",
      outcome: "Proactive risk mitigation, board-level visibility"
    },
    {
      title: "Data Privacy & DPDP Implementation",
      description: "DPDP Act compliance, consent management, data mapping, and breach response.",
      outcome: "Legal compliance, customer trust enhancement"
    },
    {
      title: "Vendor & Third-Party Risk Management",
      description: "Due diligence, continuous monitoring, and SLA governance for fintech partners.",
      outcome: "Supply chain resilience, contractual compliance"
    },
    {
      title: "Internal Audit & MRM Support",
      description: "Independent validation of controls and management response tracking.",
      outcome: "Strengthened control environment, regulator confidence"
    }
  ],
  manufacturing: [
    {
      title: "Factory Compliance Services",
      description: "Licenses, statutory registers, and inspection readiness under the Factories Act.",
      outcome: "Zero non-conformance, uninterrupted operations"
    },
    {
      title: "EHS Management Framework",
      description: "Tech-driven Environmental, Health & Safety compliance with real-time monitoring.",
      outcome: "Safer workplaces, sustainability certification readiness"
    },
    {
      title: "Labour Law Compliance Audit",
      description: "Due diligence on CLRA, Minimum Wages, PF/ESIC, and contract labour management.",
      outcome: "Reduced litigation risk, ethical workforce practices"
    },
    {
      title: "Quality & Standards Compliance",
      description: "ISO 9001/14001/45001 implementation and BIS certification support.",
      outcome: "Market access, brand credibility"
    },
    {
      title: "Supply Chain Compliance",
      description: "Vendor onboarding, code of conduct enforcement, and ESG due diligence.",
      outcome: "Responsible sourcing, brand protection"
    }
  ],
  healthcare: [
    {
      title: "Healthcare Data Privacy (DPDP + HIPAA)",
      description: "Consent frameworks, data localization, and breach protocols for patient records.",
      outcome: "Regulatory compliance, patient trust"
    },
    {
      title: "NABH/NABL Accreditation Support",
      description: "Gap assessment, documentation, mock audits, and staff training.",
      outcome: "Accreditation success, quality benchmarking"
    },
    {
      title: "Clinical Governance Framework",
      description: "Protocol standardization, adverse event reporting, and ethics committee support.",
      outcome: "Patient safety, clinical excellence"
    },
    {
      title: "Medical Device & Pharma Compliance",
      description: "CDSCO licensing, Schedule M, and ICH-GCP alignment for trials and manufacturing.",
      outcome: "Market authorization, global readiness"
    },
    {
      title: "Vendor Compliance for Healthcare IT",
      description: "Due diligence for EMR, telemedicine, and health-tech partners.",
      outcome: "Secure digital health ecosystem"
    }
  ],
  "it-services": [
    {
      title: "Cybersecurity & ISO 27001 Implementation",
      description: "ISMS design, risk assessment, control implementation, and certification support.",
      outcome: "Client trust, global contract eligibility"
    },
    {
      title: "DPDP Act & Global Privacy Compliance",
      description: "Data mapping, consent management, and cross-border transfer mechanisms for GDPR/DPDP.",
      outcome: "Legal compliance, market expansion readiness"
    },
    {
      title: "SOC 2 & Cloud Compliance",
      description: "Trust Services Criteria alignment, auditor coordination, and continuous monitoring.",
      outcome: "Enterprise client onboarding, SaaS credibility"
    },
    {
      title: "Vendor Risk Management for Tech Stacks",
      description: "Security questionnaires, SLA governance, and breach response coordination.",
      outcome: "Supply chain security, contractual compliance"
    },
    {
      title: "CERT-In & Incident Response",
      description: "6-hour reporting compliance, IR playbooks, and forensic readiness.",
      outcome: "Regulatory adherence, business continuity"
    }
  ],
  "food-processing": [
    {
      title: "FSSAI Licensing & Compliance",
      description: "Application support, annual returns, labeling compliance, and inspection readiness.",
      outcome: "Uninterrupted operations, brand protection"
    },
    {
      title: "Food Safety Management Systems",
      description: "HACCP, ISO 22000 implementation, and internal audit programs.",
      outcome: "Export eligibility, consumer confidence"
    },
    {
      title: "Export Compliance & APEDA Support",
      description: "Documentation, certification, and destination-market regulatory alignment.",
      outcome: "Market access, reduced shipment rejections"
    },
    {
      title: "Labour & Factory Compliance",
      description: "CLRA, PF/ESIC, and safety standards for processing units.",
      outcome: "Ethical operations, audit readiness"
    },
    {
      title: "Sustainability & ESG Reporting",
      description: "Water usage, waste management, and carbon footprint tracking for BRSR.",
      outcome: "Investor appeal, brand differentiation"
    }
  ],
  textiles: [
    {
      title: "Labour Law Compliance (CLRA, Minimum Wages)",
      description: "Statutory register management, wage compliance, and contract labour oversight.",
      outcome: "Zero penalties, ethical brand positioning"
    },
    {
      title: "Environmental Compliance for Dyeing/Processing",
      description: "CPCB/SPCB consents, ZLD compliance, and effluent monitoring.",
      outcome: "Regulatory adherence, sustainability credentials"
    },
    {
      title: "Export Certification Support",
      description: "GOTS, OEKO-TEX, and BSCI audit preparation and remediation.",
      outcome: "Global buyer eligibility, premium pricing"
    },
    {
      title: "Factory Safety & EHS Framework",
      description: "Fire safety, machine guarding, and PPE compliance under the Factories Act.",
      outcome: "Worker safety, operational continuity"
    },
    {
      title: "Supply Chain Due Diligence",
      description: "Vendor code of conduct and social compliance audits for subcontractors.",
      outcome: "Brand protection, responsible sourcing"
    }
  ],
  mining: [
    {
      title: "Mines Compliance Services",
      description: "DGMS guidelines, statutory forms, safety committee coordination, and inspection support.",
      outcome: "Zero stop-work orders, safety excellence"
    },
    {
      title: "Environmental Clearance & EC Compliance",
      description: "EIA coordination, consent conditions monitoring, and quarterly reporting to SPCB.",
      outcome: "License continuity, community trust"
    },
    {
      title: "Community Engagement & CSR Governance",
      description: "Stakeholder mapping, grievance redressal, and CSR project compliance under the Companies Act.",
      outcome: "Social license to operate, reputation management"
    },
    {
      title: "Contractor & Vendor Compliance",
      description: "Pre-qualification, safety training verification, and SLA monitoring for mining contractors.",
      outcome: "Supply chain safety, contractual compliance"
    },
    {
      title: "ESG Reporting for Mining",
      description: "BRSR alignment, biodiversity impact tracking, and carbon accounting.",
      outcome: "Investor confidence, sustainable financing access"
    }
  ],
  "government-psu": [
    {
      title: "Public Financial Management Compliance",
      description: "GFR adherence, expenditure tracking, and audit liaison for CAG.",
      outcome: "Fiscal discipline, audit clearance"
    },
    {
      title: "E-Procurement & Vendor Compliance",
      description: "GeM integration, tender process governance, and vendor due diligence frameworks.",
      outcome: "Transparent procurement, reduced litigation"
    },
    {
      title: "Digital Governance & MeitY Compliance",
      description: "Data classification, cloud adoption guidelines, and cybersecurity protocols for government IT.",
      outcome: "Secure digital services, citizen trust"
    },
    {
      title: "RTI & Transparency Frameworks",
      description: "RTI response protocols, proactive disclosure portals, and record management systems.",
      outcome: "Accountability compliance, public confidence"
    },
    {
      title: "PSU Corporate Governance Support",
      description: "Board charter design, committee governance, and related-party transaction oversight.",
      outcome: "Governance excellence, SEBI compliance"
    }
  ],
  "energy-utilities": [
    {
      title: "CERC/SERC Regulatory Compliance",
      description: "Tariff filing support, performance reporting, and regulatory liaison.",
      outcome: "Revenue protection, regulatory goodwill"
    },
    {
      title: "Environmental Compliance for Power/Utilities",
      description: "Consent to operate, emission monitoring, and waste management compliance.",
      outcome: "License continuity, ESG credibility"
    },
    {
      title: "Asset Risk & Maintenance Governance",
      description: "RAMS analysis, preventive maintenance compliance, and outage risk modeling.",
      outcome: "Operational reliability, cost optimization"
    },
    {
      title: "Renewable Energy Compliance",
      description: "RPO fulfillment, REC mechanisms, and subsidy claim documentation.",
      outcome: "Incentive capture, green certification"
    },
    {
      title: "ESG & Sustainability Reporting",
      description: "BRSR, GRI, and TCFD alignment for utilities.",
      outcome: "Investor appeal, sustainable financing"
    }
  ],
  "pharma-sciences": [
    {
      title: "CDSCO Licensing & Schedule M Compliance",
      description: "Manufacturing license support, GMP audits, and product registration documentation.",
      outcome: "Market authorization, quality credibility"
    },
    {
      title: "Clinical Trial Governance (ICH-GCP)",
      description: "Ethics committee coordination, informed consent frameworks, and SAE reporting.",
      outcome: "Ethical research, global trial eligibility"
    },
    {
      title: "Data Integrity & ALCOA+ Compliance",
      description: "Electronic records validation, audit trail management, and 21 CFR Part 11 alignment.",
      outcome: "Regulatory inspection readiness, data trust"
    },
    {
      title: "Pharmacovigilance & Post-Market Surveillance",
      description: "ADR reporting systems, signal detection protocols, and PSUR preparation.",
      outcome: "Patient safety, regulatory compliance"
    },
    {
      title: "IP & Regulatory Strategy Support",
      description: "Patent filing coordination, data exclusivity tracking, and global submission planning.",
      outcome: "Market protection, competitive advantage"
    }
  ],
  "retail-ecommerce": [
    {
      title: "Consumer Protection Act Compliance",
      description: "Grievance redressal mechanisms, refund policies, and advertising standards adherence.",
      outcome: "Customer trust, reduced litigation"
    },
    {
      title: "DPDP Act for E-commerce Platforms",
      description: "Consent management, data minimization, and cross-border transfer compliance for user data.",
      outcome: "Legal compliance, user confidence"
    },
    {
      title: "Marketplace Seller Compliance Framework",
      description: "Onboarding due diligence, code of conduct enforcement, and performance monitoring.",
      outcome: "Platform integrity, brand protection"
    },
    {
      title: "Supply Chain Ethical Sourcing",
      description: "Vendor audits, labour standards verification, and conflict mineral screening for electronics.",
      outcome: "Responsible sourcing, brand differentiation"
    },
    {
      title: "GST & E-invoicing Compliance",
      description: "Automated invoicing, return filing support, and reconciliation tools for high-volume transactions.",
      outcome: "Tax compliance, cash flow efficiency"
    }
  ],
  "logistics-supply-chain": [
    {
      title: "Transport & Vehicle Compliance",
      description: "Permit management, fitness certification, and driver documentation under the Motor Vehicles Act.",
      outcome: "Uninterrupted operations, penalty avoidance"
    },
    {
      title: "Customs & EXIM Compliance",
      description: "IEC management, classification support, duty drawback documentation, and AEO certification.",
      outcome: "Faster clearance, cost optimization"
    },
    {
      title: "Warehouse & Facility Compliance",
      description: "Fire safety, labour laws, and environmental consents for logistics hubs.",
      outcome: "Operational continuity, audit readiness"
    },
    {
      title: "Vendor & Carrier Risk Management",
      description: "Pre-qualification, SLA governance, and insurance verification for 3PL partners.",
      outcome: "Supply chain resilience, liability mitigation"
    },
    {
      title: "Cargo Security & ISO 28000 Alignment",
      description: "Security protocols, tracking systems, and incident response frameworks for high-value shipments.",
      outcome: "Loss prevention, client confidence"
    }
  ],
  education: [
    {
      title: "UGC/AICTE Regulatory Compliance",
      description: "Affiliation documentation, norm adherence, and inspection readiness for higher education.",
      outcome: "Accreditation continuity, grant eligibility"
    },
    {
      title: "Student Data Privacy (DPDP Act)",
      description: "Consent frameworks for admissions, learning analytics governance, and breach protocols.",
      outcome: "Legal compliance, parent trust"
    },
    {
      title: "NAAC/NBA Accreditation Support",
      description: "Self-study report preparation, metric alignment, and mock assessment coordination.",
      outcome: "Higher accreditation scores, institutional ranking"
    },
    {
      title: "Faculty & Staff Compliance",
      description: "Appointment norms, PF/ESIC compliance, and code of conduct frameworks for educational institutions.",
      outcome: "Ethical HR practices, reduced litigation"
    },
    {
      title: "Online Education Compliance",
      description: "DEB recognition, content copyright adherence, and proctoring ethics for digital learning.",
      outcome: "Market access, academic integrity"
    }
  ],
  "real-estate-infra": [
    {
      title: "RERA Compliance Management",
      description: "Project registration, quarterly disclosures, escrow account compliance, and grievance redressal.",
      outcome: "Buyer trust, penalty avoidance"
    },
    {
      title: "Environmental Clearance & EC Monitoring",
      description: "EIA coordination, consent conditions tracking, and green building certification support (IGBC/GRIHA).",
      outcome: "License continuity, sustainability branding"
    },
    {
      title: "Construction Labour Compliance (CLRA, BOCW)",
      description: "Contractor oversight, wage compliance, and safety training documentation for site workforce.",
      outcome: "Ethical operations, audit readiness"
    },
    {
      title: "NBFC/Home Loan Compliance",
      description: "RBI guidelines adherence for real estate financing arms, NPA provisioning, and fair practices code.",
      outcome: "Financial compliance, investor confidence"
    },
    {
      title: "Project Governance & Vendor Oversight",
      description: "Tender governance, contractor SLA monitoring, and quality audit frameworks for EPC contracts.",
      outcome: "Project delivery assurance, cost control"
    }
  ],
  telecom: [
    {
      title: "TRAI Regulatory Compliance",
      description: "QoS reporting, tariff filing support, interconnection guidelines adherence, and USOF documentation.",
      outcome: "Regulatory goodwill, license continuity"
    },
    {
      title: "DPDP Act & Data Localization",
      description: "User consent frameworks, data mapping for call records/CDR, and cross-border transfer compliance.",
      outcome: "Legal compliance, customer trust"
    },
    {
      title: "Infrastructure Sharing Compliance",
      description: "Tower sharing agreements, EMF compliance, and right-of-way documentation for rollout.",
      outcome: "Cost optimization, faster deployment"
    },
    {
      title: "Consumer Grievance & NCCP Framework",
      description: "Escalation protocols, complaint resolution SLAs, and NCCP portal integration.",
      outcome: "Customer satisfaction, regulatory compliance"
    },
    {
      title: "Cybersecurity for Telecom Networks",
      description: "ISO 27001 alignment, CERT-In incident reporting, and network security audits.",
      outcome: "Service reliability, breach prevention"
    }
  ]
};
