"use client";
import { Variants } from "framer-motion";
import React from "react";
import styles from "./section.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  $containerPadding?: boolean;
  variants?: Variants;
  initial?: string | boolean;
  animate?: string | boolean;
  id?: string;
}
const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  (
    { children, className, $containerPadding, variants, initial, animate, id },
    ref,
  ) => {
    return (
      <motion.section
        // TODO: fix the motion react fc component
        className={cn(
          {
            [styles.section]: $containerPadding,
          },
          className,
        )}
        animate={animate}
        initial={initial}
        variants={variants}
        ref={ref}
        id={id}
      >
        {children}
      </motion.section>
    );
  },
);

Section.displayName = "Section";
export default Section;
