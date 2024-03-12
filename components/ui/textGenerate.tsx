"use client";
import Container from "../containers/container/container";
import Section from "../containers/section/section";
import Wrapper from "../containers/wrapper/wrapper";
import { TextGenerateEffect } from "./textGenerateEffect";
import { fadeInOnView } from "../../src/lib/utils/motionTemplates";
import { init } from "next/dist/compiled/webpack/webpack";

const words = `Sure, I write code. Clean, efficient, and occasionally witty—just like my coffee. I believe in elegance, not just in attire but in algorithms. Hire me, and your bugs won't just be fixed, they'll retire.
`;

export function TextGenerate() {
  return (
    <Section>
      <Wrapper
        variants={fadeInOnView}
        whileInView="whileInView"
        initial="initial"
      >
        <Container className="mx-auto flex max-w-[70vw]">
          <TextGenerateEffect words={words} />
        </Container>
      </Wrapper>
    </Section>
  );
}
