import "./Logo.css";
import { blackLogoIcon, goldLogoIcon } from "../../assets";
import { useState } from "react";

interface LogoProps {
  theme: string;
}

const Logo = ({ theme }: LogoProps) => {
  const [hover, setHover] = useState(false);
  return (
    <figure
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="logo__container flex a-baseline"
    >
      <img
        className="nav__logo"
        src={hover ? goldLogoIcon : blackLogoIcon}
        alt="Logo of a phoenix and the name of the website MarlonDev.io"
      />{" "}
      <div className="logo__container__words">
        <span
          className={` span__title span__title-marlon span__title-${theme} ${hover ? "span__title__marlon-hover" : ""}`}
        >
          Marlon
        </span>
        <span
          className={` span__title span__title-dev span__title-${theme} ${hover ? "span__title__dev-hover" : ""}`}
        >
          Dev
        </span>
        <span
          className={` span__title span__title-dot span__title-${theme} ${hover ? "span__title__dot-hover" : ""}`}
        >
          .
        </span>
        <span
          className={`${hover ? "span__title__io-hover" : ""} span__title span__title-io span__title-${theme}`}
        >
          io
        </span>
      </div>
    </figure>
  );
};

export default Logo;
