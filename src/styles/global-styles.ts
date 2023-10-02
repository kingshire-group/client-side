import { createGlobalStyle } from 'styled-components';
import Poppins100 from '../assets/fonts/poppins/static/Poppins-Thin.ttf';
import Poppins200 from '../assets/fonts/poppins/static/Poppins-ExtraLight.ttf';
import Poppins300 from '../assets/fonts/poppins/static/Poppins-Light.ttf';
import Poppins400 from '../assets/fonts/poppins/static/Poppins-Regular.ttf';
import Poppins500 from '../assets/fonts/poppins/static/Poppins-Medium.ttf';
import Poppins600 from '../assets/fonts/poppins/static/Poppins-SemiBold.ttf';
import Poppins700 from '../assets/fonts/poppins/static/Poppins-Bold.ttf';
import Poppins800 from '../assets/fonts/poppins/static/Poppins-ExtraBold.ttf';

export const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
	  overflowX: hidden;
	  overflowY: auto;
  }
  body {
	height:100%;
    background-color:#FFFFFF;
	  font-family: Poppins-SemiBold;
    margin: 0;
    padding: 0;
  }
  #root {
    min-height: 100%;
    min-width: 100%;
    position:relative;
  }
  @font-face {
    font-family: "Poppins-Thin";
		font-weight: 100;
		src: local("Poppins-Thin"), url(${Poppins100}) format("truetype");
	}
	@font-face {
    font-family: "Poppins-ExtraLight";
		font-weight: 200;
		src: local("Poppins-ExtraLight"), url(${Poppins200}) format("truetype");
	}
	@font-face {
    font-family: "Poppins-Light";
		font-weight: 300;
		src: local("Poppins-Light"), url(${Poppins300}) format("truetype");
	}
  @font-face {
    font-family: "Poppins-Regular";
    src: local("Poppins-Regular"), url(${Poppins400}) format("truetype");
		font-weight: 400;
  }
	@font-face {
		font-family: "Poppins-Medium";
		font-weight: 500;
		src: local("Poppins-Medium"), url(${Poppins500}) format("truetype");
	}
	@font-face {
		font-family: "Poppins-SemiBold";
		font-weight: 600;
		src: local("Poppins-SemiBold"), url(${Poppins600}) format("truetype");
	}
	@font-face {
		font-family: "Poppins-Bold";
		font-weight: 700;
		src: local("Poppins-Bold"), url(${Poppins700}) format("truetype");
	}
	@font-face {
		font-family: "Poppins-ExtraBold";
		font-weight: 800;
		src: local("Poppins-ExtraBold"), url(${Poppins800}) format("truetype");
	}
`;
