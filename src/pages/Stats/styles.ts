import styled from "styled-components";
import { Wrapper } from "../Home/styles";

const MainWrapper = styled(Wrapper)`
    background-color: var(--main-white);

    header {
        height: 10vh;
        padding: 20px 20px;
    }

    main {
        background-color: var(--main-color);
        min-height: 90vh;
    }
`;

export { MainWrapper };