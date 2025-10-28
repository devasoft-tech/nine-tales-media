import Hero from "@/components/sections/Hero";
import DirectAbout from "@/components/sections/DirectAbout";
import DirectServices from "@/components/sections/DirectServices";
import DirectCTA from "@/components/sections/DirectCTA";
import CreativeHero from "@/components/sections/CreativeHero";

export default function Home() {
  return (
    <div>
      <Hero />
      <DirectServices />
      <DirectAbout />
      <DirectCTA />
    </div>
  );
}
