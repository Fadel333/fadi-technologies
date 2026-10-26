import { Hero } from "@/components/site/hero";
import { ProofStrip } from "@/components/site/proof-strip";
import { TalentForgeSpotlight } from "@/components/site/talentforge-spotlight";
import { ShippedGrid } from "@/components/site/shipped-grid";
import { Thesis } from "@/components/site/thesis";
import { ContactCta } from "@/components/site/contact-cta";

export default function Home() {
  return (
    <div className="bg-[#09090b] min-h-screen text-white selection:bg-pink-500 selection:text-white">
      {/* 
        NOTE: If any of these components still have light-mode styles 
        (e.g., bg-white, text-black) hardcoded inside them, 
        you will need to update the individual component files.
        This wrapper ensures the page background stays dark.
      */}
      
      <Hero />
      <ProofStrip />
      <TalentForgeSpotlight />
      <ShippedGrid />
      <Thesis />
      <ContactCta />
    </div>
  );
}