import { createGlobalStyle } from 'styled-components';
import {KoHoRegular} from "@/fonts/KoHo-Regular.ttf"
import {OswaldVariableFont} from "@/fonts/Oswald-VariableFont_wght.ttf"

const GlobalStyle = createGlobalStyle`

@font-face {
	font-family: "KoHo";
	src: url(${KoHoRegular});
}

@font-face {
	font-family: "Oswald";
	src: url(${OswaldVariableFont});
}

*{
  box-sizing:border-box;
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