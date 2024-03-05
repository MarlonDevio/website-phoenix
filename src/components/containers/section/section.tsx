import { Variants } from "framer-motion";
import styles from "./section.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  $containerPadding?: boolean;
  variants?: Variants;
  initial?: string | boolean;
  animate?: string | boolean;
  id?: string;
}
export default function Section({
  children,
  className,
  $containerPadding,
  variants,
  initial,
  animate,
  id,
}: SectionProps) {
  return (
    <motion.section
      // TODO: fix the motion react fc component
      className={cn(className, {
        [styles.section]: $containerPadding,
      })}
      animate={animate}
      initial={initial}
      variants={variants}
      id={id}
    >
      {children}
    </motion.section>
  );
}
