import styled from "styled-components";

export default function SectionTitle({ children }) {
    return (
        <Wrapper>
            { children }
        </Wrapper>    
    );
}

const Wrapper = styled.h3`
    color: var(--text-black);
    font-size: 18px;
    font-weight: bold;
`;