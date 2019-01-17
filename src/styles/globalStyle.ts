import { createGlobalStyle } from './styled-components'

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Oxygen');
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  html, body {
    background-color: ${({ theme }) => theme.color.white};
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }

  h1, h2, h3 {
    font-family: Oxygen, sans-serif;
  }
`
