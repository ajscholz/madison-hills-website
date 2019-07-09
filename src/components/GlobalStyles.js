import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    --primary: #1d9639;
    --white: #F2EEEE;
    --black: #252323;
  }

  * {
    box-sizing: border-box;
    font-family: "Nunito Sans";
    letter-spacing:.08rem;
    color: var(--black);
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

  a {
    text-decoration: none;
    color: inherit;
  }
`
