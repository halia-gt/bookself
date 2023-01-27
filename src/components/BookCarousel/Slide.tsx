import { ReadingBook } from "protocols";
import { LiWrapper } from "./styles";

export default function Slide(props: ReadingBook) {
    return (
        <LiWrapper>
            <div>
                <img src={props.books.image} alt="book cover" />
            </div>
            <h2>{props.books.title}</h2>
            <h3>{`By ${props.authors.name}`}</h3>
        </LiWrapper>
    );
}