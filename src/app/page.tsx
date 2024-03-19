"use client";
import Navbar from "@/components/navbar/navbar";
import Section from "../../components/containers/section/section";
import Hero from "../../components/sections/hero/hero";
import Mission from "../../components/sections/mission/mission";
import Portfolio from "../components/sections/portfolio/portfolio";
import { SparklesSection } from "@/components/ui/heroSparkles/sparklesSection";

import gsap from "gsap";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
export default function Home() {
  return (
    <main>
      {/*<Navbar />*/}
      {/*<Header />*/}
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
    </main>
  );
}
