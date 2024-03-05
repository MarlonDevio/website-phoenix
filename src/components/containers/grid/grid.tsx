import styles from "./grid.module.css";
import clsx from "clsx";
import { Variants, animate, motion } from "framer-motion";
import React from "react";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  cols?: string;
  variants?: Variants;
  initial?: string | boolean;
  animate?: string | boolean;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    { animate, variants, initial, children, className, cols = "gridCol3" },
    ref,
  ) => {
    return (
      <motion.div
        className={clsx(styles.grid, className, {
          [styles.gridCol1]: cols === "gridCol1",
          [styles.gridCol3]: cols === "gridCol3",
          [styles.gridCol4]: cols === "gridCol4",
          [styles.gridCol5]: cols === "gridCol5",
        })}
        animate={animate}
        initial={initial}
        variants={variants}
        ref={ref}
      >
        {children}
      </motion.div>
    );
  },
);
Grid.displayName = "Grid";
export default Grid;
