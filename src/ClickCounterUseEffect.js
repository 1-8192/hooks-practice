import React, {useState, useEffect} from 'react'

function ClickCounterUseEffect() {

    //takes initial state as argument, returns that value as first element in array. 2nd value is function to update state value. Cannot invoke useState within conditional. Can assign values using ES6 destructuring. Value that corresponds to function will be update function name.
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('salmon')
  
    //onclick is calling the update function declared for the hooks
    const handleIncreaseClick = () => setCount(count + 1)
    const handleDecreaseClick = () => setCount(count - 1)
    const handleColorClick = () => {
      if (color === 'salmon') {
        setColor('gold')
      } else {
        setColor('salmon')
      }
    }

    const userText = useKeyPress('once upon a time')

    return (
      <div>
        <div>
          <p>This counter shows the basic use of the useEffect hook</p>
          <button onClick={handleIncreaseClick}>Increase</button>
          <button onClick={handleDecreaseClick}>Decrease</button>
          <button onClick={handleColorClick}>Change Color</button>
          <h2 style={{color}}>{count}</h2>
        </div>
        <div>
          <h1> Please type some text and it will show up below</h1>
          <blockquote>
            { userText }
          </blockquote>
        </div>
      </div>
    );
  }

  //custom hook that can extend business logic across multiple components. Names must begin with 'use'
  function useKeyPress(startingValue) {
    const [userText, setUserText] = useState(startingValue)

    function handleUserKeyPress(event) {
      const { key, keyCode } = event
      if (keyCode === 32 || keyCode >= 65 && keyCode <= 90) {
        setUserText(`${userText}${key}`)
      }
    }

    //runs the function passed in everytime the component renders or re-renders. The return function clears everything setup on subsequent renders. The second argument (empty array) makes it so first function only runs on mounting and return function only runs on unmounting, not every render. If array is not empty, useEffect only runs when specified state value changes
    useEffect(() => {
      window.addEventListener('keydown', handleUserKeyPress)
      
      //must remove event listener or will continue to add them every re-render
      return () => {
        window.removeEventListener('keydown', handleUserKeyPress)
      }
    })

    return userText

  }

  export default ClickCounterUseEffect