import { Input } from "assets/styles/Input";
import { GoogleBook, GoogleData } from "protocols";
import { Dispatch, useState } from "react";
import { searchBookGoogle } from "services/googleApi";
import BookCard from "./BookCard";
import { Wrapper } from "./styles";

export default function SearchBooks({ setBookId }: { setBookId: Dispatch<React.SetStateAction<string>> }) {
    const [book, setBook] = useState<string>("");
    const [disabled, setDisabled] = useState<boolean>(false);
    const [bookList, setBookList] = useState<GoogleData[]>([]);

    function updateData(e: React.ChangeEvent<HTMLInputElement>) {
        setBook(e.target.value);
    }

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        setDisabled(true);

        searchBookGoogle(book)
            .then((response) => {
                setBookList(response.data.items);
                setDisabled(false);
            })
            .catch((error) => {
                console.log(error);
                setDisabled(false);
            });
    }

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Seach for Book"
                    name="book"
                    value={book}
                    onChange={updateData}
                    disabled={disabled}
                    required
                />
                <button type="submit">Search Book</button>
            </form>
            <section>
                {bookList.map((book: GoogleData) => (
                        <BookCard key={book.id} {...book} setBookId={setBookId} />
                ))}              
            </section>
        </Wrapper>
    );
}