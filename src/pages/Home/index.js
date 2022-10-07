import Footer from "../../components/Footer";
import { Wrapper, BookCarousel } from "./styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Home() {
    return (
        <>
            <Wrapper>
                <header></header>
                <BookCarousel>
                    <div>
                        <IoIosArrowBack />
                        <img src="https://m.media-amazon.com/images/I/81pA6-hv+2L.jpg" alt="" />
                        <IoIosArrowForward />
                    </div>
                    <h2>The Institute</h2>
                    <h3>By Stephen King</h3>
                </BookCarousel>
                <div className="main"></div>
            </Wrapper>
            <Footer />
        </>
    );
}
