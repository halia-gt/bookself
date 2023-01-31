import styled from "styled-components";

const Wrapper = styled.main`
    background-color: var(--main-color);
    width: 100vw;
    height: auto;

    header {
        height: 30vh;
        padding: 40px 20px;
    }

    header h1 {
        color: var(--main-white);
        text-align: center;
        font-size: 1.8rem;
        font-family: "Libre Baskerville", serif;
    }

    main {
        background-color: var(--main-white);
        border-radius: 40px 40px 0 0;
        box-shadow: 0px -4px 6px 2px rgba(0, 0, 0, 0.05);
        padding: 10px;
        padding-bottom: 120px;
        height: auto;
    }
`;

export { Wrapper };