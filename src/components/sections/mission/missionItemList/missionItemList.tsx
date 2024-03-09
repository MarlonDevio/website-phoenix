import Container from "@/components/containers/container/container";
import { missionItems } from "@/constants/missionItems";
import MissionItem from "./missionItem/missionItem";
import styles from "../mission.module.css";
import { cn } from "@/lib/utils/cn";

interface MissionItemListProps {
  className?: string;
  missionItems: typeof missionItems;
}
const MissionItemList = ({ className, missionItems }: MissionItemListProps) => {
  return (
    <Container className={cn(className)}>
      {missionItems.map((missionItem, index) => (
        <MissionItem key={index} missionItem={missionItem} />
      ))}
    </Container>
  );
};

export default MissionItemList;
