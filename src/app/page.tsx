"use client";
import About from "@/components/sections/about/about";
import Hero from "@/components/sections/hero/hero";
import Mission from "@/components/sections/mission/mission";
import Portfolio from "@/components/sections/portfolio/portfolio";
import Services from "@/components/sections/services/services";
import { SparklesSection } from "@/components/ui/sparklesSection";
import { WavySection } from "@/components/ui/wavySection";

export default function Home() {
  return (
    <main>
      <Hero />
      <WavySection />
      <Portfolio />
      <Services />
      <Mission />
      <SparklesSection />
    </main>
  );
}
