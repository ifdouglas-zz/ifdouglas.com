import styled from "styled-components"
// import HEADINGS_SIZE from "./constants"
import { Props } from "."

const Text = styled.span<Props>`
  display: flex;
  flex-direction: row;
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ fontSize }) => fontSize};
`

export default {
  Text,
}
