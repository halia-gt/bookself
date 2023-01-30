import styled from "styled-components";

const Wrapper = styled.section`
    margin-top: 3rem;

    & > section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

export {
    Wrapper,
};