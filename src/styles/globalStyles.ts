import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    overflow-x:hidden;
    scroll-behavior: smooth;
  }
  body {
    min-height: 100vh;
    min-width: 100%;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
