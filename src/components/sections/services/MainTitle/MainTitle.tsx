import Button from "@/components/ui/button/button";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 100 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
const MainTitle = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      className="flex flex-col justify-center"
      whileInView={"whileInView"}
      viewport={{ once: true }}
    >
      <div>
        {/* <Button $secondary className="cursor-not-allowed">
          btn
        </Button> */}
        <h2>
          <b>Innovative</b>{" "}
          <span className="font-[300] text-color-green-light">Paths</span>
        </h2>
      </div>
      <div className="">
        <h2>
          <b>Transformative</b>{" "}
          <span className="font-[300] text-color-green-light">Outcomes</span>
        </h2>
        <Button $primary className="cursor-none">
          What I do?
        </Button>
      </div>
    </motion.div>
  );
};

export default MainTitle;
