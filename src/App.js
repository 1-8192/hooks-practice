import React, {useState} from 'react'
import './App.css'
import ClickCounter from './ClickCounter'
import ObjectState from './ObjectState'
import ComponentClass from './ComponentClass'
import ClickCounterUseEffect from './ClickCounterUseEffect'

function App() {

  //setting up to conditionally render useEffect click counter to better see effects
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <button onClick={()=>{setVisible(!visible)}}>
        Show/Hide useEffect Counter
      </button>
      {/* <ComponentClass />
      <ClickCounter />
      <ObjectState /> */}
      { visible && <ClickCounterUseEffect /> }
    </div>
  );
}

export default App;
