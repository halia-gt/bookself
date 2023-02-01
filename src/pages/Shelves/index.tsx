import { useState } from "react";
import { MainWrapper } from "./styles";
import Footer from "../../components/Footer/index";
import BookList from "components/BookList";
import YearButtons from "components/YearButtons";
import Logo from "components/Logo";

export default function Shelves() {
    const thisYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState<number>(thisYear);

    return (
        <>
            <MainWrapper>
                <header>
                    <Logo />
                </header>
                <main>
                    <YearButtons setSelectedYear={setSelectedYear} selectedYear={selectedYear} />
                    <BookList selectedYear={selectedYear} />
                </main>
            </MainWrapper>
            <Footer shelf={true} />
        </>
    );
}