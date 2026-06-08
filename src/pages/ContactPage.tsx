import { Layout } from "@/components/layout/Layout";
import { GrcContact } from "@/components/contact/GrcContact";

export default function ContactPage() {
  return (
    <Layout>
      <div className="bg-background min-h-[70vh]">
        <GrcContact />
      </div>
    </Layout>
  );
}
