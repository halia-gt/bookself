import { useState } from "react";
import YearButtons from "components/YearButtons";
import Footer from "../../components/Footer/index";
import { MainWrapper } from "./styles";
import StatsSummary from "components/StatsSummary";

export default function Stats() {
    const thisYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState<number>(thisYear);

    return (
        <>
            <MainWrapper>
                <header></header>
                <main>
                    <YearButtons setSelectedYear={setSelectedYear} selectedYear={selectedYear} />
                    <StatsSummary selectedYear={selectedYear} />
                </main>
            </MainWrapper>
            <Footer />
        </>
    );
}
