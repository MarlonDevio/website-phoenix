"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { services } from "@/constants/services";
import { motion } from "framer-motion";

const servicePointVariants = (index?: number) => {
  return {
    initial: { opacity: 0, y: 100 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: index ? index * 0.2 : 0,
      },
    },
  };
};
export function ServiceItems({ className }: { className?: string }) {
  return (
    <div className={className}>
      {services.map((service, index) => {
        return (
          <motion.div
            variants={servicePointVariants(index)}
            initial="initial"
            whileInView="whileInView"
            key={service.id}
          >
            <Card className="max-w-sm rounded-[22px] bg-white p-4 sm:p-10 dark:bg-zinc-900">
              <Image
                src={service.icon}
                alt={service.description}
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="mb-2 mt-4 text-base text-black sm:text-xl dark:text-neutral-200">
                {service.title}
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {service.description}
              </p>
              <button className="mt-4 flex items-center space-x-1 rounded-full bg-black py-1 pl-4 pr-1 text-xs font-bold text-white dark:bg-zinc-800">
                <span>Contact</span>
                <span className="rounded-full bg-zinc-700 px-2 py-0 text-[0.6rem] text-white"></span>
              </button>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
