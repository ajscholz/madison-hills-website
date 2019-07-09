import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    --primary: #1d9639;
    --white: white;
    --black: black;
  }

  * {
    box-sizing: border-box;
    font-family: "Nunito Sans";
  }

  html {
      -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  main {
    overflow: hidden;
  }
`
