import React  from "react";
import { cn } from '@/lib/utils/cn';

interface LetterProps {
  letter: string;
  className?: string;
}

const Letter: React.FC<LetterProps> = ({ letter, className }) => {
  return <div className={cn(className)}>{letter}</div>;
};

export default Letter;
