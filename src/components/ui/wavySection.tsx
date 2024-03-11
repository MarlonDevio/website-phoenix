"use client";
import React from "react";
import { WavyBackground } from "./wavyBackground";

export function WavySection() {
  return (
    <WavyBackground className="absolute mx-auto max-w-4xl pb-40">
      <p className="inter-var text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl">
        Hero waves are cool
      </p>
      <p className="inter-var mt-4 text-center text-base font-normal text-white md:text-lg">
        Leverage the power of canvas to create a beautiful hero section
      </p>
    </WavyBackground>
  );
}
