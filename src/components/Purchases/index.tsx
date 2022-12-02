import { Wrapper } from "./styles";
import SectionTitle from "../../assets/styles/SectionTitle";

export default function Purchases() {
    const bookList = [{
        title: 'The house in the cerulean sea',
        author: 'TJ Klune',
        image: 'https://m.media-amazon.com/images/I/81MnY8Q7OLL.jpg',
        price: 32.40,
        format: 'ebook',
        store: 'Amazon'
    }, {
        title: 'The priority of the orange tree',
        author: 'Samantha Shannon',
        image: 'https://m.media-amazon.com/images/I/91ZQaXqO2nL.jpg',
        price: 52.23,
        format: 'physical',
        store: 'Amazon'
    }, {
        title: 'Malibu rising',
        author: 'Taylor Jenkins Reid',
        image: 'https://1.bp.blogspot.com/-0kbISjfq0jU/YMdQp7iJ48I/AAAAAAAAacw/HPAfI1D7ibQFEjRwf8QNqOEa5DgapfE2QCLcBGAsYHQ/s650/9788584392162_gg.jpg',
        price: 16.50,
        format: 'audiobook',
        store: 'Storytel'
    }];

    return (
        <Wrapper>
            <SectionTitle>
                Last Purchases
            </SectionTitle>
            {bookList.map((book, index) => (
                <div key={index}>
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
                        <p>{`R$ ${book.price.toFixed(2).toString().replace('.', ',')}`}</p>
                    </div>
                </div>
            ))}
        </Wrapper>
    );
}