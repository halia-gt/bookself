import { Wrapper } from "./styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import Slide from "./Slide";
import { getReadingBooks } from "services/api";
import { ReadingBook } from "protocols";

export default function BookCarousel() {
    const carousel = useRef<HTMLUListElement>(null);
    const [bookList, setBookList] = useState<ReadingBook[] | []>([]);

    const bookList1 = [{
            id: 1,
            image: 'https://m.media-amazon.com/images/I/81pA6-hv+2L.jpg',
            title: 'The Institue',
            author: 'Stephen King'
        }, {
            id: 2,
            image: 'http://madelinemiller.com/wp-content/uploads/2018/01/circe-us.jpg',
            title: 'Circe',
            author: 'Madeline Miller'
        }, {
            id: 3,
            image: 'https://m.media-amazon.com/images/I/91DIYtTpRnL.jpg',
            title: 'The Priority of the Orange Tree',
            author: 'Samantha Shannon'
        }
    ];

    useEffect(() => {
        getReadingBooks()
            .then((response) => {
                setBookList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });

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