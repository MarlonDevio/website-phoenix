"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export function SparklesSection() {
  return (
    <div className="flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-gradient-from-green">
      <h2 className="relative z-20 text-center text-3xl font-bold text-white md:text-7xl lg:text-9xl">
        <span>Marlon</span>
        <span className="text-color-gold-3">Dev</span>
        <span>.io</span>
      </h2>
      <div className="relative h-40 w-[40rem]">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-color-green-light to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-color-green-light to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-color-green-1 to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-color-gold-4 to-transparent" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 h-full w-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
