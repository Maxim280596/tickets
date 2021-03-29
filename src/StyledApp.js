import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color:#f3f7fa  ;
    font-family: 'Roboto', sans-serif;
  }

  label {
    font-size:16px;
    padding-left:5px;
  }

  input {
    transform: scale(1.5); 
    
  }
`;
