import React, { ReactNode } from "react"
import Styled from "./styled"

interface Props {
  children: ReactNode
}

const Slider = ({ children }: Props) => {
  return <Styled.Slider>{children}</Styled.Slider>
}

export default Slider
