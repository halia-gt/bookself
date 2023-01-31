import Rating from "assets/styles/Rating";
import { Author, CompleteBook } from "protocols";
import { Wrapper } from "./styles";

export default function BookSummary(props: CompleteBook) {
    const book = props.books;
    let author: Omit<Author, "id" | "country_id" | "identity"> = {
        name: "",
    };
    Array.isArray(props.authors) ? (
        props.authors.forEach((element, index) => {
            if (index === 0) {
                author.name = `${element.name}, `;
            } else {
                author.name += element.name
            }
        })
    ) : author.name = props.authors.name;

    return (
        <Wrapper>
            <img src={book.image} alt="book cover" />
            <div>
                <h2>{book.title}</h2>
                <h3>{author.name}</h3>
                <p><Rating rating={Number(book.average_rating)} color={true} bigSize={true} /> {Number(book.average_rating).toFixed(2)}</p>
                <div>
                    <span>{book.genres.name.replace("_", " ")}</span>
                    <span>{book.subgenres.name.replace("_", " ")}</span>
                </div>
            </div>
        </Wrapper>
    );
}