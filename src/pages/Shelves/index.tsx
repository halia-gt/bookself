import { useState } from "react";
import { MainWrapper } from "./styles";
import Footer from "../../components/Footer/index";
import BookList from "components/BookList";
import YearButtons from "components/YearButtons";

export default function Shelves() {
    const thisYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState<number>(thisYear);

    return (
        <>
            <MainWrapper>
                <header></header>
                <main>
                    <YearButtons setSelectedYear={setSelectedYear} selectedYear={selectedYear} />
                    <BookList selectedYear={selectedYear} />
                </main>
            </MainWrapper>
            <Footer shelf={true} />
        </>
    );
}