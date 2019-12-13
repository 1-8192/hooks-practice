import React from 'react';
import './App.css';
import ComponentClass from './ComponentClass.js';

function Box(props) {
  return (
    <div>
      <h1>{props.text}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}

function App() {
  return (
    <div>
      <Box text="text from the props" subtitle="Another prop"/>
      <ComponentClass active='ON' inactive='OFF'/>
    </div>
  );
}

export default App;
