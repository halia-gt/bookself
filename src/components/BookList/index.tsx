import SectionTitle from "assets/styles/SectionTitle";
import { BookRead } from "protocols";
import { useEffect, useState } from "react";
import { getBooksRead } from "services/api";
import BookCard from "./BookCard";
import { Wrapper } from "./styles";

export default function BookList({ selectedYear }: { selectedYear: number }) {
    const [bookList, setBookList] = useState<BookRead[]>([]);

    useEffect(() => {
        getBooksRead(selectedYear)
            .then((response) => {
                setBookList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [selectedYear]);

    return (
        <Wrapper>
            <SectionTitle>
                {`Books Read in ${selectedYear}`}
            </SectionTitle>
            <section>
                {bookList.map((book: BookRead) => (
                    <BookCard key={book.id} {...book} />
                ))}
            </section>
        </Wrapper>
    );
}