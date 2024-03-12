import ArrowButton from "@/components/ui/button/arrowButton";
import Container from "@/components/containers/container/container";
import BackButton from "@/components/ui/button/backButton";
import styles from "../mission.module.css";
import { cn } from "@/lib/utils/cn";

interface ArrowsProps {
<<<<<<< HEAD
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
=======
  onNext: any;
  onPrev: any;
  onBack: any;
}

const Arrows: React.FC<ArrowsProps> = ({ onBack, onNext, onPrev }) => {
  return (
    <Container className={cn(styles.arrowContainer)}>
      <ArrowButton buttonType={onPrev} className={cn(styles.prev, "prev")}>
        &lt;
      </ArrowButton>
      <BackButton className={cn(styles.back)} onBack={onBack}>
        Go Back &#8599;
      </BackButton>
      <ArrowButton buttonType={onNext} className={cn(styles.next, "next")}>
>>>>>>> errorbranch
        &gt;{" "}
      </ArrowButton>
    </Container>
  );
};

export default Arrows;
