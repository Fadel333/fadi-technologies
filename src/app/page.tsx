import { Hero } from "@/components/site/hero";
import { ProofStrip } from "@/components/site/proof-strip";
import { TalentForgeSpotlight } from "@/components/site/talentforge-spotlight";
import { ShippedGrid } from "@/components/site/shipped-grid";
import { Thesis } from "@/components/site/thesis";
import { ContactCta } from "@/components/site/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <TalentForgeSpotlight />
      <ShippedGrid />
      <Thesis />
      <ContactCta />
    </>
  );
}