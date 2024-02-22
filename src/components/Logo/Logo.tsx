import "./Logo.scss";
import { logoIconGold } from "../../assets";

const Logo = () => {
  return (
    <figure className="logo__navigationbar flex logo__navigationbar--container">
      <img
        className="logo__navigationbar--img"
        src={logoIconGold}
        alt="Logo MarlonDev.io of a golden Phoenix"
      />
      <span className="span span__heading span__heading--marlon">Marlon</span>
      <span className="span span__heading span__heading--dev">Dev</span>
      <span className="span span__heading span__heading--dot">.</span>
      <span className="span span__heading span__heading--io">io</span>
    </figure>
  );
};

export default Logo;
