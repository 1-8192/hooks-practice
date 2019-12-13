import React, {useState} from 'react';
import './App.css';

function App() {

  //takes initial state as argument, returns that value as first element in array. 2nd value is function to update state value. Cannot invoke useState within conditional. Can assign values using ES6 destructuring. Value that corresponds to function will be update function name.
  const [count, setCount] = useState(0)

  //onclick is calling the update function declared for the hooks
  const handleClick = () => setCount(count + 1)

  return (
    <div>
      <button onClick={handleClick}>Increase</button>
      <h2>{count}</h2>
    </div>
  );
}

export default App;
