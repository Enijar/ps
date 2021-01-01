import styled, { css } from "styled-components";
import { WrapperProps } from "./types";

export const Wrapper = styled.div<WrapperProps>`
  background-repeat: repeat;
  overflow: hidden;
  position: relative;
  user-select: none;

  ${(props) => css`
    img {
      max-width: ${props.width}px;
      max-height: ${props.height}px;
    }
  `}
`;
