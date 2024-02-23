import "./Parallax.scss";
interface ParallaxProps {
  // TODO
  type: string;
}

const Parallax = ({ type }: ParallaxProps) => {
  return (
    <div
      className={`grid--parallax grid parallax parallax--${
        type === "services" ? "services" : "journey"
      } `}
    >
      <h2>{type === "services" ? "My Mission" : "My Journey"}</h2>
      <div className="landscape"></div>
      <div className="fireball fireball__1"></div>
      <div className="fireball fireball__2"></div>
      <div className="fireball fireball__4"></div>
    </div>
  );
};

export default Parallax;
