import styled from "styled-components";
// @ts-ignore
import style from "./SuperClock.module.css";
import { useEffect, useState } from "react";
const getTime = (time: number) => time.toString().padStart(2, "0");
export const SuperClock = () => {
    const [date, setDate] = useState<Date>(new Date());
    const [clock, setClock] = useState<boolean>(false);

    useEffect(() => {
        let clockInterval = setInterval(() => {
            console.log("tick");
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(clockInterval);
        };
    }, []);

    return (
        <div className={style.main}>
            <div>
                <button
                    className={style.btn}
                    onClick={() => {
                        setClock(!clock);
                    }}
                >
                    Change clock
                </button>
            </div>

            {clock ? (
                <DigitalClockBody>
                    <span>{getTime(date.getHours())}</span>:
                    <span>{getTime(date.getMinutes())}</span>:
                    <span>{getTime(date.getSeconds())}</span>
                </DigitalClockBody>
            ) : (
                <ClockBody clocksize={"400px"}>
                    <div className={style.center}></div>
                    {Array(12)
                        .fill(1)
                        .map((el, ind) => (
                            <ClockInfo
                                key={ind}
                                clocksize={"400px"}
                                numbersize={"40px"}
                                num={ind + 1}
                            >
                                {ind + 1}
                            </ClockInfo>
                        ))}
                    <SecondArrow
                        clocksize={"400px"}
                        second={date.getSeconds()}
                    />
                    <MinutArrow clocksize={"400px"} minut={date.getMinutes()} />
                    <HarrowArrow
                        clocksize={"400px"}
                        hour={date.getHours()}
                        minut={date.getMinutes()}
                    />
                </ClockBody>
            )}
        </div>
    );
};

const ClockBody = styled.div<{ clocksize: string }>`
    position: relative;
    margin-bottom: 30px;
    width: ${(props) => props.clocksize};
    height: ${(props) => props.clocksize};
    background-color: #091921;
    border-radius: 50%;
    box-shadow: 0 -15px 15px rgba(134, 134, 134, 0.35),
        inset 0 -15px 15px #191919, 0 15px 15px rgba(134, 134, 134, 0.35),
        inset 0 15px 15px #191919;
`;

const ClockInfo = styled.div<{
    clocksize: string;
    numbersize: string;
    num: number;
}>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffc600;
    width: ${(props) => parseFloat(props.numbersize)}px;
    height: ${(props) => parseFloat(props.numbersize)}px;
    left: ${(props) =>
        parseFloat(props.clocksize) / 2 -
        parseFloat(props.numbersize) / 2 +
        ((parseFloat(props.clocksize) -
            parseFloat(props.numbersize) -
            parseFloat(props.numbersize) / 2) /
            2) *
            Math.sin((30 * props.num * Math.PI) / 180) +
        "px"};

    top: ${(props) =>
        parseFloat(props.clocksize) / 2 -
        parseFloat(props.numbersize) / 2 -
        ((parseFloat(props.clocksize) -
            parseFloat(props.numbersize) -
            parseFloat(props.numbersize) / 2) /
            2) *
            Math.cos((30 * props.num * Math.PI) / 180) +
        "px"};
    font-size: calc(${(props) => props.clocksize}*0.08);
    font-family: sans-serif;
    font-weight: 700;
`;

const SecondArrow = styled.div<{ clocksize: string; second: number }>`
    background-color: white;
    border: solid 1px black;
    height: ${(props) => (0.75 * parseFloat(props.clocksize)) / 2}px;
    width: ${(props) => 0.01 * parseFloat(props.clocksize)}px;
    transform: rotateZ(${(props) => props.second * 6}deg);
    z-index: 100;
    border-radius: 5px;
    position: absolute;
    bottom: 50%;
    transform-origin: center bottom;
    left: ${(props) =>
        parseFloat(props.clocksize) / 2 -
        (0.01 * parseFloat(props.clocksize)) / 2}px;
`;

const MinutArrow = styled.div<{ clocksize: string; minut: number }>`
    background-color: white;
    height: ${(props) => (0.7 * parseFloat(props.clocksize)) / 2}px;
    width: ${(props) => 0.02 * parseFloat(props.clocksize)}px;
    transform: rotateZ(${(props) => props.minut * 6}deg);
    border-radius: 5px;
    z-index: 5;
    position: absolute;
    bottom: 50%;
    transform-origin: center bottom;
    left: ${(props) =>
        parseFloat(props.clocksize) / 2 -
        (0.02 * parseFloat(props.clocksize)) / 2}px;
`;

const HarrowArrow = styled.div<{
    clocksize: string;
    hour: number;
    minut: number;
}>`
    background-color: #ffc600;
    height: ${(props) => (0.6 * parseFloat(props.clocksize)) / 2}px;
    width: ${(props) => 0.025 * parseFloat(props.clocksize)}px;
    transform: rotateZ(${(props) => props.hour * 30 + props.minut / 12}deg);
    border-radius: 5px;
    position: absolute;
    bottom: 50%;
    transform-origin: center bottom;
    left: ${(props) =>
        parseFloat(props.clocksize) / 2 -
        (0.025 * parseFloat(props.clocksize)) / 2}px;
`;

const DigitalClockBody = styled.div`
    color: #ffc600;
    width: 400px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #091921;
    border-radius: 10px;
    border: solid 3px #ffc600;
    box-shadow: 0 -15px 15px rgba(134, 134, 134, 0.35),
        inset 0 -15px 15px #191919, 0 15px 15px rgba(134, 134, 134, 0.35),
        inset 0 15px 15px #191919;

    font-size: 56px;
    font-family: sans-serif;
    font-weight: 700;
`;
