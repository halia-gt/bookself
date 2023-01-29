import SectionTitle from "assets/styles/SectionTitle";
import { BookStats } from "protocols";
import { useEffect, useState } from "react";
import { getFormatsStats } from "services/api";
import Chart from "./Chart";
import { Wrapper } from "./styles";

export default function BookCharts({ selectedYear }: { selectedYear: number }) {
    const [formats, setFormats] = useState<BookStats[]>([]);

    useEffect(() => {
        getFormatsStats(selectedYear)
            .then((response) => {
                setFormats(response.data);
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
        </Wrapper>
    );
}