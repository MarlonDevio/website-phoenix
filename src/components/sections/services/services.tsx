import Section from "@/components/containers/section/section";
import Wrapper from "@/components/containers/wrapper/wrapper";
import UpperText from "./UpperText/UpperText";
import MainTitle from "./MainTitle/MainTitle";
import { cn } from "@/lib/utils/cn";
import { AnimatePresence, Variants } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 100 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
export default function Services() {
  return (
    <Section
      $containerPadding
      className={cn("min-h-[50vh] flex-col justify-center py-[100rem]")}
    >
      <UpperText />
      <Wrapper
        variants={variants}
        initial="initial"
        whileInView="whileInView"
        className="flex flex-col justify-center"
      >
        <MainTitle />
      </Wrapper>
    </Section>
  );
}
