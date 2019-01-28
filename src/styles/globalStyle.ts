import { createGlobalStyle } from './styled-components'

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Spectral|Karla');

  * {
    box-sizing: border-box;
  }

  html, body {
    background-color: ${({ theme }) => theme.color.background};
    padding: 0;
    margin: 0;
    font-family: Karla, sans-serif;
  }

  h1, h2, h3 {
    font-family: Spectral, sans-serif;
    font-weight: normal;
  }

  h1 {
    font-size: calc(4vmin + 1em);
  }

  h2 {
    font-size: calc(3vmin + 1em);
  }

  h3 {
    font-size: calc(2vmin + 1em);
  }

  p {
    line-height: 2em;
    font-size: 1.25em;
  }
`
