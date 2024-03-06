import MotionContainer from "@/components/containers/motioncontainer/motionContainer";
import React from "react";
import styles from "./card.module.css";
import { motion } from "framer-motion";
import { MotionContainerProps } from "../../containers/motioncontainer/motionContainer";
import Grid from "@/components/containers/grid/grid";
import { cn } from "../../../lib/utils/cn";

interface CardProps extends MotionContainerProps {
  cols?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      variants,
      transition,
      initial,
      exit,
      animate,
      whileInView,
    },
    ref,
  ) => {
    return (
      <MotionContainer
        ref={ref}
        transition={transition}
        initial={initial}
        animate={animate}
        exit={exit}
        variants={variants}
        className={cn(styles.card, className)}
        whileInView={whileInView}
      >
        {children}
      </MotionContainer>
    );
  },
);
Card.displayName = "Card";
