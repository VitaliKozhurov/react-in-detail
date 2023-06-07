import { FC, useEffect, useState } from "react";

type ClockPropsType = {};

const getTime = (time: number) => time.toString().padStart(2, "0");

export const Clock: FC<ClockPropsType> = (props) => {
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        let timerID = setInterval(() => {
            console.log("TICK!");
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    return (
        <>
            <div>
                <span>{getTime(date.getHours())}</span>:
                <span>{getTime(date.getMinutes())}</span>:
                <span>{getTime(date.getSeconds())}</span>
            </div>
        </>
    );
};
