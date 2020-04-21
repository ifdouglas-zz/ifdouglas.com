import React, { ReactNode } from "react"
import Styled from "./styled"

export interface Props {
  children: ReactNode
}

const ButtonOutlined = ({ children }: Props) => (
  <Styled.Button>{children}</Styled.Button>
)

export default ButtonOutlined
