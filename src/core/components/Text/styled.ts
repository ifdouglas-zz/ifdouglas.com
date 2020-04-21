import styled, { css } from "styled-components"
import { Props } from "."

type Type = Pick<Props, "type">

const Text = styled.div`
  display: flex;
  flex-direction: row;

  ${({ type }: Type) =>
    type === "h1" &&
    css`
      font-size: 30px;
    `}

  ${({ type }: Type) =>
    type === "h2" &&
    css`
      font-size: 25px;
    `}

  ${({ type }: Type) =>
    type === "h3" &&
    css`
      font-size: 21px;
    `}

  ${({ type }: Type) =>
    type === "h4" &&
    css`
      font-size: 17px;
    `}

  ${({ type }: Type) =>
    type === "h5" &&
    css`
      font-size: 15px;
    `}

  ${({ type }: Type) =>
    type === "h6" &&
    css`
      font-size: 11px;
    `}
`

export default {
  Text,
}
