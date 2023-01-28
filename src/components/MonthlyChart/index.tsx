import SectionTitle from "assets/styles/SectionTitle";
import { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import BarChart from "assets/styles/BarChart";
import { getMonthlyStats } from "services/api";
import { MonthlyDataType } from "protocols";

export default function MonthlyChart({ selectedYear }: { selectedYear: number }) {
    const [monthlyBooks, setMonthlyBooks] = useState<MonthlyDataType[]>([]);

    useEffect(() => {
        getMonthlyStats(selectedYear)
            .then((response) => {
                setMonthlyBooks(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setMonthlyBooks, selectedYear]);

    return (
        <Wrapper>
            <SectionTitle>
                Yearly Stats
            </SectionTitle>
            <BarChart type="books" title="Books per Month" data={monthlyBooks.map(e => e.books)} />
            <BarChart type="pages" title="Pages per Month" data={monthlyBooks.map(e => e.pages)} />
            <BarChart type="minutes" title="Hours per Month" data={monthlyBooks.map(e => e.minutes)} />
        </Wrapper>
    );
}