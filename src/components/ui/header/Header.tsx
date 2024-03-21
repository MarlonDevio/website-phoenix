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

function updateTotalBodyHeight(contentHolder: any, totalBodyHeight: any) {
  const contentHolderHeight = contentHolder.current
    ? contentHolder.current.offsetHeight
    : 0;
  const imgHolderHeight = window.innerHeight;
  const additionalScrollHeight = window.innerHeight;

  totalBodyHeight.current =
    contentHolderHeight + imgHolderHeight + additionalScrollHeight;
}

export default function Header() {
  const contentHolderRef = useRef<HTMLDivElement>();
  const imgHolderRef = useRef<HTMLDivElement>(null);
  const totalBodyHeight = useRef<number>();
  const websiteContent = useRef<HTMLDivElement>(null);

  //     // Forceer ScrollTrigger om de lay-out te heroverwegen
  //     ScrollTrigger.refresh();
  //   }

  //   window.addEventListener("resize", updateTotalBodyHeight);
  //   window.addEventListener("resize", (event) => ScrollTrigger.refresh);

  //   setupAnimations();

  //   return () => {
  //     window.removeEventListener("resize", updateTotalBodyHeight);
  //     window.removeEventListener("resize", (event) => ScrollTrigger.refresh);
  //     ScrollTrigger.clearScrollMemory();
  //     ScrollTrigger.getAll().forEach((st) => st.kill()); // Opruimen wanneer de component unmount
  //   };
  // }, []);
  useGSAP(() => {
    function updateTotalBodyHeight() {
      const contentHolderHeight = contentHolderRef.current
        ? contentHolderRef.current.offsetHeight
        : 0;
      const imgHolderHeight = window.innerHeight; // Neem aan dat dit correct is voor jouw layout
      const additionalScrollHeight = window.innerHeight; // Dit ook

      totalBodyHeight.current =
        contentHolderHeight + imgHolderHeight + additionalScrollHeight;

      ScrollTrigger.refresh(true); // Ververs alle ScrollTriggers
    }
    function setUpAnimations() {
      updateTotalBodyHeight();
      ScrollTrigger.create({
        trigger: websiteContent.current,
        start: "-0.1% top",
        end: "bottom bottom",
        markers: true,
        onEnter: () => {
          gsap.set(websiteContent.current, {
            position: "absolute",
            top: "195%",
          });
        },
        onLeaveBack: () => {
          gsap.set(websiteContent.current, {
            position: "fixed",
            top: "0",
          });
        },
      });

      gsap.to(".header .letters:first-child", {
        x: () => -innerWidth * 3,
        scale: 10,
        ease: "power2.inOut",
        scrollTrigger: {
          start: "top top",
          end: `+=200%`,
          scrub: 1,
        },
      });
      gsap.to(".header .letters:last-child", {
        x: () => innerWidth * 3,
        scale: 10,
        ease: "power2.inOut",
        scrollTrigger: {
          start: "top top",
          end: `+=200%`,
          scrub: 1,
        },
      });

      gsap.to(imgHolderRef.current, {
        rotation: 0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)",
        ease: "power2.inOut",
        scrollTrigger: {
          start: "top top",
          end: `+=200%`,
          scrub: 1,
        },
      });

      gsap.to(imgHolderRef.current.querySelector("img"), {
        scale: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          start: "top top",
          end: `+=200%`,
          scrub: 1,
        },
      });
      ScrollTrigger.refresh();
      console.log(totalBodyHeight.current);
    }
    window.addEventListener("resize", updateTotalBodyHeight);

    setUpAnimations();

    return () => {
      window.removeEventListener("resize", updateTotalBodyHeight);
      ScrollTrigger.getAll().forEach((st) => st.kill()); // Opruimen wanneer de component unmount
      ScrollTrigger.clearScrollMemory();
    };
  }, []);
  useEffect(() => {
    function handleResize() {
      totalBodyHeight.current = contentHolderRef.current
        ? contentHolderRef.current.offsetHeight + window.innerHeight * 2
        : 0;
      ScrollTrigger.refresh();
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially in case there are immediate changes

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // useGSAP(() => {
  //   const contentHolder = contentHolderRef.current;
  //   const imgHolder = window.innerHeight;
  //   const additionalScrollHeight = window.innerHeight;

  //   totalBodyHeight.current =
  //     contentHolder.offsetHeight + imgHolder + additionalScrollHeight;
  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".website-content",
  //       start: "-0.1% top",
  //       end: "bottom bottom",
  //       markers: true,
  //       onEnter: () => {
  //         gsap.set(".website-content", { position: "absolute", top: "195%" });
  //       },
  //       onLeaveBack: () => {
  //         gsap.set(".website-content", { position: "fixed", top: "0" });
  //       },
  //     },
  //   });
  //   timeline.to(".header .letters:first-child", {
  //     x: () => -innerWidth * 3,
  //     scale: 10,
  //     ease: "power2.inOut",
  //     scrollTrigger: {
  //       start: "top top",
  //       end: `+=200%`,
  //       scrub: 1,
  //     },
  //   });
  //   timeline.to(".header .letters:last-child", {
  //     x: () => innerWidth * 3,
  //     scale: 10,
  //     ease: "power2.inOut",
  //     scrollTrigger: {
  //       start: "top top",
  //       end: `+=200%`,
  //       scrub: 1,
  //     },
  //   });
  // });
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

      <div
        // @ts-ignore
        ref={websiteContent}
        className="website-content fixed top-0 min-h-[100vh] w-[100%] bg-white"
      >
        {/*  @ts-ignore*/}
        <ImageHolder ref={imgHolderRef} />
        {/*  @ts-ignore*/}
        <ContentHolder ref={contentHolderRef} />
      </div>
    </div>
  );
}
