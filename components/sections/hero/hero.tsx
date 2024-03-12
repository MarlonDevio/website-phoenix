"use client";
import Section from "../../containers/section/section";
import styles from "./hero.module.css";
import HeroHeading from "./heroHeading/heroHeading";
import { cn } from "@/lib/utils/cn";
import { Slider } from "./slider/slider";
import Buttons from "./buttons/buttons";
import Wrapper from "../../containers/wrapper/wrapper";

export interface HeroProps {
  className?: string;
}
export default function Hero({ className }: HeroProps) {
  return (
    <Section
      className={cn(
        styles.hero,
        "relative flex flex-col justify-center gap-10 bg-gradient-from-green",
      )}
    >
      <HeroHeading />
      <Buttons />
      <Slider />
    </Section>
  );
}
