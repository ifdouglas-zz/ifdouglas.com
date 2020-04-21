import React, { ReactNode } from "react"
import Styled from "./styled"

export interface Props {
  children: ReactNode
}

const CardBody = ({ children }: Props) => <Styled.Body>{children}</Styled.Body>

export default CardBody
