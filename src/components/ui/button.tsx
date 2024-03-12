import { staggerContainer } from "@/lib/utils/motionTemplates";
import SectionWrapper from "../hoc/sectionWrapper";

const Button = () => {
  return <button>Click me</button>;
};

export default SectionWrapper(Button, "button", staggerContainer);
