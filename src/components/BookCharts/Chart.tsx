import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DataWrapper } from "components/StatsSummary/styles";
import styled from "styled-components";
import { BookStats } from "protocols";

ChartJS.register(ArcElement, Legend, Tooltip);

export default function Chart({ data, type }: { data: BookStats[], type: string }) {
    const chartData = {
        labels: data.map(e => e.label),
        datasets: [
            {
                label: type,
                data: data.map(e => e.count),
                backgroundColor: [
                    "#407088",
                    "#FFB5B5",
                    "#D1C9C0",
                    "#70ADB5",
                    "#FFE2E0",
                    "#A4A2D6",
                    "#FAEEC8",
                    "#43888F",
                    "#7DC4CA",
                    "#FAC8BF",
                ],
                borderColor: "#fdfdfd",
            },
        ],
    };

    return (
        <ChartWrapper>
            <h6>{`Book ${type}s`}</h6>
            <Doughnut data={chartData} />
        </ChartWrapper>
    );
}

const ChartWrapper = styled(DataWrapper)`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
`;