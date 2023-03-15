import React from "react";

type AccordionProps = {
    titleValue: string;
    isCollapsed: boolean;
}

function Accordion(props: AccordionProps) {
    console.log('Accordion rendered');
    return (
        <>
            <AccordionTitle title={props.titleValue}/>
            {props.isCollapsed && <AccordionBody/>}
        </>
    )
}

type AccordionPropsTitle = {
    title: string;
}

function AccordionTitle(props: AccordionPropsTitle) {
    console.log('AccordionTitle rendered');
    return <h3>{props.title}</h3>;
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