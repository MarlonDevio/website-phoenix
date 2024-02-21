import "./NavigationBar.css";
import { Logo, NavigationButton } from "../index.ts";
import { useHideOnScroll, useTheme } from "../../hooks";

const NavigationBar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { theme } = useTheme();
  const isHidden = useHideOnScroll();

  return (
    <nav
      className={`navigation-bar flex a-baseline ${theme} ${isHidden ? "navbar-hidden" : ""}`}
    >
      <Logo theme={theme} />
      <ul className="flex nav__list a-center">
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
        <NavigationButton theme={theme}>Contact</NavigationButton>
      </ul>
      {/*<button onClick={toggleTheme}>toggle</button>*/}
    </nav>
  );
};

export default NavigationBar;
