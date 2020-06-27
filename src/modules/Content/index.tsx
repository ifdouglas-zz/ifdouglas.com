import React from "react"
import Styled from "./styled"

const Content = () => (
  <Styled.Wrapper>
    <div
      id="retainable-rss-embed"
      data-rss="https://medium.com/feed/@tuntz"
      data-maxcols="3"
      data-layout="grid"
      data-poststyle="inline"
      data-readmore="Read the rest"
      data-buttonclass="btn btn-primary"
      data-offset="-100"
    ></div>
  </Styled.Wrapper>
)

export default Content
