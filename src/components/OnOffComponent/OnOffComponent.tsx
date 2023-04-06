import React from 'react';
import s from './OnOffComponent.module.css';
import clsx from 'clsx';

type OnOfPropsType = {
    lampState:boolean
    onClickButton:()=>void
}

export const OnOffComponent:React.FC<OnOfPropsType> = (props) =>{

    return (
        <div className={s.parent}>
            <button disabled={props.lampState} onClick={props.onClickButton} className={clsx(s.on,{[s.greenOn]:props.lampState})}>On</button>
            <button disabled={!props.lampState} onClick={props.onClickButton} className={clsx(s.off,{[s.redOff]:!props.lampState})}>Off</button>
            <div 
            className = {clsx(s.lamp,{[s.lampOn]:props.lampState, [s.lampOff]:!props.lampState})}>
            </div>
        </div>
    )
}