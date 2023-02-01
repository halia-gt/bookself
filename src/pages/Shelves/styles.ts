import styled from "styled-components";
import { Wrapper } from "../Home/styles";

const MainWrapper = styled(Wrapper)`
    & > header {
        height: 10vh;
        padding: 20px 20px;
    }

    & > header > div > h1 {
        font-size: 1rem;
    }

    & > header > div > svg {
        font-size: 1.7rem;
    }

    & > main {
        min-height: 90vh;
    }

    & > main > div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        border: 1px solid red;
    }
`;

export { MainWrapper };