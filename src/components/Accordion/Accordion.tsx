import React from "react";

type ItemType = {
    title:string
    value:any
}

type AccordionProps = {
    titleValue: string;
    isCollapsed?: boolean;  // опциональный параметр
    /**
     * function for set state accordion
     * @param value mean that accordion opened or closed
     */
    setCollapsedState:(value:boolean)=>void
    items:Array<ItemType>
    onClick:(value:any)=>void
}

function Accordion(props: AccordionProps) {

    return (
        <>
            <AccordionTitle title={props.titleValue} setCollapsedState={()=>props.setCollapsedState(!props.isCollapsed)} />
            {!props.isCollapsed && <AccordionBody_ items={props.items} onClick={props.onClick}/>}
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

type AccordionBodyPropsType = {
    items:ItemType[]
    onClick:(value:any)=>void
}

function AccordionBody(props:AccordionBodyPropsType) {
    console.log('AccordionBody rendered');
    return (
        <ul>
            {props.items.map((item, ind)=><li
                key={ind}
                onClick={()=>{props.onClick(item.value)}}
            >{item.title}</li>)}
        </ul>
    )
}

const AccordionBody_ = React.memo(AccordionBody)

export default Accordion;