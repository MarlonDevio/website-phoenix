import MotionContainer from "@/components/containers/motioncontainer/motionContainer";
import React from "react";
import styles from "./card.module.css";
import { motion } from "framer-motion";
import { MotionContainerProps } from "../../containers/motioncontainer/motionContainer";
import Grid from "@/components/containers/grid/grid";
import { cn } from "../../../lib/utils/cn";

interface CardProps extends MotionContainerProps {
  cols?: string;
  whileHover?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, ...props }, ref) => {
    return (
      <MotionContainer
        ref={ref}
        {...props}
        className={cn(styles.card, props.className)}
      >
        {children}
      </MotionContainer>
    );
  },
);
Card.displayName = "Card";
