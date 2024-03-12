import Carousel from "@/components/ui/carousel/carousel";
import { cn } from "@/lib/utils/cn";
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

export default MissionCarousel;
