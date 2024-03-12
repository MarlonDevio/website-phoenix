"use client";
import Container from "../../../../components/containers/container/container";
import { logoIconBlack, logoIconGold } from "../../../../public/assets";
import Image from "next/image";
import { log } from "console";
import { useContext } from "react";
import { ThemeContext } from "@/app/themeContext";

export default function Logo() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className=" flex items-baseline">
      <Image
        className="w-[4rem]"
        height={476}
        width={487}
        src={darkMode ? logoIconGold : logoIconBlack}
        alt="logo"
      />
      <p className="ml-1 hidden text-6xl font-bold tracking-tighter sm:block">
        <span>Marlon</span>
        <span className="text-yellow-2 dark:text-yellow-1">Dev</span>
        <span className="">.</span>
        <span>io</span>
      </p>
    </div>
  );
}
