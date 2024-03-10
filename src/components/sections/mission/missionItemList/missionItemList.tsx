import Container from "@/components/containers/container/container";
import { missionItems } from "@/constants/missionItems";
import MissionItem from "./missionItem/missionItem";
import styles from "../mission.module.css";
import { cn } from "@/lib/utils/cn";

interface MissionItemListProps {
  className?: string;
  missionItems: typeof missionItems;
  onSeeMore: () => void;
}
const MissionItemList = ({
  className,
  missionItems,
  onSeeMore,
}: MissionItemListProps) => {
  return (
    <Container className={cn(className)}>
      {missionItems.map((missionItem, index) => (
        <MissionItem key={index} {...missionItem} onSeeMore={onSeeMore} />
      ))}
    </Container>
  );
};

export default MissionItemList;
