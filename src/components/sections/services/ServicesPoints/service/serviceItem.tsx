import Button from "@/components/ui/button/button";
import styles from "./serviceItem.module.css";
import { Card } from "@/components/ui/card/card";
import { MotionProps } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { useState } from "react";

interface ServiceProps extends MotionProps {
  service: {
    icon: string;
    title: string;
    description: string;
  };
  initial: string;
  animate?: string;
  variants: any;
  transition?: any;
  whileInView: any;
}

const hoverState = {
  animate: {
    scale: 1.1,
    transition: {
      duration: 0.5,
    },
  },
};

const ServiceItem = ({
  service,
  variants,
  initial,
  animate,
  transition,
  whileInView,
}: ServiceProps) => {
  const [hover, setHover] = useState(false);

  return (
    <Card
      whileHover={hoverState.animate}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      variants={variants}
      transition={transition}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      className={cn(
        "place-content-start gap-5 p-10 shadow-inset-green-pre-hover",
        styles.serviceItem,
      )}
    >
      <Image
        height={"30"}
        width={"30"}
        src={service.icon}
        alt={service.description}
        className="col-span-1 col-start-1 row-span-1 row-start-1 min-h-12 min-w-12"
      />
      <h6
        className={cn("col-span-2 col-start-2 font-bold lg:text-[2.2rem]", {
          "text-color-green-3": hover,
        })}
      >
        {service.title}
      </h6>
      <p
        className={cn("col-span-2 col-start-2 lg:text-[1.8rem]", {
          "text-color-green-4": hover,
        })}
      >
        {service.description}
      </p>
      {/* TODO PLACE BUTTON */}
    </Card>
  );
};

export default ServiceItem;
