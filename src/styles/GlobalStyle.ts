import { createGlobalStyle } from 'styled-components';
import KoHoRegular from "@/fonts/KoHo-Regular.ttf"
import OswaldVariableFont from "@/fonts/Oswald-VariableFont_wght.ttf"
import BMHANNAPro from "@/fonts/BMHANNAPro.ttf"
import Pretendard from "@/fonts/Pretendard.ttf"

const GlobalStyle = createGlobalStyle`

@font-face {
	font-family: "KoHoRegular";
	src: local('KoHoRegular'), local("KoHoRegular");
	font-style: normal;
	src: url(${KoHoRegular}) format('truetype');
}

@font-face {
	font-family: "Oswald";
	src: url(${OswaldVariableFont});
}

@font-face {
	font-family: 'Oswald';
	src: local('OswaldVariableFont'), local('OswaldVariableFont');
	font-style: normal;
	src: url(${OswaldVariableFont}) format('truetype');
}

@font-face {
	font-family: 'BMHANNAPro';
	src: local('BMHANNAPro'), local('BMHANNAPro');
	font-style: normal;
	src: url(${BMHANNAPro}) format('truetype');
}

@font-face {
	font-family: 'Pretendard';
	src: local('Pretendard'), local('Pretendard');
	font-style: normal;
	src: url(${Pretendard}) format('truetype');
}
*{
  box-sizing:border-box;
	font-family: "Pretendard";
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0;
}
ul {
	margin: 0;
	padding: 0;
  list-style: none;
}
body {
	width:100%;
	height:100%;
	margin: 0;
  padding: 0;
}
a {
	text-decoration: none;
}
button {
  box-sizing:border-box;
	background: inherit; 
	border:none; 
	box-shadow:none; 
	border-radius:0; 
	padding:0; 
	cursor:pointer
}
`;

export default GlobalStyle;