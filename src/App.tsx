import React, { useState } from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import { OnOffComponent } from './components/OnOffComponent/OnOffComponent';
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';


function App() {
    // описываем логику компоненты
    console.log('App rendered');
    const [ratingValue, setRatingValue] = useState<number>(0);
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [on, setOn] = useState<boolean>(true);
    // возвращаем JSX разметку
    return (
        <>
            <AppPage title={'App Component'}/>
            {/*<h2>Rating #1</h2>*/}
            {/*<Rating value={4}/>*/}
            {/*<h2>Rating #2</h2>*/}
            {/*<Rating value={2}/>*/}
            {/* <Accordion titleValue={'Menu list№ 1'} isCollapsed={true}/>
            <Accordion titleValue={'Menu list№ 2'} isCollapsed={false}/> */}
            <OnOffComponent isOn={on} setIsOn={setOn} />
            {/*<UnControlledAccordion title={'My accordion'}/>
            <UnControlledRating/>*/}
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <Accordion titleValue={'Menu list№ 1'} isCollapsed={isCollapsed} setCollapsedState={setIsCollapsed}/>
        </>
    );
}

type PagePropsTitle = {
    title: string;
}

function AppPage(props: PagePropsTitle) {

    console.log('AppPage rendered');
    return (
        <h1>
            {props.title}
        </h1>
    )
}

export default App;