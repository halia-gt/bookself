import styled from "styled-components";

const Wrapper = styled.main`
    background-color: #407088;
    width: 100vw;
    height: 100vh;

    header {
        height: 30vh;
    }

    .image-container {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 10vh;
    }

    img {
        object-fit: cover;
        width: 275px;
        box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
    }

    .main {
        background-color: #F0F0F0;
        height: 70vh;
        border-radius: 20px 20px 0 0;
        box-shadow: 0px -4px 6px 2px rgba(0, 0, 0, 0.05);
    }
`;

export {
    Wrapper
};