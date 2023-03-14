import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";


function App() {
    // описываем логику компоненты
    console.log('App rendered');

    // возвращаем JSX разметку
    return (
        <>
            <AppPage title={'App Component'}/>
            <h2>Rating #1</h2>
            <Rating val={4}/>
            <h2>Rating #2</h2>
            <Rating val={2}/>
            <Accordion/>
        </>
    );
}

function AppPage(props: any) {
    
    console.log('AppPage rendered');
    return (
        <h1>
            {props.title}
        </h1>
    )
}

export default App;