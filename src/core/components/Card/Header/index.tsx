import React from "react"
import Text from "core/components/Text"
// import { ReactComponent as NoLogoSVG } from "resources/imgs/no-logo.svg"
import { Product } from "modules/Product/interfaces"
import Styled from "./styled"

const CardHeader = ({
  logo,
  title,
  subtitle,
  technology,
  version,
}: Product) => (
  <Styled.Header>
    <Styled.Logo>{logo}</Styled.Logo>
    <Styled.Title>
      <Text.h1>{title}</Text.h1>
      <Text.h3>{subtitle}</Text.h3>
      <Text.h6>{version}</Text.h6>
      <Text.h6>{technology}</Text.h6>
    </Styled.Title>
  </Styled.Header>
)

export default CardHeader
