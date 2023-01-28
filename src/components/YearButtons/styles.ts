import styled from "styled-components";

const ButtonWrapper = styled.section`
    margin-top: 2rem;
`;

const Button = styled.button<{selected: boolean}>`
    background-color: var(--secondary-color);
    border: none;
    color: var(--white-background);
    font-size: 1.2rem;
    padding: .4rem 1rem;
    border-radius: 17px;
    margin-right: 10px;
    text-align: center;
    opacity: ${props => props.selected ? "1" : ".8"};

    &:active {
        transform: scale(.96);
    }
`;

export {
    ButtonWrapper,
    Button,
};