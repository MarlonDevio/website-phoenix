import { IMotionHeader } from "@/lib/interfaces/interfaces";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";

const MotionComponents = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
};

const MotionHeader: React.FC<IMotionHeader> = ({
  className,
  headerType,
  ...props
}) => {
  const MotionComponent = MotionComponents[headerType];
  return (
    <MotionComponent {...props} className={cn(className)}>
      {props.children}
    </MotionComponent>
  );
};

export default MotionHeader;
