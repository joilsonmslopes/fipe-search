import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
        font-size: 1.25rem;
        font-weight: 700;
        text-align: center;
        color: #424246;
        text-align:center;
        margin-bottom: 1.5rem;
    }
`;

export const Content = styled.section`
    max-width: 600px;
    padding: 20px 40px;
    background: #FFF;
`;