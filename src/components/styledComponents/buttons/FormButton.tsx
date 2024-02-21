import styled from "styled-components";
import { NavigationButton } from "../../index.ts";

const FormButton = styled(NavigationButton)`
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 0px 5px 1px var(--color-green-light);
  align-self: center;
  min-width: 20rem;
  padding: 1.5rem 2rem;
  &:hover {
    transform: translateY(0.2rem);
    cursor: pointer;
  }
`;
export default FormButton;
