import React, { ReactNode } from "react"
import Styled from "./styled"

export interface Props {
  url: string
  children: ReactNode
}

const ButtonGoogle = ({ url, children }: Props) => {
  const goTo = () => {
    window.open(url, "_blank")
  }

  return <Styled.Button onClick={goTo}>{children}</Styled.Button>
}

export default ButtonGoogle
