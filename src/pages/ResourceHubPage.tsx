import { Layout } from "@/components/layout/Layout";
import { GrcResources } from "@/components/resources/GrcResources";

export default function ResourceHubPage() {
  return (
    <Layout>
      <div className="bg-background min-h-[70vh]">
        <GrcResources />
      </div>
    </Layout>
  );
}
