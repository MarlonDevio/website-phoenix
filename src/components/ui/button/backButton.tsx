import { IButton } from "@/lib/interfaces/interfaces";
import styles from "./button.module.css";
import { cn } from "@/lib/utils/cn";

interface BackProps extends IButton {
  onBack: any;
}
const BackButton: React.FC<BackProps> = ({
  onBack,
  children,
  className,
  ...props
}) => {
  return (
    <button
      onClick={onBack}
      className={cn(styles.backButton, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default BackButton;
