import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    --primary: #2db34b;
    --primaryLight: #69e679;
    --primaryDark: #00821d;
    --white: #F2EEEE;
    --black: #252323;
    --danger: tomato;
    --mainTransition: all .3s ease;

  }

  * {
    box-sizing: border-box;
    font-family: "Nunito Sans";
    font-weight: 400;
    letter-spacing:.08rem;
  }

  html {
    height: 100%;
      -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    font-size: .95rem;
    @media(min-width: 500px) {
      font-size: 1rem;
    }
  }

  #___gatsby {
    height: 100%;
  }

#gatsby-focus-wrapper {
  height: 100%;
}


  main {
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, a {
    cursor: pointer;
  }
`
