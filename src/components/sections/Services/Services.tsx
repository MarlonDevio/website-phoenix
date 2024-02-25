import "./Services.scss";
import { motion } from "framer-motion";
import { Figure, StyledButton } from "../../index.ts";
import { innovation2 } from "../../../assets";

const Services = () => {
  return (
    <motion.div className="services">
      <h2>Services</h2>
      <motion.div className=" services__upper__text">
        <p>
          Empowering your brand's evolution <br /> with tech-inspired resilience
        </p>
        <hr />
      </motion.div>
      <motion.div className=" services__main__title__container flex">
        <Figure
          url={innovation2}
          alt={"image about innovation"}
          className="innovation__image"
        />
        <h2 className="services__title flex--column">
          <span className="title__element title__element--1">
            <b>Innovative</b>{" "}
            <span className="title__element--thin">Paths</span>
          </span>
          <span className="title__element title__element--2">
            <b>Transformative</b>{" "}
            <span className="title__element--thin">Outcomes</span>
          </span>
        </h2>
        <StyledButton className="services__title__button">
          What we do?
        </StyledButton>
      </motion.div>
      <motion.div className=" services__points"></motion.div>
      <p></p>
    </motion.div>
  );
};

export default Services;
