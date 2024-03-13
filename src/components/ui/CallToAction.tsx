import React from "react";
import { cn } from "@/lib/utils/cn";
import { Spotlight } from "./Spotlight";
import { motion } from "framer-motion";
import Button from '@/components/ui/button';

const variant = {
    hidden: { opacity: 0, y: 100 },
    whileInView: { opacity: 1 , y: 0, transition: { duration: 1.5, delay: 0.2, staggerChildren: 1, delayChildren:.2 } },
}
const childVariants = {
    hidden: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};
export function CallToAction() {
  return (
    <motion.div variants={variant} whileInView="whileInView" initial="hidden" className="bg-grid-white/[0.02] relative flex h-[100vh] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <Spotlight
        className="-top-[16rem] left-0 md:-top-[15rem] md:left-[20rem]"
        fill="white"
      />
      <motion.div variants={variant} whileInView="whileInView" initial="hidden" className=" relative z-10 flex flex-col  mx-auto w-full max-w-[120rem]  p-4 pt-20 md:pt-0">
        <motion.h1 variants={childVariants}  className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-[5rem] font-bold text-transparent md:text-[7.2rem]">
          Connect & Transform <br /> More than just code.
        </motion.h1>
        <motion.p variants={childVariants}  className="mx-auto mt-[1.6rem] max-w-[51rem] text-center text-[1.6rem] font-normal text-neutral-300">
            From shadowed valleys to peaks of digital artistry, my journey mirrors perseverance and relentless pursuit of excellence. If you&apos;re looking for a developer who&apos;s crafted resilience into innovative solutions, let&apos;s start a new chapter together. Where challenges become achievements—let&apos;s code the extraordinary.
        </motion.p>
          <Button variants={childVariants} className={"mx-auto mt-10"}>connect</Button>
      </motion.div>
    </motion.div>
  );
}
