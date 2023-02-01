import SectionTitle from "assets/styles/SectionTitle";
import { CompleteBook } from "protocols";
import FinishReadForm from "./FinishReadForm";
import { Wrapper } from "./styles";

export default function BookInfo(props: CompleteBook) {
    const book = props.books;

    return (
        <Wrapper>
            {book.books_read.length > 0 ? (
                <FinishReadForm {...book.books_read[0]} />
            ) : <></>}

            <SectionTitle>Pages</SectionTitle>
            <p>{book.pages}</p>
            <SectionTitle>Year of Publication</SectionTitle>
            <p>{book.publication_date.substring(0, 4)}</p>

            {book.books_read.length > 0 ? (
                <>
                    <SectionTitle>Format</SectionTitle>
                    <p>{book.books_read[0].book_format}</p>
                </>
            ) : <></>}

            {book.books_read.length > 0 && book.books_read[0].book_format === "Audiobook" ? (
                <>
                    <SectionTitle>Hours</SectionTitle>
                    <p>{`${Math.floor(Number(book.books_read[0].minutes) / 60)}:${Number(book.books_read[0].minutes) % 60}`}</p>
                </>
            ) : <></>}

            {book.series_books.length > 0 ? (
                <>
                    <SectionTitle>Serie</SectionTitle>
                    <p>{book.series_books[0].series.name}</p>
                    <SectionTitle>Volume</SectionTitle>
                    <p>{book.series_books[0].order} / {book.series_books[0].series.total_number_of_books}</p>
                </>
            ) : <></>}
        </Wrapper>
    );
}