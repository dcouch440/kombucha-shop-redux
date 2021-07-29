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
  overflow: ${({ stopScroll }) => stopScroll && 'hidden'};
}
#root {
  overflow: auto;
  height: 100vh;
  width: 100vw;
  background-color: black;
}
`;

export default GlobalStyle;