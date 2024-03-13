"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { fadeInOnView } from "../../lib/utils/motionTemplates";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      },
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div
        ref={scope}
        variants={fadeInOnView}
        initial="initial"
        whileInView="whileInView"
      >
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-white opacity-0 dark:text-white"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-[1.6rem]">
        <div className=" text-[2.4rem] leading-snug tracking-wide text-white dark:text-white">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
