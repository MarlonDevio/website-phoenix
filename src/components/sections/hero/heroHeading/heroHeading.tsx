import { motion } from "framer-motion";
import Wrapper from "@/components/containers/wrapper/wrapper";
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
      staggerChildren: 1.5,
      ease: "easeInOut",
    },
  },
};
export default function HeroHeading() {
  return (
    <Wrapper className="flex flex-col items-center justify-center text-center">
      <motion.h1 className="flex flex-col font-semibold uppercase leading-snug tracking-normal ">
        <motion.span
          variants={fadeIn}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 3 }}
        >
          Your Business{" "}
          <motion.span
            initial={{
              color: "rgba(var(--color-green-light))",
            }}
            animate={{
              color: "rgb(var(--color-green-light))",
              fontWeight: 700,
            }}
            transition={{ delay: 2, ease: "easeInOut", duration: 3 }}
          >
            Vision
          </motion.span>{" "}
        </motion.span>
        <motion.span
          variants={fadeIn}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 3 }}
        >
          My FullStack{" "}
          <motion.span
            animate={{ color: "rgb(var(--color-gold-5))", fontWeight: 700 }}
            initial={{ color: "rgb(var(--color-green-1))" }}
            transition={{ delay: 2, ease: "easeInOut", duration: 3 }}
          >
            Mission
          </motion.span>
        </motion.span>
      </motion.h1>
    </Wrapper>
  );
}
