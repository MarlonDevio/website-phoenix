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
<<<<<<< HEAD
        <h6 className={cn("leading-tight", styles.topic)}>
          {missionItem.topic}
        </h6>
        <div className={cn(styles.description)}>{missionItem.description}</div>
        <Button $secondary className={cn("mt-5 self-start", styles.seeMore)}>
=======
        <h6 className={(cn("leading-tight"), styles.topic)}>{props.topic}</h6>
        <div className={cn(styles.description)}>{props.description}</div>
        <Button
          onClick={onSeeMore}
          $secondary
          className={cn("mt-5 self-start", styles.seeMore)}
        >
>>>>>>> errorbranch
          Learn More
        </Button>
      </div>
      <div className={cn("flex flex-col", styles.detail)}>
        <h6 className={cn("title", styles.title)}> {props.detailTitle}</h6>
        <div className={cn("description", styles.description)}>
          {props.detailDescription}
        </div>
        <div
          className={cn("specification flex flex-col", styles.specification)}
        >
          <div className="border-t-1 mt-8 flex w-full justify-end gap-10 border-t-[1px] border-color-green-light">
            {props.specification.map((spec, index) => {
              return (
                <div
                  className="max-w-full flex-shrink-0  text-center"
                  key={index}
                >
                  <p
                    className={cn(
                      "mt-5 text-[2rem]  font-bold text-color-light-grey",
                      styles.spec,
                    )}
                  >
                    {spec}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <Button
          $primary
          className={cn(styles.buttonInfo, "mt-5 self-end font-bold")}
        >
          {props.buttonText}
        </Button>
      </div>
    </article>
  );
};
export default MissionItem;
