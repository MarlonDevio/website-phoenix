import "./About.css";
import { Container, Section } from "../../index.ts";

const About = () => {
  return (
    <Section $dark={true}>
      <Container>
        <h2>ABOUT</h2>
        <p style={{ maxWidth: "70ch" }}>
          messagemessagemes
          sagemessagemessagemessagemessagemessagemessagemessagemessagemes
          sagemessagemessagemessagemessag emessagemessagemessagemessagemei
          ssagemessagemessagemessagemessagemessageme
          ssagemessagemessagemessagemessagemessage
        </p>
      </Container>
    </Section>
  );
};

export default About;
