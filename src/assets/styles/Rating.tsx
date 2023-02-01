import styled from "styled-components";
import { IoStarOutline, IoStar, IoStarHalf } from "react-icons/io5";

export default function Rating({ rating, bigSize = false }: { rating: number, bigSize?: boolean }) {
    const ratingRound = Math.round(rating * 2) / 2;

    return (
        <Wrapper bigSize={bigSize}>
            {ratingRound >= 1 ? <IoStar /> : ratingRound === 0.5 ? <IoStarHalf /> : <IoStarOutline />}
            {ratingRound >= 2 ? <IoStar /> : ratingRound === 1.5 ? <IoStarHalf /> : <IoStarOutline />}
            {ratingRound >= 3 ? <IoStar /> : ratingRound === 2.5 ? <IoStarHalf /> : <IoStarOutline />}
            {ratingRound >= 4 ? <IoStar /> : ratingRound === 3.5 ? <IoStarHalf /> : <IoStarOutline />}
            {ratingRound >= 5 ? <IoStar /> : ratingRound === 4.5 ? <IoStarHalf /> : <IoStarOutline />}
        </Wrapper>
    );
}

const Wrapper = styled.div<{
    bigSize: boolean,
}>`
    display: flex;
    
    & > svg {
        color: var(--star-color);
        margin-left: 3px;
        font-size: ${props => props.bigSize ? "1.6rem" : "initial"};
    } 
    
    & > svg:first-child {
        margin-left: 0;
    } 
`;