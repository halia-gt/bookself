import { useState } from "react";
import { MainWrapper } from "./styles";
import YearButtons from "components/YearButtons";
import Footer from "../../components/Footer/index";
import StatsSummary from "components/StatsSummary";
import MonthlyChart from "components/MonthlyChart";
import BookCharts from "components/BookCharts";

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
                    <MonthlyChart selectedYear={selectedYear} />
                    <BookCharts selectedYear={selectedYear} />
                </main>
            </MainWrapper>
            <Footer />
        </>
    );
}
