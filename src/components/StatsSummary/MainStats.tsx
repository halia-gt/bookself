import ProgressBar from "assets/styles/ProgressBar";
import { StatsMain } from "protocols";
import { MainData, MainStatsWrapper, MinorData, OwnedCard, PrimaryContainer, SecondaryContainer, SecondaryData } from "./styles";

export default function MainStats(props: StatsMain) {
    const hours: string = props.total_hours_listened.hours.toString();
    const readingGoalPercentage: number = Number((props.total_books_read/props.reading_goal*100).toFixed(0));
    const readingOwnedPercentage: number = Number((props.owned_books_read/props.total_books_owned*100).toFixed(0));

    return (
        <MainStatsWrapper>
            <PrimaryContainer>
                <MainData>
                    <h6>{props.total_books_read}</h6>
                    <p>Books read</p>
                </MainData>
                <SecondaryData>
                    <h6>{props.total_pages_read}</h6>
                    <p>Pages read</p>
                </SecondaryData>
                <SecondaryData>
                    <h6>{hours}+</h6>
                    <p>Hours listened</p>
                </SecondaryData>
                <SecondaryData>
                    <h6>{props.reading_goal}</h6>
                    <p>Reading goal</p>
                </SecondaryData>
            </PrimaryContainer>

            <ProgressBar percentage={readingGoalPercentage} title={"Reading Goal"} />

            <SecondaryContainer>
                <MinorData>
                    <h6>{props.average_rating}</h6>
                    <p>Average rating</p>
                </MinorData>
                <MinorData>
                    <h6>{props.average_days_to_read}</h6>
                    <p>Avg. days to finish</p>
                </MinorData>
                <MinorData>
                    <h6>{props.most_pages} p.</h6>
                    <p>Longest book</p>
                </MinorData>
                <MinorData>
                    <h6>{props.least_pages} p.</h6>
                    <p>Shortest book</p>
                </MinorData>
            </SecondaryContainer>

            <OwnedCard>
                <p>Books owned</p>
                <h6>{props.total_books_owned}</h6>
            </OwnedCard>
            <OwnedCard>
                <p>Books owned read</p>
                <h6>{props.owned_books_read}</h6>
            </OwnedCard>

            <ProgressBar percentage={readingOwnedPercentage} title={"Owned Books Read"} />
        </MainStatsWrapper>
    );
}
