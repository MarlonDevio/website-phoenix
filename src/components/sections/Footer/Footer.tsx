import "./Footer.css";
import { Container } from "../../index.ts";
import { blackLogoIcon } from "../../../assets";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <img src={blackLogoIcon} alt="" />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Mission</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <p>© 2024 MarlonDev.io</p>
        <p>Designed and Developed by Marlon</p>
      </Container>
    </footer>
  );
};

export default Footer;
