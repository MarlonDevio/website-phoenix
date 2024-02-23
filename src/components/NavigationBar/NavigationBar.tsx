import "./NavigationBar.scss";
import { Logo, SideBar, Socials, Wrapper } from "../index.ts";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      {/*Sidebar*/}
      <SideBar />
      <Wrapper display="flex" className="navbar--wrapper">
        <Logo />
        <Socials />
      </Wrapper>
    </nav>
  );
};

export default NavigationBar;
