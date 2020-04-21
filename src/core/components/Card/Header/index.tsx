import React, { ReactNode } from "react"
import Text from "core/components/Text"
// import { ReactComponent as NoLogoSVG } from "core/assets/imgs/no-logo.svg"
import Styled from "./styled"

interface Props {
  logo: ReactNode
  title: string
  subtitle: string
  technology: string
  version: string
}

const CardHeader = ({ logo, title, subtitle, technology, version }: Props) => {
  const renderLogo = () => <Styled.Logo>{logo}</Styled.Logo>
  const renderTitle = () => <Text type="h1"> {title} </Text>
  const renderSubtitle = () => <Text type="h3"> {subtitle} </Text>
  const renderVersion = () => <Text type="h6"> {version} </Text>
  const renderTechnology = () => <Text type="h6"> {technology} </Text>

  return (
    <Styled.Header>
      {renderLogo()}
      <Styled.Title>
        {renderTitle()}
        {renderSubtitle()}
        {renderVersion()}
        {renderTechnology()}
      </Styled.Title>
    </Styled.Header>
  )
}

export default CardHeader
