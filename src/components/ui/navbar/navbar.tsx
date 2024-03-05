"use client";
import styles from "./navbar.module.css";
import Container from "@/components/containers/container/container";
import Logo from "@/components/ui/logo/logo";
import { cn } from "@/lib/utils/cn";
import NavLinks from "./navLinks/navLinks";

export default function Navbar() {
  return (
    <nav className={cn(styles.navbar, "flex items-center ")}>
      <Logo />
      <Container
        className={cn(styles.linkContainer, "relative hidden  md:flex")}
      >
        <NavLinks />
      </Container>
    </nav>
  );
}
