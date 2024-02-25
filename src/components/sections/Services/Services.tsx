import "./Services.scss";
import { motion } from "framer-motion";
import { Figure, StyledButton } from "../../index.ts";

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className=" services__upper__text">
        <p>
          Empowering your brand's evolution <br /> with tech-inspired resilience
        </p>
        <hr />
      </motion.div>

      <motion.div className="services__main__title__container ">
        <div className="services__container--top">
          <StyledButton
            primary
            className="innovation__image__top__button"
          ></StyledButton>

          <h2 className="services__title services__title--top">
              <b>Innovative</b>{" "}
              <span className="title__element--thin">Paths</span>
          </h2>
        </div>
        <div className="services__container--bottom">
          <h2 className="services__title services__title--bottom ">
            <span className="title__element title__element--2">
              <b>Transformative</b>{" "}
              <span className="title__element--thin">Outcomes</span>
            </span>
          </h2>

          <StyledButton className="services__title__button">
            What we do?
          </StyledButton>
        </div>
      </motion.div>

      <motion.div className=" services__points"></motion.div>
    </motion.div>
  );
};

export default Services;
