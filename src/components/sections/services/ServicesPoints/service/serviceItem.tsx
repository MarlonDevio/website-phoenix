import Button from "@/components/ui/button/button";
import { Card } from "@/components/ui/card/card";
import { MotionProps } from "framer-motion";
import Image from "next/image";

interface ServiceProps extends MotionProps {
  service: {
    icon: string;
    title: string;
    description: string;
  };
  initial: string;
  animate?: string;
  variants: any;
  transition: any;
  whileInView: any;
}

const ServiceItem = ({
  service,
  variants,
  initial,
  animate,
  transition,
  whileInView,
}: ServiceProps) => {
  return (
    <Card
      variants={variants}
      transition={transition}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      className="place-content-start gap-5 p-10 shadow-inset-green-pre-hover "
    >
      <Image
        height={"30"}
        width={"30"}
        src={service.icon}
        alt={service.description}
        className="col-span-1 col-start-1 row-span-1 row-start-1 min-h-12 min-w-12"
      />
      <h6 className="col-span-2 col-start-2 font-bold lg:text-[2.2rem]">
        {service.title}
      </h6>
      <p className="col-span-2 col-start-2 lg:text-[1.8rem]">
        {service.description}
      </p>
      {/* TODO PLACE BUTTON */}
    </Card>
  );
};

export default ServiceItem;
