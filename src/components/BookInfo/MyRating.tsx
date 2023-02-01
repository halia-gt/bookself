import { useState } from "react";
import styled from "styled-components";
import { IoStarOutline, IoStar } from "react-icons/io5";

const noStars = [
    {
        id: 1,
        rating: 0,
        selected: false,
    },
    {
        id: 2,
        rating: 0,
        selected: false,
    },
    {
        id: 3,
        rating: 0,
        selected: false,
    },
    {
        id: 4,
        rating: 0,
        selected: false,
    },
    {
        id: 5,
        rating: 0,
        selected: false,
    },
];

type Props = {
    data: {
        date_finished: string,
        rating: number,
    },
    setData: React.Dispatch<React.SetStateAction<{
        date_finished: string;
        rating: number;
    }>>
};

export default function MyRating({ data, setData }: Props) {
    const [stars, setStars] = useState<{
        id: number,
        rating: number,
        selected: boolean,
    }[]>(noStars);

    function handleClick(id: number) {
        const aux = stars.map((star, index) => {
            if (index < id) {
                return {
                    ...star,
                    selected: true,
                }
            }
            return {
                ...star,
                selected: false,
            }
        });

        setData({ ...data, rating: id });
        setStars(aux);
    }

    return (
        <Wrapper selected={stars[0].selected}>
            {stars.map(star => star.selected ? 
                (
                    <IoStar key={star.id} onClick={() => handleClick(star.id)} />    
                
                ) : (
                    <IoStarOutline key={star.id} onClick={() => handleClick(star.id)} />    
                )
            )}
        </Wrapper>    
    );
}

const Wrapper = styled.div<{ selected: boolean }>`
    display: flex;

    & > svg {
        color: ${props => props.selected ? "var(--star-color)" : "var(--text-black)"};
    }
`;
