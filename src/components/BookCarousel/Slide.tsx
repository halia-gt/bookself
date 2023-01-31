import { ReadingBook } from "protocols";
import { Link } from "react-router-dom";
import { LiWrapper } from "./styles";

export default function Slide(props: ReadingBook) {
    return (
        <LiWrapper>
            <Link to={`/book/${props.book_id}`}>
            <div>
                <img src={props.books.image} alt="book cover" />
            </div>
            <h2>{props.books.title}</h2>
            <h3>{`By ${props.authors.name}`}</h3>
            </Link>
        </LiWrapper>
    );
}