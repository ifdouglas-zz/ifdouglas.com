import styled, { css } from "styled-components"
import { Props } from "./index"

type WrapperProps = Pick<Props, "color" | "size">

const Wrapper = styled.div<WrapperProps>`
  display: inline-flex;
  ${({ color, theme }) =>
    color &&
    css`
      color: ${theme.icon[color] || color};
    `};

  ${({ size }) =>
    size &&
    css`
      width: ${size};
      height: ${size};
    `};

  > div > div {
    display: flex;
  }

  svg {
    ${({ size }) =>
      size &&
      css`
        width: ${size};
        height: ${size};
      `};
  }
`

export default {
  Wrapper,
}
