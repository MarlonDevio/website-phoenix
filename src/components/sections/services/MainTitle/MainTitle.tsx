import Button from "@/components/ui/button/button";
import { motion } from "framer-motion";

const MainTitle = () => {
  return (
    <motion.div className="flex flex-col justify-center">
      <div>
        {/* <Button $secondary className="cursor-not-allowed">
          btn
        </Button> */}
        <h2>
          <b>Innovative</b> <span>Paths</span>
        </h2>
      </div>
      <div className="">
        <h2>
          <b>Transformative</b> <span>Outcomes</span>
        </h2>
        <Button $primary className="cursor-none">
          What we do?
        </Button>
      </div>
    </motion.div>
  );
};

export default MainTitle;
