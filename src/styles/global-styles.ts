import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
	  overflowX: hidden;
	  overflowY: auto;
  }
  body {
	height:100%;
    background-color:#FFFFFF;
	font-family: DefaultFont;
    margin: 0;
    padding: 0;
  }
  #root {
    min-height: 100%;
    min-width: 100%;
    position:relative;
  }
`;
