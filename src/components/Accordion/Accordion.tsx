import React from "react";

function Accordion() {
    console.log('Accordion rendered');
    return (
        <>
            <AccordionTitle/>
            <AccordionBody/>
        </>
    )
}

function AccordionTitle() {
    console.log('AccordionTitle rendered');
    return <h3>Menu</h3>;
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