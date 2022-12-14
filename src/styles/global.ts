import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body {
        background-color: #1A1A1A;
    }
    
    a {
        text-decoration: none;
    }
    button {
        cursor: pointer;
    }

`;
