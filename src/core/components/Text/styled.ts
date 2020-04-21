import styled from "styled-components"
import FontsSize from "./constants"
import { Props } from "."

const Text = styled.span<Props>`
  display: flex;
  flex-direction: row;
  font-size: ${({ as }) => FontsSize[as]};
  line-height: ${({ as }) => FontsSize[as]};
`

export default {
  Text,
}
