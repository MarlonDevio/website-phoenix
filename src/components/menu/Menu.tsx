"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import to = gsap.to;

const menuLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Our Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

export const Menu = () => {
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div ref={container} className="text-black">
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/">Logo</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="overlay-bar">
          <div className="menu-logo">
            <Link href="/">Logo</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p>Close</p>
          </div>
        </div>
        <div className="overlay-icone">
          <p>&#x2715;</p>
        </div>
        <div className="overlay-copy">
          <div className="links">
            {menuLinks.map((link, index) => (
              <div className={"menu-link-item"} key={index}>
                <div className="itemholder" onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link">
                    {link.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="info">
            <div className="col">
              <a href="#">X &#8599;</a>
              <a href="#">X &#8599;</a>
              <a href="#">X &#8599;</a>
              <a href="#">X &#8599;</a>
              <a href="#">X &#8599;</a>
            </div>
            <div className="col">
              <p>info@mar.</p>
              <p>034004304</p>
            </div>
          </div>
        </div>
        <div className="overlay-preview">
          <p>View Showreel</p>
        </div>
      </div>
    </div>
  );
};
