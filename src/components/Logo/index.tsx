import { GiBookshelf } from "react-icons/gi";
import styled from "styled-components";

export default function Logo() {
    return(
        <Wrapper>
            <GiBookshelf />
            <h1>BOOKSELF</h1>
        </Wrapper>    
    );
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > svg {
        color: var(--main-white);
        font-size: 2.3rem;
        padding-bottom: 3px
    }

    & > h1 {
        color: var(--main-white);
        font-size: 1.8rem;
        font-family: "Libre Baskerville", serif;
        margin-left: 5px;
    }

`;
