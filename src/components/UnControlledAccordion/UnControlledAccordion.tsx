import React, {useReducer} from 'react';
import {reducer, TOGGLE_CONSTANT} from './Reducer';

type PropsType = {
    title: string
}

type TitlePropsType = {
    title: string
    onTitleClick: () => void
}


export const UnControlledAccordion: React.FC<PropsType> = (props) => {
    /*const [accordionState, setAccordionState] = useState<boolean>(true);*/

    const [accordionState, dispatch] = useReducer(reducer, {collapsed:false});

    const onTitleClick = () => {
        dispatch({type:TOGGLE_CONSTANT});
    }

    return (
        <>
            <AccordionTitle title={props.title} onTitleClick={onTitleClick} />
            {accordionState.collapsed && <AccordionBody />}
        </>
    )
};

const AccordionTitle: React.FC<TitlePropsType> = (props) => {
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