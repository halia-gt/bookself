import { ReadingBook } from "protocols";
import { LiWrapper } from "./styles";

export default function Slide(props: ReadingBook) {
    return (
        <LiWrapper>
            <div>
                <img src={props.image} alt="book cover" />
            </div>
            <h2>{props.title}</h2>
            <h3>{`By ${props.author}`}</h3>
        </LiWrapper>
    );
}