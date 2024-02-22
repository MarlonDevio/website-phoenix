import "./Socials.scss";
import { GithubIcon, InstagramIcon, LinkedInIcon } from "../index.ts";

const Socials = () => {
  return (
    <div className="socials flex">
      <a href="https://www.github.com/marlondevio">
        <GithubIcon />
      </a>
      <a href="https://www.instagram.com/marlondev.io/">
        <InstagramIcon />
      </a>
      <a href="https://www.linkedin.com/in/marlon-dev-io">
        <LinkedInIcon />
      </a>
    </div>
  );
};

export default Socials;
