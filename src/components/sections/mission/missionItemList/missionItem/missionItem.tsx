import Button from "@/components/ui/button/button";
import Image, { StaticImageData } from "next/image";
import { IContainer } from "../../../../../lib/interfaces/interfaces";
import styles from "../../mission.module.css";
import { cn } from "@/lib/utils/cn";
interface MissionProps extends IContainer {
  missionItem: {
    url: StaticImageData;
    title: string;
    topic: string;
    description: string;
    detailTitle: string;
    detailDescription: string;
    specification: string[];
  };
}

const MissionItem: React.FC<MissionProps> = ({ missionItem, ...props }) => {
  return (
    <article className={cn(styles.missionItem)}>
      <Image
        src={missionItem.url}
        width={500}
        height={600}
        alt={missionItem.description}
        className={cn(styles.image)}
      />
      <div className={cn("flex flex-col gap-4", styles.intro)}>
        <div className="title font-[600] uppercase text-color-gold-3">
          {" "}
          {missionItem.title}
        </div>
        <h6 className="topic leading-tight ">{missionItem.topic}</h6>
        <div className="description">{missionItem.description}</div>
        <Button $secondary className="mt-5 self-start">
          Learn More
        </Button>
      </div>
      <div className={styles.detail}>
        <div className="title"> {missionItem.detailTitle}</div>
        <div className="description">{missionItem.detailDescription}</div>
        <div className="specification">
          <div>
            {missionItem.specification.map((spec, index) => (
              <p key={index}>{spec}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
export default MissionItem;
