import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing:border-box;
  }
  html, 
  body {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
  }

  h1,h2,h3,p {
    margin: 0;
  }
`;
