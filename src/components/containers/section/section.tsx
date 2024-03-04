import { Variants } from "framer-motion";
import styles from "./section.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  $containerPadding?: boolean;
  variants?: Variants;
  initial?: string | boolean;
  animate?: string | boolean;
}
export default function Section({
  children,
  className,
  $containerPadding,
  variants,
  initial,
  animate,
}: SectionProps) {
  return (
    <motion.section
    // TODO: fix the motion react fc component
      className={clsx(className, {
        [styles.section]: $containerPadding,
      })}
      animate={animate}
      initial={initial}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}
