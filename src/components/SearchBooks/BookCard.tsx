import { Dispatch } from "react";
import styled from "styled-components";
import { GoogleData } from "protocols";
import { Wrapper as Style } from "../BookList/BookCard";

export default function BookCard({ id, volumeInfo, setBookId }: GoogleData & { setBookId: Dispatch<React.SetStateAction<string>> }) {
    function handleClick(id: string) {
        setBookId(id);
    }

    return (
        <Wrapper onClick={() => handleClick(id)}>
            <div>
                <img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title} />
                <p>{volumeInfo.title}</p>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled(Style)`
    & > div > p {
        color: var(--main-white);
        text-align: center;
    }

    & > div > img {
        bottom: 50px;
    }
`;
