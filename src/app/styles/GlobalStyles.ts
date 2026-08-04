import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html {
    font-size: 16px;
  }

  body {
    margin: 0;

    font-family: "Roboto", sans-serif;
    background: #ffffff;
    scroll-behavior: smooth;
    transition: transform 2s;

  }

  a {
    text-decoration: none;
  }

`;
