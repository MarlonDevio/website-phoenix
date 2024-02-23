import { motion } from "framer-motion";
import "./TextSlider.scss";

const sliderVariants = {
  initial: { x: 0 },
  animate: {
    x: "-600%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
      ease: "linear",
    },
  },
};
const TextSlider = () => {
  return (
    <motion.div
      className="container__sliding__text"
      variants={sliderVariants}
      initial="initial"
      animate="animate"
    >
      FullStack Developer Coach Innovator
    </motion.div>
  );
};

export default TextSlider;
