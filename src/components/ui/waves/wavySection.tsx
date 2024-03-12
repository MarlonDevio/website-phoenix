"use client";
import React from "react";
import { WavyBackground } from "./wavyBackground";
import { motion, Variants } from "framer-motion";
import { textVariant } from "@/lib/utils/motionTemplates";
import { init } from "next/dist/compiled/webpack/webpack";
import { ThemeContext } from "../../../app/themeContext";
import { useContext } from "react";
const childVariants = {
  initial: { y: 0, opacity: 0 },
  animate: { y: 100, opacity: 1 },
};

export function WavySection() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <WavyBackground
      backgroundFill={darkMode ? "#000000" : "#ffffff"}
      className="absolute mx-auto flex max-w-[89rem] flex-col gap-[6rem] pb-40"
    >
      <motion.p
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className=" mb-11 flex flex-col text-center text-[4rem] font-bold leading-tight text-white lg:text-[5rem] xl:text-[6rem]"
      >
        <motion.span
          variants={childVariants}
          initial="initial"
          animate="animate"
        >
          Code the Future,{" "}
        </motion.span>{" "}
        <motion.span
          variants={childVariants}
          initial="initial"
          animate="animate"
        >
          Transform Lives
        </motion.span>
      </motion.p>
      <motion.p
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className=" mt-4 text-center  font-normal text-white md:text-[3rem]"
      >
        Harnessing technology to overcome, innovate, and inspire
      </motion.p>
    </WavyBackground>
  );
}
