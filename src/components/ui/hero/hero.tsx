"use client";
import Section from "@/components/containers/section/section";
import styles from "./hero.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";
import Wrapper from "@/components/containers/wrapper/wrapper";
export interface HeroProps {
  className?: string;
}

const variants = {
  container: {
    animate: {
      transition: {
        staggerChildren: 1,
      },
    },
  },
  text: {
    initial: { opacity: 0, y: "100%" },
    animate: {
      opacity: 1,
      y: 0,
    },
  },
};

const transition = {
  duration: 1,
  delay: 0.5,
  ease: "easeInOut",
};

export default function Hero({ className }: HeroProps) {
  return (
    <Section className={clsx(styles.hero, "flex justify-center")}>
      <Wrapper
        className="flex flex-col items-center justify-center text-center"
        variants={variants.container}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          className="font-bold leading-tight tracking-tight "
          variants={variants.text}
          transition={transition}
        >
          Your Business Vision <br />
          My FullStack Mission
        </motion.h1>
        <motion.h3 variants={variants.text} transition={transition}>
          Soon...
        </motion.h3>
      </Wrapper>
    </Section>
  );
}
