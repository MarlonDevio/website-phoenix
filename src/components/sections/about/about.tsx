import Container from "@/components/containers/container/container";
import styles from "./about.module.css";
import Section from "@/components/containers/section/section";
import Wrapper from "@/components/containers/wrapper/wrapper";
import { motion } from "framer-motion";
import Grid from "@/components/containers/grid/grid";
import Image from "next/image";

export default function About() {
  return (
    <Section $containerPadding className="bg-gradient-from-green">
      <Wrapper>
        <h2>About</h2>
      </Wrapper>
    </Section>
  );
}
