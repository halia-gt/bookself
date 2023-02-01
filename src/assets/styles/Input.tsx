import styled from "styled-components";

const Input = styled.input`
    background-color: var(--white-background);
    color: var(--text-black);
    border: none;
    box-shadow: 0 0 10px -4px rgba(0, 0, 0, 0.2);
    padding: .4rem 1rem;
    border-radius: 15px;
    font-family: "Roboto", sans-serif;

    &::placeholder {
        opacity: 0.7;
    }
`;

export {
    Input,
};