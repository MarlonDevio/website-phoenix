import "./Parallax.scss";
import { fireballOne, fireballThree, fireballTwo } from "../../../assets";
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
      <div className="fireball fireball--1">
        <img src={fireballTwo} alt="" />
      </div>
      <div className="fireball fireball--2">
        <img src={fireballOne} alt="" />
      </div>
      <div className="fireball fireball--3">
        {<img src={fireballThree} alt="" />}
      </div>
    </div>
  );
};

export default Parallax;
