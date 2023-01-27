import { useEffect, useState } from "react";
import { getYearList } from "services/api";
import { Year } from "protocols";
import { Wrapper } from "./styles";

export default function YearButtons() {
    const [yearList, setYearList] = useState<Year[] | []>([]);
    console.log("OIE");

    useEffect(() => {
        getYearList()
            .then((response) => {
                setYearList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setYearList]);

    return (
        <Wrapper>
            <p>Oie</p>
        </Wrapper>
    );
}