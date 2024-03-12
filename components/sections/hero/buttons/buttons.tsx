import MotionContainer from "../../../containers/motioncontainer/motionContainer";
import Button from "../../../ui/button/button";

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: 2,
    },
  },
};
const Buttons = () => {
  return (
    <MotionContainer
      className="flex items-center justify-center gap-4"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <Button
        $primary
        className=" transition-all duration-1000"
        onClick={() => console.log("i got clicked")}
      >
        Get Started
      </Button>
      <Button $secondary className="duration-1000 hover:transition-all">
        Get Started
      </Button>
    </MotionContainer>
  );
};

export default Buttons;
