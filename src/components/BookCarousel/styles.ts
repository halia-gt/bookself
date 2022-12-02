import styled from "styled-components";

const Wrapper = styled.section`
    perspective: 95vw;
    height: 515px;
    margin-top: -20vh;
    position: relative;

    ul {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        overflow-x: scroll;
        scroll-behavior: smooth;
        scroll-snap-type: x mandatory;
        list-style-type: none;
    }

    ul::-webkit-scrollbar {
        display: none;
    }

    svg {
        font-size: 30px;
        color: var(--secondary-color);
    }

    button {
        z-index: 1;
        position: absolute;
        top: 21vh;
        background-color: transparent;
    }

    button:last-child {
        right: 0;
    }
`;

const LiWrapper = styled.li`
    position: relative;
    flex: 0 0 100%;
    width: 100%;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        object-fit: cover;
        height: 415px;
        box-shadow: 10px 10px 20px -2px rgba(0, 0, 0, 0.4);
        scroll-snap-align: center;
    }

    h2, h3 {
        color: var(--text-black);
        text-align: center;
    }

    h2 {
        font-family: 'Libre Baskerville', serif;
        font-size: 30px;
        margin-top: 1rem;
        line-height: 32px;
    }

    h3 {
        font-size: 13px;
        margin-top: .3rem;
    }
`;

export {
    Wrapper,
    LiWrapper
};