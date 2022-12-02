import BookCarousel from "../../components/BookCarousel";
import Footer from "../../components/Footer";
import NextReads from "../../components/NextReads";
import Purchases from "../../components/Purchases";
import StatsSummary from "../../components/StatsSummary";
import { Wrapper } from "./styles";

export default function Home() {
    return (
        <>
            <Wrapper>
                <header>
                    <h1>Bookself</h1>
                </header>
                <main>
                    <BookCarousel />
                    <NextReads />
                    <Purchases />
                    <StatsSummary />
                </main>
            </Wrapper>
            <Footer home={true} />
        </>
    );
}
