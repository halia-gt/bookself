import styled from "styled-components";

const Wrapper = styled.section`
    margin-top: 3rem;

    & > form {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    & > form > input {
        width: 70%;
        height: 30px;
    }

    & > form > button {
        background-color: var(--accent-color);
        width: 25%;
        border-radius: 15px;
        color: var(--white-background);
        box-shadow: 0 0 10px -4px rgba(0, 0, 0, 0.2);
        height: 30px;

        &:active {
            transform: scale(0.97);
        }
    }

    & > section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

export {
    Wrapper,
};