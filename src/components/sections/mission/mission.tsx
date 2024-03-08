import { IContainer } from "@/lib/interfaces/interfaces";
import React from "react";
import Section from "@/components/containers/section/section";
import Carousel from "@/components/ui/carousel/carousel";
import MissionItemList from "./missionItemList/missionItemList";
import Arrows from "./arrows/arrows";
import MotionHeader from "@/components/ui/headers/motionHeader/motionHeader";
import Wrapper from "@/components/containers/wrapper/wrapper";
import styles from "./mission.module.css";
import { cn } from "@/lib/utils/cn";
import carousel from "../../ui/carousel/carousel";

const variants = {
  hidden: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 1 } },
};
const variants2 = {
  hidden: { opacity: 0, y: 100 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, transition: { duration: 1.5, delay: 0.2 } },
  },
};
const Mission: React.FC<IContainer> = ({ ...props }) => {
  return (
    <Section
      id="mission"
      className={cn("bg-gradient-to-green", styles.mission)}
    >
      <Wrapper variants={variants2} initial="hidden" whileInView="whileInView">
        <MotionHeader
          variants={variants}
          initial="hidden"
          whileInView="whileInView"
          headerType="h2"
        >
          Mission
        </MotionHeader>
        <Carousel {...props} className={cn(styles.carousel)}>
          <MissionItemList className={cn(styles.list)} />
          <Arrows />
        </Carousel>
      </Wrapper>
    </Section>
  );
};

export default Mission;
