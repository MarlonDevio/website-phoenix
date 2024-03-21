import { cn } from "@/lib/utils/cn";
import React from "react";
import { IButton, IContainer } from "@/lib/interfaces/interfaces";

// eslint-disable-next-line react/display-name
export const ForwardRefDivContainer = React.forwardRef<
  HTMLDivElement,
  IContainer
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(className)} {...props}>
      {children}
    </div>
  );
});

export const ForwardRefSectionContainer = React.forwardRef<
  HTMLDivElement,
  IContainer
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(className)} {...props}>
      {children}
    </div>
  );
});
ForwardRefSectionContainer.displayName = "ForwardRefSectionContainer";

export const ForwardRefButtonContainer = React.forwardRef<
  HTMLButtonElement,
  IButton
>(({ children, className, ...props }, ref) => {
  return (
    <button ref={ref} className={cn(className)} {...props}>
      {children}
    </button>
  );
});
ForwardRefButtonContainer.displayName = "ForwardRefButtonContainer";
