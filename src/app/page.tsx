import { HeroNew } from "@/components/site/hero-new";
import { TechStack } from "@/components/site/tech-stack";
import { Services } from "@/components/site/services";
import { FeaturedWork } from "@/components/site/featured-work";
import { Process } from "@/components/site/process";
import { Impact } from "@/components/site/impact";
import { CtaBanner } from "@/components/site/cta-banner";
import { Philosophy } from "@/components/site/philosophy";
import { ContactNew } from "@/components/site/contact-new";

export default function Home() {
  return (
    <div className="bg-[#09090b] min-h-screen text-white selection:bg-pink-500 selection:text-white">
      <HeroNew />
      <TechStack />
      <Services />
      <FeaturedWork />
      <Process />
      <Impact />
      <CtaBanner />
      <Philosophy />
      <ContactNew />
    </div>
  );
}