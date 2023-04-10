import React, {useState} from 'react';

type PropsType = {
    title:string
}

type TitlePropsType = {
    title:string
    onTitleClick:()=>void
}

export const UnControlledAccordion:React.FC<PropsType> = (props) => {
    const [accordionState, setAccordionState] = useState<boolean>(true);
    const onTitleClick = () =>{
        setAccordionState(!accordionState);
    }


    return (
        <>
            <AccordionTitle title={props.title} onTitleClick={onTitleClick}/>
            {accordionState&&<AccordionBody />}
        </>
    )
};

const AccordionTitle:React.FC<TitlePropsType> = (props) => {
    console.log('AccordionTitle rendered');
    return <h3 onClick={props.onTitleClick}>{props.title}</h3>;
}

const AccordionBody = () => {
    console.log('AccordionBody rendered');
    return (
        <ul>
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
        </ul>
    )
}