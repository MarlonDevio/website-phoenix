import ArrowButton from "@/components/ui/button/arrowButton";
import Container from "@/components/containers/container/container";
import BackButton from "@/components/ui/button/backButton";
import styles from "../mission.module.css";
import { cn } from "@/lib/utils/cn";

const Arrows: React.FC = () => {
  return (
    <Container className={cn(styles.arrowContainer)}>
      <ArrowButton className="prev">&lt;</ArrowButton>
      <BackButton>Go Back &#8599;</BackButton>
      <ArrowButton className="next">&gt; </ArrowButton>
    </Container>
  );
};

export default Arrows;
