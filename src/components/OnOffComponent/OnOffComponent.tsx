import React, {useMemo, useState} from 'react';
import s from './OnOffComponent.module.css';
import clsx from 'clsx';


export const OnOffComponent = () => {
    const [on, setOn] = useState(true);
    console.log('Render')
    // Style
    const onStyle = clsx(s.on, {[s.greenOn]: on});
    const ofStyle = clsx(s.off, {[s.redOff]: !on});
    const indicatorStyle = clsx(s.lamp, {[s.lampOn]: on, [s.lampOff]: !on});

    const onButtonHandler = (value: boolean) => {
        setOn(value);
    }


    return (
        <div className={s.parent}>
            <button
                onClick={() => setOn(true)}
                className={onStyle}>On
            </button>
            <button
                onClick={() => onButtonHandler(false)}
                className={ofStyle}>Off
            </button>
            <div className={indicatorStyle}></div>
        </div>
    )
}