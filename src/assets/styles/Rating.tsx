import styled from "styled-components";
import { IoStarOutline, IoStar } from "react-icons/io5";

export default function Rating({ rating }: { rating: number }) {
    return (
        <Wrapper>
            {rating >= 1 ? <IoStar /> : <IoStarOutline />}
            {rating >= 2 ? <IoStar /> : <IoStarOutline />}
            {rating >= 3 ? <IoStar /> : <IoStarOutline />}
            {rating >= 4 ? <IoStar /> : <IoStarOutline />}
            {rating >= 5 ? <IoStar /> : <IoStarOutline />}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    
    & > svg {
        color: var(--main-white);
        margin-left: 3px;
    } 
    
    & > svg:first-child {
        margin-left: 0;
    } 
`;