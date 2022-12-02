import { LiWrapper } from "./styles";

export default function Slide({
        id,
        image,
        title,
        author,
        nextBook,
        prevBook
    }) {
    return (
        <LiWrapper>
            <div>
                <img src={image} alt="book cover" />
            </div>
            <h2>{title}</h2>
            <h3>{`By ${author}`}</h3>
        </LiWrapper>
    );
}