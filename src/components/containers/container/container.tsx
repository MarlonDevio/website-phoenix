import React from "react";
import styles from "./container.module.css";
import { cn } from "@/lib/utils/cn";
import { IContainer } from "@/lib/interfaces/interfaces";

const Container: React.FC<IContainer> = ({ children, className }) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
export default Container;
