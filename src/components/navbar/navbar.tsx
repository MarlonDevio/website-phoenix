import { cn } from "@/lib/utils/cn";
import NavLinks from "./navLinks/navLinks";
import { useState, useEffect } from "react";
import Logo from "../ui/logo/logo";
import { useContext } from "react";
import { ThemeContext } from "@/app/themeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // return (
  //       <nav className={`active ${show && 'hidden'}`}>
  //       ....
  //       </nav>
  return (
    <nav className="flex items-baseline px-[3rem] py-[2rem]">
      <Logo />
      <div className={cn("ml-auto mt-[2rem] flex gap-10 font-semibold")}>
        <NavLinks />
        <button onClick={() => setDarkMode(!darkMode)}>Theme </button>
      </div>
    </nav>
  );
};

export default Navbar;
