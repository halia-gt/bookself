import styled from "styled-components";
import { BookRead } from "protocols";
import Rating from "assets/styles/Rating";
import { Link } from "react-router-dom";

export default function BookCard(props: BookRead) {
    return (
        <Link to={`/book/${props.book_id}`}>
            <Wrapper>
                <div>
                    <img src={props.books.image} alt="book cover" />
                    <Rating rating={Number(props.rating)} />
                </div>
            </Wrapper>   
        </Link>
    );
}

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: calc((100vw - 24px - 20px) / 3);
    height: 200px;

    & > div {
        background-color: var(--main-color);
        width: 100%;
        height: 80px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        padding: 15px;
        box-shadow: 0px -4px 6px 2px rgba(0, 0, 0, 0.05);
    }

    & > div > img {
        width: 90px;
        height: calc(90px / 0.66);
        object-fit: cover;
        position: absolute;
        z-index: 1;
        bottom: 40px;
        left: calc(((100vw - 24px - 20px) / 3) / 2 - (90px / 2));
        box-shadow: 0px -4px 6px 2px rgba(0, 0, 0, 0.05);
    }
`;