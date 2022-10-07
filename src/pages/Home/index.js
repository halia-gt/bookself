import BookCarousel from "../../components/BookCarousel";
import Footer from "../../components/Footer";
import NextReads from "../../components/NextReads";
import Purchases from "../../components/Purchases";
import { Wrapper } from "./styles";

export default function Home() {
    return (
        <>
            <Wrapper>
                <header></header>
                <main>
                    <BookCarousel />
                    <NextReads />
                    <Purchases />
                </main>
            </Wrapper>
            <Footer />
        </>
    );
}
