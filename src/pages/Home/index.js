import BookCarousel from "../../components/BookCarousel";
import Footer from "../../components/Footer";
import NextReads from "../../components/NextReads";
import { Wrapper } from "./styles";

export default function Home() {
    return (
        <>
            <Wrapper>
                <header></header>
                <main>
                    <BookCarousel />
                    <NextReads />
                </main>
            </Wrapper>
            <Footer />
        </>
    );
}
