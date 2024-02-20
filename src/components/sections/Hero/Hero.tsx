import "./Hero.css";
import { Container, Section } from "../../index.ts";

const Hero = () => {
  return (
    <Section $dark={false}>
      <Container>
        <h1>
          Whatever The Mind can Conceive and Believe,
          <br /> It can Achieve
        </h1>
        <p style={{ maxWidth: "70ch" }}>
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsum LLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumorem ipsum
        </p>
      </Container>
    </Section>
  );
};

export default Hero;
