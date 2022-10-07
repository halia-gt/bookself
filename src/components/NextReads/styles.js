import styled from "styled-components";

const Wrapper = styled.section`
    margin-top: 3rem;

    & > div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 2rem;
    }
`;

const ImageWrapper = styled.div`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    background-color: var(--neutral-color);
    width: 20vw;
    height: 20vw;
    color: var(--neutral-dark);
    border: ${props => (props.img ? '2px var(--neutral-dark) solid' : '2px var(--neutral-dark) dashed' )};
    box-shadow: 0 0 20px -4px rgba(0, 0, 0, 0.5);

    img {
        object-fit: cover;
        width: 20vw;
        height: 20vw;
        border-radius: 50%;
    }
`;

export {
    Wrapper,
    ImageWrapper
};