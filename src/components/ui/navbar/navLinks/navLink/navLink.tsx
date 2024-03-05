import Link from "next/link";
import styles from "./navLink.module.css";
import { AnchorHTMLAttributes, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  as?: string;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  prefetch?: boolean;
  locale?: string | false;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, ...props }) => {
  const markerRef = useRef<HTMLDivElement>(null);

  const indicator = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (markerRef.current && e.currentTarget instanceof HTMLElement) {
      markerRef.current.style.left = `${e.currentTarget.offsetLeft}px`;
      markerRef.current.style.width = `${e.currentTarget.offsetWidth}px`;
      markerRef.current.style.opacity = "1";
    }
  };

  const hideIndicator = () => {
    if (markerRef.current) {
      markerRef.current.style.opacity = "0";
    }
  };

  return (
    <>
      <Link
        className={cn(styles.navLink, props.className)}
        href={href}
        onMouseEnter={indicator}
        onMouseLeave={hideIndicator}
        {...props}
      >
        {children}
      </Link>
      <div ref={markerRef} className={cn(styles.marker)} />
    </>
  );
};

export default NavLink;
