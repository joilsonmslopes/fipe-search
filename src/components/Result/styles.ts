import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    background: #DCF5F2;
    padding: 60px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`  
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
        font-size: 1.5rem;
        color: #424246;
        font-weight: 700;
    }

    h2 {
        background: #00A38C;
        padding: 0.5rem 2rem;
        border-radius: 2rem;
        font-weight: 700;
        color: #fff;
        margin-top: 1rem;
    }

    p {
        margin-top: 1rem;
        color: #848C8A;
    }

    button {
        margin-top: 3rem;
    }
`;