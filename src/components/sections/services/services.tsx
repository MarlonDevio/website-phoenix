import Section from "@/components/containers/section/section";
import Wrapper from "@/components/containers/wrapper/wrapper";
import UpperText from "./UpperText/UpperText";
import MainTitle from "./MainTitle/MainTitle";

export default function Services() {
  return (
    <Section $containerPadding>
      <UpperText />
      <Wrapper>
        <MainTitle />
      </Wrapper>
    </Section>
  );
}
