import { staggerContainer } from "@/lib/utils/motionTemplates";
import React                from 'react';
import {IButton}            from '@/lib/interfaces/interfaces';
import {cn}                  from '@/lib/utils/cn';
import {motion, MotionProps} from 'framer-motion';

interface MotionButton extends MotionProps{
    className?: string;
    children: React.ReactNode;
}
const Button: React.FC<MotionButton> = ({className, children, ...props}) => {
  return <motion.button {...props} className={cn('btn', className)}>{children}</motion.button>;
};

export default Button;
