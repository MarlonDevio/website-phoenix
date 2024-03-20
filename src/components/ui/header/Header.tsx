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

gsap.registerPlugin(useGSAP);
const lettersMarlon = ["m", "a", "r", "l", "o", "n"];
const lettersDev = ["d", "e", "v", ".", "i", "o"];

export default function Header() {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      console.log(ref.current);
    }
  }, []);
  const contentHolderHeight = document.querySelector(".content-holder");
  console.log(contentHolderHeight);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".header",
        start: "top top",
        end: "6000",
      },
    });
  });
  // https://www.youtube.com/watch?v=AaO-LmExmkM&list=PLHehj03wDKX8wsi_zuk_JTSEZSFtf20XJ&index=6&ab_channel=Codegrid 5.52min
  return (
    <div className="header-container h-full bg-white">
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
        <ImageHolder />
        {/*  @ts-ignore*/}
        <ContentHolder ref={ref} />
      </div>
    </div>
  );
}
