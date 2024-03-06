import Section from "@/components/containers/section/section";
import styles from "./about.module.css";
import Wrapper from "@/components/containers/wrapper/wrapper";
import { cn } from "@/lib/utils/cn";
import { Card } from "@/components/ui/card/card";
import Grid from "@/components/containers/grid/grid";

export default function About() {
  return (
    <Section
      id="about"
      $containerPadding
      className={cn(styles.about, "bg-gradient-from-green")}
    >
      <Wrapper>
        <h2>About</h2>
      </Wrapper>
    </Section>
  );
}
