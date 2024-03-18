"use client";
import Navbar from "@/components/navbar/navbar";
import Section from "../../components/containers/section/section";
import Hero from "../../components/sections/hero/hero";
import Mission from "../../components/sections/mission/mission";
import Portfolio from "../components/sections/portfolio/portfolio";
import { SparklesSection } from "@/components/ui/heroSparkles/sparklesSection";
import { TextGenerate } from "../components/ui/textGenerate";
import { TypeWriter } from "../components/ui/typeWriter";
import { WavySection } from "@/components/ui/waves/wavySection";
import { ThemeContextProvider } from "./themeContext";
import { MotionSection } from "@/components/ui/wrapper";
import ServiceSection from "@/components/sections/serviceSection/serviceSection";
import { CallToAction } from "@/components/ui/CallToAction";
import Header from "@/components/ui/header/Header";

export default function Home() {
  return (
    <ThemeContextProvider>
        {/*<Navbar />*/}
        <Header />
        {/*<SparklesSection />*/}
        {/*<WavySection />*/}
        {/*<ServiceSection />*/}
        {/*<Portfolio />*/}
        {/*<CallToAction />*/}

        {/* <Hero />
      <WavySection />
      <Portfolio />
      <Services />
      {/* <TextGenerate /> */}
        {/* <Mission />
      <TypeWriter />
      <SparklesSection /> */}
    </ThemeContextProvider>
  );
}
