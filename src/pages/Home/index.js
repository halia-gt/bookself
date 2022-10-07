import BookCarousel from "../../components/BookCarousel";
import Footer from "../../components/Footer";
import { Wrapper } from "./styles";

export default function Home() {
    return (
        <>
            <Wrapper>
                <header></header>
                <main>
                    <BookCarousel />
                </main>
            </Wrapper>
            <Footer />
        </>
    );
}
