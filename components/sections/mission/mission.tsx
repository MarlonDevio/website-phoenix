"use client";
import { IContainer } from "@/lib/interfaces/interfaces";
import React from "react";
import Section from "../../containers/section/section";
import Carousel from "../../ui/carousel/carousel";
import MissionItemList from "./missionItemList/missionItemList";
import Arrows from "./arrows/arrows";
import MotionHeader from "../../ui/headers/motionHeader/motionHeader";
import Wrapper from "../../containers/wrapper/wrapper";
import styles from "./mission.module.css";
import { cn } from "@/lib/utils/cn";
import carousel from "../../ui/carousel/carousel";
import MissionCarousel from "./missionCarousel/missionCarousel";

const variants = {
  hidden: { opacity: 0, x: -100 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, staggerChildren: 2, delay: 0.5 },
  },
};
const variants2 = {
  hidden: { opacity: 0, y: 100 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, transition: { duration: 1.5, delay: 0.5 } },
  },
};
const Mission: React.FC<IContainer> = ({ ...props }) => {
  return (
    <Section
      id="mission"
      className={cn(
        "overflow-x-hidden bg-gradient-to-green py-[9rem]",
        styles.mission,
      )}
    >
      <Wrapper variants={variants} initial="hidden" whileInView="whileInView">
        <MotionHeader
          variants={variants}
          initial="hidden"
          whileInView="whileInView"
          headerType="h2"
          className="mb-20 font-semibold"
        >
          My Mission
        </MotionHeader>
        <MissionCarousel />
      </Wrapper>
    </Section>
  );
};

export default Mission;
