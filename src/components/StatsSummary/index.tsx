import { Wrapper } from "./styles";
import SectionTitle from "../../assets/styles/SectionTitle";
import { useEffect, useState } from "react";
import { StatsMain } from "protocols";
import { getMainStats } from "services/api";
import MainStats from "./MainStats";

const noStats = {
    year: 0,
    total_books_read: 0,
    total_pages_read: 0,
    total_hours_listened: {
        hours: 0,
        minutes: 0,
    },
    reading_goal: 0,
    total_books_owned: 0,
    owned_books_read: 0,
    average_days_to_read: 0,
    average_rating: 0,
    favorite_book: "0",
    most_pages: 0,
    least_pages: 0,
};

export default function StatsSummary({ selectedYear = new Date().getFullYear() - 1 }: { selectedYear?: number }) {
    const [stats, setStats] = useState<StatsMain>(noStats);

    useEffect(() => {
        getMainStats(selectedYear)
            .then((response) => {
                setStats(response.data);
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    setStats(noStats);
                } else {
                    console.log(error);
                }
            });
    }, [setStats, selectedYear]);

    return (
        <Wrapper>
            <SectionTitle>  
                {`${selectedYear} Stats Summary`}
            </SectionTitle>
            {stats.year > 0 ? <MainStats {...stats} /> : <></>}
        </Wrapper>
    );
}