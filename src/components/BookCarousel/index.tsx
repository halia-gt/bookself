import { Wrapper } from "./styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";
import Slide from "./Slide";

export default function BookCarousel() {
    const carousel = useRef<HTMLUListElement>(null);

    const bookList = [{
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
                {bookList.map(book => (
                    <Slide key={book.id} {...book} nextBook={nextBook} prevBook={prevBook} />
                ))}
            </ul>
            <button onClick={nextBook}>
                <IoIosArrowForward />
            </button>
        </Wrapper>
    );
}