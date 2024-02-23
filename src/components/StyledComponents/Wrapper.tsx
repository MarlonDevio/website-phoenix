import styled, { css } from "styled-components";

interface WrapperProps {
  display?: "flex" | "grid";
}

const Wrapper = styled.div<WrapperProps>`
  max-width: 136.6rem;
  margin: auto;
  ${({ display }) =>
    display &&
    css`
      display: ${display};
    `}
`;
export default Wrapper;
