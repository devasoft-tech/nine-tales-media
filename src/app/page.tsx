import Hero from "@/components/sections/Hero";
import DirectAbout from "@/components/sections/DirectAbout";
import DirectServices from "@/components/sections/DirectServices";
import DirectCTA from "@/components/sections/DirectCTA";
import CreativeHero from "@/components/sections/CreativeHero";
import NewNavigation from "@/components/layout/NewNavigation";

export default function Home() {
  return (
    <div>
      <NewNavigation />
      <Hero />
      <DirectServices />
      <DirectAbout />
      <DirectCTA />
    </div>
  );
}
