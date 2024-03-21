import React from "react";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import { bg1, bg2, bg3, walkingToPhoenix } from "../../../../public/assets";
import { ImageRow, TextRow } from "@/components/ui/header/Rows";

const images = [
  {
    src: bg2,
    alt: "Phoenix rising from the ashes",
    className: "relative left-[50%]",
  },
  {
    src: bg3,
    alt: "Phoenix soaring in the sky",
    className: "relative left-[15%]",
  },
  {
    src: walkingToPhoenix,
    alt: "Journey towards the Phoenix",
    className: "relative left-[70%]",
  },
];
const clipPath = "polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%)";
const transform = "rotate(30deg)";

export const ImageHolder = React.forwardRef<HTMLDivElement, ContentHolderProps>(
  ({ ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn("img-holder relative top-0 h-[100vh] w-full ")}
        style={{ clipPath: clipPath, transform: transform }}
      >
        <Image
          src={bg1}
          alt=""
          className="relative h-full w-full object-cover"
          style={{
            transform: "scale(2)",
          }}
        />
      </div>
    );
  },
);
ImageHolder.displayName = "ImageHolder";

interface ContentHolderProps {
  className?: string;
}
export const ContentHolder = React.forwardRef<
  HTMLDivElement,
  ContentHolderProps
>(({ className }, ref) => {
  return (
    <div
      className="content-holder relative top-[-5px] w-full bg-black p-[1em] text-white"
      ref={ref}
    >
      <div className="row mx-[1em] my-[2em]">
        <h1>History</h1>
      </div>

      <ImageRow
        source={images[0].src}
        alt={images[0].alt}
        className={images[0].className}
      />
      <ImageRow
        source={images[1].src}
        alt={images[1].alt}
        className={images[1].className}
      />
      <ImageRow
        source={images[2].src}
        alt={images[2].alt}
        className={images[2].className}
      />

      <TextRow
        text="Row 1, Lorem Ipsum dolor sit amet consectetur adipisicing elit. "
        className="row"
      />

      <TextRow
        text="Row 2, Lorem Ipsum dolor sit amet consectetur adipisicing elit. "
        className="row"
      />
    </div>
  );
});
ContentHolder.displayName = "ContentHolder";
