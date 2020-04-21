import React, { ReactNode } from "react"
import Text from "core/components/Text"
import Styled from "./styled"

interface Props {
  image: ReactNode
  title: string
  description: string
}

const SliderItem = ({ image, title, description }: Props) => (
  <Styled.Item>
    {image}
    <Text.h2>{title}</Text.h2>
    <Styled.Caption>
      <Text.h5>{description}</Text.h5>
    </Styled.Caption>
  </Styled.Item>
)

export default SliderItem
