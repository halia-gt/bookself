import styled from "styled-components";
import { Wrapper } from "../Home/styles";

const MainWrapper = styled(Wrapper)`
    header {
        height: 10vh;
        padding: 20px 20px;
    }

    main {
        min-height: 90vh;
    }
`;

export { MainWrapper };