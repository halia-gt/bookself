import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "components/Footer";
import { getBookById } from "services/api";
import { MainWrapper } from "./styles";
import { CompleteBook } from "protocols";
import BookSummary from "components/BookSummary";
import BookInfo from "components/BookInfo";
import Logo from "components/Logo";
import BookContext from "contexts/bookContext";

const noBook = {
    id: 0,
    author_id: 0,
    book_id: 0,
    authors: {
        id: 0,
        country_id: 0,
        identity: "",
        name: "",
    },
    books: {
        id: 0,
        audience_id: 0,
        average_rating: "0",
        classic: false,
        genre_id: 0,
        image: "",
        pages: 0,
        publication_date: "",
        subgenre_id: 0,
        title: "",
        audiences: {
            id: 0,
            name: "",
        },
        books: [],
        books_read: [],
        genres: {
            id: 0,
            name: "",
        },
        owned: [],
        representativities_books: [],
        series_books: [],
        subgenres: {
            id: 0,
            name: "",
        },
    },
}

export default function Book() {
    const { bookId } = useParams<{ bookId: string }>();
    const [book, setBook] = useState<CompleteBook>(noBook);
    const [refresh, setRefresh] = useState<boolean>(false);
    const aux = {
        refresh,
        setRefresh,
    }

    useEffect(() => {
        getBookById(Number(bookId))
            .then((response) => {
                setBook(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [bookId, setBook, refresh]);

    return(
        <BookContext.Provider value={aux}>
            <MainWrapper>
                <header>
                    <Logo />
                    <BookSummary {...book} />
                </header>
                <main>
                    <BookInfo {...book} />
                </main>
                <Footer />
            </MainWrapper>
        </BookContext.Provider>
    );
}