import { StatsMain } from "protocols";
import { MainStatsWrapper } from "./styles";

export default function MainStats(props: StatsMain) {
    const hours: string = props.total_hours_listened.hours.toString();
    const minutes: string = props.total_hours_listened.minutes.toString();
    const total_hours: string = `${hours}:${minutes}`;
    return (
        <MainStatsWrapper>
            <tr>
                <td>
                    Books read in {props.year}
                </td>
                <td>
                    {props.total_books_read}
                </td>
            </tr>
            <tr>
                <td>
                    Pages read in {props.year}
                </td>
                <td>
                    {props.total_pages_read}
                </td>
            </tr>
            <tr>
                <td>
                    Hours listened in {props.year}
                </td>
                <td>
                    {total_hours}
                </td>
            </tr>
            <tr>
                <td>
                    Reading goal
                </td>
                <td>
                    {props.reading_goal}
                </td>
            </tr>
            <tr>
                <td>
                    Total books owned
                </td>
                <td>
                    {props.total_books_owned}
                </td>
            </tr>
            <tr>
                <td>
                    Books owned read
                </td>
                <td>
                    {props.owned_books_read}
                </td>
            </tr>
            <tr>
                <td>
                    Average days to read a book
                </td>
                <td>
                    {props.average_days_to_read}
                </td>
            </tr>
            <tr>
                <td>
                    Average rating
                </td>
                <td>
                    {props.average_rating}
                </td>
            </tr>
            <tr>
                <td>
                    Max number of pages
                </td>
                <td>
                    {props.most_pages}
                </td>
            </tr>
            <tr>
                <td>
                    Min number of pages
                </td>
                <td>
                    {props.least_pages}
                </td>
            </tr>
        </MainStatsWrapper>
    );
}
