import styled from "styled-components";

const NavigationButton = styled.button<{ theme?: string }>`
  color: var(--color-green-light);
  font-size: 2rem;
  padding: 0.8rem 1.5rem;
  box-shadow:
    0px 0px 0px 1px var(--color-green-light),
    inset -1px 1px 10px -1px var(--color-green-light);
  border-radius: 1rem;
  font-weight: 700;
  border: none;
  background-color: transparent;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: var(--color-black);
    box-shadow:
      0px 0px 0px 1px var(--color-green-light),
      inset 0px 0px 60px 5px var(--color-green-light);
    cursor: pointer;
  }
`;

export default NavigationButton;
