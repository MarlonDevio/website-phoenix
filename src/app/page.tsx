"use client";
import About from "@/components/sections/about/about";
import Hero from "@/components/sections/hero/hero";
import Mission from "@/components/sections/mission/mission";
import Portfolio from "@/components/sections/portfolio/portfolio";
import Services from "@/components/sections/services/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Portfolio />
      <Services />
      <Mission />
      <About />
    </main>
  );
}
