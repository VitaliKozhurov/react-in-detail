import React from 'react';
import './App.css';

function App() {
  // описываем логику компоненты


  // возвращаем JSX разметку
  return (
    <div>
      App component
      <Rating/>
      <Accordion/>
    </div>
  );
}

function Rating (){
  return (
    <>
   {Array(5).fill('').map(el=><Star/>)}
    </>
  )
}

function Accordion (){

  return (
    <>
    <h3>Menu</h3>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    </>
  )
}
function Star (){

  return (
    <div>star</div>
  )
}

export default App;
