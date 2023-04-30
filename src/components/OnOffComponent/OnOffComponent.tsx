import React, {useMemo, useState} from 'react';
import s from './OnOffComponent.module.css';
import clsx from 'clsx';


type OnOffComponentPropsType = {
    isOn:boolean
    /**
     * function change settings mode
     * @param value boolean on or off
     */
    setIsOn:(value:boolean)=>void
}

export const OnOffComponent = (props:OnOffComponentPropsType) => {

    // Style
    const onStyle = clsx(s.on, {[s.greenOn]: props.isOn});
    const ofStyle = clsx(s.off, {[s.redOff]: !props.isOn});
    const indicatorStyle = clsx(s.lamp, {[s.lampOn]: props.isOn, [s.lampOff]: !props.isOn});

    const onButtonHandler = () => {
        props.setIsOn(true);
    }

    const ofButtonHandler = ()=>{
        props.setIsOn(false);
    }


    return (
        <div className={s.parent}>
            <button
                onClick={onButtonHandler}
                className={onStyle}>On
            </button>
            <button
                onClick={ofButtonHandler}
                className={ofStyle}>Off
            </button>
            <div className={indicatorStyle}></div>
        </div>
    )
}