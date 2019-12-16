import React, {useState, useContext, createContext} from 'react'
import './App.css'
import ClickCounter from './ClickCounter'
import ObjectState from './ObjectState'
import ComponentClass from './ComponentClass'
import ClickCounterUseEffect from './ClickCounterUseEffect'
import ContextButton from './ContextButton'

function App() {
  
  const NameContext = createContext()
  const [name, setName] = useState('John Smith')
  //setting up to conditionally render useEffect click counter to better see effects
  const [visible, setVisible] = useState(false)

  return (
    <NameContext.Provider value={name}>
      <div>
        <button onClick={()=>{setVisible(!visible)}}>
          Show/Hide useEffect Counter
        </button>
        {/* <ComponentClass />
        <ClickCounter />
        <ObjectState /> */}
        { visible && <ClickCounterUseEffect /> }
        <ContextButton />
      </div>
    </NameContext.Provider>
  );
}

export default App;
