"use client";
import styles from "./navbar.module.css";
import clsx from "clsx";
import Container from "@/components/containers/container/container";
import Logo from "@/components/ui/logo/logo";

export default function Navbar() {
  return (
    <nav className={clsx(styles.navbar, "flex items-center  p-8")}>
      <Logo />
      <Container className="hidden items-end justify-end gap-4 md:flex">
        {/* TODO PLACE LINKS */}
        <a>about</a>
        <a>services</a>
        <a>contact</a>
      </Container>
    </nav>
  );
}
