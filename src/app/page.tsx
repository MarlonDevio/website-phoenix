"use client";
import Navbar from "@/components/ui/navbar/navbar";
import Hero from "@/components/sections/hero/hero";

import Button from "@/components/ui/button/button";
import TextSlider from "@/components/ui/textSlider/textSlider";
import About from "@/components/sections/about/about";
import Services from "@/components/sections/services/services";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
    </main>
  );
}
