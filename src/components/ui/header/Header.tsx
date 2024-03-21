"use client";
import { useEffect, useRef } from "react";
import { bg1, bg2, bg3, walkingToPhoenix } from "../../../../public/assets";
import Letter from "./Letter";

import Image from "next/image";
import { ImageRow, Letters, TextRow } from "./Rows";
import { cn } from "@/lib/utils/cn";
import Logo from "@/components/ui/logo/logo";
import { ImageHolder, ContentHolder } from "@/components/ui/header/Holder";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const lettersMarlon = ["m", "a", "r", "l", "o", "n"];
const lettersDev = ["d", "e", "v", ".", "i", "o"];

export default function Header() {
  const contentHolderRef = useRef<HTMLDivElement>();
  const imgHolderRef = useRef<HTMLDivElement>();
  const totalBodyHeight = useRef<number>();
  // const additionalScrollHeight = window.innerHeight;

  // useEffect(() => {
  //   const contentHolder = contentHolderRef.current;
  //   const imgHolder = window.innerHeight;
  //   const additionalScrollHeight = window.innerHeight;

  //   totalBodyHeight.current =
  //     contentHolder?.offsetHeight &&
  //     contentHolder.offsetHeight + imgHolder + additionalScrollHeight;

  //   if (contentHolderRef.current) {
  //     console.log("ContentHolder: " + contentHolderRef.current.offsetHeight);
  //   }
  //   if (imgHolderRef.current) {
  //     console.log("ImgHolder: " + imgHolderRef.current.offsetHeight);
  //   }
  //   if (window) {
  //     console.log("Window: " + window.innerHeight);
  //     console.log("Total: " + totalBodyHeight.current);
  //   }
  //   // console.log(additionalScrollHeight);
  // });

  useGSAP(() => {
    const contentHolder = contentHolderRef.current;
    const imgHolder = window.innerHeight;
    const additionalScrollHeight = window.innerHeight;

    totalBodyHeight.current =
      contentHolder?.offsetHeight &&
      contentHolder.offsetHeight + imgHolder + additionalScrollHeight;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".website-content",
        start: "-0.1% top",
        end: "bottom bottom",
        markers: true,
        onEnter: () => {
          gsap.set(".website-content", { position: "absolute", top: "195%" });
        },
        onLeaveBack: () => {
          gsap.set(".website-content", { position: "fixed", top: "0" });
        },
      },
    });
    timeline.to(".header .letters:first-child", {
      x: () => -innerWidth * 3,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1,
      },
    });
  }, []);
  // https://www.youtube.com/watch?v=AaO-LmExmkM&list=PLHehj03wDKX8wsi_zuk_JTSEZSFtf20XJ&index=6&ab_channel=Codegrid 5.52min
  return (
    <div
      className="header-container bg-black"
      style={{ height: `${totalBodyHeight.current}px` }}
    >
      <Logo className="logo fixed right-0 top-0  z-[10000] m-[2em]" />

      <header
        className={
          "header fixed left-[50%] top-[50%] z-[2] flex  w-full translate-x-[-50%] translate-y-[-50%]"
        }
      >
        <Letters letterList={lettersMarlon} className={"letters"} />
        <Letters letterList={lettersDev} className={"letters"} />
      </header>

      <div className="website-content fixed top-0 min-h-[100vh] w-[100%] bg-white">
        {/*  @ts-ignore*/}
        <ImageHolder ref={imgHolderRef} />
        {/*  @ts-ignore*/}
        <ContentHolder ref={contentHolderRef} />
      </div>
    </div>
  );
}
