"use client";
import React from "react";
import { SparklesCore } from "./sparkles";

export function SparklesSection() {
  return (
    <div className="flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-[100%] bg-gradient-from-green">
      <h2 className="relative z-20 text-center text-[10rem] font-bold text-white">
        <span>Marlon</span>
        <span className="dark:text-gold">Dev</span>
        <span>.io</span>
      </h2>
      <div className="relative h-[20rem] w-[100rem]">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-50 to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-[.5rem] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-[10rem] top-0 h-[5px] w-3/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="absolute inset-x-[24rem] top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.9}
          maxSize={1.5}
          particleDensity={1200}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 h-full w-full bg-transparent [mask-image:radial-gradient(2050px_1000px_at_top,transparent_40%,white)]"></div>
      </div>
    </div>
  );
}
