import styled from "styled-components";

const Section = styled.section<{ $dark: boolean }>`
  background-color: ${(props) =>
    props.$dark ? "var(--color-black)" : "transparent"};
  padding: 9rem 0;
  min-height: 100vh;
`;

export default Section;
