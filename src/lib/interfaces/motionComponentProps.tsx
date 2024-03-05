import { MotionProps } from "framer-motion";
export interface MotionComponentProps extends MotionProps {
  className?: string;
  children: React.ReactNode;
}
