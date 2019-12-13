import React, {useState} from 'react'

function ClickCounter() {

    //takes initial state as argument, returns that value as first element in array. 2nd value is function to update state value. Cannot invoke useState within conditional. Can assign values using ES6 destructuring. Value that corresponds to function will be update function name.
    const [count, setCount] = useState(0)
  
    //onclick is calling the update function declared for the hooks
    const handleIncreaseClick = () => setCount(count + 1)
    const handleDecreaseClick = () => setCount(count - 1)
    const handleResetClick = () => setCount(0)
  
    return (
      <div>
        <p>This counter shows the basic use of the setState hook</p>
        <button onClick={handleIncreaseClick}>Increase</button>
        <button onClick={handleDecreaseClick}>Decrease</button>
        <button onClick={handleResetClick}>Reset</button>
        <h2>{count}</h2>
      </div>
    );
  }

  export default ClickCounter