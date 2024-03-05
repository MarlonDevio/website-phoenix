import NavLink from "./navLink/navLink";
import { navigationLinks } from "@/constants/links";
const NavLinks: React.FC = () => {
  return navigationLinks.map((link) => {
    return (
      <NavLink href={link.href} key={link.label}>
        {link.label}
      </NavLink>
    );
  });
};

export default NavLinks;
