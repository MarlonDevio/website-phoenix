import { motion } from "framer-motion";
import styles from "./textSlider.module.css";
import { MotionComponentProps } from "@/lib/interfaces/motionComponentProps";
import { cn } from "../../../lib/utils/cn";
const sliderVariants = {
  initial: { x: 0 },
  animate: {
    x: "-700%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror" as const,
      duration: 20,
      ease: "linear",
    },
  },
};

const TextSlider: React.FC<MotionComponentProps> = ({
  className,
  variants,
  initial,
  animate,
  children,
  ...props
}) => {
  return (
    <motion.div
      variants={sliderVariants}
      initial="initial"
      animate="animate"
      className={cn(styles.textSlider, className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
export default TextSlider;
