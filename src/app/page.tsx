import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { HomeHero } from "@/components/sections/HomeHero";
import { FactsBand } from "@/components/sections/FactsBand";
import { IntroSection } from "@/components/sections/IntroSection";
import { ServicesIndex } from "@/components/sections/ServicesIndex";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { RotTeaser } from "@/components/sections/RotTeaser";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata = pageMetadata({ description: site.description, path: "/" });

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FactsBand />
      <IntroSection />
      <ServicesIndex />
      <ExperienceSection />
      <ProjectsShowcase />
      <ProcessSection index="05" />
      <RotTeaser index="06" />
      <ContactCta />
    </>
  );
}
