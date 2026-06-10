import { Layout } from "@/components/layout/Layout";
import { GrcGovenicsAi } from "@/components/govenics-ai/GrcGovenicsAi";
import { GrcSliderHero } from "@/components/hero/GrcSliderHero";

import heroAiDriven from "@/assets/hero-ai-driven.jpg";
import heroIntegration from "@/assets/hero-integration.jpg";
import heroVerify from "@/assets/hero-verify.jpg";
import heroCommand from "@/assets/command_center_1.jpg";

export default function CyberSecurityPage() {
  const slides = [
    {
      badge: "AI Threat Intelligence",
      title: "GOVENICS.AI Live Compliance",
      highlight: "Overwatch Platform",
      description: "Embed AI models directly into client sites to continuously scan packets, map security controls, and identify threats in real time.",
      image: heroVerify,
    },
    {
      badge: "Quantum-Resilient Protection",
      title: "Dynamic Watchlists &",
      highlight: "Intrusion Blocking",
      description: "Automatically audit incoming IP addresses against international watchlists, and block suspicious traffic instantly.",
      image: heroAiDriven,
    },
    {
      badge: "Regulatory-Grade Shielding",
      title: "DPDP Act & ISO 27001",
      highlight: "Compliance Auditing",
      description: "Keep your data repositories fully aligned with statutory guidelines, consent management registries, and secure access logs.",
      image: heroCommand,
    },
    {
      badge: "Operational Resilience",
      title: "24/7 Security Controls",
      highlight: "Continuous Audits",
      description: "Continuous remote command center tracking live telemetry, incident alarms, and statutory compliance status.",
      image: heroIntegration,
    }
  ];

  return (
    <Layout>
      <div className="bg-white">
        <GrcSliderHero slides={slides} categoryLabel="Cyber Security" />
        <div className="bg-background min-h-[70vh]">
          <GrcGovenicsAi />
        </div>
      </div>
    </Layout>
  );
}
