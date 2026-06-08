import { Layout } from "@/components/layout/Layout";
import { GrcHero } from "@/components/hero/GrcHero";
import { GrcTrust } from "@/components/trust/GrcTrust";
import { GrcIndustries } from "@/components/industries/GrcIndustries";
import { GrcServices } from "@/components/services/GrcServices";
import { GrcTrustgrid } from "@/components/trustgrid/GrcTrustgrid";
import { GrcStaffing } from "@/components/staffing/GrcStaffing";
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
      <GrcTrustgrid />
      <GrcStaffing />
      <WhyGovenics />
      <GrcCases />
      <GrcResources />
    </Layout>
  );
}
