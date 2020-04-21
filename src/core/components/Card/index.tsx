import React, { ReactNode } from "react"
import Styled from "./styled"

interface Props {
  children: ReactNode
}

const Card = ({ children }: Props) => {
  return <Styled.Card>{children}</Styled.Card>
}

export default Card
