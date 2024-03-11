"use client";
import React from "react";
import { WavyBackground } from "./wavyBackground";
import { motion, Variants } from "framer-motion";
import { fadeInOnView } from "@/lib/motionTemplates";
import { init } from "next/dist/compiled/webpack/webpack";
const childVariants = {
  initial: { y: 0, opacity: 0 },
  animate: { y: 100, opacity: 1 },
};
const variants = fadeInOnView;
export function WavySection() {
  return (
    <WavyBackground className="absolute mx-auto max-w-4xl pb-40">
      <motion.p
        variants={variants}
        initial="initial"
        whileInView="whileInView"
        className=" text-center font-bold text-white md:text-[4rem] lg:text-[5rem] xl:text-[6rem]"
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
        variants={variants}
        initial="initial"
        whileInView="whileInView"
        className=" mt-4 text-center  font-normal text-white md:text-[3rem]"
      >
        Harnessing technology to overcome, innovate, and inspire
      </motion.p>
    </WavyBackground>
  );
}
