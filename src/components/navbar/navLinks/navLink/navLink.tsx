import Link from "next/link";

import { AnchorHTMLAttributes, useEffect, useRef, useState } from "react";

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

const NavLink: React.FC<NavLinkProps> = ({
  className,
  href,
  children,
  ...props
}) => {
  const markerRef = useRef<HTMLDivElement>(null);

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
