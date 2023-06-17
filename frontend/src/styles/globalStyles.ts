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
    font-family: 'Poppins', sans-serif;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-size: x-large;
    
    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.text};
    }
    
    @media only screen and (max-width: 600px) {
      font-size: 95%;
    }
  }
`;

export default GlobalStyle;
