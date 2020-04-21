import React, { ReactNode } from "react"
import Styled from "./styled"

export interface Props {
  children: ReactNode
}

const CardFooter = ({ children }: Props) => (
  <Styled.Footer>{children}</Styled.Footer>
)

export default CardFooter
