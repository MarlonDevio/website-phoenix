import { buttonStyles } from "@/lib/utils/stylesheet";
import Button from "../../../components/ui/button/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

const variants = {
  initial: { opacity: 0, x: -200 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      x: { duration: 1 },
      ease: "linear",
      type: "spring",
    },
  },
};
const variantsSecondTitle = {
  initial: { opacity: 0, x: 200 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.5,
      stiffness: 50,
      type: "spring",
    },
  },
};
const MainTitle = () => {
  return (
    <motion.div
      initial="initial"
      className=" mx-auto flex flex-col items-center justify-center py-[9rem]"
      viewport={{ once: true }}
    >
      <div className=" flex flex-col ">
        <div className="flex gap-10 self-center">
          <Link
            href="/"
            className={cn(
              buttonStyles(""),
              "min-w-[15rem] self-center py-[2rem] text-center align-middle",
            )}
          >
            Philosophy
          </Link>
          <motion.h2
            variants={variants}
            initial="initial"
            whileInView="whileInView"
          >
            <b>Innovative</b> <span className="font-[200] ">Paths</span>
          </motion.h2>
        </div>
        <div className="flex gap-10">
          <motion.h2
            initial="initial"
            variants={variantsSecondTitle}
            whileInView="whileInView"
          >
            <b>Transformative</b> <span className="font-[200] ">Outcomes</span>
          </motion.h2>
          <Link
            href="/"
            className={cn(
              buttonStyles("", "primary"),
              "min-w-[15rem] self-center py-[2rem] text-center ",
            )}
          >
            Mission
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default MainTitle;
