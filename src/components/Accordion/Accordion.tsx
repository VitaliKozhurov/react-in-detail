import React from "react";

type AccordionProps = {
    titleValue: string;
    isCollapsed?: boolean;  // опциональный параметр
    /**
     * function for set state accordion
     * @param value mean that accordion opened or closed
     */
    setCollapsedState:(value:boolean)=>void
}

function Accordion(props: AccordionProps) {

    return (
        <>
            <AccordionTitle title={props.titleValue} setCollapsedState={()=>props.setCollapsedState(!props.isCollapsed)} />
            {!props.isCollapsed && <AccordionBody/>}
        </>
    )
}

type AccordionPropsTitle = {
    title: string
    setCollapsedState:()=>void
}

function AccordionTitle(props: AccordionPropsTitle) {

    return <h3 onClick={props.setCollapsedState}>{props.title}</h3>;
}

function AccordionBody() {
    console.log('AccordionBody rendered');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;