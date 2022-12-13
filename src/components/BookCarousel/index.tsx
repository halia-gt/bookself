import { Wrapper } from "./styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import Slide from "./Slide";
import { getReadingBooks } from "services/api";
import { ReadingBook } from "protocols";

export default function BookCarousel() {
    const carousel = useRef<HTMLUListElement>(null);
    const [bookList, setBookList] = useState<ReadingBook[] | []>([]);

    useEffect(() => {
        getReadingBooks()
            .then((response) => {
                setBookList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setBookList]);

    function nextBook() {
        if (carousel.current) {
            carousel.current.scrollLeft += carousel.current.offsetWidth;
        }
    }

    function prevBook() {
        if (carousel.current) {
            carousel.current.scrollLeft -= carousel.current.offsetWidth;
        }
    }

    return (
        <Wrapper>
            <button onClick={prevBook}>
                <IoIosArrowBack />
            </button>

            <ul ref={carousel}>
                {bookList.map((book: ReadingBook) => (
                    <Slide key={book.id} {...book} />
                ))}
            </ul>

            <button onClick={nextBook}>
                <IoIosArrowForward />
            </button>
        </Wrapper>
    );
}
