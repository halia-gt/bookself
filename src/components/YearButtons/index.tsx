import { useEffect, useState } from "react";
import { getYearList } from "services/api";
import { Year } from "protocols";
import { Button, ButtonWrapper } from "./styles";

type Props = {
    selectedYear: number,
    setSelectedYear: React.Dispatch<React.SetStateAction<number>>,
};

export default function YearButtons({ selectedYear, setSelectedYear }: Props) {
    const [yearList, setYearList] = useState<Year[] | []>([]);

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
        <ButtonWrapper>
            {yearList.length > 0 && yearList.map((year: Year) => (
                <Button key={year.id} onClick={() => setSelectedYear(year.year)} selected={selectedYear === year.year}>
                    {year.year}
                </Button>
            ))}
        </ButtonWrapper>
    );
}