import { createGlobalStyle } from  'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        height: 0;
    }
    body {
        overflow: ${({stopScroll}) => stopScroll && 'hidden'};
    }
    #root {
        height: 100%;
        width: 100%;
    }
`;

export default GlobalStyle;