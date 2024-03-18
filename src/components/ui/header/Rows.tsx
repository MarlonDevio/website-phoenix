import { cn } from "@/lib/utils/cn";
import { bg1, bg2 } from "../../../../public/assets";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { list } from "postcss";
import { className } from "postcss-selector-parser";

interface Rows {
  source: StaticImageData;
  className?: string;
  alt: string;
}

export const ImageRow: React.FC<Rows> = ({ source, className, alt }) => {
  return (
    <div className={cn("row mx-[1em] my-[2em]")}>
      <div className={cn("img h-[27.5rem] w-[20rem]", className)}>
        <Image src={source} className="h-full w-full object-cover" alt={alt} />
      </div>
    </div>
  );
};

export const TextRow: React.FC<{ text: string; className: string }> = ({
  text,
  className,
}) => {
  return (
    <div className={cn("mx-[1em] my-[2em]", className)}>
      <p className="w-[50%]">{text}</p>
    </div>
  );
};

/* =============================================
                    LETTERS
* ============================================ */
export const Letters: React.FC<{
  className?: string;
  letterList: string[];
}> = ({ letterList, className }) => {
  return (
    <div className={cn("flex flex-1 uppercase", className)}>
      {letterList.map((letter, index) => {
        return (
          <div
            className="flex-1 text-center text-[11vw] font-[400]"
            key={index}
          >
            {letter}
          </div>
        );
      })}
    </div>
  );
};
