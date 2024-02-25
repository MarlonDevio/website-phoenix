import "./Services.scss";
import { motion }                  from "framer-motion";
import {MainTitle, ServicesPoints} from "../../index.ts";

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className=" services__upper__text">
        <p>
          Empowering your brand's evolution
          <br /> with tech-inspired resilience
        </p>
        <hr />
      </motion.div>

      <MainTitle />
        <ServicesPoints />

      <motion.div className=" services__points"></motion.div>
    </motion.div>
  );
};

export default Services;
