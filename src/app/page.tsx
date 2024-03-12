"use client";
import Navbar from "@/components/navbar/navbar";
import Section from "../../components/containers/section/section";
import Hero from "../../components/sections/hero/hero";
import Mission from "../../components/sections/mission/mission";
import Portfolio from "../../components/sections/portfolio/portfolio";
import Services from "../../components/sections/services/services";
import { SparklesSection } from "../components/ui/heroSparkles/sparklesSection";
import { TextGenerate } from "../../components/ui/textGenerate";
import { TypeWriter } from "../../components/ui/typeWriter";
import { WavySection } from "../components/ui/waves/wavySection";
import { ThemeContextProvider } from "./themeContext";
import { MotionSection } from "@/components/ui/wrapper";
import ServiceSection from "@/components/sections/serviceSection";

export default function Home() {
  return (
    <ThemeContextProvider>
      <main>
        <Navbar />
        <SparklesSection />
        <WavySection />
        <ServiceSection />
        {/* <Hero />
      <WavySection />
      <Portfolio />
      <Services />
      {/* <TextGenerate /> */}
        {/* <Mission />
      <TypeWriter />
      <SparklesSection /> */}
      </main>
    </ThemeContextProvider>
  );
}
