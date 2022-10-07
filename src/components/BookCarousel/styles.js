import styled from "styled-components";

const Wrapper = styled.section`
    width: 100%;
    height: auto;
    margin-top: -20vh;

    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    img {
        object-fit: cover;
        width: 275px;
        box-shadow: 10px 10px 20px -2px rgba(0, 0, 0, 0.4);
    }

    svg {
        font-size: 30px;
        color: var(--secondary-color);
    }

    h2, h3 {
        color: var(--text-black);
        text-align: center;
    }

    h2 {
        font-family: 'Libre Baskerville', serif;
        font-size: 30px;
        margin-top: 1rem;
    }

    h3 {
        font-size: 13px;
        margin-top: .2rem;
    }
`;

export { Wrapper };