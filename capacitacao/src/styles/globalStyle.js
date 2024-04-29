import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button, textarea {
    font: 400 1rem 'Roboto', sans-serif;
  }

  body {
    background: #333;
    color: #fff;
  }
`