import React from "react";
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
        {
          "btn-primary btn": $primary,
          "btn-secondary btn": $secondary,
        },
        "px-[2rem] py-[1rem]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
