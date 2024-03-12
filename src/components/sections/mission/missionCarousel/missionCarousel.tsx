import Carousel from "@/components/ui/carousel/carousel";
import { cn } from "@/lib/utils/cn";
<<<<<<< HEAD
import styles from "../mission.module.css";
import Arrows from "../arrows/arrows";
import MissionItemList from "../missionItemList/missionItemList";
import { IContainer } from "@/lib/interfaces/interfaces";
import { missionItems } from "@/constants/missionItems";
import { ClassValue } from "clsx";

const missionPoints = missionItems.map((item) => item);
const MissionCarousel: React.FC<IContainer> = ({ className, ...props }) => {
  const handleClick = (e: any) => {
    e.target && console.log(e.target.classList.value.contains("[next]"));
  };

  return (
    <Carousel {...props} className={cn(styles.carousel)}>
      <MissionItemList className={cn(styles.list)} />
      <Arrows handleClick={handleClick} />
    </Carousel>
  );
};

=======
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
>>>>>>> errorbranch
export default MissionCarousel;
