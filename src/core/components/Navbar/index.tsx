import React, { ReactNode } from "react"
import { ReactComponent as InstagramSVG } from "resources/imgs/instagram.svg"
import { ReactComponent as GitHubSVG } from "resources/imgs/github.svg"
import { ReactComponent as LinkedInSVG } from "resources/imgs/linkedin.svg"
// import { ReactComponent as YouTubeSVG } from "resources/imgs/youtube.svg";
import { ReactComponent as LogoSVG } from "resources/imgs/logo.svg"
import Text from "core/components/Text"
import Styled from "./styled"

export interface Props {
  children: ReactNode
}

const Navbar = ({ children }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Logo>
          <LogoSVG />
        </Styled.Logo>
        <Styled.Title>
          <Text.h3>Douglas</Text.h3>
          <Text.h6>App Engineer</Text.h6>
        </Styled.Title>
      </Styled.Header>
      <Styled.Body>{children}</Styled.Body>
      <Styled.Footer>
        <Styled.Link href="https://www.instagram.com/ifdouglas" target="_blank">
          <InstagramSVG />
        </Styled.Link>
        <Styled.Link href="https://www.github.com/ifdouglas" target="_blank">
          <GitHubSVG />
        </Styled.Link>
        <Styled.Link
          href="https://www.linkedin.com/in/ifdouglas"
          target="_blank"
        >
          <LinkedInSVG />
        </Styled.Link>
        {/* <Styled.Link
          href="https://www.youtube.com/channel/UCULnRixNG6dyQb9lo2xLrpg"
          target="_blank"
        >
          <YouTubeSVG />
        </Styled.Link> */}
      </Styled.Footer>
    </Styled.Wrapper>
  )
}

export default Navbar
