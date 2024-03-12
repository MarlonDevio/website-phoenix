import { IContainer } from "@/lib/interfaces/interfaces";
import { cn } from "@/lib/utils/cn";
import styles from "./carousel.module.css";

const carousel: React.FC<IContainer> = ({ children, className }) => {
  return <div className={cn(styles.carousel, className)}>{children}</div>;
};

export default carousel;
