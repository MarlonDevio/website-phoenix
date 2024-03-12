import Section from "../../containers/section/section";
import Wrapper from "../../containers/wrapper/wrapper";
import UpperText from "./UpperText/UpperText";
import MainTitle from "../../../src/components/sections/MainTitle";
import { cn } from "@/lib/utils/cn";
import ServicesPoints from "./ServicesPoints/ServicesPoints";

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
      className={cn("min-h-[50vh] flex-col justify-center gap-[10vh]")}
    >
      <Wrapper
        // variants={variants}
        // initial="initial"
        // whileInView="whileInView"
        className="flex flex-col justify-center gap-[15vh]"
      >
        <UpperText />
        <MainTitle />
        <ServicesPoints />
      </Wrapper>
    </Section>
  );
}
