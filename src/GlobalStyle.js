import { createGlobalStyle } from  'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
			box-sizing: border-box;
	}
	html, body {
			width: 100vw;
			height: 100vh;
			margin: 0;
			height: 0;
	}
	body {
			overflow: ${({stopScroll}) => stopScroll && 'hidden'};
	}
	#root {
			height: 100vh;
			width: 100vw;
	}
`;

export default GlobalStyle;