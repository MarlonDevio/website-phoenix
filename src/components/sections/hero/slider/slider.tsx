import TextSlider from "@/components/ui/textSlider/textSlider";
import styles from "../../../ui/textSlider/textSlider.module.css";
import { cn } from "../../../../lib/utils/cn";

export const Slider = () => {
  return (
    <TextSlider>
      <p className={cn("text-white", styles.paragraph)}>
        FullStack Developer Innovator Coach
      </p>
    </TextSlider>
  );
};
