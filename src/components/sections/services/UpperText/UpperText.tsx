import MotionContainer from "@/components/containers/motioncontainer/motionContainer";
import { motion } from "framer-motion";

const UpperText = () => {
  return (
    <MotionContainer className="relative flex items-center justify-end">
      <p className="absolute right-[20%] hidden md:block  ">
        Empowering your brand&apos;s evolution
        <br /> with tech-inspired resilience
      </p>
      <hr className="hidden min-w-[30%] md:block" />
    </MotionContainer>
  );
};

export default UpperText;
