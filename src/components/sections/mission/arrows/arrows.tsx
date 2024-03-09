import ArrowButton from "@/components/ui/button/arrowButton";
import Container from "@/components/containers/container/container";
import BackButton from "@/components/ui/button/backButton";
import styles from "../mission.module.css";
import { cn } from "@/lib/utils/cn";

interface ArrowsProps {
  onNext: any;
  onPrev: any;
}

const Arrows: React.FC<ArrowsProps> = ({ onNext, onPrev }) => {
  return (
    <Container className={cn(styles.arrowContainer)}>
      <ArrowButton buttonType={onPrev} className="prev">
        &lt;
      </ArrowButton>
      <BackButton>Go Back &#8599;</BackButton>
      <ArrowButton buttonType={onNext} className="next">
        &gt;{" "}
      </ArrowButton>
    </Container>
  );
};

export default Arrows;
