import { useState } from "react";
import YearButtons from "components/YearButtons";
import Footer from "../../components/Footer/index";
import { MainWrapper } from "./styles";

export default function Stats() {
    const thisYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState<number>(thisYear);

    return (
        <>
            <MainWrapper>
                <header></header>
                <main>
                    <YearButtons setSelectedYear={setSelectedYear} selectedYear={selectedYear} />
                </main>
            </MainWrapper>
            <Footer />
        </>
    );
}
