import { motion } from "framer-motion";
import React from "react";
import { Variants } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface MotionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  initial?: string | Variants;
  animate?: string | Variants;
  exit?: string | Variants;
  transition?: any;
}

const MotionContainer = React.forwardRef<HTMLDivElement, MotionContainerProps>(
  (
    { children, className, variants, transition, initial, exit, animate },
    ref,
  ) => {
    return (
      <motion.div
        ref={ref}
        transition={transition}
        initial={initial}
        animate={animate}
        exit={exit}
        variants={variants}
        className={cn(className)}
      >
        {children}
      </motion.div>
    );
  },
);
MotionContainer.displayName = "MotionContainer";
export default MotionContainer;
