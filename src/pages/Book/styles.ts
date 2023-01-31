import { Wrapper } from "pages/Home/styles";
import styled from "styled-components";

const MainWrapper = styled(Wrapper)`
    header {
        height: 30vh;
        padding: 20px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    header > h1 {
        font-size: 1.5rem;
    }

    main {
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