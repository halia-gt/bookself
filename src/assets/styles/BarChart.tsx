import styled from "styled-components";

type Props = {
    type: string,
    title: string,
    data: number[],
};

const labels = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export default function BarChart({ type, title, data }: Props) {
    const newData: string[] | number[] = type === "minutes" ? (
        data.map(element => `${Math.floor(element / 60)}:${element % 60}`)
    ) : data;

    const max = Math.max(...data);

    return (
        <Wrapper>
            <h6> {title} </h6>
            <div>
                {newData.map((element: number | string, index: number) => (
                    <ChartContainer key={index} percentage={data[index] * 100 / max} type={type} >
                        <p>{element}</p>
                        <div>
                            <div></div>
                        </div>
                        <p>{labels[index]}</p>
                    </ChartContainer>
                ))}
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 300px;
    width: 100%;
    padding: 0.8rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: var(--white-background);
    font-weight: 700;
    border-radius: 15px;
    background-color: var(--accent-color);
    box-shadow: 0 0 10px -4px rgba(0, 0, 0, 0.2);
    margin-top: 1rem;

    & > h6 {
        margin-bottom: 0.6rem;
        text-align: center;
    }

    & > div {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
`;

const ChartContainer = styled.div<{
    percentage: number,
    type: string,
}>`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > p:first-child {
        font-size: 0.8rem;
        opacity: 0.8;
        writing-mode: ${props => props.type === "books" ? "initial" : "vertical-lr"};
        transform: ${props => props.type === "books" ? "initial" : "rotate(-180deg)"};
        height: ${props => props.type === "books" ? "initial" : "33px"};
    }

    & > div {
        height: 170px;
        background-color: var(--accent-background);
        width: 5px;
        margin: .2rem;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        position: relative;
    }

    & > div > div {
        height: ${props => props.percentage}%;
        background-color: var(--white-background);
        width: 100%;
        margin-top: .2rem;
    }
`;