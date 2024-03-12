import { cn } from "@/lib/utils/cn";
import styles from "./glowingHeader.module.css";

export const GlowingHeader = () => {
  return (
    <div className="flex justify-center">
      <h2 data-text={"Glowing Header"} className={cn(styles.glowingHeader)}>
        Glowing Header
      </h2>
    </div>
  );
};
