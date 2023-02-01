import React, { useContext, useState } from "react";
import Button from "assets/styles/Button";
import { Input } from "assets/styles/Input";
import Rating from "assets/styles/Rating";
import SectionTitle from "assets/styles/SectionTitle";
import { BookRead } from "protocols";
import MyRating from "./MyRating";
import { Forms } from "./styles";
import { postBookRead } from "services/api";
import BookContext from "../../contexts/bookContext";

export default function FinishReadForm(props: Omit<BookRead, "books">) {
    const [data, setData] = useState({
        date_finished: "",
        rating: Number(props.rating) || 0,
    });
    const [disabled, setDisabled] = useState<boolean>(false);
    const context = useContext(BookContext);

    function updateData(e: React.ChangeEvent<HTMLInputElement>) {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        setDisabled(true);

        if (data.rating === 0 || data.date_finished.length === 0) {
            console.log("Não foi pra função");
        }

        const newData = {
            ...data,
            date_finished: new Date(data.date_finished).toISOString(),
        }

        postBookRead(props.book_id, newData)
            .then(() => {
                context?.setRefresh(!context?.refresh);
                setDisabled(false);
            })
            .catch((error) => {
                console.log(error);
                setDisabled(false);
            });
    }

    return (
        <Forms onSubmit={handleSubmit}>
            {props.rating !== null ? (
                <>
                    <SectionTitle>
                        My Rating
                    </SectionTitle>
                    <Rating rating={Number(props.rating)} />
                </>
            ) : (
                <>
                    <SectionTitle>
                        My Rating
                    </SectionTitle>
                    <MyRating data={data} setData={setData} />
                </>
            )}

            <section>
                <div>
                    <SectionTitle>Date Started</SectionTitle>
                    {props.date_started !== null ? (
                            <p>{props.date_started.substring(0, 10)}</p>
                        ) : (
                            <input
                                type="date"
                                placeholder="YYYYY-MM-DD"
                                name="date_started"
                                value={data.date_finished}
                                onChange={updateData}
                            />
                        )
                    }
                </div>
                <div>
                    <SectionTitle>Date Finished</SectionTitle>
                    {props.date_finished !== null ? (
                            <p>{props.date_finished.substring(0, 10)}</p>
                        ) : (
                            <Input
                                type="date"
                                placeholder="YYYYY-MM-DD"
                                name="date_finished"
                                value={data.date_finished}
                                onChange={updateData}
                                disabled={disabled}
                                required
                            />
                        )
                    }
                </div>
            </section>

            {props.rating !== null && props.date_finished !== null ? <></> : <Button>Mark Book as Read</Button>}
        </Forms>
    );
}