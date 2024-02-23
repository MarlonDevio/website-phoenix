import { motion } from "framer-motion";
import { css, styled } from "styled-components";

const StyledButton = styled(motion.button)<{ primary?: boolean }>`
    background-color: ${(props: { primary?: boolean }) =>
      props.primary ? "#c7900a" : "transparent"};
    border: none;

    box-shadow: ${(props: { primary?: boolean }) =>
      props.primary ? "" : "inset 0 0 2px 2px rgb(0, 208, 98)"};

    color: ${(props: { primary?: boolean }) =>
      props.primary ? "black" : "#fff"};

    border-radius: 5px;
    padding: 2rem 2rem;
    transition: all 0.3s ease-in-out;
    font-weight: 600;

    &:hover {
        cursor: pointer;
        box-shadow: ${(props: { primary?: boolean }) => css`
          ${props.primary
            ? "inset 0 0 25px 25px #57ffc6"
            : "inset 0 0 25px 25px rgb(0, 208, 98)"};
        `}
`;

export default StyledButton;
