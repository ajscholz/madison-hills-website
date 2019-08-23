import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #2db34b;
    --primaryLight: #69e679;
    --primaryDark: #00821d;
    --white: #F2EEEE;
    --black: #252323;
    --secondary: #3A4E48;
    --tertiary: #6A7B76;
    --danger: tomato;
    --mainTransition: all .3s ease;
    --shadow1: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    --shadow2: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    --shadow3: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    --shadow4: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    --shadow5: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

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
`;
