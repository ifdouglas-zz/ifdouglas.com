import React from "react"
import { ReactSVG } from "react-svg"
import useDynamicImport from "core/hooks/useDynamicImport"
import Styled from "./styled"

export interface Props {
  name: string
  size?: string
  color?: string
  className?: string
}

const Icon = ({ name, color, size, className }: Props) => {
  const [uri] = useDynamicImport(name)

  return (
    <Styled.Wrapper
      data-testid={`icon-${name}`}
      className={className}
      color={color}
      size={size}
    >
      {uri ? <ReactSVG src={uri} /> : ""}
    </Styled.Wrapper>
  )
}

export default Icon
