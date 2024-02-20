import styled from "styled-components";

const Section = styled.section<{ $dark: boolean }>`
  background-color: ${(props) => (props.$dark ? "var(--color-black)" : "")};
  padding: 9rem 0;
`;

export default Section;
