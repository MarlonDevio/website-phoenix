"use client";
import Container from "@/components/containers/container/container";
import { logoIconGold } from "../../../../public/assets";
import Image from "next/image";
export default function Logo() {
  return (
    <Container className="flex items-end">
      <Image
        className="w-[4rem]"
        height={476}
        width={487}
        src={logoIconGold}
        alt="logo"
      />
      <p className="ml-1  hidden  text-6xl font-bold tracking-tighter sm:block">
        <span>Marlon</span>
        <span className="text-color-gold-3">Dev</span>
        <span>.</span>
        <span>io</span>
      </p>
    </Container>
  );
}
