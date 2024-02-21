import "./Hero.css";
import { Container, Section } from "../../index.ts";

const Hero = () => {
  return (
    <Section $dark={false}>
      <Container className="hero">
        <div className="hero__heading">
          <h1>MarlonDev.io</h1>
          <h2 className="flex-column">
            <span>Your Business Vision,</span>
            <span>My FullStack Mission</span>
          </h2>
        </div>
        <p>
          Welcome to my portfolio,where every line of code tells a story of
          rebirth and relentless ambition. Dive into a journey of transformation
          and witness how technology can not only rebuild lives but also shape
          futures. Your path to inspiration starts here."
        </p>
      </Container>
    </Section>
  );
};

export default Hero;
