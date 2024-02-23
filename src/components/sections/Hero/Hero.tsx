import { Figure, StyledButton, TextSlider, Wrapper } from "../..";
import { phoenixImg } from "../../../assets";
import "./Hero.scss";
import ScrollIconGreen from "../../Svg/ScrollIcon.tsx";
import { motion } from "framer-motion";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const Hero = () => {
  return (
    <div className="hero ">
      <Wrapper display="flex" className="container__hero">
        <motion.div
          className="container__text flex--column"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 className="flex--column" variants={textVariants}>
            <span>Your Business Vision,</span>
            <span>My FullStack Mission</span>
          </motion.h1>
          <motion.p>
            Welcome to my portfolio, where every line of code tells a story of
            rebirth and relentless ambition. Dive into a journey of
            transformation and witness how technology can not only rebuild lives
            but also shape futures. Your path to inspiration starts here."
          </motion.p>
          <motion.div className="buttons flex" variants={textVariants}>
            <StyledButton primary={true}>See Latest Work</StyledButton>
            <StyledButton>See Latest Work</StyledButton>
          </motion.div>
          <ScrollIconGreen />
        </motion.div>
        <TextSlider />
        <Figure
          url={phoenixImg}
          alt={"Image of a phoenix rising from the ashes."}
          className="container__image"
        />
      </Wrapper>
    </div>
  );
};

export default Hero;
