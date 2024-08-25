"use client";
import styles from "./navbar.module.css";
import Container from "@/components/containers/container/container";
import Logo from "@/components/ui/logo/logo";
import { cn } from "@/lib/utils/cn";
import NavLinks from "./navLinks/navLinks";
import { useState, useEffect } from "react";
import HamburgerMenu from "../hamburger-menu";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isFocus, setIsFocus] = useState(false);

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
    <nav
      className={cn(
        styles.navbar,
        "bg fixed z-50 flex min-h-[10vh] w-full items-center transition-all duration-300 ease-in-out",
        !show && "hidden",
      )}
    >
      <Logo />
      <Container
        className={cn(
          styles.linkContainer,
          "relative hidden  min-h-[10vh] lg:flex",
        )}
      >

        <NavLinks />
      </Container>

      <Container className={cn(styles.linkContainer, "flex flex-col self-end lg:hidden")}>
        <HamburgerMenu onClick={() => setIsFocus(!isFocus)} className="self-end relative" />

        <div className={`absolute flex top-[10vh] flex-col ${isFocus ? "" : "hidden"} transition-all duration-1000 ease-in-out`}>
          <NavLinks />
        </div>
      </Container>
    </nav>
  );
}
