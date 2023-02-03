import { useEffect, useState } from "react";
import { Wrapper } from "./styles";

export default function BookForm({ bookId }: { bookId: string }) {
    const [book, setBook] = useState({})

    useEffect(() => {
    }, []);

    return (
        <Wrapper>
        </Wrapper>
    );
}