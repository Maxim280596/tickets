import { createGlobalStyle } from 'styled-components';

import { BODY_BG_COLOR } from './styled/GlobalConstStyles';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color:${BODY_BG_COLOR};
    font-family: 'Roboto', sans-serif;
  }

  label {
    font-size:16px;
    padding-left:5px;
    position:relative;
    top:-4px;
    width:100%;
   
  }

  input {
    transform: scale(1.5); 
    }
`;
