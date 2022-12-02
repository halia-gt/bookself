import SectionTitle from "../../assets/styles/SectionTitle";
import { ImageWrapper, Wrapper } from "./styles";

export default function NextReads() {
    const bookList = [
        'https://m.media-amazon.com/images/I/81MnY8Q7OLL.jpg',
        'https://m.media-amazon.com/images/I/91ZQaXqO2nL.jpg',
        'https://1.bp.blogspot.com/-0kbISjfq0jU/YMdQp7iJ48I/AAAAAAAAacw/HPAfI1D7ibQFEjRwf8QNqOEa5DgapfE2QCLcBGAsYHQ/s650/9788584392162_gg.jpg',
        undefined
    ]

    return (
        <Wrapper>
            <SectionTitle>
                Next Reads
            </SectionTitle>
            <div>
                {bookList.map((img, index) => (
                    <ImageWrapper key={index} img={true}>
                        {img ? <img src={img} alt="bookimage"/> : <>+</>}
                    </ImageWrapper>
                ))}
            </div>
        </Wrapper>
    );
}