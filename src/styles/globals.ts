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

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
`;