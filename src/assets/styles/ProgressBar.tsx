import styled from "styled-components";

type Props = {
    percentage: number,
    title: string,
};

export default function ProgressBar({ percentage, title }: Props) {
    return (
        <Wrapper percentage={percentage}>
            <h6>
                {title}
                <span>{`${percentage}%`}</span>
            </h6>
            <div>
                <div></div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div<{ percentage: number }>`
    height: 70px;
    width: 100%;
    padding: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: var(--white-background);
    font-weight: 700;
    border-radius: 15px;
    background-color: var(--accent-color);
    box-shadow: 0 0 10px -4px rgba(0, 0, 0, 0.2);

    & > h6 {
        margin-bottom: 0.6rem;
        display: flex;
        justify-content: space-between;
    }

    & > div {
        background-color: var(--accent-background);
        height: 5px;
        width: 100%;
    }

    & > div > div {
        width: ${props => props.percentage}%;
        background-color: var(--white-background);
        height: 100%;
    }
`;