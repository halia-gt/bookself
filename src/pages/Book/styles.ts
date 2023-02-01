import { Wrapper } from "pages/Home/styles";
import styled from "styled-components";

const MainWrapper = styled(Wrapper)`
    & > header {
        height: 30vh;
        padding: 20px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    & > header > div > h1 {
        font-size: 1rem;
    }

    & > header > div > svg {
        font-size: 1.7rem;
    }

    & > main {
        min-height: 70vh;
    }

    & > main > div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        border: 1px solid red;
    }
`;

export { MainWrapper };