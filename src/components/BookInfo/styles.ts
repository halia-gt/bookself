import styled from "styled-components";

const Wrapper = styled.section`
    margin-top: 3rem;

    & > h3 {
        margin-top: 1rem;
    }

    & > p {
        padding-top: .8rem;
    }
`;

const Forms = styled.form`
    & > h3 {
        margin-bottom: 1rem;
    }

    & > div {
        margin-bottom: 1.5rem;
    }

    & > div > svg {
        font-size: 40px;
        margin-right: 20px;
    }

    & > section {
        display: flex;
        justify-content: space-between;
        width: 80%;
    }

    & > section > div > h3 {
        margin-bottom: 1rem;
    }

    & > section > div > p {
        padding: .4rem 0;
    }

    & > section > div > h3 {
        margin-bottom: 1rem;
    }

    & > button {
        margin-top: 2rem;
    }
`;

export {
    Wrapper,
    Forms
};