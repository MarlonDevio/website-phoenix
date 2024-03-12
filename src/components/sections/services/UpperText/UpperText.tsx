import MotionContainer from "@/components/containers/motioncontainer/motionContainer";
import { fadeInOnView } from "@/lib/motionTemplates";
import { motion } from "framer-motion";
const UpperText = () => {
  return (
    <MotionContainer
      className="relative  hidden items-center justify-end sm:flex"
      variants={fadeInOnView}
      whileInView="whileInView"
      initial="initial"
    >
      <motion.p className="absolute right-[10%] text-[1.8rem]   ">
        Empowering your brand&apos;s evolution
        <br /> with tech-inspired resilience
      </motion.p>
      <hr className=" right-[-30%] hidden min-w-[30%] sm:block lg:absolute lg:min-w-[50%]" />
    </MotionContainer>
  );
};

export default UpperText;
