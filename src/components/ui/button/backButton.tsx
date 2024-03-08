import { IButton } from "@/lib/interfaces/interfaces";
import styles from "./button.module.css";
import { cn } from "@/lib/utils/cn";

const BackButton: React.FC<IButton> = ({ children, className, ...props }) => {
  return (
    <button className={cn(styles.backButton, className)} {...props}>
      {children}
    </button>
  );
};

export default BackButton;
