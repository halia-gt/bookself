import { NextReadsTBR } from "protocols";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPriorityTBR } from "services/api";
import SectionTitle from "../../assets/styles/SectionTitle";
import { ImageWrapper, Wrapper } from "./styles";

export default function NextReads() {
    const [bookList, setBookList] = useState<NextReadsTBR[] | []>([]);

    useEffect(() => {
        getPriorityTBR()
            .then((response) => {
                const list: NextReadsTBR[] = response.data;
                for (let i = 0 ; i < 4 ; i ++) {
                    if (!list[i]) {
                        list[i] = {
                            id: undefined,
                            book_id: undefined,
                            books: undefined,
                            priority: false,
                        };
                    }
                }
                setBookList(list);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setBookList]);

    return (
        <Wrapper>
            <SectionTitle>
                Next Reads
            </SectionTitle>
            <div>
                {bookList.map((book: NextReadsTBR, index: number) => (
                    <Link to={`/book/${book.book_id}`} key={index}>
                        <ImageWrapper img={book.priority}>
                            {book.books ? <img src={book.books.image} alt="book"/> : <>+</>}
                        </ImageWrapper>
                    </Link>
                ))}
            </div>
        </Wrapper>
    );
}