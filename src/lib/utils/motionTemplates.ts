import { MotionProps, Variant, Variants } from "framer-motion";
import { Opacity } from "@tsparticles/engine";

// INTERFACES

interface AnimationProps extends MotionProps {
  direction: "left" | "right" | "up" | "down" | "none";
  type: string; // This can be more specific, e.g., 'spring' | 'tween', based on your use cases
  delay: number;
  duration: number;
}
interface BasicAnimationProps extends MotionProps {
  delay: number;
  duration: number;
}
interface StaggerProps extends MotionProps {
  staggerChildren: number;
  delayChildren: number;
  duration: number;
}

export const textVariant = (delay: any) => {
  return {
    hidden: {
      y: 100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = ({
  direction,
  type,
  delay,
  duration,
}: AnimationProps) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = ({ delay, duration }: BasicAnimationProps) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = ({
  direction,
  type,
  delay,
  duration,
}: AnimationProps) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = ({
  staggerChildren,
  delayChildren,
  duration,
}: StaggerProps) => {
  return {
    hidden: { y: 100 },
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
        duration: duration,
      },
    },
  };
};
