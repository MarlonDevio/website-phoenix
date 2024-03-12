import { styles } from "@/lib/utils/stylesheet";
import { MotionSection, MotionWrapper, Wrapper, variants } from "../ui/wrapper";
import { cn } from "@/lib/utils/cn";
import { textVariant } from "@/lib/utils/motionTemplates";
import { motion } from "framer-motion";
import { text } from "stream/consumers";
import MainTitle from "./MainTitle";
const ServiceSection = () => {
  return (
    <MotionSection className="bg-white text-black dark:bg-black dark:text-white">
      <MotionWrapper variants={variants}>
        <motion.h3
          variants={variants}
          className={cn(styles.sectionSubText, "font-semibold")}
        >
          services
        </motion.h3>
        <MainTitle />
      </MotionWrapper>
    </MotionSection>
  );
};

export default ServiceSection;
