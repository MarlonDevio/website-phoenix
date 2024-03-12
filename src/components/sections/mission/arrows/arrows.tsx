import ArrowButton from "@/components/ui/button/arrowButton";
import Container from "@/components/containers/container/container";
import BackButton from "@/components/ui/button/backButton";
import styles from "../mission.module.css";
import { cn } from "@/lib/utils/cn";

interface ArrowsProps {
  handleClick: (e: Event) => void;
}

const Arrows: React.FC<ArrowsProps> = ({ handleClick }: any) => {
  return (
    <Container className={cn(styles.arrowContainer)}>
      <ArrowButton onClick={handleClick} className="prev">
        &lt;
      </ArrowButton>
      <BackButton>Go Back &#8599;</BackButton>
      <ArrowButton onClick={handleClick} className="next">
        &gt;{" "}
      </ArrowButton>
    </Container>
  );
};

export default Arrows;
