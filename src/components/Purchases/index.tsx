import { Wrapper } from "./styles";
import SectionTitle from "../../assets/styles/SectionTitle";
import { useEffect, useState } from "react";
import { getLastThreePurchases } from "services/api";
import { Purchases } from "protocols";

export default function LastPurchases() {
    const [bookList, setBookList] = useState<Purchases[] | []>([]);

    useEffect(() => {
        getLastThreePurchases()
            .then((response) => {
                setBookList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setBookList]);

    return (
        <Wrapper>
            <SectionTitle>
                Last Purchases
            </SectionTitle>
            {bookList.map((book: Purchases) => (
                <div key={book.id}>
                    <img src={book.image} alt="book cover" />
                    <div>
                        <div>
                            <h4>{book.title}</h4>
                            <h5>{book.author}</h5>
                        </div>
                        <div>
                            <h6>{book.format}</h6>
                            <h6>{book.store}</h6>
                        </div>
                        <p>{`R$ ${(book.price/100).toFixed(2).toString().replace('.', ',')}`}</p>
                    </div>
                </div>
            ))}
        </Wrapper>
    );
}