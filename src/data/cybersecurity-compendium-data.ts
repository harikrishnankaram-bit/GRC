export interface RegulatoryRequirement {
  requirement: string;
  coverage: string;
}

export interface MetricStat {
  kpi: string;
  before: string;
  after: string;
}

export interface SecurityOffering {
  id: string;
  title: string;
  nistFunction: "Govern" | "Identify" | "Protect" | "Detect" | "Respond" | "Recover" | "Cross-cutting";
  offeringNumber: number;
  overview: string;
  statementOfValue: string;
  before: string[];
  situation: string;
  components: string[];
  pentestIntegration: string;
  regulatoryAlignment: RegulatoryRequirement[];
  statistics: MetricStat[];
  benefits: string[];
  timeline: string[];
}

export const securityOfferings: SecurityOffering[] = [
  {
    id: "offering-grc",
    offeringNumber: 1,
    title: "AI Governance, Risk & Compliance (AI-GRC) Platform",
    nistFunction: "Govern",
    overview: "Enterprise-wide AI governance framework covering AI system inventory, risk classification, policy management, accountability structures, regulatory mapping, and board-level AI risk reporting. Aligns with NIST CSF 2.0 Govern function, NIST AI Risk Management Framework (AI RMF), SOC 2 Trust Service Criteria (CC1–CC9), ISO/IEC 42001 (AI Management System), and EU AI Act compliance requirements.",
    statementOfValue: "Establish the governance foundation that every AI deployment, security control, and compliance obligation depends upon.",
    before: [
      "No AI system inventory or classification",
      "Shadow AI usage proliferating across business units",
      "No AI governance policies or accountability structures",
      "Regulatory requirements undefined for AI systems",
      "Board has zero visibility into AI risk posture",
      "No alignment to NIST AI RMF or ISO 42001",
      "AI procurement lacks security gatekeeping"
    ],
    situation: "Organizations deploy GenAI, LLMs, AI agents, and copilots at enterprise scale without governance guardrails. Regulators worldwide — EU AI Act, NIST AI RMF, SEC cyber disclosure rules, DORA for financial services — now mandate documented AI risk management. Without governance, every downstream security control operates in a vacuum.",
    components: [
      "AI System Discovery & Inventory: Automated discovery of LLMs, agents, RAG pipelines, copilots, MCP servers, and model endpoints across the enterprise.",
      "AI Risk Classification & Tiering: Classification per EU AI Act risk levels and business impact analysis.",
      "AI Governance Framework Design: Policy suite including acceptable use, data handling, and RACI matrices.",
      "Regulatory Compliance Mapping: Multi-framework mapping to NIST CSF 2.0, ISO 42001, SOC 2 TSC, DORA, and more.",
      "Board-Level AI Risk Reporting: Executive AI risk dashboard with quantified heat maps and quarterly slide decks."
    ],
    pentestIntegration: "Governance penetration testing: Red team exercises that test whether governance policies actually hold under pressure, including policy bypass simulations, shadow AI injection testing, and model supply chain poisoning simulations.",
    regulatoryAlignment: [
      { requirement: "NIST CSF 2.0 — Govern (GV.OC, GV.RM, GV.RR, GV.PO, GV.SC)", coverage: "Full" },
      { requirement: "NIST AI RMF — Map, Measure, Manage", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC1 (Control Environment), CC2, CC3, CC5", coverage: "Full" },
      { requirement: "ISO/IEC 42001 — AI Management System", coverage: "Full" },
      { requirement: "EU AI Act — Article 9 (Risk Mgmt), Article 17, Article 72", coverage: "Full" },
      { requirement: "DORA — ICT Risk Management Framework", coverage: "Full" },
      { requirement: "FedRAMP — AI System Authorization", coverage: "Mapped" }
    ],
    statistics: [
      { kpi: "AI Asset Visibility", before: "20%", after: "100%" },
      { kpi: "AI Risk Identification", before: "Reactive", after: "Proactive & Continuous" },
      { kpi: "Security Coverage", before: "35%", after: "95%" },
      { kpi: "Compliance Readiness (Multi-Framework)", before: "40%", after: "100%" },
      { kpi: "Shadow AI Detection Rate", before: "0%", after: "95%+" },
      { kpi: "Regulatory Audit Preparation Time", before: "Weeks", after: "Hours" }
    ],
    benefits: [
      "Complete AI system visibility and automated inventory",
      "Enterprise-grade governance framework with clear accountability matrices",
      "Multi-framework regulatory compliance mapped dynamically",
      "Quantified, board-ready AI risk posture dashboards",
      "Shadow AI elimination and automated procurement gatekeeping"
    ],
    timeline: [
      "Weeks 1–2: AI Discovery & Inventory",
      "Weeks 2–4: Risk Classification & Gap Analysis",
      "Weeks 3–6: Governance Framework Design",
      "Weeks 5–8: Regulatory Mapping & Roadmap",
      "Weeks 7–10: Board Reporting & Continuous Monitoring Setup"
    ]
  },
  {
    id: "offering-posture",
    offeringNumber: 2,
    title: "AI Risk Posture Management & Continuous Assessment",
    nistFunction: "Identify",
    overview: "Continuous, automated assessment of enterprise AI systems, infrastructure, and model supply chains to identify vulnerabilities, misconfigurations, data exposure risks, compliance gaps, and emerging AI-specific attack vectors in real time. Integrates AI-driven penetration testing for proactive risk discovery.",
    statementOfValue: "Transform AI risk from an annual snapshot to a real-time, continuously validated security posture.",
    before: [
      "Annual or ad hoc security assessments",
      "Hundreds of AI applications with unknown risk profiles",
      "No continuous monitoring of AI attack surfaces",
      "AI model vulnerabilities discovered only after exploitation",
      "Manual risk assessments cannot keep pace with AI deployment velocity"
    ],
    situation: "Enterprise AI systems change continuously — models are retrained, fine-tuned, agents are modified, RAG knowledge bases are updated, and new integrations are deployed. Point-in-time assessments become obsolete within weeks. Organizations need continuous, AI-powered risk posture management that adapts at the speed of AI development.",
    components: [
      "AI Attack Surface Discovery: Continuous discovery of endpoints, vector databases, and model serving infrastructure.",
      "AI Vulnerability Assessment: Scanning of AI infrastructure, GPU clusters, and model-specific training pipelines.",
      "AI Configuration & Drift Monitoring: Continuous monitoring for configuration drift and model performance degradation.",
      "AI Risk Quantification & Scoring: FAIR-based risk scoring incorporating adversarial threat likelihood.",
      "Continuous Compliance Monitoring: Automated control validation against NIST, SOC 2, and EU AI Act."
    ],
    pentestIntegration: "Continuous AI Penetration Testing as a Service (AI-PTaaS): AI red team agents continuously probe model endpoints, validating exploit paths and reporting severity rankings dynamically.",
    regulatoryAlignment: [
      { requirement: "NIST CSF 2.0 — Identify (ID.AM, ID.RA, ID.IM)", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC3.1, CC3.2, CC3.4", coverage: "Full" },
      { requirement: "ISO 27001 — A.5.9, A.5.23 (Information Security Risk)", coverage: "Full" },
      { requirement: "EU AI Act — Article 9 (Risk Management System)", coverage: "Full" },
      { requirement: "NIST AI RMF — Map 1–4, Measure 1–2", coverage: "Full" },
      { requirement: "DORA — Article 6 (ICT Risk Management)", coverage: "Full" }
    ],
    statistics: [
      { kpi: "AI Asset Visibility", before: "20%", after: "100%" },
      { kpi: "AI Risk Identification", before: "Reactive", after: "Proactive & Continuous" },
      { kpi: "Vulnerability Assessment Frequency", before: "Annual", after: "Continuous" },
      { kpi: "Mean Time to Identify AI Risk", before: "Weeks", after: "Minutes" },
      { kpi: "AI Attack Surface Coverage", before: "15%", after: "95%" },
      { kpi: "Risk Quantification Accuracy", before: "Qualitative Only", after: "FAIR-Quantified" }
    ],
    benefits: [
      "Real-time AI risk posture visibility and automated alerts",
      "Continuous vulnerability discovery and remediation prioritization",
      "Reduced AI attack surface through systematic hardening",
      "Auditor-ready compliance evidence generation"
    ],
    timeline: [
      "Weeks 1–3: AI Discovery & Baseline Assessment",
      "Weeks 2–4: Continuous Monitoring Deployment",
      "Weeks 3–5: AI-Driven Penetration Testing Activation",
      "Weeks 4–6: Risk Quantification & Dashboard Setup",
      "Weeks 5–8: Compliance Monitoring Integration"
    ]
  },
  {
    id: "offering-compliance",
    offeringNumber: 3,
    title: "Regulatory Compliance Management",
    nistFunction: "Govern",
    overview: "Custom mapping and continuous compliance alignment for global regulations (EU AI Act, HIPAA, GDPR, DORA, FedRAMP, CMMC, NCA) mapped to AI infrastructure. Automates control mapping, evidence collection, and gap remediation.",
    statementOfValue: "Navigate the complex global AI regulatory web with automated compliance alignment and audit readiness.",
    before: [
      "Spreadsheet-based, fragmented compliance management",
      "Inability to track compliance across multiple state/national boundaries",
      "Outdated evidence files gathered manually for annual audits",
      "High risk of regulatory fines due to unmapped shadow models"
    ],
    situation: "Global regulators are actively auditing enterprise AI systems. Manual compliance logging across thousands of model endpoints is error-prone, draining security resources and risking severe compliance penalties.",
    components: [
      "Cross-Framework Compliance Engine: Automatic mapping of controls between NIST AI RMF, ISO 42001, and local laws.",
      "Automated Evidence Collection: Continuous scraping of model access logs, training audits, and system settings.",
      "Compliance Gap Remediation: Direct notification and ticketing for drift in control baselines.",
      "Vendor Compliance Vetting: Automatic scanning of third-party AI APIs for regulatory compliance certificates."
    ],
    pentestIntegration: "Compliance bypass testing: Simulated attacks attempting to bypass model safety controls (e.g. data residency locks) to verify that GRC compliance alarms trigger correctly.",
    regulatoryAlignment: [
      { requirement: "EU AI Act — Articles 9, 10, 13, 14, 15, 17, 72", coverage: "Full" },
      { requirement: "GDPR — Articles 22, 25 (Privacy by Design)", coverage: "Full" },
      { requirement: "HIPAA — §164.308 (Administrative Safeguards)", coverage: "Full" },
      { requirement: "DORA — ICT Risk Management & Compliance", coverage: "Full" },
      { requirement: "ISO/IEC 42001 — Annex A (Control Objectives)", coverage: "Full" }
    ],
    statistics: [
      { kpi: "Compliance Alignment Rate", before: "30%", after: "100%" },
      { kpi: "Evidence Collection Duration", before: "Weeks", after: "Real-time / Seconds" },
      { kpi: "Audit Pass Rate", before: "65%", after: "99.8%" },
      { kpi: "Compliance Monitoring Cost", before: "High Overhead", after: "75% Reduction" }
    ],
    benefits: [
      "Elimination of manually compiled compliance binders",
      "Automated drift alerts when AI changes breach regulatory thresholds",
      "Single-pane view of global multi-framework compliance scorecards",
      "Protection from major legal liabilities and statutory fines"
    ],
    timeline: [
      "Weeks 1–2: Compliance Mapping & Scope Definition",
      "Weeks 2–4: Automated Evidence Scraping Setup",
      "Weeks 4–6: Dashboard Integration & Compliance Audit Mock"
    ]
  },
  {
    id: "offering-risk",
    offeringNumber: 4,
    title: "AI Risk Assessment & Threat Modeling",
    nistFunction: "Identify",
    overview: "Proactive threat modeling and comprehensive risk assessments for enterprise AI pipelines, autonomous agents, and training environments using STRIDE-AI and LINDDUN-AI frameworks.",
    statementOfValue: "Identify and intercept architectural design flaws before writing a single line of AI orchestration code.",
    before: [
      "AI systems built with standard application risk models",
      "No security review of model training data pipelines",
      "Lack of STRIDE-AI threat mapping for agents and tools",
      "Unknown risk exposure from public API model integrations"
    ],
    situation: "AI models, agent frameworks, and vectors introduce entirely new data and control flow interfaces. Relying on legacy threat models leaves critical structural vulnerabilities unaddressed, leading to expensive post-deployment rewrites.",
    components: [
      "STRIDE-AI Threat Modeling: Specialized modeling of LLM APIs, agent chains, and vector indexes.",
      "Data Flow Analysis: Tracking training, fine-tuning, retrieval, and inference data pipelines.",
      "Model Risk Profiling: Vetting of weights, training datasets, and dependencies for leakage risks.",
      "Architectural Risk Remediation: Actionable architecture designs to mitigate discovered flaws."
    ],
    pentestIntegration: "Algorithmic validation: Automated validation checks run against threat models to verify that identified mitigations are implemented correctly in the codebase.",
    regulatoryAlignment: [
      { requirement: "NIST CSF 2.0 — Identify (ID.RA)", coverage: "Full" },
      { requirement: "NIST AI RMF — Measure 2.4, 2.6 (Threat Modeling)", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC3.1 (Risk Assessment)", coverage: "Full" },
      { requirement: "ISO 27001 — A.5.23 (Security Risk Assessments)", coverage: "Full" }
    ],
    statistics: [
      { kpi: "Design Flaws Caught Before Dev", before: "10%", after: "90%+" },
      { kpi: "Development Re-work Cost", before: "Severe", after: "60% Reduction" },
      { kpi: "Threat Model Coverage", before: "5%", after: "100%" },
      { kpi: "Risk Assessment Speed", before: "Weeks", after: "Days" }
    ],
    benefits: [
      "Secure-by-design AI workloads minimizing technical debt",
      "Structured risk prioritization aligned to business impact",
      "Complete mapping of training and inference dependencies",
      "Clear developer security requirements prior to coding"
    ],
    timeline: [
      "Weeks 1–2: Architecture Discovery & Scoping",
      "Weeks 2–3: STRIDE-AI Modeling Workshops",
      "Weeks 3–4: Risk Report Delivery & Architecture Approval"
    ]
  },
  {
    id: "offering-architecture",
    offeringNumber: 5,
    title: "AI Security Architecture & Zero Trust for AI",
    nistFunction: "Protect",
    overview: "Design and implementation of security architecture for AI systems grounded in Zero Trust principles — never trust, always verify — applied to AI model serving, agent orchestration, data pipelines, and inference infrastructure. Includes AI-aware network segmentation, identity-centric access controls, and encryption.",
    statementOfValue: "Architect AI systems so that no component — model, agent, data pipeline, or API — operates with implicit trust.",
    before: [
      "AI systems deployed in flat network architectures",
      "Model endpoints accessible without authentication",
      "Agent-to-agent communication unrestricted",
      "Training and inference environments sharing resources",
      "No AI-specific network segmentation"
    ],
    situation: "AI systems introduce new communication patterns — model-to-model, agent-to-agent, agent-to-tool, RAG retrieval-to-inference — that traditional network security architectures do not account for. Zero Trust must extend to every AI interaction.",
    components: [
      "AI Zero Trust Architecture Design: Identity-centric access control for models, agents, and APIs.",
      "AI Network Security Architecture: Network segmentation for training, inference, and data stores.",
      "AI Identity & Access Management: Workload identity management and certificate distribution.",
      "AI Infrastructure Hardening: Hardened GPU clusters, serving platforms (MLflow, Vertex), and MLOps pipelines.",
      "AI-Aware Encryption: Encryption for models at rest, in transit, and secure enclaves."
    ],
    pentestIntegration: "Architecture penetration testing: Simulations of lateral movement within AI infrastructure, attempting privilege escalation from a compromised agent to GPU control networks.",
    regulatoryAlignment: [
      { requirement: "NIST CSF 2.0 — Protect (PR.AA, PR.DS, PR.PS, PR.IR)", coverage: "Full" },
      { requirement: "NIST SP 800-207 (Zero Trust Architecture)", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC6.1, CC6.2, CC6.3, CC6.6", coverage: "Full" },
      { requirement: "ISO 27001 — A.5.15, A.8.20 (Network Security)", coverage: "Full" },
      { requirement: "EU AI Act — Article 15 (Cybersecurity)", coverage: "Full" }
    ],
    statistics: [
      { kpi: "AI Zero Trust Maturity", before: "Level 0", after: "Level 4 (Optimal)" },
      { kpi: "AI Network Segmentation", before: "None", after: "Full Micro-Segmentation" },
      { kpi: "AI Identity Management", before: "Ad Hoc", after: "Enterprise IAM Integration" },
      { kpi: "AI Infrastructure Hardening Score", before: "30%", after: "95%" },
      { kpi: "Lateral Movement Success (Red Team)", before: "80%", after: "<5%" }
    ],
    benefits: [
      "Zero Trust architecture for all AI workloads",
      "Reduced blast radius of AI system compromise",
      "AI-aware network and identity controls",
      "Hardened AI infrastructure and encrypted model weights"
    ],
    timeline: [
      "Weeks 1–3: Network & IAM Boundary Assessment",
      "Weeks 2–6: Micro-segmentation & IAM Controls Deployment",
      "Weeks 6–10: Validation Audits & Penetration Testing"
    ]
  },
  {
    id: "offering-llm",
    offeringNumber: 6,
    title: "AI Security for LLMs, Agents, RAG & Copilots",
    nistFunction: "Protect",
    overview: "End-to-end security architecture, hardening, and protective controls for the enterprise GenAI stack — LLMs, AI agents, RAG pipelines, copilots, MCP servers, vector databases, embedding services, model serving platforms, and autonomous workflows. Implements defense-in-depth across the entire AI lifecycle.",
    statementOfValue: "Secure the entire AI lifecycle — from data ingestion through model training, deployment, inference, and agent action.",
    before: [
      "LLMs deployed without input validation or output filtering",
      "AI agents with unrestricted tool access and no guardrails",
      "RAG pipelines with unprotected knowledge bases",
      "Vector databases accessible without authentication",
      "No secure prompt engineering practices"
    ],
    situation: "Enterprise GenAI deployments create a layered attack surface spanning data, models, APIs, orchestration layers, and autonomous agent actions. Each layer requires specialized security controls that traditional application security does not address.",
    components: [
      "LLM Security Hardening: Input validation, output filtering, and system prompt protection.",
      "AI Agent Security: Principle of least privilege for tools, sandboxing, and kill switches.",
      "RAG Pipeline Security: Knowledge base integrity, chunking security, and query sanitization.",
      "Copilot & Assistant Security: Scoped data access, sensitive data redaction, and audit logs.",
      "MCP Server & Plugin Security: Authentication, authorization, and supply chain integrity."
    ],
    pentestIntegration: "GenAI exploitation testing: Simulated multi-turn jailbreaks, prompt injection scripts, RAG database poisoning, and model weight extraction simulations.",
    regulatoryAlignment: [
      { requirement: "NIST CSF 2.0 — Protect (PR.AA, PR.DS, PR.PS)", coverage: "Full" },
      { requirement: "NIST AI RMF — Manage 1.1–1.4, 2.1–2.7, 3.1–3.5", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC6.1, CC6.2, CC6.3, CC6.8", coverage: "Full" },
      { requirement: "ISO 27001 — A.8.24, A.8.25 (Secure Development)", coverage: "Full" },
      { requirement: "EU AI Act — Article 10 (Data Governance), Article 15", coverage: "Full" },
      { requirement: "OWASP Top 10 for LLMs — All Categories", coverage: "Full" }
    ],
    statistics: [
      { kpi: "Prompt Injection Success Rate", before: "60%", after: "<5%" },
      { kpi: "Data Leakage Risk", before: "High", after: "Low" },
      { kpi: "Agent Security Controls", before: "Limited", after: "Enterprise-Grade" },
      { kpi: "RAG Pipeline Security", before: "Unprotected", after: "Defense-in-Depth" },
      { kpi: "OWASP LLM Top 10 Coverage", before: "10%", after: "100%" },
      { kpi: "AI API Abuse Detection", before: "None", after: "Real-Time" }
    ],
    benefits: [
      "Secure AI deployments from model weights to agentic tools",
      "Defense-in-depth across the entire GenAI stack",
      "Protection of proprietary IP, models, and private datasets",
      "Enterprise trust for deploying autonomous agentic workflows"
    ],
    timeline: [
      "Weeks 1–2: GenAI Architecture Security Review",
      "Weeks 2–5: LLM & RAG Security Hardening",
      "Weeks 4–7: Agent Security Architecture & Controls",
      "Weeks 6–8: API & Integration Security",
      "Weeks 7–9: Data Security & Privacy Controls",
      "Weeks 8–10: Validation & Launch"
    ]
  },
  {
    id: "offering-hunting",
    offeringNumber: 7,
    title: "Autonomous Threat Hunting Platform",
    nistFunction: "Detect",
    overview: "Deploy AI-driven autonomous threat hunters that continuously search for indicators of compromise, anomalous behaviors, insider threats, ransomware activity, advanced persistent threats, and AI-specific threat indicators across the enterprise environment. Powered by behavioral analytics, machine learning, and autonomous AI reasoning.",
    statementOfValue: "Find attackers before they trigger an incident — hunt threats proactively, not reactively.",
    before: [
      "Threat hunting is manual, ad hoc, and analyst-dependent",
      "Limited hunting coverage (20% of environment)",
      "High false positive rates consuming analyst time",
      "Insider threats discovered weeks or months after activity",
      "AI-specific threats not monitored"
    ],
    situation: "Sophisticated attackers evade automated detection by living off the land, using legitimate credentials, and exploiting trusted processes. AI-specific threats — model compromise, data poisoning, agent manipulation — generate subtle indicators that traditional detection misses entirely. Autonomous AI threat hunters can continuously generate and test hypotheses at machine scale.",
    components: [
      "Autonomous Hypothesis Generation: AI-generated hunting plans based on real-time threat intelligence.",
      "Behavioral Analytics & Anomaly Detection: Baseline user and entity behavior for AI systems.",
      "AI-Specific Threat Hunting: Monitoring logs for prompt injection patterns and data poisoning.",
      "Insider Threat Hunting: Analysis of privileged users and anomalous data access.",
      "APT Hunting: Continuous tracking of nation-state TTPs and command-and-control channels."
    ],
    pentestIntegration: "Hunting coverage validation: Simulated adversarial activities (living off the land, model manipulation) run against telemetry systems to verify that threat hunters trigger correct hypotheses.",
    regulatoryAlignment: [
      { requirement: "NIST CSF 2.0 — Detect (DE.AE, DE.CM)", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC4.1 (Monitoring), CC7.1, CC7.2", coverage: "Full" },
      { requirement: "ISO 27001 — A.5.25, A.8.16 (Monitoring)", coverage: "Full" },
      { requirement: "DORA — Article 10 (Detection)", coverage: "Full" },
      { requirement: "NIST SP 800-53 — SI-4 (System Monitoring)", coverage: "Full" }
    ],
    statistics: [
      { kpi: "Threat Discovery Time", before: "Weeks", after: "Hours" },
      { kpi: "False Positives", before: "High", after: "Reduced 70%" },
      { kpi: "Threat Hunting Coverage", before: "20%", after: "95%" },
      { kpi: "Insider Threat Detection", before: "Limited", after: "Continuous" },
      { kpi: "APT Dwell Time", before: "200+ Days", after: "<30 Days" },
      { kpi: "Hunting Hypotheses per Week", before: "5–10", after: "500+" }
    ],
    benefits: [
      "Early threat detection before incident impact",
      "Proactive, data-driven defense posture",
      "Comprehensive environment visibility and logs",
      "Substantially reduced analyst workload through automated hypothesis testing"
    ],
    timeline: [
      "Weeks 1–2: Telemetry Integration & Baseline",
      "Weeks 2–4: Hunting Hypothesis & Playbook Development",
      "Weeks 3–6: AI Hunter Deployment & Tuning",
      "Weeks 5–8: Validation & Optimization"
    ]
  },
  {
    id: "offering-bas",
    offeringNumber: 8,
    title: "AI-Driven Breach & Attack Simulation Platform (AI-BAS)",
    nistFunction: "Detect",
    overview: "Continuous, AI-powered simulation of real-world attack scenarios — ransomware, phishing, insider threats, lateral movement, privilege escalation, cloud attacks, AI-specific attacks, and nation-state TTPs — across the entire enterprise environment to continuously validate security defenses and identify exploitable attack paths.",
    statementOfValue: "Continuously validate that every security control works — using AI attackers that never sleep.",
    before: [
      "Annual penetration testing as the only validation",
      "Security controls untested between assessments",
      "Unknown detection gaps across the kill chain",
      "Security investments unable to demonstrate ROI"
    ],
    situation: "Attackers operate continuously. A single annual penetration test leaves 364 days of unvalidated security exposure. AI-BAS provides continuous, automated attack simulation that validates every security control, detects configuration drift, and quantifies security effectiveness in real time.",
    components: [
      "Continuous Attack Simulation Engine: Automated simulation of the MITRE ATT&CK kill chain.",
      "AI-Specific Attack Simulation: Fuzzing LLMs, simulating RAG database poisoning, and agent tools abuse.",
      "Attack Path Analysis: Graph visualization showing all viable paths to database targets.",
      "Defense Validation: Detection coverage mapping indicating which firewall/EDR rules blocked or missed.",
      "Continuous Security Benchmarking: Quantified security effectiveness scores over time."
    ],
    pentestIntegration: "Automated penetration testing at scale: Autonomous agents adapt payloads dynamically based on defensive system responses, mimicking human red team tactics synchronously.",
    regulatoryAlignment: [
      { requirement: "NIST CSF 2.0 — Detect (DE.AE, DE.CM), Identify (ID.RA)", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC4.1, CC7.1, CC7.2, CC7.3", coverage: "Full" },
      { requirement: "ISO 27001 — A.5.24, A.8.16 (Monitoring)", coverage: "Full" },
      { requirement: "DORA — Article 25 (ICT Testing), Article 26 (TLPT)", coverage: "Full" },
      { requirement: "PCI-DSS 4.0 — Requirement 11.3 (Penetration Testing)", coverage: "Full" }
    ],
    statistics: [
      { kpi: "Security Validation Frequency", before: "Annual", after: "Daily" },
      { kpi: "Attack Coverage (MITRE ATT&CK)", before: "15%", after: "95%" },
      { kpi: "Detection Gaps", before: "Unknown", after: "Identified & Prioritized" },
      { kpi: "Security Effectiveness Score", before: "60%", after: "95%" },
      { kpi: "Mean Validation Time", before: "Weeks", after: "Minutes" },
      { kpi: "Attack Path Visibility", before: "None", after: "Full Graph" }
    ],
    benefits: [
      "Continuous, automated security validation 24/7",
      "Real-time identification of misconfigurations and detection gaps",
      "Complete MITRE ATT&CK and ATLAS coverage",
      "Board-level risk and defense effectiveness dashboards"
    ],
    timeline: [
      "Weeks 1–3: Environment Profiling & Integration",
      "Weeks 2–4: Attack Scenario Configuration",
      "Weeks 3–5: AI Attack Agent Deployment",
      "Weeks 4–6: Dashboard & Reporting Setup",
      "Ongoing: Continuous Simulation & Tuning"
    ]
  },
  {
    id: "offering-mdr",
    offeringNumber: 9,
    title: "AI Managed Detection & Response (AI-MDR)",
    nistFunction: "Respond",
    overview: "AI-powered Managed Detection and Response service leveraging autonomous threat analysis, behavioral analytics, attack correlation, automated triage, intelligent investigation, and response orchestration — operating 24x7x365 with AI analysts augmenting human expertise.",
    statementOfValue: "Detect and respond to threats at machine speed, with human expertise where it matters most.",
    before: [
      "Severe SOC analyst shortage causing alert backlogs",
      "Alert fatigue overwhelming the security team",
      "Mean time to detect (MTTD) measured in hours/days",
      "Mean time to respond (MTTR) measured in days/weeks",
      "Traditional MDR lacking AI-specific monitoring capabilities"
    ],
    situation: "Enterprise security operations generate millions of daily events. Human analysts cannot keep pace. AI-MDR combines autonomous AI analysts that handle L1 triage, L2 investigation, and initial response with human experts providing strategic oversight, complex incident handling, and adversarial resilience.",
    components: [
      "AI-Powered Detection Engine: Multi-signal correlation across endpoints, network, cloud, identity, and AI pipelines.",
      "Autonomous Triage & Investigation: AI analyst alert triage automating L1 checks by over 80%.",
      "Automated Response Orchestration: Host isolation, credential revoking, and RAG database quarantine.",
      "24x7 Expert Oversight: Human experts providing strategic incident handling and post-incident forensics."
    ],
    pentestIntegration: "Rule validation: Automated attack payloads injected continuously to verify that EDR rules and SOAR response playbooks execute correctly under pressure.",
    regulatoryAlignment: [
      { requirement: "NIST CSF 2.0 — Detect (DE.AE, DE.CM), Respond (RS.AN, RS.MI, RS.CO)", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC7.1, CC7.2, CC7.3, CC7.4", coverage: "Full" },
      { requirement: "ISO 27001 — A.5.24, A.5.25, A.5.26 (Incident Response)", coverage: "Full" },
      { requirement: "DORA — Article 10, Article 11 (Response & Recovery)", coverage: "Full" },
      { requirement: "PCI-DSS 4.0 — Requirement 12.10 (Incident Response)", coverage: "Full" }
    ],
    statistics: [
      { kpi: "Mean Time to Detect (MTTD)", before: "8 Hours", after: "5 Minutes" },
      { kpi: "Mean Time to Respond (MTTR)", before: "2 Days", after: "20 Minutes" },
      { kpi: "L1 Triage Automation Rate", before: "0%", after: "80%+" },
      { kpi: "SOC Operations Cost", before: "Extremely High", after: "Optimized (50% reduction)" },
      { kpi: "AI-Specific Threat Visibility", before: "None", after: "Comprehensive" }
    ],
    benefits: [
      "Machine-speed threat detection and containment",
      "Completely eliminated alert fatigue for the internal security team",
      "Cost-optimized 24/7/365 coverage backed by strict SLA guarantees",
      "Specialized monitoring for GenAI, LLMs, and agentic workflows"
    ],
    timeline: [
      "Weeks 1–2: Log Telemetry & API Integration",
      "Weeks 2–4: Automated Playbook Mapping",
      "Weeks 4–6: AI Agent Tuning & Live MDR Launch"
    ]
  },
  {
    id: "offering-soc",
    offeringNumber: 10,
    title: "Agentic SOC & Autonomous Security Operations",
    nistFunction: "Respond",
    overview: "Fully automated, agentic Security Operations Center (SOC) utilizing autonomous LLM-based security analysts to correlate cross-telemetry alerts, run playbooks, execute memory analysis, isolate hosts, and remediate incidents autonomously.",
    statementOfValue: "Shift from human-reliant, ticket-chasing SOC structures to self-driving, agent-coordinated cyber defense.",
    before: [
      "Security analysts spending hours writing tickets and chasing false positives",
      "Fragmented security tools requiring manual data compilation and correlation",
      "Slow incident response cycles allowing ransomware to spread laterally"
    ],
    situation: "Modern adversaries deploy automated, AI-driven exploit tools that move faster than human SOC analysts can type. Defensive operations must achieve machine speed. Agentic SOC uses groups of collaborative LLM agents to investigate, contain, and remediate alerts in seconds.",
    components: [
      "Multi-Agent Coordination Engine: Auto-dispatching specialized agents (correlator, forensic agent, firewall agent).",
      "Autonomous Log Correlation: Parsing SIEM, cloud trail, and identity logs synchronously.",
      "Self-Healing Containment: Millisecond-level automated host isolation and API token revocation.",
      "Human-in-the-Loop Gateway: Modern notification cards allowing human approval for high-risk containment actions."
    ],
    pentestIntegration: "Agent robustness testing: Purple team simulations attempting to deceive the SOC agents via indirect prompt injections embedded in server logs to ensure resilience against manipulation.",
    regulatoryAlignment: [
      { requirement: "NIST CSF 2.0 — Respond (RS.AN, RS.MI, RS.CO)", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC7.2 (Anomaly Evaluation), CC7.3 (Response)", coverage: "Full" },
      { requirement: "ISO 27001 — A.5.25 (Assessment & Decision on InfoSec Events)", coverage: "Full" },
      { requirement: "DORA — Article 11 (Response & Mitigation)", coverage: "Full" }
    ],
    statistics: [
      { kpi: "Incident Containment Speed", before: "Hours", after: "Seconds" },
      { kpi: "Triage Automation Rate", before: "5%", after: "99.2%" },
      { kpi: "SOC Operating Overhead", before: "Severe", after: "70% Reduction" },
      { kpi: "Playbook Execution Time", before: "Minutes", after: "Milliseconds" }
    ],
    benefits: [
      "Autonomous 24/7 incident investigation and containment",
      "Drastic reduction in MTTR to prevent ransomware propagation",
      "Substantial savings in security staff overhead and recruiting costs",
      "Self-optimizing playbooks that learn from historical alert context"
    ],
    timeline: [
      "Weeks 1–3: Agent Orchestration Engine Setup",
      "Weeks 3–6: Tool Integrations & Playbook Mapping",
      "Weeks 6–8: Parallel Sandbox Testing & Guardrail Calibration",
      "Week 8+: Full Production Autonomy"
    ]
  },
  {
    id: "offering-incident",
    offeringNumber: 11,
    title: "AI Incident Response & Recovery",
    nistFunction: "Recover",
    overview: "Pre-engineered playbook blueprints, backup isolation protocols, and specialized response procedures tailored specifically for AI system failures, data poisoning, prompt injection breaches, and model hijacking incidents.",
    statementOfValue: "Ensure business continuity and rapid recovery when core enterprise AI services are compromised or poisoned.",
    before: [
      "Disaster recovery plans neglecting model weights and vector store indexes",
      "No process for identifying or sanitizing poisoned training datasets",
      "Model restoration requiring full, resource-heavy retrain cycles"
    ],
    situation: "When production models are hijacked or training data is poisoned, companies suffer severe reputational damage. Recovering from an AI-specific incident requires dedicated frameworks to cleanse vector embeddings, audit checkpoints, and restore model parameters cleanly.",
    components: [
      "AI-Specific Incident Playbooks: Action-ready playbooks for prompt injection and weight theft.",
      "Vector DB Cleanse & Restore: Scraping poisoned node embeddings and restoring sanitized snapshots.",
      "Model Checkpoint Vetting: Auditing model registry versions to identify the exact injection timestamp.",
      "Training Data Sanitization: Automatic detection of anomalous patterns in upstream training buffers."
    ],
    pentestIntegration: "DR Simulation: Adversarially injecting malicious files into training pipelines to test if the recovery system detects, isolates, and rolls back the database within SLA thresholds.",
    regulatoryAlignment: [
      { requirement: "NIST CSF 2.0 — Recover (RC.RP, RC.CO)", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC7.4 (System Recovery)", coverage: "Full" },
      { requirement: "ISO 27001 — A.5.26 (Response to Information Security Incidents)", coverage: "Full" },
      { requirement: "DORA — Article 11 (ICT Business Continuity Policy)", coverage: "Full" }
    ],
    statistics: [
      { kpi: "Model Restoration Time", before: "Days", after: "Minutes" },
      { kpi: "Vector Index Cleanse Accuracy", before: "Manual/Uncertain", after: "100%" },
      { kpi: "Business Disruption Duration", before: "Significant", after: "Minimized" },
      { kpi: "Incident Forensic Discovery Time", before: "Weeks", after: "Hours" }
    ],
    benefits: [
      "Minimized downtime for client-facing generative AI tools",
      "Guaranteed data and model weights restoration with zero corruption",
      "Statutory compliance for business continuity during AI disruptions",
      "Clean forensic evidence trails for insurance and regulatory reporting"
    ],
    timeline: [
      "Weeks 1–2: Model Asset Dependency Inventory",
      "Weeks 2–4: AI DR Playbook & Rollback Mapping",
      "Weeks 4–6: Simulation Drills & SLA Validation"
    ]
  },
  {
    id: "offering-pentesting",
    offeringNumber: 12,
    title: "AI-Driven Penetration Testing & Continuous Red Teaming",
    nistFunction: "Cross-cutting",
    overview: "Continuous offensive testing utilizing automated AI agents to discover vulnerabilities across all endpoints, APIs, and microservices. Blends automated exploit scripts with strategic human red teaming. Actively tests model extraction, prompt injections, and container escape paths.",
    statementOfValue: "Attain a continuous hacker's-eye view of your entire enterprise attack surface, 24/7/365.",
    before: [
      "Point-in-time assessments leaving security gaps unexposed for months",
      "Scanners failing to find complex multi-step logical exploit chains",
      "No security validation of new container or API deployments between audits"
    ],
    situation: "Enterprise codebases and cloud configurations change daily. Standard point-in-time penetration tests become obsolete immediately. Continuous, automated agentic pentesting is required to catch vulnerabilities before threat actors exploit them.",
    components: [
      "Autonomous Exploit Agents: Automated LLM agents executing scans and payload injections.",
      "Multi-Step Attack Graphing: Mapping and validating complex multi-hop lateral movements.",
      "API & Model Fuzzing: Intelligent input payload crafting to stress model boundaries.",
      "Purple Team Integration: Dynamic sharing of exploit paths with detection filters for SIEM tuning."
    ],
    pentestIntegration: "This offering acts as the active offensive engine powering other continuous validation and threat hunting services across the enterprise portfolio.",
    regulatoryAlignment: [
      { requirement: "NIST CSF 2.0 — Identify (ID.RA), Protect (PR.DS)", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC7.1, CC4.1 (Continuous Monitoring)", coverage: "Full" },
      { requirement: "DORA — Article 26 (Threat-Led Penetration Testing)", coverage: "Full" },
      { requirement: "PCI-DSS 4.0 — Requirement 11.3 (Penetration Testing)", coverage: "Full" }
    ],
    statistics: [
      { kpi: "Vulnerability Exposure Window", before: "Months", after: "Minutes" },
      { kpi: "Adversarial Exploit Success Rate", before: "85%", after: "<2%" },
      { kpi: "Security Assessment Frequency", before: "Annual", after: "Real-Time" },
      { kpi: "Exploit Path Mapping Duration", before: "Days/Weeks", after: "Minutes" }
    ],
    benefits: [
      "Real-time visibility into active exploit paths across cloud networks",
      "Vulnerability validation prior to code merges and production builds",
      "Reduced regulatory audit costs through automated pentest reporting",
      "Comprehensive MITRE ATT&CK and ATLAS validation logs"
    ],
    timeline: [
      "Weeks 1–2: Attack Surface Discovery & Target Scoping",
      "Weeks 2–3: Pentest Agent Deployment & Baseline Runs",
      "Weeks 3–4: Purple Team Dashboard Setup & Automation Handover"
    ]
  },
  {
    id: "offering-sovereign",
    offeringNumber: 13,
    title: "Sovereign AI & Private Infrastructure Security",
    nistFunction: "Govern",
    overview: "Hardened architectural frameworks for deploying sovereign, on-premise, or private-cloud AI models (LLMs/RAG) to ensure strict data residency, eliminate third-party API exposure, and enforce maximum operational isolation.",
    statementOfValue: "Run advanced generative AI workloads without ever letting sensitive enterprise data touch public internet gateways or third-party servers.",
    before: [
      "Customer data sent to public AI endpoints risking leakage",
      "No control over training dataset sourcing or model weights",
      "Inability to run generative workloads in air-gapped zones"
    ],
    situation: "Highly regulated industries — defense, healthcare, government, and finance — are legally barred from sending sensitive data to public cloud AI APIs. Deploying private AI models requires hardened hardware, air-gapped container security, and isolated GPU architectures.",
    components: [
      "Air-Gapped Model Hardening: Custom container security and network firewalls for local weights.",
      "GPU Hardware Isolation: Hardening virtualized GPU workloads and node clusters.",
      "Local Vector Database Hardening: Enforcing encryption and RBAC logs on local vector storage.",
      "Model weights protection: Cryptographic wrapping of local model files to prevent weights theft."
    ],
    pentestIntegration: "Air-gap escape simulation: Offensive agents attempting to exfiltrate dummy data from within air-gapped training pods to external IP addresses.",
    regulatoryAlignment: [
      { requirement: "GDPR — Data Residency & Auditing", coverage: "Full" },
      { requirement: "EU AI Act — Sovereign Model Requirements", coverage: "Full" },
      { requirement: "NCA (National Cybersecurity Authority) Standards", coverage: "Full" },
      { requirement: "HIPAA — Patient Data Privacy Rules", coverage: "Full" },
      { requirement: "FedRAMP High — Private Infrastructure Guidelines", coverage: "Full" }
    ],
    statistics: [
      { kpi: "External Data Leak Risk", before: "Severe", after: "0%" },
      { kpi: "Public Cloud API Dependencies", before: "100%", after: "0%" },
      { kpi: "GPU Cluster Security Baseline", before: "30%", after: "98%" },
      { kpi: "Auditable Data Custody", before: "Fragmented", after: "100% Traceable" }
    ],
    benefits: [
      "Absolute control over enterprise model files and datasets",
      "Compliance with sovereign data residency and regional privacy laws",
      "Protection from model provider terms-of-service changes",
      "Air-gapped model execution for defense-grade security zones"
    ],
    timeline: [
      "Weeks 1–2: Air-Gap Architecture & Hardware Audit",
      "Weeks 2–5: Hardened Model Container Deployment",
      "Weeks 5–7: Leak Simulation & Penetration Testing Review"
    ]
  },
  {
    id: "offering-range",
    offeringNumber: 14,
    title: "AI Security Cyber Range & Simulation Training",
    nistFunction: "Recover",
    overview: "A sandboxed replication of your enterprise AI infrastructure, allowing security teams, developers, and incident responders to practice defending against prompt injections, model extraction, and poisoned datasets.",
    statementOfValue: "Train your security staff to identify and respond to complex machine learning attack vectors in a safe environment.",
    before: [
      "Defenders unfamiliar with AI-specific attack vectors (membership inference, prompt injection)",
      "Incident response team practicing playbooks during live breaches",
      "High delay in security response for model vulnerabilities"
    ],
    situation: "AI security requires highly specialized technical skills. Responders cannot afford to learn on the job during a live model breach. Organizations need dedicated cyber ranges to run realistic simulations of adversarial AI attacks.",
    components: [
      "Sandboxed Infrastructure Replication: Mimicking company APIs, vector dbs, and container meshes.",
      "Adversarial Attack Simulation: Pre-built attack injection scenarios (data poisoning, model theft).",
      "Developer Defense Labs: Training developers on input sanitization and secure system prompts.",
      "Response Speed Training: Timing team responses against metric-based benchmarks."
    ],
    pentestIntegration: "Training sparring: AI exploit agents integrated directly into cyber range zones, adapting attack profiles as defenders build mitigations.",
    regulatoryAlignment: [
      { requirement: "NIST CSF 2.0 — Recover (RC.CO), Identify (ID.RA)", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC7.3 (Response and Recovery Training)", coverage: "Full" },
      { requirement: "DORA — Article 13 (ICT Training & Drills)", coverage: "Full" }
    ],
    statistics: [
      { kpi: "Incident Response Team Preparedness", before: "Low", after: "High (95% pass)" },
      { kpi: "Mean Time to Contain live AI Incidents", before: "Days", after: "Minutes" },
      { kpi: "Developer Security Defense Accuracy", before: "35%", after: "92%" },
      { kpi: "Training Program Compliance Rate", before: "Ad Hoc", after: "100%" }
    ],
    benefits: [
      "Security teams skilled in machine learning offense and defense",
      "Validated, benchmarked incident response playbooks",
      "Reduced developer errors in GenAI deployments",
      "Audit-ready logs of training exercises for regulatory agencies"
    ],
    timeline: [
      "Weeks 1–3: Range Infrastructure Alignment",
      "Weeks 3–5: Attack Campaign Simulation Setup",
      "Weeks 5–7: Active Drills & Performance Vetting"
    ]
  },
  {
    id: "offering-quantum",
    offeringNumber: 15,
    title: "Quantum-Safe Readiness & Post-Quantum Cryptography",
    nistFunction: "Protect",
    overview: "Strategic transition framework and cryptographic engineering to secure enterprise AI models, API keys, training data pipelines, and encrypted databases against decryption attacks from quantum computers using NIST Post-Quantum Cryptography (PQC) standards.",
    statementOfValue: "Safeguard your enterprise AI intellectual property and long-term data logs against the future 'Store Now, Decrypt Later' quantum threat.",
    before: [
      "All models, keys, and log files encrypted with legacy RSA/ECC algorithms",
      "Encrypted communications vulnerable to future decryption by quantum hardware",
      "No strategic roadmap for NIST post-quantum cryptography transition"
    ],
    situation: "Adversaries are currently capturing and storing encrypted data flows. Once cryptographically relevant quantum computers become operational, legacy encryption will be broken instantly. AI databases containing proprietary training data and API keys must adopt post-quantum algorithms now.",
    components: [
      "Cryptographic Discovery & Inventory: Auditing all encryption methods across AI nodes.",
      "PQC Migration Mapping: Aligning transition plans to NIST PQC standards (Kyber/ML-KEM, Dilithium).",
      "Model File Encryption: Post-quantum wrapping for exported model checkpoints.",
      "Quantum-Resilient Key Exchange: Upgrading network transport layers to hybrid PQC protocols."
    ],
    pentestIntegration: "Weakness scanning: Crawling endpoints to detect legacy, quantum-vulnerable TLS configurations and certificate types.",
    regulatoryAlignment: [
      { requirement: "NIST PQC Standards (ML-KEM, ML-DSA, FN-DSA)", coverage: "Full" },
      { requirement: "White House National Security Memorandum 10 (NSM-10)", coverage: "Full" },
      { requirement: "DORA — ICT Cryptographic Controls", coverage: "Full" },
      { requirement: "FedRAMP High — Quantum Readiness Mandate", coverage: "Full" }
    ],
    statistics: [
      { kpi: "Quantum-Resilient Cryptographic Coverage", before: "0%", after: "100%" },
      { kpi: "Quantum Decryption Exposure Risk", before: "Critical", after: "Remediated" },
      { kpi: "Cryptographic Asset Inventory Accuracy", before: "20%", after: "100%" },
      { kpi: "Migration Speed to PQC Protocols", before: "Unplanned", after: "Accelerated (90 days)" }
    ],
    benefits: [
      "Protection of critical model intellectual property from future decryption",
      "Early alignment to statutory quantum-safe compliance mandates",
      "Future-proof security architecture for long-term customer data logs",
      "Quantum-hardened API gateways and model communications"
    ],
    timeline: [
      "Weeks 1–3: Cryptographic Discovery & Audit",
      "Weeks 3–6: Hybrid PQC Algorithmic Trial",
      "Weeks 6–9: Production Migration & Certifications Verification"
    ]
  }
];

export const nistFunctionsList = [
  { id: "Govern", label: "Govern (GV)", color: "rose", offerings: [1, 3, 13] },
  { id: "Identify", label: "Identify (ID)", color: "blue", offerings: [2, 4] },
  { id: "Protect", label: "Protect (PR)", color: "emerald", offerings: [5, 6, 15] },
  { id: "Detect", label: "Detect (DE)", color: "amber", offerings: [7, 8] },
  { id: "Respond", label: "Respond (RS)", color: "purple", offerings: [9, 10] },
  { id: "Recover", label: "Recover (RC)", color: "indigo", offerings: [11, 14] },
  { id: "Cross-cutting", label: "Cross-cutting (CC)", color: "cyan", offerings: [12] }
];
