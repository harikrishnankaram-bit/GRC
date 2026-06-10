import { Layout } from "@/components/layout/Layout";
import { GrcResources } from "@/components/resources/GrcResources";
import { GrcSliderHero } from "@/components/hero/GrcSliderHero";

import heroAiDriven from "@/assets/hero-ai-driven.jpg";
import heroIntegration from "@/assets/hero-integration.jpg";
import heroVerify from "@/assets/hero-verify.jpg";
import heroCommand from "@/assets/command_center_1.jpg";

export default function ResourceHubPage() {
  const slides = [
    {
      badge: "Knowledge Hub",
      title: "Govenics GRC",
      highlight: "Resources & Updates",
      description: "Access our expert guides, regulatory compliance briefs, and legislative updates.",
      image: heroAiDriven,
    },
    {
      badge: "Whitepapers",
      title: "Deep-Dive",
      highlight: "Research Reports",
      description: "Explore comprehensive whitepapers on the latest RBI circulars, SEBI guidelines, and DPDP compliance.",
      image: heroIntegration,
    },
    {
      badge: "Regulatory Alerts",
      title: "Real-Time",
      highlight: "Compliance Notifications",
      description: "Stay ahead of statutory amendments and government mandates with instant, pre-parsed compliance briefs.",
      image: heroVerify,
    },
    {
      badge: "Advisory SOPs",
      title: "Strategic Checklists &",
      highlight: "Governance Templates",
      description: "Standardize your internal procedures with our pre-codified audit checklists and EHS safety guidelines.",
      image: heroCommand,
    }
  ];

  return (
    <Layout>
      <div className="bg-white">
        <GrcSliderHero slides={slides} categoryLabel="Resources Hub" />
        <div className="bg-background min-h-[70vh]">
          <GrcResources />
        </div>
      </div>
    </Layout>
  );
}
