import styles from "./grid.module.css";
import clsx from "clsx";
import React from "react";

interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: string;
}

export default function Grid({
  children,
  className,
  cols = "gridCol3",
}: GridProps) {
  return (
    <div
      className={clsx(styles.grid, className, {
        [styles.gridCol3]: cols === "gridCol3",
        [styles.gridCol4]: cols === "gridCol4",
        [styles.gridCol5]: cols === "gridCol5",
      })}
    >
      {children}
    </div>
  );
}
