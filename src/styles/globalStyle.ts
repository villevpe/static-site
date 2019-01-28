import { createGlobalStyle } from './styled-components'

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Oxygen');
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  * {
    box-sizing: border-box;
  }

  html, body {
    background-color: ${({ theme }) => theme.color.background};
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }

  h1, h2, h3 {
    font-family: Oxygen, sans-serif;
  }

  h1 {
    font-size: 4vmin + 1em;
  }

  h2 {
    font-size: 3vmin + 1em;
  }

  h3 {
    font-size: 2vmi + 1em;
  }

  p {
    line-height: 2em;
    font-size: 1.15em;
  }
`
