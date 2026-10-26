import { Hero } from "@/components/site/hero";
import { ProofStrip } from "@/components/site/proof-strip";
import { Capabilities } from "@/components/site/capabilities";
import { TalentForgeSpotlight } from "@/components/site/talentforge-spotlight";
import { ShippedGrid } from "@/components/site/shipped-grid";
import { Thesis } from "@/components/site/thesis";
import { ContactCta } from "@/components/site/contact-cta";

export default function Home() {
  return (
    <div className="bg-[#09090b] min-h-screen text-white selection:bg-pink-500 selection:text-white">
      <Hero />
      <ProofStrip />
      <Capabilities />
      <TalentForgeSpotlight />
      <ShippedGrid />
      <Thesis />
      <ContactCta />
    </div>
  );
}