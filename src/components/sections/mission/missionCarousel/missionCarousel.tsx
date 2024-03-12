import Carousel from "@/components/ui/carousel/carousel";
import { cn } from "@/lib/utils/cn";
import Arrows from "../arrows/arrows";
import MissionItemList from "../missionItemList/missionItemList";
import { IContainer } from "@/lib/interfaces/interfaces";
import styles from "../mission.module.css";
import React from "react";
import { missionItems as initialMissionItems } from "@/constants/missionItems";
import { useMissionCarousel } from "@/lib/hooks/missionHooks";

const MissionCarousel: React.FC<IContainer> = ({
  children,
  className,
  ...props
}) => {
  const { missionItems, nextSlide, prevSlide, showSeeMore, clicked, onBack } =
    useMissionCarousel(initialMissionItems);

  return (
    <Carousel
      {...props}
      className={cn(styles.carousel, {
        [styles.next]: clicked === "next",
        [styles.prev]: clicked === "prev",
        [styles.showDetail]: clicked === "seeMore",
      })}
    >
      <MissionItemList
        className={cn(styles.list)}
        missionItems={missionItems}
        onSeeMore={showSeeMore}
      />
      <Arrows onBack={onBack} onNext={nextSlide} onPrev={prevSlide} />
    </Carousel>
  );
};
export default MissionCarousel;
