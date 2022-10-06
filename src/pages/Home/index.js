import Footer from "../../components/Footer";
import { Wrapper } from "./styles";

export default function Home() {
    return (
        <>
            <Wrapper>
                <header></header>
                <div className="image-container">
                    <img src="https://m.media-amazon.com/images/I/81pA6-hv+2L.jpg" alt="" />
                </div>
                <div className="main"></div>
            </Wrapper>
            <Footer />
        </>
    );
}
