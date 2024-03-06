import MotionContainer from "@/components/containers/motioncontainer/motionContainer";
import { fadeInOnView } from "@/lib/motionTemplates";
import { motion } from "framer-motion";
const UpperText = () => {
  return (
    <MotionContainer
      className="relative  hidden items-center justify-end md:flex"
      variants={fadeInOnView}
      whileInView="whileInView"
      initial="initial"
    >
      <motion.p className="absolute right-[20%] text-[1.8rem]   ">
        Empowering your brand&apos;s evolution
        <br /> with tech-inspired resilience
      </motion.p>
      <hr className="hidden min-w-[30%] md:block" />
    </MotionContainer>
  );
};

export default UpperText;
