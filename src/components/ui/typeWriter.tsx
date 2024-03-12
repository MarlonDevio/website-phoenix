"use client";
import Button from "./button/button";
import { TypewriterEffectSmooth } from "./typeWriterEffect";
export function TypeWriter() {
  const words = [
    {
      text: "Elevate",
    },
    {
      text: "your",
    },
    {
      text: "projects",
    },
    {
      text: "with",
    },
    {
      text: "DevPhoenix.",
      className: "text-indigo-500 dark:text-indigo-500", // Signifying professionalism and technology
    },
  ];
  return (
    <div className="flex h-[40rem] flex-col items-center justify-center  ">
      <p className="text-xs text-neutral-600 sm:text-base dark:text-neutral-200  ">
        Transcend limits through code, resilience, and innovation
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Button className="h-10 w-40 rounded-xl border border-transparent bg-black text-sm text-white dark:border-white">
          Explore Portfolio
        </Button>
        <Button className="h-10 w-40 rounded-xl border border-black bg-white text-sm  text-black">
          Contact Me
        </Button>
      </div>
    </div>
  );
}
