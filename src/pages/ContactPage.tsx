import { Layout } from "@/components/layout/Layout";
import { GrcContact } from "@/components/contact/GrcContact";
import { GrcSliderHero } from "@/components/hero/GrcSliderHero";

import heroAiDriven from "@/assets/hero-ai-driven.jpg";
import heroIntegration from "@/assets/hero-integration.jpg";
import heroVerify from "@/assets/hero-verify.jpg";
import heroCommand from "@/assets/command_center_1.jpg";

export default function ContactPage() {
  const slides = [
    {
      badge: "Consultation",
      title: "Connect with GRC",
      highlight: "Risk Partners",
      description: "Schedule a secure, advisory-grade compliance discussion to audit and harden your operational controls.",
      image: heroCommand,
    },
    {
      badge: "Gap Assessments",
      title: "Request Tactical",
      highlight: "GRC Audits",
      description: "Partner with our senior consultants to model corporate risks, review regulatory gaps, and design custom SOPs.",
      image: heroAiDriven,
    },
    {
      badge: "Platform Integrations",
      title: "Tech-Led GRC",
      highlight: "Dashboard Systems",
      description: "Integrate sensor telemetry, database audit trails, and automated compliance routing under strict SLAs.",
      image: heroVerify,
    },
    {
      badge: "Confidentiality",
      title: "Regulatory-Grade",
      highlight: "Client Assurance",
      description: "All client consultations and organizational assessments are treated with absolute, legal-grade confidentiality.",
      image: heroIntegration,
    }
  ];

  return (
    <Layout>
      <div className="bg-white">
        <GrcSliderHero slides={slides} categoryLabel="Contact Us" />
        <div className="bg-background min-h-[70vh]">
          <GrcContact />
        </div>
      </div>
    </Layout>
  );
}
