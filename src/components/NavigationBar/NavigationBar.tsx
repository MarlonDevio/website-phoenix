import "./NavigationBar.scss";
import { Logo, Socials, Wrapper } from "../index.ts";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      {/*Sidebar*/}
      <Wrapper className="navbar--wrapper">
        <Logo />
        <Socials />
      </Wrapper>
    </nav>
  );
};

export default NavigationBar;
