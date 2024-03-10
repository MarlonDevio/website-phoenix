import Button from "@/components/ui/button/button";
import Image, { StaticImageData } from "next/image";
import styles from "../../mission.module.css";
import { cn } from "@/lib/utils/cn";
import { IMissionItem } from "../../../../../lib/interfaces/interfaces";
import Mission from "../../mission";

interface MissionItemProps extends IMissionItem {
  onSeeMore: () => void;
}
const MissionItem: React.FC<MissionItemProps> = ({
  className,
  onSeeMore,
  ...props
}) => {
  return (
    <article className={cn(styles.missionItem, className)}>
      <Image
        src={props.url}
        width={500}
        height={600}
        alt={props.description}
        className={cn(styles.image)}
      />
      <div className={cn("flex flex-col gap-4", styles.intro)}>
        <div
          className={cn(
            "title font-[600] uppercase text-color-gold-3",
            styles.title,
          )}
        >
          {" "}
          {props.title}
        </div>
        <h6 className={(cn("leading-tight"), styles.topic)}>{props.topic}</h6>
        <div className={cn(styles.description)}>{props.description}</div>
        <Button
          onClick={onSeeMore}
          $secondary
          className={cn("mt-5 self-start", styles.seeMore)}
        >
          Learn More
        </Button>
      </div>
      <div className={styles.detail}>
        <div className={cn("title", styles.title)}> {props.detailTitle}</div>
        <div className={cn("description", styles.description)}>
          {props.detailDescription}
        </div>
        <div className={cn("specification", styles.specification)}>
          <div></div>
        </div>
      </div>
    </article>
  );
};
export default MissionItem;
