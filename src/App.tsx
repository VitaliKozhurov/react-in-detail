import React, { useState } from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import { OnOffComponent } from './components/OnOffComponent/OnOffComponent';


function App() {
    // описываем логику компоненты
    console.log('App rendered');
    const [lampState, setLampState] = useState<boolean>(true);

    const onClickButton =()=>{
        setLampState(!lampState);
    }

    // возвращаем JSX разметку
    return (
        <>
            <AppPage title={'App Component'}/>
            <h2>Rating #1</h2>
            <Rating value={4}/>
            <h2>Rating #2</h2>
            <Rating value={2}/>
            {/* <Accordion titleValue={'Menu list№ 1'} isCollapsed={true}/>
            <Accordion titleValue={'Menu list№ 2'} isCollapsed={false}/> */}
            <OnOffComponent lampState={lampState} onClickButton={onClickButton}/>
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