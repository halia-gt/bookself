import React, { useState } from "react";
import Button from "assets/styles/Button";
import { Input } from "assets/styles/Input";
import Rating from "assets/styles/Rating";
import SectionTitle from "assets/styles/SectionTitle";
import { BookRead } from "protocols";
import MyRating from "./MyRating";
import { Forms } from "./styles";

export default function FinishReadForm(props: Omit<BookRead, "books">) {
    const [data, setData] = useState({
        date_finished: "",
        rating: Number(props.rating) || 0,
    });

    function updateData(e: React.ChangeEvent<HTMLInputElement>) {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        console.log(data);
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
                            />
                        )
                    }
                </div>
            </section>

            {props.rating !== null && props.date_finished !== null ? <></> : <Button>Update Book</Button>}
        </Forms>
    );
}