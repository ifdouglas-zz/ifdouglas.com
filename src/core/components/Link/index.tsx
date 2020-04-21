import React, { ReactNode } from "react"
import Styled from "./styled"

export interface Props {
  active: boolean
  to: string
  children: ReactNode
}

const Link = ({ active, to, children }: Props) => {
  return (
    <Styled.Link to={to} active={active}>
      {children}
    </Styled.Link>
  )
}

export default Link
