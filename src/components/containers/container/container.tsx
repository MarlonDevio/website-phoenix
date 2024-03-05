import React from "react";
import styles from "./container.module.css";
import clsx from "clsx";
import { cn } from "@/lib/utils/cn";
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={cn(styles.container, className)}>{children}</div>;
}
