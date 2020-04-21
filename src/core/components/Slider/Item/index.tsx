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
    <Text type="h2">{title}</Text>
    <Styled.Caption>
      <Text type="h5">{description}</Text>
    </Styled.Caption>
  </Styled.Item>
)

export default SliderItem
