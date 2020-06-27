import styled from "styled-components"
import get from "lodash/get"
import { FontSize } from "./constants"

interface Props {
  as: string
}

const Text = styled.span<Props>`
  display: flex;
  flex-direction: row;
  font-size: ${({ as }) => get(FontSize, as, "")};
  line-height: ${({ as }) => get(FontSize, as, "")};
`

export default {
  Text,
}
