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

export default function StatsSummary() {
    const [stats, setStats] = useState<StatsMain>(noStats);
    const year = new Date().getFullYear() - 1;

    useEffect(() => {
        getMainStats(year)
            .then((response) => {
                setStats(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setStats, year]);

    return (
        <Wrapper>
            <SectionTitle>  
                {`${year} Stats Summary`}
            </SectionTitle>
            {stats.year > 0 ? <MainStats {...stats} /> : <></>}
        </Wrapper>
    );
}