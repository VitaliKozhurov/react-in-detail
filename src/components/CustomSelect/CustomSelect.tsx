import React, {FC, useState} from 'react';

type CustomSelectPropsType = {
    title:string
    list:string[]
}

export const CustomSelect:FC<CustomSelectPropsType> = ({title, list}) => {
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const [selectTitle, setSelectTitle] = useState<string>(list[0]||'Placeholder');

    const changeCurrentTitle = (value:string) =>{
        setSelectTitle(value);
        setIsHidden(true)
    }

    const showLists = () =>{
        setIsHidden(!isHidden)
    }


    return (
        <>
            <h1>Custom Select</h1>
            <h2 onClick={showLists}>{selectTitle}</h2>
            {!isHidden&&list.map((item, ind)=><li key={ind} onClick={()=>changeCurrentTitle(item)}>{item}</li>)}
        </>
    )
};