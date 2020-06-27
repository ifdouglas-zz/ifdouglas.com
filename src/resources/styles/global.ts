import { createGlobalStyle } from "styled-components"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roobert';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/Roobert-Regular.otf');
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Roobert', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    transition: all 0.25s linear;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  // overrides for react-slick lib
  .slick-dots > li > button:before {
    color: ${({ theme }) => theme.dots} !important;
  }

  .slick-prev::before, .slick-next::before {
    color: ${({ theme }) => theme.dots} !important;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`
