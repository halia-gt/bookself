import styled from "styled-components";

type Props = {
    children: string,
};

export default function SectionTitle({ children }: Props) {
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