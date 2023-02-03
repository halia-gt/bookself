import { MainWrapper } from "./styles";
import Footer from "components/Footer";
import Logo from "components/Logo";
import SearchBooks from "components/SearchBooks";
import { useEffect, useState } from "react";
import BookForm from "components/BookForm";

export default function AddBook() {
    const [bookId, setBookId] = useState<string>("");

    return(
        <MainWrapper>
            <header>
                <Logo />
            </header>
            <main>
                {bookId.length === 0 ? (
                        <SearchBooks setBookId={setBookId} />
                    ) : (
                        <BookForm bookId={bookId} />
                    )
                }
            </main>
            <Footer add={true} />
        </MainWrapper>
    );
}