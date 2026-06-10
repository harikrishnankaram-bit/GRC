import { Layout } from "@/components/layout/Layout";
import { GrcHero } from "@/components/hero/GrcHero";
import { GrcTrust } from "@/components/trust/GrcTrust";
import { GrcIndustries } from "@/components/industries/GrcIndustries";
import { GrcServices } from "@/components/services/GrcServices";
import { WhyGovenics } from "@/components/why-govenics/WhyGovenics";
import { GrcCases } from "@/components/cases/GrcCases";
import { GrcResources } from "@/components/resources/GrcResources";

export default function Index() {
  return (
    <Layout>
      <GrcHero />
      <GrcTrust />
      <GrcIndustries />
      <GrcServices />
      <WhyGovenics />
      <GrcCases />
      <GrcResources />
    </Layout>
  );
}
