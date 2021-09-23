import { createGlobalStyle } from "styled-components"; 

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #F9F6FC;
    }

    body, select, button {
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
    }
`;