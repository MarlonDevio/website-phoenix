import React from "react";
import styles from "./wrapper.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variants?: any;
  initial?: string | boolean;
  animate?: string | boolean;
  whileInView?: any;
}

const Wrapper = React.forwardRef<HTMLDivElement, WrapperProps>(
  ({ variants, initial, animate, children, className, whileInView }, ref) => {
    return (
      <motion.div
        className={clsx(styles.wrapper, className)}
        animate={animate}
        initial={initial}
        variants={variants}
        ref={ref}
        whileInView={whileInView}
      >
        {children}
      </motion.div>
    );
  },
);
Wrapper.displayName = "Wrapper";
export default Wrapper;
