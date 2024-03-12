import { cn } from "@/lib/utils/cn";
import NavLink from "./navLink/navLink";
import { navigationLinks } from "@/constants/links";
import { buttonStyles } from "../../../lib/utils/stylesheet";
const NavLinks: React.FC = () => {
  return navigationLinks.map((link) => {
    return (
      <NavLink
        className={cn(
          link.label === "Contact"
            ? buttonStyles("text-[2rem]")
            : "text-[2rem]",
        )}
        href={link.href}
        key={link.label}
      >
        {link.label}
      </NavLink>
    );
  });
};

export default NavLinks;
