import { IContainer } from "@/lib/interfaces/interfaces";
import { cn } from "@/lib/utils/cn";
import { MotionProps, Variants, motion } from "framer-motion";
import { init } from "next/dist/compiled/webpack/webpack";
import React from "react";

export const Wrapper: React.FC<IContainer> = ({ children, className }) => {
  return (
    <div className={cn("mx-auto max-w-[136rem]", className)}>{children}</div>
  );
};

export const Section: React.FC<IContainer> = ({ children, className }) => {
  return <section className={cn("py-[10rem]", className)}>{children}</section>;
};
interface IMotionWrapper extends IContainer {
  variants: Variants;
}
export const MotionWrapper: React.FC<IMotionWrapper> = ({
  children,
  className,
  variants,
}) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      className={cn("mx-auto max-w-[136rem]", className)}
    >
      {children}
    </motion.div>
  );
};
interface IMotionSection extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export const variants = {
  hidden: { opacity: 0, y: 100 }, // Define a more explicit hidden state
  show: {
    opacity: 1,
    y: 0,
    transition: {
      // You might adjust these values based on what works for your layout
      duration: 1,
      delayChildren: 0.5, // Apply delay between children
      staggerChildren: 1, // Children stagger time
    },
  },
};

export const MotionSection = React.forwardRef<HTMLDivElement, IMotionSection>(
  ({ children, className }, ref) => {
    return (
      <motion.section
        variants={variants} // Applying the parent variants
        initial="hidden"
        whileInView="show" // Triggers the animation when the component comes into view
        viewport={{ once: true }} // Ensures animation only plays once
        className={cn("py-40", className)} // 'py-[10rem]' converted to TailwindCSS class
        ref={ref}
      >
        {children}
      </motion.section>
    );
  },
);
MotionSection.displayName = "MotionSection";
