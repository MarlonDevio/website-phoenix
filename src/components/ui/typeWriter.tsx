"use client";
import Section from "../containers/section/section";
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
      text: "MarlonDev.io",
      className: "text-color-gold-3 dark:text-color-gold-3", // Signifying professionalism and technology
    },
  ];
  return (
    <Section className="flex h-[40rem] flex-col items-center justify-center  ">
      <p className="text-[1.6rem] text-neutral-600 sm:text-[2rem] dark:text-color-light-grey  ">
        Transcend limits through code, resilience, and innovation
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Button $primary className="">
          Contact Me
        </Button>
        <Button $secondary className="">
          Explore Portfolio
        </Button>
      </div>
    </Section>
  );
}
