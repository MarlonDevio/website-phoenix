"use client";
import Section from "../../containers/section/section";
import styles from "./about.module.css";
import Wrapper from "../../containers/wrapper/wrapper";
import { cn } from "@/lib/utils/cn";
import { Card } from "../../ui/card/card";
import Grid from "../../containers/grid/grid";

export default function About() {
  return (
    <Section id="about" $containerPadding className={cn(styles.about)}>
      <Wrapper>
        <h2>About</h2>
      </Wrapper>
    </Section>
  );
}
