import React from "react";
import styles from "./button.module.css";
import { cn } from "@/lib/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  $primary?: boolean;
  $secondary?: boolean;
}

export default function Button({
  $primary,
  $secondary,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: $primary,
        [styles.secondary]: $secondary,
      })}
      {...props}
    >
      {children}
    </button>
  );
}
