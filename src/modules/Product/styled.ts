import styled, { keyframes } from "styled-components"
import breakpoint from "resources/styles/breakpoint"

const Article = styled.article`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 20px 100px;

  ${breakpoint.desktop} {
    flex-direction: column;
  }

  > * + * {
    margin-left: 20px;

    ${breakpoint.desktop} {
      margin-top: 40px;
    }
  }
`

const run = keyframes`
  0% { left: -300px;}
  50% { left: -100px;}
  100%{ left: -74px;}
`

const Animation = styled.section`
  position: absolute;
  animation: ease-in-out infinite alternate;
  animation-name: ${run};
  animation-duration: 5s;
  animation-delay: 3s;
  left: -300px;
  z-index: 1;

  svg {
    height: 700px;
  }
`

export default {
  Animation,
  Article,
}
