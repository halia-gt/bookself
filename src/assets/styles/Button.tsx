import styled from "styled-components";

export default function Button ({ children } ) {
    return (
        <Wrapper>
            { children }
        </Wrapper>    
    );
}

const Wrapper = styled.button`
    background: var(--accent-color);
    box-shadow: 0 0 10px -4px rgba(0, 0, 0, 0.2);
    border-radius: 24px;
    width: 100%;
    height: 48px;
    color: var(--main-white);
    font-size: 1rem;
    font-weight: 700;

    &:active {
        font-size: calc(1rem / 0.97);
        transform: scale(0.97);
    }
`;