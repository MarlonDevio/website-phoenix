"use client";
import { AnimationDefinition, MotionProps, motion } from "framer-motion";
import React from "react";
import { Variants } from "framer-motion";
import { cn } from "@/lib/utils/cn";

export interface MotionContainerProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  initial?: string | Variants;
  animate?: string | Variants;
  whileInView?: any;
  exit?: string | Variants;
  transition?: any;
  whileHover?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
}

const MotionContainer = React.forwardRef<HTMLDivElement, MotionContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.div ref={ref} className={cn(className)} {...props}>
        {children}
      </motion.div>
    );
  },
);
MotionContainer.displayName = "MotionContainer";
export default MotionContainer;
