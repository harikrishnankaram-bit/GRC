export interface StaffingService {
  id: string;
  title: string;
  description: string;
  features: string[];
  idealFor: string;
  slaTarget: string;
}

export const staffingData: StaffingService[] = [
  {
    id: "managed-staffing",
    title: "Managed Staffing (SLA-Based)",
    description: "End-to-end workforce management with defined SLAs for recruitment, onboarding, performance, and offboarding. We assume full accountability for outcomes, keeping your operations fully staffed and productive.",
    features: [
      "Dedicated account manager and single-point operations support.",
      "SLA-backed candidate fill-rates (e.g. >95% within 10 days).",
      "Interactive client dashboards for tracking real-time retention and SLAs.",
      "Statutory compliance and payroll fully integrated into workflows."
    ],
    idealFor: "Enterprises needing scalable, predictable workforce with full operational accountability.",
    slaTarget: "98% Fill Rate"
  },
  {
    id: "contingency-staffing",
    title: "Contingency Staffing",
    description: "Rapid deployment of pre-vetted, qualified talent to handle sudden project peaks, seasonal demands, or unexpected attrition without long-term overhead.",
    features: [
      "48-72 hour deployment SLA for key pre-screened roles.",
      "Access to extensive talent pools matched by skill, sector, and shift.",
      "Flexible engagement contracts (weekly, monthly, or quarterly).",
      "Immediate candidate replacement guarantees."
    ],
    idealFor: "Project-based deliverables, seasonal spikes, or temporary backup support.",
    slaTarget: "48-72 Hour Turnaround"
  },
  {
    id: "temporary-staffing",
    title: "Temporary / Contract Staffing",
    description: "Short-to-mid term contract staffing for fixed-duration needs. We handle full statutory compliance, contract creation, benefits, and employee relations.",
    features: [
      "Contract design and statutory legal audits.",
      "100% PF, ESIC, Professional Tax, and LWF compliance managed under Govenics.",
      "Simple, predictable fee structures per hire.",
      "Smooth employee transition and offboarding workflows."
    ],
    idealFor: "Maternity cover, project contracts, or interim technical assignments.",
    slaTarget: "100% Legal Clearance"
  },
  {
    id: "rpo",
    title: "Recruitment Process Outsourcing (RPO)",
    description: "Full outsourcing of your company's recruitment function — from candidate sourcing, screening, scheduling, interviewing, and background checks to final onboarding.",
    features: [
      "Dedicated Govenics recruitment task force acting as your internal brand.",
      "Integration of advanced Applicant Tracking Systems (ATS) and databases.",
      "Active candidate sourcing and employer branding strategies.",
      "Under 20% average drop-out rates from offer to joining."
    ],
    idealFor: "Companies scaling up rapidly or seeking to streamline high-volume hiring.",
    slaTarget: "↓ 40% Hiring Costs"
  },
  {
    id: "payroll-compliance",
    title: "Payroll & Statutory Compliance Staffing",
    description: "Staffing solutions with integrated, automatic payroll processing and complex statutory compliance monitoring. Ideal to keep remote and large workforces fully legal.",
    features: [
      "Automated salary processing with real-time tax deductions.",
      "Dynamic reporting for PF, ESIC, PT, and local Labor Welfare Funds (LWF).",
      "Mobile-friendly employee self-service portals (payslips, tax forms).",
      "Dedicated labor law audit liaison during regulatory checks."
    ],
    idealFor: "Organizations seeking to minimize HR compliance overhead and penalty risks.",
    slaTarget: "Zero Compliance Errors"
  },
  {
    id: "industry-specific",
    title: "Industry-Specific Staffing",
    description: "Pre-trained talent pools customized for regulated roles: compliance officers, industrial safety experts, bank operators, clinical coordinators, and security leads.",
    features: [
      "Vested candidate pools with verified sector certifications.",
      "Intense regulatory training (e.g. HIPAA, factories safety, RBI circulars).",
      "Customized industry onboarding frameworks.",
      "Candidates possessing prior domain experience."
    ],
    idealFor: "Highly regulated industries requiring immediately productive, compliance-aware talent.",
    slaTarget: "100% Domain Pre-Vetted"
  },
  {
    id: "compliance-first",
    title: "Compliance-First Staffing",
    description: "High-trust hiring solutions where every single candidate undergoes deep background verification, credential authentication, and criminal checks before selection.",
    features: [
      "Pre-onboarding Aadhaar, PAN, and address verifications.",
      "Professional certificate validation (e.g. CISA, CISM, chartered profiles).",
      "Detailed police record checks and address validation.",
      "Secure, tamper-proof background reports delivered to clients."
    ],
    idealFor: "Highly secure or regulated sectors: BFSI, healthcare, government, and aerospace hubs.",
    slaTarget: "Triple-Layer Verification"
  }
];

export const staffingIntegrations = [
  "Statutory compliance (PF, ESIC, PT, LWF) managed end-to-end under verified portals.",
  "Labour law adherence (CLRA, Minimum Wages, Contract Labour) embedded directly in workflows.",
  "Background verification and certification validation for highly regulated profiles.",
  "SLA-based interactive reporting aligned with client's GRC command centers.",
  "Seamless integration with GOVENICS.AI's IP Watchlist and cyber overwatch portals."
];
