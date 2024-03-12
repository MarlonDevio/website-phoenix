"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { attesticoPortfolioImage, datingApp } from "../../../../public/assets";
import Section from "@/components/containers/section/section";
import { motion, useScroll, useTransform } from "framer-motion";
import { PortfolioParallax } from "./projectParallax";
import { portfolioItems } from "@/constants/portfolioItems";
import Wrapper from "@/components/containers/wrapper/wrapper";

const childrenVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
export function Portfolio() {
  return (
    <Section className=" bg-gradient-to-green pb-20">
      <PortfolioParallax products={portfolioItems} />
    </Section>
  );
}

export default Portfolio;
