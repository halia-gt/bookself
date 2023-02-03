import { Wrapper } from "pages/Home/styles";
import styled from "styled-components";

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
`;

export { MainWrapper };