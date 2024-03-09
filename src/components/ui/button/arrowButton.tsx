import { IButton } from "@/lib/interfaces/interfaces";
import styles from "./button.module.css";
import { cn } from "../../../lib/utils/cn";

interface ArrowButtonProps extends IButton {
  buttonType: any;
}
const ArrowButton: React.FC<ArrowButtonProps> = ({
  children,
  className,
  buttonType,
  ...props
}) => {
  return (
    <button
      onClick={buttonType}
      id={props.id}
      className={cn(styles.arrowButton, {
        [styles.prev]: className === "prev",
        [styles.next]: className === "next",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default ArrowButton;
