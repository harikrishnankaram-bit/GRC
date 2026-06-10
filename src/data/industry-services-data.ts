export interface IndustryServiceOffering {
  title: string;
  description: string;
  outcome: string;
}

export const industryServicesData: Record<string, IndustryServiceOffering[]> = {
  // CLUSTER 1: MANUFACTURING & INDUSTRIAL
  automobiles: [
    {
      title: "Assembly-Line Safety & HSE Audit",
      description: "Comprehensive audits of automated assembly operations, conveyor systems safety, and heavy tooling EHS compliance under the Factories Act.",
      outcome: "Zero-accident rating, full Factories Act clearance"
    },
    {
      title: "Environmental Consent & Waste Management",
      description: "Managing paint shop VOC emissions, heavy metal residues, and SPCB air/water consent logs.",
      outcome: "Continuous green clearances, 100% emission compliance"
    },
    {
      title: "Automotive Supply Chain Due Diligence",
      description: "Vetting Tier-1/Tier-2 vendors for safety audits, conflict minerals tracing, and subcontractor labor registries.",
      outcome: "Fully certified, risk-insulated supply chain"
    },
    {
      title: "Contract Labour (CLRA) Alignment",
      description: "Reconciliation of contract workforce rosters, PF/ESIC contributions, and minimum wage compliance registries.",
      outcome: "Zero labor dispute disruptions, flawless statutory audits"
    }
  ],
  "auto-components": [
    {
      title: "IATF 16949 GRC Integration",
      description: "Aligning quality control manuals, precision engineering safety logs, and global OEM audit criteria with statutory rules.",
      outcome: "Preferred supplier status, 100% buyer audit pass rate"
    },
    {
      title: "Subcontractor Risk Overwatch",
      description: "Ongoing audits of secondary treatment vendors, plating workshops, and raw forging suppliers.",
      outcome: "Elimination of downstream quality and legal liability"
    },
    {
      title: "CLRA Compliance & Wage Audits",
      description: "Statutory audits of contract labor records, wage slip registers, and safety gear provisions.",
      outcome: "100% legal compliance, zero labor inspection penalties"
    },
    {
      title: "Hazardous Chemical Safety & EHS",
      description: "Implementing ISO 14001 EHS frameworks for heat treatment and chemical plating shops.",
      outcome: "Safe cleanroom operations, zero environmental violations"
    }
  ],
  "engineering-capital-goods": [
    {
      title: "Heavy Machinery Safety & ISO 45001",
      description: "Codifying safety protocols for heavy fabrication yards, overhead cranes, and mechanical testing labs.",
      outcome: "Zero critical site accidents, ISO 45001 certification"
    },
    {
      title: "Import/Export Customs & GFR GRC",
      description: "Auditing customs classifications, import licenses for raw steel, and General Financial Rules (GFR) procurement logs.",
      outcome: "Flawless customs audit trail, zero cargo delay penalties"
    },
    {
      title: "Industrial Design IP Protection",
      description: "Harkening proprietary CAD designs, equipment blueprints, and patent filings via robust data access governance.",
      outcome: "Secure intellectual assets, zero code leaks"
    },
    {
      title: "Factory Licensing & Inspector Prep",
      description: "Maintaining up-to-date pressure vessel certificates, stability plans, and statutory factory registers.",
      outcome: "Instant clearance by factory inspectors, continuous license"
    }
  ],
  "defence-manufacturing": [
    {
      title: "Defence Security & ISO 27001 GRC",
      description: "Designing military-grade information security management systems to safeguard DRDO and Ministry drawings.",
      outcome: "ISO 27001 certification, approved defence supplier status"
    },
    {
      title: "NDA Orchestration & IP Locking",
      description: "Enforcing legal NDA controls, air-gapped developer workstations, and security clearance checks for employees.",
      outcome: "Zero industrial espionage events, complete confidentiality"
    },
    {
      title: "Military Quality & Traceability GRC",
      description: "Auditing metallurgical traceability databases, ballistic test registers, and raw component origins.",
      outcome: "100% product pedigree audit clearance, defense board trust"
    },
    {
      title: "Government Procurement GFR Compliance",
      description: "Aligning bid preparations, escrow operations, and sub-contractor selections with national defense codes.",
      outcome: "Audit-proof defense contracts, seamless cash execution"
    }
  ],
  msme: [
    {
      title: "MSME Statutory Compliance Scaling",
      description: "Streamlined compliance registers covering labor, safety, and trade licenses tailored for scaling MSME units.",
      outcome: "Statutory compliance at 50% lower operational cost"
    },
    {
      title: "GST Reconciliation & Tax Audit GRC",
      description: "Automated input tax credit matching, supply invoice audits, and digital tax register compliance.",
      outcome: "Zero GST penalties, clean annual tax audits"
    },
    {
      title: "PF/ESIC & Labor Overwatch",
      description: "Digital management of employee provident fund logs, health insurance records, and wage registers.",
      outcome: "100% compliance with labor department mandates"
    },
    {
      title: "Government Incentives Audits",
      description: "Audit-ready logs to unlock MSME interest subventions, patent subsidies, and green energy incentives.",
      outcome: "Fast payout of government subsidies, validated logs"
    }
  ],

  // CLUSTER 2: TECHNOLOGY & ELECTRONICS
  "it-bpm": [
    {
      title: "DPDP Act 2023 Consent Auditing",
      description: "Reviewing data flows, mapping customer records storage, and installing consent manager logs to align with India's privacy acts.",
      outcome: "100% DPDP compliance, zero privacy breach penalties"
    },
    {
      title: "ISO 27001 & SOC 2 Certification GRC",
      description: "Setting up information security management systems, access matrices, and penetration test registers.",
      outcome: "ISO 27001 and SOC 2 stamps, attracting global buyers"
    },
    {
      title: "Client SLA Validation & Risk Tracking",
      description: "Dynamic tracking of IT service levels, server availability metrics, and data integrity targets.",
      outcome: "Zero SLA penalty claims, enhanced delivery trust"
    },
    {
      title: "CERT-In Incident Response Readiness",
      description: "Codifying 6-hour cybersecurity incident reporting workflows, logging procedures, and simulation runs.",
      outcome: "100% compliance with CERT-In mandates, fast threat containment"
    }
  ],
  "electronics-semiconductor": [
    {
      title: "Cleanroom EHS & Toxic Effluent GRC",
      description: "Monitoring chemical processing safety, cleaning agent safety protocols, and SPCB water recycling records.",
      outcome: "Zero SPCB warning alerts, safe cleanroom environments"
    },
    {
      title: "Chip Design IP Access Overwatch",
      description: "Enforcing zero-trust network access, design server audit logging, and encryption for circuit blueprints.",
      outcome: "Protected semiconductor IPs, zero espionage events"
    },
    {
      title: "E-Waste & EPR Target Compliance",
      description: "Tracking extended producer responsibility (EPR) targets, e-waste recycler certificates, and recycling audits.",
      outcome: "Audit-proof EPR logs, green brand image"
    },
    {
      title: "Supply Chain Material Customs GRC",
      description: "Managing import licenses, duty classifications for silicon wafers, and toxic material handling logs.",
      outcome: "Clean customs clearance, no manufacturing line delays"
    }
  ],
  telecommunications: [
    {
      title: "TRAI Spectrum Licensing & QoS GRC",
      description: "Automated aggregation of call drop rates, network jitter metrics, and spectrum allocation schedules.",
      outcome: "Zero TRAI spectrum non-compliance fines"
    },
    {
      title: "EMF Radiation Safety Audits",
      description: "Conducting dynamic measurements of cellular tower emission levels and keeping municipal safety records.",
      outcome: "100% Cell tower clearance compliance, zero citizen complaints"
    },
    {
      title: "Call Data Record Privacy & DPDP",
      description: "Deploying secure, encrypted databases for CDR logs and access control registry for security audits.",
      outcome: "DPDP compliant call data management, zero database leaks"
    },
    {
      title: "Tower Right-of-Way Municipal GRC",
      description: "Securing municipal clearances, forest department consents, and local body permits for cell towers.",
      outcome: "Uninterrupted tower installations, valid legal title logs"
    }
  ],
  "science-technology": [
    {
      title: "Lab Bio-Safety & Toxic Waste GRC",
      description: "Monitoring chemical storage guidelines, bio-waste disposal chains, and laboratory air systems.",
      outcome: "Accredited safe labs, zero environmental warnings"
    },
    {
      title: "Ethics Committee & Research Consent",
      description: "Managing research consent repositories, trial subject logs, and institutional ethics filings.",
      outcome: "100% ethical research alignment, audit-ready data"
    },
    {
      title: "Patent Audit & IP Assets GRC",
      description: "Ensuring research notebooks, codebases, and chemical formulas are time-stamped and legally logged.",
      outcome: "Secured intellectual capital, audit-ready patent files"
    },
    {
      title: "NABL ISO 17025 Prep Audits",
      description: "Calibrating lab equipment records, testing procedure validation files, and personnel credentials.",
      outcome: "Successful NABL accreditation status, premium lab trust"
    }
  ],
  "electric-vehicles": [
    {
      title: "Battery Safety & AIS 156 GRC",
      description: "Auditing thermal runway logs, cell testing procedures, and battery containment safety registers.",
      outcome: "100% AIS 156 battery compliance, zero fire risk alerts"
    },
    {
      title: "FAME Subsidy Audit Readiness",
      description: "Vetting component localization percentages, domestic supply invoices, and FAME portal registration logs.",
      outcome: "Fast disbursement of clean energy subsidies, zero audit delays"
    },
    {
      title: "Battery E-Waste & Recycling EPR",
      description: "Setting up battery collection registers, recycler partnerships, and EPR compliance reporting.",
      outcome: "Audit-ready EPR certifications, reduced environmental footprint"
    },
    {
      title: "High-Voltage Plant Safety EHS",
      description: "Codifying safety checklists for electrical motor test beds and technician training registers.",
      outcome: "Zero high-voltage accidents, complete plant safety clearance"
    }
  ],

  // CLUSTER 3: INFRASTRUCTURE & CONSTRUCTION
  cement: [
    {
      title: "Limestone Mining Mines Act EHS",
      description: "Monitoring blast safety protocols, haul road dust suppression logs, and Mines Act statutory records.",
      outcome: "Clean DGMS inspector reports, continuous mining"
    },
    {
      title: "Stack Emission & Carbon GRC (BRSR)",
      description: "Managing real-time continuous emission monitoring system (CEMS) telemetry and SEBI-aligned carbon logs.",
      outcome: "100% SPCB emission compliance, elevated ESG ratings"
    },
    {
      title: "Kiln Process Safety & ISO 14001",
      description: "Implementing chemical hazard safety systems for cement kilns, raw mills, and blending silos.",
      outcome: "ISO 14001 certification, safe high-temperature operations"
    },
    {
      title: "Logistics Fleet Safety Overwatch",
      description: "Auditing contractor truck fleet registrations, driver shift limits, and transit emission compliance.",
      outcome: "Reduced supply chain liability, clean logistics audits"
    }
  ],
  steel: [
    {
      title: "Furnace EHS & Factories Act GRC",
      description: "Setting up safety registers for blast furnaces, molten metal transport safety, and safety training logs.",
      outcome: "Zero safety incidents, full factory inspector approvals"
    },
    {
      title: "Zero Liquid Discharge (ZLD) Compliance",
      description: "Monitoring effluent treatment plant water quality, chemical oxygen demand logs, and SPCB reuse consents.",
      outcome: "Zero SPCB discharge warnings, 100% recycled water use"
    },
    {
      title: "Subcontractor Wage & CLRA Audits",
      description: "Auditing third-party labor contractors for minimum wage compliance, PF/ESIC deposits, and labor logs.",
      outcome: "Zero contractor litigation events, audit-ready labor filings"
    },
    {
      title: "Steel Quality Standards & BIS GRC",
      description: "Tracking raw iron inputs, furnace melt chemistry records, and BIS quality mark certifications.",
      outcome: "Approved BIS steel supplier status, guaranteed structural trust"
    }
  ],
  infrastructure: [
    {
      title: "BOCW Safety & Site Inspections",
      description: "Enforcing Building and Other Construction Workers (BOCW) Act safety helmets, scaffolding checks, and safety logs.",
      outcome: "Zero site safety penalties, 100% BOCW compliance"
    },
    {
      title: "Environmental Impact (EIA) Clearances",
      description: "Compiling environmental studies, water body consents, and forest clearance filings for large EPC projects.",
      outcome: "Unblocked project commencements, zero EIA legal delays"
    },
    {
      title: "EPC Contractor SLA & Quality GRC",
      description: "Tracking contractor milestone completions, structural testing registers, and budget allocation audits.",
      outcome: "On-time project delivery, minimal cost deviation"
    },
    {
      title: "Land Title GRC & Right-of-Way Clearances",
      description: "Auditing land acquisition records, concession approvals, and local municipality NOC logs.",
      outcome: "Clean land title records, zero highway development freezes"
    }
  ],
  "real-estate": [
    {
      title: "RERA Disclosures & Quarterly Filings",
      description: "Managing project registration applications, construction update photos, and customer allotment registries.",
      outcome: "100% RERA compliance, zero buyer litigation alerts"
    },
    {
      title: "Escrow Cash Routing Audit GRC",
      description: "Auditing project escrow accounts to ensure 70% of customer collections are routed to construction costs.",
      outcome: "Audit-ready financial filings, zero RERA cash diversion penalties"
    },
    {
      title: "Building Bye-Laws & Safety Approvals",
      description: "Securing fire safety NOCs, structural stability certifications, and occupancy permit registers.",
      outcome: "Valid local body building licenses, smooth project delivery"
    },
    {
      title: "Customer Grievance & Redressal GRC",
      description: "Codifying delay compensation logs, project defect reports, and customer redressal portals.",
      outcome: "Stellar customer satisfaction rating, minimized legal exposures"
    }
  ],
  "roads-highways": [
    {
      title: "NHAI Concession Agreement GRC",
      description: "Auditing highway toll collections, road maintenance SLA logs, and concessions agreement updates.",
      outcome: "Zero NHAI concession penalty events, optimized toll collections"
    },
    {
      title: "Post-Construction Eco-Restoration GRC",
      description: "Managing tree plantation registers, dust control water logs, and fly ash disposal audits.",
      outcome: "Clean environment board clearance, validated restoration reports"
    },
    {
      title: "Highways Construction Safety & BOCW",
      description: "Setting up safety signage, night construction lighting logs, and structural concrete safety tests.",
      outcome: "Safe work zones, zero traffic collision liabilities"
    },
    {
      title: "Toll Financial Audits & Controls",
      description: "Securing toll gate cash processing databases, banking logs, and transaction audit trails.",
      outcome: "100% secure financial logs, zero toll cash leakages"
    }
  ],

  // CLUSTER 4: ENERGY & UTILITIES
  "oil-gas": [
    {
      title: "OISD Refinery Safety & EHS Audits",
      description: "Managing Oil Industry Safety Directorate guidelines, gas leak detection checks, and flare stack EHS registers.",
      outcome: "Zero pipeline/refinery accidents, clean OISD reports"
    },
    {
      title: "Marine Pollution & Terminal CRZ GRC",
      description: "Auditing marine tanker loading logs, oil spill containment readiness, and Coastal Regulation Zone clearances.",
      outcome: "Clean CRZ licenses, zero terminal operation freezes"
    },
    {
      title: "Hazardous Zone ATEX/EHS Compliance",
      description: "Maintaining intrinsically safe electronic registers, fire alarm testing, and plant pressure certifications.",
      outcome: "100% compliant explosion protection registers, safe operations"
    },
    {
      title: "Refinery Joint Venture Financial GRC",
      description: "Auditing petroleum shared assets, extraction invoices, and oil distribution cash reconciliation logs.",
      outcome: "Clear joint venture audit trails, zero cost leakage"
    }
  ],
  power: [
    {
      title: "CERC/SERC Grid Code Alignment",
      description: "Monitoring frequency deviation logs, grid code adherence records, and tariff schedule filings.",
      outcome: "100% grid code compliance, zero frequency penalty fines"
    },
    {
      title: "Thermal Emission CEMS Telemetry GRC",
      description: "Managing continuous emissions telemetry pipelines, water discharge logs, and fly ash reuse registries.",
      outcome: "Clean SPCB licenses, zero environmental shutdown warnings"
    },
    {
      title: "Power Tariff Application Audits",
      description: "Auditing bulk power sale agreements, tariff filing structures, and state energy board billing logs.",
      outcome: "Protected utility revenues, optimized tariff collections"
    },
    {
      title: "ISO 50001 Energy Management GRC",
      description: "Deploying boiler efficiency tracking, turbine steam telemetry, and ISO 50001 certification registers.",
      outcome: "ISO 50001 stamp, minimized heat rate deviations"
    }
  ],
  "renewable-energy": [
    {
      title: "Carbon Credit & Gold Standard GRC",
      description: "Aggregating solar/wind energy generation logs, carbon offset calculations, and verified credit registers.",
      outcome: "Clean carbon credit certificates, elevated ESG funding"
    },
    {
      title: "Wind/Solar Park Land Title GRC",
      description: "Auditing agricultural land conversions, lease agreement files, and local village panchayat clearances.",
      outcome: "Valid land titles, zero project litigation delays"
    },
    {
      title: "REC Trading & Incentive Audits",
      description: "Securing Renewable Energy Certificate (REC) trade logs, government incentive portals, and energy audits.",
      outcome: "Maximized REC trading returns, verified incentive logs"
    },
    {
      title: "Green Energy Grid Code Compliance",
      description: "Monitoring solar plant reactive power, grid synchronization logs, and CEA safety guidelines.",
      outcome: "Zero grid sync penalty events, stable operations"
    }
  ],
  ports: [
    {
      title: "ISPS Port Facility Security GRC",
      description: "Enforcing International Ship and Port Facility Security (ISPS) gate passes, CCTV logs, and security checks.",
      outcome: "ISPS level 1 port rating, premium ship arrivals"
    },
    {
      title: "Customs Cargo Audit Trails & GRC",
      description: "Auditing customs cargo container databases, duty pay records, and port clearance log entries.",
      outcome: "Zero customs non-compliance fines, minimized transit delays"
    },
    {
      title: "Dockworker EHS & Cargo Safety",
      description: "Monitoring crane stability registers, dock safety training logs, and hazardous material storage.",
      outcome: "Zero dock accidents, full compliance with Dock Workers Act"
    },
    {
      title: "Coastal Zone CRZ Environmental GRC",
      description: "Monitoring harbor dredging water quality, coastal vegetation compliance, and ocean waste disposal.",
      outcome: "Continuous CRZ operational approvals, green port certification"
    }
  ],
  railways: [
    {
      title: "CMRS Metro Rail Safety Approvals",
      description: "Aggregating rail speed tests, fire containment certifications, and signal testing logs for CMRS inspections.",
      outcome: "Successful Commissioner of Railway Safety clearance, on-time metro launch"
    },
    {
      title: "Track Maintenance EHS & Registers",
      description: "Monitoring track worker safety gear logs, heavy machine maintenance, and route inspection checks.",
      outcome: "Zero maintenance safety incidents, safe transit lines"
    },
    {
      title: "GFR Procurement Transparency Audits",
      description: "Auditing railway coach supply bidding, vendor qualification logs, and contract SLA benchmarks.",
      outcome: "Audit-proof railway procurement, complete GFR compliance"
    },
    {
      title: "Metro Passenger Safety & GRC Systems",
      description: "Designing passenger fire safety alarms, station access control logs, and emergency evacuation drills.",
      outcome: "100% compliant passenger safety systems, zero liability"
    }
  ],

  // CLUSTER 5: FINANCIAL SERVICES
  banking: [
    {
      title: "RBI Master Directions Audit GRC",
      description: "Vetting asset classification systems, loan exposure caps, and capital adequacy ratio (CAR) reporting.",
      outcome: "Outstanding RBI inspection rating, zero regulatory penalties"
    },
    {
      title: "AML/KYC Transaction Monitoring GRC",
      description: "Deploying anti-money laundering watchlists, transaction pattern engines, and KYC database audits.",
      outcome: "100% PMLA compliance, zero reportable money laundering events"
    },
    {
      title: "RBI IT Outsourcing & Vendor Risk",
      description: "Vetting third-party fintech SaaS partners, cloud database security, and outsourcing SLA registries.",
      outcome: "Flawless compliance with RBI IT guidelines, insulated supply chain"
    },
    {
      title: "Banking Fraud Prevention & Sentry",
      description: "Monitoring insider access control logs, ledger changes, and signature validation databases.",
      outcome: "Protected customer deposits, minimal fraud exposure"
    }
  ],
  "financial-services": [
    {
      title: "SEBI LODR Corporate Governance GRC",
      description: "Securing SEBI LODR board committee records, listing disclosure logs, and insider trading files.",
      outcome: "100% SEBI LODR compliance, pristine market reputation"
    },
    {
      title: "SEBI Mutual Fund & Asset Audits",
      description: "Auditing asset under management (AUM) ratios, investor fund separation, and transaction registries.",
      outcome: "Zero SEBI audit notices, trusted investment operations"
    },
    {
      title: "DPDP Financial Privacy Compliance",
      description: "Mapping retail investor records, setting up consent management portals, and encrypting financial profiles.",
      outcome: "DPDP Act compliance, secure investor databases"
    },
    {
      title: "Securities Trading Risk Registers",
      description: "Monitoring brokerage margin limits, high-frequency trade algos, and market risk control logs.",
      outcome: "Audit-proof trading infrastructure, zero compliance breaches"
    }
  ],
  insurance: [
    {
      title: "IRDAI Consumer Code Reporting GRC",
      description: "Monitoring policy issuance timelines, consumer grievance registers, and IRDAI compliance filings.",
      outcome: "Outstanding IRDAI rating, zero consumer board warnings"
    },
    {
      title: "Claim Settlement Anti-Fraud GRC",
      description: "Vetting medical claim audit trails, crop damage claims, and payment validation registers.",
      outcome: "Protected premium reserves, zero fraudulent claims paid"
    },
    {
      title: "Policyholder Medical Records DPDP",
      description: "Encrypting policyholder health databases and consent mapping for third-party medical checks.",
      outcome: "100% compliance with India DPDP Act and healthcare rules"
    },
    {
      title: "Insurance Agent & Broker Compliance",
      description: "Auditing broker commission logs, licensing records, and sales conduct logs.",
      outcome: "Clean IRDAI agent audit trail, minimized mis-selling risk"
    }
  ],
  ecommerce: [
    {
      title: "Consumer Protection E-Commerce GRC",
      description: "Managing seller pricing disclosures, refund SLA registers, and grievance officer portals.",
      outcome: "100% Consumer Protection Act compliance, zero warning alerts"
    },
    {
      title: "FDI Inventory Sourcing Regulations GRC",
      description: "Auditing marketplace supplier concentrations, sales logs, and affiliate company relationships.",
      outcome: "Zero FDI policy warning alerts, secure corporate operations"
    },
    {
      title: "Payment Gateway PCI-DSS Audits",
      description: "Securing user credit card databases, tokenization registries, and transaction logging engines.",
      outcome: "PCI-DSS compliant payments, zero financial data leaks"
    },
    {
      title: "E-Commerce User Privacy & Consent",
      description: "Mapping website cookie consent, shopper database privacy logs, and targeted ad consent registries.",
      outcome: "DPDP Act compliance, enhanced customer trust"
    }
  ],
  "gems-jewellery": [
    {
      title: "BIS Gold Hallmarking & Origin Trace",
      description: "Auditing gold purity assay registers, BIS hallmarking stamps, and supplier source certificates.",
      outcome: "Approved BIS jeweler status, guaranteed product integrity"
    },
    {
      title: "PMLA Jewellery Transaction Monitoring",
      description: "Managing high-value cash transaction registries, PAN card verifications, and suspicious transaction reports (STR).",
      outcome: "100% PMLA compliance, zero transaction monitoring fines"
    },
    {
      title: "Import/Export Customs & FEMA GRC",
      description: "Managing diamond import valuations, customs duty files, and foreign exchange bank logs.",
      outcome: "Clean customs audit trail, minimized supply chain halts"
    },
    {
      title: "Goldsmith Workplace EHS & Licensing",
      description: "Monitoring gold refining acid safety, dust ventilation systems, and local body chemical permits.",
      outcome: "Safe artisan workshops, zero factory inspector warnings"
    }
  ],

  // CLUSTER 6: HEALTHCARE & LIFE SCIENCES
  pharmaceuticals: [
    {
      title: "USFDA / CDSCO Schedule M GMP Audits",
      description: "Reviewing sterile manufacturing cleanrooms, batch production records, and equipment cleaning logs.",
      outcome: "Zero USFDA warning letters, CDSCO GMP certification"
    },
    {
      title: "ALCOA+ GMP Data Integrity Validation",
      description: "Auditing electronic lab notebook databases, chromatography software logs, and user access records.",
      outcome: "100% compliant drug testing records, audit-proof labs"
    },
    {
      title: "Pharmacovigilance Advisory & GRC Logs",
      description: "Orchestrating drug side-effect reporting networks, regulator communication logs, and medical advisory files.",
      outcome: "Zero pharmacovigilance filing delays, protected drug licenses"
    },
    {
      title: "Chemical EHS & Water Consent (SPCB)",
      description: "Monitoring active pharmaceutical ingredient (API) waste pathways, incinerator emissions, and SPCB reuse consents.",
      outcome: "Zero SPCB discharge warnings, green pharmaceutical status"
    }
  ],
  healthcare: [
    {
      title: "NABH Quality Standard Mock Audits",
      description: "Vetting patient admission SOPs, hospital hygiene indices, and doctor licensing records.",
      outcome: "Accredited NABH status, top-tier clinical trust score"
    },
    {
      title: "EMR Patient Database Privacy (DPDP)",
      description: "Encrypting electronic medical records, patient portal consent logs, and diagnostic sharing records.",
      outcome: "100% DPDP and HIPAA compliance, zero patient leaks"
    },
    {
      title: "Clinical Establishments Act GRC",
      description: "Managing hospital bed registers, emergency tariff postings, and medical waste compliance logs.",
      outcome: "Valid municipal hospital licenses, minimized legal risks"
    },
    {
      title: "Clinical Waste Pathway Disposal Audits",
      description: "Auditing hospital medical waste segregation, incinerator transfer files, and waste handler audits.",
      outcome: "Zero health inspector warnings, green clinic certification"
    }
  ],
  "medical-devices": [
    {
      title: "CDSCO Medical Device Rules GRC",
      description: "Compiling device design master records, CDSCO registration files, and post-market tracking logs.",
      outcome: "Valid manufacturing licenses, on-time market launches"
    },
    {
      title: "ISO 13485 QMS Certification Prep",
      description: "Aligning device component quality logs, cleanroom fabrication checks, and device calibration records.",
      outcome: "ISO 13485 certification, premium global buyer trust"
    },
    {
      title: "Clinical Trial Ethics & Investigate GRC",
      description: "Monitoring clinical trial subject consent registers, adverse device event logs, and GCP compliance.",
      outcome: "Audit-ready trial databases, fast device clearances"
    },
    {
      title: "Device Recall Mitigation & EHS",
      description: "Developing device software bug tracking registers, hardware recall plans, and component testing logs.",
      outcome: "Zero product recall events, minimized corporate liability"
    }
  ],
  biotechnology: [
    {
      title: "RCGM Genetic Manipulation EHS",
      description: "Managing Review Committee on Genetic Manipulation approvals, gene lab containment checks, and biosecurity registers.",
      outcome: "100% RCGM compliance, safe genetic research labs"
    },
    {
      title: "Bio-Safety Lab SOP Audits (ISO 15189)",
      description: "Auditing lab technician vaccination records, chemical spill containment plans, and autoclave logs.",
      outcome: "Accredited safe research facility, zero biohazard events"
    },
    {
      title: "Genetic Asset IP & Patent GRC",
      description: "Ensuring DNA sequence databases, patent applications, and research authorship logs are time-stamped.",
      outcome: "Secured biotech discoveries, clean patent filings"
    },
    {
      title: "Biological Waste Pathway Audits",
      description: "Monitoring GMO crop containment, bioreactor effluent treatment, and waste handler permits.",
      outcome: "Zero SPCB genetic waste notices, green laboratory status"
    }
  ],
  ayush: [
    {
      title: "Ayush Mark Quality Certification Prep",
      description: "Auditing herbal ingredient purity tests, lab results database, and Ayush Mark application files.",
      outcome: "Gold-level Ayush Mark stamp, boosted market sales"
    },
    {
      title: "Schedule T Medicine GMP Audits",
      description: "Vetting traditional medicine raw mills, batch packing logs, and facility hygiene registers.",
      outcome: "Schedule T GMP compliance, CDSCO audit approvals"
    },
    {
      title: "Herb Sourcing & Wildlife Protection Act",
      description: "Auditing raw herb supplier certificates, forest department sourcing NOCs, and origin traces.",
      outcome: "100% legal herb sourcing, zero forest department violations"
    },
    {
      title: "Traditional Medicine Labelling & FSSAI",
      description: "Reviewing pack labels for health claims, organic tags, and FSSAI packaging guidelines.",
      outcome: "Zero labeling violation warnings, verified herb profiles"
    }
  ],

  // CLUSTER 7: CONSUMER & RETAIL
  fmcg: [
    {
      title: "FSSAI Food Hygiene & Packaging GRC",
      description: "Monitoring cleanroom packaging hygiene, shelf-life validation records, and FSSAI annual returns.",
      outcome: "FSSAI compliance, zero food recall events"
    },
    {
      title: "Legal Metrology Packaging Audits",
      description: "Auditing packing weight accuracy, retail price declarations, and manufacturer registration certificates.",
      outcome: "Zero legal metrology warnings, compliant packaging"
    },
    {
      title: "ESG Sourcing & Supply Chain GRC (BRSR)",
      description: "Vetting palm oil sustainability certificates, plastic packaging waste logs, and BRSR sustainability metrics.",
      outcome: "SEBI-aligned BRSR green metrics, premium brand trust"
    },
    {
      title: "FMCG Warehouse EHS & Logistics",
      description: "Monitoring warehouse forklift safety, stack weight limits, and logistics carrier clearances.",
      outcome: "Zero warehouse accidents, smooth shipping operations"
    }
  ],
  retail: [
    {
      title: "Shop Act Licenses & Municipal GRC",
      description: "Managing municipal trade licenses, shop work hour registers, and local body occupancy permits.",
      outcome: "100% compliant store operations, zero local government warnings"
    },
    {
      title: "Labour Code Minimum Wages & CLRA",
      description: "Auditing cashier/sales staff wage records, overtime logs, and contractor cleaning services payroll.",
      outcome: "Zero labor dispute events, full labor inspector clearance"
    },
    {
      title: "Consumer Dispute Resolution & GRC",
      description: "Deploying retail product warranty trackers, store return policy audits, and consumer complaint logs.",
      outcome: "Stellar rating on national consumer forums, minimized legal exposure"
    },
    {
      title: "Retail Store Fire Safety & EHS",
      description: "Vetting sprinkler systems, fire exit signage, emergency evacuation plans, and municipal fire NOCs.",
      outcome: "Zero fire hazard warnings, safe shopping spaces"
    }
  ],
  "consumer-durables": [
    {
      title: "BEE Energy Star Rating Verification",
      description: "Auditing appliance energy efficiency tests, lab performance databases, and BEE portal registrations.",
      outcome: "BEE energy star certificates, validated energy claims"
    },
    {
      title: "BIS Durables Safety Certification",
      description: "Tracking appliance electrical safety tests, quality control manuals, and BIS certification audits.",
      outcome: "Approved BIS safety mark, guaranteed product trust"
    },
    {
      title: "EPR E-Waste Target Audits",
      description: "Vetting extended producer responsibility (EPR) recycling targets, collector contracts, and e-waste reports.",
      outcome: "Audit-ready EPR certifications, zero electronic waste penalties"
    },
    {
      title: "Durables Plant EHS & Machining Safety",
      description: "Setting up safety logs for plastic moulding shops, press tool safety, and employee health checks.",
      outcome: "Zero plant safety accidents, full Factories Act clearance"
    }
  ],
  textiles: [
    {
      title: "BSCI / GOTS Social Compliance Audits",
      description: "Auditing mill labor working conditions, employee age records, and international buyer code of conduct logs.",
      outcome: "Preferred global exporter status, 100% buyer audit pass"
    },
    {
      title: "Zero Liquid Discharge (ZLD) Dyeing GRC",
      description: "Monitoring water treatment plant water chemistry, boiler ash logs, and SPCB reuse certificates.",
      outcome: "Zero effluent discharge violations, continuous SPCB permits"
    },
    {
      title: "Child Labour Prevention Supply Chain GRC",
      description: "Enforcing raw cotton supplier due diligence, spinning mill checks, and labor age verification logs.",
      outcome: "Certified child-labor-free supply chain, brand protection"
    },
    {
      title: "Textile Mill EHS & Worker Safety",
      description: "Monitoring carding machine safety guards, yarn spinning dust ventilation, and noise levels.",
      outcome: "Safe textile mill floors, zero lung health claims"
    }
  ],
  "food-processing": [
    {
      title: "HACCP Food Safety & ISO 22000 GRC",
      description: "Vetting processing cleanroom hazard analyses, pasteurization heat logs, and critical control points.",
      outcome: "ISO 22000 certification, zero batch recall events"
    },
    {
      title: "Farm-to-Fork Batch Traceability Audits",
      description: "Auditing raw crop supplier certificates, transport cold-chain logs, and batch packing databases.",
      outcome: "100% raw material pedigree tracking, approved export trust"
    },
    {
      title: "Cold-Chain Temperature GRC Telemetry",
      description: "Managing real-time freezer compartment temperature logs, power backup checks, and transit logs.",
      outcome: "Preserved product freshness, zero transit waste claims"
    },
    {
      title: "Food Processing Chemical EHS & SPCB",
      description: "Monitoring raw fruit wash wastewater treatment, chemical sanitizer storage, and organic waste.",
      outcome: "Zero SPCB wastewater discharge warnings, clean audits"
    }
  ],

  // CLUSTER 8: MEDIA & SERVICES
  "media-entertainment": [
    {
      title: "Digital Copyright Registry & IP GRC",
      description: "Auditing content ownership records, licensing agreement registers, and digital rights management (DRM) logs.",
      outcome: "Protected content assets, zero copyright infringement claims"
    },
    {
      title: "Broadcasting Code GRC Regulations",
      description: "Vetting video broadcast advisories, self-regulation compliance logs, and Ministry advisor responses.",
      outcome: "100% broadcasting code compliance, zero warning notices"
    },
    {
      title: "Content Library Privacy & DPDP Data",
      description: "Mapping streaming user subscriber records, consent profiles, and ad target registers.",
      outcome: "DPDP Act compliance, secure subscriber databases"
    },
    {
      title: "Media Production Site EHS & Safety",
      description: "Monitoring temporary set structure certifications, electrical safety rigs, and stunt safety registers.",
      outcome: "Zero production set accidents, valid local body permissions"
    }
  ],
  "tourism-hospitality": [
    {
      title: "Guest Data Privacy & DPDP Consent",
      description: "Encrypting hotel guest passport records, credit card profiles, and mapping marketing consent.",
      outcome: "DPDP compliance, zero hotel guest database leaks"
    },
    {
      title: "Sarai Act & Municipal Hotel GRC",
      description: "Managing Sarai Act registrations, municipal guest logs, and hotel liquor license records.",
      outcome: "100% compliant hotel operations, continuous licenses"
    },
    {
      title: "FSSAI Restaurant Hygiene & Food GRC",
      description: "Monitoring kitchen cleanroom audits, raw food ingredient logs, and FSSAI permit records.",
      outcome: "Clean kitchen hygiene ratings, zero health department warnings"
    },
    {
      title: "Hotel Fire Security & EHS Overwatch",
      description: "Vetting hotel sprinkler systems, fire exit layouts, emergency alarm systems, and municipal fire NOCs.",
      outcome: "Zero fire hazard warnings, safe lodging certifications"
    }
  ],
  aviation: [
    {
      title: "DGCA Crew Flight Hour Limits GRC",
      description: "Auditing pilot flight duration registers, crew rest hour logs, and DGCA reporting schedules.",
      outcome: "Zero crew fatigue regulatory fines, approved flight schedules"
    },
    {
      title: "BCAS Airport Security Protocol GRC",
      description: "Enforcing Bureau of Civil Aviation Security gates access logs, passenger screenings, and cargo checks.",
      outcome: "100% compliant airport security rating, premium flight operations"
    },
    {
      title: "Aircraft Maintenance EHS & Part Trace",
      description: "Auditing aircraft component engineering logs, parts pedigree certifications, and mechanic checkouts.",
      outcome: "Clean airworthiness ratings, zero maintenance safety freezes"
    },
    {
      title: "Ground Staff BOCW safety & EHS",
      description: "Monitoring tarmac worker safety gear logs, aircraft fueling EHS checks, and cargo loader training.",
      outcome: "Safe airport ground operations, zero ground accidents"
    }
  ],
  "education-training": [
    {
      title: "UGC / AICTE Accreditation Prep GRC",
      description: "Compiling university teacher qualification records, classroom library registers, and NAAC accreditation files.",
      outcome: "Top-tier NAAC accreditation rating, continuous UGC grants"
    },
    {
      title: "Student & Parent Database Privacy (DPDP)",
      description: "Encrypting student academic/financial records, parent consent registers, and digital portal logs.",
      outcome: "DPDP compliance, secure academic database portals"
    },
    {
      title: "Institution Fire Safety & Building NOCs",
      description: "Securing school building bye-laws clearances, fire safety NOCs, and playground safety checks.",
      outcome: "Valid local body licenses, safe educational campuses"
    },
    {
      title: "Teacher Payroll & Statutory Audits",
      description: "Auditing school teacher payroll structures, PF contributions, and CLRA wage registries.",
      outcome: "Zero labor inspector complaints, audit-proof payrolls"
    }
  ],
  "agriculture-allied": [
    {
      title: "APEDA Organic Sourcing GRC Audits",
      description: "Auditing crop organic farming records, pesticide testing lab results, and APEDA export certificates.",
      outcome: "APEDA certified organic exporter status, premium pricing"
    },
    {
      title: "Insecticides Act Safe Chemical Use GRC",
      description: "Monitoring chemical fertilizer storage, farm spraying safety guidelines, and pesticide records.",
      outcome: "Safe farm operations, zero food chemical residue warnings"
    },
    {
      title: "Cold-Storage Perishables Compliance",
      description: "Vetting cold-storage compressor logs, temperature monitoring logs, and transport carrier hygiene logs.",
      outcome: "Zero cargo shelf-life loss events, validated logistics logs"
    },
    {
      title: "Farm Labour Welfare & Wage Audits",
      description: "Auditing seasonal harvester wage records, field safety checks, and farm worker housing logs.",
      outcome: "Zero worker dispute events, compliance with agricultural labor codes"
    }
  ]
};
