import { services } from "@/constants/services";
import ServiceItem from "./service/serviceItem";
import Grid from "@/components/containers/grid/grid";
// import "./ServicesPoints.scss";

// import { useState } from "react";
// import { motion, useMotionValueEvent, useScroll } from "framer-motion";
// import Button from "@/components/ui/button/button";

// interface serviceProps {
//   service: {
//     title: string;
//     icon: string;
//     description: string;
//     index: number;
//   };
//   staggerChildren?: number;
//   delayChildren?: number;
// }

// const hoverStyle = {
//   boxShadow: "inset 0 0 25px 25px #57ffc6",
//   color: "black",
//   transition: "box-shadow 0.5s ease-in-out",
// };

// const Service = ({ service, staggerChildren, delayChildren }: serviceProps) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const handleHover = () => {
//     setIsHovered(!isHovered);
//   };
//   return (
//     <motion.article className="services__points__service">
//       <div onMouseLeave={handleHover} onMouseEnter={handleHover}>
//         <h6>{service.title}</h6>
//         <img src={service.icon} alt={service.title} />
//         <p>{service.description}</p>
//         <Button $primary>GO</Button>
//       </div>
//     </motion.article>
//   );
// };
// interface ServicesPointsProps {
//   staggerChildren?: number;
//   delayChildren?: number;
// }
// const ServicesPoints = ({
//   staggerChildren,
//   delayChildren,
// }: ServicesPointsProps) => {
//   const { scrollYProgress, scrollY } = useScroll();
//   useMotionValueEvent(scrollY, "change", (latest) => {
//     console.log("page Scroll", latest);
//   });
//   return (
//     <>
//       <motion.div className="progress" style={{ scaleX: scrollYProgress }} />
//       <motion.div className="services__points"></motion.div>
//     </>
//   );
// };
const variants = {
  initial: { opacity: 0, y: 100 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut", staggerChildren: 0.5 },
  },
};

const servicePointVariants = {
  initial: { opacity: 0, y: 100 },
  whileInView: {
    opacity: 1,
    y: 0,
  },
};
// export default ServicesPoints;
const ServicesPoints = () => {
  return (
    <Grid cols={"gridCol4"}>
      {services.map((service, index) => {
        return (
          <ServiceItem
            variants={servicePointVariants}
            initial="initial"
            whileInView="whileInView"
            service={service}
            key={service.id}
            transition={{ delay: index * 0.2 }} // Add a delay for each service item
          />
        );
      })}
    </Grid>
  );
};

export default ServicesPoints;
