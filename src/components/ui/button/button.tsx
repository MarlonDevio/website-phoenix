import React from "react";
import styles from "./button.module.css";
import { cn } from "@/lib/utils/cn";
import { IButton } from "@/lib/interfaces/interfaces";

interface ButtonProps extends IButton {
  $primary?: boolean;
  $secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  $primary,
  $secondary,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.primary]: $primary,
          [styles.secondary]: $secondary,
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
