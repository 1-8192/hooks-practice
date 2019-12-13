import React from 'react';
import './App.css';

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
    <Box text="text from the props" subtitle="Another prop"/>
  );
}

export default App;
