import React from "react";
import clsx from "clsx";
import styles from "./button.module.css";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  $primary?: boolean;
  $secondary?: boolean;
}

export default function Button({
  $primary,
  $secondary,
  onClick,
  children,
  className,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(styles.button, className, {
        [styles.primary]: $primary,
        [styles.secondary]: $secondary,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
