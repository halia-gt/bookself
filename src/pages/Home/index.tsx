import BookCarousel from "../../components/BookCarousel";
import Footer from "../../components/Footer";
import NextReads from "../../components/NextReads";
import LastPurchases from "../../components/Purchases";
import StatsSummary from "../../components/StatsSummary";
import { Wrapper } from "./styles";
import Logo from "components/Logo";

export default function Home() {
    return (
        <>
            <Wrapper>
                <header>
                    <Logo />
                </header>
                <main>
                    <BookCarousel />
                    <NextReads />
                    <LastPurchases />
                    <StatsSummary />
                </main>
            </Wrapper>
            <Footer home={true} />
        </>
    );
}
