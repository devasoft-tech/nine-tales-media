import AgencyHero from "@/components/sections/AgencyHero";
import DirectAbout from "@/components/sections/DirectAbout";
import DirectServices from "@/components/sections/DirectServices";
import DirectCTA from "@/components/sections/DirectCTA";
import CreativeHero from "@/components/sections/CreativeHero";

export default function Home() {
  return (
    <div>
      <AgencyHero />
      <DirectServices />
      <DirectAbout />
      <DirectCTA />
    </div>
  );
}
