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
<<<<<<< HEAD

const missionItemList = missionItems.map((item) => item);

const MissionItemList = ({ className }: MissionItemListProps) => {
  const handleClick = () => {
    console.log("clicked");
  };

=======
const MissionItemList = ({
  className,
  missionItems,
  onSeeMore,
}: MissionItemListProps) => {
>>>>>>> errorbranch
  return (
    <Container className={cn(className)}>
      {missionItems.map((missionItem, index) => (
        <MissionItem key={index} {...missionItem} onSeeMore={onSeeMore} />
      ))}
    </Container>
  );
};

export default MissionItemList;
