import SectionTitle from "assets/styles/SectionTitle";
import { BookStats } from "protocols";
import { useEffect, useState } from "react";
import { getFormatsStats, getStarStats } from "services/api";
import Chart from "./Chart";
import { Wrapper } from "./styles";

export default function BookCharts({ selectedYear }: { selectedYear: number }) {
    const [formats, setFormats] = useState<BookStats[]>([]);
    const [stars, setStars] = useState<BookStats[]>([]);

    useEffect(() => {
        getFormatsStats(selectedYear)
            .then((response) => {
                const aux = response.data.map(e => {
                    return {
                        label: e.book_format,
                        count: e._count.book_id,
                    }
                });
                setFormats(aux);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [selectedYear]);

    useEffect(() => {
        getStarStats(selectedYear)
            .then((response) => {
                const aux = response.data.map(e => {
                    return {
                        label: e.rating,
                        count: e._count.book_id,
                    }
                });
                setStars(aux.sort());
            })
            .catch((error) => {
                console.log(error);
            });
    }, [selectedYear]);

    return (
        <Wrapper>
            <SectionTitle>
                Books Stats
            </SectionTitle>
            <Chart data={formats} type={"Format"} />
            <Chart data={stars} type={"Rating"} />
        </Wrapper>
    );
}