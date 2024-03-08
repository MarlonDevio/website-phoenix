import { IButton } from "@/lib/interfaces/interfaces";
import styles from "./button.module.css";
import { cn } from "../../../lib/utils/cn";

const ArrowButton: React.FC<IButton> = ({ children, className, ...props }) => {
  return (
    <button
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
