import { cn } from "@/lib/utils/cn";
import styles from "./grid.module.css";
import clsx from "clsx";
import { Variants, animate, motion } from "framer-motion";
import React from "react";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  initial?: string | boolean;
  animate?: string | boolean;
  cols?: string;
  whileInView?: any;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    { animate, cols, variants, initial, children, className, whileInView },
    ref,
  ) => {
    return (
      <motion.div
        className={cn(styles.grid, className, {
          [styles.gridCol1]: cols === "gridCol1",
          [styles.gridCol2]: cols === "gridCol2",
          [styles.gridCol3]: cols === "gridCol3",
          [styles.gridCol4]: cols === "gridCol4",
          [styles.gridCol5]: cols === "gridCol5",
        })}
        animate={animate}
        initial={initial}
        variants={variants}
        whileInView={whileInView}
        ref={ref}
      >
        {children}
      </motion.div>
    );
  },
);
Grid.displayName = "Grid";
export default Grid;
