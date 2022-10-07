import styled from "styled-components";

const Wrapper = styled.main`
    background-color: #407088;
    width: 100vw;
    height: auto;

    header {
        height: 30vh;
    }

    main {
        background-color: #F0F0F0;
        border-radius: 20px 20px 0 0;
        box-shadow: 0px -4px 6px 2px rgba(0, 0, 0, 0.05);
        padding: 10px;
        height: 100px;
        position: relative;
    }
`;

export { Wrapper };