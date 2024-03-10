import { MotionProps } from "framer-motion";
import { StaticImageData } from "next/image";

export interface MotionComponentProps extends MotionProps {
  className?: string;
  children: React.ReactNode;
}

export interface IContainer extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export interface IMotionHeader extends MotionComponentProps {
  className?: string;
  headerType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

export interface IMissionItem extends IContainer {
  url: StaticImageData;
  title: string;
  topic: string;
  description: string;
  detailTitle: string;
  detailDescription: string;
  specification: string[];
  className?: string;
  buttonText: string;
}
