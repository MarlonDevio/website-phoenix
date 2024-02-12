import styled, { keyframes } from 'styled-components';

const animateText = keyframes`
  from{
    background-position: left;
  }
  to {
    background-position: right;
  }
`;
export const GradientText = styled.div`
  color: white; // Text color is white by default

  transition: all 0.5s ease;

  &:hover {
    background-position: right;
    background: linear-gradient(
      to right,
      var(--color-light-green),
      var(--color-light-green)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-size: 200% 100%;
    background-position: left;
    animation: ${animateText} 2s linear infinite;
  }
`;
